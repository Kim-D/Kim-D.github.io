import{b as _}from"./index.0d8a044b.js";import{B as V}from"./Box.028b2dfc.js";import{_ as b}from"./KForm.vue.35a1ec8c.js";import{f as h,C as k,o as v,j as x,w as i,b as y,d as B,k as l,l as S,h as m,V as p}from"./entry.bf64b599.js";const N=h({__name:"SearchBox",props:{items:{},modelValue:{},schema:{}},emits:["update:modelValue","submit"],setup(r,{emit:u}){const t=r,a=u,{items:o,schema:s}=k(t),e=_(t,"modelValue",a);function f(n){a("submit",n)}return(n,c)=>(v(),x(V,null,{default:i(()=>[y(b,{modelValue:l(e),"onUpdate:modelValue":c[0]||(c[0]=d=>S(e)?e.value=d:null),items:l(o),schema:l(s),onSubmit:f},{submit:i(()=>[B(" 검색 ")]),_:1},8,["modelValue","items","schema"])]),_:1}))}});function R(r,u){const t=m(()=>p(u)),a=m(()=>p(r));function o(s){return t.value.map(e=>({label:e.label,key:e.key,value:e.formatter?e.formatter(s[e.key]):s[e.key]}))}return m(()=>Array.isArray(a.value)?a.value.map(s=>o(s)):o(a.value))}export{N as _,R as u};
