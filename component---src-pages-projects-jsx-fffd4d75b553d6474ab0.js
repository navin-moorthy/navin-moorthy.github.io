(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),l=r(a("VbXa")),o=r(a("8OQS")),s=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),m=function(e){var t=u(e),a=f(t);return p[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,E=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function y(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+d+l+o+a+r+t+i+n+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(O,(0,s.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},O=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,s.default)({sizes:a,srcSet:r,src:n},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,o=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,S=e.itemProp,w=e.loading,k=e.draggable,V=!1===this.state.fadeIn||this.state.imgLoaded,_=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,s.default)({opacity:V?1:0,transition:_?"opacity "+b+"ms":"none"},o),P="boolean"==typeof h?"lightgray":h,R={transitionDelay:b+"ms"},x=(0,s.default)({opacity:this.state.imgLoaded?0:1},_&&R,{},o,{},f),j={title:t,alt:this.state.isVisible?"":a,style:x,className:p,itemProp:S};if(m){var T=m,N=T[0];return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),P&&d.default.createElement(E,{title:t,style:(0,s.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},_&&R)}),N.base64&&d.default.createElement(L,{src:N.base64,spreadProps:j,imageVariants:T,generateSources:I}),N.tracedSVG&&d.default.createElement(L,{src:N.tracedSVG,spreadProps:j,imageVariants:T,generateSources:y}),this.state.isVisible&&d.default.createElement("picture",null,v(T),d.default.createElement(O,{alt:a,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,s.default)({alt:a,title:t,loading:w},N,{imageVariants:T}))}}))}if(g){var B=g,G=B[0],M=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},i);return"inherit"===i.display&&delete M.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},P&&d.default.createElement(E,{title:t,style:(0,s.default)({backgroundColor:P,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},_&&R)}),G.base64&&d.default.createElement(L,{src:G.base64,spreadProps:j,imageVariants:B,generateSources:I}),G.tracedSVG&&d.default.createElement(L,{src:G.tracedSVG,spreadProps:j,imageVariants:B,generateSources:y}),this.state.isVisible&&d.default.createElement("picture",null,v(B),d.default.createElement(O,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,s.default)({alt:a,title:t,loading:w},G,{imageVariants:B}))}}))}return null},t}(d.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});V.propTypes={resolutions:_,sizes:z,fixed:c.default.oneOfType([_,c.default.arrayOf(_)]),fluid:c.default.oneOfType([z,c.default.arrayOf(z)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=V;t.default=P},OGtf:function(e,t,a){var r=a("XKFU"),n=a("eeVq"),i=a("vhPU"),l=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},hoZb:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return f}));var r=a("q1tI"),n=a.n(r),i=a("vOnD"),l=a("Wbzz"),o=a("9eSz"),s=a.n(o),d=a("L6Je"),c=i.b.div.withConfig({displayName:"projects__ProjectsWrapper",componentId:"sc-1e41clg-0"})(["",";display:grid;grid-gap:1rem;grid-template-columns:repeat(3,1fr);@media (max-width:900px){grid-template-columns:repeat(2,1fr);}@media (max-width:600px){grid-template-columns:repeat(1,1fr);}"],{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"2rem",width:"100%"}),u=i.b.div.withConfig({displayName:"projects__ProjectWrapper",componentId:"sc-1e41clg-1"})({textAlign:"center"});t.default=function(e){var t=e.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{siteTitle:"Projects",to:"/projects"},n.a.createElement("h1",null,"Creations"),n.a.createElement("h4",{style:{textAlign:"center"}},"Codepen Creations ",n.a.createElement(l.Link,{to:"/blog/codepen-creations/"},"here")),n.a.createElement(c,null,n.a.createElement(u,null,n.a.createElement("a",{href:"https://jackfitnessstudio.com/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",null,"Jack Fitness Studio"),n.a.createElement(s.a,{fluid:t.jackFitnessStudio.childImageSharp.fluid,alt:"Jack Fitness Studio"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://navin-navi-crown-clothing.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",null,"Crown Clothing"),n.a.createElement(s.a,{fluid:t.crownClothing.childImageSharp.fluid,alt:"Crown Clothing"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://angular-express-issue-tracker.herokuapp.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",null,"Angular Issue Tracker"),n.a.createElement(s.a,{fluid:t.angularIssueTracker.childImageSharp.fluid,alt:"Angular Issue Tracker"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"http://angular7-udemy-the-complete-guide.s3-website.ap-south-1.amazonaws.com",target:"_blank",rel:"noopener noreferrer"},"Angular Recipe Book Basic",n.a.createElement(s.a,{fluid:t.angularRecipeBook.childImageSharp.fluid,alt:"Angular Recipe Book"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://materialized-blog.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Materialized Blog",n.a.createElement(s.a,{fluid:t.materializeBlog.childImageSharp.fluid,alt:"Materialized Blog"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://to-do-ajax.herokuapp.com/todos",target:"_blank",rel:"noopener noreferrer"},"Ajax To Do App",n.a.createElement(s.a,{fluid:t.ajaxToDoList.childImageSharp.fluid,alt:"Ajax To Do App"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"http://yelp-camp-campground.herokuapp.com",target:"_blank",rel:"noopener noreferrer"},"YelpCamp Campground",n.a.createElement(s.a,{fluid:t.yelpcamp.childImageSharp.fluid,alt:"YelpCamp"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://navin-navi.github.io/redux-github-commits-history-chart/",target:"_blank",rel:"noopener noreferrer"},"Github Commit History",n.a.createElement(s.a,{fluid:t.githubCommitHistory.childImageSharp.fluid,alt:"Github Commit History"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://navin-navi.github.io/color-game/",target:"_blank",rel:"noopener noreferrer"},"Color Game",n.a.createElement(s.a,{fluid:t.colorGame.childImageSharp.fluid,alt:"Color Game"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://vanuss-v2.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Vanuss V2",n.a.createElement(s.a,{fluid:t.vanuss.childImageSharp.fluid,alt:"Vanuss Nodified"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://navin-navi.github.io/museum-of-candy/",target:"_blank",rel:"noopener noreferrer"},"Meseum Of Candy",n.a.createElement(s.a,{fluid:t.museumOfCandy.childImageSharp.fluid,alt:"Meseum Of Candy"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://navin-navi.github.io/shrine-material-design-demo/",target:"_blank",rel:"noopener noreferrer"},"Shrine MDN Site",n.a.createElement(s.a,{fluid:t.shrineMdnSite.childImageSharp.fluid,alt:"Shrine MDN Site"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://navin-navi.github.io/to-do-list-basic/",target:"_blank",rel:"noopener noreferrer"},"To Do List Basic",n.a.createElement(s.a,{fluid:t.toDoListBasic.childImageSharp.fluid,alt:"To Do List Basic"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://navin-navi.github.io/patatap-clone/",target:"_blank",rel:"noopener noreferrer"},"Patatap Clone",n.a.createElement(s.a,{fluid:t.patatapClone.childImageSharp.fluid,alt:"Patatap Clone"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://navin-navi.github.io/vue-animations/",target:"_blank",rel:"noopener noreferrer"},"Vue Animation Basics",n.a.createElement(s.a,{fluid:t.vueAnimation.childImageSharp.fluid,alt:"Vue Animation"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://navin-navi.github.io/patterns/",target:"_blank",rel:"noopener noreferrer"},"Patterns",n.a.createElement(s.a,{fluid:t.patterns.childImageSharp.fluid,alt:"Patterns"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://navin-navi.github.io/behance-clone/",target:"_blank",rel:"noopener noreferrer"},"Behance Clone",n.a.createElement(s.a,{fluid:t.behanceClone.childImageSharp.fluid,alt:"Behance Clone"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://navin-navi.github.io/vanuss-first-website/",target:"_blank",rel:"noopener noreferrer"},"Vanuss V1",n.a.createElement(s.a,{fluid:t.vanuss.childImageSharp.fluid,alt:"Vanuss v1"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://navin-navi.github.io/image-gallery/",target:"_blank",rel:"noopener noreferrer"},"Image Gallery",n.a.createElement(s.a,{fluid:t.imageGallery.childImageSharp.fluid,alt:"Image Gallery"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://navin-navi.github.io/purrfect-match/",target:"_blank",rel:"noopener noreferrer"},"Purrfect Match",n.a.createElement(s.a,{fluid:t.purrfectMatch.childImageSharp.fluid,alt:"Purrfect Match"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://navin-navi.github.io/fullpage-js-demo/",target:"_blank",rel:"noopener noreferrer"},"FullPage JS Demo",n.a.createElement(s.a,{fluid:t.fullpageJsDemo.childImageSharp.fluid,alt:"Fullpage JS Demo"}))),n.a.createElement(u,null,n.a.createElement("a",{href:"https://navin-navi.github.io/component-pricing-plans/",target:"_blank",rel:"noopener noreferrer"},"Pricing Plans Component",n.a.createElement(s.a,{fluid:t.pricingPlanComponent.childImageSharp.fluid,alt:"Pricing Plan Component"}))))))};var f="1484047503"}}]);
//# sourceMappingURL=component---src-pages-projects-jsx-fffd4d75b553d6474ab0.js.map