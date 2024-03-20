import{_ as A}from"./nuxt-link.0282fad6.js";import{f as H,s as P,r as b,y as Q,h as U,i as z,o as u,j as g,w as a,b as o,k as s,l as J,d as i,t as T,c as x,m as D,F as O,n as V}from"./entry.bf64b599.js";import{g as X,f as I,a as Y}from"./KDateRangePicker.vue.a53e4ed9.js";import{u as Z}from"./index.0d8a044b.js";import{a as j}from"./index.eebf9e91.js";import{_ as C}from"./Stack.vue.f2e87cfc.js";import{u as ee,_ as te}from"./useLabelGroup.2723abbd.js";import{u as ae}from"./KForm.vue.35a1ec8c.js";import{L as oe,a as le}from"./List.b3513e41.js";import{_ as se}from"./Flex.vue.05e8867f.js";import{T as _}from"./Text.521f1a84.js";import{_ as ne,a as re}from"./Divider.vue.f1dcccbe.js";import{작 as ue}from"./work-management.schema.cb437e58.js";import{T as k,a as m}from"./task.constant.13c2168f.js";import{u as ie}from"./task-management.store.f1fe7103.js";import{a as me}from"./task.api.46ccf832.js";import{t as fe}from"./index.6949dd38.js";import"./Icon.54269085.js";import"./index.df58e121.js";import"./Button.ed1ba773.js";import"./createPopper.81b77d5f.js";import"./Box.028b2dfc.js";import"./KRadioGroup.99df7f19.js";import"./Input.ea2a240b.js";import"./Avatar.7f45d98b.js";import"./disposables.62724182.js";import"./KImageUpload.ddbba17d.js";import"./useModal.e0651368.js";import"./BarcodeReader.vue.b797d3e9.js";import"./KSwipeModal.a8714521.js";import"./SignaturePad.vue.7fdbcfae.js";import"./Title.295950d5.js";import"./KButton.1dc6351c.js";import"./api.882d370b.js";const Qe=H({__name:"index",setup(pe){Z("작업 관리");const L=ie(),{taskItems:l}=P(L),v=j("taskType",null),f=j("taskStatus",null),p=b(0),y=b(0),c=b(1),q=Q(),R=U(()=>l.value.length),{state:n,items:$,schema:M,handleSubmit:B}=ae(ue,[{name:"유형",label:"유형",type:"select",options:[...Object.keys(k).map(e=>({label:e,value:e}))],required:!1,defaultValue:h(v.value)??void 0},{name:"단계",label:"단계",type:"select",options:[...Object.keys(m).map(e=>({label:e,value:e}))],required:!1,defaultValue:S(f.value)??void 0},{name:"일시",label:"일시",type:"date-range",defaultValue:{start:new Date,end:X(new Date,1)}}],async e=>{await V(),console.log(e.단계),e.유형&&(v.value=k[e.유형]),e.단계&&(f.value=m[e.단계]),e&&(p.value===0?p.value=1:p.value=0,l.value=[],y.value=0,c.value=1)});function h(e){const t=Object.values(k).indexOf(e);return Object.keys(k)[t]}function S(e){const t=Object.values(m).indexOf(e);return Object.keys(m)[t]}const F=ee(l,[{key:"taskId",label:"작업 일련 번호"},{key:"iotId",label:"장비 아이디"},{key:"statusCd",label:"작업 상태 코드",formatter(e){return S(e)}},{key:"typeCd",label:"작업 타입 코드",formatter(e){return h(e)}},{key:"requestDt",label:"날짜",formatter(e){return Y(e)}}]);function G(e){return f.value===m.미배정?`/work-management/detail?taskId=${e}&tab=work-group-tab`:`/work-management/detail?taskId=${e}`}async function N(e){if(l.value.length!==0&&l.value.length>=y.value){e.complete();return}try{const t={};t.fromRequestDt=I(n.value.일시.start),t.toRequestToDt=I(n.value.일시.end),t.statusCd=f.value??"",t.typeCd=v.value??"",t.page=c.value,t.limit=10,t.facSeq=0;const r=await me(t);y.value=r.data.totalRows,l.value=l.value.concat(r.data.items),r.data.items.length<10?e.complete():(c.value=c.value+1,e.loaded())}catch(t){q.add({type:"error",text:t.message})}}return fe(async()=>{await V(),l.value=[]}),(e,t)=>{const r=A,E=z("infinite-loading");return u(),g(C,null,{default:a(()=>[o(te,{modelValue:s(n),"onUpdate:modelValue":t[0]||(t[0]=d=>J(n)?n.value=d:null),items:s($),schema:s(M),onSubmit:s(B)},null,8,["modelValue","items","schema","onSubmit"]),o(ne,null,{default:a(()=>[i(T(s(R)),1)]),_:1}),o(re),o(le,null,{default:a(()=>[(u(!0),x(O,null,D(s(F),(d,K)=>(u(),g(oe,{key:K,class:"border-b"},{default:a(()=>[o(r,{to:G(d[0].value)},{default:a(()=>[o(C,{gap:.25},{default:a(()=>[(u(!0),x(O,null,D(d,(w,W)=>(u(),g(se,{key:W,justify:"between"},{default:a(()=>[o(_,null,{default:a(()=>[i(T(w.label),1)]),_:2},1024),o(_,{align:"right"},{default:a(()=>[i(T(w.value),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1}),o(E,{class:"w-full text-center",identifier:s(p),onInfinite:N},{complete:a(()=>[o(_,null,{default:a(()=>[i("마지막 항목 입니다.")]),_:1})]),spinner:a(()=>[o(_,null,{default:a(()=>[i(" loading... ")]),_:1})]),_:1},8,["identifier"])]),_:1})}}});export{Qe as default};