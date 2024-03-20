import{_ as P}from"./nuxt-link.0282fad6.js";import{f as W,s as U,g as z,y as H,h as J,r as _,i as Q,o as u,j as y,w as l,b as r,k as n,l as X,d as i,t as b,c as h,m as D,F as x,n as S}from"./entry.bf64b599.js";import{u as Y}from"./KForm.vue.35a1ec8c.js";import{f as T,g as Z,a as ee}from"./KDateRangePicker.vue.a53e4ed9.js";import{u as te}from"./index.0d8a044b.js";import{u as ae}from"./index.eebf9e91.js";import{_ as w}from"./Stack.vue.f2e87cfc.js";import{C as le,a as re}from"./customer.api.10300d73.js";import{u as oe,_ as se}from"./useLabelGroup.2723abbd.js";import{_ as ne,a as ue}from"./Divider.vue.f1dcccbe.js";import{L as ie,a as me}from"./List.b3513e41.js";import{T as d}from"./Text.521f1a84.js";import{_ as fe}from"./Flex.vue.05e8867f.js";import{u as ce}from"./task-management.store.f1fe7103.js";import{a as de}from"./task.api.46ccf832.js";import{T as q,a as N}from"./task.constant.13c2168f.js";import{t as pe}from"./index.6949dd38.js";import"./Button.ed1ba773.js";import"./KRadioGroup.99df7f19.js";import"./Input.ea2a240b.js";import"./Avatar.7f45d98b.js";import"./createPopper.81b77d5f.js";import"./disposables.62724182.js";import"./KImageUpload.ddbba17d.js";import"./Icon.54269085.js";import"./index.df58e121.js";import"./useModal.e0651368.js";import"./BarcodeReader.vue.b797d3e9.js";import"./KSwipeModal.a8714521.js";import"./SignaturePad.vue.7fdbcfae.js";import"./Box.028b2dfc.js";import"./Title.295950d5.js";import"./KButton.1dc6351c.js";import"./api.882d370b.js";const Qe=W({__name:"[facSeq]",setup(_e){te("고객 상세");const v=ae("facSeq"),C=ce(),{taskItems:s}=U(C),I=z.useLoading({color:"#0000ff",loader:"bars",canCancel:!1}),g=H(),L=J(()=>s.value.length),m=_(0),p=_(0),f=_(1),{schema:O,items:V,state:o,handleSubmit:j}=Y(le,[{name:"facSeq",label:"고객일련번호",type:"number",disabled:!0},{name:"facNm",label:"고객명(현장명)",type:"text",disabled:!0},{name:"repTelNo",label:"대표전화 번호",type:"text",disabled:!0},{name:"facBasAdr",label:"주소",type:"text",disabled:!0},{name:"setDt",label:"설치일자",type:"date",disabled:!0,defaultValue:new Date}],async e=>{await S(),e&&(m.value===0?m.value=1:m.value=0,s.value=[],p.value=0,f.value=1)}),B=oe(s,[{key:"taskId",label:"작업 일련 번호"},{key:"facNm",label:"고객명"},{key:"iotId",label:"장비 아이디"},{key:"statusCd",label:"작업 상태 코드",formatter(e){return A(e)}},{key:"typeCd",label:"작업 타입 코드",formatter(e){return R(e)}},{key:"requestDt",label:"작업일자",formatter(e){return ee(e)}}]);function R(e){const t=Object.values(q).indexOf(e);return Object.keys(q)[t]}function A(e){const t=Object.values(N).indexOf(e);return Object.keys(N)[t]}async function $(e){if(o.value.facSeq.length>0&&s.value.length!==0&&s.value.length>=p.value){e.complete();return}try{const t={};t.fromRequestDt=T(Z(new Date,-12)),t.toRequestToDt=T(new Date),t.statusCd="2002",t.typeCd="",t.page=f.value,t.limit=10,t.facSeq=Number.parseInt(v.value);const a=await de(t);p.value=a.data.totalRows,s.value=s.value.concat(a.data.items),a.data.items.length<10?e.complete():(f.value=f.value+1,e.loaded())}catch(t){g.add({type:"error",text:t.message})}}async function G(){let e="";const t=I.show();re(Number.parseInt(v.value)).then(a=>{o.value.facBasAdr=a.data.facBasAdr,o.value.facDtlAdr=a.data.facDtlAdr,o.value.facNm=a.data.facNm,o.value.facSeq=a.data.facSeq,o.value.repTelNo=a.data.repTelNo,o.value.setDt=typeof a.data.setDt=="string"?new Date(a.data.setDt):a.data.setDt}).catch(a=>{e=a.message}).finally(()=>{t.hide(),e.length>0&&g.add({type:"error",text:e})})}function M(e){return`/work-management/detail?taskId=${e}`}return pe(async()=>{s.value=[],await S(),await G()}),(e,t)=>{const a=P,F=Q("infinite-loading");return u(),y(w,null,{default:l(()=>[r(se,{modelValue:n(o),"onUpdate:modelValue":t[0]||(t[0]=c=>X(o)?o.value=c:null),items:n(V),schema:n(O),onSubmit:n(j)},null,8,["modelValue","items","schema","onSubmit"]),r(ne,null,{default:l(()=>[i(b(n(L)),1)]),_:1}),r(ue),r(me,null,{default:l(()=>[(u(!0),h(x,null,D(n(B),(c,E)=>(u(),y(ie,{key:E,class:"border-b"},{default:l(()=>[r(a,{to:M(c[0].value)},{default:l(()=>[r(w,{gap:.25},{default:l(()=>[(u(!0),h(x,null,D(c,(k,K)=>(u(),y(fe,{key:K,justify:"between"},{default:l(()=>[r(d,null,{default:l(()=>[i(b(k.label),1)]),_:2},1024),r(d,{align:"right"},{default:l(()=>[i(b(k.value),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1}),r(F,{class:"w-full text-center",identifier:n(m),onInfinite:$},{complete:l(()=>[r(d,null,{default:l(()=>[i("마지막 항목 입니다.")]),_:1})]),spinner:l(()=>[r(d,null,{default:l(()=>[i(" loading... ")]),_:1})]),_:1},8,["identifier"])]),_:1})}}});export{Qe as default};