(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[29],{1234:function(e,n,t){"use strict";t.r(n);var a,i=t(49),r=(t(0),t(67)),c=t(715),l=t(22),s=t(308),o=t(729),d=t(1),h=Object(r.d)(a||(a=Object(i.a)(["\n    query GetOrderImages($id: Int!) {\n        imageDetails(filter: { orderheaderId: { equalTo: $id } }) {\n            totalCount\n            nodes {\n                headerImageFile\n                id\n                longName\n                shortName\n                reference\n                worksheetReference\n                dateTakenManual\n                exifDate\n            }\n        }\n    }\n"])));n.default=function(){var e=Object(l.f)(),n=Object(c.a)(h,{variables:{id:Number(e.location.state)},fetchPolicy:"cache-and-network"}),t=n.data,a=n.loading;return a?Object(d.jsx)(s.a,{}):Object(d.jsx)(o.a,{data:t&&t,loading:a})}},729:function(e,n,t){"use strict";t(0);var a=t(730),i=t.n(a),r=t(324),c=t(1);n.a=function(e){var n,t,a=null===(n=e.data)||void 0===n||null===(t=n.imageDetails)||void 0===t?void 0:t.nodes.map((function(n){return{original:"/images/resized/".concat(n.headerImageFile.id),thumbnail:"/images/thumbnails/".concat(n.headerImageFile.id),originalHeight:e.height?e.height:800,description:Object(c.jsxs)("div",{style:{textAlign:"left"},children:[Object(c.jsxs)("p",{children:["WORKSHEET: ",n.worksheetReference]}),Object(c.jsx)("p",{children:n.longName}),Object(c.jsx)("p",{children:n.exifDate?Object(r.b)(n.exifDate):Object(r.b)(n.dateTakenManual)})]})}}));return Object(c.jsx)("div",{style:{marginTop:"50px"},children:a.length>0?Object(c.jsx)(i.a,{items:a,thumbnailPosition:"bottom",onClick:function(e){return window.open(e.target.currentSrc.replace("resized","original"),"_blank")},lazyLoad:!0,showThumbnails:!0}):Object(c.jsx)("div",{className:"no-data-message",children:"NO IMAGES ARE AVAILABLE"})})}}}]);
//# sourceMappingURL=29.5665faeb.chunk.js.map