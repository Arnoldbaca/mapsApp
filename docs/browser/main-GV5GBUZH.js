import{I as a,J as s,K as l,N as n,f as e,g as i,h as r,p as m}from"./chunk-ZJ2NMQRK.js";var M=[{path:"maps",loadChildren:()=>import("./chunk-FGNIUCVA.js").then(o=>o.MapsModule)},{path:"alone",loadComponent:()=>import("./chunk-OSJPS3RE.js").then(o=>o.AlonePageComponent)},{path:"**",redirectTo:"maps"}],u=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=r({type:o});static \u0275inj=e({imports:[n.forRoot(M),n]})}return o})();var d=(()=>{class o{title="mapsApp";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=i({type:o,selectors:[["app-root"]],decls:1,vars:0,template:function(t,g){t&1&&m(0,"router-outlet")},dependencies:[l]})}return o})();var f=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=r({type:o,bootstrap:[d]});static \u0275inj=e({imports:[s,u]})}return o})();a().bootstrapModule(f,{ngZoneEventCoalescing:!0}).catch(o=>console.error(o));
