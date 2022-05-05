(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[28],{1253:function(e,t,r){"use strict";r.r(t);var n,a,c,o=r(306),i=r(511),s=r(0),l=r.n(s),j=r(24),u=r(16),d=r(49),b=r(67),O=r(717),f=r(326),h=r(310),x=r(780),p=r(781),m=r(786),y=r(678),V=r(355),C=r(679),E=r(716),v=r(714),T=r(1),A=Object(b.d)(n||(n=Object(d.a)(["\nquery GetApplicationData {\n  applicationWithValues(orderBy: APPLICATION_NUMBER_ASC, last: 10) {\n    nodes {\n      applicationValue\n      applicationNumber\n      applicationReference\n    }\n  }\n}\n"]))),R=function(){var e=l.a.useState([]),t=Object(u.a)(e,2),r=t[0],n=t[1];return Object(O.b)(A,{onCompleted:function(e){return n((function(){return e.applicationWithValues.nodes.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{applicationValue:Number(e.applicationValue)})}))}))}}).loading?Object(T.jsx)(h.a,{}):Object(T.jsxs)("div",{style:{borderStyle:"solid",borderWidth:"1px",background:"#f2f2f2"},children:[Object(T.jsx)("h3",{style:{textDecoration:"underline"},children:"APPLIED VALUE BY APPLICATION"}),Object(T.jsx)(x.a,{width:"100%",height:400,children:Object(T.jsxs)(p.a,{data:r,margin:{top:5,right:10,left:10,bottom:25},children:[Object(T.jsx)(m.a,{strokeDasharray:"3 3"}),Object(T.jsx)(y.a,{dataKey:"applicationNumber",children:Object(T.jsx)(V.a,{value:"APPLICATION NUMBER",offset:0,position:"bottom"})}),Object(T.jsx)(C.a,{tickFormatter:function(e){return Object(f.f)(e)},allowDataOverflow:!0}),Object(T.jsx)(E.a,{formatter:function(e,t){return[Object(f.f)(e),"Application Value"]}}),Object(T.jsx)(v.a,{dataKey:"applicationValue",fill:"#003300"})]})})]})},D=Object(b.d)(a||(a=Object(d.a)(["\nquery GetAreaData {\n  areaWithValues {\n    nodes {\n      areaId\n      areaDescription\n      valueComplete\n    }\n  }\n}\n"]))),k=function(){var e=l.a.useState([]),t=Object(u.a)(e,2),r=t[0],n=t[1];return Object(O.b)(D,{fetchPolicy:"network-only",onCompleted:function(e){return n((function(){return e.areaWithValues.nodes.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{valueComplete:Number(e.valueComplete)})}))}))}}).loading?Object(T.jsx)(h.a,{}):Object(T.jsxs)("div",{style:{borderStyle:"solid",borderWidth:"1px",background:"#f2f2f2"},children:[Object(T.jsx)("h3",{style:{textDecoration:"underline"},children:"VALUE COMPLETE BY AREA"}),Object(T.jsx)(x.a,{width:"100%",height:400,children:Object(T.jsxs)(p.a,{data:r,margin:{top:5,right:10,left:10,bottom:25},children:[Object(T.jsx)(m.a,{strokeDasharray:"3 3"}),Object(T.jsx)(y.a,{dataKey:"areaDescription",children:Object(T.jsx)(V.a,{value:"AREA",offset:0,position:"bottom"})}),Object(T.jsx)(C.a,{tickFormatter:function(e){return Object(f.f)(e)},allowDataOverflow:!0}),Object(T.jsx)(E.a,{formatter:function(e,t){return[Object(f.f)(e),"Area Value"]}}),Object(T.jsx)(v.a,{dataKey:"valueComplete",fill:"darkred"})]})})]})},g=r(338),N=r(109),P=["sx"],L=Object(b.d)(c||(c=Object(d.a)(["\n    query GetDashboardStats {\n        contractDashboards {\n            nodes {\n                averagePeriodValue\n                contractTotalValueApplied\n                contractTotalValueToApply\n                contractTotalValueTodo\n                currentWeek\n                currentYear\n                totalContractOrderValue\n                totalContractValueComplete\n                totalOrdersReceived\n            }\n        }\n    }\n"])));function S(e){var t=e.sx,r=Object(g.a)(e,P);return Object(T.jsx)(o.a,Object(j.a)({sx:Object(j.a)({bgcolor:"#b4cce4",p:2,ml:.25,mr:.25,flexGrow:1,borderWidth:2,borderStyle:"solid"},t)},r))}var w,U,I,W=function(){var e=Object(O.b)(L),t=e.data;return e.loading?Object(T.jsx)(h.a,{}):Object(T.jsxs)(o.a,{sx:{display:"flex",ml:.5,mr:.5,mb:3,mt:3},children:[Object(T.jsxs)(S,{children:[Object(T.jsx)(N.a,{children:"CONTRACT CURRENT YEAR"}),Object(T.jsx)(N.a,{children:t.contractDashboards.nodes[0].currentYear})]}),Object(T.jsxs)(S,{children:[Object(T.jsx)(N.a,{children:"CONTRACT CURRENT WEEK"}),Object(T.jsx)(N.a,{children:t.contractDashboards.nodes[0].currentWeek})]}),Object(T.jsxs)(S,{children:[Object(T.jsx)(N.a,{children:"CONTRACT ORDERS RECEIVED"}),Object(T.jsx)(N.a,{children:Object(f.f)(t.contractDashboards.nodes[0].totalOrdersReceived)})]}),Object(T.jsxs)(S,{children:[Object(T.jsx)(N.a,{children:"CONTRACT ORDER VALUE"}),Object(T.jsx)(N.a,{children:Object(f.f)(t.contractDashboards.nodes[0].totalContractOrderValue)})]}),Object(T.jsxs)(S,{children:[Object(T.jsx)(N.a,{children:"CONTRACT COMPLETE VALUE"}),Object(T.jsx)(N.a,{children:Object(f.f)(t.contractDashboards.nodes[0].totalContractValueComplete)})]}),Object(T.jsxs)(S,{children:[Object(T.jsx)(N.a,{children:"CONTRACT TODO VALUE"}),Object(T.jsx)(N.a,{children:Object(f.f)(t.contractDashboards.nodes[0].contractTotalValueTodo)})]}),Object(T.jsxs)(S,{children:[Object(T.jsx)(N.a,{children:"CONTRACT APPLIED VALUE"}),Object(T.jsx)(N.a,{children:Object(f.f)(t.contractDashboards.nodes[0].contractTotalValueApplied)})]}),Object(T.jsxs)(S,{children:[Object(T.jsx)(N.a,{children:"CONTRACT TO APPLY VALUE"}),Object(T.jsx)(N.a,{children:Object(f.f)(t.contractDashboards.nodes[0].contractTotalValueToApply)})]}),Object(T.jsxs)(S,{children:[Object(T.jsx)(N.a,{children:"AVERAGE PERIOD VALUE"}),Object(T.jsx)(N.a,{children:Object(f.f)(t.contractDashboards.nodes[0].averagePeriodValue)})]})]})},B=r(676),K=Object(b.d)(w||(w=Object(d.a)(['\nquery GetOrderValues {\n  orderheaderWithValues(filter: {orderValueTotal: {greaterThan: "0"}} orderBy: ORDER_NUMBER_ASC) {\n    nodes {\n      orderNumber\n      orderValueTotalComplete\n      orderValueTotal\n    }\n  }\n}\n']))),F=function(){var e=l.a.useState([]),t=Object(u.a)(e,2),r=t[0],n=t[1];return Object(O.b)(K,{onCompleted:function(e){return n(e.orderheaderWithValues.nodes.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{"Value Outstanding":Number(e.orderValueTotal)-Number(e.orderValueTotalComplete),"Value Complete":Number(e.orderValueTotalComplete),orderValueTotal:Object(f.f)(e.orderValueTotal)})})))}}).loading?Object(T.jsx)(h.a,{}):Object(T.jsxs)("div",{style:{borderStyle:"solid",borderWidth:"1px",background:"#f2f2f2"},children:[Object(T.jsx)("h3",{style:{textDecoration:"underline"},children:"ORDER VALUE BY ORDER NUMBER"}),Object(T.jsx)(x.a,{width:"100%",height:400,children:Object(T.jsxs)(p.a,{data:r,margin:{top:5,right:10,left:10,bottom:25},children:[Object(T.jsx)(m.a,{strokeDasharray:"3 3"}),Object(T.jsx)(y.a,{dataKey:"orderNumber",children:Object(T.jsx)(V.a,{value:"ORDER NUMBER",offset:0,position:"bottom"})}),Object(T.jsx)(C.a,{tickFormatter:function(e){return Object(f.f)(e)},allowDataOverflow:!1}),Object(T.jsx)(E.a,{formatter:function(e){return Object(f.f)(e)}}),Object(T.jsx)(v.a,{dataKey:"Value Complete",fill:"#00004d",stackId:"a"}),Object(T.jsx)(v.a,{dataKey:"Value Outstanding",fill:"#4d4d4d",stackId:"a",children:Object(T.jsx)(B.a,{dataKey:"orderValueTotal",position:"top"})})]})})]})},M=Object(b.d)(U||(U=Object(d.a)(["\nquery GetSupervisorData {\n  supervisorsWithValues {\n    nodes {\n      supervisorName\n      valueComplete\n    }\n  }\n}\n\n"]))),G=function(){var e=l.a.useState([]),t=Object(u.a)(e,2),r=t[0],n=t[1];return Object(O.b)(M,{onCompleted:function(e){return n((function(){return e.supervisorsWithValues.nodes.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{valueComplete:Number(e.valueComplete)})}))}))}}).loading?Object(T.jsx)(h.a,{}):Object(T.jsxs)("div",{style:{borderStyle:"solid",borderWidth:"1px",background:"#f2f2f2"},children:[Object(T.jsx)("h3",{style:{textDecoration:"underline"},children:"SUPERVSIOR VALUES"}),Object(T.jsx)(x.a,{width:"100%",height:400,children:Object(T.jsxs)(p.a,{data:r,margin:{top:5,right:10,left:10,bottom:25},children:[Object(T.jsx)(m.a,{strokeDasharray:"3 3"}),Object(T.jsx)(y.a,{dataKey:"supervisorName",children:Object(T.jsx)(V.a,{value:"SUPERVISOR",offset:0,position:"bottom"})}),Object(T.jsx)(C.a,{tickFormatter:function(e){return Object(f.f)(e)},allowDataOverflow:!0}),Object(T.jsx)(E.a,{formatter:function(e,t){return[Object(f.f)(e),"Supervisor Value"]}}),Object(T.jsx)(v.a,{dataKey:"valueComplete",fill:"#26004d"})]})})]})},Y=Object(b.d)(I||(I=Object(d.a)(['\n    query GetPeriodValues {\n        periodWithValues(filter: {worksValueCurrent: {greaterThan: "0"}}\n            last: 10\n            orderBy: PERIOD_NUMBER_ASC) {\n            nodes {\n                periodNumber\n                worksValueCurrent\n            }\n        }\n    }\n'])));function _(e){return Object(T.jsx)(x.a,{width:"100%",height:400,children:Object(T.jsxs)(p.a,{data:e.data,margin:{top:5,right:10,left:10,bottom:25},children:[Object(T.jsx)(m.a,{strokeDasharray:"3 3"}),Object(T.jsx)(y.a,{dataKey:"periodNumber",children:Object(T.jsx)(V.a,{value:"PERIOD NUMBER",offset:0,position:"bottom"})}),Object(T.jsx)(C.a,{tickFormatter:e.tickFormatter}),Object(T.jsx)(E.a,{formatter:e.formatter}),Object(T.jsx)(v.a,{dataKey:"worksValueCurrent",fill:"#4d004d"})]})})}var q=function(){var e=l.a.useState([]),t=Object(u.a)(e,2),r=t[0],n=t[1];return Object(O.b)(Y,{onCompleted:function(e){return n((function(){return e.periodWithValues.nodes.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{worksValueCurrent:Number(e.worksValueCurrent)})}))}))}}).loading?Object(T.jsx)(h.a,{}):Object(T.jsxs)("div",{style:{borderStyle:"solid",borderWidth:"1px",background:"#f2f2f2"},children:[Object(T.jsx)("h3",{style:{textDecoration:"underline"},children:"VALUE COMPLETE BY PERIOD"}),Object(T.jsx)(_,{data:r,tickFormatter:function(e){return Object(f.f)(e)},formatter:function(e,t){return[Object(f.f)(e),"Period Value"]}})]})};t.default=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(W,{}),Object(T.jsx)(o.a,{sx:{display:"flex",ml:1,mr:1},children:Object(T.jsxs)(i.a,{container:!0,spacing:2,mt:1,children:[Object(T.jsx)(i.a,{item:!0,xs:3,children:Object(T.jsx)(q,{})}),Object(T.jsx)(i.a,{item:!0,xs:3,children:Object(T.jsx)(F,{})}),Object(T.jsx)(i.a,{item:!0,xs:3,children:Object(T.jsx)(R,{})}),Object(T.jsx)(i.a,{item:!0,xs:3,children:Object(T.jsx)(k,{})}),Object(T.jsx)(i.a,{item:!0,xs:3,children:Object(T.jsx)(G,{})})]})})]})}},326:function(e,t,r){"use strict";r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return j})),r.d(t,"f",(function(){return u})),r.d(t,"g",(function(){return d})),r.d(t,"c",(function(){return b})),r.d(t,"b",(function(){return O})),r.d(t,"j",(function(){return f})),r.d(t,"k",(function(){return h})),r.d(t,"i",(function(){return x})),r.d(t,"h",(function(){return p})),r.d(t,"a",(function(){return y})),r.d(t,"l",(function(){return V}));var n=r(11),a=r(16),c=r(31),o=r(382),i=r(419),s=r.n(i),l=function(e){return s()(e.value).format("0,0")},j=function(e){return s()(e.value).format("0,0.00")},u=function(e){return s()(e).format("0,0")},d=function(e){return s()(e).format("0,0.00")},b=function(e){return o.DateTime.fromISO(e.value).toFormat("dd/LL/y")},O=function(e){return o.DateTime.fromISO(e).toFormat("dd/LL/y")},f=function(e,t){return[].concat(Object(c.a)(e),Object(c.a)(t)).filter((function(r){return!e.includes(r)&&t.includes(r)}))},h=function(e,t){return[].concat(Object(c.a)(e),Object(c.a)(t)).filter((function(r){return e.includes(r)&&!t.includes(r)}))},x=function(e){return"1"===e.key||"2"===e.key||"3"===e.key||"4"===e.key||"5"===e.key||"6"===e.key||"7"===e.key||"8"===e.key||"9"===e.key||"0"===e.key||"."===e.key},p=function(e){return e.split(" ").map((function(e){return e[0]})).join("")},m=function e(t){return function(r){return Object.fromEntries(Object.entries(r).map((function(r){var n=Object(a.a)(r,2),c=n[0],o=n[1];return[t(c),Array.isArray(o)?o.map(e(t)):"object"==typeof o?e(t)(o):o]})))}};m((function(e){return e.replace(/_(.)/g,(function(e,t){return t.toUpperCase()}))})),m((function(e){return e.replace(/_(.)/g,(function(e,t){return t.toLowerCase()}))}));function y(e,t){return 0===t||isNaN(t)?null:e/t}function V(e,t){var r=Object.keys(e).map((function(r){var a=t[r]||r;return Object(n.a)({},a,e[r])}));return Object.assign.apply(Object,[{}].concat(Object(c.a)(r)))}}}]);
//# sourceMappingURL=28.4bbb383b.chunk.js.map