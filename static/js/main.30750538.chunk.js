(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var o=c(3),s=c.n(o),n=c(4),a=c(5),d=c(7),r=c(6),l=c(1),i=(c(12),c(13),c(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(d.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(n.a)(this,c);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam"},e.addSelectedGood=function(t){e.setState({selectedGood:t})},e.removeSelectedGood=function(){e.setState({selectedGood:""})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(i.jsxs)("main",{className:"section container",children:[Object(i.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[t?"".concat(t," is selected"):"No goods selected",t&&Object(i.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.removeSelectedGood})]}),Object(i.jsx)("table",{className:"table",children:Object(i.jsx)("tbody",{children:u.map((function(c){var o=t===c;return Object(i.jsxs)("tr",{"data-cy":"Good",className:o?"has-background-success-light":"",children:[Object(i.jsx)("td",{children:o?Object(i.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.removeSelectedGood,children:"+"}):Object(i.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.addSelectedGood(c)},children:"-"})}),Object(i.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]})}))})})]})}}]),c}(l.Component);s.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.30750538.chunk.js.map