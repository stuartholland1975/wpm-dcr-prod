/** @format */
const sharp = require('sharp');
const PgManyToManyPlugin = require('@graphile-contrib/pg-many-to-many');
const express = require('express');
const { postgraphile } = require('postgraphile');
const SimplifyInflectionsPlugin = require('@graphile-contrib/pg-simplify-inflector');
const PgAggregatesPlugin = require('@graphile/pg-aggregates').default;
require('dotenv').config();
const PgConnectionFilterPlugin = require('postgraphile-plugin-connection-filter');
const PostGraphileNestedMutations = require('postgraphile-plugin-nested-mutations');
const path = require('path');
const PostGraphileUploadFieldPlugin = require('postgraphile-plugin-upload-field');
const { graphqlUploadExpress } = require('graphql-upload');
const fs = require('fs');
const {
	addFakeUniqueConstraintFromIndex,
} = require('postgraphile-index-to-unique-constraint-plugin');
const PgOrderByRelatedPlugin = require('@graphile-contrib/pg-order-by-related');
const PgOrderByMultiColumnIndexPlugin = require('@graphile-contrib/pg-order-by-multi-column-index');
const {
	postgraphilePolyRelationCorePlugin,
} = require('postgraphile-polymorphic-relation-plugin');
const cors = require('cors');
//const PassportLoginPlugin = require('./PassportLoginPlugin');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const { auth } = require('express-openid-connect');
//const DOCUMENTS_UPLOAD_DIR_NAME = "/var/www/html/documents";
const DOCUMENTS_UPLOAD_DIR_NAME = path.join(__dirname, 'media/documents');
//const IMAGES_UPLOAD_DIR_NAME = "/var/www/html/images";
const IMAGES_UPLOAD_DIR_NAME = path.join(__dirname, 'media/images/original');
const RESIZED_IMAGES_UPLOAD_DIR_NAME = path.join(
	__dirname,
	'media/images/resized',
);
const THUMBNAIL_IMAGES_UPLOAD_DIR_NAME = path.join(
	__dirname,
	'media/images/thumbnails',
);
//const REPORTS_UPLOAD_DIR_NAME = "/var/www/html/reports";
const REPORTS_UPLOAD_DIR_NAME = path.join(__dirname, 'media/reports');

const config = {
	authRequired: false,
	auth0Logout: true,
	secret: 'a long, randomly-generated string stored in env',
	baseURL: 'https://workpm.ddns.net',
	clientID: '06DLikEjI3eXsK1fP2pfEnpypRSz2XGp',
	issuerBaseURL: 'https://dev-xw5nv1fz.eu.auth0.com',
};

const checkJwt = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://workpm.ddns.net`,
	}),
	// audience: "YOUR_API_IDENTIFIER",
	//  issuer: `https://YOUR_DOMAIN/`,
	algorithms: ['RS256'],
});

const postGraphOptions = {
	watchPg: true,
	enableQueryBatching: true,
	graphiql: true,
	dynamicJson: true,
	enhanceGraphiql: true,
	allowExplain: true,
	showErrorStack: true,
	extendedErrors: [
		'severity',
		'code',
		'detail',
		'hint',
		'position',
		'internalPosition',
		'internalQuery',
		'where',
		'schema',
		'table',
		'column',
		'dataType',
		'constraint',
		'file',
		'line',
		'routine',
	],
	exportGqlSchemaPath: 'schema.graphql',
	appendPlugins: [
		SimplifyInflectionsPlugin,
		PgConnectionFilterPlugin,
		PgOrderByMultiColumnIndexPlugin,
		PgAggregatesPlugin,
		// PostGraphileNestedMutations,
		PostGraphileUploadFieldPlugin,
		//postgraphilePolyRelationCorePlugin,
		addFakeUniqueConstraintFromIndex,
		PgManyToManyPlugin,
		require('postgraphile-plugin-many-create-update-delete').default,
		PgOrderByRelatedPlugin,
	],
	graphileBuildOptions: {
		connectionFilterRelations: true,
		//  nestedMutationsSimpleFieldNames: true,
		connectionFilterPolymorphicForward: true,
		connectionFilterPolymorphicBackward: true,
		orderByRelatedColumnAggregates: true,
		uploadFieldDefinitions: [
			{
				match: ({ column }) => column === 'header_document_file',
				resolve: resolveDocumentUpload,
			},
			{
				match: ({ column }) => column === 'header_image_file',
				resolve: processImage,
			},
			{
				match: ({ column }) => column === 'header_report_file',
				resolve: resolveReportUpload,
			},
		],
	},
};
// const { DATABASE, PG_USER, PASSWORD, HOST, PGPORT, SCHEMA, PORT, CL } =
// 	process.env;

