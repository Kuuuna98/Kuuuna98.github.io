"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[74],{3895:function(e,t,a){var n=a(6540);a(8007);t.A=e=>{let{location:t,title:a,children:r}=e;return n.createElement("div",{className:"global-wrapper"},n.createElement("main",null,r))}},7528:function(e,t,a){var n=a(6540),r=a(8007);const l=e=>{var t,a,l;let{description:i,lang:c,title:o,children:m}=e;const{site:s}=(0,r.useStaticQuery)("2246895633"),d=i||s.siteMetadata.description,u=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,u?`${o} | ${u}`:o),n.createElement("meta",{name:"description",content:d}),n.createElement("meta",{property:"og:title",content:o}),n.createElement("meta",{property:"og:description",content:d}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=s.siteMetadata)||void 0===a||null===(l=a.social)||void 0===l?void 0:l.twitter.username)||""}),n.createElement("meta",{name:"twitter:title",content:o}),n.createElement("meta",{name:"twitter:description",content:d}),m)};l.defaultProps={description:""},t.A=l},1024:function(e,t,a){a.r(t),a.d(t,{Head:function(){return i}});var n=a(6540),r=(a(8007),a(3895)),l=a(7528);const i=e=>{let{data:{markdownRemark:t}}=e;return n.createElement(l.A,{title:t.id,description:t.excerpt})};t.default=e=>{let{data:{site:t,markdownRemark:a},location:l}=e;return n.createElement(r.A,{location:l,title:t.siteMetadata.title},n.createElement("article",{className:"blog-page",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h1",{itemProp:"headline"},a.fields.slug)),n.createElement("section",{dangerouslySetInnerHTML:{__html:a.html},itemProp:"articleBody"}),n.createElement("hr",null)))}}}]);
//# sourceMappingURL=component---src-templates-blog-page-js-f45dcfe589ffecc140c5.js.map