import{_ as p}from"./Button.ed1ba773.js";import{f,h as o,o as a,j as m,w as _,c as h,G as s,k as n,q as y,v as w,S as b,_ as B}from"./entry.bf64b599.js";const g=f({__name:"KButton",props:{disabled:{type:Boolean,default:!1},size:{default:"md"},width:{default:"normal"},color:{},variant:{},loading:{type:Boolean,default:!1},htmlType:{default:"reset"}},setup(l){const e=l,i=o(()=>e.disabled||e.loading),r=o(()=>`loading-${e.size}`),d=o(()=>e.width==="fit"?"k-button-fit":e.width==="normal"?"k-button":""),u=o(()=>{const t={};return e.width==="fit"||e.width==="normal"||(typeof e.width=="number"||typeof e.width=="string")&&(t.width=`${e.width}px`),t});return(t,k)=>{const c=p;return a(),m(c,{color:t.color,disabled:n(i),variant:t.variant,size:t.size,type:t.htmlType,style:b(n(u)),block:t.width==="wide",class:s(n(d))},{default:_(()=>[t.loading?(a(),h("span",{key:0,class:s(["d-loading d-loading-spinner",n(r)])},null,2)):y("",!0),w(t.$slots,"default",{},void 0,!0)]),_:3},8,["color","disabled","variant","size","type","style","block","class"])}}});const S=B(g,[["__scopeId","data-v-cb515af1"]]);export{S as K};
