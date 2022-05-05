
FROM node:16-alpine

WORKDIR /home/app

COPY package.json ./

ENV PORT=9433


RUN yarn install

COPY . .

EXPOSE 9433

CMD [ "yarn", "server" ]