import{o as l,v as h,b as s,j as e,F as n}from"./index.9e6010ae.js";import{F as a,f as m,a as i,b as u}from"./Private.6b458b45.js";import"./clubes.service.bc8ef7d7.js";function g(){const r=l(d=>d.user),c=l(d=>d.club);let t=r.idClub;const o=r.rol===h.ADMIN;return s("div",{className:"container",children:[s("div",{className:" mt-[2%]",children:[s("h1",{className:" font-semibold lg:text-4xl md:text-3xl text-2xl",children:["Bienvenido ",e("span",{className:" font-normal uppercase",children:r.username})]}),s("h1",{className:" text-lg font-semibold mt-4",children:[" Sucursal:  ",e("span",{className:" font-normal",children:c.nameClub})]})]}),s("div",{className:"mt-[10%]",children:[e("h1",{children:"Accesos r\xE1pidos"}),e("br",{}),e("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center text-white text-sm",children:o?s(n,{children:[e("a",{href:"Gestion_de_Sucursales/",className:"card bg-black shadow-md rounded-lg",children:s("div",{className:"card-body justify-center",children:[e(a,{icon:m}),s("h1",{children:["Gesti\xF3n de ",e("br",{})," sucursales"]})]})}),e("a",{href:"Gestion_de_Inventarios/",className:"card bg-black shadow-md rounded-lg",children:s("div",{className:"card-body justify-center",children:[e(a,{icon:i}),s("h1",{children:["Gesti\xF3n de ",e("br",{})," Inventarios"]})]})})]}):s(n,{children:[e("a",{href:`Gestion_de_Sucursal/${t}`,className:"card bg-black shadow-md rounded-lg",children:s("div",{className:"card-body justify-center",children:[e(a,{icon:u}),s("h1",{children:["Gesti\xF3n de ",e("br",{})," sucursal"]})]})}),e("a",{href:`Inventario/${c.idClub}`,className:"card bg-black shadow-md rounded-lg",children:s("div",{className:"card-body justify-center",children:[e(a,{icon:i}),s("h1",{children:["Gesti\xF3n de ",e("br",{})," Inventario"]})]})})]})})]})]})}export{g as default};
