(this["webpackJsonpclass-26-solution"]=this["webpackJsonpclass-26-solution"]||[]).push([[0],{54:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c=n(18),r=n(19),a=n(24),s=n(23),i=n(2),j=n.n(i),o=n(20),u=n.n(o),l=n(21),d=n(4),b=n(8),O=n.n(b),h=n(22),p=n.n(h),x=(n(54),n(0));var f=function(){return Object(x.jsx)("header",{children:Object(x.jsx)("h1",{children:"RESTy"})})};var v=function(){return Object(x.jsx)("footer",{children:"\xa9 2018"})};n(56);var m=function(e){var t=Object(i.useState)(""),n=Object(d.a)(t,2),c=n[0],r=n[1],a=Object(i.useState)(""),s=Object(d.a)(a,2),j=s[0],o=s[1],u=function(e){e.preventDefault(),r(e.target.id.toUpperCase())};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o(t.target.value);var n={method:c,url:j};e.handleApiCall(n),console.log(n)},id:"api-form",children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"URL: "}),Object(x.jsx)("input",{onChange:function(e){e.preventDefault(),o(e.target.value)},name:"url",type:"text"}),Object(x.jsx)("button",{type:"submit",children:"GO!"})]}),Object(x.jsxs)("label",{className:"methods",children:[Object(x.jsx)("span",{onClick:u,id:"get",children:"GET"}),Object(x.jsx)("span",{onClick:u,id:"post",children:"POST"}),Object(x.jsx)("span",{onClick:u,id:"put",children:"PUT"}),Object(x.jsx)("span",{onClick:u,id:"delete",children:"DELETE"})]}),Object(x.jsx)("textarea",{name:"JSONobj",placeholder:"Enter your PUT/POST request body here"})]})})};var g=function(e){return Object(x.jsx)("section",{children:Object(x.jsx)("pre",{children:e.data?JSON.stringify(e.data,void 0,2):Object(x.jsx)("p",{children:"loading"})})})};var y=function(){var e=Object(i.useState)({}),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)({}),a=Object(d.a)(r,2),s=a[0],o=a[1],u=function(){var e=Object(l.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(t.url);case 2:n=e.sent,o(t),c({headers:n.headers,count:n.data.count,results:n.data.results}),console.log(n.headers);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(j.a.Fragment,{children:[Object(x.jsx)(f,{}),Object(x.jsxs)("div",{children:["Request Method: ",s.method]}),Object(x.jsxs)("div",{children:["URL: ",s.url]}),Object(x.jsx)(m,{handleApiCall:u}),Object(x.jsx)(g,{data:n}),Object(x.jsx)(v,{})]})},S=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(x.jsx)(y,{})}}]),n}(j.a.Component),C=document.getElementById("root");u.a.render(Object(x.jsx)(S,{}),C)}},[[57,1,2]]]);
//# sourceMappingURL=main.603b5822.chunk.js.map