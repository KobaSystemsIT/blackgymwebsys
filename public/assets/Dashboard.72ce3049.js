import{i as n,n as h,j as a,b as e,F as l}from"./index.131facab.js";import{F as d,f as m,a as i,b,c as u,d as g}from"./Private.4a21bfdb.js";import"./clubes.service.09aeca32.js";function v(){const s=n(c=>c.user),r=n(c=>c.club);let o=s.idClub;const t=s.rol===h.ADMIN;return a("div",{className:"container",children:[a("div",{className:" mt-[2%]",children:[a("h1",{className:" font-semibold lg:text-4xl md:text-3xl text-2xl",children:["Bienvenido ",e("span",{className:" font-normal uppercase",children:s.username})]}),a("h1",{className:" text-lg font-semibold mt-4",children:[" Sucursal:  ",e("span",{className:" font-normal",children:r.nameClub})]})]}),a("div",{className:"mt-[10%]",children:[e("h1",{children:"Accesos r\xE1pidos"}),e("br",{}),e("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center text-white text-sm",children:t?a(l,{children:[e("a",{href:"Gestion_de_Sucursales/",className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body",children:[e(d,{icon:m}),a("h1",{children:["Gesti\xF3n de ",e("br",{})," sucursales"]})]})}),e("a",{href:"Gestion_de_Inventarios/",className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body",children:[e(d,{icon:i}),a("h1",{children:["Gesti\xF3n de ",e("br",{})," Inventarios"]})]})}),e("a",{href:"Gestion_Financiera/",className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body",children:[e(d,{icon:b,className:""}),a("h1",{children:["Gesti\xF3n ",e("br",{})," Financiera"]})]})})]}):a(l,{children:[e("a",{href:`Gestion_de_Sucursal/${o}`,className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body",children:[e(d,{icon:u}),a("h1",{children:["Gesti\xF3n de ",e("br",{})," sucursal"]})]})}),e("a",{href:`Punto_de_Venta/${r.idClub}`,className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body",children:[e(d,{icon:g}),a("h1",{children:["Punto de ",e("br",{})," Venta"]})]})}),e("a",{href:`Inventario/${r.idClub}`,className:"card bg-black shadow-md rounded-lg",children:a("div",{className:"card-body",children:[e(d,{icon:i}),a("h1",{children:["Gesti\xF3n de ",e("br",{})," Inventario"]})]})})]})})]})]})}export{v as default};
