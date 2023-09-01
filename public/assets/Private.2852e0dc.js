import{i as J,j as s,O as Ln,N as Wt,e as Oe,u as Xt,F as Bt,k as qt,r as K,m as Fn,n as at,b as p,c as Rn,U as Dn,a as jn,o as Hn,L as $n,l as Vn,_ as Yn,p as Un,q as I,t as Gn}from"./index.aa0ac621.js";import{b as Kt,u as Jt}from"./auth.service.7e91d73a.js";function Wn({rol:e}){return J(n=>n.user).rol===e?s(Ln,{}):s(Wt,{replace:!0,to:Oe.CANTACCESS})}const Xn=Kt+"dbaccess/getInventory",Bn=async(e,t)=>{const n={idClub:e},a={method:"POST",headers:{Authorization:t,"Content-Type":"application/json"},body:JSON.stringify(n)};return fetch(Xn,a).then(async r=>{if(!r.ok){const i=await r.json();throw new Error(i.message)}return r.json()}).then(r=>{if(r.error)throw new Error(r.message||"Error desconocido");return r}).catch(r=>{throw console.error("Error:",r),r})};const qn=({})=>{const t=""+J(n=>n.club).idClub;return Xt(),s(Bt,{children:s("div",{children:s("a",{href:`/Dashboard/Gestion_de_Sucursal/${t}`,children:"Sucursal"})})})},Qt=Kt+"dbaccess/",Kn=(e,t)=>{const n={idClub:e},a={method:"POST",headers:{Authorization:t,"Content-Type":"application/json"},body:JSON.stringify(n)};return fetch(Qt+"viewClientsData",a).then(async r=>{if(!r.ok){const i=await r.json();throw new Error(i.message)}return r.json()}).then(r=>{if(r.error)throw new Error(r.message||"Error desconocido");return r}).catch(r=>{throw console.error("Error:",r),r})},Jn=(e,t)=>{const n={idClub:e},a={method:"POST",headers:{Authorization:t,"Content-Type":"application/json"},body:JSON.stringify(n)};return fetch(Qt+"viewStaffData",a).then(async r=>{if(!r.ok){const i=await r.json();throw new Error(i.message)}return r.json()}).then(r=>{if(r.error)throw new Error(r.message||"Error desconocido");return r}).catch(r=>{throw console.error("Error:",r),r})};var Qn={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Zn={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},ea={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},Zt={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},ta={prefix:"fas",iconName:"city",icon:[640,512,[127961],"f64f","M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"]},pt={prefix:"fas",iconName:"user-pen",icon:[640,512,["user-edit"],"f4ff","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"]},na={prefix:"fas",iconName:"chart-pie",icon:[576,512,["pie-chart"],"f200","M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"]},aa={prefix:"fas",iconName:"shop",icon:[640,512,["store-alt"],"f54f","M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"]},ra={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},ia={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},oa=ia,sa={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},gt={prefix:"fas",iconName:"warehouse",icon:[640,512,[],"f494","M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24H568c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32V488c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24V432H512l0 56c0 13.3-10.7 24-24 24zM128 400V336H512v64H128zm0-96V224H512l0 80H128z"]};function yt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yt(Object(n),!0).forEach(function(a){C(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ee(e){return Ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ee(e)}function la(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xt(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ca(e,t,n){return t&&xt(e.prototype,t),n&&xt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rt(e,t){return ua(e)||da(e,t)||en(e,t)||ha()}function ve(e){return fa(e)||ma(e)||en(e)||va()}function fa(e){if(Array.isArray(e))return Ye(e)}function ua(e){if(Array.isArray(e))return e}function ma(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function da(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,l;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(c){i=!0,l=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw l}}return a}}function en(e,t){if(!!e){if(typeof e=="string")return Ye(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ye(e,t)}}function Ye(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function va(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ha(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var kt=function(){},it={},tn={},nn=null,an={mark:kt,measure:kt};try{typeof window<"u"&&(it=window),typeof document<"u"&&(tn=document),typeof MutationObserver<"u"&&(nn=MutationObserver),typeof performance<"u"&&(an=performance)}catch{}var ba=it.navigator||{},wt=ba.userAgent,Nt=wt===void 0?"":wt,Y=it,x=tn,At=nn,pe=an;Y.document;var j=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",rn=~Nt.indexOf("MSIE")||~Nt.indexOf("Trident/"),ge,ye,xe,ke,we,F="___FONT_AWESOME___",Ue=16,on="fa",sn="svg-inline--fa",Q="data-fa-i2svg",Ge="data-fa-pseudo-element",pa="data-fa-pseudo-element-pending",ot="data-prefix",st="data-icon",St="fontawesome-i2svg",ga="async",ya=["HTML","HEAD","STYLE","SCRIPT"],ln=function(){try{return!0}catch{return!1}}(),y="classic",k="sharp",lt=[y,k];function he(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[y]}})}var ce=he((ge={},C(ge,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),C(ge,k,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ge)),fe=he((ye={},C(ye,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),C(ye,k,{solid:"fass",regular:"fasr",light:"fasl"}),ye)),ue=he((xe={},C(xe,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),C(xe,k,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),xe)),xa=he((ke={},C(ke,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),C(ke,k,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ke)),ka=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,cn="fa-layers-text",wa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Na=he((we={},C(we,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),C(we,k,{900:"fass",400:"fasr",300:"fasl"}),we)),fn=[1,2,3,4,5,6,7,8,9,10],Aa=fn.concat([11,12,13,14,15,16,17,18,19,20]),Sa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},me=new Set;Object.keys(fe[y]).map(me.add.bind(me));Object.keys(fe[k]).map(me.add.bind(me));var Oa=[].concat(lt,ve(me),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B.GROUP,B.SWAP_OPACITY,B.PRIMARY,B.SECONDARY]).concat(fn.map(function(e){return"".concat(e,"x")})).concat(Aa.map(function(e){return"w-".concat(e)})),se=Y.FontAwesomeConfig||{};function Ca(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Pa(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x&&typeof x.querySelector=="function"){var Ea=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ea.forEach(function(e){var t=rt(e,2),n=t[0],a=t[1],r=Pa(Ca(n));r!=null&&(se[a]=r)})}var un={styleDefault:"solid",familyDefault:"classic",cssPrefix:on,replacementClass:sn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};se.familyPrefix&&(se.cssPrefix=se.familyPrefix);var re=m(m({},un),se);re.autoReplaceSvg||(re.observeMutations=!1);var v={};Object.keys(un).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(n){re[e]=n,le.forEach(function(a){return a(v)})},get:function(){return re[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){re.cssPrefix=t,le.forEach(function(n){return n(v)})},get:function(){return re.cssPrefix}});Y.FontAwesomeConfig=v;var le=[];function Ia(e){return le.push(e),function(){le.splice(le.indexOf(e),1)}}var $=Ue,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _a(e){if(!(!e||!j)){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=x.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return x.head.insertBefore(t,a),e}}var Ta="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function de(){for(var e=12,t="";e-- >0;)t+=Ta[Math.random()*62|0];return t}function ie(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ct(e){return e.classList?ie(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function mn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ma(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(mn(e[n]),'" ')},"").trim()}function Me(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ft(e){return e.size!==L.size||e.x!==L.x||e.y!==L.y||e.rotate!==L.rotate||e.flipX||e.flipY}function za(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:u}}function La(e){var t=e.transform,n=e.width,a=n===void 0?Ue:n,r=e.height,i=r===void 0?Ue:r,o=e.startCentered,l=o===void 0?!1:o,c="";return l&&rn?c+="translate(".concat(t.x/$-a/2,"em, ").concat(t.y/$-i/2,"em) "):l?c+="translate(calc(-50% + ".concat(t.x/$,"em), calc(-50% + ").concat(t.y/$,"em)) "):c+="translate(".concat(t.x/$,"em, ").concat(t.y/$,"em) "),c+="scale(".concat(t.size/$*(t.flipX?-1:1),", ").concat(t.size/$*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Fa=`:root, :host {
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
}`;function dn(){var e=on,t=sn,n=v.cssPrefix,a=v.replacementClass,r=Fa;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return r}var Ot=!1;function De(){v.autoAddCss&&!Ot&&(_a(dn()),Ot=!0)}var Ra={mixout:function(){return{dom:{css:dn,insertCss:De}}},hooks:function(){return{beforeDOMElementCreation:function(){De()},beforeI2svg:function(){De()}}}},R=Y||{};R[F]||(R[F]={});R[F].styles||(R[F].styles={});R[F].hooks||(R[F].hooks={});R[F].shims||(R[F].shims=[]);var z=R[F],vn=[],Da=function e(){x.removeEventListener("DOMContentLoaded",e),Ie=1,vn.map(function(t){return t()})},Ie=!1;j&&(Ie=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),Ie||x.addEventListener("DOMContentLoaded",Da));function ja(e){!j||(Ie?setTimeout(e,0):vn.push(e))}function be(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?mn(e):"<".concat(t," ").concat(Ma(a),">").concat(i.map(be).join(""),"</").concat(t,">")}function Ct(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ha=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},je=function(t,n,a,r){var i=Object.keys(t),o=i.length,l=r!==void 0?Ha(n,r):n,c,u,f;for(a===void 0?(c=1,f=t[i[0]]):(c=0,f=a);c<o;c++)u=i[c],f=l(f,t[u],u,t);return f};function $a(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function We(e){var t=$a(e);return t.length===1?t[0].toString(16):null}function Va(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Pt(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Xe(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Pt(t);typeof z.hooks.addPack=="function"&&!r?z.hooks.addPack(e,Pt(t)):z.styles[e]=m(m({},z.styles[e]||{}),i),e==="fas"&&Xe("fa",t)}var Ne,Ae,Se,ee=z.styles,Ya=z.shims,Ua=(Ne={},C(Ne,y,Object.values(ue[y])),C(Ne,k,Object.values(ue[k])),Ne),ut=null,hn={},bn={},pn={},gn={},yn={},Ga=(Ae={},C(Ae,y,Object.keys(ce[y])),C(Ae,k,Object.keys(ce[k])),Ae);function Wa(e){return~Oa.indexOf(e)}function Xa(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Wa(r)?r:null}var xn=function(){var t=function(i){return je(ee,function(o,l,c){return o[c]=je(l,i,{}),o},{})};hn=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var l=i[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){r[c.toString(16)]=o})}return r}),bn=t(function(r,i,o){if(r[o]=o,i[2]){var l=i[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){r[c]=o})}return r}),yn=t(function(r,i,o){var l=i[2];return r[o]=o,l.forEach(function(c){r[c]=o}),r});var n="far"in ee||v.autoFetchSvg,a=je(Ya,function(r,i){var o=i[0],l=i[1],c=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(r.names[o]={prefix:l,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:l,iconName:c}),r},{names:{},unicodes:{}});pn=a.names,gn=a.unicodes,ut=ze(v.styleDefault,{family:v.familyDefault})};Ia(function(e){ut=ze(e.styleDefault,{family:v.familyDefault})});xn();function mt(e,t){return(hn[e]||{})[t]}function Ba(e,t){return(bn[e]||{})[t]}function q(e,t){return(yn[e]||{})[t]}function kn(e){return pn[e]||{prefix:null,iconName:null}}function qa(e){var t=gn[e],n=mt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function U(){return ut}var dt=function(){return{prefix:null,iconName:null,rest:[]}};function ze(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?y:n,r=ce[a][e],i=fe[a][e]||fe[a][r],o=e in z.styles?e:null;return i||o||null}var Et=(Se={},C(Se,y,Object.keys(ue[y])),C(Se,k,Object.keys(ue[k])),Se);function Le(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},C(t,y,"".concat(v.cssPrefix,"-").concat(y)),C(t,k,"".concat(v.cssPrefix,"-").concat(k)),t),o=null,l=y;(e.includes(i[y])||e.some(function(u){return Et[y].includes(u)}))&&(l=y),(e.includes(i[k])||e.some(function(u){return Et[k].includes(u)}))&&(l=k);var c=e.reduce(function(u,f){var d=Xa(v.cssPrefix,f);if(ee[f]?(f=Ua[l].includes(f)?xa[l][f]:f,o=f,u.prefix=f):Ga[l].indexOf(f)>-1?(o=f,u.prefix=ze(f,{family:l})):d?u.iconName=d:f!==v.replacementClass&&f!==i[y]&&f!==i[k]&&u.rest.push(f),!r&&u.prefix&&u.iconName){var h=o==="fa"?kn(u.iconName):{},g=q(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!ee.far&&ee.fas&&!v.autoFetchSvg&&(u.prefix="fas")}return u},dt());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&l===k&&(ee.fass||v.autoFetchSvg)&&(c.prefix="fass",c.iconName=q(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=U()||"fas"),c}var Ka=function(){function e(){la(this,e),this.definitions={}}return ca(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=m(m({},n.definitions[l]||{}),o[l]),Xe(l,o[l]);var c=ue[y][l];c&&Xe(c,o[l]),xn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],l=o.prefix,c=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][c]=u}),n}}]),e}(),It=[],te={},ae={},Ja=Object.keys(ae);function Qa(e,t){var n=t.mixoutsTo;return It=e,te={},Object.keys(ae).forEach(function(a){Ja.indexOf(a)===-1&&delete ae[a]}),It.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Ee(r[o])==="object"&&Object.keys(r[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=r[o][l]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){te[o]||(te[o]=[]),te[o].push(i[o])})}a.provides&&a.provides(ae)}),n}function Be(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=te[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function Z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=te[e]||[];r.forEach(function(i){i.apply(null,n)})}function D(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ae[e]?ae[e].apply(null,t):void 0}function qe(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||U();if(!!t)return t=q(n,t)||t,Ct(wn.definitions,n,t)||Ct(z.styles,n,t)}var wn=new Ka,Za=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,Z("noAuto")},er={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(Z("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,ja(function(){nr({autoReplaceSvgRoot:n}),Z("watch",t)})}},tr={icon:function(t){if(t===null)return null;if(Ee(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:q(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=ze(t[0]);return{prefix:a,iconName:q(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match(ka))){var r=Le(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=U();return{prefix:i,iconName:q(i,t)||t}}}},M={noAuto:Za,config:v,dom:er,parse:tr,library:wn,findIconDefinition:qe,toHtml:be},nr=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?x:n;(Object.keys(z.styles).length>0||v.autoFetchSvg)&&j&&v.autoReplaceSvg&&M.dom.i2svg({node:a})};function Fe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return be(a)})}}),Object.defineProperty(e,"node",{get:function(){if(!!j){var a=x.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function ar(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(ft(o)&&n.found&&!a.found){var l=n.width,c=n.height,u={x:l/c/2,y:.5};r.style=Me(m(m({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function rr(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function vt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,c=e.title,u=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,A=a.found?a:n,E=A.width,w=A.height,_=r==="fak",N=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(H){return d.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(d.classes).join(" "),S={children:[],attributes:m(m({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:N,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(w)})},T=_&&!~d.classes.indexOf("fa-fw")?{width:"".concat(E/w*16*.0625,"em")}:{};g&&(S.attributes[Q]=""),c&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(f||de())},children:[c]}),delete S.attributes.title);var P=m(m({},S),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:o,symbol:l,styles:m(m({},T),d.styles)}),W=a.found&&n.found?D("generateAbstractMask",P)||{children:[],attributes:{}}:D("generateAbstractIcon",P)||{children:[],attributes:{}},X=W.children,Re=W.attributes;return P.children=X,P.attributes=Re,l?rr(P):ar(P)}function _t(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,l=e.watchable,c=l===void 0?!1:l,u=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(u[Q]="");var f=m({},o.styles);ft(r)&&(f.transform=La({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var d=Me(f);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function ir(e){var t=e.content,n=e.title,a=e.extra,r=m(m(m({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Me(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var He=z.styles;function Ke(e){var t=e[0],n=e[1],a=e.slice(4),r=rt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var or={found:!1,width:512,height:512};function sr(e,t){!ln&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Je(e,t){var n=t;return t==="fa"&&v.styleDefault!==null&&(t=U()),new Promise(function(a,r){if(D("missingIconAbstract"),n==="fa"){var i=kn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&He[t]&&He[t][e]){var o=He[t][e];return a(Ke(o))}sr(e,t),a(m(m({},or),{},{icon:v.showMissingIcons&&e?D("missingIconAbstract")||{}:{}}))})}var Tt=function(){},Qe=v.measurePerformance&&pe&&pe.mark&&pe.measure?pe:{mark:Tt,measure:Tt},oe='FA "6.4.2"',lr=function(t){return Qe.mark("".concat(oe," ").concat(t," begins")),function(){return Nn(t)}},Nn=function(t){Qe.mark("".concat(oe," ").concat(t," ends")),Qe.measure("".concat(oe," ").concat(t),"".concat(oe," ").concat(t," begins"),"".concat(oe," ").concat(t," ends"))},ht={begin:lr,end:Nn},Ce=function(){};function Mt(e){var t=e.getAttribute?e.getAttribute(Q):null;return typeof t=="string"}function cr(e){var t=e.getAttribute?e.getAttribute(ot):null,n=e.getAttribute?e.getAttribute(st):null;return t&&n}function fr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function ur(){if(v.autoReplaceSvg===!0)return Pe.replace;var e=Pe[v.autoReplaceSvg];return e||Pe.replace}function mr(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function dr(e){return x.createElement(e)}function An(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?mr:dr:n;if(typeof e=="string")return x.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(An(o,{ceFn:a}))}),r}function vr(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Pe={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(An(r),n)}),n.getAttribute(Q)===null&&v.keepOriginalSource){var a=x.createComment(vr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~ct(n).indexOf(v.replacementClass))return Pe.replace(t);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(l,c){return c===v.replacementClass||c.match(r)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(l){return be(l)}).join(`
`);n.setAttribute(Q,""),n.innerHTML=o}};function zt(e){e()}function Sn(e,t){var n=typeof t=="function"?t:Ce;if(e.length===0)n();else{var a=zt;v.mutateApproach===ga&&(a=Y.requestAnimationFrame||zt),a(function(){var r=ur(),i=ht.begin("mutate");e.map(r),i(),n()})}}var bt=!1;function On(){bt=!0}function Ze(){bt=!1}var _e=null;function Lt(e){if(!!At&&!!v.observeMutations){var t=e.treeCallback,n=t===void 0?Ce:t,a=e.nodeCallback,r=a===void 0?Ce:a,i=e.pseudoElementsCallback,o=i===void 0?Ce:i,l=e.observeMutationsRoot,c=l===void 0?x:l;_e=new At(function(u){if(!bt){var f=U();ie(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Mt(d.addedNodes[0])&&(v.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Mt(d.target)&&~Sa.indexOf(d.attributeName))if(d.attributeName==="class"&&cr(d.target)){var h=Le(ct(d.target)),g=h.prefix,A=h.iconName;d.target.setAttribute(ot,g||f),A&&d.target.setAttribute(st,A)}else fr(d.target)&&r(d.target)})}}),j&&_e.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hr(){!_e||_e.disconnect()}function br(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function pr(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=Le(ct(e));return r.prefix||(r.prefix=U()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ba(r.prefix,e.innerText)||mt(r.prefix,We(e.innerText))),!r.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function gr(e){var t=ie(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return v.autoA11y&&(n?t["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||de()):(t["aria-hidden"]="true",t.focusable="false")),t}function yr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ft(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=pr(e),a=n.iconName,r=n.prefix,i=n.rest,o=gr(e),l=Be("parseNodeAttributes",{},e),c=t.styleParser?br(e):[];return m({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},l)}var xr=z.styles;function Cn(e){var t=v.autoReplaceSvg==="nest"?Ft(e,{styleParser:!1}):Ft(e);return~t.extra.classes.indexOf(cn)?D("generateLayersText",e,t):D("generateSvgReplacementMutation",e,t)}var G=new Set;lt.map(function(e){G.add("fa-".concat(e))});Object.keys(ce[y]).map(G.add.bind(G));Object.keys(ce[k]).map(G.add.bind(G));G=ve(G);function Rt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var n=x.documentElement.classList,a=function(d){return n.add("".concat(St,"-").concat(d))},r=function(d){return n.remove("".concat(St,"-").concat(d))},i=v.autoFetchSvg?G:lt.map(function(f){return"fa-".concat(f)}).concat(Object.keys(xr));i.includes("fa")||i.push("fa");var o=[".".concat(cn,":not([").concat(Q,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=ie(e.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();var c=ht.begin("onTree"),u=l.reduce(function(f,d){try{var h=Cn(d);h&&f.push(h)}catch(g){ln||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(h){Sn(h,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),c(),f()})}).catch(function(h){c(),d(h)})})}function kr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Cn(e).then(function(n){n&&Sn([n],t)})}function wr(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:qe(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:qe(r||{})),e(a,m(m({},n),{},{mask:r}))}}var Nr=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?L:a,i=n.symbol,o=i===void 0?!1:i,l=n.mask,c=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,d=n.title,h=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,E=n.classes,w=E===void 0?[]:E,_=n.attributes,N=_===void 0?{}:_,S=n.styles,T=S===void 0?{}:S;if(!!t){var P=t.prefix,W=t.iconName,X=t.icon;return Fe(m({type:"icon"},t),function(){return Z("beforeDOMElementCreation",{iconDefinition:t,params:n}),v.autoA11y&&(h?N["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(A||de()):(N["aria-hidden"]="true",N.focusable="false")),vt({icons:{main:Ke(X),mask:c?Ke(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:W,transform:m(m({},L),r),symbol:o,title:h,maskId:f,titleId:A,extra:{attributes:N,styles:T,classes:w}})})}},Ar={mixout:function(){return{icon:wr(Nr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Rt,n.nodeCallback=kr,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?x:a,i=n.callback,o=i===void 0?function(){}:i;return Rt(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,l=a.prefix,c=a.transform,u=a.symbol,f=a.mask,d=a.maskId,h=a.extra;return new Promise(function(g,A){Promise.all([Je(r,l),f.iconName?Je(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var w=rt(E,2),_=w[0],N=w[1];g([n,vt({icons:{main:_,mask:N},prefix:l,iconName:r,transform:c,symbol:u,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,l=n.styles,c=Me(l);c.length>0&&(r.style=c);var u;return ft(o)&&(u=D("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},Sr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Fe({type:"layer"},function(){Z("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(l){Array.isArray(l)?l.map(function(c){o=o.concat(c.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(ve(i)).join(" ")},children:o}]})}}}},Or={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,l=o===void 0?[]:o,c=a.attributes,u=c===void 0?{}:c,f=a.styles,d=f===void 0?{}:f;return Fe({type:"counter",content:n},function(){return Z("beforeDOMElementCreation",{content:n,params:a}),ir({content:n.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(ve(l))}})})}}}},Cr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?L:r,o=a.title,l=o===void 0?null:o,c=a.classes,u=c===void 0?[]:c,f=a.attributes,d=f===void 0?{}:f,h=a.styles,g=h===void 0?{}:h;return Fe({type:"text",content:n},function(){return Z("beforeDOMElementCreation",{content:n,params:a}),_t({content:n,transform:m(m({},L),i),title:l,extra:{attributes:d,styles:g,classes:["".concat(v.cssPrefix,"-layers-text")].concat(ve(u))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,l=null,c=null;if(rn){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,c=f.height/u}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,_t({content:n.innerHTML,width:l,height:c,transform:i,title:r,extra:o,watchable:!0})])}}},Pr=new RegExp('"',"ug"),Dt=[1105920,1112319];function Er(e){var t=e.replace(Pr,""),n=Va(t,0),a=n>=Dt[0]&&n<=Dt[1],r=t.length===2?t[0]===t[1]:!1;return{value:We(r?t[0]:t),isSecondary:a||r}}function jt(e,t){var n="".concat(pa).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=ie(e.children),o=i.filter(function(X){return X.getAttribute(Ge)===t})[0],l=Y.getComputedStyle(e,t),c=l.getPropertyValue("font-family").match(wa),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!c)return e.removeChild(o),a();if(c&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),h=~["Sharp"].indexOf(c[2])?k:y,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?fe[h][c[2].toLowerCase()]:Na[h][u],A=Er(d),E=A.value,w=A.isSecondary,_=c[0].startsWith("FontAwesome"),N=mt(g,E),S=N;if(_){var T=qa(E);T.iconName&&T.prefix&&(N=T.iconName,g=T.prefix)}if(N&&!w&&(!o||o.getAttribute(ot)!==g||o.getAttribute(st)!==S)){e.setAttribute(n,S),o&&e.removeChild(o);var P=yr(),W=P.extra;W.attributes[Ge]=t,Je(N,g).then(function(X){var Re=vt(m(m({},P),{},{icons:{main:X,mask:dt()},prefix:g,iconName:S,extra:W,watchable:!0})),H=x.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(H,e.firstChild):e.appendChild(H),H.outerHTML=Re.map(function(zn){return be(zn)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ir(e){return Promise.all([jt(e,"::before"),jt(e,"::after")])}function _r(e){return e.parentNode!==document.head&&!~ya.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ge)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ht(e){if(!!j)return new Promise(function(t,n){var a=ie(e.querySelectorAll("*")).filter(_r).map(Ir),r=ht.begin("searchPseudoElements");On(),Promise.all(a).then(function(){r(),Ze(),t()}).catch(function(){r(),Ze(),n()})})}var Tr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ht,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?x:a;v.searchPseudoElements&&Ht(r)}}},$t=!1,Mr={mixout:function(){return{dom:{unwatch:function(){On(),$t=!0}}}},hooks:function(){return{bootstrap:function(){Lt(Be("mutationObserverCallbacks",{}))},noAuto:function(){hr()},watch:function(n){var a=n.observeMutationsRoot;$t?Ze():Lt(Be("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Vt=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return a.flipX=!0,a;if(o&&l==="v")return a.flipY=!0,a;if(l=parseFloat(l),isNaN(l))return a;switch(o){case"grow":a.size=a.size+l;break;case"shrink":a.size=a.size-l;break;case"left":a.x=a.x-l;break;case"right":a.x=a.x+l;break;case"up":a.y=a.y-l;break;case"down":a.y=a.y+l;break;case"rotate":a.rotate=a.rotate+l;break}return a},n)},zr={mixout:function(){return{parse:{transform:function(n){return Vt(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Vt(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(c," ").concat(u," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:d,path:h};return{tag:"g",attributes:m({},g.outer),children:[{tag:"g",attributes:m({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),g.path)}]}]}}}},$e={x:0,y:0,width:"100%",height:"100%"};function Yt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Lr(e){return e.tag==="g"?e.children:[e]}var Fr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Le(r.split(" ").map(function(o){return o.trim()})):dt();return i.prefix||(i.prefix=U()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,l=n.maskId,c=n.transform,u=i.width,f=i.icon,d=o.width,h=o.icon,g=za({transform:c,containerWidth:d,iconWidth:u}),A={tag:"rect",attributes:m(m({},$e),{},{fill:"white"})},E=f.children?{children:f.children.map(Yt)}:{},w={tag:"g",attributes:m({},g.inner),children:[Yt(m({tag:f.tag,attributes:m(m({},f.attributes),g.path)},E))]},_={tag:"g",attributes:m({},g.outer),children:[w]},N="mask-".concat(l||de()),S="clip-".concat(l||de()),T={tag:"mask",attributes:m(m({},$e),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,_]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Lr(h)},T]};return a.push(P,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(N,")")},$e)}),{children:a,attributes:r}}}},Rr={provides:function(t){var n=!1;Y.matchMedia&&(n=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(l),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Dr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},jr=[Ra,Ar,Sr,Or,Cr,Tr,Mr,zr,Fr,Rr,Dr];Qa(jr,{mixoutsTo:M});M.noAuto;M.config;M.library;M.dom;var et=M.parse;M.findIconDefinition;M.toHtml;var Hr=M.icon;M.layer;M.text;M.counter;var b={exports:{}},$r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Vr=$r,Yr=Vr;function Pn(){}function En(){}En.resetWarningCache=Pn;var Ur=function(){function e(a,r,i,o,l,c){if(c!==Yr){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:En,resetWarningCache:Pn};return n.PropTypes=n,n};b.exports=Ur();function Ut(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ut(Object(n),!0).forEach(function(a){ne(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ut(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Te(e){return Te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Te(e)}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gr(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Wr(e,t){if(e==null)return{};var n=Gr(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(n[a]=e[a]))}return n}function tt(e){return Xr(e)||Br(e)||qr(e)||Kr()}function Xr(e){if(Array.isArray(e))return nt(e)}function Br(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qr(e,t){if(!!e){if(typeof e=="string")return nt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nt(e,t)}}function nt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Kr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jr(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,c=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,h=e.fixedWidth,g=e.inverse,A=e.border,E=e.listItem,w=e.flip,_=e.size,N=e.rotation,S=e.pull,T=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":g,"fa-border":A,"fa-li":E,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},ne(t,"fa-".concat(_),typeof _<"u"&&_!==null),ne(t,"fa-rotate-".concat(N),typeof N<"u"&&N!==null&&N!==0),ne(t,"fa-pull-".concat(S),typeof S<"u"&&S!==null),ne(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(T).map(function(P){return T[P]?P:null}).filter(function(P){return P})}function Qr(e){return e=e-0,e===e}function In(e){return Qr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Zr=["style"];function ei(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ti(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=In(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[ei(r)]=i:t[r]=i,t},{})}function _n(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return _n(e,c)}),r=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.attrs.className=f,delete t.attributes.class;break;case"style":c.attrs.style=ti(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?c.attrs[u.toLowerCase()]=f:c.attrs[In(u)]=f}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=Wr(n,Zr);return r.attrs.style=V(V({},r.attrs.style),o),e.apply(void 0,[t.tag,V(V({},r.attrs),l)].concat(tt(a)))}var Tn=!1;try{Tn=!0}catch{}function ni(){if(!Tn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Gt(e){if(e&&Te(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(et.icon)return et.icon(e);if(e===null)return null;if(e&&Te(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ve(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ne({},e,t):{}}var O=qt.forwardRef(function(e,t){var n=e.icon,a=e.mask,r=e.symbol,i=e.className,o=e.title,l=e.titleId,c=e.maskId,u=Gt(n),f=Ve("classes",[].concat(tt(Jr(e)),tt(i.split(" ")))),d=Ve("transform",typeof e.transform=="string"?et.transform(e.transform):e.transform),h=Ve("mask",Gt(a)),g=Hr(u,V(V(V(V({},f),d),h),{},{symbol:r,title:o,titleId:l,maskId:c}));if(!g)return ni("Could not find icon",u),null;var A=g.abstract,E={ref:t};return Object.keys(e).forEach(function(w){O.defaultProps.hasOwnProperty(w)||(E[w]=e[w])}),ai(A[0],E)});O.displayName="FontAwesomeIcon";O.propTypes={beat:b.exports.bool,border:b.exports.bool,beatFade:b.exports.bool,bounce:b.exports.bool,className:b.exports.string,fade:b.exports.bool,flash:b.exports.bool,mask:b.exports.oneOfType([b.exports.object,b.exports.array,b.exports.string]),maskId:b.exports.string,fixedWidth:b.exports.bool,inverse:b.exports.bool,flip:b.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.exports.oneOfType([b.exports.object,b.exports.array,b.exports.string]),listItem:b.exports.bool,pull:b.exports.oneOf(["right","left"]),pulse:b.exports.bool,rotation:b.exports.oneOf([0,90,180,270]),shake:b.exports.bool,size:b.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.exports.bool,spinPulse:b.exports.bool,spinReverse:b.exports.bool,symbol:b.exports.oneOfType([b.exports.bool,b.exports.string]),title:b.exports.string,titleId:b.exports.string,transform:b.exports.oneOfType([b.exports.string,b.exports.object]),swapOpacity:b.exports.bool};O.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var ai=_n.bind(null,qt.createElement);const ri=({})=>{const e=J(f=>f.user),t=e.token,[n,a]=K.exports.useState([]),[r,i]=K.exports.useState([]),o=Fn(),l=e.rol===at.ADMIN,c=async()=>{try{const{data:f}=await Kn(o.idClub,t);a(f)}catch(f){console.error(f)}},u=async()=>{try{const{data:f}=await Jn(o.idClub,t);i(f)}catch(f){console.error(f)}};return K.exports.useEffect(()=>{c(),u()},[]),s(Bt,{children:p("div",{className:"grid p-2 gap-8 items-center",children:[p("div",{className:" overflow-hidden",children:[p("div",{className:" flex p-2 bg-gray-200 rounded-lg justify-between items-center",children:[s("h1",{className:"text-black text-sm",children:"Clientes registrados"}),s("button",{className:"btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent",children:"Nuevo cliente"})]}),s("div",{className:"max-h-48 overflow-auto m-2",children:p("table",{className:"table table-zebra table-xs table-pin-rows table-pin-cols bg-white mt-5 text-center",children:[s("thead",{children:p("tr",{children:[s("th",{children:"ID"}),s("th",{children:"Usuario"}),s("th",{children:"Apellido"}),s("th",{children:"Contacto de Emergencia"}),s("th",{children:"N\xFAmero del contacto"}),s("th",{children:"Tipo de Suscripci\xF3n"}),s("th",{children:"Activo"}),s("th",{children:"Inicio de Subscripci\xF3n"}),s("th",{children:"Vencimiento"}),s("th",{children:"Acciones"})]})}),s("tbody",{children:n.map(f=>p("tr",{children:[s("td",{children:f.idUser}),s("td",{children:f.username}),s("td",{children:f.lastName}),s("td",{children:f.nameEmergencyContact}),s("td",{children:f.emergencyContact}),s("td",{children:f.nameSubscriptionType}),s("td",{children:f.isActive}),s("td",{children:f.startDate?f.startDate.toString().split("T")[0]:"N/A"}),s("td",{children:f.endDate?f.endDate.toString().split("T")[0]:"N/A"}),s("td",{children:p("div",{className:"grid grid-flow-col gap-2",children:[s("button",{title:"Editar Usuario",children:s(O,{icon:pt,className:"h-4"})}),s("button",{title:"Gestionar Subscripci\xF3n",children:s(O,{icon:sa,className:"h-4"})})]})})]},f.idUser))})]})}),s("div",{})]}),p("div",{className:"overflow-hidden mt-10",children:[p("div",{className:" flex p-2 bg-gray-200 rounded-lg justify-between items-center",children:[s("h1",{className:"text-black text-sm",children:"Miembros del Staf"}),l&&s("button",{className:"btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent",children:"Nuevo staff"})]}),s("div",{className:"max-h-48 overflow-auto p-2",children:p("table",{className:"table table-zebra table-xs table-pin-rows table-pin-cols bg-white mt-5 text-center",children:[s("thead",{children:p("tr",{children:[s("th",{children:"ID"}),s("th",{children:"Staff"}),s("th",{children:"N\xFAmero de Tel\xE9fono"}),s("th",{children:"Contacto de Emergencia"}),s("th",{children:"N\xFAmero del Contacto"}),s("th",{children:"\xDAltima entrada"}),s("th",{children:"\xDAltima salida"}),s("th",{children:"Acciones"})]})}),s("tbody",{children:r.map(f=>p("tr",{children:[s("td",{children:f.idUser}),s("td",{children:f.username}),s("td",{children:f.phoneNumber}),s("td",{children:f.nameEmergencyContact}),s("td",{children:f.emergencyContact}),s("td",{children:f.arrivalHour?f.arrivalHour.toString().split("T")[0]:"N/A"}),s("td",{children:f.exitHour?f.exitHour.toString().split("T")[0]:"N/A"}),s("td",{children:s("button",{title:"Editar Usuario",children:s(O,{icon:pt,className:"h-4"})})})]},f.idUser))})]})})]})]})})};const ii=({})=>s("div",{className:"container-fluid",children:s("div",{className:"flex justify-center items-center",children:s("h1",{children:"No cuentas con acceso a este m\xF3dulo"})})});function Mn(){const e=Xt(),t=Jt();return s("button",{onClick:()=>{Rn(Dn),t(jn()),e("/login",{replace:!0})},className:"text-sm",children:"Salir"})}const oi=({})=>{const t=Hn().pathname.split("/").filter(a=>a!==""),n=t.map((a,r)=>{const i=a.split("_").join(" "),l=`/${t.slice(0,r+1).join("/")}`;return s("li",{children:s($n,{to:l,children:i})},r)});return p("div",{className:"navbar p-4 border-b",children:[s("div",{className:"relative flex-1",children:s("div",{className:"lg:text-sm text-xs breadcrumbs",children:s("ul",{className:"",children:n})})}),s("div",{className:"flex-none",children:s("ul",{className:"menu menu-horizontal px-0",children:s("li",{children:p("details",{children:[s("summary",{className:"text-xs",children:s("h1",{children:"M\xE1s"})}),p("ul",{className:"text-xs",children:[s("li",{children:p("div",{children:[s(O,{icon:Zn,className:"h-2"}),s("h1",{children:"Editar perfil"})]})}),s("li",{children:p("div",{children:[s(O,{icon:Zt,className:"h-2"}),s(Mn,{})]})})]})]})})})})]})};const si=({})=>{const e=J(a=>a.club),n=J(a=>a.user).rol===at.ADMIN;return s("div",{className:"h-full md:overflow-y-auto md:overflow-x-hidden bg-black lg:rounded-2xl md:rounded-none rounded-2xl",children:p("div",{className:"pt-20",children:[s("div",{className:"flex flex-col items-center",children:p("div",{className:"flex flex-col pt-6 justify-center",children:[s("img",{src:Vn,className:"h-14",alt:"Logo"}),s("h1",{className:"lg:text-2xl md:text-xl text-base mt-5 font-medium bottom-0 text-center text-white ",children:"Black Gym Club"})]})}),s("div",{className:"pt-8",children:p("ul",{className:"py-5 lg:px-10 md:px-5 text-white lg:text-base md:text-base text-xs",children:[s("li",{className:"m-5 hover:bg-white rounded-md hover:text-black",children:p("a",{href:"/",className:"flex items-center",children:[s(O,{icon:oa,className:"lg:m-3 lg:h-4 m-3 h-6"}),s("h1",{className:"lg:block md:block hidden",children:"Inicio"})]})}),!n&&s("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:p("a",{href:`/Dashboard/Gestion_de_Sucursal/${e.idClub}`,className:"flex items-center",children:[s(O,{icon:aa,className:"lg:m-3 lg:h-4 m-3 h-6"}),s("h1",{className:"lg:block md:block hidden",children:"Gesti\xF3n de Sucursal"})]})}),n&&s("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:p("a",{href:"/Dashboard/Gestion_de_Sucursales/",className:"flex items-center",children:[s(O,{icon:ta,className:"lg:m-3 lg:h-4 m-3 h-6"}),s("h1",{className:"lg:block md:block hidden",children:"Gesti\xF3n de Sucursales"})]})}),!n&&s("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:p("a",{href:`/Dashboard/Punto_de_Venta/${e.idClub}`,className:"flex items-center",children:[s(O,{icon:ra,className:"lg:m-3 lg:h-4 m-3 h-6"}),s("h1",{className:"lg:block md:block hidden",children:"Punto de Venta"})]})}),!n&&s("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:p("a",{href:`/Dashboard/Inventario/${e.idClub}`,className:"flex items-center",children:[s(O,{icon:gt,className:"lg:m-3 lg:h-4 m-3 h-6"}),s("h1",{className:"lg:block md:block hidden",children:"Inventario"})]})}),n&&s("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:p("a",{href:"/Dashboard/Gestion_de_Inventarios/",className:"flex items-center",children:[s(O,{icon:gt,className:"lg:m-3 lg:h-4 m-3 h-6"}),s("h1",{className:"lg:block md:block hidden",children:"Gesti\xF3n de Inventarios"})]})}),n&&s("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:p("a",{href:"/Dashboard/Gestion_Financiera/",className:"flex items-center",children:[s(O,{icon:na,className:"lg:m-3 lg:h-4 m-3 h-6"}),s("h1",{className:"lg:block md:block hidden",children:"Gesti\xF3n Financiera"})]})}),n&&s("li",{className:"m-5 mt-7 hover:bg-white rounded-md hover:text-black",children:p("a",{href:"/Dashboard/Panel_de_Administrador/",className:"flex items-center",children:[s(O,{icon:ea,className:"lg:m-3 lg:h-4 m-3 h-6"}),s("h1",{className:"lg:block md:block hidden",children:"Administraci\xF3n"})]})}),s("li",{className:"m-5 ml-5 mt-7 hover:bg-white rounded-md hover:text-black",children:p("a",{href:"/login",className:"flex items-center",children:[s(O,{icon:Zt,className:"lg:m-3 lg:h-4 m-3 h-6"}),s("h1",{className:"lg:block md:block hidden",children:s(Mn,{})})]})})]})})]})})};const li=({})=>s("div",{className:"puntoventa",children:"PuntoVenta"});const ci=({})=>s("div",{className:"gestionfinanciera",children:"GestionFinanciera"});const fi=({})=>s("div",{className:"paneladmin",children:"PanelAdmin"});const ui=({})=>s("div",{className:"gestioninventarios",children:"GestionInventarios"});const mi=()=>{const[e,t]=K.exports.useState(null),[n,a]=K.exports.useState([]),r=J(i=>i.user.token);return K.exports.useEffect(()=>{(async()=>{try{const o=await Bn("1",r);o.error?t(`Error: ${o.error}`):a(o.data)}catch(o){t(`Error de red: ${o}`)}})()},[r]),p("div",{children:[s("div",{className:"grid p-2 gap-8 items-center",children:s("div",{className:" overflow-hidden",children:p("div",{className:" flex p-2 bg-gray-200 rounded-lg justify-between items-center",children:[s("h1",{className:"text-black text-sm",children:"Inventario"}),s("button",{className:"btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent",children:"Nuevo producto"}),"\\"]})})}),"// Hacer el map de inventoryData aqu\xED usando map k",s("div",{className:"inventory",children:"Inventory"})]})};const di=({})=>s("div",{className:"gestionsubscripciones",children:"GestionSubscripciones"});const vi=({})=>s("div",{className:"registrousuarios",children:"RegistroUsuarios"});const hi=({})=>s("div",{className:"finanzasxsucursal",children:"FinanzasXSucursal"});const bi=({})=>s("div",{className:"gestionclubes",children:"GestionClubes"}),pi=K.exports.lazy(()=>Yn(()=>import("./Dashboard.071173a8.js"),["assets/Dashboard.071173a8.js","assets/index.aa0ac621.js","assets/index.77b43b4b.css","assets/auth.service.7e91d73a.js"]));function gi(){const e=J(n=>n.open.open),t=Jt();return p("div",{className:"flex h-screen overflow-hidden text-lg",children:[s("div",{className:`lg:block lg:p-4 md:p-0 p-4 lg:w-[18%] w-[30%] relative ${e?"lg:w-[18%] w-[30%]  block":"hidden"}  transition-all duration-500`,children:s(si,{})}),p("div",{className:"flex-grow overflow-hidden max-h-screen p-4 rounded-xl lg:m-6 md:m-4 m-0",children:[s(oi,{}),s("div",{className:"p-6 overflow-y-auto",children:p(Un,{children:[s(I,{path:"/",element:s(Wt,{to:Oe.DASHBOARD})}),s(I,{path:Oe.DASHBOARD,element:s(pi,{})}),s(I,{path:Oe.CANTACCESS,element:s(ii,{})}),s(I,{path:"Gestion_de_Sucursal/:idClub",element:s(ri,{})}),s(I,{path:"Finanzas_Por_Sucursal/:idClub",element:s(hi,{})}),s(I,{path:"Punto_de_Venta/:idClub",element:s(li,{})}),s(I,{path:"Inventario/:idClub",element:s(mi,{})}),s(I,{path:"Gestion_de_Subscripciones/:idClub",element:s(di,{})}),s(I,{path:"Registro_de_Usuarios/:idClub",element:s(vi,{})}),s(I,{path:"Registro_de_Productos/:idClub"}),s(I,{path:"Gestion_de_Inventario/:idClub"}),p(I,{element:s(Wn,{rol:at.ADMIN}),children:[s(I,{path:"Gestion_de_Sucursales/",element:s(qn,{})}),s(I,{path:"Gestion_Financiera/",element:s(ci,{})}),s(I,{path:"Panel_de_Administrador",element:s(fi,{})}),s(I,{path:"Gestion_de_Inventarios/",element:s(ui,{})}),s(I,{path:"Gestion_de_Clubes/",element:s(bi,{})})]})]})})]}),s("button",{onClick:()=>t(Gn()),className:"transition-all duration-300",children:s(O,{icon:Qn,className:"absolute bottom-0.5 right-4 p-4 transition-all duration-300 lg:hidden block"})})]})}const ki=Object.freeze(Object.defineProperty({__proto__:null,default:gi},Symbol.toStringTag,{value:"Module"}));export{O as F,ki as P,gt as a,na as b,aa as c,ra as d,ta as f};
