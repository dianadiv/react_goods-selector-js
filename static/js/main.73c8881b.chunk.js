(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(3),s=c.n(n),a=c(5),o=(c(10),c(4)),i=c.n(o),l=(c(11),c(1)),r=c(0),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=function(){var t=Object(l.useState)("Jam"),e=Object(a.a)(t,2),c=e[0],n=e[1];function s(t){n(c===t?null:t)}return Object(r.jsxs)("main",{className:"section container",children:[Object(r.jsx)("h1",{className:"title is-flex is-align-items-center",children:c?Object(r.jsxs)(r.Fragment,{children:["".concat(c," is selected"),Object(r.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){n("")}})]}):"No goods selected"}),Object(r.jsx)("table",{className:"table",children:Object(r.jsx)("tbody",{children:d.map((function(t){return Object(r.jsxs)("tr",{"data-cy":"Good",className:i()({"has-background-success-light":c===t}),children:[Object(r.jsx)("td",{children:c===t?Object(r.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return s(t)},children:"-"}):Object(r.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return s(t)},children:"+"})}),Object(r.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})};s.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.73c8881b.chunk.js.map