import{u as F,r as l,c as j,a as O,P as b,j as e,b as a,l as P,U,d as T,e as I,f as A}from"./index.d25e646e.js";import{u as L}from"./useDispatch.21fadf9d.js";const x="https://accessdb.blackgymfitclub.com/api/",R=x+"login",q=(n,r,c)=>{const u={username:n,password:r,idClub:c},d={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)};return fetch(R,d).then(async s=>{if(!s.ok){const i=await s.json();throw new Error(i.message)}return s.json()}).then(s=>{if(s.error)throw new Error(s.message||"Error desconocido");return s}).catch(s=>{throw console.error("Error:",s),s})},D=x+"getClubes",G=()=>fetch(D,{method:"GET",headers:{"Content-Type":"application/json"}}).then(r=>{if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return r.json()}).catch(r=>{throw console.error("Error:",r),r});function J(){const n=L(),r=F(),[c,u]=l.exports.useState(""),[d,s]=l.exports.useState(""),[i,f]=l.exports.useState("1"),[m,y]=l.exports.useState(""),[h,w]=l.exports.useState([]),[v,C]=l.exports.useState(!1);l.exports.useEffect(()=>{j(U),n(O()),r(`/${b.LOGIN}`,{replace:!0})},[]);const N=async t=>{if(t.preventDefault(),!c||!d||!i){C(!0);return}try{const o=await q(c,d,i);n(T({...o})),r(`/${I.PRIVATE}`,{replace:!0})}catch(o){console.error("Error de inicio de sesi\xF3n:",o),y(o.message)}};return e("div",{className:"min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12",onLoad:async()=>{try{const{data:t}=await G();w(t)}catch(t){console.error("Error:",t)}},children:a("div",{className:"relative py-3 sm:max-w-xl sm:mx-auto",children:[e("div",{className:"absolute inset-0 bg-gradient-to-r from-black to-white shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"}),e("div",{className:"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20",children:a("div",{className:"max-w-md mx-auto",children:[a("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[e("img",{className:"mx-auto h-16 w-auto",src:P,alt:"Your Company"}),e("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black",children:"Bienvenido"})]}),e("div",{className:"divide-y divide-gray-200",children:a("div",{className:"py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7",children:[a("div",{className:"relative",children:[e("input",{id:"username",value:c,onChange:t=>u(t.target.value),name:"username",type:"text",className:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"}),e("label",{htmlFor:"username",className:"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm",children:"Usuario"})]}),a("div",{className:"relative",children:[e("input",{id:"password",onChange:t=>s(t.target.value),name:"password",type:"password",className:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"}),e("label",{htmlFor:"password",className:"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm",children:"Contrase\xF1a"})]}),a("div",{className:"relative",children:[e("div",{className:"pt-2 pb-2",children:a("select",{id:"idClub",name:"idClub",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:i,onChange:t=>{const o=t.target.value;f(o);const E=parseInt(o,10),g=h.find(p=>p.idClub===E);if(g){const{idClub:p,nameClub:S,address:k}=g;n(A({...{idClub:p,nameClub:S,address:k}}))}else console.log("No se encontr\xF3 ning\xFAn club para el ID seleccionado")},children:[e("option",{value:"",children:"Selecciona una sucursal."}),h.map(t=>e("option",{value:t.idClub,children:t.nameClub},t.idClub))]})}),e("label",{htmlFor:"idClub",className:"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm",children:"Club"})]}),v&&e("div",{className:"text-red-600",children:"Por favor, complete todos los campos."}),m&&e("div",{className:"text-red-600",children:m}),e("div",{className:"relative",children:e("button",{onClick:N,className:"flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Ingresar"})}),e("div",{className:"relative",children:e("a",{href:b.FORGOTPASS,className:"absolute left-4 -top-1 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm hover:text-indigo-500 hover:border-b",children:"Olvidaste tu contrase\xF1a?"})})]})})]})})]})})}export{J as default};
