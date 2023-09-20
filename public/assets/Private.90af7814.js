import{o as $,j as s,O as Tr,N as Dn,h as st,n as yt,p as Pn,r as M,q as he,b as g,t as Oa,F as qe,A as ie,v as wt,i as Dr,u as Ta,c as Pr,U as Mr,a as Ar,w as Er,x as Ir,L as Fr,S as be,_ as jr,y as Ur,z as G}from"./index.702953c2.js";import{a as zr,u as Yr,L as Lr,c as Mn,g as Rr}from"./LoadingComponent.841dea2c.js";function Hr({rol:e}){return $(a=>a.user).rol===e?s(Tr,{}):s(Dn,{replace:!0,to:st.CANTACCESS})}const $r=async(e,t)=>{const a={idClub:e},n={method:"POST",headers:{Authorization:t,"Content-Type":"application/json"},body:JSON.stringify(a)};return fetch(yt+"dbaccess/getInventory",n).then(async r=>{if(!r.ok){const i=await r.json();throw new Error(i.message)}return r.json()}).then(r=>{if(r.error)throw new Error(r.message||"Error desconocido");return r}).catch(r=>{throw console.error("Error:",r),r})};var Wr={prefix:"fas",iconName:"users-rectangle",icon:[640,512,[],"e594","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H544c53 0 96-43 96-96V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zm159.8 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4H149.3C119.9 256 96 279.9 96 309.3zM461.2 336h56.1c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3H421.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6zM372 289c-3.9-.7-7.9-1-12-1H280c-4.1 0-8.1 .3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24H408c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24c-8.6-24.3-29.9-42.6-55.9-47zM512 176a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]},An={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},qr={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},En={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},In={prefix:"fas",iconName:"city",icon:[640,512,[127961],"f64f","M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"]},Rt={prefix:"fas",iconName:"user-pen",icon:[640,512,["user-edit"],"f4ff","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"]},Fn={prefix:"fas",iconName:"shop",icon:[640,512,["store-alt"],"f54f","M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"]},Vr={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},jn=Vr,Gr={prefix:"fas",iconName:"square-pen",icon:[448,512,["pen-square","pencil-square"],"f14b","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM325.8 139.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-21.4 21.4-71-71 21.4-21.4c15.6-15.6 40.9-15.6 56.6 0zM119.9 289L225.1 183.8l71 71L190.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"]},Xr=Gr,Br={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Zr={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},ut={prefix:"fas",iconName:"warehouse",icon:[640,512,[],"f494","M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24H568c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32V488c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24V432H512l0 56c0 13.3-10.7 24-24 24zM128 400V336H512v64H128zm0-96V224H512l0 80H128z"]};function $a(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?$a(Object(a),!0).forEach(function(n){z(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$a(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function ft(e){return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ft(e)}function Qr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wa(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Jr(e,t,a){return t&&Wa(e.prototype,t),a&&Wa(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function z(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Da(e,t){return ei(e)||ai(e,t)||Un(e,t)||ri()}function Ve(e){return Kr(e)||ti(e)||Un(e)||ni()}function Kr(e){if(Array.isArray(e))return Ht(e)}function ei(e){if(Array.isArray(e))return e}function ti(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ai(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n=[],r=!0,i=!1,o,c;try{for(a=a.call(e);!(r=(o=a.next()).done)&&(n.push(o.value),!(t&&n.length===t));r=!0);}catch(l){i=!0,c=l}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw c}}return n}}function Un(e,t){if(!!e){if(typeof e=="string")return Ht(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Ht(e,t)}}function Ht(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function ni(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ri(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qa=function(){},Pa={},zn={},Yn=null,Ln={mark:qa,measure:qa};try{typeof window<"u"&&(Pa=window),typeof document<"u"&&(zn=document),typeof MutationObserver<"u"&&(Yn=MutationObserver),typeof performance<"u"&&(Ln=performance)}catch{}var ii=Pa.navigator||{},Va=ii.userAgent,Ga=Va===void 0?"":Va,se=Pa,I=zn,Xa=Yn,Je=Ln;se.document;var te=!!I.documentElement&&!!I.head&&typeof I.addEventListener=="function"&&typeof I.createElement=="function",Rn=~Ga.indexOf("MSIE")||~Ga.indexOf("Trident/"),Ke,et,tt,at,nt,Q="___FONT_AWESOME___",$t=16,Hn="fa",$n="svg-inline--fa",me="data-fa-i2svg",Wt="data-fa-pseudo-element",oi="data-fa-pseudo-element-pending",Ma="data-prefix",Aa="data-icon",Ba="fontawesome-i2svg",si="async",li=["HTML","HEAD","STYLE","SCRIPT"],Wn=function(){try{return!0}catch{return!1}}(),E="classic",U="sharp",Ea=[E,U];function Ge(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[E]}})}var ze=Ge((Ke={},z(Ke,E,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),z(Ke,U,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ke)),Ye=Ge((et={},z(et,E,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),z(et,U,{solid:"fass",regular:"fasr",light:"fasl"}),et)),Le=Ge((tt={},z(tt,E,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),z(tt,U,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),tt)),ci=Ge((at={},z(at,E,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),z(at,U,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),at)),ui=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,qn="fa-layers-text",fi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,di=Ge((nt={},z(nt,E,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),z(nt,U,{900:"fass",400:"fasr",300:"fasl"}),nt)),Vn=[1,2,3,4,5,6,7,8,9,10],mi=Vn.concat([11,12,13,14,15,16,17,18,19,20]),vi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Re=new Set;Object.keys(Ye[E]).map(Re.add.bind(Re));Object.keys(Ye[U]).map(Re.add.bind(Re));var hi=[].concat(Ea,Ve(Re),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fe.GROUP,fe.SWAP_OPACITY,fe.PRIMARY,fe.SECONDARY]).concat(Vn.map(function(e){return"".concat(e,"x")})).concat(mi.map(function(e){return"w-".concat(e)})),je=se.FontAwesomeConfig||{};function pi(e){var t=I.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function bi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(I&&typeof I.querySelector=="function"){var gi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gi.forEach(function(e){var t=Da(e,2),a=t[0],n=t[1],r=bi(pi(a));r!=null&&(je[n]=r)})}var Gn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Hn,replacementClass:$n,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};je.familyPrefix&&(je.cssPrefix=je.familyPrefix);var ke=S(S({},Gn),je);ke.autoReplaceSvg||(ke.observeMutations=!1);var _={};Object.keys(Gn).forEach(function(e){Object.defineProperty(_,e,{enumerable:!0,set:function(a){ke[e]=a,Ue.forEach(function(n){return n(_)})},get:function(){return ke[e]}})});Object.defineProperty(_,"familyPrefix",{enumerable:!0,set:function(t){ke.cssPrefix=t,Ue.forEach(function(a){return a(_)})},get:function(){return ke.cssPrefix}});se.FontAwesomeConfig=_;var Ue=[];function xi(e){return Ue.push(e),function(){Ue.splice(Ue.indexOf(e),1)}}var re=$t,Z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yi(e){if(!(!e||!te)){var t=I.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=I.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return I.head.insertBefore(t,n),e}}var wi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function He(){for(var e=12,t="";e-- >0;)t+=wi[Math.random()*62|0];return t}function Ce(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Ia(e){return e.classList?Ce(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Xn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ni(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Xn(e[a]),'" ')},"").trim()}function Nt(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Fa(e){return e.size!==Z.size||e.x!==Z.x||e.y!==Z.y||e.rotate!==Z.rotate||e.flipX||e.flipY}function ki(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),c="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(c)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Ci(e){var t=e.transform,a=e.width,n=a===void 0?$t:a,r=e.height,i=r===void 0?$t:r,o=e.startCentered,c=o===void 0?!1:o,l="";return c&&Rn?l+="translate(".concat(t.x/re-n/2,"em, ").concat(t.y/re-i/2,"em) "):c?l+="translate(calc(-50% + ".concat(t.x/re,"em), calc(-50% + ").concat(t.y/re,"em)) "):l+="translate(".concat(t.x/re,"em, ").concat(t.y/re,"em) "),l+="scale(".concat(t.size/re*(t.flipX?-1:1),", ").concat(t.size/re*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Si=`:root, :host {
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
}`;function Bn(){var e=Hn,t=$n,a=_.cssPrefix,n=_.replacementClass,r=Si;if(a!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),c=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(c,".".concat(n))}return r}var Za=!1;function Mt(){_.autoAddCss&&!Za&&(yi(Bn()),Za=!0)}var _i={mixout:function(){return{dom:{css:Bn,insertCss:Mt}}},hooks:function(){return{beforeDOMElementCreation:function(){Mt()},beforeI2svg:function(){Mt()}}}},J=se||{};J[Q]||(J[Q]={});J[Q].styles||(J[Q].styles={});J[Q].hooks||(J[Q].hooks={});J[Q].shims||(J[Q].shims=[]);var B=J[Q],Zn=[],Oi=function e(){I.removeEventListener("DOMContentLoaded",e),dt=1,Zn.map(function(t){return t()})},dt=!1;te&&(dt=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState),dt||I.addEventListener("DOMContentLoaded",Oi));function Ti(e){!te||(dt?setTimeout(e,0):Zn.push(e))}function Xe(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Xn(e):"<".concat(t," ").concat(Ni(n),">").concat(i.map(Xe).join(""),"</").concat(t,">")}function Qa(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Di=function(t,a){return function(n,r,i,o){return t.call(a,n,r,i,o)}},At=function(t,a,n,r){var i=Object.keys(t),o=i.length,c=r!==void 0?Di(a,r):a,l,u,f;for(n===void 0?(l=1,f=t[i[0]]):(l=0,f=n);l<o;l++)u=i[l],f=c(f,t[u],u,t);return f};function Pi(e){for(var t=[],a=0,n=e.length;a<n;){var r=e.charCodeAt(a++);if(r>=55296&&r<=56319&&a<n){var i=e.charCodeAt(a++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),a--)}else t.push(r)}return t}function qt(e){var t=Pi(e);return t.length===1?t[0].toString(16):null}function Mi(e,t){var a=e.length,n=e.charCodeAt(t),r;return n>=55296&&n<=56319&&a>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function Ja(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function Vt(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=Ja(t);typeof B.hooks.addPack=="function"&&!r?B.hooks.addPack(e,Ja(t)):B.styles[e]=S(S({},B.styles[e]||{}),i),e==="fas"&&Vt("fa",t)}var rt,it,ot,xe=B.styles,Ai=B.shims,Ei=(rt={},z(rt,E,Object.values(Le[E])),z(rt,U,Object.values(Le[U])),rt),ja=null,Qn={},Jn={},Kn={},er={},tr={},Ii=(it={},z(it,E,Object.keys(ze[E])),z(it,U,Object.keys(ze[U])),it);function Fi(e){return~hi.indexOf(e)}function ji(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!Fi(r)?r:null}var ar=function(){var t=function(i){return At(xe,function(o,c,l){return o[l]=At(c,i,{}),o},{})};Qn=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var c=i[2].filter(function(l){return typeof l=="number"});c.forEach(function(l){r[l.toString(16)]=o})}return r}),Jn=t(function(r,i,o){if(r[o]=o,i[2]){var c=i[2].filter(function(l){return typeof l=="string"});c.forEach(function(l){r[l]=o})}return r}),tr=t(function(r,i,o){var c=i[2];return r[o]=o,c.forEach(function(l){r[l]=o}),r});var a="far"in xe||_.autoFetchSvg,n=At(Ai,function(r,i){var o=i[0],c=i[1],l=i[2];return c==="far"&&!a&&(c="fas"),typeof o=="string"&&(r.names[o]={prefix:c,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:c,iconName:l}),r},{names:{},unicodes:{}});Kn=n.names,er=n.unicodes,ja=kt(_.styleDefault,{family:_.familyDefault})};xi(function(e){ja=kt(e.styleDefault,{family:_.familyDefault})});ar();function Ua(e,t){return(Qn[e]||{})[t]}function Ui(e,t){return(Jn[e]||{})[t]}function de(e,t){return(tr[e]||{})[t]}function nr(e){return Kn[e]||{prefix:null,iconName:null}}function zi(e){var t=er[e],a=Ua("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function le(){return ja}var za=function(){return{prefix:null,iconName:null,rest:[]}};function kt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?E:a,r=ze[n][e],i=Ye[n][e]||Ye[n][r],o=e in B.styles?e:null;return i||o||null}var Ka=(ot={},z(ot,E,Object.keys(Le[E])),z(ot,U,Object.keys(Le[U])),ot);function Ct(e){var t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.skipLookups,r=n===void 0?!1:n,i=(t={},z(t,E,"".concat(_.cssPrefix,"-").concat(E)),z(t,U,"".concat(_.cssPrefix,"-").concat(U)),t),o=null,c=E;(e.includes(i[E])||e.some(function(u){return Ka[E].includes(u)}))&&(c=E),(e.includes(i[U])||e.some(function(u){return Ka[U].includes(u)}))&&(c=U);var l=e.reduce(function(u,f){var v=ji(_.cssPrefix,f);if(xe[f]?(f=Ei[c].includes(f)?ci[c][f]:f,o=f,u.prefix=f):Ii[c].indexOf(f)>-1?(o=f,u.prefix=kt(f,{family:c})):v?u.iconName=v:f!==_.replacementClass&&f!==i[E]&&f!==i[U]&&u.rest.push(f),!r&&u.prefix&&u.iconName){var y=o==="fa"?nr(u.iconName):{},w=de(u.prefix,u.iconName);y.prefix&&(o=null),u.iconName=y.iconName||w||u.iconName,u.prefix=y.prefix||u.prefix,u.prefix==="far"&&!xe.far&&xe.fas&&!_.autoFetchSvg&&(u.prefix="fas")}return u},za());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&c===U&&(xe.fass||_.autoFetchSvg)&&(l.prefix="fass",l.iconName=de(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=le()||"fas"),l}var Yi=function(){function e(){Qr(this,e),this.definitions={}}return Jr(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(c){a.definitions[c]=S(S({},a.definitions[c]||{}),o[c]),Vt(c,o[c]);var l=Le[E][c];l&&Vt(l,o[c]),ar()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],c=o.prefix,l=o.iconName,u=o.icon,f=u[2];a[c]||(a[c]={}),f.length>0&&f.forEach(function(v){typeof v=="string"&&(a[c][v]=u)}),a[c][l]=u}),a}}]),e}(),en=[],ye={},Ne={},Li=Object.keys(Ne);function Ri(e,t){var a=t.mixoutsTo;return en=e,ye={},Object.keys(Ne).forEach(function(n){Li.indexOf(n)===-1&&delete Ne[n]}),en.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),ft(r[o])==="object"&&Object.keys(r[o]).forEach(function(c){a[o]||(a[o]={}),a[o][c]=r[o][c]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){ye[o]||(ye[o]=[]),ye[o].push(i[o])})}n.provides&&n.provides(Ne)}),a}function Gt(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=ye[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(n))}),t}function ve(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=ye[e]||[];r.forEach(function(i){i.apply(null,a)})}function K(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ne[e]?Ne[e].apply(null,t):void 0}function Xt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||le();if(!!t)return t=de(a,t)||t,Qa(rr.definitions,a,t)||Qa(B.styles,a,t)}var rr=new Yi,Hi=function(){_.autoReplaceSvg=!1,_.observeMutations=!1,ve("noAuto")},$i={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return te?(ve("beforeI2svg",t),K("pseudoElements2svg",t),K("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;_.autoReplaceSvg===!1&&(_.autoReplaceSvg=!0),_.observeMutations=!0,Ti(function(){qi({autoReplaceSvgRoot:a}),ve("watch",t)})}},Wi={icon:function(t){if(t===null)return null;if(ft(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:de(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=kt(t[0]);return{prefix:n,iconName:de(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(_.cssPrefix,"-"))>-1||t.match(ui))){var r=Ct(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||le(),iconName:de(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=le();return{prefix:i,iconName:de(i,t)||t}}}},V={noAuto:Hi,config:_,dom:$i,parse:Wi,library:rr,findIconDefinition:Xt,toHtml:Xe},qi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?I:a;(Object.keys(B.styles).length>0||_.autoFetchSvg)&&te&&_.autoReplaceSvg&&V.dom.i2svg({node:n})};function St(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return Xe(n)})}}),Object.defineProperty(e,"node",{get:function(){if(!!te){var n=I.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function Vi(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(Fa(o)&&a.found&&!n.found){var c=a.width,l=a.height,u={x:c/l/2,y:.5};r.style=Nt(S(S({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Gi(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(_.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},r),{},{id:o}),children:n}]}]}function Ya(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,i=e.iconName,o=e.transform,c=e.symbol,l=e.title,u=e.maskId,f=e.titleId,v=e.extra,y=e.watchable,w=y===void 0?!1:y,k=n.found?n:a,T=k.width,x=k.height,p=r==="fak",h=[_.replacementClass,i?"".concat(_.cssPrefix,"-").concat(i):""].filter(function(F){return v.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(v.classes).join(" "),d={children:[],attributes:S(S({},v.attributes),{},{"data-prefix":r,"data-icon":i,class:h,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(x)})},m=p&&!~v.classes.indexOf("fa-fw")?{width:"".concat(T/x*16*.0625,"em")}:{};w&&(d.attributes[me]=""),l&&(d.children.push({tag:"title",attributes:{id:d.attributes["aria-labelledby"]||"title-".concat(f||He())},children:[l]}),delete d.attributes.title);var b=S(S({},d),{},{prefix:r,iconName:i,main:a,mask:n,maskId:u,transform:o,symbol:c,styles:S(S({},m),v.styles)}),C=n.found&&a.found?K("generateAbstractMask",b)||{children:[],attributes:{}}:K("generateAbstractIcon",b)||{children:[],attributes:{}},D=C.children,L=C.attributes;return b.children=D,b.attributes=L,c?Gi(b):Vi(b)}function tn(e){var t=e.content,a=e.width,n=e.height,r=e.transform,i=e.title,o=e.extra,c=e.watchable,l=c===void 0?!1:c,u=S(S(S({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[me]="");var f=S({},o.styles);Fa(r)&&(f.transform=Ci({transform:r,startCentered:!0,width:a,height:n}),f["-webkit-transform"]=f.transform);var v=Nt(f);v.length>0&&(u.style=v);var y=[];return y.push({tag:"span",attributes:u,children:[t]}),i&&y.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),y}function Xi(e){var t=e.content,a=e.title,n=e.extra,r=S(S(S({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),i=Nt(n.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var Et=B.styles;function Bt(e){var t=e[0],a=e[1],n=e.slice(4),r=Da(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(_.cssPrefix,"-").concat(fe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(fe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(fe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var Bi={found:!1,width:512,height:512};function Zi(e,t){!Wn&&!_.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Zt(e,t){var a=t;return t==="fa"&&_.styleDefault!==null&&(t=le()),new Promise(function(n,r){if(K("missingIconAbstract"),a==="fa"){var i=nr(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Et[t]&&Et[t][e]){var o=Et[t][e];return n(Bt(o))}Zi(e,t),n(S(S({},Bi),{},{icon:_.showMissingIcons&&e?K("missingIconAbstract")||{}:{}}))})}var an=function(){},Qt=_.measurePerformance&&Je&&Je.mark&&Je.measure?Je:{mark:an,measure:an},Ie='FA "6.4.2"',Qi=function(t){return Qt.mark("".concat(Ie," ").concat(t," begins")),function(){return ir(t)}},ir=function(t){Qt.mark("".concat(Ie," ").concat(t," ends")),Qt.measure("".concat(Ie," ").concat(t),"".concat(Ie," ").concat(t," begins"),"".concat(Ie," ").concat(t," ends"))},La={begin:Qi,end:ir},lt=function(){};function nn(e){var t=e.getAttribute?e.getAttribute(me):null;return typeof t=="string"}function Ji(e){var t=e.getAttribute?e.getAttribute(Ma):null,a=e.getAttribute?e.getAttribute(Aa):null;return t&&a}function Ki(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(_.replacementClass)}function eo(){if(_.autoReplaceSvg===!0)return ct.replace;var e=ct[_.autoReplaceSvg];return e||ct.replace}function to(e){return I.createElementNS("http://www.w3.org/2000/svg",e)}function ao(e){return I.createElement(e)}function or(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?to:ao:a;if(typeof e=="string")return I.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(or(o,{ceFn:n}))}),r}function no(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ct={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(or(r),a)}),a.getAttribute(me)===null&&_.keepOriginalSource){var n=I.createComment(no(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~Ia(a).indexOf(_.replacementClass))return ct.replace(t);var r=new RegExp("".concat(_.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(c,l){return l===_.replacementClass||l.match(r)?c.toSvg.push(l):c.toNode.push(l),c},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(c){return Xe(c)}).join(`
`);a.setAttribute(me,""),a.innerHTML=o}};function rn(e){e()}function sr(e,t){var a=typeof t=="function"?t:lt;if(e.length===0)a();else{var n=rn;_.mutateApproach===si&&(n=se.requestAnimationFrame||rn),n(function(){var r=eo(),i=La.begin("mutate");e.map(r),i(),a()})}}var Ra=!1;function lr(){Ra=!0}function Jt(){Ra=!1}var mt=null;function on(e){if(!!Xa&&!!_.observeMutations){var t=e.treeCallback,a=t===void 0?lt:t,n=e.nodeCallback,r=n===void 0?lt:n,i=e.pseudoElementsCallback,o=i===void 0?lt:i,c=e.observeMutationsRoot,l=c===void 0?I:c;mt=new Xa(function(u){if(!Ra){var f=le();Ce(u).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!nn(v.addedNodes[0])&&(_.searchPseudoElements&&o(v.target),a(v.target)),v.type==="attributes"&&v.target.parentNode&&_.searchPseudoElements&&o(v.target.parentNode),v.type==="attributes"&&nn(v.target)&&~vi.indexOf(v.attributeName))if(v.attributeName==="class"&&Ji(v.target)){var y=Ct(Ia(v.target)),w=y.prefix,k=y.iconName;v.target.setAttribute(Ma,w||f),k&&v.target.setAttribute(Aa,k)}else Ki(v.target)&&r(v.target)})}}),te&&mt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ro(){!mt||mt.disconnect()}function io(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],c=i.slice(1);return o&&c.length>0&&(n[o]=c.join(":").trim()),n},{})),a}function oo(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=Ct(Ia(e));return r.prefix||(r.prefix=le()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Ui(r.prefix,e.innerText)||Ua(r.prefix,qt(e.innerText))),!r.iconName&&_.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function so(e){var t=Ce(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return _.autoA11y&&(a?t["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(n||He()):(t["aria-hidden"]="true",t.focusable="false")),t}function lo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function sn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=oo(e),n=a.iconName,r=a.prefix,i=a.rest,o=so(e),c=Gt("parseNodeAttributes",{},e),l=t.styleParser?io(e):[];return S({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},c)}var co=B.styles;function cr(e){var t=_.autoReplaceSvg==="nest"?sn(e,{styleParser:!1}):sn(e);return~t.extra.classes.indexOf(qn)?K("generateLayersText",e,t):K("generateSvgReplacementMutation",e,t)}var ce=new Set;Ea.map(function(e){ce.add("fa-".concat(e))});Object.keys(ze[E]).map(ce.add.bind(ce));Object.keys(ze[U]).map(ce.add.bind(ce));ce=Ve(ce);function ln(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!te)return Promise.resolve();var a=I.documentElement.classList,n=function(v){return a.add("".concat(Ba,"-").concat(v))},r=function(v){return a.remove("".concat(Ba,"-").concat(v))},i=_.autoFetchSvg?ce:Ea.map(function(f){return"fa-".concat(f)}).concat(Object.keys(co));i.includes("fa")||i.push("fa");var o=[".".concat(qn,":not([").concat(me,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(me,"])")})).join(", ");if(o.length===0)return Promise.resolve();var c=[];try{c=Ce(e.querySelectorAll(o))}catch{}if(c.length>0)n("pending"),r("complete");else return Promise.resolve();var l=La.begin("onTree"),u=c.reduce(function(f,v){try{var y=cr(v);y&&f.push(y)}catch(w){Wn||w.name==="MissingIcon"&&console.error(w)}return f},[]);return new Promise(function(f,v){Promise.all(u).then(function(y){sr(y,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(y){l(),v(y)})})}function uo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cr(e).then(function(a){a&&sr([a],t)})}function fo(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:Xt(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Xt(r||{})),e(n,S(S({},a),{},{mask:r}))}}var mo=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?Z:n,i=a.symbol,o=i===void 0?!1:i,c=a.mask,l=c===void 0?null:c,u=a.maskId,f=u===void 0?null:u,v=a.title,y=v===void 0?null:v,w=a.titleId,k=w===void 0?null:w,T=a.classes,x=T===void 0?[]:T,p=a.attributes,h=p===void 0?{}:p,d=a.styles,m=d===void 0?{}:d;if(!!t){var b=t.prefix,C=t.iconName,D=t.icon;return St(S({type:"icon"},t),function(){return ve("beforeDOMElementCreation",{iconDefinition:t,params:a}),_.autoA11y&&(y?h["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(k||He()):(h["aria-hidden"]="true",h.focusable="false")),Ya({icons:{main:Bt(D),mask:l?Bt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:C,transform:S(S({},Z),r),symbol:o,title:y,maskId:f,titleId:k,extra:{attributes:h,styles:m,classes:x}})})}},vo={mixout:function(){return{icon:fo(mo)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=ln,a.nodeCallback=uo,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?I:n,i=a.callback,o=i===void 0?function(){}:i;return ln(r,o)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.title,o=n.titleId,c=n.prefix,l=n.transform,u=n.symbol,f=n.mask,v=n.maskId,y=n.extra;return new Promise(function(w,k){Promise.all([Zt(r,c),f.iconName?Zt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var x=Da(T,2),p=x[0],h=x[1];w([a,Ya({icons:{main:p,mask:h},prefix:c,iconName:r,transform:l,symbol:u,maskId:v,title:i,titleId:o,extra:y,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,c=a.styles,l=Nt(c);l.length>0&&(r.style=l);var u;return Fa(o)&&(u=K("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},ho={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return St({type:"layer"},function(){ve("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(c){Array.isArray(c)?c.map(function(l){o=o.concat(l.abstract)}):o=o.concat(c.abstract)}),[{tag:"span",attributes:{class:["".concat(_.cssPrefix,"-layers")].concat(Ve(i)).join(" ")},children:o}]})}}}},po={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,o=n.classes,c=o===void 0?[]:o,l=n.attributes,u=l===void 0?{}:l,f=n.styles,v=f===void 0?{}:f;return St({type:"counter",content:a},function(){return ve("beforeDOMElementCreation",{content:a,params:n}),Xi({content:a.toString(),title:i,extra:{attributes:u,styles:v,classes:["".concat(_.cssPrefix,"-layers-counter")].concat(Ve(c))}})})}}}},bo={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Z:r,o=n.title,c=o===void 0?null:o,l=n.classes,u=l===void 0?[]:l,f=n.attributes,v=f===void 0?{}:f,y=n.styles,w=y===void 0?{}:y;return St({type:"text",content:a},function(){return ve("beforeDOMElementCreation",{content:a,params:n}),tn({content:a,transform:S(S({},Z),i),title:c,extra:{attributes:v,styles:w,classes:["".concat(_.cssPrefix,"-layers-text")].concat(Ve(u))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.title,i=n.transform,o=n.extra,c=null,l=null;if(Rn){var u=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();c=f.width/u,l=f.height/u}return _.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,tn({content:a.innerHTML,width:c,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},go=new RegExp('"',"ug"),cn=[1105920,1112319];function xo(e){var t=e.replace(go,""),a=Mi(t,0),n=a>=cn[0]&&a<=cn[1],r=t.length===2?t[0]===t[1]:!1;return{value:qt(r?t[0]:t),isSecondary:n||r}}function un(e,t){var a="".concat(oi).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var i=Ce(e.children),o=i.filter(function(D){return D.getAttribute(Wt)===t})[0],c=se.getComputedStyle(e,t),l=c.getPropertyValue("font-family").match(fi),u=c.getPropertyValue("font-weight"),f=c.getPropertyValue("content");if(o&&!l)return e.removeChild(o),n();if(l&&f!=="none"&&f!==""){var v=c.getPropertyValue("content"),y=~["Sharp"].indexOf(l[2])?U:E,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ye[y][l[2].toLowerCase()]:di[y][u],k=xo(v),T=k.value,x=k.isSecondary,p=l[0].startsWith("FontAwesome"),h=Ua(w,T),d=h;if(p){var m=zi(T);m.iconName&&m.prefix&&(h=m.iconName,w=m.prefix)}if(h&&!x&&(!o||o.getAttribute(Ma)!==w||o.getAttribute(Aa)!==d)){e.setAttribute(a,d),o&&e.removeChild(o);var b=lo(),C=b.extra;C.attributes[Wt]=t,Zt(h,w).then(function(D){var L=Ya(S(S({},b),{},{icons:{main:D,mask:za()},prefix:w,iconName:d,extra:C,watchable:!0})),F=I.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(F,e.firstChild):e.appendChild(F),F.outerHTML=L.map(function(W){return Xe(W)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function yo(e){return Promise.all([un(e,"::before"),un(e,"::after")])}function wo(e){return e.parentNode!==document.head&&!~li.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Wt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function fn(e){if(!!te)return new Promise(function(t,a){var n=Ce(e.querySelectorAll("*")).filter(wo).map(yo),r=La.begin("searchPseudoElements");lr(),Promise.all(n).then(function(){r(),Jt(),t()}).catch(function(){r(),Jt(),a()})})}var No={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=fn,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?I:n;_.searchPseudoElements&&fn(r)}}},dn=!1,ko={mixout:function(){return{dom:{unwatch:function(){lr(),dn=!0}}}},hooks:function(){return{bootstrap:function(){on(Gt("mutationObserverCallbacks",{}))},noAuto:function(){ro()},watch:function(a){var n=a.observeMutationsRoot;dn?Jt():on(Gt("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},mn=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],c=i.slice(1).join("-");if(o&&c==="h")return n.flipX=!0,n;if(o&&c==="v")return n.flipY=!0,n;if(c=parseFloat(c),isNaN(c))return n;switch(o){case"grow":n.size=n.size+c;break;case"shrink":n.size=n.size-c;break;case"left":n.x=n.x-c;break;case"right":n.x=n.x+c;break;case"up":n.y=n.y-c;break;case"down":n.y=n.y+c;break;case"rotate":n.rotate=n.rotate+c;break}return n},a)},Co={mixout:function(){return{parse:{transform:function(a){return mn(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=mn(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,c={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(l," ").concat(u," ").concat(f)},y={transform:"translate(".concat(o/2*-1," -256)")},w={outer:c,inner:v,path:y};return{tag:"g",attributes:S({},w.outer),children:[{tag:"g",attributes:S({},w.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:S(S({},n.icon.attributes),w.path)}]}]}}}},It={x:0,y:0,width:"100%",height:"100%"};function vn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function So(e){return e.tag==="g"?e.children:[e]}var _o={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?Ct(r.split(" ").map(function(o){return o.trim()})):za();return i.prefix||(i.prefix=le()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,c=a.maskId,l=a.transform,u=i.width,f=i.icon,v=o.width,y=o.icon,w=ki({transform:l,containerWidth:v,iconWidth:u}),k={tag:"rect",attributes:S(S({},It),{},{fill:"white"})},T=f.children?{children:f.children.map(vn)}:{},x={tag:"g",attributes:S({},w.inner),children:[vn(S({tag:f.tag,attributes:S(S({},f.attributes),w.path)},T))]},p={tag:"g",attributes:S({},w.outer),children:[x]},h="mask-".concat(c||He()),d="clip-".concat(c||He()),m={tag:"mask",attributes:S(S({},It),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,p]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:So(y)},m]};return n.push(b,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(h,")")},It)}),{children:n,attributes:r}}}},Oo={provides:function(t){var a=!1;se.matchMedia&&(a=se.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:S(S({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=S(S({},i),{},{attributeName:"opacity"}),c={tag:"circle",attributes:S(S({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||c.children.push({tag:"animate",attributes:S(S({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(c),n.push({tag:"path",attributes:S(S({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:S(S({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:S(S({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},To={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Do=[_i,vo,ho,po,bo,No,ko,Co,_o,Oo,To];Ri(Do,{mixoutsTo:V});V.noAuto;V.config;V.library;V.dom;var Kt=V.parse;V.findIconDefinition;V.toHtml;var Po=V.icon;V.layer;V.text;V.counter;var P={exports:{}},Mo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ao=Mo,Eo=Ao;function ur(){}function fr(){}fr.resetWarningCache=ur;var Io=function(){function e(n,r,i,o,c,l){if(l!==Eo){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:fr,resetWarningCache:ur};return a.PropTypes=a,a};P.exports=Io();function hn(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function oe(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?hn(Object(a),!0).forEach(function(n){we(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):hn(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function vt(e){return vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vt(e)}function we(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Fo(e,t){if(e==null)return{};var a={},n=Object.keys(e),r,i;for(i=0;i<n.length;i++)r=n[i],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}function jo(e,t){if(e==null)return{};var a=Fo(e,t),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(a[n]=e[n]))}return a}function ea(e){return Uo(e)||zo(e)||Yo(e)||Lo()}function Uo(e){if(Array.isArray(e))return ta(e)}function zo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yo(e,t){if(!!e){if(typeof e=="string")return ta(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ta(e,t)}}function ta(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function Lo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ro(e){var t,a=e.beat,n=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,c=e.flash,l=e.spin,u=e.spinPulse,f=e.spinReverse,v=e.pulse,y=e.fixedWidth,w=e.inverse,k=e.border,T=e.listItem,x=e.flip,p=e.size,h=e.rotation,d=e.pull,m=(t={"fa-beat":a,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":c,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":v,"fa-fw":y,"fa-inverse":w,"fa-border":k,"fa-li":T,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},we(t,"fa-".concat(p),typeof p<"u"&&p!==null),we(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),we(t,"fa-pull-".concat(d),typeof d<"u"&&d!==null),we(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map(function(b){return m[b]?b:null}).filter(function(b){return b})}function Ho(e){return e=e-0,e===e}function dr(e){return Ho(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,a){return a?a.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var $o=["style"];function Wo(e){return e.charAt(0).toUpperCase()+e.slice(1)}function qo(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var n=a.indexOf(":"),r=dr(a.slice(0,n)),i=a.slice(n+1).trim();return r.startsWith("webkit")?t[Wo(r)]=i:t[r]=i,t},{})}function mr(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(l){return mr(e,l)}),r=Object.keys(t.attributes||{}).reduce(function(l,u){var f=t.attributes[u];switch(u){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=qo(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=f:l.attrs[dr(u)]=f}return l},{attrs:{}}),i=a.style,o=i===void 0?{}:i,c=jo(a,$o);return r.attrs.style=oe(oe({},r.attrs.style),o),e.apply(void 0,[t.tag,oe(oe({},r.attrs),c)].concat(ea(n)))}var vr=!1;try{vr=!0}catch{}function Vo(){if(!vr&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function pn(e){if(e&&vt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Kt.icon)return Kt.icon(e);if(e===null)return null;if(e&&vt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ft(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}var A=Pn.forwardRef(function(e,t){var a=e.icon,n=e.mask,r=e.symbol,i=e.className,o=e.title,c=e.titleId,l=e.maskId,u=pn(a),f=Ft("classes",[].concat(ea(Ro(e)),ea(i.split(" ")))),v=Ft("transform",typeof e.transform=="string"?Kt.transform(e.transform):e.transform),y=Ft("mask",pn(n)),w=Po(u,oe(oe(oe(oe({},f),v),y),{},{symbol:r,title:o,titleId:c,maskId:l}));if(!w)return Vo("Could not find icon",u),null;var k=w.abstract,T={ref:t};return Object.keys(e).forEach(function(x){A.defaultProps.hasOwnProperty(x)||(T[x]=e[x])}),Go(k[0],T)});A.displayName="FontAwesomeIcon";A.propTypes={beat:P.exports.bool,border:P.exports.bool,beatFade:P.exports.bool,bounce:P.exports.bool,className:P.exports.string,fade:P.exports.bool,flash:P.exports.bool,mask:P.exports.oneOfType([P.exports.object,P.exports.array,P.exports.string]),maskId:P.exports.string,fixedWidth:P.exports.bool,inverse:P.exports.bool,flip:P.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:P.exports.oneOfType([P.exports.object,P.exports.array,P.exports.string]),listItem:P.exports.bool,pull:P.exports.oneOf(["right","left"]),pulse:P.exports.bool,rotation:P.exports.oneOf([0,90,180,270]),shake:P.exports.bool,size:P.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:P.exports.bool,spinPulse:P.exports.bool,spinReverse:P.exports.bool,symbol:P.exports.oneOfType([P.exports.bool,P.exports.string]),title:P.exports.string,titleId:P.exports.string,transform:P.exports.oneOfType([P.exports.string,P.exports.object]),swapOpacity:P.exports.bool};A.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Go=mr.bind(null,Pn.createElement);const Xo=({})=>{const t=$(o=>o.token).token,[a,n]=M.exports.useState([]),r=he(),i=async()=>{try{const{data:o}=await zr(r.idClub,1,t);n(o)}catch(o){console.error(o)}};return M.exports.useLayoutEffect(()=>{i()},[]),s("div",{children:s("div",{className:"grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-6",children:a.map(o=>s("div",{className:"sucursal flex flex-col",children:g("a",{href:`/Dashboard/Gestion_de_Sucursal/${o.idClub}`,children:[s("img",{src:"https://blackgymfitclub.com/assets/LogoWhiteBlackGym-2e55f490.svg",alt:"Logo",className:"logo"}),s("div",{className:"text-white p-2",children:o.nameClub}),g("div",{className:"iconos",children:[g("div",{className:"icono",children:[s(A,{icon:Wr})," Staff: ",o.StaffActivo]}),g("div",{className:"icono",children:[s(A,{icon:qr})," Usuarios: ",o.ClientesActivos]})]}),s("div",{className:"modal"})]})},o.idClub))})})},hr=yt+"dbaccess/",Fe=(e,t,a)=>{const n={idClub:e,typeAction:t},r={method:"POST",headers:{Authorization:a,"Content-Type":"application/json"},body:JSON.stringify(n)};return fetch(hr+"viewDataClientsOrStaff",r).then(async i=>{if(!i.ok){const o=await i.json();throw new Error(o.message)}return i.json()}).then(i=>{if(i.error)throw new Error(i.message||"Error desconocido");return i}).catch(i=>{throw console.error("Error:",i),i})},Bo=(e,t)=>{const a={idUser:e},n={method:"POST",headers:{Authorization:t,"Content-Type":"application/json"},body:JSON.stringify(a)};return fetch(hr+"getDataUser",n).then(async r=>{if(!r.ok){const i=await r.json();throw new Error(i.message)}return r.json()}).then(r=>{if(r.error)throw new Error(r.message||"Error desconocido");return r}).catch(r=>{throw console.error("Error:",r),r})};const pr=yt+"dbaccess/",Zo=(e,t,a,n,r,i,o,c,l,u)=>{const f={username:e,lastname:t,phone:a,email:n,nameEmergency:r,phoneEmergency:i,idUserType:o,idClub:c,fecha:l},v={method:"POST",headers:{Authorization:u,"Content-Type":"application/json"},body:JSON.stringify(f)};return fetch(pr+"newUserOrStaff",v).then(async y=>{if(!y.ok){const w=await y.json();throw new Error(w.message)}return y.json()}).then(y=>{if(y.error)throw new Error(y.message||"Error desconocido");return y}).catch(y=>{throw console.error("Error:",y),y})},bn=(e,t,a,n,r,i,o,c,l)=>{const u={idUser:e,username:t,lastName:a,phoneNumber:n,email:r,nameEmergencyContact:i,emergencyContact:o,valueOption:c},f={method:"POST",headers:{Authorization:l,"Content-Type":"application/json"},body:JSON.stringify(u)};return fetch(pr+"modifyOrDeleteUser",f).then(async v=>{if(!v.ok){const y=await v.json();throw new Error(y.message)}return v.json()}).then(v=>{if(v.error)throw new Error(v.message||"Error desconocido");return v}).catch(v=>{throw console.error("Error:",v),v})};var aa={exports:{}},j={exports:{}};(function(e){function t(a){return a&&a.__esModule?a:{default:a}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(j);var na={exports:{}},ra={exports:{}},Ha={exports:{}};(function(e){function t(a){return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e.exports.__esModule=!0,e.exports.default=e.exports,t(a)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Ha);var Y={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;function a(n,r){if(r.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+r.length+" present")}e.exports=t.default})(Y,Y.exports);(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=a(Ha.exports),r=a(Y.exports);function i(o){return(0,r.default)(1,arguments),o instanceof Date||(0,n.default)(o)==="object"&&Object.prototype.toString.call(o)==="[object Date]"}e.exports=t.default})(ra,ra.exports);var X={exports:{}};(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=a(Ha.exports),r=a(Y.exports);function i(o){(0,r.default)(1,arguments);var c=Object.prototype.toString.call(o);return o instanceof Date||(0,n.default)(o)==="object"&&c==="[object Date]"?new Date(o.getTime()):typeof o=="number"||c==="[object Number]"?new Date(o):((typeof o=="string"||c==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}e.exports=t.default})(X,X.exports);(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=a(ra.exports),r=a(X.exports),i=a(Y.exports);function o(c){if((0,i.default)(1,arguments),!(0,n.default)(c)&&typeof c!="number")return!1;var l=(0,r.default)(c);return!isNaN(Number(l))}e.exports=t.default})(na,na.exports);var ia={exports:{}},oa={exports:{}},ee={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;function a(n){if(n===null||n===!0||n===!1)return NaN;var r=Number(n);return isNaN(r)?r:r<0?Math.ceil(r):Math.floor(r)}e.exports=t.default})(ee,ee.exports);const Qo=Oa(ee.exports);(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=a(ee.exports),r=a(X.exports),i=a(Y.exports);function o(c,l){(0,i.default)(2,arguments);var u=(0,r.default)(c).getTime(),f=(0,n.default)(l);return new Date(u+f)}e.exports=t.default})(oa,oa.exports);(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=a(oa.exports),r=a(Y.exports),i=a(ee.exports);function o(c,l){(0,r.default)(2,arguments);var u=(0,i.default)(l);return(0,n.default)(c,-u)}e.exports=t.default})(ia,ia.exports);var sa={exports:{}},la={exports:{}};(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=a(X.exports),r=a(Y.exports),i=864e5;function o(c){(0,r.default)(1,arguments);var l=(0,n.default)(c),u=l.getTime();l.setUTCMonth(0,1),l.setUTCHours(0,0,0,0);var f=l.getTime(),v=u-f;return Math.floor(v/i)+1}e.exports=t.default})(la,la.exports);var ca={exports:{}},$e={exports:{}};(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=a(X.exports),r=a(Y.exports);function i(o){(0,r.default)(1,arguments);var c=1,l=(0,n.default)(o),u=l.getUTCDay(),f=(u<c?7:0)+u-c;return l.setUTCDate(l.getUTCDate()-f),l.setUTCHours(0,0,0,0),l}e.exports=t.default})($e,$e.exports);var ua={exports:{}},ht={exports:{}};(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=a(X.exports),r=a(Y.exports),i=a($e.exports);function o(c){(0,r.default)(1,arguments);var l=(0,n.default)(c),u=l.getUTCFullYear(),f=new Date(0);f.setUTCFullYear(u+1,0,4),f.setUTCHours(0,0,0,0);var v=(0,i.default)(f),y=new Date(0);y.setUTCFullYear(u,0,4),y.setUTCHours(0,0,0,0);var w=(0,i.default)(y);return l.getTime()>=v.getTime()?u+1:l.getTime()>=w.getTime()?u:u-1}e.exports=t.default})(ht,ht.exports);(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=a(ht.exports),r=a($e.exports),i=a(Y.exports);function o(c){(0,i.default)(1,arguments);var l=(0,n.default)(c),u=new Date(0);u.setUTCFullYear(l,0,4),u.setUTCHours(0,0,0,0);var f=(0,r.default)(u);return f}e.exports=t.default})(ua,ua.exports);(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=a(X.exports),r=a($e.exports),i=a(ua.exports),o=a(Y.exports),c=6048e5;function l(u){(0,o.default)(1,arguments);var f=(0,n.default)(u),v=(0,r.default)(f).getTime()-(0,i.default)(f).getTime();return Math.round(v/c)+1}e.exports=t.default})(ca,ca.exports);var fa={exports:{}},We={exports:{}},pe={};Object.defineProperty(pe,"__esModule",{value:!0});pe.getDefaultOptions=Jo;pe.setDefaultOptions=Ko;var br={};function Jo(){return br}function Ko(e){br=e}(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var n=a(X.exports),r=a(Y.exports),i=a(ee.exports),o=pe;function c(l,u){var f,v,y,w,k,T,x,p;(0,r.default)(1,arguments);var h=(0,o.getDefaultOptions)(),d=(0,i.default)((f=(v=(y=(w=u==null?void 0:u.weekStartsOn)!==null&&w!==void 0?w:u==null||(k=u.locale)===null||k===void 0||(T=k.options)===null||T===void 0?void 0:T.weekStartsOn)!==null&&y!==void 0?y:h.weekStartsOn)!==null&&v!==void 0?v:(x=h.locale)===null||x===void 0||(p=x.options)===null||p===void 0?void 0:p.weekStartsOn)!==null&&f!==void 0?f:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=(0,n.default)(l),b=m.getUTCDay(),C=(b<d?7:0)+b-d;return m.setUTCDate(m.getUTCDate()-C),m.setUTCHours(0,0,0,0),m}e.exports=t.default})(We,We.exports);var da={exports:{}},pt={exports:{}};(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=a(X.exports),r=a(Y.exports),i=a(We.exports),o=a(ee.exports),c=pe;function l(u,f){var v,y,w,k,T,x,p,h;(0,r.default)(1,arguments);var d=(0,n.default)(u),m=d.getUTCFullYear(),b=(0,c.getDefaultOptions)(),C=(0,o.default)((v=(y=(w=(k=f==null?void 0:f.firstWeekContainsDate)!==null&&k!==void 0?k:f==null||(T=f.locale)===null||T===void 0||(x=T.options)===null||x===void 0?void 0:x.firstWeekContainsDate)!==null&&w!==void 0?w:b.firstWeekContainsDate)!==null&&y!==void 0?y:(p=b.locale)===null||p===void 0||(h=p.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&v!==void 0?v:1);if(!(C>=1&&C<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var D=new Date(0);D.setUTCFullYear(m+1,0,C),D.setUTCHours(0,0,0,0);var L=(0,i.default)(D,f),F=new Date(0);F.setUTCFullYear(m,0,C),F.setUTCHours(0,0,0,0);var W=(0,i.default)(F,f);return d.getTime()>=L.getTime()?m+1:d.getTime()>=W.getTime()?m:m-1}e.exports=t.default})(pt,pt.exports);(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=a(pt.exports),r=a(Y.exports),i=a(We.exports),o=a(ee.exports),c=pe;function l(u,f){var v,y,w,k,T,x,p,h;(0,r.default)(1,arguments);var d=(0,c.getDefaultOptions)(),m=(0,o.default)((v=(y=(w=(k=f==null?void 0:f.firstWeekContainsDate)!==null&&k!==void 0?k:f==null||(T=f.locale)===null||T===void 0||(x=T.options)===null||x===void 0?void 0:x.firstWeekContainsDate)!==null&&w!==void 0?w:d.firstWeekContainsDate)!==null&&y!==void 0?y:(p=d.locale)===null||p===void 0||(h=p.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&v!==void 0?v:1),b=(0,n.default)(u,f),C=new Date(0);C.setUTCFullYear(b,0,m),C.setUTCHours(0,0,0,0);var D=(0,i.default)(C,f);return D}e.exports=t.default})(da,da.exports);(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=a(X.exports),r=a(We.exports),i=a(da.exports),o=a(Y.exports),c=6048e5;function l(u,f){(0,o.default)(1,arguments);var v=(0,n.default)(u),y=(0,r.default)(v,f).getTime()-(0,i.default)(v,f).getTime();return Math.round(y/c)+1}e.exports=t.default})(fa,fa.exports);var bt={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;function a(n,r){for(var i=n<0?"-":"",o=Math.abs(n).toString();o.length<r;)o="0"+o;return i+o}e.exports=t.default})(bt,bt.exports);var ma={exports:{}};(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(bt.exports),r={y:function(c,l){var u=c.getUTCFullYear(),f=u>0?u:1-u;return(0,n.default)(l==="yy"?f%100:f,l.length)},M:function(c,l){var u=c.getUTCMonth();return l==="M"?String(u+1):(0,n.default)(u+1,2)},d:function(c,l){return(0,n.default)(c.getUTCDate(),l.length)},a:function(c,l){var u=c.getUTCHours()/12>=1?"pm":"am";switch(l){case"a":case"aa":return u.toUpperCase();case"aaa":return u;case"aaaaa":return u[0];case"aaaa":default:return u==="am"?"a.m.":"p.m."}},h:function(c,l){return(0,n.default)(c.getUTCHours()%12||12,l.length)},H:function(c,l){return(0,n.default)(c.getUTCHours(),l.length)},m:function(c,l){return(0,n.default)(c.getUTCMinutes(),l.length)},s:function(c,l){return(0,n.default)(c.getUTCSeconds(),l.length)},S:function(c,l){var u=l.length,f=c.getUTCMilliseconds(),v=Math.floor(f*Math.pow(10,u-3));return(0,n.default)(v,l.length)}},i=r;t.default=i,e.exports=t.default})(ma,ma.exports);(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(la.exports),r=a(ca.exports),i=a(ht.exports),o=a(fa.exports),c=a(pt.exports),l=a(bt.exports),u=a(ma.exports),f={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},v={G:function(p,h,d){var m=p.getUTCFullYear()>0?1:0;switch(h){case"G":case"GG":case"GGG":return d.era(m,{width:"abbreviated"});case"GGGGG":return d.era(m,{width:"narrow"});case"GGGG":default:return d.era(m,{width:"wide"})}},y:function(p,h,d){if(h==="yo"){var m=p.getUTCFullYear(),b=m>0?m:1-m;return d.ordinalNumber(b,{unit:"year"})}return u.default.y(p,h)},Y:function(p,h,d,m){var b=(0,c.default)(p,m),C=b>0?b:1-b;if(h==="YY"){var D=C%100;return(0,l.default)(D,2)}return h==="Yo"?d.ordinalNumber(C,{unit:"year"}):(0,l.default)(C,h.length)},R:function(p,h){var d=(0,i.default)(p);return(0,l.default)(d,h.length)},u:function(p,h){var d=p.getUTCFullYear();return(0,l.default)(d,h.length)},Q:function(p,h,d){var m=Math.ceil((p.getUTCMonth()+1)/3);switch(h){case"Q":return String(m);case"QQ":return(0,l.default)(m,2);case"Qo":return d.ordinalNumber(m,{unit:"quarter"});case"QQQ":return d.quarter(m,{width:"abbreviated",context:"formatting"});case"QQQQQ":return d.quarter(m,{width:"narrow",context:"formatting"});case"QQQQ":default:return d.quarter(m,{width:"wide",context:"formatting"})}},q:function(p,h,d){var m=Math.ceil((p.getUTCMonth()+1)/3);switch(h){case"q":return String(m);case"qq":return(0,l.default)(m,2);case"qo":return d.ordinalNumber(m,{unit:"quarter"});case"qqq":return d.quarter(m,{width:"abbreviated",context:"standalone"});case"qqqqq":return d.quarter(m,{width:"narrow",context:"standalone"});case"qqqq":default:return d.quarter(m,{width:"wide",context:"standalone"})}},M:function(p,h,d){var m=p.getUTCMonth();switch(h){case"M":case"MM":return u.default.M(p,h);case"Mo":return d.ordinalNumber(m+1,{unit:"month"});case"MMM":return d.month(m,{width:"abbreviated",context:"formatting"});case"MMMMM":return d.month(m,{width:"narrow",context:"formatting"});case"MMMM":default:return d.month(m,{width:"wide",context:"formatting"})}},L:function(p,h,d){var m=p.getUTCMonth();switch(h){case"L":return String(m+1);case"LL":return(0,l.default)(m+1,2);case"Lo":return d.ordinalNumber(m+1,{unit:"month"});case"LLL":return d.month(m,{width:"abbreviated",context:"standalone"});case"LLLLL":return d.month(m,{width:"narrow",context:"standalone"});case"LLLL":default:return d.month(m,{width:"wide",context:"standalone"})}},w:function(p,h,d,m){var b=(0,o.default)(p,m);return h==="wo"?d.ordinalNumber(b,{unit:"week"}):(0,l.default)(b,h.length)},I:function(p,h,d){var m=(0,r.default)(p);return h==="Io"?d.ordinalNumber(m,{unit:"week"}):(0,l.default)(m,h.length)},d:function(p,h,d){return h==="do"?d.ordinalNumber(p.getUTCDate(),{unit:"date"}):u.default.d(p,h)},D:function(p,h,d){var m=(0,n.default)(p);return h==="Do"?d.ordinalNumber(m,{unit:"dayOfYear"}):(0,l.default)(m,h.length)},E:function(p,h,d){var m=p.getUTCDay();switch(h){case"E":case"EE":case"EEE":return d.day(m,{width:"abbreviated",context:"formatting"});case"EEEEE":return d.day(m,{width:"narrow",context:"formatting"});case"EEEEEE":return d.day(m,{width:"short",context:"formatting"});case"EEEE":default:return d.day(m,{width:"wide",context:"formatting"})}},e:function(p,h,d,m){var b=p.getUTCDay(),C=(b-m.weekStartsOn+8)%7||7;switch(h){case"e":return String(C);case"ee":return(0,l.default)(C,2);case"eo":return d.ordinalNumber(C,{unit:"day"});case"eee":return d.day(b,{width:"abbreviated",context:"formatting"});case"eeeee":return d.day(b,{width:"narrow",context:"formatting"});case"eeeeee":return d.day(b,{width:"short",context:"formatting"});case"eeee":default:return d.day(b,{width:"wide",context:"formatting"})}},c:function(p,h,d,m){var b=p.getUTCDay(),C=(b-m.weekStartsOn+8)%7||7;switch(h){case"c":return String(C);case"cc":return(0,l.default)(C,h.length);case"co":return d.ordinalNumber(C,{unit:"day"});case"ccc":return d.day(b,{width:"abbreviated",context:"standalone"});case"ccccc":return d.day(b,{width:"narrow",context:"standalone"});case"cccccc":return d.day(b,{width:"short",context:"standalone"});case"cccc":default:return d.day(b,{width:"wide",context:"standalone"})}},i:function(p,h,d){var m=p.getUTCDay(),b=m===0?7:m;switch(h){case"i":return String(b);case"ii":return(0,l.default)(b,h.length);case"io":return d.ordinalNumber(b,{unit:"day"});case"iii":return d.day(m,{width:"abbreviated",context:"formatting"});case"iiiii":return d.day(m,{width:"narrow",context:"formatting"});case"iiiiii":return d.day(m,{width:"short",context:"formatting"});case"iiii":default:return d.day(m,{width:"wide",context:"formatting"})}},a:function(p,h,d){var m=p.getUTCHours(),b=m/12>=1?"pm":"am";switch(h){case"a":case"aa":return d.dayPeriod(b,{width:"abbreviated",context:"formatting"});case"aaa":return d.dayPeriod(b,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return d.dayPeriod(b,{width:"narrow",context:"formatting"});case"aaaa":default:return d.dayPeriod(b,{width:"wide",context:"formatting"})}},b:function(p,h,d){var m=p.getUTCHours(),b;switch(m===12?b=f.noon:m===0?b=f.midnight:b=m/12>=1?"pm":"am",h){case"b":case"bb":return d.dayPeriod(b,{width:"abbreviated",context:"formatting"});case"bbb":return d.dayPeriod(b,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return d.dayPeriod(b,{width:"narrow",context:"formatting"});case"bbbb":default:return d.dayPeriod(b,{width:"wide",context:"formatting"})}},B:function(p,h,d){var m=p.getUTCHours(),b;switch(m>=17?b=f.evening:m>=12?b=f.afternoon:m>=4?b=f.morning:b=f.night,h){case"B":case"BB":case"BBB":return d.dayPeriod(b,{width:"abbreviated",context:"formatting"});case"BBBBB":return d.dayPeriod(b,{width:"narrow",context:"formatting"});case"BBBB":default:return d.dayPeriod(b,{width:"wide",context:"formatting"})}},h:function(p,h,d){if(h==="ho"){var m=p.getUTCHours()%12;return m===0&&(m=12),d.ordinalNumber(m,{unit:"hour"})}return u.default.h(p,h)},H:function(p,h,d){return h==="Ho"?d.ordinalNumber(p.getUTCHours(),{unit:"hour"}):u.default.H(p,h)},K:function(p,h,d){var m=p.getUTCHours()%12;return h==="Ko"?d.ordinalNumber(m,{unit:"hour"}):(0,l.default)(m,h.length)},k:function(p,h,d){var m=p.getUTCHours();return m===0&&(m=24),h==="ko"?d.ordinalNumber(m,{unit:"hour"}):(0,l.default)(m,h.length)},m:function(p,h,d){return h==="mo"?d.ordinalNumber(p.getUTCMinutes(),{unit:"minute"}):u.default.m(p,h)},s:function(p,h,d){return h==="so"?d.ordinalNumber(p.getUTCSeconds(),{unit:"second"}):u.default.s(p,h)},S:function(p,h){return u.default.S(p,h)},X:function(p,h,d,m){var b=m._originalDate||p,C=b.getTimezoneOffset();if(C===0)return"Z";switch(h){case"X":return w(C);case"XXXX":case"XX":return k(C);case"XXXXX":case"XXX":default:return k(C,":")}},x:function(p,h,d,m){var b=m._originalDate||p,C=b.getTimezoneOffset();switch(h){case"x":return w(C);case"xxxx":case"xx":return k(C);case"xxxxx":case"xxx":default:return k(C,":")}},O:function(p,h,d,m){var b=m._originalDate||p,C=b.getTimezoneOffset();switch(h){case"O":case"OO":case"OOO":return"GMT"+y(C,":");case"OOOO":default:return"GMT"+k(C,":")}},z:function(p,h,d,m){var b=m._originalDate||p,C=b.getTimezoneOffset();switch(h){case"z":case"zz":case"zzz":return"GMT"+y(C,":");case"zzzz":default:return"GMT"+k(C,":")}},t:function(p,h,d,m){var b=m._originalDate||p,C=Math.floor(b.getTime()/1e3);return(0,l.default)(C,h.length)},T:function(p,h,d,m){var b=m._originalDate||p,C=b.getTime();return(0,l.default)(C,h.length)}};function y(x,p){var h=x>0?"-":"+",d=Math.abs(x),m=Math.floor(d/60),b=d%60;if(b===0)return h+String(m);var C=p||"";return h+String(m)+C+(0,l.default)(b,2)}function w(x,p){if(x%60===0){var h=x>0?"-":"+";return h+(0,l.default)(Math.abs(x)/60,2)}return k(x,p)}function k(x,p){var h=p||"",d=x>0?"-":"+",m=Math.abs(x),b=(0,l.default)(Math.floor(m/60),2),C=(0,l.default)(m%60,2);return d+b+h+C}var T=v;t.default=T,e.exports=t.default})(sa,sa.exports);var va={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(l,u){switch(l){case"P":return u.date({width:"short"});case"PP":return u.date({width:"medium"});case"PPP":return u.date({width:"long"});case"PPPP":default:return u.date({width:"full"})}},n=function(l,u){switch(l){case"p":return u.time({width:"short"});case"pp":return u.time({width:"medium"});case"ppp":return u.time({width:"long"});case"pppp":default:return u.time({width:"full"})}},r=function(l,u){var f=l.match(/(P+)(p+)?/)||[],v=f[1],y=f[2];if(!y)return a(l,u);var w;switch(v){case"P":w=u.dateTime({width:"short"});break;case"PP":w=u.dateTime({width:"medium"});break;case"PPP":w=u.dateTime({width:"long"});break;case"PPPP":default:w=u.dateTime({width:"full"});break}return w.replace("{{date}}",a(v,u)).replace("{{time}}",n(y,u))},i={p:n,P:r},o=i;t.default=o,e.exports=t.default})(va,va.exports);var gt={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;function a(n){var r=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return r.setUTCFullYear(n.getFullYear()),n.getTime()-r.getTime()}e.exports=t.default})(gt,gt.exports);const gn=Oa(gt.exports);var Be={};Object.defineProperty(Be,"__esModule",{value:!0});Be.isProtectedDayOfYearToken=as;Be.isProtectedWeekYearToken=ns;Be.throwProtectedError=rs;var es=["D","DD"],ts=["YY","YYYY"];function as(e){return es.indexOf(e)!==-1}function ns(e){return ts.indexOf(e)!==-1}function rs(e,t,a){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var ha={exports:{}},pa={exports:{}},ba={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},n=function(o,c,l){var u,f=a[o];return typeof f=="string"?u=f:c===1?u=f.one:u=f.other.replace("{{count}}",c.toString()),l!=null&&l.addSuffix?l.comparison&&l.comparison>0?"in "+u:u+" ago":u},r=n;t.default=r,e.exports=t.default})(ba,ba.exports);var ga={exports:{}},xa={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;function a(n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=r.width?String(r.width):n.defaultWidth,o=n.formats[i]||n.formats[n.defaultWidth];return o}}e.exports=t.default})(xa,xa.exports);(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(xa.exports),r={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},i={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},o={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},c={date:(0,n.default)({formats:r,defaultWidth:"full"}),time:(0,n.default)({formats:i,defaultWidth:"full"}),dateTime:(0,n.default)({formats:o,defaultWidth:"full"})},l=c;t.default=l,e.exports=t.default})(ga,ga.exports);var ya={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},n=function(o,c,l,u){return a[o]},r=n;t.default=r,e.exports=t.default})(ya,ya.exports);var wa={exports:{}},Na={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;function a(n){return function(r,i){var o=i!=null&&i.context?String(i.context):"standalone",c;if(o==="formatting"&&n.formattingValues){var l=n.defaultFormattingWidth||n.defaultWidth,u=i!=null&&i.width?String(i.width):l;c=n.formattingValues[u]||n.formattingValues[l]}else{var f=n.defaultWidth,v=i!=null&&i.width?String(i.width):n.defaultWidth;c=n.values[v]||n.values[f]}var y=n.argumentCallback?n.argumentCallback(r):r;return c[y]}}e.exports=t.default})(Na,Na.exports);(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(Na.exports),r={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},i={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},o={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},c={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},l={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},u={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},f=function(k,T){var x=Number(k),p=x%100;if(p>20||p<10)switch(p%10){case 1:return x+"st";case 2:return x+"nd";case 3:return x+"rd"}return x+"th"},v={ordinalNumber:f,era:(0,n.default)({values:r,defaultWidth:"wide"}),quarter:(0,n.default)({values:i,defaultWidth:"wide",argumentCallback:function(k){return k-1}}),month:(0,n.default)({values:o,defaultWidth:"wide"}),day:(0,n.default)({values:c,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:l,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"})},y=v;t.default=y,e.exports=t.default})(wa,wa.exports);var ka={exports:{}},Ca={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;function a(i){return function(o){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=c.width,u=l&&i.matchPatterns[l]||i.matchPatterns[i.defaultMatchWidth],f=o.match(u);if(!f)return null;var v=f[0],y=l&&i.parsePatterns[l]||i.parsePatterns[i.defaultParseWidth],w=Array.isArray(y)?r(y,function(x){return x.test(v)}):n(y,function(x){return x.test(v)}),k;k=i.valueCallback?i.valueCallback(w):w,k=c.valueCallback?c.valueCallback(k):k;var T=o.slice(v.length);return{value:k,rest:T}}}function n(i,o){for(var c in i)if(i.hasOwnProperty(c)&&o(i[c]))return c}function r(i,o){for(var c=0;c<i.length;c++)if(o(i[c]))return c}e.exports=t.default})(Ca,Ca.exports);var Sa={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;function a(n){return function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.match(n.matchPattern);if(!o)return null;var c=o[0],l=r.match(n.parsePattern);if(!l)return null;var u=n.valueCallback?n.valueCallback(l[0]):l[0];u=i.valueCallback?i.valueCallback(u):u;var f=r.slice(c.length);return{value:u,rest:f}}}e.exports=t.default})(Sa,Sa.exports);(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(Ca.exports),r=a(Sa.exports),i=/^(\d+)(th|st|nd|rd)?/i,o=/\d+/i,c={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},l={any:[/^b/i,/^(a|c)/i]},u={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},f={any:[/1/i,/2/i,/3/i,/4/i]},v={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},y={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},w={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},k={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},T={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},x={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},p={ordinalNumber:(0,r.default)({matchPattern:i,parsePattern:o,valueCallback:function(m){return parseInt(m,10)}}),era:(0,n.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(m){return m+1}}),month:(0,n.default)({matchPatterns:v,defaultMatchWidth:"wide",parsePatterns:y,defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:w,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:T,defaultMatchWidth:"any",parsePatterns:x,defaultParseWidth:"any"})},h=p;t.default=h,e.exports=t.default})(ka,ka.exports);(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(ba.exports),r=a(ga.exports),i=a(ya.exports),o=a(wa.exports),c=a(ka.exports),l={code:"en-US",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:o.default,match:c.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},u=l;t.default=u,e.exports=t.default})(pa,pa.exports);(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(pa.exports),r=n.default;t.default=r,e.exports=t.default})(ha,ha.exports);(function(e,t){var a=j.exports.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var n=a(na.exports),r=a(ia.exports),i=a(X.exports),o=a(sa.exports),c=a(va.exports),l=a(gt.exports),u=Be,f=a(ee.exports),v=a(Y.exports),y=pe,w=a(ha.exports),k=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,T=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,x=/^'([^]*?)'?$/,p=/''/g,h=/[a-zA-Z]/;function d(b,C,D){var L,F,W,O,N,R,ae,Se,ue,_e,Oe,Te,De,Pe,Me,_t,Ot,Tt;(0,v.default)(2,arguments);var kr=String(C),Ae=(0,y.getDefaultOptions)(),Ee=(L=(F=D==null?void 0:D.locale)!==null&&F!==void 0?F:Ae.locale)!==null&&L!==void 0?L:w.default,Dt=(0,f.default)((W=(O=(N=(R=D==null?void 0:D.firstWeekContainsDate)!==null&&R!==void 0?R:D==null||(ae=D.locale)===null||ae===void 0||(Se=ae.options)===null||Se===void 0?void 0:Se.firstWeekContainsDate)!==null&&N!==void 0?N:Ae.firstWeekContainsDate)!==null&&O!==void 0?O:(ue=Ae.locale)===null||ue===void 0||(_e=ue.options)===null||_e===void 0?void 0:_e.firstWeekContainsDate)!==null&&W!==void 0?W:1);if(!(Dt>=1&&Dt<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Pt=(0,f.default)((Oe=(Te=(De=(Pe=D==null?void 0:D.weekStartsOn)!==null&&Pe!==void 0?Pe:D==null||(Me=D.locale)===null||Me===void 0||(_t=Me.options)===null||_t===void 0?void 0:_t.weekStartsOn)!==null&&De!==void 0?De:Ae.weekStartsOn)!==null&&Te!==void 0?Te:(Ot=Ae.locale)===null||Ot===void 0||(Tt=Ot.options)===null||Tt===void 0?void 0:Tt.weekStartsOn)!==null&&Oe!==void 0?Oe:0);if(!(Pt>=0&&Pt<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!Ee.localize)throw new RangeError("locale must contain localize property");if(!Ee.formatLong)throw new RangeError("locale must contain formatLong property");var Ze=(0,i.default)(b);if(!(0,n.default)(Ze))throw new RangeError("Invalid time value");var Cr=(0,l.default)(Ze),Sr=(0,r.default)(Ze,Cr),_r={firstWeekContainsDate:Dt,weekStartsOn:Pt,locale:Ee,_originalDate:Ze},Or=kr.match(T).map(function(q){var ne=q[0];if(ne==="p"||ne==="P"){var Qe=c.default[ne];return Qe(q,Ee.formatLong)}return q}).join("").match(k).map(function(q){if(q==="''")return"'";var ne=q[0];if(ne==="'")return m(q);var Qe=o.default[ne];if(Qe)return!(D!=null&&D.useAdditionalWeekYearTokens)&&(0,u.isProtectedWeekYearToken)(q)&&(0,u.throwProtectedError)(q,C,String(b)),!(D!=null&&D.useAdditionalDayOfYearTokens)&&(0,u.isProtectedDayOfYearToken)(q)&&(0,u.throwProtectedError)(q,C,String(b)),Qe(Sr,q,Ee.localize,_r);if(ne.match(h))throw new RangeError("Format string contains an unescaped latin alphabet character `"+ne+"`");return q}).join("");return Or}function m(b){var C=b.match(x);return C?C[1].replace(p,"'"):b}e.exports=t.default})(aa,aa.exports);const is=Oa(aa.exports);function xn(e,t,a){var n=ls(e,a.timeZone,a.locale);return n.formatToParts?os(n,t):ss(n,t)}function os(e,t){for(var a=e.formatToParts(t),n=a.length-1;n>=0;--n)if(a[n].type==="timeZoneName")return a[n].value}function ss(e,t){var a=e.format(t).replace(/\u200E/g,""),n=/ [\w-+ ]+$/.exec(a);return n?n[0].substr(1):""}function ls(e,t,a){if(a&&!a.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(a?[a.code,"en-US"]:void 0,{timeZone:t,timeZoneName:e})}function cs(e,t){var a=ms(t);return a.formatToParts?fs(a,e):ds(a,e)}var us={year:0,month:1,day:2,hour:3,minute:4,second:5};function fs(e,t){try{for(var a=e.formatToParts(t),n=[],r=0;r<a.length;r++){var i=us[a[r].type];i>=0&&(n[i]=parseInt(a[r].value,10))}return n}catch(o){if(o instanceof RangeError)return[NaN];throw o}}function ds(e,t){var a=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);return[n[3],n[1],n[2],n[4],n[5],n[6]]}var jt={};function ms(e){if(!jt[e]){var t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:"America/New_York",year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),a=t==="06/25/2014, 00:00:00"||t==="\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";jt[e]=a?new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return jt[e]}function gr(e,t,a,n,r,i,o){var c=new Date(0);return c.setUTCFullYear(e,t,a),c.setUTCHours(n,r,i,o),c}var yn=36e5,vs=6e4,Ut={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-]\d{2}):?(\d{2})$/};function xr(e,t,a){var n,r;if(!e||(n=Ut.timezoneZ.exec(e),n))return 0;var i;if(n=Ut.timezoneHH.exec(e),n)return i=parseInt(n[1],10),wn(i)?-(i*yn):NaN;if(n=Ut.timezoneHHMM.exec(e),n){i=parseInt(n[1],10);var o=parseInt(n[2],10);return wn(i,o)?(r=Math.abs(i)*yn+o*vs,i>0?-r:r):NaN}if(bs(e)){t=new Date(t||Date.now());var c=a?t:hs(t),l=_a(c,e),u=a?l:ps(t,l,e);return-u}return NaN}function hs(e){return gr(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}function _a(e,t){var a=cs(e,t),n=gr(a[0],a[1]-1,a[2],a[3]%24,a[4],a[5],0).getTime(),r=e.getTime(),i=r%1e3;return r-=i>=0?i:1e3+i,n-r}function ps(e,t,a){var n=e.getTime(),r=n-t,i=_a(new Date(r),a);if(t===i)return t;r-=i-t;var o=_a(new Date(r),a);return i===o?i:Math.max(i,o)}function wn(e,t){return-23<=e&&e<=23&&(t==null||0<=t&&t<=59)}var Nn={};function bs(e){if(Nn[e])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:e}),Nn[e]=!0,!0}catch{return!1}}var gs=60*1e3,xs={X:function(e,t,a,n){var r=zt(n.timeZone,n._originalDate||e);if(r===0)return"Z";switch(t){case"X":return kn(r);case"XXXX":case"XX":return ge(r);case"XXXXX":case"XXX":default:return ge(r,":")}},x:function(e,t,a,n){var r=zt(n.timeZone,n._originalDate||e);switch(t){case"x":return kn(r);case"xxxx":case"xx":return ge(r);case"xxxxx":case"xxx":default:return ge(r,":")}},O:function(e,t,a,n){var r=zt(n.timeZone,n._originalDate||e);switch(t){case"O":case"OO":case"OOO":return"GMT"+ys(r,":");case"OOOO":default:return"GMT"+ge(r,":")}},z:function(e,t,a,n){var r=n._originalDate||e;switch(t){case"z":case"zz":case"zzz":return xn("short",r,n);case"zzzz":default:return xn("long",r,n)}}};function zt(e,t){var a=e?xr(e,t,!0)/gs:t.getTimezoneOffset();if(Number.isNaN(a))throw new RangeError("Invalid time zone specified: "+e);return a}function xt(e,t){for(var a=e<0?"-":"",n=Math.abs(e).toString();n.length<t;)n="0"+n;return a+n}function ge(e,t){var a=t||"",n=e>0?"-":"+",r=Math.abs(e),i=xt(Math.floor(r/60),2),o=xt(Math.floor(r%60),2);return n+i+a+o}function kn(e,t){if(e%60===0){var a=e>0?"-":"+";return a+xt(Math.abs(e)/60,2)}return ge(e,t)}function ys(e,t){var a=e>0?"-":"+",n=Math.abs(e),r=Math.floor(n/60),i=n%60;if(i===0)return a+String(r);var o=t||"";return a+String(r)+o+xt(i,2)}const ws=xs;var Ns=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;const ks=Ns;var Yt=36e5,Cn=6e4,Cs=2,H={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,plainTime:/:/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:ks};function Ss(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(e===null)return new Date(NaN);var a=t||{},n=a.additionalDigits==null?Cs:Qo(a.additionalDigits);if(n!==2&&n!==1&&n!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]")return new Date(e.getTime());if(typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]")return new Date(e);if(!(typeof e=="string"||Object.prototype.toString.call(e)==="[object String]"))return new Date(NaN);var r=_s(e),i=Os(r.date,n),o=i.year,c=i.restDateString,l=Ts(c,o);if(isNaN(l))return new Date(NaN);if(l){var u=l.getTime(),f=0,v;if(r.time&&(f=Ds(r.time),isNaN(f)))return new Date(NaN);if(r.timeZone||a.timeZone){if(v=xr(r.timeZone||a.timeZone,new Date(u+f)),isNaN(v))return new Date(NaN)}else v=gn(new Date(u+f)),v=gn(new Date(u+f+v));return new Date(u+f+v)}else return new Date(NaN)}function _s(e){var t={},a=H.dateTimePattern.exec(e),n;if(a?(t.date=a[1],n=a[3]):(a=H.datePattern.exec(e),a?(t.date=a[1],n=a[2]):(t.date=null,n=e)),n){var r=H.timeZone.exec(n);r?(t.time=n.replace(r[1],""),t.timeZone=r[1].trim()):t.time=n}return t}function Os(e,t){var a=H.YYY[t],n=H.YYYYY[t],r;if(r=H.YYYY.exec(e)||n.exec(e),r){var i=r[1];return{year:parseInt(i,10),restDateString:e.slice(i.length)}}if(r=H.YY.exec(e)||a.exec(e),r){var o=r[1];return{year:parseInt(o,10)*100,restDateString:e.slice(o.length)}}return{year:null}}function Ts(e,t){if(t===null)return null;var a,n,r,i;if(e.length===0)return n=new Date(0),n.setUTCFullYear(t),n;if(a=H.MM.exec(e),a)return n=new Date(0),r=parseInt(a[1],10)-1,_n(t,r)?(n.setUTCFullYear(t,r),n):new Date(NaN);if(a=H.DDD.exec(e),a){n=new Date(0);var o=parseInt(a[1],10);return As(t,o)?(n.setUTCFullYear(t,0,o),n):new Date(NaN)}if(a=H.MMDD.exec(e),a){n=new Date(0),r=parseInt(a[1],10)-1;var c=parseInt(a[2],10);return _n(t,r,c)?(n.setUTCFullYear(t,r,c),n):new Date(NaN)}if(a=H.Www.exec(e),a)return i=parseInt(a[1],10)-1,On(t,i)?Sn(t,i):new Date(NaN);if(a=H.WwwD.exec(e),a){i=parseInt(a[1],10)-1;var l=parseInt(a[2],10)-1;return On(t,i,l)?Sn(t,i,l):new Date(NaN)}return null}function Ds(e){var t,a,n;if(t=H.HH.exec(e),t)return a=parseFloat(t[1].replace(",",".")),Lt(a)?a%24*Yt:NaN;if(t=H.HHMM.exec(e),t)return a=parseInt(t[1],10),n=parseFloat(t[2].replace(",",".")),Lt(a,n)?a%24*Yt+n*Cn:NaN;if(t=H.HHMMSS.exec(e),t){a=parseInt(t[1],10),n=parseInt(t[2],10);var r=parseFloat(t[3].replace(",","."));return Lt(a,n,r)?a%24*Yt+n*Cn+r*1e3:NaN}return null}function Sn(e,t,a){t=t||0,a=a||0;var n=new Date(0);n.setUTCFullYear(e,0,4);var r=n.getUTCDay()||7,i=t*7+a+1-r;return n.setUTCDate(n.getUTCDate()+i),n}var Ps=[31,28,31,30,31,30,31,31,30,31,30,31],Ms=[31,29,31,30,31,30,31,31,30,31,30,31];function yr(e){return e%400===0||e%4===0&&e%100!==0}function _n(e,t,a){if(t<0||t>11)return!1;if(a!=null){if(a<1)return!1;var n=yr(e);if(n&&a>Ms[t]||!n&&a>Ps[t])return!1}return!0}function As(e,t){if(t<1)return!1;var a=yr(e);return!(a&&t>366||!a&&t>365)}function On(e,t,a){return!(t<0||t>52||a!=null&&(a<0||a>6))}function Lt(e,t,a){return!(e!=null&&(e<0||e>=25)||t!=null&&(t<0||t>=60)||a!=null&&(a<0||a>=60))}var Es=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function Is(e,t,a){var n=String(t),r=a||{},i=n.match(Es);if(i){var o=Ss(e,r);n=i.reduce(function(c,l){if(l[0]==="'")return c;var u=c.indexOf(l),f=c[u-1]==="'",v=c.replace(l,"'"+ws[l[0]](o,l,null,r)+"'");return f?v.substring(0,u-1)+v.substring(u+1):v},n)}return is(e,n,r)}const Tn=({idUserTypeInt:e})=>{const[t,a]=M.exports.useState(!1),n=he(),i=$(b=>b.token).token,[o,c]=M.exports.useState(""),[l,u]=M.exports.useState(""),[f,v]=M.exports.useState(""),[y,w]=M.exports.useState(""),[k,T]=M.exports.useState(""),[x,p]=M.exports.useState(""),h=()=>{e===3?window.modalUsers.showModal():window.modalStaff.showModal()},d=()=>{c(""),u(""),v(""),w(""),T(""),p(""),e===3?window.modalUsers.close():window.modalStaff.close(),a(!1)};return g(qe,{children:[s("button",{className:"btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black",onClick:h,children:s("h1",{className:" text-xs",children:e===3?"Nuevo Cliente":"Nuevo Staff"})}),s("dialog",{id:e===3?"modalUsers":"modalStaff",className:"modal-box",children:g("div",{children:[s("h3",{className:"font-bold text-lg text-center m-4",children:"Registro de Usuarios"}),g("form",{className:"grid grid-cols-2 text-black lg:text-sm text-xs gap-4",children:[g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"Nombre:"})}),s("input",{value:o,onChange:b=>c(b.target.value),type:"text",id:"username",name:"username",required:!0,className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"Apellidos:"})}),s("input",{value:l,onChange:b=>u(b.target.value),type:"text",id:"lastname",name:"lastname",required:!0,className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"Tel\xE9fono:"})}),s("input",{value:f,onChange:b=>v(b.target.value),type:"number",id:"phoneNumber",name:"phoneNumber",required:!0,className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"Correo:"})}),s("input",{value:y,onChange:b=>w(b.target.value),type:"email",id:"email",name:"email",required:!0,className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"Contacto de emergencia:"})}),s("input",{value:k,onChange:b=>T(b.target.value),type:"text",id:"nameemergencycontact",name:"nameemergencycontact",required:!0,className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"N\xFAmero de contacto:"})}),s("input",{value:x,onChange:b=>p(b.target.value),type:"number",id:"emergencynumbercontact",name:"emergencynumbercontact",required:!0,className:"input input-bordered w-full max-w-xs"})]}),s("button",{className:"btn-success btn-sm font-normal",onClick:async b=>{if(b.preventDefault(),!o||!l||!f||!k||!x)a(!0);else{a(!1);const C="America/Mexico_City",D=new Date;let L=Is(D,"yyyy-MM-dd HH:mm:ss",{timeZone:C});try{let F=n.idClub;const O=await Zo(o,l,f,y,k,x,e,F,L,i);O&&(ie(O.mensaje,!0),setTimeout(()=>{d()},3e3))}catch{setTimeout(()=>{ie("Hubo un error al procesar la solicitud",!1)},3e3)}}},children:"Registrar"}),s("button",{type:"button",className:"btn btn-warning btn-sm font-normal",onClick:d,children:"Cerrar"})]}),s("br",{}),t&&s("div",{className:"text-red-600",children:"Por favor, complete todos los campos."})]})})]})};const Fs=({})=>{const e=$(N=>N.user),a=$(N=>N.token).token,n=he(),r=e.rol===wt.ADMIN,[i,o]=M.exports.useState(!1),[c,l]=M.exports.useState([]),[u,f]=M.exports.useState([]),[v,y]=M.exports.useState([]),[w,k]=M.exports.useState([]),[T,x]=M.exports.useState([]),[p,h]=M.exports.useState(1),[d,m]=M.exports.useState(""),b=5,C=p*b,D=C-b,L=w.slice(D,C),F=N=>h(N),W=()=>{const N=c.filter(R=>R.username.toLowerCase().includes(d.toLowerCase()));k(N)},O=async()=>{try{const{data:N}=await Fe(n.idClub,1,a);l(N),k(N)}catch(N){console.error(N)}try{const{data:N}=await Fe(n.idClub,2,a);y(N)}catch(N){console.error(N)}try{const{data:N}=await Fe(n.idClub,3,a);f(N)}catch(N){console.error(N)}try{const{data:N}=await Fe(n.idClub,4,a);x(N)}catch(N){console.error(N)}};return M.exports.useLayoutEffect(()=>{O(),W()},[]),s(qe,{children:g("div",{className:"grid p-2 gap-6 items-center",children:[g("div",{className:"overflow-hidden",children:[g("div",{children:[g("div",{className:"flex h-16 px-2 justify-between items-center",children:[s("h1",{className:"text-black lg:text-lg md:text-lg text-xs",children:"Clientes registrados"}),s(Tn,{idUserTypeInt:3})]}),g("div",{className:"grid shadow-xl border-2 rounded-2xl",children:[g("div",{className:"flex lg:flex-row md:flex-row flex-col justify-between p-4 items-center gap-4",children:[s("input",{type:"text",placeholder:"Buscar por nombre...",value:d,onChange:N=>m(N.target.value),className:"input input-group-xs input-bordered w-full max-w-xs"}),s("button",{className:"btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black",onClick:W,children:"Buscar"})]}),s("hr",{}),s("div",{className:"max-h-48 overflow-auto m-2",children:g("table",{className:"table table-zebra table-sm table-pin-rows table-pin-cols bg-white mt-5 text-center",children:[s("thead",{children:g("tr",{children:[s("th",{children:"ID"}),s("th",{children:"Usuario"}),s("th",{children:"Apellido"}),s("th",{children:"Contacto de Emergencia"}),s("th",{children:"N\xFAmero del contacto"}),s("th",{children:"Acciones"})]})}),s("tbody",{children:L.map(N=>g("tr",{children:[s("td",{children:N.idUser}),s("td",{children:N.username}),s("td",{children:N.lastName}),s("td",{children:N.nameEmergencyContact}),s("td",{children:N.emergencyContact}),s("td",{children:s("a",{href:`/Dashboard/Gestion_de_Sucursal/${n.idClub}/Gestion_de_Usuario/${N.idUser}`,children:s(A,{icon:Rt,className:"h-4"})})})]},N.idUser))})]})}),s("div",{className:"flex join justify-end mr-5 p-2",children:Array.from({length:Math.ceil(w.length/b)},(N,R)=>s("button",{className:`join-item btn-xs lg:bg-white bg-gray-300 lg:text-black hover:bg-gray-400 ${p===R+1?"btn-active":""}`,onClick:()=>F(R+1),children:R+1},R))})]})]}),g("div",{className:"pt-10",children:[s("button",{onClick:()=>o(!i),className:"px-2 p-2",children:"Total de subscripciones activas:"}),s("hr",{}),s("div",{className:`content-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10 justify-center ${i?"show":"hide"}`,children:T.map((N,R)=>g("div",{className:"grid grid-cols-2 card m-2 text-center shadow-lg border-2 bg-black text-white xl:w-96 lg:w-72",children:[s("div",{className:"flex justify-center items-center",children:s("img",{src:Dr,alt:N.nameSubscriptionType,className:"h-[70%]"})}),g("div",{className:"flex flex-col justify-center",children:[s("h1",{className:"font-semibold text-start lg:text-xl md:text-base text-sm",children:N.nameSubscriptionType}),g("h1",{className:"lg:text-sm md:text-xm text-xs",children:["Subscripciones activas: ",N.CantSubs]})]})]},R))})]}),s("div",{children:g("div",{className:"pt-2",children:[s("div",{className:"flex h-16 px-2 justify-between items-center",children:s("h1",{className:"text-black lg:text-lg md:text-lg text-xs text-center",children:"Clientes con subscripci\xF3n"})}),s("div",{className:"grid shadow-xl border-2 rounded-2xl",children:s("div",{className:"max-h-48 overflow-auto m-2",children:g("table",{className:"table table-zebra table-sm table-pin-rows table-pin-cols bg-white mt-5 text-center",children:[s("thead",{children:g("tr",{children:[s("th",{children:"ID"}),s("th",{children:"Usuario"}),s("th",{children:"Apellido"}),s("th",{children:"Subscripci\xF3n"}),s("th",{children:"Activa"}),s("th",{children:"Inicia"}),s("th",{children:"Vence"})]})}),s("tbody",{children:v.map(N=>g("tr",{children:[s("td",{children:N.idUser}),s("td",{children:N.username}),s("td",{children:N.lastName}),s("td",{children:N.nameSubscriptionType}),s("td",{children:N.isActive}),s("td",{children:N.startDate?N.startDate.toString().split("T")[0]:"N/A"}),s("td",{children:N.endDate?N.endDate.toString().split("T")[0]:"N/A"})]},N.idUser))})]})})})]})})]}),g("div",{className:"overflow-hidden mt-10 mb-10",children:[g("div",{className:" flex p-2 bg-black rounded-lg justify-between items-center",children:[s("h1",{className:"text-white text-sm",children:"Miembros del Staf"}),r&&s(Tn,{idUserTypeInt:2})]}),s("div",{className:"max-h-48 overflow-auto p-2",children:g("table",{className:"table table-zebra table-sm table-pin-rows table-pin-cols bg-white mt-5 text-center",children:[s("thead",{children:g("tr",{children:[s("th",{children:"ID"}),s("th",{children:"Staff"}),s("th",{children:"N\xFAmero de Tel\xE9fono"}),s("th",{children:"Contacto de Emergencia"}),s("th",{children:"N\xFAmero del Contacto"}),s("th",{children:"\xDAltima entrada"}),s("th",{children:"\xDAltima salida"}),s("th",{children:"Acciones"})]})}),s("tbody",{children:u.map(N=>g("tr",{children:[s("td",{children:N.idUser}),s("td",{children:N.username}),s("td",{children:N.phoneNumber}),s("td",{children:N.nameEmergencyContact}),s("td",{children:N.emergencyContact}),s("td",{children:N.arrivalHour?N.arrivalHour.toString().split("T")[0]:"N/A"}),s("td",{children:N.exitHour?N.exitHour.toString().split("T")[0]:"N/A"}),s("td",{children:s("button",{title:"Editar Usuario",children:s(A,{icon:Rt,className:"h-4"})})})]},N.idUser))})]})})]})]})})};const js=({})=>s("div",{className:"container-fluid",children:s("div",{className:"flex justify-center items-center",children:s("h1",{children:"No cuentas con acceso a este m\xF3dulo"})})});function wr(){const e=Ta(),t=Yr();return s("button",{onClick:()=>{Pr(Mr),t(Ar()),t(Er()),e("/login",{replace:!0})},className:"text-sm",children:"Salir"})}const Us=({})=>{const e=Ir();Ta();const t=e.pathname.split("/").filter(n=>n!==""),a=t.map((n,r)=>{const i=n.split("_").join(" "),c=`/${t.slice(0,r+1).join("/")}`;return s("li",{children:s(Fr,{to:c,children:i})},r)});return g("div",{className:"navbar p-4 border-b",children:[s("div",{className:"relative flex-1",children:s("div",{className:"lg:text-sm text-xs breadcrumbs lg:ml-0 md:ml-8",children:s("ul",{children:a})})}),s("div",{className:"flex-none",children:g("div",{className:"flex items-center",children:[s(A,{icon:En,className:"h-3 m-2"}),s(wr,{})]})})]})};const zs=({})=>{const e=$(n=>n.club),a=$(n=>n.user).rol===wt.ADMIN;return s("div",{className:"h-screen md:overflow-y-auto md:overflow-x-hidden bg-black",children:g("div",{className:"flex flex-col h-full justify-between items-center",children:[s("div",{className:"flex flex-col pt-10 justify-center items-center",children:s("h1",{className:"lg:text-xl lg:block md:hidden text-lg mt-7 font-bold bottom-0 text-center text-white",children:"Black Gym Club"})}),s("div",{children:g("ul",{className:"lg:px-5 text-white lg:text-sm md:text-xs",children:[s("li",{className:"m-5 hover:bg-white rounded-md hover:text-black",children:g("a",{href:"/",className:"flex items-center",children:[s(A,{icon:jn,className:"md:h-3 h-5 m-2"}),s("h1",{className:"lg:block md:block hidden",children:"Inicio"})]})}),!a&&s("li",{className:"m-5 lg:mt-10 hover:bg-white rounded-md hover:text-black",children:g("a",{href:`/Dashboard/Gestion_de_Sucursal/${e.idClub}`,className:"flex items-center",children:[s(A,{icon:Fn,className:"md:h-3 h-5 m-2"}),s("h1",{className:"lg:block md:block hidden",children:"Gesti\xF3n de Sucursal"})]})}),a&&s("li",{className:"m-5 lg:mt-10 hover:bg-white rounded-md hover:text-black",children:g("a",{href:"/Dashboard/Gestion_de_Sucursales/",className:"flex items-center",children:[s(A,{icon:In,className:"md:h-3 h-5 m-2"}),s("h1",{className:"lg:block md:block hidden",children:"Gesti\xF3n de Sucursales"})]})}),!a&&s("li",{className:"m-5 lg:mt-10 hover:bg-white rounded-md hover:text-black",children:g("a",{href:`/Dashboard/Inventario/${e.idClub}`,className:"flex items-center",children:[s(A,{icon:ut,className:"md:h-3 h-5 m-2"}),s("h1",{className:"lg:block md:block hidden",children:"Inventario"})]})}),a&&s("li",{className:"m-5 lg:mt-10 hover:bg-white rounded-md hover:text-black",children:g("a",{href:"/Dashboard/Gestion_de_Inventarios/",className:"flex items-center",children:[s(A,{icon:ut,className:"md:h-3 h-5 m-2"}),s("h1",{className:"lg:block md:block hidden",children:"Gesti\xF3n de Inventarios"})]})}),a&&s("li",{className:"m-5 lg:mt-10 hover:bg-white rounded-md hover:text-black",children:g("a",{href:"/Dashboard/Panel_de_Administrador/",className:"flex items-center",children:[s(A,{icon:An,className:"md:h-3 h-5 m-2"}),s("h1",{className:"lg:block md:block hidden",children:"Administraci\xF3n"})]})})]})}),s("div",{className:"p-4 text-white ",children:g("a",{className:"flex items-center hover:bg-white rounded-md hover:text-black",children:[s(A,{icon:En,className:"h-4 m-2"}),s("h1",{className:"lg:block md:block hidden",children:s(wr,{})})]})})]})})};const Ys=({})=>s("div",{className:"puntoventa",children:"PuntoVenta"});const Ls=({})=>s("div",{className:"gestionfinanciera",children:"GestionFinanciera"});const Rs=()=>{const[e,t]=M.exports.useState(!1);he();const n=$(w=>w.token).token,[r,i]=M.exports.useState(""),[o,c]=M.exports.useState(""),[l,u]=M.exports.useState(""),f=()=>{window.modalClubes.showModal()},v=()=>{i(""),c(""),window.modalClubes.close(),t(!1)};return g(qe,{children:[s("button",{className:"btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent",onClick:f,children:s("h1",{children:"Nuevo Club"})}),s("dialog",{id:"modalClubes",className:"modal-box z-10",children:g("div",{children:[s("h3",{className:"font-bold text-center m-4 text-base",children:"Registro de Clubes"}),g("form",{className:"grid grid-cols-2 text-black lg:text-sm text-xs gap-4",children:[g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"Nombre del club:"})}),s("input",{value:r,onChange:w=>i(w.target.value),type:"text",id:"nameClub",name:"nameClub",required:!0,className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"Direccion:"})}),s("input",{value:o,onChange:w=>c(w.target.value),type:"text",id:"addressClub",name:"addressClub",required:!0,className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"Iframe:"})}),s("input",{value:l,onChange:w=>u(w.target.value),type:"text",id:"addressClub",name:"addressClub",required:!0,className:"input input-bordered w-full max-w-xs"})]}),s("div",{}),s("button",{className:"btn-success btn-sm font-normal",onClick:async w=>{if(w.preventDefault(),!r||!o)t(!0);else{t(!1),Lr();try{const k=await Mn(1,r,o,l,1,n);k&&(ie(k.mensaje,!0),setTimeout(()=>{v()},3e3))}catch(k){ie(k.message,!1),setTimeout(()=>{},3e3)}}},children:"Registrar"}),s("button",{type:"button",className:"btn btn-warning btn-sm font-normal",onClick:v,children:"Cerrar"})]}),s("br",{}),e&&s("div",{className:"text-red-600",children:"Por favor, complete todos los campos."})]})})]})},Hs=()=>{const t=$(i=>i.token).token,[a,n]=M.exports.useState([]),r=async()=>{try{const{data:i}=await Mn(1,"","","",2,t);n(i)}catch(i){console.error(i)}};return M.exports.useLayoutEffect(()=>{r()},[]),g("div",{className:"grid p-2 gap-4 items-center",children:[s("div",{className:"overflow-hidden",children:g("div",{className:" flex p-2 bg-gray-200 rounded-lg justify-between items-center",children:[s("h1",{className:"text-black text-sm",children:"Clubes registrados"}),s(Rs,{})]})}),s("div",{className:"max-h-48 overflow-auto m-2",children:g("table",{className:"table table-zebra table-xs table-pin-rows table-pin-cols bg-white text-center",children:[s("thead",{children:g("tr",{children:[s("th",{children:"ID"}),s("th",{children:"Nombre"}),s("th",{children:"Direccion"})]})}),s("tbody",{children:a.map(i=>g("tr",{children:[s("td",{children:i.idClub}),s("td",{children:i.nameClub}),s("td",{children:i.addressClub}),s("td",{children:g("div",{className:"grid grid-flow-col gap-2",children:[s("button",{title:"Editar Club",children:s(A,{icon:Rt,className:"h-4"})}),s("button",{title:"Gestionar Club",children:s(A,{icon:Br,className:"h-4"})})]})})]},i.idClub))})]})})]})};const $s=({})=>{const[e,t]=M.exports.useState([]),a=async()=>{try{const{data:n}=await Rr();t(n)}catch(n){console.error("Error:",n)}};return M.exports.useEffect(()=>{a()},[]),s("div",{className:"gestioninventarios",children:s("div",{className:"grid-container",children:e.map(n=>s("a",{href:`/Dashboard/Inventario/${n.idClub}`,className:"card bordered",children:g("div",{className:"flex flex-col h-full",children:[g("div",{className:"flex flex-row items-start",children:[s("figure",{className:"flex-none",children:s("img",{className:"object-cover w-32 h-32",src:"https://via.placeholder.com/150",alt:"Fachada del club"})}),g("div",{className:"card-body flex-grow",children:[s("h2",{className:"card-title",children:n.nameClub}),s("p",{children:n.addressClub})]})]}),s("div",{className:"flex justify-end items-end mt-auto"})]})},n.idClub))})})};const Ws=({inventoryID:e})=>(he(),g(qe,{children:[s("button",{className:"btn lg:btn-sm btn-xs bg-black text-white rounded-lg hover:text-black hover:bg-transparent",children:s("h1",{children:"Nuevo Producto"})}),s("dialog",{id:"modalInventory",className:"modal-box",children:g("div",{children:[s("h3",{className:"font-bold text-lg text-center m-4",children:"Agregar Producto"}),g("form",{className:"grid grid-cols-2 text-black lg:text-sm text-xs gap-4",children:[g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"Producto:"})}),s("input",{type:"text",id:"productName",name:"productName",required:!0,className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"Cantidad:"})}),s("input",{type:"number",id:"currentStock",name:"currentStock",min:0,defaultValue:0,required:!0,className:"input input-bordered w-full max-w-xs"})]}),s("input",{type:"hidden",id:"inventoryID",name:"inventoryID",value:e}),s("input",{type:"hidden",id:"created_at",name:"created_at",value:new Date().toISOString()}),s("button",{className:" btn-success btn-sm font-normal",children:"Agregar"})]})]})})]})),qs=()=>{const t=$(c=>c.token).token,[a,n]=M.exports.useState([]),r=he(),i=async()=>{try{const{inventory:c}=await $r(r.idClub,t);console.log(c),n(c)}catch(c){console.error(c)}},o=async()=>{try{console.log(a)}catch(c){console.error(c)}};return M.exports.useEffect(()=>{i(),o()},[]),g("div",{children:[s("div",{className:"grid p-2 gap-8 items-center",children:s("div",{className:" overflow-hidden",children:g("div",{className:" flex p-2 bg-gray-200 rounded-lg justify-between items-center",children:[s("h1",{className:"text-black text-sm",children:"Inventario"}),s(Ws,{inventoryID:1})]})})}),s("div",{className:"max-h-48 overflow-auto m-2",children:g("table",{className:"table table-zebra table-xs table-pin-rows table-pin-cols bg-white mt-5 text-center",children:[s("thead",{children:g("tr",{children:[s("th",{children:"ID"}),s("th",{children:"Producto"}),s("th",{children:"Stock"}),s("th",{children:"Fecha"})]})}),s("tbody",{children:a.map(c=>g("tr",{children:[s("td",{children:c.inventoryID}),s("td",{children:c.productName}),s("td",{children:c.currentStock}),s("td",{children:c.dateReorder?c.dateReorder.toString().split("T")[0]:"N/A"}),s("td",{children:g("div",{className:"grid grid-flow-col gap-2",children:[s("button",{title:"Editar Producto",children:s(A,{icon:Xr,className:"h-4"})}),s("button",{title:"Eliminar Producto",children:s(A,{icon:Zr,className:"h-4"})})]})})]},c.inventoryID))})]})})]})};function Vs(){const e=$(n=>n.club),a=$(n=>n.user).rol===wt.ADMIN;return g("div",{className:"btm-nav",children:[s("button",{children:s("a",{href:"/",className:"flex items-center",children:s(A,{icon:jn,className:"h-4"})})}),!a&&s("button",{children:s("a",{href:`/Dashboard/Gestion_de_Sucursal/${e.idClub}`,className:"flex items-center",children:s(A,{icon:Fn,className:"h-4"})})}),!a&&s("button",{children:s("a",{href:`/Dashboard/Inventario/${e.idClub}`,className:"flex items-center",children:s(A,{icon:ut,className:"h-4"})})}),a&&s("button",{children:s("a",{href:"/Dashboard/Gestion_de_Sucursales/",className:"flex items-center",children:s(A,{icon:In,className:"h-4"})})}),a&&s("button",{children:s("a",{href:"/Dashboard/Gestion_de_Inventarios/",className:"flex items-center",children:s(A,{icon:ut,className:"h-4"})})}),a&&s("button",{children:s("a",{href:"/Dashboard/Panel_de_Administrador/",className:"flex items-center",children:s(A,{icon:An,className:"md:h-3 h-5 m-2"})})})]})}function Gs(){be.fire({icon:"warning",title:"Token Expirado",text:"Tu sesi\xF3n ha expirado. Por favor, inicia sesi\xF3n nuevamente.",confirmButtonText:"Iniciar Sesi\xF3n",showCancelButton:!1}).then(e=>{e.isConfirmed&&(window.location.href="/login")})}const Nr=yt+"dbaccess/",Xs=(e,t,a,n,r,i)=>{const o={idSub:e,nameSubscription:t,daysSubscription:a,priceSubscription:n,typeAction:r},c={method:"POST",headers:{Authorization:i,"Content-Type":"application/json"},body:JSON.stringify(o)};return fetch(Nr+"crudSubscription",c).then(async l=>{if(!l.ok){const u=await l.json();throw new Error(u.message)}return l.json()}).then(l=>{if(l.error)throw new Error(l.message||"Error desconocido");return l}).catch(l=>{throw console.error("Error:",l),l})},Bs=(e,t,a,n,r,i)=>{const o={idUser:e,idSubscriptionType:t,idClub:a,startDate:n,endDate:r},c={method:"POST",headers:{Authorization:i,"Content-Type":"application/json"},body:JSON.stringify(o)};return fetch(Nr+"newOrUpdateSubscription",c).then(async l=>{if(!l.ok){const u=await l.json();throw new Error(u.message)}return l.json()}).then(l=>{if(l.error)throw new Error(l.message||"Error desconocido");return l}).catch(l=>{throw console.error("Error:",l),l})},Zs=()=>{const e=Ta(),t=he(),n=$(O=>O.token).token;let r=t.idUser,i=t.idClub;const[o,c]=M.exports.useState({username:"",lastName:"",phoneNumber:"",email:"",nameEmergencyContact:"",emergencyContact:"",nameSubscriptionType:"",isActive:""}),[l,u]=M.exports.useState([]),[f,v]=M.exports.useState(0),[y,w]=M.exports.useState(""),[k,T]=M.exports.useState(""),[x,p]=M.exports.useState(""),[h,d]=M.exports.useState(""),m=()=>{e(-1)},b=async()=>{try{const{userData:O}=await Bo(r,n);c(O)}catch(O){console.log(O)}},C=async()=>{try{const{data:O}=await Xs(1,"",0,0,2,n);u(O)}catch(O){console.log(O)}},D=async()=>{if((await be.fire({title:"\xBFDesea actualizar los datos del usuario?",icon:"question",showCancelButton:!0,confirmButtonText:"S\xED",cancelButtonText:"Cancelar"})).isConfirmed)try{const N=await bn(r,o.username,o.lastName,o.phoneNumber,o.email,o.nameEmergencyContact,o.emergencyContact,1,n);N&&ie(N.mensaje,!0)}catch(N){be.fire("Error","Hubo un error al procesar la solicitud.","error"),console.log(N)}},L=async()=>{if((await be.fire({title:"\xBFDesea eliminar a este usuario?",icon:"question",showCancelButton:!0,confirmButtonText:"S\xED",cancelButtonText:"Cancelar"})).isConfirmed)try{const N=await bn(r,o.username,o.lastName,o.phoneNumber,o.email,o.nameEmergencyContact,o.emergencyContact,2,n);N&&(ie(N.mensaje,!0),setTimeout(()=>{m()},5e3))}catch(N){be.fire("Error","Hubo un error al procesar la solicitud.","error"),console.log(N)}},F=async()=>{if((await be.fire({title:"\xBFDesea registrar la subscripci\xF3n?",icon:"question",showCancelButton:!0,confirmButtonText:"S\xED",cancelButtonText:"Cancelar"})).isConfirmed)try{const N=await Bs(r,f,i,x,h,n);N&&ie(N.mensaje,!0)}catch(N){ie("Hubo un error al procesar la solicitud.",!1),console.log(N)}},W=O=>{const N=parseInt(O.target.value,10);v(N);const R=l.find(ae=>ae.idSubscriptionType===N);if(R){const{idSubscriptionType:ae,nameSubscriptionType:Se,daysSubscription:ue,priceSubscription:_e,allAccess:Oe}=R,Te={idSubscriptionType:ae,nameSubscriptionType:Se,daysSubscription:ue,priceSubscription:_e,allAccess:Oe};console.log(ae);let De=new Date().toISOString().split("T")[0],Pe=new Date(new Date().getTime()+ue*24*60*60*1e3).toISOString().split("T")[0],Me=ue.toString();w(Te.priceSubscription),T(Me),p(De),d(Pe)}};return M.exports.useEffect(()=>{b(),C()},[]),s(qe,{children:g("div",{className:"p-2 flex flex-col",children:[g("div",{className:"grid lg:grid-flow-col md:grid-flow-col gap-6",children:[g("div",{className:"grid shadow-xl border-2 rounded-2xl",children:[s("div",{className:"flex align-middle justify-center items-center p-2",children:s("img",{src:"https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg",alt:"User",className:"rounded-xl h-48"})}),g("div",{className:"items-center text-center lg:px-10 lg:py-10 p-4",children:[g("h2",{className:"lg:text-xl text-base font-semibold",children:[o.username," ",o.lastName]}),g("div",{children:[s("hr",{className:"mt-2 mb-2"}),s("h1",{className:"lg:text-lg font-semibold text-base mb-3",children:"Subscripci\xF3n"}),s("h1",{className:"mt-3 font-semibold",children:o.nameSubscriptionType?o.nameSubscriptionType:"Sin membres\xEDa"}),s("h1",{className:"mt-3",children:o.isActive})]})]})]}),g("div",{children:[s("h1",{className:"font-semibold text-xl p-2 lg:text-start text-center",children:"Gesti\xF3n de Usuario"}),s("hr",{}),g("div",{className:"mt-10 rounded-xl border-2 p-6 shadow-xl",children:[g("form",{className:"grid lg:grid-flow-row md:grid-cols-2 lg:text-sm text-xs gap-2",children:[g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text ",children:"Nombre:"})}),s("input",{value:o.username,onChange:O=>c({...o,username:O.target.value}),type:"text",id:"username",name:"username",required:!0,className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full ",children:[s("label",{className:"label",children:s("span",{className:"label-text ",children:"Apellidos:"})}),s("input",{value:o.lastName,onChange:O=>c({...o,lastName:O.target.value}),type:"text",id:"lastname",name:"lastname",required:!0,className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text ",children:"Tel\xE9fono:"})}),s("input",{value:o.phoneNumber,onChange:O=>c({...o,phoneNumber:O.target.value}),type:"number",id:"phoneNumber",name:"phoneNumber",required:!0,className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text ",children:"Correo:"})}),s("input",{value:o.email,onChange:O=>c({...o,email:O.target.value}),type:"email",id:"email",name:"email",required:!0,className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text ",children:"Contacto de emergencia:"})}),s("input",{value:o.nameEmergencyContact,onChange:O=>c({...o,nameEmergencyContact:O.target.value}),type:"text",id:"nameemergencycontact",name:"nameemergencycontact",required:!0,className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text ",children:"N\xFAmero de contacto:"})}),s("input",{value:o.emergencyContact,onChange:O=>c({...o,emergencyContact:O.target.value}),type:"number",id:"emergencynumbercontact",name:"emergencynumbercontact",required:!0,className:"input input-bordered w-full max-w-xs"})]})]}),g("div",{className:"flex lg:flex-row flex-col gap-4 mt-10 lg:justify-end md:justify-end",children:[s("button",{className:"btn btn-success btn-sm font-normal",onClick:D,children:"Actualizar datos"}),s("button",{type:"button",className:"btn btn-warning btn-sm font-normal",onClick:m,children:"Volver"})]})]})]})]}),g("div",{className:"mt-10 p-4",children:[s("h1",{className:"font-semibold text-xl p-2",children:"Gesti\xF3n de Subscripci\xF3n"}),s("hr",{}),g("div",{className:"mt-10 rounded-xl border-2 p-6 shadow-xl",children:[g("form",{className:"grid lg:grid-cols-3 md:grid-cols-2 lg:text-sm text-xs gap-4",children:[g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"Tipo de Subscripci\xF3n:"})}),g("select",{onChange:W,className:"input input-bordered w-full max-w-xs",children:[s("option",{value:"",children:"Seleccione una suscripci\xF3n"}),l.map(O=>s("option",{value:O.idSubscriptionType,children:O.nameSubscriptionType},O.idSubscriptionType))]})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"Precio:"})}),s("input",{type:"number",value:y,onChange:O=>w(O.target.value),readOnly:!0,className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"Duraci\xF3n:"})}),s("input",{type:"number",value:k,readOnly:!0,onChange:O=>T(O.target.value),className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"Fecha de Inicio:"})}),s("input",{type:"date",value:x,onChange:O=>p(O.target.value),className:"input input-bordered w-full max-w-xs"})]}),g("div",{className:"form-control w-full",children:[s("label",{className:"label",children:s("span",{className:"label-text",children:"Fecha fin:"})}),s("input",{type:"date",value:h,onChange:O=>d(O.target.value),className:"input input-bordered w-full max-w-xs"})]})]}),g("div",{className:"flex lg:flex-row flex-col gap-4 mt-10 lg:justify-end md:justify-end",children:[s("button",{className:"btn btn-success btn-sm font-normal",onClick:F,children:"Registrar Subscripci\xF3n"}),s("button",{type:"button",className:"btn btn-warning btn-sm font-normal",onClick:m,children:"Volver"})]})]})]}),s("div",{className:"flex mt-5 p-4 justify-end",children:s("button",{className:" btn btn-sm hover:bg-red-600",onClick:L,children:"Eliminar Usuario"})})]})})},Qs=M.exports.lazy(()=>jr(()=>import("./Dashboard.61c67752.js"),["assets/Dashboard.61c67752.js","assets/index.702953c2.js","assets/index.c7d87db1.css","assets/LoadingComponent.841dea2c.js"]));function Js(){const t=$(n=>n.token).token,a=async()=>{try{const{data:n}=await Fe("1",1,t);n&&console.log("Token Valido")}catch(n){console.error("Error:",n),Gs()}};return M.exports.useEffect(()=>{a()}),g("div",{className:"flex h-screen overflow-hidden relative",children:[s("div",{className:"lg:block lg:w-64 md:hidden hidden h-screen  transition-all duration-500",children:s(zs,{})}),g("div",{className:"flex-grow overflow-x-hidden min-h-screen p-4 rounded-xl lg:m-2 md:m-4 m-0 pb-4",children:[s(Us,{}),s("div",{className:"p-6 overflow-y-auto relative z-0 pb-10",children:g(Ur,{children:[s(G,{path:"/",element:s(Dn,{to:st.DASHBOARD})}),s(G,{path:st.DASHBOARD,element:s(Qs,{})}),s(G,{path:st.CANTACCESS,element:s(js,{})}),s(G,{path:"Gestion_de_Sucursal/:idClub",element:s(Fs,{})}),s(G,{path:"Punto_de_Venta/:idClub",element:s(Ys,{})}),s(G,{path:"Inventario/:idClub",element:s(qs,{})}),s(G,{path:"Gestion_de_Sucursal/:idClub/Gestion_de_Usuario/:idUser",element:s(Zs,{})}),g(G,{element:s(Hr,{rol:wt.ADMIN}),children:[s(G,{path:"Gestion_de_Sucursales/",element:s(Xo,{})}),s(G,{path:"Gestion_Financiera/",element:s(Ls,{})}),s(G,{path:"Panel_de_Administrador",element:s(Hs,{})}),s(G,{path:"Gestion_de_Inventarios/",element:s($s,{})})]})]})})]}),s("br",{}),s("div",{className:"lg:hidden",children:s(Vs,{})})]})}const tl=Object.freeze(Object.defineProperty({__proto__:null,default:Js},Symbol.toStringTag,{value:"Module"}));export{A as F,tl as P,ut as a,Fn as b,In as f};
