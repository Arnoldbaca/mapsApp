import{A as p,B as f,E as C,H as g,L as v,M as k,N as M,g as u,k as a,l as c,m as s,n as o,o as i,r as d,x as m,z as l}from"./chunk-ZJ2NMQRK.js";var y=e=>[e];function F(e,_){if(e&1&&(o(0,"li",2),m(1),i()),e&2){let n=_.$implicit;s("routerLink",f(2,y,n.route)),a(),l(" ",n.name," ")}}var b=(()=>{class e{menuItems=[{route:"/maps/fullscreen",name:"FullScreen"},{route:"/maps/zoom-range",name:"ZoomRange"},{route:"/maps/markers",name:"Markers"},{route:"/maps/properties",name:"House"},{route:"/alone",name:"Alone Page"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=u({type:e,selectors:[["side-menu"]],standalone:!0,features:[p],decls:2,vars:1,consts:[[1,"list-group"],["routerLinkActive","active","class","list-group-item",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"list-group-item",3,"routerLink"]],template:function(t,r){t&1&&(o(0,"ul",0),c(1,F,2,4,"li",1),i()),t&2&&(a(),s("ngForOf",r.menuItems))},dependencies:[g,C,M,v,k],styles:["li[_ngcontent-%COMP%]{cursor:pointer;transition:.2s all;width:120px}ul[_ngcontent-%COMP%]{position:fixed;top:20px;left:20px;z-index:999;width:120px}"]})}return e})();var D=(()=>{class e{counter=10;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=u({type:e,selectors:[["counter-alone"]],inputs:{counter:"counter"},standalone:!0,features:[p],decls:4,vars:1,consts:[[1,"btn","btn-primary",3,"click"]],template:function(t,r){t&1&&(o(0,"h1"),m(1),i(),o(2,"button",0),d("click",function(){return r.counter=r.counter+1}),m(3,` +1
`),i()),t&2&&(a(),l("Counter ",r.counter,""))}})}return e})();export{b as a,D as b};
