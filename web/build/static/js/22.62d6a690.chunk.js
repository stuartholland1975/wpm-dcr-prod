(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[22],{1214:function(e,t){},1215:function(e,t){},1216:function(e,t){},1217:function(e,t){},1218:function(e,t){},1256:function(e,t,n){"use strict";n.r(t),n.d(t,"GET_ORDER_DOCUMENTS",(function(){return de}));var a=n(49),r=n(67),c=n(717),i=n(306),o=n(1266),d=n(1267),l=n(1268),s=n(1269),u=n(310),b=n(0),j=n(1220),O=n(112),h=n(24),m=n(338),x=n(796),f=n(16),p=n(137),g=n(31),v=n(1243),D=n(1241),N=n(305),C=n(762),I=n(307),y=n(309),k=n(308),T=n(301),E=n(295),w=n(296),S=n(510),M=n(511),A=n(120),R=n.n(A),G=n(119),P=n.n(G),W=n(1219),$=n.n(W),q=n(1),F=Object(v.a)((function(e){return Object(D.a)({root:{margin:"auto"},cardHeader:{padding:2,boxShadow:"0px 4px 80px grey",backgroundColor:"hsl(222,37%,75%)"},list:{height:400,backgroundColor:"hsl(222,37%,89%)",overflow:"auto",marginTop:4},collapse:{"& .MuiCollapse-wrapperInner":{display:"flex",flexDirection:"column"}},button:{marginTop:10}})}));function U(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function H(e,t){return e.filter((function(e){return-1!==t.indexOf(e)}))}function L(e){var t=e.existing,n=e.options,a=F(),r=b.useState([]),c=Object(f.a)(r,2),i=c[0],l=c[1],s=b.useState(n),u=Object(f.a)(s,2),j=u[0],m=u[1],x=b.useState(t),p=Object(f.a)(x,2),v=p[0],D=p[1],A=H(i,j),G=H(i,v);b.useEffect((function(){Object(O.c)(Object(h.a)(Object(h.a)({},Object(O.c)()),{},{data:t}))}),[t]);var W=function(e){return function(){var t=i.indexOf(e),n=Object(g.a)(i);-1===t?n.push(e):n.splice(t,1),l(n)}},L=function(e){return H(i,e).length},z=function(e){return function(){var t,n;L(e)===e.length?l(U(i,e)):l((t=i,n=e,[].concat(Object(g.a)(t),Object(g.a)(U(n,t)))))}},Q=function(e,t,n){var r=b.useState(!0),c=Object(f.a)(r,2),l=c[0],s=c[1];return Object(q.jsxs)(o.a,{style:{display:"flex",flexDirection:"column"},component:N.a,children:[Object(q.jsx)(d.a,{className:a.cardHeader,avatar:Object(q.jsx)(C.a,{onClick:z(t),checked:L(t)===t.length&&0!==t.length,indeterminate:L(t)!==t.length&&0!==L(t),disabled:0===t.length,inputProps:{"aria-label":"all items selected"}}),title:e,subheader:"".concat(L(t),"/").concat(t.length," selected"),action:Object(q.jsx)(I.a,{onClick:function(){s(!l)},"aria-expanded":l,"aria-label":"show more",children:l?Object(q.jsx)(P.a,{}):Object(q.jsx)(R.a,{})})}),Object(q.jsxs)(y.a,{in:l,className:a.collapse,children:[Object(q.jsxs)(k.a,{className:a.list,dense:!0,component:"div",role:"list",children:[t.map((function(e){var t="transfer-list-all-item-".concat(e.title,"-label");return Object(q.jsxs)(T.a,{role:"listitem",button:!0,onClick:W(e),children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(C.a,{checked:-1!==i.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})}),Object(q.jsx)(w.a,{id:t,primary:e.title})]},e.id)})),Object(q.jsx)(T.a,{})]}),Object(q.jsx)(S.a,{variant:"outlined",style:{margin:12},onClick:function(e){return function(e,t,n){var a=Object(g.a)(t).sort((function(e,t){return e>t?1:-1}));"right"===n?D(a):m(a)}(0,t,n)},children:"Sort"})]})]})};return Object(q.jsxs)(M.a,{container:!0,spacing:2,children:[Object(q.jsx)(M.a,{item:!0,xs:5,children:Object(q.jsx)(N.a,{elevation:3,children:Q("Choices",j,"left")})}),Object(q.jsx)(M.a,{item:!0,xs:2,children:Object(q.jsxs)(M.a,{container:!0,direction:"column",alignItems:"center",children:[Object(q.jsx)(S.a,{variant:"outlined",size:"small",className:a.button,onClick:function(){D(v.concat(A)),Object(O.c)(Object(h.a)(Object(h.a)({},Object(O.c)()),{},{data:v.concat(A)})),m(U(j,A)),l(U(i,A))},disabled:0===A.length,"aria-label":"move selected right",children:">"}),Object(q.jsx)(S.a,{variant:"outlined",size:"small",className:a.button,onClick:function(){m(j.concat(G)),D(U(v,G)),Object(O.c)(Object(h.a)(Object(h.a)({},Object(O.c)()),{},{data:U(v,G)})),l(U(i,G))},disabled:0===G.length,"aria-label":"move selected left",children:"<"}),Object(q.jsx)(S.a,{variant:"outlined",size:"small",className:a.button,onClick:function(){D(j),Object(O.c)(Object(h.a)(Object(h.a)({},Object(O.c)()),{},{data:j})),m(v)},children:Object(q.jsx)($.a,{})})]})}),Object(q.jsx)(M.a,{item:!0,xs:5,children:Object(q.jsx)(N.a,{elevation:3,children:Q("Chosen",v,"right")})})]})}var z,Q,B,_=n(789),J=n(704),V=n(326),X=n(795),Y=Object(r.d)(z||(z=Object(a.a)(["\n    query GetUnattachedGlobalDocuments($existing: [Int!]) {\n        documents(\n            condition: { global: true }\n            filter: { id: { notIn: $existing } }\n        ) {\n            nodes {\n                id\n                title\n            }\n        }\n    }\n"]))),K=Object(r.d)(Q||(Q=Object(a.a)(["\n    mutation RemoveGlobalDocumentFromOrder(\n        $mnPatch: [OrderheaderDocumentPatch!]\n    ) {\n        mnDeleteOrderheaderDocument(input: { mnPatch: $mnPatch }) {\n            deletedOrderheaderDocumentNodeId\n        }\n    }\n"]))),Z=Object(r.d)(B||(B=Object(a.a)(["\n    mutation AttachGlobalDocument(\n        $mnOrderheaderDocument: [OrderheaderDocumentInput!]\n    ) {\n        mnCreateOrderheaderDocument(\n            input: { mnOrderheaderDocument: $mnOrderheaderDocument }\n        ) {\n            document {\n                createdAt\n                headerDocumentFile\n                global\n                id\n                title\n            }\n        }\n    }\n"]))),ee=function(e){var t=e.existing.filter((function(e){return e.global})),n=Object(O.b)().selectedOrder,a=Object(c.b)(Y,{variables:{existing:t.map((function(e){return e.id}))}}),r=a.data,i=a.loading,o=Object(_.a)(K,{refetchQueries:[{query:X.a,variables:{id:Number(n.id)}},{query:de,variables:{orderId:Number(n.id)}}],awaitRefetchQueries:!0}),d=Object(f.a)(o,1)[0],l=Object(_.a)(Z,{refetchQueries:[{query:X.a,variables:{id:n.id}},{query:de,variables:{orderId:n.id}}],awaitRefetchQueries:!0}),s=Object(f.a)(l,1)[0];return i?Object(q.jsx)(u.a,{}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(L,{existing:t,options:r.documents.nodes}),Object(q.jsx)(J.a,{label:"SAVE CHANGES",hideModal:e.hideModal,handleSubmit:function(){var a=Object(O.c)().data.map((function(e){return e.id})),r=t.map((function(e){return e.id})),c=Object(V.j)(r,a),i=Object(V.k)(r,a);if(i.length>0&&0===c.length){var o=i.map((function(e){return{orderheaderId:Number(n.id),documentId:Number(e)}}));d({variables:{mnPatch:o}}).then(e.hideModal())}else if(c.length>0&&0===i.length){var l=c.map((function(e){return{orderheaderId:n.id,documentId:Number(e)}}));s({variables:{mnOrderheaderDocument:l}}).then(e.hideModal())}else if(c.length>0&&i.length>0){var u=i.map((function(e){return{orderheaderId:Number(n.id),documentId:Number(e)}})),b=c.map((function(e){return{orderheaderId:Number(n.id),documentId:Number(e)}}));Promise.all([s({variables:{mnOrderheaderDocument:b}}),d({variables:{mnPatch:u}})]).then(e.hideModal())}}})]})},te=n(797),ne=n(383),ae=function(e){var t=Object(p.b)((function(){return Object(q.jsxs)(ne.a,{children:[Object(q.jsx)("h3",{children:"ATTACH GLOBAL DOCUMENT"}),Object(q.jsx)("hr",{}),Object(q.jsx)(ee,{hideModal:r,existing:e.data.orderheaderDocuments.nodes.map((function(e){return e.document}))})]})})),n=Object(f.a)(t,2),a=n[0],r=n[1];return Object(q.jsx)("div",{children:Object(q.jsx)(te.a,{label:"GLOBAL DOCUMENT ADMIN",onClick:a})})},re=["sx"];function ce(e){var t=e.sx,n=Object(m.a)(e,re);return Object(q.jsx)(i.a,Object(h.a)({sx:Object(h.a)({pt:1,pb:1,mt:1,mb:1,textAlign:"center"},t)},n))}var ie,oe=function(e){return Object(q.jsxs)(i.a,{sx:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",mb:2},children:[Object(q.jsx)(ce,{children:Object(q.jsx)(ae,{data:e.data})}),Object(q.jsx)(ce,{children:Object(q.jsx)(x.a,{label:"REMOVE EXISTING DOCUMENT"})})]})};j.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(j.c.version,"/pdf.worker.js");var de=Object(r.d)(ie||(ie=Object(a.a)(["\n\tquery GetOrderDocuments($orderId: Int!) {\n\t\torderheaderDocuments(filter: { orderheaderId: { equalTo: $orderId } }) {\n\t\t\tnodes {\n\t\t\t\tdocument {\n\t\t\t\t\tcreatedAt\n\t\t\t\t\theaderDocumentFile\n\t\t\t\t\tglobal\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t\ttotalCount\n\t\t}\n\t}\n"])));t.default=function(){var e=Object(c.b)(de,{variables:{orderId:Object(O.b)().selectedOrder.id}}),t=e.data;return e.loading?Object(q.jsx)(u.a,{}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(oe,{data:t}),Object(q.jsx)(i.a,{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",children:t.orderheaderDocuments.nodes.length>0?t.orderheaderDocuments.nodes.map((function(e){return function(e){return Object(q.jsx)(i.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",m:.5},spacing:2,children:Object(q.jsxs)(o.a,{sx:{bgcolor:"#d0ddea",height:510},children:[Object(q.jsx)(d.a,{title:e.document.title,titleTypographyProps:{color:"navy",fontSize:18}}),Object(q.jsx)(l.a,{href:"/documents/".concat(e.document.headerDocumentFile.id),target:"_blank",children:Object(q.jsx)(s.a,{children:Object(q.jsx)(j.a,{file:{url:"/documents/".concat(e.document.headerDocumentFile.id)},children:Object(q.jsx)(j.b,{pageNumber:1,width:300})})})})]})},e.document.id)}(e)})):Object(q.jsx)("div",{className:"no-data-message",children:"NO DOCUMENTS ARE CURRENTLY ASSOCIATED WITH THIS ORDER"})})]})}},383:function(e,t,n){"use strict";var a=n(24),r=(n(0),n(479)),c=n.n(r),i=n(1);t.a=function(e){return Object(i.jsx)(c.a,Object(a.a)({className:"Modal",overlayClassName:"Overlay",isOpen:!0,appElement:document.getElementById("root")},e))}},704:function(e,t,n){"use strict";var a=n(24),r=n(338),c=n(510),i=n(306),o=(n(0),n(1)),d=["sx"];function l(e){var t=e.sx,n=Object(r.a)(e,d);return Object(o.jsx)(i.a,Object(a.a)({sx:Object(a.a)({pt:1,pb:1,m:1},t)},n))}t.a=function(e){var t=e.hideModal;return Object(o.jsxs)(i.a,{className:"button-footer",sx:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",m:2},children:[Object(o.jsx)(l,{children:Object(o.jsx)(c.a,{color:"submit",fullWidth:!0,type:"submit",children:"submit"})}),Object(o.jsx)(l,{children:Object(o.jsx)(c.a,{color:"cancel",fullWidth:!0,onClick:t,children:"close"})})]})}},796:function(e,t,n){"use strict";var a=n(24),r=(n(0),n(510)),c=n(1243),i=n(507),o=n.n(i),d=n(1),l=Object(c.a)({root:{background:"linear-gradient(#b8142d, #730d1c)",color:"white",borderRadius:0,fontWeight:600,textTransform:"uppercase",border:"5px solid",borderColor:"white",padding:2,"&:hover":{background:"linear-gradient(#730d1c, #b8142d)"},"&:disabled":{cursor:"not-allowed"}}});t.a=function(e){var t=l();return Object(d.jsx)(r.a,Object(a.a)(Object(a.a)({variant:"contained",className:t.root,startIcon:Object(d.jsx)(o.a,{}),fullWidth:!0},e),{},{children:e.label}))}},797:function(e,t,n){"use strict";var a=n(24),r=(n(0),n(510)),c=n(1243),i=n(1),o=Object(c.a)({root:{background:"linear-gradient(hsl(209, 47%, 40%), hsl(209, 47%, 20%))",color:"white",borderRadius:0,fontWeight:600,border:"5px solid",borderColor:"white",padding:2,textTransform:"uppercase","&:hover":{background:"linear-gradient(hsl(209, 47%, 20%), hsl(209, 47%, 40%))"},"&:disabled":{cursor:"not-allowed"}}});t.a=function(e){var t=o();return Object(i.jsx)(r.a,Object(a.a)(Object(a.a)({variant:"contained",className:t.root,fullWidth:!0},e),{},{children:e.label}))}},931:function(e,t){}}]);
//# sourceMappingURL=22.62d6a690.chunk.js.map