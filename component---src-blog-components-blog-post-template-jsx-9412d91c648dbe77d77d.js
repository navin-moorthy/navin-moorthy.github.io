(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1jzt":function(e,t,n){(function(o){var r,a;n("hEkN"),n("a1Th"),n("h7Nl"),n("Btvt"),n("8+KV"),a=void 0!==o?o:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},o=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,a="",i=n.charCodeAt(0);++r<o;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+a},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(t,n,o,r){if(n.emitEvents&&"function"==typeof e.CustomEvent){var a=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:r}});document.dispatchEvent(a)}};return function(i,l){var c,s,u,d,m={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||a("scrollCancel",c)},animateScroll:function(o,i,l){m.cancelScroll();var s=n(c||t,l||{}),f="[object Number]"===Object.prototype.toString.call(o),h=f||!o.tagName?null:o;if(f||h){var p=e.pageYOffset;s.header&&!u&&(u=document.querySelector(s.header));var g,v,b,y,w,S,E,x,I=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(u),C=f?o:function(t,n,o,a){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-n-o,0),a&&(i=Math.min(i,r()-e.innerHeight)),i}(h,I,parseInt("function"==typeof s.offset?s.offset(o,i):s.offset,10),s.clip),O=C-p,k=r(),N=0,_=(g=O,b=(v=s).speedAsDuration?v.speed:Math.abs(g/1e3*v.speed),v.durationMax&&b>v.durationMax?v.durationMax:v.durationMin&&b<v.durationMin?v.durationMin:parseInt(b,10));0===e.pageYOffset&&e.scrollTo(0,0),E=o,x=s,f||history.pushState&&x.updateURL&&history.pushState({smoothScroll:JSON.stringify(x),anchor:E.id},document.title,E===document.documentElement?"#top":"#"+E.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?e.scrollTo(0,Math.floor(C)):(a("scrollStart",s,o,i),m.cancelScroll(!0),e.requestAnimationFrame((function t(n){var r,l,c;y||(y=n),N+=n-y,S=p+O*(l=w=1<(w=0===_?0:N/_)?1:w,"easeInQuad"===(r=s).easing&&(c=l*l),"easeOutQuad"===r.easing&&(c=l*(2-l)),"easeInOutQuad"===r.easing&&(c=l<.5?2*l*l:(4-2*l)*l-1),"easeInCubic"===r.easing&&(c=l*l*l),"easeOutCubic"===r.easing&&(c=--l*l*l+1),"easeInOutCubic"===r.easing&&(c=l<.5?4*l*l*l:(l-1)*(2*l-2)*(2*l-2)+1),"easeInQuart"===r.easing&&(c=l*l*l*l),"easeOutQuart"===r.easing&&(c=1- --l*l*l*l),"easeInOutQuart"===r.easing&&(c=l<.5?8*l*l*l*l:1-8*--l*l*l*l),"easeInQuint"===r.easing&&(c=l*l*l*l*l),"easeOutQuint"===r.easing&&(c=1+--l*l*l*l*l),"easeInOutQuint"===r.easing&&(c=l<.5?16*l*l*l*l*l:1+16*--l*l*l*l*l),r.customEasing&&(c=r.customEasing(l)),c||l),e.scrollTo(0,Math.floor(S)),function(t,n){var r,l,c,u=e.pageYOffset;if(t==n||u==n||(p<n&&e.innerHeight+u)>=k)return m.cancelScroll(!0),l=n,c=f,0===(r=o)&&document.body.focus(),c||(r.focus(),document.activeElement!==r&&(r.setAttribute("tabindex","-1"),r.focus(),r.style.outline="none"),e.scrollTo(0,l)),a("scrollStop",s,o,i),!(d=y=null)}(S,C)||(d=e.requestAnimationFrame(t),y=n)})))}}},f=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(s=t.target.closest(i))&&"a"===s.tagName.toLowerCase()&&!t.target.closest(c.ignore)&&s.hostname===e.location.hostname&&s.pathname===e.location.pathname&&/#/.test(s.href)){var n,r=o(s.hash);if("#"===r){if(!c.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(r);(n=n||"#top"!==r?n:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(c),m.animateScroll(n,s))}},h=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(o(history.state.anchor)))||m.animateScroll(t,null,{updateURL:!1})}};return m.destroy=function(){c&&(document.removeEventListener("click",f,!1),e.removeEventListener("popstate",h,!1),m.cancelScroll(),d=u=s=c=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";m.destroy(),c=n(t,l||{}),u=c.header?document.querySelector(c.header):null,document.addEventListener("click",f,!1),c.updateURL&&c.popstate&&e.addEventListener("popstate",h,!1)}(),m}}(a)}.apply(t,[]))||(e.exports=r)}).call(this,n("yLpj"))},"84bF":function(e,t,n){"use strict";n("OGtf")("small",(function(e){return function(){return e(this,"small","","")}}))},OGtf:function(e,t,n){var o=n("XKFU"),r=n("eeVq"),a=n("vhPU"),i=/"/g,l=function(e,t,n,o){var r=String(a(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(o).replace(i,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),o(o.P+o.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},hEkN:function(e,t,n){"use strict";n("OGtf")("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))},ydXf:function(e,t,n){"use strict";n.r(t);n("84bF");var o,r=n("q1tI"),a=n.n(r),i=n("Wbzz"),l=n("vOnD"),c=n("L6Je"),s=n("+oRm"),u=l.b.div.withConfig({displayName:"ShareIconWrapper__IconTextContainer",componentId:"sc-1uqjopy-0"})([""," background:",";&:hover{background-color:",";}"],{display:"inline-block",padding:"0.25rem",margin:"0.25rem",borderRadius:"0.25rem",fontSize:"0.625rem",cursor:"pointer"},(function(e){return e.bg}),(function(e){return e.hoverbg})),d=l.b.div.withConfig({displayName:"ShareIconWrapper__Icon",componentId:"sc-1uqjopy-1"})(["",""],{display:"inline-block",verticalAlign:"middle",width:"1rem",height:"1rem",marginLeft:"0.25rem",marginRight:"0.25rem"}),m=l.b.span.withConfig({displayName:"ShareIconWrapper__Text",componentId:"sc-1uqjopy-2"})({verticalAlign:"middle"}),f=function(e){var t=e.text,n=e.bg,o=e.hoverbg,r=e.children,i=e.onClick;return a.a.createElement(u,{bg:n,hoverbg:o,onClick:i},a.a.createElement(d,null,r),a.a.createElement(m,null,t))},h=l.b.div.withConfig({displayName:"BlogSocialShare__SocialShare",componentId:"sc-111vpb0-0"})({textAlign:"right",height:"100%"}),p=function(e){var t='Checkout this amazing article on "'+e.title+'" by @navin_navi19';return a.a.createElement(h,null,a.a.createElement(f,{text:"Share on Twitter",bg:"#38A1F3",hoverbg:"#38a1f3cf",onClick:function(e){return e.preventDefault(),function(e,t){window.open("https://twitter.com/intent/tweet?url="+encodeURI(encodeURI(e))+"&text="+t+"&hashtags=100DaysOfCode","sharer","toolbar=0,status=0,width=626,height=436")}(window.location.href,t)}},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},a.a.createElement("path",{fill:"#fff",d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}))),a.a.createElement(f,{text:"Share on Facebook",bg:"#3b5998",hoverbg:"#3b5998c9",onClick:function(e){return e.preventDefault(),function(e,t){window.FB.ui({method:"share",mobile_iframe:!0,href:e,quote:t})}(window.location.href,t)}},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},a.a.createElement("path",{fill:"#fff",d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"}))))},g=n("1jzt"),v=n.n(g);n.d(t,"pageQuery",(function(){return E}));var b=l.b.h3.withConfig({displayName:"BlogPostTemplate__PostHeader",componentId:"sc-306dr6-0"})(["",""],{fontSize:"1.5rem","@media (min-width: 768px)":{fontSize:"1.875rem"}}),y=l.b.small.withConfig({displayName:"BlogPostTemplate__PostDate",componentId:"sc-306dr6-1"})(['::after{content:"";width:50px;height:4px;display:block;background:linear-gradient(90deg,#ec407a,#40ff00);margin:1rem 0px;}']),w=l.b.ul.withConfig({displayName:"BlogPostTemplate__PostNavigation",componentId:"sc-306dr6-2"})({display:"flex",flexWrap:"wrap",justifyContent:"space-between",padding:"0",listStyleType:"none"}),S=Object(l.b)(i.Link).withConfig({displayName:"BlogPostTemplate__NavigationLink",componentId:"sc-306dr6-3"})([""," background:#ec407a30;padding:0.3rem;@media only screen and (max-width:400px){font-size:10px;}"],{fontSize:".75rem","@media (min-width: 992px)":{fontSize:".875rem"},borderRadius:"0.5rem",borderBottomWidth:"0"}),E=(t.default=function(e){var t=e.data,n=e.pageContext;Object(r.useEffect)((function(){return o=new v.a('a[href*="#"]',{speed:500,speedAsDuration:!0}),function(){return function(){if(!o)throw Error("Not founded SmoothScroll instance");return o.destroy(),o=null}()}}),[]);var i=t.markdownRemark,l=n.previous,u=n.next;return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{siteTitle:"Blog",to:"/blog",bio:!1},a.a.createElement(b,null,i.frontmatter.title),a.a.createElement(y,{style:{padding:"5px",display:"block"}},i.frontmatter.date),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:i.html}}),a.a.createElement(p,{title:i.frontmatter.title}),a.a.createElement("hr",null),a.a.createElement(s.a,null),a.a.createElement(w,null,a.a.createElement("li",null,l&&a.a.createElement(S,{to:"/blog"+l.fields.slug,rel:"prev"},"← ",l.frontmatter.title)),a.a.createElement("li",null,u&&a.a.createElement(S,{to:"/blog"+u.fields.slug,rel:"next"},u.frontmatter.title," →")))))},"3547865932")}}]);
//# sourceMappingURL=component---src-blog-components-blog-post-template-jsx-9412d91c648dbe77d77d.js.map