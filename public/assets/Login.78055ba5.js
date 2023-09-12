import{u as L,r as a,c as j,a as T,d as U,P as f,j as t,b as e,l as A,U as D,i as M,e as O,s as R,f as G,g as V,h as $}from"./index.526432c6.js";import{u as z,g as B}from"./clubes.service.dc72e304.js";function Q(){const l=z(),u=L(),[o,b]=a.exports.useState(""),[p,v]=a.exports.useState(""),[n,w]=a.exports.useState("1"),[m,y]=a.exports.useState(""),[N,C]=a.exports.useState(!1),[h,k]=a.exports.useState([]),[S,i]=a.exports.useState(!1),[F,c]=a.exports.useState(!1);a.exports.useEffect(()=>{j(D),l(T()),l(U()),u(`/${f.LOGIN}`,{replace:!0})},[]);const P=async s=>{if(s.preventDefault(),!o||!p||!n){C(!0);return}try{i(!0),c(!0);const r=await M(o,p,n);setTimeout(()=>{c(!1),i(!1),l(R({...{token:O}})),l(G({...r})),u(`/${V.PRIVATE}`,{replace:!0})},2e3)}catch(r){console.error("Error de inicio de sesi\xF3n:",r),c(!1),i(!1),y(r.message)}};return t("div",{className:"max-h-screen bg-gray-100 flex flex-col justify-center sm:py-12 overflow-hidden",onLoad:async()=>{try{const{data:s}=await B();k(s)}catch(s){console.error("Error:",s)}},children:[t("div",{className:"relative py-3 sm:max-w-xl sm:mx-auto",children:[e("div",{className:"absolute inset-0 bg-gradient-to-r from-black to-white shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"}),e("div",{className:"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20",children:t("div",{className:"max-w-md mx-auto",children:[t("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[e("img",{className:"mx-auto h-16 w-auto",src:A,alt:"Your Company"}),e("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black",children:"Bienvenido"})]}),e("div",{className:"divide-y divide-gray-200",children:t("div",{className:"py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7",children:[t("div",{className:"relative",children:[e("input",{id:"username",value:o,onChange:s=>b(s.target.value),name:"username",type:"text",className:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"}),e("label",{htmlFor:"username",className:"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm",children:"Usuario"})]}),t("div",{className:"relative",children:[e("input",{id:"password",onChange:s=>v(s.target.value),name:"password",type:"password",className:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"}),e("label",{htmlFor:"password",className:"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm",children:"Contrase\xF1a"})]}),t("div",{className:"relative",children:[e("div",{className:"pt-2 pb-2",children:t("select",{id:"idClub",name:"idClub",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:n,onChange:s=>{const r=s.target.value;w(r);const x=parseInt(r,10),g=h.find(d=>d.idClub===x);if(g){const{idClub:d,nameClub:E,address:I}=g;l($({...{idClub:d,nameClub:E,address:I}}))}else console.log("No se encontr\xF3 ning\xFAn club para el ID seleccionado")},children:[e("option",{value:"",children:"Selecciona una sucursal."}),h.map(s=>e("option",{value:s.idClub,children:s.nameClub},s.idClub))]})}),e("label",{htmlFor:"idClub",className:"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm",children:"Club"})]}),N&&e("div",{className:"text-red-600",children:"Por favor, complete todos los campos."}),m&&e("div",{className:"text-red-600",children:m}),e("div",{className:"relative",children:e("button",{onClick:P,className:"flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Ingresar"})}),e("div",{className:"relative",children:e("a",{href:f.FORGOTPASS,className:"absolute left-4 -top-1 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm hover:text-indigo-500 hover:border-b",children:"Olvidaste tu contrase\xF1a?"})})]})})]})})]}),S&&e("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:e("div",{className:"",children:F?t("div",{className:"flex flex-col bg-white p-4 rounded-lg shadow-md items-center",children:[e("span",{className:"loading loading-lg text-black"}),e("span",{children:"Por favor espere..."})]}):e("p",{children:"Por favor espere..."})})})]})}export{Q as default};
