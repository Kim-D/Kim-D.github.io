import{_ as d,b as u}from"./KDateRangePicker.vue.176744ed.js";import{f as p,r,o as f,c,b as s,w as m,a as n,k as a,l as i}from"./entry.c4ebd43d.js";import"./Icon.85766b0e.js";import"./index.df58e121.js";import"./Button.a6d1e8d0.js";import"./nuxt-link.3df1dd84.js";import"./index.f27507dc.js";import"./index.d7501e1d.js";import"./createPopper.81b77d5f.js";const _=n("p",null,"Playground",-1),N=p({__name:"calendar",setup(k){const t=r(new Date),l=r({start:new Date,end:new Date});return(V,e)=>(f(),c("main",null,[_,s(d,{modelValue:a(t),"onUpdate:modelValue":e[1]||(e[1]=o=>i(t)?t.value=o:null),"is-dark":!0},{footer:m(()=>[n("div",{class:"d-btn m-2",onClick:e[0]||(e[0]=o=>console.log("click",a(t)))}," 확인 ")]),_:1},8,["modelValue"]),s(u,{modelValue:a(l),"onUpdate:modelValue":e[3]||(e[3]=o=>i(l)?l.value=o:null),modelModifiers:{range:!0},borderless:!0},{footer:m(()=>[n("div",{class:"d-btn m-2",onClick:e[2]||(e[2]=o=>console.log("click",a(l)))}," 확인 ")]),_:1},8,["modelValue"])]))}});export{N as default};