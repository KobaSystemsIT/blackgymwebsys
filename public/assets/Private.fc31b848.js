import{h as In,b as v,O as Tn,N as Wt,e as Y,i as Gt,u as _n,c as Mn,U as Ln,a as Rn,P as Fn,k as zn,j as P,r as nt,_ as Vt,l as Dn,m as X,n as Fe}from"./index.ceec7eca.js";import{u as jn,l as $n}from"./iconBG.e759b261.js";function bt({rol:e}){return In(n=>n.user).rol===e?v(Tn,{}):v(Wt,{replace:!0,to:Y.CANTACCESS})}const Yn=({})=>v("div",{className:"gestionsucursales",children:"GestionSucursales"});const Hn=({})=>v("div",{className:"gestionsucursal",children:"GestionSucursal"});const Un=({})=>v("div",{className:"cantaccess",children:"CantAccess"});var Wn={prefix:"fas",iconName:"table",icon:[512,512,[],"f0ce","M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},Bt={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},Gn={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Vn={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Xt=Vn;function gt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gt(Object(n),!0).forEach(function(a){S(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Pe(e){return Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pe(e)}function Bn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ht(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Xn(e,t,n){return t&&ht(e.prototype,t),n&&ht(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function at(e,t){return Kn(e)||Jn(e,t)||qt(e,t)||ea()}function de(e){return qn(e)||Qn(e)||qt(e)||Zn()}function qn(e){if(Array.isArray(e))return He(e)}function Kn(e){if(Array.isArray(e))return e}function Qn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Jn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function qt(e,t){if(!!e){if(typeof e=="string")return He(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return He(e,t)}}function He(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Zn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ea(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yt=function(){},rt={},Kt={},Qt=null,Jt={mark:yt,measure:yt};try{typeof window<"u"&&(rt=window),typeof document<"u"&&(Kt=document),typeof MutationObserver<"u"&&(Qt=MutationObserver),typeof performance<"u"&&(Jt=performance)}catch{}var ta=rt.navigator||{},xt=ta.userAgent,kt=xt===void 0?"":xt,U=rt,y=Kt,wt=Qt,be=Jt;U.document;var D=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Zt=~kt.indexOf("MSIE")||~kt.indexOf("Trident/"),ge,he,ye,xe,ke,R="___FONT_AWESOME___",Ue=16,en="fa",tn="svg-inline--fa",Q="data-fa-i2svg",We="data-fa-pseudo-element",na="data-fa-pseudo-element-pending",it="data-prefix",ot="data-icon",At="fontawesome-i2svg",aa="async",ra=["HTML","HEAD","STYLE","SCRIPT"],nn=function(){try{return!0}catch{return!1}}(),h="classic",x="sharp",st=[h,x];function ve(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[h]}})}var le=ve((ge={},S(ge,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),S(ge,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ge)),fe=ve((he={},S(he,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),S(he,x,{solid:"fass",regular:"fasr",light:"fasl"}),he)),ce=ve((ye={},S(ye,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),S(ye,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ye)),ia=ve((xe={},S(xe,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),S(xe,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),xe)),oa=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,an="fa-layers-text",sa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,la=ve((ke={},S(ke,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),S(ke,x,{900:"fass",400:"fasr",300:"fasl"}),ke)),rn=[1,2,3,4,5,6,7,8,9,10],fa=rn.concat([11,12,13,14,15,16,17,18,19,20]),ca=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ue=new Set;Object.keys(fe[h]).map(ue.add.bind(ue));Object.keys(fe[x]).map(ue.add.bind(ue));var ua=[].concat(st,de(ue),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY]).concat(rn.map(function(e){return"".concat(e,"x")})).concat(fa.map(function(e){return"w-".concat(e)})),oe=U.FontAwesomeConfig||{};function ma(e){var t=y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function da(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(y&&typeof y.querySelector=="function"){var va=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];va.forEach(function(e){var t=at(e,2),n=t[0],a=t[1],r=da(ma(n));r!=null&&(oe[a]=r)})}var on={styleDefault:"solid",familyDefault:"classic",cssPrefix:en,replacementClass:tn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};oe.familyPrefix&&(oe.cssPrefix=oe.familyPrefix);var ae=u(u({},on),oe);ae.autoReplaceSvg||(ae.observeMutations=!1);var d={};Object.keys(on).forEach(function(e){Object.defineProperty(d,e,{enumerable:!0,set:function(n){ae[e]=n,se.forEach(function(a){return a(d)})},get:function(){return ae[e]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){ae.cssPrefix=t,se.forEach(function(n){return n(d)})},get:function(){return ae.cssPrefix}});U.FontAwesomeConfig=d;var se=[];function pa(e){return se.push(e),function(){se.splice(se.indexOf(e),1)}}var $=Ue,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ba(e){if(!(!e||!D)){var t=y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=y.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(t,a),e}}var ga="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function me(){for(var e=12,t="";e-- >0;)t+=ga[Math.random()*62|0];return t}function re(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function lt(e){return e.classList?re(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function sn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ha(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(sn(e[n]),'" ')},"").trim()}function Te(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ft(e){return e.size!==M.size||e.x!==M.x||e.y!==M.y||e.rotate!==M.rotate||e.flipX||e.flipY}function ya(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:f}}function xa(e){var t=e.transform,n=e.width,a=n===void 0?Ue:n,r=e.height,i=r===void 0?Ue:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Zt?l+="translate(".concat(t.x/$-a/2,"em, ").concat(t.y/$-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/$,"em), calc(-50% + ").concat(t.y/$,"em)) "):l+="translate(".concat(t.x/$,"em, ").concat(t.y/$,"em) "),l+="scale(".concat(t.size/$*(t.flipX?-1:1),", ").concat(t.size/$*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ka=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ln(){var e=en,t=tn,n=d.cssPrefix,a=d.replacementClass,r=ka;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Ot=!1;function ze(){d.autoAddCss&&!Ot&&(ba(ln()),Ot=!0)}var wa={mixout:function(){return{dom:{css:ln,insertCss:ze}}},hooks:function(){return{beforeDOMElementCreation:function(){ze()},beforeI2svg:function(){ze()}}}},F=U||{};F[R]||(F[R]={});F[R].styles||(F[R].styles={});F[R].hooks||(F[R].hooks={});F[R].shims||(F[R].shims=[]);var _=F[R],fn=[],Aa=function e(){y.removeEventListener("DOMContentLoaded",e),Ee=1,fn.map(function(t){return t()})},Ee=!1;D&&(Ee=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Ee||y.addEventListener("DOMContentLoaded",Aa));function Oa(e){!D||(Ee?setTimeout(e,0):fn.push(e))}function pe(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?sn(e):"<".concat(t," ").concat(ha(a),">").concat(i.map(pe).join(""),"</").concat(t,">")}function St(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Sa=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},De=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=r!==void 0?Sa(n,r):n,l,f,c;for(a===void 0?(l=1,c=t[i[0]]):(l=0,c=a);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Na(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Ge(e){var t=Na(e);return t.length===1?t[0].toString(16):null}function Pa(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Nt(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Ve(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Nt(t);typeof _.hooks.addPack=="function"&&!r?_.hooks.addPack(e,Nt(t)):_.styles[e]=u(u({},_.styles[e]||{}),i),e==="fas"&&Ve("fa",t)}var we,Ae,Oe,Z=_.styles,Ea=_.shims,Ca=(we={},S(we,h,Object.values(ce[h])),S(we,x,Object.values(ce[x])),we),ct=null,cn={},un={},mn={},dn={},vn={},Ia=(Ae={},S(Ae,h,Object.keys(le[h])),S(Ae,x,Object.keys(le[x])),Ae);function Ta(e){return~ua.indexOf(e)}function _a(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Ta(r)?r:null}var pn=function(){var t=function(i){return De(Z,function(o,s,l){return o[l]=De(s,i,{}),o},{})};cn=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),un=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),vn=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in Z||d.autoFetchSvg,a=De(Ea,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});mn=a.names,dn=a.unicodes,ct=_e(d.styleDefault,{family:d.familyDefault})};pa(function(e){ct=_e(e.styleDefault,{family:d.familyDefault})});pn();function ut(e,t){return(cn[e]||{})[t]}function Ma(e,t){return(un[e]||{})[t]}function K(e,t){return(vn[e]||{})[t]}function bn(e){return mn[e]||{prefix:null,iconName:null}}function La(e){var t=dn[e],n=ut("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return ct}var mt=function(){return{prefix:null,iconName:null,rest:[]}};function _e(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?h:n,r=le[a][e],i=fe[a][e]||fe[a][r],o=e in _.styles?e:null;return i||o||null}var Pt=(Oe={},S(Oe,h,Object.keys(ce[h])),S(Oe,x,Object.keys(ce[x])),Oe);function Me(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},S(t,h,"".concat(d.cssPrefix,"-").concat(h)),S(t,x,"".concat(d.cssPrefix,"-").concat(x)),t),o=null,s=h;(e.includes(i[h])||e.some(function(f){return Pt[h].includes(f)}))&&(s=h),(e.includes(i[x])||e.some(function(f){return Pt[x].includes(f)}))&&(s=x);var l=e.reduce(function(f,c){var m=_a(d.cssPrefix,c);if(Z[c]?(c=Ca[s].includes(c)?ia[s][c]:c,o=c,f.prefix=c):Ia[s].indexOf(c)>-1?(o=c,f.prefix=_e(c,{family:s})):m?f.iconName=m:c!==d.replacementClass&&c!==i[h]&&c!==i[x]&&f.rest.push(c),!r&&f.prefix&&f.iconName){var p=o==="fa"?bn(f.iconName):{},g=K(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Z.far&&Z.fas&&!d.autoFetchSvg&&(f.prefix="fas")}return f},mt());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===x&&(Z.fass||d.autoFetchSvg)&&(l.prefix="fass",l.iconName=K(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=W()||"fas"),l}var Ra=function(){function e(){Bn(this,e),this.definitions={}}return Xn(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),Ve(s,o[s]);var l=ce[h][s];l&&Ve(l,o[s]),pn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Et=[],ee={},ne={},Fa=Object.keys(ne);function za(e,t){var n=t.mixoutsTo;return Et=e,ee={},Object.keys(ne).forEach(function(a){Fa.indexOf(a)===-1&&delete ne[a]}),Et.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Pe(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){ee[o]||(ee[o]=[]),ee[o].push(i[o])})}a.provides&&a.provides(ne)}),n}function Be(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=ee[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function J(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=ee[e]||[];r.forEach(function(i){i.apply(null,n)})}function z(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ne[e]?ne[e].apply(null,t):void 0}function Xe(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||W();if(!!t)return t=K(n,t)||t,St(gn.definitions,n,t)||St(_.styles,n,t)}var gn=new Ra,Da=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,J("noAuto")},ja={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(J("beforeI2svg",t),z("pseudoElements2svg",t),z("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Oa(function(){Ya({autoReplaceSvgRoot:n}),J("watch",t)})}},$a={icon:function(t){if(t===null)return null;if(Pe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:K(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=_e(t[0]);return{prefix:a,iconName:K(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(oa))){var r=Me(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:K(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=W();return{prefix:i,iconName:K(i,t)||t}}}},T={noAuto:Da,config:d,dom:ja,parse:$a,library:gn,findIconDefinition:Xe,toHtml:pe},Ya=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?y:n;(Object.keys(_.styles).length>0||d.autoFetchSvg)&&D&&d.autoReplaceSvg&&T.dom.i2svg({node:a})};function Le(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return pe(a)})}}),Object.defineProperty(e,"node",{get:function(){if(!!D){var a=y.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Ha(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(ft(o)&&n.found&&!a.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};r.style=Te(u(u({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Ua(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function dt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,m=e.extra,p=e.watchable,g=p===void 0?!1:p,A=a.found?a:n,E=A.width,k=A.height,C=r==="fak",w=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(j){return m.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(m.classes).join(" "),O={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(k)})},I=C&&!~m.classes.indexOf("fa-fw")?{width:"".concat(E/k*16*.0625,"em")}:{};g&&(O.attributes[Q]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||me())},children:[l]}),delete O.attributes.title);var N=u(u({},O),{},{prefix:r,iconName:i,main:n,mask:a,maskId:f,transform:o,symbol:s,styles:u(u({},I),m.styles)}),V=a.found&&n.found?z("generateAbstractMask",N)||{children:[],attributes:{}}:z("generateAbstractIcon",N)||{children:[],attributes:{}},B=V.children,Re=V.attributes;return N.children=B,N.attributes=Re,s?Ua(N):Ha(N)}function Ct(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Q]="");var c=u({},o.styles);ft(r)&&(c.transform=xa({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var m=Te(c);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Wa(e){var t=e.content,n=e.title,a=e.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Te(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var je=_.styles;function qe(e){var t=e[0],n=e[1],a=e.slice(4),r=at(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Ga={found:!1,width:512,height:512};function Va(e,t){!nn&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ke(e,t){var n=t;return t==="fa"&&d.styleDefault!==null&&(t=W()),new Promise(function(a,r){if(z("missingIconAbstract"),n==="fa"){var i=bn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&je[t]&&je[t][e]){var o=je[t][e];return a(qe(o))}Va(e,t),a(u(u({},Ga),{},{icon:d.showMissingIcons&&e?z("missingIconAbstract")||{}:{}}))})}var It=function(){},Qe=d.measurePerformance&&be&&be.mark&&be.measure?be:{mark:It,measure:It},ie='FA "6.4.2"',Ba=function(t){return Qe.mark("".concat(ie," ").concat(t," begins")),function(){return hn(t)}},hn=function(t){Qe.mark("".concat(ie," ").concat(t," ends")),Qe.measure("".concat(ie," ").concat(t),"".concat(ie," ").concat(t," begins"),"".concat(ie," ").concat(t," ends"))},vt={begin:Ba,end:hn},Se=function(){};function Tt(e){var t=e.getAttribute?e.getAttribute(Q):null;return typeof t=="string"}function Xa(e){var t=e.getAttribute?e.getAttribute(it):null,n=e.getAttribute?e.getAttribute(ot):null;return t&&n}function qa(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function Ka(){if(d.autoReplaceSvg===!0)return Ne.replace;var e=Ne[d.autoReplaceSvg];return e||Ne.replace}function Qa(e){return y.createElementNS("http://www.w3.org/2000/svg",e)}function Ja(e){return y.createElement(e)}function yn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Qa:Ja:n;if(typeof e=="string")return y.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(yn(o,{ceFn:a}))}),r}function Za(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ne={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(yn(r),n)}),n.getAttribute(Q)===null&&d.keepOriginalSource){var a=y.createComment(Za(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~lt(n).indexOf(d.replacementClass))return Ne.replace(t);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return pe(s)}).join(`
`);n.setAttribute(Q,""),n.innerHTML=o}};function _t(e){e()}function xn(e,t){var n=typeof t=="function"?t:Se;if(e.length===0)n();else{var a=_t;d.mutateApproach===aa&&(a=U.requestAnimationFrame||_t),a(function(){var r=Ka(),i=vt.begin("mutate");e.map(r),i(),n()})}}var pt=!1;function kn(){pt=!0}function Je(){pt=!1}var Ce=null;function Mt(e){if(!!wt&&!!d.observeMutations){var t=e.treeCallback,n=t===void 0?Se:t,a=e.nodeCallback,r=a===void 0?Se:a,i=e.pseudoElementsCallback,o=i===void 0?Se:i,s=e.observeMutationsRoot,l=s===void 0?y:s;Ce=new wt(function(f){if(!pt){var c=W();re(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Tt(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Tt(m.target)&&~ca.indexOf(m.attributeName))if(m.attributeName==="class"&&Xa(m.target)){var p=Me(lt(m.target)),g=p.prefix,A=p.iconName;m.target.setAttribute(it,g||c),A&&m.target.setAttribute(ot,A)}else qa(m.target)&&r(m.target)})}}),D&&Ce.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function er(){!Ce||Ce.disconnect()}function tr(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function nr(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=Me(lt(e));return r.prefix||(r.prefix=W()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ma(r.prefix,e.innerText)||ut(r.prefix,Ge(e.innerText))),!r.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function ar(e){var t=re(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return d.autoA11y&&(n?t["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||me()):(t["aria-hidden"]="true",t.focusable="false")),t}function rr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Lt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=nr(e),a=n.iconName,r=n.prefix,i=n.rest,o=ar(e),s=Be("parseNodeAttributes",{},e),l=t.styleParser?tr(e):[];return u({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ir=_.styles;function wn(e){var t=d.autoReplaceSvg==="nest"?Lt(e,{styleParser:!1}):Lt(e);return~t.extra.classes.indexOf(an)?z("generateLayersText",e,t):z("generateSvgReplacementMutation",e,t)}var G=new Set;st.map(function(e){G.add("fa-".concat(e))});Object.keys(le[h]).map(G.add.bind(G));Object.keys(le[x]).map(G.add.bind(G));G=de(G);function Rt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var n=y.documentElement.classList,a=function(m){return n.add("".concat(At,"-").concat(m))},r=function(m){return n.remove("".concat(At,"-").concat(m))},i=d.autoFetchSvg?G:st.map(function(c){return"fa-".concat(c)}).concat(Object.keys(ir));i.includes("fa")||i.push("fa");var o=[".".concat(an,":not([").concat(Q,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=re(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=vt.begin("onTree"),f=s.reduce(function(c,m){try{var p=wn(m);p&&c.push(p)}catch(g){nn||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(p){xn(p,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),m(p)})})}function or(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;wn(e).then(function(n){n&&xn([n],t)})}function sr(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Xe(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Xe(r||{})),e(a,u(u({},n),{},{mask:r}))}}var lr=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?M:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,m=n.title,p=m===void 0?null:m,g=n.titleId,A=g===void 0?null:g,E=n.classes,k=E===void 0?[]:E,C=n.attributes,w=C===void 0?{}:C,O=n.styles,I=O===void 0?{}:O;if(!!t){var N=t.prefix,V=t.iconName,B=t.icon;return Le(u({type:"icon"},t),function(){return J("beforeDOMElementCreation",{iconDefinition:t,params:n}),d.autoA11y&&(p?w["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(A||me()):(w["aria-hidden"]="true",w.focusable="false")),dt({icons:{main:qe(B),mask:l?qe(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:V,transform:u(u({},M),r),symbol:o,title:p,maskId:c,titleId:A,extra:{attributes:w,styles:I,classes:k}})})}},fr={mixout:function(){return{icon:sr(lr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Rt,n.nodeCallback=or,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?y:a,i=n.callback,o=i===void 0?function(){}:i;return Rt(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,f=a.symbol,c=a.mask,m=a.maskId,p=a.extra;return new Promise(function(g,A){Promise.all([Ke(r,s),c.iconName?Ke(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var k=at(E,2),C=k[0],w=k[1];g([n,dt({icons:{main:C,mask:w},prefix:s,iconName:r,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Te(s);l.length>0&&(r.style=l);var f;return ft(o)&&(f=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(f||i.icon),{children:a,attributes:r}}}},cr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Le({type:"layer"},function(){J("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(de(i)).join(" ")},children:o}]})}}}},ur={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,f=l===void 0?{}:l,c=a.styles,m=c===void 0?{}:c;return Le({type:"counter",content:n},function(){return J("beforeDOMElementCreation",{content:n,params:a}),Wa({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(de(s))}})})}}}},mr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?M:r,o=a.title,s=o===void 0?null:o,l=a.classes,f=l===void 0?[]:l,c=a.attributes,m=c===void 0?{}:c,p=a.styles,g=p===void 0?{}:p;return Le({type:"text",content:n},function(){return J("beforeDOMElementCreation",{content:n,params:a}),Ct({content:n,transform:u(u({},M),i),title:s,extra:{attributes:m,styles:g,classes:["".concat(d.cssPrefix,"-layers-text")].concat(de(f))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(Zt){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ct({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},dr=new RegExp('"',"ug"),Ft=[1105920,1112319];function vr(e){var t=e.replace(dr,""),n=Pa(t,0),a=n>=Ft[0]&&n<=Ft[1],r=t.length===2?t[0]===t[1]:!1;return{value:Ge(r?t[0]:t),isSecondary:a||r}}function zt(e,t){var n="".concat(na).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=re(e.children),o=i.filter(function(B){return B.getAttribute(We)===t})[0],s=U.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(sa),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),a();if(l&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?x:h,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?fe[p][l[2].toLowerCase()]:la[p][f],A=vr(m),E=A.value,k=A.isSecondary,C=l[0].startsWith("FontAwesome"),w=ut(g,E),O=w;if(C){var I=La(E);I.iconName&&I.prefix&&(w=I.iconName,g=I.prefix)}if(w&&!k&&(!o||o.getAttribute(it)!==g||o.getAttribute(ot)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var N=rr(),V=N.extra;V.attributes[We]=t,Ke(w,g).then(function(B){var Re=dt(u(u({},N),{},{icons:{main:B,mask:mt()},prefix:g,iconName:O,extra:V,watchable:!0})),j=y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(j,e.firstChild):e.appendChild(j),j.outerHTML=Re.map(function(Cn){return pe(Cn)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function pr(e){return Promise.all([zt(e,"::before"),zt(e,"::after")])}function br(e){return e.parentNode!==document.head&&!~ra.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(We)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Dt(e){if(!!D)return new Promise(function(t,n){var a=re(e.querySelectorAll("*")).filter(br).map(pr),r=vt.begin("searchPseudoElements");kn(),Promise.all(a).then(function(){r(),Je(),t()}).catch(function(){r(),Je(),n()})})}var gr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Dt,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?y:a;d.searchPseudoElements&&Dt(r)}}},jt=!1,hr={mixout:function(){return{dom:{unwatch:function(){kn(),jt=!0}}}},hooks:function(){return{bootstrap:function(){Mt(Be("mutationObserverCallbacks",{}))},noAuto:function(){er()},watch:function(n){var a=n.observeMutationsRoot;jt?Je():Mt(Be("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},$t=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},yr={mixout:function(){return{parse:{transform:function(n){return $t(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=$t(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:p};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),g.path)}]}]}}}},$e={x:0,y:0,width:"100%",height:"100%"};function Yt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function xr(e){return e.tag==="g"?e.children:[e]}var kr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Me(r.split(" ").map(function(o){return o.trim()})):mt();return i.prefix||(i.prefix=W()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,m=o.width,p=o.icon,g=ya({transform:l,containerWidth:m,iconWidth:f}),A={tag:"rect",attributes:u(u({},$e),{},{fill:"white"})},E=c.children?{children:c.children.map(Yt)}:{},k={tag:"g",attributes:u({},g.inner),children:[Yt(u({tag:c.tag,attributes:u(u({},c.attributes),g.path)},E))]},C={tag:"g",attributes:u({},g.outer),children:[k]},w="mask-".concat(s||me()),O="clip-".concat(s||me()),I={tag:"mask",attributes:u(u({},$e),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,C]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:xr(p)},I]};return a.push(N,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(w,")")},$e)}),{children:a,attributes:r}}}},wr={provides:function(t){var n=!1;U.matchMedia&&(n=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ar={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Or=[wa,fr,cr,ur,mr,gr,hr,yr,kr,wr,Ar];za(Or,{mixoutsTo:T});T.noAuto;T.config;T.library;T.dom;var Ze=T.parse;T.findIconDefinition;T.toHtml;var Sr=T.icon;T.layer;T.text;T.counter;var b={exports:{}},Nr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Pr=Nr,Er=Pr;function An(){}function On(){}On.resetWarningCache=An;var Cr=function(){function e(a,r,i,o,s,l){if(l!==Er){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:On,resetWarningCache:An};return n.PropTypes=n,n};b.exports=Cr();function Ht(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ht(Object(n),!0).forEach(function(a){te(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ht(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ie(e){return Ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ie(e)}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ir(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Tr(e,t){if(e==null)return{};var n=Ir(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(n[a]=e[a]))}return n}function et(e){return _r(e)||Mr(e)||Lr(e)||Rr()}function _r(e){if(Array.isArray(e))return tt(e)}function Mr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lr(e,t){if(!!e){if(typeof e=="string")return tt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tt(e,t)}}function tt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Rr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fr(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,f=e.spinPulse,c=e.spinReverse,m=e.pulse,p=e.fixedWidth,g=e.inverse,A=e.border,E=e.listItem,k=e.flip,C=e.size,w=e.rotation,O=e.pull,I=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":f,"fa-pulse":m,"fa-fw":p,"fa-inverse":g,"fa-border":A,"fa-li":E,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},te(t,"fa-".concat(C),typeof C<"u"&&C!==null),te(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),te(t,"fa-pull-".concat(O),typeof O<"u"&&O!==null),te(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(I).map(function(N){return I[N]?N:null}).filter(function(N){return N})}function zr(e){return e=e-0,e===e}function Sn(e){return zr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Dr=["style"];function jr(e){return e.charAt(0).toUpperCase()+e.slice(1)}function $r(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Sn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[jr(r)]=i:t[r]=i,t},{})}function Nn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return Nn(e,l)}),r=Object.keys(t.attributes||{}).reduce(function(l,f){var c=t.attributes[f];switch(f){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=$r(c);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=c:l.attrs[Sn(f)]=c}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Tr(n,Dr);return r.attrs.style=H(H({},r.attrs.style),o),e.apply(void 0,[t.tag,H(H({},r.attrs),s)].concat(et(a)))}var Pn=!1;try{Pn=!0}catch{}function Yr(){if(!Pn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ut(e){if(e&&Ie(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ze.icon)return Ze.icon(e);if(e===null)return null;if(e&&Ie(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ye(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?te({},e,t):{}}var L=Gt.forwardRef(function(e,t){var n=e.icon,a=e.mask,r=e.symbol,i=e.className,o=e.title,s=e.titleId,l=e.maskId,f=Ut(n),c=Ye("classes",[].concat(et(Fr(e)),et(i.split(" ")))),m=Ye("transform",typeof e.transform=="string"?Ze.transform(e.transform):e.transform),p=Ye("mask",Ut(a)),g=Sr(f,H(H(H(H({},c),m),p),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!g)return Yr("Could not find icon",f),null;var A=g.abstract,E={ref:t};return Object.keys(e).forEach(function(k){L.defaultProps.hasOwnProperty(k)||(E[k]=e[k])}),Hr(A[0],E)});L.displayName="FontAwesomeIcon";L.propTypes={beat:b.exports.bool,border:b.exports.bool,beatFade:b.exports.bool,bounce:b.exports.bool,className:b.exports.string,fade:b.exports.bool,flash:b.exports.bool,mask:b.exports.oneOfType([b.exports.object,b.exports.array,b.exports.string]),maskId:b.exports.string,fixedWidth:b.exports.bool,inverse:b.exports.bool,flip:b.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.exports.oneOfType([b.exports.object,b.exports.array,b.exports.string]),listItem:b.exports.bool,pull:b.exports.oneOf(["right","left"]),pulse:b.exports.bool,rotation:b.exports.oneOf([0,90,180,270]),shake:b.exports.bool,size:b.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.exports.bool,spinPulse:b.exports.bool,spinReverse:b.exports.bool,symbol:b.exports.oneOfType([b.exports.bool,b.exports.string]),title:b.exports.string,titleId:b.exports.string,transform:b.exports.oneOfType([b.exports.string,b.exports.object]),swapOpacity:b.exports.bool};L.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Hr=Nn.bind(null,Gt.createElement);function En(){const e=_n(),t=jn();return v("button",{onClick:()=>{Mn(Ln),t(Rn()),e(Fn.LOGIN,{replace:!0})},className:"text-sm",children:"Salir"})}const Ur=({})=>{const t=zn().pathname.split("/").filter(n=>n!=="");return P("div",{className:"navbar p-4 border-b",children:[v("div",{className:"flex-1",children:v("div",{className:"text-sm breadcrumbs",children:P("ul",{children:[v("li",{children:P("a",{href:"/",children:[v(L,{icon:Xt})," "]})}),v("li",{children:t.length>0?v("span",{children:t[t.length-1]}):v("span",{children:"Home"})})]})})}),v("div",{className:"flex-none",children:v("ul",{className:"menu menu-horizontal",children:v("li",{children:P("details",{children:[v("summary",{className:"text-xs",children:"Opciones"}),P("ul",{className:"p-2 text-xs",children:[v("li",{children:v("div",{children:v("h1",{children:"Editar perfil"})})}),v("li",{children:P("div",{children:[v(L,{icon:Bt,className:"h-2"}),v(En,{})]})})]})]})})})})]})};const Wr=({})=>{const[e,t]=nt.exports.useState(!1);return v("div",{className:`relative border-r bg-black rounded-lg ${e?"w-48":"w-24"}`,onMouseEnter:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:P("div",{className:`w-48 pt-5 rounded-lg${e?"w-48":" w-14"} `,children:[v("div",{className:"flex flex-col items-center",children:P("div",{className:"flex flex-col pt-6 justify-center",children:[v("img",{src:$n,className:`h-8 ${e?"relative":"relative -left-11"}`,alt:"Logo"}),v("h1",{className:`text-sm font-medium bottom-0 text-center text-white bg-dark ${e?"block":"hidden"}`,children:"Black Gym Club"})]})}),v("div",{className:"pt-5",children:P("ul",{className:"py-2 px-3 text-white text-sm",children:[v("li",{className:"m-5 hover:bg-white rounded-md hover:text-black",children:P("a",{href:"/",className:`${e?"flex items-center":"relative items-center left-1"}`,children:[v(L,{icon:Xt,className:`${e?" m-3 h-3":"h-5"}`}),v("h1",{className:`${e?"block":" hidden"}`,children:"Inicio"})]})}),v("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:P("a",{href:Y.SUCSTAFF,className:`${e?"flex items-center":"relative items-center left-1"}`,children:[v(L,{icon:Wn,className:`${e?" m-3 h-3":"h-5"}`}),v("h1",{className:`${e?"block":" hidden"}`,children:"Gesti\xF3n de Sucursal"})]})}),v("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:P("a",{href:Y.PDV,className:`${e?"flex items-center":"relative items-center left-1"}`,children:[v(L,{icon:Gn,className:`${e?" m-3 h-3":"h-5"}`}),v("h1",{className:`${e?"block":" hidden"}`,children:"Punto de Venta"})]})}),v("li",{className:"m-5 ml-5 mt-7 hover:bg-white rounded-md hover:text-black",children:P("a",{href:"/login",className:`${e?"flex items-center":"relative items-center left-1"}`,children:[v(L,{icon:Bt,className:`${e?" m-3 h-3":"h-5"}`}),v("h1",{className:`${e?"block":" hidden"}`,children:v(En,{})})]})})]})})]})})},Gr=nt.exports.lazy(()=>Vt(()=>import("./Dashboard.8aafc59f.js"),["assets/Dashboard.8aafc59f.js","assets/index.ceec7eca.js","assets/index.432713f2.css"]));nt.exports.lazy(()=>Vt(()=>import("./Home.ef417711.js"),["assets/Home.ef417711.js","assets/index.ceec7eca.js","assets/index.432713f2.css"]));function Xr(){return P("div",{className:"flex p-4 max-h-screen overflow-y-hidden text-xs",children:[v(Wr,{}),v("div",{className:"flex-grow p-4",children:P("div",{className:"flex flex-col min-h-screen",children:[v(Ur,{}),P("div",{className:"flex-grow overflow-hidden",children:[" ",P("div",{style:{maxHeight:"calc(100vh - 5rem)",overflowY:"auto"},className:"p-4",children:[" ",P(Dn,{children:[v(X,{path:"/",element:v(Wt,{to:Y.DASHBOARD})}),v(X,{path:Y.DASHBOARD,element:v(Gr,{})}),v(X,{path:Y.CANTACCESS,element:v(Un,{})}),v(X,{element:v(bt,{rol:Fe.ADMIN}),children:v(X,{path:Y.SUCADMIN,element:v(Yn,{})})}),v(X,{element:v(bt,{rol:Fe.USER&&Fe.ADMIN}),children:v(X,{path:Y.SUCSTAFF,element:v(Hn,{})})})]})]})]})]})})]})}export{Xr as default};
