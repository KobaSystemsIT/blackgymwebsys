import{o as n,q as h,b as a,j as e,F as i}from"./index.c5058da9.js";import{F as s,f as m,a as l,b as u,c as b,d as f}from"./Private.e2c8708c.js";import"./clubes.service.55fe020b.js";function v(){const d=n(c=>c.user),r=n(c=>c.club);let t=d.idClub;const o=d.rol===h.ADMIN;return a("div",{className:"container",children:[a("div",{className:" mt-[2%]",children:[a("h1",{className:" font-semibold lg:text-4xl md:text-3xl text-2xl",children:["Bienvenido ",e("span",{className:" font-normal uppercase",children:d.username})]}),a("h1",{className:" text-lg font-semibold mt-4",children:[" Sucursal:  ",e("span",{className:" font-normal",children:r.nameClub})]})]}),a("div",{className:"mt-[10%]",children:[e("h1",{children:"Accesos r\xE1pidos"}),e("br",{}),e("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center text-white text-sm",children:o?a(i,{children:[e("a",{href:"Gestion_de_Sucursales/",className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body justify-center",children:[e(s,{icon:m}),a("h1",{children:["Gesti\xF3n de ",e("br",{})," sucursales"]})]})}),e("a",{href:"Gestion_de_Inventarios/",className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body justify-center",children:[e(s,{icon:l}),a("h1",{children:["Gesti\xF3n de ",e("br",{})," Inventarios"]})]})}),e("a",{href:"Gestion_Financiera/",className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body justify-center",children:[e(s,{icon:u,className:""}),a("h1",{children:["Gesti\xF3n ",e("br",{})," Financiera"]})]})})]}):a(i,{children:[e("a",{href:`Gestion_de_Sucursal/${t}`,className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body justify-center",children:[e(s,{icon:b}),a("h1",{children:["Gesti\xF3n de ",e("br",{})," sucursal"]})]})}),e("a",{href:`Punto_de_Venta/${r.idClub}`,className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body justify-center",children:[e(s,{icon:f}),a("h1",{children:["Punto de ",e("br",{})," Venta"]})]})}),e("a",{href:`Inventario/${r.idClub}`,className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body justify-center",children:[e(s,{icon:l}),a("h1",{children:["Gesti\xF3n de ",e("br",{})," Inventario"]})]})})]})})]})]})}export{v as default};