const { PORT } = process.env;

const middleware = postgraphile(
	// {
	// database: PG_DATABASE,
	// user: PG_USER,
	// password: PG_PASSWORD,
	// host: HOST,
	// port: PG_PORT,
	//	checkJwt,
	// },
	// 'postgres://postgres:987jmo00@db:9432/wpm_live',
	'postgres://postgres:987jmo00@192.168.0.20:9432/wpm_live',
	'wpm_graphql',
	postGraphOptions,
);

const corsOptions = {
	origin: '*',
	credentials: true, // <-- REQUIRED backend setting
};

const app = express();

app.use(express.json({ limit: '100mb', extended: true }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'media')));
app.use(middleware, express.json({ limit: '100mb', extended: true }));

const server = app.listen(PORT, () => {
	const address = server.address();
	console.log(`Postgraphile Listening on  ${address.port}`);
});

async function resolveDocumentUpload(upload) {
	console.log(upload);
	const { filename, mimetype, encoding, createReadStream } = upload;
	const stream = createReadStream();
	const { id, path } = await saveDocument({ stream, filename });
	return {
		id,
		path,
		filename,
		mimetype,
		encoding,
	};
}

async function resolveReportUpload(upload) {
	const { name, mimetype, encoding, createReadStream } = upload;
	const stream = createReadStream();

	const { id, path } = await saveReport({ stream, name });
	return {
		id,
		path,
		name,
		mimetype,
		encoding,
	};
}

function saveDocument({ stream, filename }) {
	const timestamp = new Date().toISOString().replace(/\D/g, '');
	const id = `${timestamp}_${filename}`;
	const filepath = path.join(DOCUMENTS_UPLOAD_DIR_NAME, id);
	console.log(timestamp, id, filepath);
	return new Promise((resolve, reject) =>
		stream
			.on('error', (error) => {
				console.log(error);
				if (stream.truncated)
					// Delete the truncated file
					fs.unlinkSync(filepath);
				reject(error);
			})
			.on('end', () => resolve({ id, filepath }))
			.pipe(fs.createWriteStream(filepath)),
	);
}

async function processImage(upload) {
	console.log(upload);
	const { filename, mimetype, encoding, createReadStream } = upload;
	const stream = createReadStream();
	const timestamp = new Date().toISOString().replace(/\D/g, '');
	const id = `${timestamp}_${filename}`;
	const thumbnailFilepath = path.join(THUMBNAIL_IMAGES_UPLOAD_DIR_NAME, id);
	const resizedFilepath = path.join(RESIZED_IMAGES_UPLOAD_DIR_NAME, id);
	const originalFilepath = path.join(IMAGES_UPLOAD_DIR_NAME, id);
	const transformThumbnail = sharp().rotate().resize(720);
	const transformResize = sharp().rotate().resize(1920);
	try {
		const tn = await stream.pipe(transformThumbnail);
		const rs = await stream.pipe(transformResize);
		await stream.pipe(fs.createWriteStream(originalFilepath));
		rs.pipe(fs.createWriteStream(resizedFilepath));
		tn.pipe(fs.createWriteStream(thumbnailFilepath));
	} catch (e) {
		if (stream.truncated) {
			fs.unlinkSync(thumbnailFilepath);
			console.log(e);
		}
	} finally {
		return {
			id,
			originalFilepath,
			filename,
			mimetype,
			encoding,
		};
	}
}

function saveReport({ stream, filename }) {
	const timestamp = new Date().toISOString().replace(/\D/g, '');
	const id = `${timestamp}_${filename}`;
	const filepath = path.join(REPORTS_UPLOAD_DIR_NAME, id);

	return new Promise((resolve, reject) =>
		stream
			.on('error', (error) => {
				if (stream.truncated)
					// Delete the truncated file
					fs.unlinkSync(filepath);
				reject(error);
			})
			.on('end', () => resolve({ id, filepath }))
			.pipe(fs.createWriteStream(filepath)),
	);
}
