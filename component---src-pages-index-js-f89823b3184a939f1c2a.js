(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{7361:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#484808","images":{"fallback":{"src":"/static/d2b642998f369ddb421b88e0bce1a5d0/e5610/profile-pic.png","srcSet":"/static/d2b642998f369ddb421b88e0bce1a5d0/e5610/profile-pic.png 50w,\\n/static/d2b642998f369ddb421b88e0bce1a5d0/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/d2b642998f369ddb421b88e0bce1a5d0/d4bf4/profile-pic.avif 50w,\\n/static/d2b642998f369ddb421b88e0bce1a5d0/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/d2b642998f369ddb421b88e0bce1a5d0/3faea/profile-pic.webp 50w,\\n/static/d2b642998f369ddb421b88e0bce1a5d0/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,l){"use strict";var a=l(7294),i=l(5444),n=l(410);t.Z=function(){var e,t,r=(0,i.useStaticQuery)("3257411868"),c=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=r.site.siteMetadata)||void 0===t?void 0:t.social;return a.createElement("div",null,a.createElement("div",{className:"bio"},a.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:l(7361)}),(null==c?void 0:c.name)&&a.createElement("p",null,"Written by ",a.createElement("strong",null,c.name)," ",(null==c?void 0:c.summary)||null," ",a.createElement("a",{href:"https://twitter.com/"+((null==o?void 0:o.twitter)||"")},"follow me on twitter"))),a.createElement("div",null,a.createElement("p",null,"My tech stack is HTML, CSS,JavaScript, ReactJS, NodeJS, Solidity"),a.createElement("p",null,"Am currently open to remote job oppurtunities."),a.createElement("p",null,"Checkout my ",a.createElement(i.Link,{to:"/projects"},"projects")),a.createElement("p",null,a.createElement(i.Link,{to:"https://www.youtube.com/c/DavisBwake"},"YouTube"))))}},7704:function(e,t,l){"use strict";l.r(t);var a=l(7294),i=l(5444),n=l(9535),r=l(7198),c=l(3751);t.default=function(e){var t,l=e.data,o=e.location,s=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=l.allMarkdownRemark.nodes;return 0===d.length?a.createElement(r.Z,{location:o,title:s},a.createElement(c.Z,{title:"All posts"}),a.createElement(n.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(r.Z,{location:o,title:s},a.createElement(c.Z,{title:"All posts"}),a.createElement(n.Z,null),a.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t=e.frontmatter.title||e.fields.slug;return a.createElement("li",{key:e.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-f89823b3184a939f1c2a.js.map