import{i as ne,j as s,O as Mn,N as Gt,e as Se,u as Wt,F as Xt,k as Bt,r as Oe,m as zn,n as at,b as g,c as Ln,U as Fn,a as Rn,o as Dn,L as Hn,l as jn,_ as $n,t as Vn,p as Yn,q as _}from"./index.19d17757.js";import{b as Un,u as qt}from"./auth.service.3d46759f.js";function Gn({rol:e}){return ne(n=>n.user).rol===e?s(Mn,{}):s(Gt,{replace:!0,to:Se.CANTACCESS})}const Wn=({})=>{const t=""+ne(n=>n.club).idClub;return Wt(),s(Xt,{children:s("div",{children:s("a",{href:`/Dashboard/Gestion_de_Sucursal/${t}`,children:"Sucursal"})})})},Kt=Un+"dbaccess/",Xn=(e,t)=>{const n={idClub:e},a={method:"POST",headers:{Authorization:t,"Content-Type":"application/json"},body:JSON.stringify(n)};return fetch(Kt+"viewClientsData",a).then(async r=>{if(!r.ok){const i=await r.json();throw new Error(i.message)}return r.json()}).then(r=>{if(r.error)throw new Error(r.message||"Error desconocido");return r}).catch(r=>{throw console.error("Error:",r),r})},Bn=(e,t)=>{const n={idClub:e},a={method:"POST",headers:{Authorization:t,"Content-Type":"application/json"},body:JSON.stringify(n)};return fetch(Kt+"viewStaffData",a).then(async r=>{if(!r.ok){const i=await r.json();throw new Error(i.message)}return r.json()}).then(r=>{if(r.error)throw new Error(r.message||"Error desconocido");return r}).catch(r=>{throw console.error("Error:",r),r})};var qn={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Kn={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},Jn={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},Jt={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},Qn={prefix:"fas",iconName:"city",icon:[640,512,[127961],"f64f","M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"]},Zn={prefix:"fas",iconName:"user-pen",icon:[640,512,["user-edit"],"f4ff","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"]},ea={prefix:"fas",iconName:"chart-pie",icon:[576,512,["pie-chart"],"f200","M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"]},ta={prefix:"fas",iconName:"shop",icon:[640,512,["store-alt"],"f54f","M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"]},na={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},aa={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},ra=aa,ia={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},bt={prefix:"fas",iconName:"warehouse",icon:[640,512,[],"f494","M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24H568c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32V488c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24V432H512l0 56c0 13.3-10.7 24-24 24zM128 400V336H512v64H128zm0-96V224H512l0 80H128z"]};function gt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gt(Object(n),!0).forEach(function(a){O(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ee(e){return Ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ee(e)}function oa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yt(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function sa(e,t,n){return t&&yt(e.prototype,t),n&&yt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rt(e,t){return ca(e)||ua(e,t)||Qt(e,t)||da()}function de(e){return la(e)||fa(e)||Qt(e)||ma()}function la(e){if(Array.isArray(e))return Ye(e)}function ca(e){if(Array.isArray(e))return e}function fa(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ua(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,l;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(c){i=!0,l=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw l}}return a}}function Qt(e,t){if(!!e){if(typeof e=="string")return Ye(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ye(e,t)}}function Ye(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function ma(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function da(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xt=function(){},it={},Zt={},en=null,tn={mark:xt,measure:xt};try{typeof window<"u"&&(it=window),typeof document<"u"&&(Zt=document),typeof MutationObserver<"u"&&(en=MutationObserver),typeof performance<"u"&&(tn=performance)}catch{}var va=it.navigator||{},wt=va.userAgent,kt=wt===void 0?"":wt,Y=it,x=Zt,At=en,pe=tn;Y.document;var H=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",nn=~kt.indexOf("MSIE")||~kt.indexOf("Trident/"),be,ge,ye,xe,we,F="___FONT_AWESOME___",Ue=16,an="fa",rn="svg-inline--fa",K="data-fa-i2svg",Ge="data-fa-pseudo-element",ha="data-fa-pseudo-element-pending",ot="data-prefix",st="data-icon",Nt="fontawesome-i2svg",pa="async",ba=["HTML","HEAD","STYLE","SCRIPT"],on=function(){try{return!0}catch{return!1}}(),y="classic",w="sharp",lt=[y,w];function ve(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[y]}})}var le=ve((be={},O(be,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),O(be,w,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),be)),ce=ve((ge={},O(ge,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(ge,w,{solid:"fass",regular:"fasr",light:"fasl"}),ge)),fe=ve((ye={},O(ye,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(ye,w,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ye)),ga=ve((xe={},O(xe,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(xe,w,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),xe)),ya=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,sn="fa-layers-text",xa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,wa=ve((we={},O(we,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(we,w,{900:"fass",400:"fasr",300:"fasl"}),we)),ln=[1,2,3,4,5,6,7,8,9,10],ka=ln.concat([11,12,13,14,15,16,17,18,19,20]),Aa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ue=new Set;Object.keys(ce[y]).map(ue.add.bind(ue));Object.keys(ce[w]).map(ue.add.bind(ue));var Na=[].concat(lt,de(ue),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B.GROUP,B.SWAP_OPACITY,B.PRIMARY,B.SECONDARY]).concat(ln.map(function(e){return"".concat(e,"x")})).concat(ka.map(function(e){return"w-".concat(e)})),oe=Y.FontAwesomeConfig||{};function Sa(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Oa(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x&&typeof x.querySelector=="function"){var Ca=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ca.forEach(function(e){var t=rt(e,2),n=t[0],a=t[1],r=Oa(Sa(n));r!=null&&(oe[a]=r)})}var cn={styleDefault:"solid",familyDefault:"classic",cssPrefix:an,replacementClass:rn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};oe.familyPrefix&&(oe.cssPrefix=oe.familyPrefix);var ae=m(m({},cn),oe);ae.autoReplaceSvg||(ae.observeMutations=!1);var v={};Object.keys(cn).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(n){ae[e]=n,se.forEach(function(a){return a(v)})},get:function(){return ae[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){ae.cssPrefix=t,se.forEach(function(n){return n(v)})},get:function(){return ae.cssPrefix}});Y.FontAwesomeConfig=v;var se=[];function Pa(e){return se.push(e),function(){se.splice(se.indexOf(e),1)}}var $=Ue,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ea(e){if(!(!e||!H)){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=x.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return x.head.insertBefore(t,a),e}}var _a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function me(){for(var e=12,t="";e-- >0;)t+=_a[Math.random()*62|0];return t}function re(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ct(e){return e.classList?re(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function fn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ia(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(fn(e[n]),'" ')},"").trim()}function Me(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ft(e){return e.size!==L.size||e.x!==L.x||e.y!==L.y||e.rotate!==L.rotate||e.flipX||e.flipY}function Ta(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:u}}function Ma(e){var t=e.transform,n=e.width,a=n===void 0?Ue:n,r=e.height,i=r===void 0?Ue:r,o=e.startCentered,l=o===void 0?!1:o,c="";return l&&nn?c+="translate(".concat(t.x/$-a/2,"em, ").concat(t.y/$-i/2,"em) "):l?c+="translate(calc(-50% + ".concat(t.x/$,"em), calc(-50% + ").concat(t.y/$,"em)) "):c+="translate(".concat(t.x/$,"em, ").concat(t.y/$,"em) "),c+="scale(".concat(t.size/$*(t.flipX?-1:1),", ").concat(t.size/$*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var za=`:root, :host {
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
}`;function un(){var e=an,t=rn,n=v.cssPrefix,a=v.replacementClass,r=za;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return r}var St=!1;function De(){v.autoAddCss&&!St&&(Ea(un()),St=!0)}var La={mixout:function(){return{dom:{css:un,insertCss:De}}},hooks:function(){return{beforeDOMElementCreation:function(){De()},beforeI2svg:function(){De()}}}},R=Y||{};R[F]||(R[F]={});R[F].styles||(R[F].styles={});R[F].hooks||(R[F].hooks={});R[F].shims||(R[F].shims=[]);var z=R[F],mn=[],Fa=function e(){x.removeEventListener("DOMContentLoaded",e),_e=1,mn.map(function(t){return t()})},_e=!1;H&&(_e=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),_e||x.addEventListener("DOMContentLoaded",Fa));function Ra(e){!H||(_e?setTimeout(e,0):mn.push(e))}function he(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?fn(e):"<".concat(t," ").concat(Ia(a),">").concat(i.map(he).join(""),"</").concat(t,">")}function Ot(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Da=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},He=function(t,n,a,r){var i=Object.keys(t),o=i.length,l=r!==void 0?Da(n,r):n,c,u,f;for(a===void 0?(c=1,f=t[i[0]]):(c=0,f=a);c<o;c++)u=i[c],f=l(f,t[u],u,t);return f};function Ha(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function We(e){var t=Ha(e);return t.length===1?t[0].toString(16):null}function ja(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ct(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Xe(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Ct(t);typeof z.hooks.addPack=="function"&&!r?z.hooks.addPack(e,Ct(t)):z.styles[e]=m(m({},z.styles[e]||{}),i),e==="fas"&&Xe("fa",t)}var ke,Ae,Ne,Q=z.styles,$a=z.shims,Va=(ke={},O(ke,y,Object.values(fe[y])),O(ke,w,Object.values(fe[w])),ke),ut=null,dn={},vn={},hn={},pn={},bn={},Ya=(Ae={},O(Ae,y,Object.keys(le[y])),O(Ae,w,Object.keys(le[w])),Ae);function Ua(e){return~Na.indexOf(e)}function Ga(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Ua(r)?r:null}var gn=function(){var t=function(i){return He(Q,function(o,l,c){return o[c]=He(l,i,{}),o},{})};dn=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var l=i[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){r[c.toString(16)]=o})}return r}),vn=t(function(r,i,o){if(r[o]=o,i[2]){var l=i[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){r[c]=o})}return r}),bn=t(function(r,i,o){var l=i[2];return r[o]=o,l.forEach(function(c){r[c]=o}),r});var n="far"in Q||v.autoFetchSvg,a=He($a,function(r,i){var o=i[0],l=i[1],c=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(r.names[o]={prefix:l,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:l,iconName:c}),r},{names:{},unicodes:{}});hn=a.names,pn=a.unicodes,ut=ze(v.styleDefault,{family:v.familyDefault})};Pa(function(e){ut=ze(e.styleDefault,{family:v.familyDefault})});gn();function mt(e,t){return(dn[e]||{})[t]}function Wa(e,t){return(vn[e]||{})[t]}function q(e,t){return(bn[e]||{})[t]}function yn(e){return hn[e]||{prefix:null,iconName:null}}function Xa(e){var t=pn[e],n=mt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function U(){return ut}var dt=function(){return{prefix:null,iconName:null,rest:[]}};function ze(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?y:n,r=le[a][e],i=ce[a][e]||ce[a][r],o=e in z.styles?e:null;return i||o||null}var Pt=(Ne={},O(Ne,y,Object.keys(fe[y])),O(Ne,w,Object.keys(fe[w])),Ne);function Le(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},O(t,y,"".concat(v.cssPrefix,"-").concat(y)),O(t,w,"".concat(v.cssPrefix,"-").concat(w)),t),o=null,l=y;(e.includes(i[y])||e.some(function(u){return Pt[y].includes(u)}))&&(l=y),(e.includes(i[w])||e.some(function(u){return Pt[w].includes(u)}))&&(l=w);var c=e.reduce(function(u,f){var d=Ga(v.cssPrefix,f);if(Q[f]?(f=Va[l].includes(f)?ga[l][f]:f,o=f,u.prefix=f):Ya[l].indexOf(f)>-1?(o=f,u.prefix=ze(f,{family:l})):d?u.iconName=d:f!==v.replacementClass&&f!==i[y]&&f!==i[w]&&u.rest.push(f),!r&&u.prefix&&u.iconName){var h=o==="fa"?yn(u.iconName):{},b=q(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||b||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Q.far&&Q.fas&&!v.autoFetchSvg&&(u.prefix="fas")}return u},dt());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&l===w&&(Q.fass||v.autoFetchSvg)&&(c.prefix="fass",c.iconName=q(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=U()||"fas"),c}var Ba=function(){function e(){oa(this,e),this.definitions={}}return sa(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=m(m({},n.definitions[l]||{}),o[l]),Xe(l,o[l]);var c=fe[y][l];c&&Xe(c,o[l]),gn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],l=o.prefix,c=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][c]=u}),n}}]),e}(),Et=[],Z={},te={},qa=Object.keys(te);function Ka(e,t){var n=t.mixoutsTo;return Et=e,Z={},Object.keys(te).forEach(function(a){qa.indexOf(a)===-1&&delete te[a]}),Et.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Ee(r[o])==="object"&&Object.keys(r[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=r[o][l]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Z[o]||(Z[o]=[]),Z[o].push(i[o])})}a.provides&&a.provides(te)}),n}function Be(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Z[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function J(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=Z[e]||[];r.forEach(function(i){i.apply(null,n)})}function D(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return te[e]?te[e].apply(null,t):void 0}function qe(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||U();if(!!t)return t=q(n,t)||t,Ot(xn.definitions,n,t)||Ot(z.styles,n,t)}var xn=new Ba,Ja=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,J("noAuto")},Qa={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return H?(J("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Ra(function(){er({autoReplaceSvgRoot:n}),J("watch",t)})}},Za={icon:function(t){if(t===null)return null;if(Ee(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:q(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=ze(t[0]);return{prefix:a,iconName:q(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match(ya))){var r=Le(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=U();return{prefix:i,iconName:q(i,t)||t}}}},M={noAuto:Ja,config:v,dom:Qa,parse:Za,library:xn,findIconDefinition:qe,toHtml:he},er=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?x:n;(Object.keys(z.styles).length>0||v.autoFetchSvg)&&H&&v.autoReplaceSvg&&M.dom.i2svg({node:a})};function Fe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return he(a)})}}),Object.defineProperty(e,"node",{get:function(){if(!!H){var a=x.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function tr(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(ft(o)&&n.found&&!a.found){var l=n.width,c=n.height,u={x:l/c/2,y:.5};r.style=Me(m(m({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function nr(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function vt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,c=e.title,u=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,b=h===void 0?!1:h,N=a.found?a:n,E=N.width,k=N.height,I=r==="fak",A=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(j){return d.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(d.classes).join(" "),S={children:[],attributes:m(m({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:A,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(k)})},T=I&&!~d.classes.indexOf("fa-fw")?{width:"".concat(E/k*16*.0625,"em")}:{};b&&(S.attributes[K]=""),c&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(f||me())},children:[c]}),delete S.attributes.title);var C=m(m({},S),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:o,symbol:l,styles:m(m({},T),d.styles)}),W=a.found&&n.found?D("generateAbstractMask",C)||{children:[],attributes:{}}:D("generateAbstractIcon",C)||{children:[],attributes:{}},X=W.children,Re=W.attributes;return C.children=X,C.attributes=Re,l?nr(C):tr(C)}function _t(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,l=e.watchable,c=l===void 0?!1:l,u=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(u[K]="");var f=m({},o.styles);ft(r)&&(f.transform=Ma({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var d=Me(f);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function ar(e){var t=e.content,n=e.title,a=e.extra,r=m(m(m({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Me(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var je=z.styles;function Ke(e){var t=e[0],n=e[1],a=e.slice(4),r=rt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var rr={found:!1,width:512,height:512};function ir(e,t){!on&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Je(e,t){var n=t;return t==="fa"&&v.styleDefault!==null&&(t=U()),new Promise(function(a,r){if(D("missingIconAbstract"),n==="fa"){var i=yn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&je[t]&&je[t][e]){var o=je[t][e];return a(Ke(o))}ir(e,t),a(m(m({},rr),{},{icon:v.showMissingIcons&&e?D("missingIconAbstract")||{}:{}}))})}var It=function(){},Qe=v.measurePerformance&&pe&&pe.mark&&pe.measure?pe:{mark:It,measure:It},ie='FA "6.4.2"',or=function(t){return Qe.mark("".concat(ie," ").concat(t," begins")),function(){return wn(t)}},wn=function(t){Qe.mark("".concat(ie," ").concat(t," ends")),Qe.measure("".concat(ie," ").concat(t),"".concat(ie," ").concat(t," begins"),"".concat(ie," ").concat(t," ends"))},ht={begin:or,end:wn},Ce=function(){};function Tt(e){var t=e.getAttribute?e.getAttribute(K):null;return typeof t=="string"}function sr(e){var t=e.getAttribute?e.getAttribute(ot):null,n=e.getAttribute?e.getAttribute(st):null;return t&&n}function lr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function cr(){if(v.autoReplaceSvg===!0)return Pe.replace;var e=Pe[v.autoReplaceSvg];return e||Pe.replace}function fr(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function ur(e){return x.createElement(e)}function kn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?fr:ur:n;if(typeof e=="string")return x.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(kn(o,{ceFn:a}))}),r}function mr(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Pe={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(kn(r),n)}),n.getAttribute(K)===null&&v.keepOriginalSource){var a=x.createComment(mr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~ct(n).indexOf(v.replacementClass))return Pe.replace(t);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(l,c){return c===v.replacementClass||c.match(r)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(l){return he(l)}).join(`
`);n.setAttribute(K,""),n.innerHTML=o}};function Mt(e){e()}function An(e,t){var n=typeof t=="function"?t:Ce;if(e.length===0)n();else{var a=Mt;v.mutateApproach===pa&&(a=Y.requestAnimationFrame||Mt),a(function(){var r=cr(),i=ht.begin("mutate");e.map(r),i(),n()})}}var pt=!1;function Nn(){pt=!0}function Ze(){pt=!1}var Ie=null;function zt(e){if(!!At&&!!v.observeMutations){var t=e.treeCallback,n=t===void 0?Ce:t,a=e.nodeCallback,r=a===void 0?Ce:a,i=e.pseudoElementsCallback,o=i===void 0?Ce:i,l=e.observeMutationsRoot,c=l===void 0?x:l;Ie=new At(function(u){if(!pt){var f=U();re(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Tt(d.addedNodes[0])&&(v.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Tt(d.target)&&~Aa.indexOf(d.attributeName))if(d.attributeName==="class"&&sr(d.target)){var h=Le(ct(d.target)),b=h.prefix,N=h.iconName;d.target.setAttribute(ot,b||f),N&&d.target.setAttribute(st,N)}else lr(d.target)&&r(d.target)})}}),H&&Ie.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function dr(){!Ie||Ie.disconnect()}function vr(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function hr(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=Le(ct(e));return r.prefix||(r.prefix=U()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Wa(r.prefix,e.innerText)||mt(r.prefix,We(e.innerText))),!r.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function pr(e){var t=re(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return v.autoA11y&&(n?t["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||me()):(t["aria-hidden"]="true",t.focusable="false")),t}function br(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Lt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=hr(e),a=n.iconName,r=n.prefix,i=n.rest,o=pr(e),l=Be("parseNodeAttributes",{},e),c=t.styleParser?vr(e):[];return m({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},l)}var gr=z.styles;function Sn(e){var t=v.autoReplaceSvg==="nest"?Lt(e,{styleParser:!1}):Lt(e);return~t.extra.classes.indexOf(sn)?D("generateLayersText",e,t):D("generateSvgReplacementMutation",e,t)}var G=new Set;lt.map(function(e){G.add("fa-".concat(e))});Object.keys(le[y]).map(G.add.bind(G));Object.keys(le[w]).map(G.add.bind(G));G=de(G);function Ft(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!H)return Promise.resolve();var n=x.documentElement.classList,a=function(d){return n.add("".concat(Nt,"-").concat(d))},r=function(d){return n.remove("".concat(Nt,"-").concat(d))},i=v.autoFetchSvg?G:lt.map(function(f){return"fa-".concat(f)}).concat(Object.keys(gr));i.includes("fa")||i.push("fa");var o=[".".concat(sn,":not([").concat(K,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(K,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=re(e.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();var c=ht.begin("onTree"),u=l.reduce(function(f,d){try{var h=Sn(d);h&&f.push(h)}catch(b){on||b.name==="MissingIcon"&&console.error(b)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(h){An(h,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),c(),f()})}).catch(function(h){c(),d(h)})})}function yr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Sn(e).then(function(n){n&&An([n],t)})}function xr(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:qe(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:qe(r||{})),e(a,m(m({},n),{},{mask:r}))}}var wr=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?L:a,i=n.symbol,o=i===void 0?!1:i,l=n.mask,c=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,d=n.title,h=d===void 0?null:d,b=n.titleId,N=b===void 0?null:b,E=n.classes,k=E===void 0?[]:E,I=n.attributes,A=I===void 0?{}:I,S=n.styles,T=S===void 0?{}:S;if(!!t){var C=t.prefix,W=t.iconName,X=t.icon;return Fe(m({type:"icon"},t),function(){return J("beforeDOMElementCreation",{iconDefinition:t,params:n}),v.autoA11y&&(h?A["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(N||me()):(A["aria-hidden"]="true",A.focusable="false")),vt({icons:{main:Ke(X),mask:c?Ke(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:W,transform:m(m({},L),r),symbol:o,title:h,maskId:f,titleId:N,extra:{attributes:A,styles:T,classes:k}})})}},kr={mixout:function(){return{icon:xr(wr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ft,n.nodeCallback=yr,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?x:a,i=n.callback,o=i===void 0?function(){}:i;return Ft(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,l=a.prefix,c=a.transform,u=a.symbol,f=a.mask,d=a.maskId,h=a.extra;return new Promise(function(b,N){Promise.all([Je(r,l),f.iconName?Je(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var k=rt(E,2),I=k[0],A=k[1];b([n,vt({icons:{main:I,mask:A},prefix:l,iconName:r,transform:c,symbol:u,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(N)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,l=n.styles,c=Me(l);c.length>0&&(r.style=c);var u;return ft(o)&&(u=D("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},Ar={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Fe({type:"layer"},function(){J("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(l){Array.isArray(l)?l.map(function(c){o=o.concat(c.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(de(i)).join(" ")},children:o}]})}}}},Nr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,l=o===void 0?[]:o,c=a.attributes,u=c===void 0?{}:c,f=a.styles,d=f===void 0?{}:f;return Fe({type:"counter",content:n},function(){return J("beforeDOMElementCreation",{content:n,params:a}),ar({content:n.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(de(l))}})})}}}},Sr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?L:r,o=a.title,l=o===void 0?null:o,c=a.classes,u=c===void 0?[]:c,f=a.attributes,d=f===void 0?{}:f,h=a.styles,b=h===void 0?{}:h;return Fe({type:"text",content:n},function(){return J("beforeDOMElementCreation",{content:n,params:a}),_t({content:n,transform:m(m({},L),i),title:l,extra:{attributes:d,styles:b,classes:["".concat(v.cssPrefix,"-layers-text")].concat(de(u))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,l=null,c=null;if(nn){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,c=f.height/u}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,_t({content:n.innerHTML,width:l,height:c,transform:i,title:r,extra:o,watchable:!0})])}}},Or=new RegExp('"',"ug"),Rt=[1105920,1112319];function Cr(e){var t=e.replace(Or,""),n=ja(t,0),a=n>=Rt[0]&&n<=Rt[1],r=t.length===2?t[0]===t[1]:!1;return{value:We(r?t[0]:t),isSecondary:a||r}}function Dt(e,t){var n="".concat(ha).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=re(e.children),o=i.filter(function(X){return X.getAttribute(Ge)===t})[0],l=Y.getComputedStyle(e,t),c=l.getPropertyValue("font-family").match(xa),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!c)return e.removeChild(o),a();if(c&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),h=~["Sharp"].indexOf(c[2])?w:y,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?ce[h][c[2].toLowerCase()]:wa[h][u],N=Cr(d),E=N.value,k=N.isSecondary,I=c[0].startsWith("FontAwesome"),A=mt(b,E),S=A;if(I){var T=Xa(E);T.iconName&&T.prefix&&(A=T.iconName,b=T.prefix)}if(A&&!k&&(!o||o.getAttribute(ot)!==b||o.getAttribute(st)!==S)){e.setAttribute(n,S),o&&e.removeChild(o);var C=br(),W=C.extra;W.attributes[Ge]=t,Je(A,b).then(function(X){var Re=vt(m(m({},C),{},{icons:{main:X,mask:dt()},prefix:b,iconName:S,extra:W,watchable:!0})),j=x.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(j,e.firstChild):e.appendChild(j),j.outerHTML=Re.map(function(Tn){return he(Tn)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Pr(e){return Promise.all([Dt(e,"::before"),Dt(e,"::after")])}function Er(e){return e.parentNode!==document.head&&!~ba.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ge)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ht(e){if(!!H)return new Promise(function(t,n){var a=re(e.querySelectorAll("*")).filter(Er).map(Pr),r=ht.begin("searchPseudoElements");Nn(),Promise.all(a).then(function(){r(),Ze(),t()}).catch(function(){r(),Ze(),n()})})}var _r={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ht,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?x:a;v.searchPseudoElements&&Ht(r)}}},jt=!1,Ir={mixout:function(){return{dom:{unwatch:function(){Nn(),jt=!0}}}},hooks:function(){return{bootstrap:function(){zt(Be("mutationObserverCallbacks",{}))},noAuto:function(){dr()},watch:function(n){var a=n.observeMutationsRoot;jt?Ze():zt(Be("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},$t=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return a.flipX=!0,a;if(o&&l==="v")return a.flipY=!0,a;if(l=parseFloat(l),isNaN(l))return a;switch(o){case"grow":a.size=a.size+l;break;case"shrink":a.size=a.size-l;break;case"left":a.x=a.x-l;break;case"right":a.x=a.x+l;break;case"up":a.y=a.y-l;break;case"down":a.y=a.y+l;break;case"rotate":a.rotate=a.rotate+l;break}return a},n)},Tr={mixout:function(){return{parse:{transform:function(n){return $t(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=$t(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(c," ").concat(u," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},b={outer:l,inner:d,path:h};return{tag:"g",attributes:m({},b.outer),children:[{tag:"g",attributes:m({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),b.path)}]}]}}}},$e={x:0,y:0,width:"100%",height:"100%"};function Vt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Mr(e){return e.tag==="g"?e.children:[e]}var zr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Le(r.split(" ").map(function(o){return o.trim()})):dt();return i.prefix||(i.prefix=U()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,l=n.maskId,c=n.transform,u=i.width,f=i.icon,d=o.width,h=o.icon,b=Ta({transform:c,containerWidth:d,iconWidth:u}),N={tag:"rect",attributes:m(m({},$e),{},{fill:"white"})},E=f.children?{children:f.children.map(Vt)}:{},k={tag:"g",attributes:m({},b.inner),children:[Vt(m({tag:f.tag,attributes:m(m({},f.attributes),b.path)},E))]},I={tag:"g",attributes:m({},b.outer),children:[k]},A="mask-".concat(l||me()),S="clip-".concat(l||me()),T={tag:"mask",attributes:m(m({},$e),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,I]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Mr(h)},T]};return a.push(C,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(A,")")},$e)}),{children:a,attributes:r}}}},Lr={provides:function(t){var n=!1;Y.matchMedia&&(n=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(l),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Fr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Rr=[La,kr,Ar,Nr,Sr,_r,Ir,Tr,zr,Lr,Fr];Ka(Rr,{mixoutsTo:M});M.noAuto;M.config;M.library;M.dom;var et=M.parse;M.findIconDefinition;M.toHtml;var Dr=M.icon;M.layer;M.text;M.counter;var p={exports:{}},Hr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jr=Hr,$r=jr;function On(){}function Cn(){}Cn.resetWarningCache=On;var Vr=function(){function e(a,r,i,o,l,c){if(c!==$r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Cn,resetWarningCache:On};return n.PropTypes=n,n};p.exports=Vr();function Yt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yt(Object(n),!0).forEach(function(a){ee(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Te(e){return Te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Te(e)}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yr(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Ur(e,t){if(e==null)return{};var n=Yr(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(n[a]=e[a]))}return n}function tt(e){return Gr(e)||Wr(e)||Xr(e)||Br()}function Gr(e){if(Array.isArray(e))return nt(e)}function Wr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Xr(e,t){if(!!e){if(typeof e=="string")return nt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nt(e,t)}}function nt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Br(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qr(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,c=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,h=e.fixedWidth,b=e.inverse,N=e.border,E=e.listItem,k=e.flip,I=e.size,A=e.rotation,S=e.pull,T=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":b,"fa-border":N,"fa-li":E,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},ee(t,"fa-".concat(I),typeof I<"u"&&I!==null),ee(t,"fa-rotate-".concat(A),typeof A<"u"&&A!==null&&A!==0),ee(t,"fa-pull-".concat(S),typeof S<"u"&&S!==null),ee(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(T).map(function(C){return T[C]?C:null}).filter(function(C){return C})}function Kr(e){return e=e-0,e===e}function Pn(e){return Kr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Jr=["style"];function Qr(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Zr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Pn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[Qr(r)]=i:t[r]=i,t},{})}function En(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return En(e,c)}),r=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.attrs.className=f,delete t.attributes.class;break;case"style":c.attrs.style=Zr(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?c.attrs[u.toLowerCase()]=f:c.attrs[Pn(u)]=f}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=Ur(n,Jr);return r.attrs.style=V(V({},r.attrs.style),o),e.apply(void 0,[t.tag,V(V({},r.attrs),l)].concat(tt(a)))}var _n=!1;try{_n=!0}catch{}function ei(){if(!_n&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ut(e){if(e&&Te(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(et.icon)return et.icon(e);if(e===null)return null;if(e&&Te(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ve(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ee({},e,t):{}}var P=Bt.forwardRef(function(e,t){var n=e.icon,a=e.mask,r=e.symbol,i=e.className,o=e.title,l=e.titleId,c=e.maskId,u=Ut(n),f=Ve("classes",[].concat(tt(qr(e)),tt(i.split(" ")))),d=Ve("transform",typeof e.transform=="string"?et.transform(e.transform):e.transform),h=Ve("mask",Ut(a)),b=Dr(u,V(V(V(V({},f),d),h),{},{symbol:r,title:o,titleId:l,maskId:c}));if(!b)return ei("Could not find icon",u),null;var N=b.abstract,E={ref:t};return Object.keys(e).forEach(function(k){P.defaultProps.hasOwnProperty(k)||(E[k]=e[k])}),ti(N[0],E)});P.displayName="FontAwesomeIcon";P.propTypes={beat:p.exports.bool,border:p.exports.bool,beatFade:p.exports.bool,bounce:p.exports.bool,className:p.exports.string,fade:p.exports.bool,flash:p.exports.bool,mask:p.exports.oneOfType([p.exports.object,p.exports.array,p.exports.string]),maskId:p.exports.string,fixedWidth:p.exports.bool,inverse:p.exports.bool,flip:p.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.exports.oneOfType([p.exports.object,p.exports.array,p.exports.string]),listItem:p.exports.bool,pull:p.exports.oneOf(["right","left"]),pulse:p.exports.bool,rotation:p.exports.oneOf([0,90,180,270]),shake:p.exports.bool,size:p.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.exports.bool,spinPulse:p.exports.bool,spinReverse:p.exports.bool,symbol:p.exports.oneOfType([p.exports.bool,p.exports.string]),title:p.exports.string,titleId:p.exports.string,transform:p.exports.oneOfType([p.exports.string,p.exports.object]),swapOpacity:p.exports.bool};P.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var ti=En.bind(null,Bt.createElement);const ni=({})=>{const e=ne(f=>f.user),t=e.token,[n,a]=Oe.exports.useState([]),[r,i]=Oe.exports.useState([]),o=zn(),l=e.rol===at.ADMIN,c=async()=>{try{const{data:f}=await Xn(o.idClub,t);a(f)}catch(f){console.error(f)}},u=async()=>{try{const{data:f}=await Bn(o.idClub,t);i(f)}catch(f){console.error(f)}};return Oe.exports.useEffect(()=>{c(),u()},[]),s(Xt,{children:g("div",{className:"grid p-2 gap-8 items-center",children:[g("div",{className:" overflow-hidden",children:[g("div",{className:" flex p-2 bg-gray-200 rounded-lg justify-between items-center",children:[s("h1",{className:"text-black text-sm",children:"Clientes registrados"}),s("button",{className:"btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent",children:"Nuevo cliente"})]}),s("div",{className:"max-h-48 overflow-auto m-2",children:g("table",{className:"table table-zebra table-xs table-pin-rows table-pin-cols bg-white mt-5 text-center",children:[s("thead",{children:g("tr",{children:[s("th",{children:"ID"}),s("th",{children:"Usuario"}),s("th",{children:"Apellido"}),s("th",{children:"Contacto de Emergencia"}),s("th",{children:"N\xFAmero del contacto"}),s("th",{children:"Tipo de Suscripci\xF3n"}),s("th",{children:"Activo"}),s("th",{children:"Inicio de Subscripci\xF3n"}),s("th",{children:"Vencimiento"}),s("th",{children:"Acciones"})]})}),s("tbody",{children:n.map(f=>g("tr",{children:[s("td",{children:f.idUser}),s("td",{children:f.username}),s("td",{children:f.lastName}),s("td",{children:f.nameEmergencyContact}),s("td",{children:f.emergencyContact}),s("td",{children:f.nameSubscriptionType}),s("td",{children:f.isActive}),s("td",{children:f.startDate?f.startDate.toString().split("T")[0]:"N/A"}),s("td",{children:f.endDate?f.endDate.toString().split("T")[0]:"N/A"}),s("td",{children:g("div",{className:"grid grid-flow-col gap-2",children:[s("button",{title:"Editar Usuario",children:s(P,{icon:Zn,className:"h-4"})}),s("button",{title:"Gestionar Subscripci\xF3n",children:s(P,{icon:ia,className:"h-4"})})]})})]},f.idUser))})]})}),s("div",{})]}),g("div",{className:"overflow-hidden mt-10",children:[g("div",{className:" flex p-2 bg-gray-200 rounded-lg justify-between items-center",children:[s("h1",{className:"text-black text-sm",children:"Miembros del Staf"}),l&&s("button",{className:"btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent",children:"Nuevo staff"})]}),s("div",{className:"max-h-48 overflow-auto p-2",children:g("table",{className:"table table-zebra table-xs table-pin-rows table-pin-cols bg-white mt-5 text-center",children:[s("thead",{children:g("tr",{children:[s("th",{children:"ID"}),s("th",{children:"Staff"}),s("th",{children:"N\xFAmero de Tel\xE9fono"}),s("th",{children:"Contacto de Emergencia"}),s("th",{children:"N\xFAmero del Contacto"}),s("th",{children:"\xDAltima entrada"}),s("th",{children:"\xDAltima salida"}),s("th",{children:"Acciones"})]})}),s("tbody",{children:r.map(f=>g("tr",{children:[s("td",{children:f.idUser}),s("td",{children:f.username}),s("td",{children:f.phoneNumber}),s("td",{children:f.nameEmergencyContact}),s("td",{children:f.emergencyContact}),s("td",{children:f.arrivalHour?f.arrivalHour.toString().split("T")[0]:"N/A"}),s("td",{children:f.exitHour?f.exitHour.toString().split("T")[0]:"N/A"})]},f.idUser))})]})})]})]})})};const ai=({})=>s("div",{className:"container-fluid",children:s("div",{className:"flex justify-center items-center",children:s("h1",{children:"No cuentas con acceso a este m\xF3dulo"})})});function In(){const e=Wt(),t=qt();return s("button",{onClick:()=>{Ln(Fn),t(Rn()),e("/login",{replace:!0})},className:"text-sm",children:"Salir"})}const ri=({})=>{const t=Dn().pathname.split("/").filter(a=>a!==""),n=t.map((a,r)=>{const i=a.split("_").join(" "),l=`/${t.slice(0,r+1).join("/")}`;return s("li",{children:s(Hn,{to:l,children:i})},r)});return g("div",{className:"navbar p-4 border-b",children:[s("div",{className:"relative flex-1",children:s("div",{className:"lg:text-sm text-xs breadcrumbs",children:s("ul",{className:"",children:n})})}),s("div",{className:"flex-none",children:s("ul",{className:"menu menu-horizontal px-0",children:s("li",{children:g("details",{children:[s("summary",{className:"text-xs",children:s("h1",{children:"M\xE1s"})}),g("ul",{className:"text-xs",children:[s("li",{children:g("div",{children:[s(P,{icon:Kn,className:"h-2"}),s("h1",{children:"Editar perfil"})]})}),s("li",{children:g("div",{children:[s(P,{icon:Jt,className:"h-2"}),s(In,{})]})})]})]})})})})]})};const ii=({})=>{const e=ne(a=>a.club),n=ne(a=>a.user).rol===at.ADMIN;return s("div",{className:"h-full md:overflow-y-auto md:overflow-x-hidden bg-black",children:g("div",{className:"pt-20",children:[s("div",{className:"flex flex-col items-center",children:g("div",{className:"flex flex-col pt-6 justify-center",children:[s("img",{src:jn,className:"h-10",alt:"Logo"}),s("h1",{className:"text-lg mt-2  font-medium bottom-0 text-center text-white",children:"Black Gym Club"})]})}),s("div",{className:"pt-5",children:g("ul",{className:"py-2 px-3 text-white text-sm",children:[s("li",{className:"m-5 hover:bg-white rounded-md hover:text-black",children:g("a",{href:"/",className:"flex items-center",children:[s(P,{icon:ra,className:"m-3 h-3"}),s("h1",{children:"Inicio"})]})}),!n&&s("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:g("a",{href:`/Dashboard/Gestion_de_Sucursal/${e.idClub}`,className:"flex items-center",children:[s(P,{icon:ta,className:"m-3 h-3"}),s("h1",{children:"Gesti\xF3n de Sucursal"})]})}),n&&s("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:g("a",{href:"/Dashboard/Gestion_de_Sucursales/",className:"flex items-center",children:[s(P,{icon:Qn,className:"m-3 h-3"}),s("h1",{children:"Gesti\xF3n de Sucursales"})]})}),!n&&s("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:g("a",{href:`/Dashboard/Punto_de_Venta/${e.idClub}`,className:"flex items-center",children:[s(P,{icon:na,className:"m-3 h-3"}),s("h1",{children:"Punto de Venta"})]})}),!n&&s("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:g("a",{href:`/Dashboard/Inventario/${e.idClub}`,className:"flex items-center",children:[s(P,{icon:bt,className:"m-3 h-3"}),s("h1",{children:"Inventario"})]})}),n&&s("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:g("a",{href:"/Dashboard/Gestion_de_Inventarios/",className:"flex items-center",children:[s(P,{icon:bt,className:"m-3 h-3"}),s("h1",{children:"Gesti\xF3n de Inventarios"})]})}),n&&s("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:g("a",{href:"/Dashboard/Gestion_Financiera/",className:"flex items-center",children:[s(P,{icon:ea,className:"m-3 h-3"}),s("h1",{children:"Gesti\xF3n Financiera"})]})}),n&&s("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:g("a",{href:"/Dashboard/Panel_de_Administrador/",className:"flex items-center",children:[s(P,{icon:Jn,className:"m-3 h-3"}),s("h1",{children:"Administraci\xF3n"})]})}),s("li",{className:"m-5 ml-5 mt-7 hover:bg-white rounded-md hover:text-black",children:g("a",{href:"/login",className:"flex items-center",children:[s(P,{icon:Jt,className:"m-3 h-3"}),s("h1",{children:s(In,{})})]})})]})})]})})};const oi=({})=>s("div",{className:"puntoventa",children:"PuntoVenta"});const si=({})=>s("div",{className:"gestionfinanciera",children:"GestionFinanciera"});const li=({})=>s("div",{className:"paneladmin",children:"PanelAdmin"});const ci=({})=>s("div",{className:"gestioninventarios",children:"GestionInventarios"});const fi=({})=>s("div",{className:"inventario",children:"Inventario"});const ui=({})=>s("div",{className:"gestionsubscripciones",children:"GestionSubscripciones"});const mi=({})=>s("div",{className:"registrousuarios",children:"RegistroUsuarios"});const di=({})=>s("div",{className:"finanzasxsucursal",children:"FinanzasXSucursal"});const vi=({})=>s("div",{className:"gestionclubes",children:"GestionClubes"}),hi=Oe.exports.lazy(()=>$n(()=>import("./Dashboard.90205845.js"),["assets/Dashboard.90205845.js","assets/index.19d17757.js","assets/index.97d7da6c.css","assets/auth.service.3d46759f.js"]));function pi(){const e=ne(n=>n.open.open),t=qt();return g("div",{className:"flex h-screen overflow-hidden text-lg",children:[s("button",{onClick:()=>t(Vn()),className:"transition-all duration-300",children:s(P,{icon:qn,className:"absolute bottom-5 right-6 p-4 m-0 hover:bg-black hover:text-white hover:rounded-xl transition-all duration-300 lg:hidden"})}),s("div",{className:`lg:block relative ${e?" lg:w-72 block":"hidden"}  transition-all duration-500`,children:s(ii,{})}),g("div",{className:"flex-grow overflow-x-hidden max-h-screen p-4 bg-white rounded-xl m-2",children:[s(ri,{}),s("div",{className:"p-6 overflow-y-auto",children:g(Yn,{children:[s(_,{path:"/",element:s(Gt,{to:Se.DASHBOARD})}),s(_,{path:Se.DASHBOARD,element:s(hi,{})}),s(_,{path:Se.CANTACCESS,element:s(ai,{})}),s(_,{path:"Gestion_de_Sucursal/:idClub",element:s(ni,{})}),s(_,{path:"Finanzas_Por_Sucursal/:idClub",element:s(di,{})}),s(_,{path:"Punto_de_Venta/:idClub",element:s(oi,{})}),s(_,{path:"Inventario/:idClub",element:s(fi,{})}),s(_,{path:"Gestion_de_Subscripciones/:idClub",element:s(ui,{})}),s(_,{path:"Registro_de_Usuarios/:idClub",element:s(mi,{})}),s(_,{path:"Registro_de_Productos/:idClub"}),s(_,{path:"Gestion_de_Inventario/:idClub"}),g(_,{element:s(Gn,{rol:at.ADMIN}),children:[s(_,{path:"Gestion_de_Sucursales/",element:s(Wn,{})}),s(_,{path:"Gestion_Financiera/",element:s(si,{})}),s(_,{path:"Panel_de_Administrador",element:s(li,{})}),s(_,{path:"Gestion_de_Inventarios/",element:s(ci,{})}),s(_,{path:"Gestion_de_Clubes/",element:s(vi,{})})]})]})})]})]})}const yi=Object.freeze(Object.defineProperty({__proto__:null,default:pi},Symbol.toStringTag,{value:"Module"}));export{P as F,yi as P,bt as a,ea as b,ta as c,na as d,Qn as f};
