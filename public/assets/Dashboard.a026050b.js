import{i as l,n as m,b as a,j as e,F as n}from"./index.58bfcbd0.js";import{F as s,f as h,a as i,b,c as u,d as x}from"./Private.b6dd2c16.js";import"./auth.service.8146f15c.js";function v(){const d=l(r=>r.user),c=l(r=>r.club);let t=d.idClub;const o=d.rol===m.ADMIN;return a("div",{className:"container",children:[a("div",{className:" mt-[2%]",children:[a("h1",{className:" font-medium text-4xl md:text-2xl",children:["Bienvenido ",e("span",{className:" font-normal uppercase",children:d.username})]}),a("h1",{className:" text-lg font-medium",children:[" Sucursal:  ",e("span",{className:" font-normal",children:c.nameClub})]})]}),a("div",{className:"mt-[10%]",children:[e("h1",{children:"Accesos r\xE1pidos"}),e("br",{}),e("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center text-white",children:o?a(n,{children:[e("a",{href:"Gestion_de_Sucursales/",className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body",children:[e(s,{icon:h}),a("h1",{className:" text-sm md:text-base",children:["Gesti\xF3n de ",e("br",{})," sucursales"]})]})}),e("a",{href:"Gestion_de_Inventarios/",className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body",children:[e(s,{icon:i}),a("h1",{className:" text-sm md:text-base",children:["Gesti\xF3n de ",e("br",{})," Inventarios"]})]})}),e("a",{href:"Gestion_Financiera/",className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body",children:[e(s,{icon:b,className:""}),a("h1",{className:" text-sm md:text-base",children:["Gesti\xF3n ",e("br",{})," Financiera"]})]})})]}):a(n,{children:[e("a",{href:`Gestion_de_Sucursal/${t}`,className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body",children:[e(s,{icon:u}),a("h1",{className:" text-sm md:text-base",children:["Gesti\xF3n de ",e("br",{})," sucursal"]})]})}),e("a",{href:`Punto_de_Venta/${c.idClub}`,className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body",children:[e(s,{icon:x}),a("h1",{className:" text-sm md:text-base",children:["Punto de ",e("br",{})," Venta"]})]})}),e("a",{href:`Inventario/${c.idClub}`,className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body",children:[e(s,{icon:i}),a("h1",{className:" text-sm md:text-base",children:["Gesti\xF3n de ",e("br",{})," Inventario"]})]})})]})})]})]})}export{v as default};