import{R as s,g as a,h}from"./index.a54e005e.js";function c(t=s){const e=t===s?a:h(t);return function(){const{store:r}=e();return r}}const p=c();function d(t=s){const e=t===s?p:c(t);return function(){return e().dispatch}}const b=d(),f="https://accessdb.blackgymfitclub.com/api/",g=f+"login",m=(t,e,n)=>{const r={username:t,password:e,idClub:n},i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};return fetch(g,i).then(async o=>{if(!o.ok){const u=await o.json();throw new Error(u.message)}return o.json()}).then(o=>{if(o.error)throw new Error(o.message||"Error desconocido");return o}).catch(o=>{throw console.error("Error:",o),o})};export{f as b,m as i,b as u};
