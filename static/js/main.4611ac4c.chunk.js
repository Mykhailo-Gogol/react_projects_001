/*! For license information please see main.4611ac4c.chunk.js.LICENSE.txt */
(this.webpackJsonpreact_projects_001=this.webpackJsonpreact_projects_001||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(7),a=n.n(s),i=(n(12),n(6)),o=n(4),u=(n(13),n(14),n(0)),j=function(e){var t=e.avatar,n=e.name,r=e.email,s=e.age,a=Object(c.useState)(!1),i=Object(o.a)(a,2),j=i[0],l=i[1];return Object(u.jsxs)("div",{className:"contact-card",children:[Object(u.jsx)("img",{src:t,alt:"profile"}),Object(u.jsxs)("div",{className:"user-details",children:[Object(u.jsxs)("p",{children:["Name: ",n]}),Object(u.jsxs)("p",{children:["Email: ",r]}),Object(u.jsx)("button",{onClick:function(){return l(!j)},children:"Toggle Age"}),j&&Object(u.jsxs)("p",{children:["Age: ",s]})]})]})},l=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("https://randomuser.me/api/?results=3").then((function(e){return e.json()})).then((function(e){r(e.results)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:function(){fetch("https://randomuser.me/api/?results=3").then((function(e){return e.json()})).then((function(e){var t=[].concat(Object(i.a)(n),Object(i.a)(e.results));r(t)}))},children:"More contacts"}),n.map((function(e){return Object(u.jsx)(j,{avatar:e.picture.large,name:e.name.first+" "+e.name.last,email:e.email,age:e.dob.age})}))]})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4611ac4c.chunk.js.map