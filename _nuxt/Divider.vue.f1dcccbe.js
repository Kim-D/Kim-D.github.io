import{f as d,h as n,o as s,c as i,v as l,G as r,k as T,_ as k,j as u,w as f,d as y,b as h,P as U,Q as g,R as A,W as _,a as m,F as j,t as B,T as C,q as $}from"./entry.bf64b599.js";import{T as I}from"./Text.521f1a84.js";import{d as N,a as w,u as V,b as D}from"./Button.ed1ba773.js";import{_ as S}from"./Avatar.7f45d98b.js";const O=d({inheritAttrs:!0,__name:"Token",props:{color:{default:"primary"}},setup(e){const a=e,o=n(()=>{const t=[];return t.push(`${a.color}`),t});return(t,c)=>(s(),i("span",{class:r(["token",T(o)])},[l(t.$slots,"default",{},void 0,!0)],2))}});const z=k(O,[["__scopeId","data-v-0cd032c9"]]),M=d({__name:"SearchResult",setup(e){return(a,o)=>(s(),u(I,null,{default:f(()=>[l(a.$slots,"prefix",{},()=>[y(" 검색결과 ")]),h(z,null,{default:f(()=>[l(a.$slots,"default")]),_:3}),h(z,{color:"base"},{default:f(()=>[l(a.$slots,"suffix",{},()=>[y(" 건 ")])]),_:3})]),_:3}))}}),R=U(g.ui.strategy,g.ui.divider,N),F=d({components:{UIcon:w,UAvatar:S},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:a,attrs:o}=V("divider",A(e,"ui"),R),t=n(()=>e.orientation==="horizontal"),c=n(()=>D(_(a.value.wrapper.base,t.value?a.value.wrapper.horizontal:a.value.wrapper.vertical),e.class)),b=n(()=>_(a.value.container.base,t.value?a.value.container.horizontal:a.value.container.vertical)),p=n(()=>{const v={solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}[e.type];return _(a.value.border.base,t.value?a.value.border.horizontal:a.value.border.vertical,t.value?a.value.border.size.horizontal:a.value.border.size.vertical,v)});return{ui:a,attrs:o,wrapperClass:c,containerClass:b,borderClass:p}}});function P(e,a,o,t,c,b){const p=w,v=S;return s(),i("div",C({class:e.wrapperClass},e.attrs),[m("div",{class:r(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(s(),i(j,{key:0},[m("div",{class:r(e.containerClass)},[l(e.$slots,"default",{},()=>[e.label?(s(),i("span",{key:0,class:r(e.ui.label)},B(e.label),3)):e.icon?(s(),u(p,{key:1,name:e.icon,class:r(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(s(),u(v,C({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):$("",!0)])],2),m("div",{class:r(e.borderClass)},null,2)],64)):$("",!0)],16)}const q=k(F,[["render",P]]),Q=d({__name:"Divider",props:{orientation:{default:"horizontal"},type:{default:"solid"}},setup(e){return(a,o)=>{const t=q;return s(),u(t,{orientation:a.orientation,type:a.type},null,8,["orientation","type"])}}});export{M as _,Q as a};
