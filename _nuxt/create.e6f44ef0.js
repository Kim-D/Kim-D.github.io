import{_ as x}from"./Input.ea2a240b.js";import{_ as y}from"./Button.ed1ba773.js";import{f as w,r as c,B as v,g as B,y as S,o as C,j as R,w as n,b as s,d as h,k as b,l as V}from"./entry.bf64b599.js";import{u as $}from"./index.0d8a044b.js";import{_ as M}from"./Stack.vue.f2e87cfc.js";import{_ as N}from"./KTransfer.vue.729f6d35.js";import{_ as L}from"./Flex.vue.05e8867f.js";import{T as U}from"./Text.521f1a84.js";import{B as q}from"./Box.028b2dfc.js";import{a as j,b as E}from"./task-team.api.251ce45e.js";import"./index.6949dd38.js";import"./nuxt-link.0282fad6.js";import"./Icon.54269085.js";import"./index.df58e121.js";import"./List.b3513e41.js";import"./ScrollArea.vue.03ab21fc.js";import"./KButton.1dc6351c.js";import"./api.882d370b.js";const se=w({__name:"create",setup(G){$("작업조 등록");const l=c(""),i=c([]),f=c(null),u=c([]),g=v(),p=B.useLoading({color:"#0000ff",loader:"bars",canCancel:!1}),_=S();async function k(t){let a="";const o=p.show();try{const e=await j(t)??[];u.value=e.data}catch(e){a=e.message}finally{o.hide(),a.length>0&&_.add({type:"error",text:a})}}function T(){var m;let t="";const a=p.show(),o=(m=f.value)==null?void 0:m.getSelectedList();i.value=o??[];const e={};e.teamNm=l.value,e.mbrSeqs=i.value.map(r=>r.mbrSeq),E(e).then(r=>{var d;((d=r.data)==null?void 0:d.message)==="success"&&g.back()}).catch(r=>{t=r.message}).finally(()=>{a.hide(),t.length>0&&_.add({type:"error",text:t})})}return(t,a)=>{const o=x,e=y;return C(),R(M,null,{default:n(()=>[s(q,null,{default:n(()=>[s(L,{align:"baseline"},{default:n(()=>[s(U,{class:"w-20"},{default:n(()=>[h(" 작업조명 ")]),_:1}),s(o,{modelValue:b(l),"onUpdate:modelValue":a[0]||(a[0]=m=>V(l)?l.value=m:null),class:"w-full","input-class":"h-12",placeholder:"작업조명을 입력해주세요."},null,8,["modelValue"])]),_:1})]),_:1}),s(N,{ref_key:"transferRef",ref:f,items:b(u),onSearch:k},null,8,["items"]),s(e,{color:"primary",class:"w-full",onClick:T},{default:n(()=>[h(" 등록 ")]),_:1})]),_:1})}}});export{se as default};