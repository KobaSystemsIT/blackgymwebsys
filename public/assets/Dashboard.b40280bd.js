import{i as c,m as o,b as e,F as t,j as s,e as r}from"./index.d0e0cac4.js";import{F as l,f as m,a as h,b as u}from"./Private.062af504.js";import"./iconBG.5423702b.js";function b(){const n=c(a=>a.user),d=c(a=>a.club),i=n.rol===o.ADMIN;return e(t,{children:s("div",{className:"container-fluid",children:[s("div",{children:[s("h1",{className:" font-medium text-2xl",children:["Bienvenido ",e("span",{className:" font-normal uppercase",children:n.username})]}),s("h1",{className:" text-lg font-medium",children:[" Sucursal:  ",e("span",{className:" font-normal",children:d.nameClub})]})]}),e("br",{}),s("div",{className:"text-center p-2",children:[e("h1",{children:"Accesos r\xE1pidos"}),e("br",{}),s("div",{className:"inline-grid md:grid-cols-2 lg:grid-flow-col gap-4",children:[i&&e("a",{href:r.SUCADMIN,className:"p-2 bg-slate-100 shadow-md rounded-lg",children:s("div",{className:"card-body flex-row items-center",children:[e(l,{icon:m}),e("h1",{children:"Gesti\xF3n de sucursales"})]})}),e("a",{href:r.SUCSTAFF,className:"p-2 bg-slate-100 shadow-md rounded-lg",children:s("div",{className:"card-body flex-row items-center",children:[e(l,{icon:h}),e("h1",{children:"Gesti\xF3n de sucursal"})]})}),e("a",{href:r.PDV,className:"p-2 bg-slate-100 shadow-md rounded-lg",children:s("div",{className:"card-body flex-row items-center",children:[e(l,{icon:u}),e("h1",{children:"Punto de Venta"})]})})]})]})]})})}export{b as default};
