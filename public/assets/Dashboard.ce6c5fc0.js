import{i as l,o as i,j as a,b as e}from"./index.9811feaf.js";import{F as r,f as o,a as t,b as h,c as m}from"./Private.1ec8b352.js";import"./useDispatch.3adb1526.js";function p(){const d=l(c=>c.user),s=l(c=>c.club),n=d.rol===i.ADMIN;return a("div",{className:"container",children:[a("div",{children:[a("h1",{className:" font-medium text-2xl",children:["Bienvenido ",e("span",{className:" font-normal uppercase",children:d.username})]}),a("h1",{className:" text-lg font-medium",children:[" Sucursal:  ",e("span",{className:" font-normal",children:s.nameClub})]})]}),e("br",{}),a("div",{className:"text-center p-2",children:[e("h1",{children:"Accesos r\xE1pidos"}),e("br",{}),a("div",{className:"inline-grid md:grid-cols-2 sm:grid-cols-2 lg:grid-flow-col gap-4",children:[n&&e("a",{href:"Gestion_de_Sucursales/",className:"p-2 bg-black shadow-md rounded-lg text-white",children:a("div",{className:"card-body flex-row items-center",children:[e(r,{icon:o}),e("h1",{children:"Gesti\xF3n de sucursales"})]})}),e("a",{href:`Gestion_de_Sucursal/${s.idClub}`,className:"p-2 bg-black shadow-md rounded-lg text-white",children:a("div",{className:"card-body flex-row items-center",children:[e(r,{icon:t}),e("h1",{children:"Gesti\xF3n de sucursal"})]})}),e("a",{href:`Punto_de_Venta/${s.idClub}`,className:"p-2 bg-black shadow-md rounded-lg text-white",children:a("div",{className:"card-body flex-row items-center",children:[e(r,{icon:h}),e("h1",{children:"Punto de Venta"})]})}),e("a",{href:`Inventario/${s.idClub}`,className:"p-2 bg-black shadow-md rounded-lg text-white",children:a("div",{className:"card-body flex-row items-center",children:[e(r,{icon:m}),e("h1",{children:"Inventario"})]})})]})]})]})}export{p as default};
