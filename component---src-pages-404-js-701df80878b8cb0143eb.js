(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(147),o=n(150);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(t,e,n){var a;t.exports=(a=n(149))&&a.default||a},146:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),s=n.n(c);n.d(e,"a",function(){return s.a});n(145);var u=r.a.createContext({}),l=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(t,e,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(146),u=(n(152),function(t){var e=t.children;return i.a.createElement(s.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{class:"max-w-2xl mx-auto font-sans"},i.a.createElement("div",{class:"px-4"},i.a.createElement("main",null,e))))},data:a})});u.propTypes={children:c.a.node.isRequired},e.a=u},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Connecticut Digital Service"}}}}},149:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(56),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},150:function(t,e,n){"use strict";var a=n(151),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(153),u=n.n(s);function l(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title,s=a.data.site,l=e||s.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=l},151:function(t){t.exports={data:{site:{siteMetadata:{title:"Connecticut Digital Service",description:"Future home of the Connecticut Digital Service",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-701df80878b8cb0143eb.js.map