import{f as j,r as V,J as ke,h as N,K as Ve,L as ie,D as U,M as We,F as H,N as Ee,O as Ce,P as Ke,Q as $e,_ as Re,R as De,i as te,o as w,j as P,w as v,b as I,G as Q,S as Be,a as ue,c as G,m as re,v as _e,t as B,d as $,T as ze,C as Ye,U as He,k as S,l as z,V as Pe,s as ce,n as de,g as Te,y as Ie,q as Oe}from"./entry.c4ebd43d.js";import{u as Se,_ as xe}from"./KForm.vue.8f51e837.js";import{a as Je,u as Qe}from"./index.f27507dc.js";import{_ as ee}from"./Stack.vue.bd4d8877.js";import{t as Xe,u as Ze,_ as ea}from"./Button.a6d1e8d0.js";import{a as aa,f as Fe,O as le,o as D,H as me,T as ta,t as Ge,N as je,u as ye,b as L,c as be,d as la,m as sa,P as X,e as E}from"./disposables.47903ef7.js";import{c as na,b as ua}from"./KRadioGroup.a041d2e3.js";import{B as ae}from"./Box.03872979.js";import{u as pe}from"./task-management.store.164cb114.js";import{a as oa}from"./index.3eaa8920.js";import{기 as ra,처 as ia,a as da,b as ca,증 as ma,c as pa,d as fa,T as va}from"./work-management.schema.cd31fd62.js";import{T as R,I as F,A as oe,P as ge,C as he,a as Z}from"./task.constant.13c2168f.js";import{t as fe}from"./index.d7501e1d.js";import ba from"./Icon.85766b0e.js";import{u as ya}from"./api.184bdff1.js";import{u as ga}from"./useModal.1d49dae4.js";import{a as qe,L as se}from"./List.cebf833c.js";import{T as K}from"./Text.bed8161d.js";import{_ as Ae}from"./Flex.vue.8a6b864f.js";import{K as ha}from"./KSwipeModal.fccfb107.js";import{d as ka,f as _a}from"./task-team.api.9af4120b.js";import{c as Ta,d as Ia,e as Sa,f as xa,g as Ca,h as Aa,i as Na,j as wa,k as Ma,l as Va}from"./task.api.816ee26b.js";import{K as $a}from"./KButton.55ae4892.js";import{g as Da,f as ne}from"./KDateRangePicker.vue.176744ed.js";import"./Input.aba85dfb.js";import"./KImageUpload.effa1968.js";import"./BarcodeReader.vue.c0f2a4d2.js";import"./SignaturePad.vue.0ab69b12.js";import"./Title.e07643fd.js";import"./nuxt-link.3df1dd84.js";import"./Avatar.cca694e9.js";import"./createPopper.81b77d5f.js";import"./index.df58e121.js";let Pa=j({props:{onFocus:{type:Function,required:!0}},setup(e){let h=V(!0);return()=>h.value?ke(Fe,{as:"button",type:"button",features:aa.Focusable,onFocus(r){r.preventDefault();let c,u=50;function a(){var m;if(u--<=0){c&&cancelAnimationFrame(c);return}if((m=e.onFocus)!=null&&m.call(e)){h.value=!1,cancelAnimationFrame(c);return}c=requestAnimationFrame(a)}c=requestAnimationFrame(a)}}):null}});var Oa=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Oa||{}),ja=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(ja||{});let Ue=Symbol("TabsContext");function ve(e){let h=Ce(Ue,null);if(h===null){let r=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ve),r}return h}let Ne=Symbol("TabsSSRContext"),qa=j({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:h,attrs:r,emit:c}){var u;let a=V((u=e.selectedIndex)!=null?u:e.defaultIndex),m=V([]),y=V([]),_=N(()=>e.selectedIndex!==null),b=N(()=>_.value?e.selectedIndex:a.value);function i(n){var t;let l=le(s.tabs.value,D),d=le(s.panels.value,D),p=l.filter(C=>{var f;return!((f=D(C))!=null&&f.hasAttribute("disabled"))});if(n<0||n>l.length-1){let C=ye(a.value===null?0:Math.sign(n-a.value),{[-1]:()=>1,0:()=>ye(Math.sign(n),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),f=ye(C,{0:()=>l.indexOf(p[0]),1:()=>l.indexOf(p[p.length-1])});f!==-1&&(a.value=f),s.tabs.value=l,s.panels.value=d}else{let C=l.slice(0,n),f=[...l.slice(n),...C].find(k=>p.includes(k));if(!f)return;let o=(t=l.indexOf(f))!=null?t:s.selectedIndex.value;o===-1&&(o=s.selectedIndex.value),a.value=o,s.tabs.value=l,s.panels.value=d}}let s={selectedIndex:N(()=>{var n,t;return(t=(n=a.value)!=null?n:e.defaultIndex)!=null?t:null}),orientation:N(()=>e.vertical?"vertical":"horizontal"),activation:N(()=>e.manual?"manual":"auto"),tabs:m,panels:y,setSelectedIndex(n){b.value!==n&&c("change",n),_.value||i(n)},registerTab(n){var t;if(m.value.includes(n))return;let l=m.value[a.value];m.value.push(n),m.value=le(m.value,D);let d=(t=m.value.indexOf(l))!=null?t:a.value;d!==-1&&(a.value=d)},unregisterTab(n){let t=m.value.indexOf(n);t!==-1&&m.value.splice(t,1)},registerPanel(n){y.value.includes(n)||(y.value.push(n),y.value=le(y.value,D))},unregisterPanel(n){let t=y.value.indexOf(n);t!==-1&&y.value.splice(t,1)}};Ve(Ue,s);let x=V({tabs:[],panels:[]}),M=V(!1);ie(()=>{M.value=!0}),Ve(Ne,N(()=>M.value?null:x.value));let T=N(()=>e.selectedIndex);return ie(()=>{U([T],()=>{var n;return i((n=e.selectedIndex)!=null?n:e.defaultIndex)},{immediate:!0})}),We(()=>{if(!_.value||b.value==null||s.tabs.value.length<=0)return;let n=le(s.tabs.value,D);n.some((t,l)=>D(s.tabs.value[l])!==D(t))&&s.setSelectedIndex(n.findIndex(t=>D(t)===D(s.tabs.value[b.value])))}),()=>{let n={selectedIndex:a.value};return ke(H,[m.value.length<=0&&ke(Pa,{onFocus:()=>{for(let t of m.value){let l=D(t);if((l==null?void 0:l.tabIndex)===0)return l.focus(),!0}return!1}}),me({theirProps:{...r,...ta(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:n,slots:h,attrs:r,name:"TabGroup"})])}}}),La=j({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:h,slots:r}){let c=ve("TabList");return()=>{let u={selectedIndex:c.selectedIndex.value},a={role:"tablist","aria-orientation":c.orientation.value};return me({ourProps:a,theirProps:e,slot:u,attrs:h,slots:r,name:"TabList"})}}}),Ea=j({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${Ge()}`}},setup(e,{attrs:h,slots:r,expose:c}){let u=ve("Tab"),a=V(null);c({el:a,$el:a}),ie(()=>u.registerTab(a)),Ee(()=>u.unregisterTab(a));let m=Ce(Ne),y=N(()=>{if(m.value){let t=m.value.tabs.indexOf(e.id);return t===-1?m.value.tabs.push(e.id)-1:t}return-1}),_=N(()=>{let t=u.tabs.value.indexOf(a);return t===-1?y.value:t}),b=N(()=>_.value===u.selectedIndex.value);function i(t){var l;let d=t();if(d===be.Success&&u.activation.value==="auto"){let p=(l=sa(a))==null?void 0:l.activeElement,C=u.tabs.value.findIndex(f=>D(f)===p);C!==-1&&u.setSelectedIndex(C)}return d}function s(t){let l=u.tabs.value.map(d=>D(d)).filter(Boolean);if(t.key===L.Space||t.key===L.Enter){t.preventDefault(),t.stopPropagation(),u.setSelectedIndex(_.value);return}switch(t.key){case L.Home:case L.PageUp:return t.preventDefault(),t.stopPropagation(),i(()=>X(l,E.First));case L.End:case L.PageDown:return t.preventDefault(),t.stopPropagation(),i(()=>X(l,E.Last))}if(i(()=>ye(u.orientation.value,{vertical(){return t.key===L.ArrowUp?X(l,E.Previous|E.WrapAround):t.key===L.ArrowDown?X(l,E.Next|E.WrapAround):be.Error},horizontal(){return t.key===L.ArrowLeft?X(l,E.Previous|E.WrapAround):t.key===L.ArrowRight?X(l,E.Next|E.WrapAround):be.Error}}))===be.Success)return t.preventDefault()}let x=V(!1);function M(){var t;x.value||(x.value=!0,!e.disabled&&((t=D(a))==null||t.focus({preventScroll:!0}),u.setSelectedIndex(_.value),la(()=>{x.value=!1})))}function T(t){t.preventDefault()}let n=na(N(()=>({as:e.as,type:h.type})),a);return()=>{var t;let l={selected:b.value},{id:d,...p}=e,C={ref:a,onKeydown:s,onMousedown:T,onClick:M,id:d,role:"tab",type:n.value,"aria-controls":(t=D(u.panels.value[_.value]))==null?void 0:t.id,"aria-selected":b.value,tabIndex:b.value?0:-1,disabled:e.disabled?!0:void 0};return me({ourProps:C,theirProps:p,slot:l,attrs:h,slots:r,name:"Tab"})}}}),Ra=j({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:h,attrs:r}){let c=ve("TabPanels");return()=>{let u={selectedIndex:c.selectedIndex.value};return me({theirProps:e,ourProps:{},slot:u,attrs:r,slots:h,name:"TabPanels"})}}}),Ba=j({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${Ge()}`},tabIndex:{type:Number,default:0}},setup(e,{attrs:h,slots:r,expose:c}){let u=ve("TabPanel"),a=V(null);c({el:a,$el:a}),ie(()=>u.registerPanel(a)),Ee(()=>u.unregisterPanel(a));let m=Ce(Ne),y=N(()=>{if(m.value){let i=m.value.panels.indexOf(e.id);return i===-1?m.value.panels.push(e.id)-1:i}return-1}),_=N(()=>{let i=u.panels.value.indexOf(a);return i===-1?y.value:i}),b=N(()=>_.value===u.selectedIndex.value);return()=>{var i;let s={selected:b.value},{id:x,tabIndex:M,...T}=e,n={ref:a,id:x,role:"tabpanel","aria-labelledby":(i=D(u.tabs.value[_.value]))==null?void 0:i.id,tabIndex:b.value?M:-1};return!b.value&&e.unmount&&!e.static?ke(Fe,{as:"span",...n}):me({ourProps:n,theirProps:T,slot:s,attrs:h,slots:r,features:je.Static|je.RenderStrategy,visible:b.value,name:"TabPanel"})}}});const Ha=Ke($e.ui.strategy,$e.ui.tabs,Xe),Fa=j({components:{HTabGroup:qa,HTabList:La,HTab:Ea,HTabPanels:Ra,HTabPanel:Ba},inheritAttrs:!1,props:{modelValue:{type:Number,default:void 0},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},defaultIndex:{type:Number,default:0},items:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:h}){const{ui:r,attrs:c}=Ze("tabs",De(e,"ui"),Ha,De(e,"class")),u=V(),a=V([]),m=V(),y=V(e.modelValue||e.defaultIndex);function _(i){var x;const s=(x=a.value[i])==null?void 0:x.$el;s&&(m.value.style.top=`${s.offsetTop}px`,m.value.style.left=`${s.offsetLeft}px`,m.value.style.width=`${s.offsetWidth}px`,m.value.style.height=`${s.offsetHeight}px`)}function b(i){y.value=i,h("change",i),e.modelValue!==void 0&&h("update:modelValue",i),_(i)}return Je(u,()=>{_(y.value)}),U(()=>e.modelValue,i=>{y.value=i,_(i)}),ie(()=>_(y.value)),{ui:r,attrs:c,listRef:u,itemRefs:a,markerRef:m,selectedIndex:y,onChange:b}}}),Ga={class:"truncate"};function Ua(e,h,r,c,u,a){const m=te("HTab"),y=te("HTabList"),_=te("HTabPanel"),b=te("HTabPanels"),i=te("HTabGroup");return w(),P(i,ze({vertical:e.orientation==="vertical","selected-index":e.selectedIndex,as:"div",class:e.ui.wrapper},e.attrs,{onChange:e.onChange}),{default:v(()=>[I(y,{ref:"listRef",class:Q([e.ui.list.base,e.ui.list.background,e.ui.list.rounded,e.ui.list.shadow,e.ui.list.padding,e.ui.list.width,e.orientation==="horizontal"&&e.ui.list.height,e.orientation==="horizontal"&&"inline-grid items-center"]),style:Be([e.orientation==="horizontal"&&`grid-template-columns: repeat(${e.items.length}, minmax(0, 1fr))`])},{default:v(()=>[ue("div",{ref:"markerRef",class:Q(e.ui.list.marker.wrapper)},[ue("div",{class:Q([e.ui.list.marker.base,e.ui.list.marker.background,e.ui.list.marker.rounded,e.ui.list.marker.shadow])},null,2)],2),(w(!0),G(H,null,re(e.items,(s,x)=>(w(),P(m,{key:x,ref_for:!0,ref:"itemRefs",disabled:s.disabled,as:"template"},{default:v(({selected:M,disabled:T})=>[ue("button",{class:Q([e.ui.list.tab.base,e.ui.list.tab.background,e.ui.list.tab.height,e.ui.list.tab.padding,e.ui.list.tab.size,e.ui.list.tab.font,e.ui.list.tab.rounded,e.ui.list.tab.shadow,M?e.ui.list.tab.active:e.ui.list.tab.inactive])},[_e(e.$slots,"default",{item:s,index:x,selected:M,disabled:T},()=>[ue("span",Ga,B(s.label),1)])],2)]),_:2},1032,["disabled"]))),128))]),_:3},8,["class","style"]),I(b,{class:Q(e.ui.container)},{default:v(()=>[(w(!0),G(H,null,re(e.items,(s,x)=>(w(),P(_,{key:x,class:Q(e.ui.base),tabindex:"-1"},{default:v(({selected:M})=>[_e(e.$slots,s.slot||"item",{item:s,index:x,selected:M},()=>[$(B(s.content),1)])]),_:2},1032,["class"]))),128))]),_:3},8,["class"])]),_:3},16,["vertical","selected-index","class","onChange"])}const Wa=Re(Fa,[["render",Ua]]),Ka={class:"space-y-3"},za=j({__name:"KTabs",props:{items:{},modelValue:{}},emits:["update:modelValue","submit"],setup(e,{emit:h}){const r=e,c=h,{items:u}=Ye(r),a=V(0);U(()=>r.modelValue,b=>{a.value=u.value.findIndex(i=>i.key===b)??0},{immediate:!0}),U(a,b=>{c("update:modelValue",u.value[b].key)});const m=N(()=>u.value.map(b=>({key:b.key,label:b.label,description:b.description}))),y=N(()=>u.value[a.value].component);function _(b){c("submit",b)}return(b,i)=>{const s=Wa;return w(),P(s,{modelValue:S(a),"onUpdate:modelValue":i[0]||(i[0]=x=>z(a)?a.value=x:null),items:S(m),class:"w-full"},{item:v(()=>[ue("div",Ka,[(w(),P(He(S(y)),{onSubmit:_},null,32))])]),_:1},8,["modelValue","items"])}}});function Ya(e){const h=oa("tab",Pe(e)[0].key??"",{transform:String}),r=N(()=>Pe(e));return{activeTab:h,items:r}}const Ja=j({__name:"BasicTab",emits:["submit"],setup(e,{emit:h}){const r=h,c=pe(),{currentTaskDetail:u}=ce(c),{state:a,schema:m,items:y,handleSubmit:_}=Se(ra,[{label:"업체명",name:"companyNm",type:"text",disabled:!0},{label:"현장명",name:"facNm",type:"text",disabled:!0},{label:"대표번호",name:"repTelNo",type:"text",disabled:!0},{label:"기본주소",name:"facBasAdr",type:"text",disabled:!0},{label:"상세주소",name:"facDtlAdr",type:"text",disabled:!0},{label:"모델명",name:"modelNm",type:"text",disabled:!0},{label:"장비ID",name:"iotId",type:"text",disabled:!0},{label:"작업유형",name:"typeCd",type:"text",disabled:!0},{label:"희망일시",name:"requestDt",type:"date",defaultValue:new Date},{label:"바코드번호",name:"barcode",type:"barcode"}],i=>{r("submit",{data:i,key:"basic-tab"})});U(u,i=>{console.log("===== called watch!!!",i),i&&(a.value.barcode=i.barcode??"",a.value.companyNm=i.companyNm,a.value.facBasAdr=i.facBasAdr,a.value.facDtlAdr=i.facDtlAdr,a.value.facNm=i.facNm,a.value.iotId=i.iotId,a.value.modelNm=i.modelNm,a.value.repTelNo=i.repTelNo??"",a.value.requestDt=i.requestDt,a.value.typeCd=i.typeCd?b(i.typeCd):"")},{deep:!0}),fe(()=>{de(()=>{u&&(a.value.barcode=u.value.barcode??"",a.value.companyNm=u.value.companyNm,a.value.facBasAdr=u.value.facBasAdr,a.value.facDtlAdr=u.value.facDtlAdr,a.value.facNm=u.value.facNm,a.value.iotId=u.value.iotId,a.value.modelNm=u.value.modelNm,a.value.repTelNo=u.value.repTelNo??"",a.value.requestDt=u.value.requestDt,a.value.typeCd=u.value.typeCd?b(u.value.typeCd):"")})});function b(i){const s=Object.values(R).indexOf(i);return Object.keys(R)[s]}return(i,s)=>(w(),P(ae,null,{default:v(()=>[I(ee,null,{default:v(()=>[I(xe,{modelValue:S(a),"onUpdate:modelValue":s[0]||(s[0]=x=>z(a)?a.value=x:null),schema:S(m),items:S(y),onSubmit:S(_)},{submit:v(()=>[$(" 저장 ")]),_:1},8,["modelValue","schema","items","onSubmit"])]),_:1})]),_:1}))}}),Qa=j({inheritAttrs:!0,__name:"ListItemTitle",props:{tag:{default:"h3"}},setup(e){return(h,r)=>(w(),P(He(h.tag),{class:"d-card-title"},{default:v(()=>[_e(h.$slots,"default",{},void 0,!0)]),_:3}))}});const Le=Re(Qa,[["__scopeId","data-v-7b5d400c"]]),Xa=j({__name:"EmptyBox",props:{height:{default:"8rem"}},setup(e){const h=e,r=N(()=>{const c={};return typeof h.height=="number"?c.height=`${h.height}px`:c.height=h.height,c.width="100%",c});return(c,u)=>(w(),P(ae,{style:Be(S(r))},{default:v(()=>[I(Ae,{justify:"center",align:"center"},{default:v(()=>[_e(c.$slots,"default",{},()=>[$("비어있습니다.")])]),_:3})]),_:3},8,["style"]))}}),Za=j({__name:"WorkGroupTab",setup(e){const h=pe(),{currentTaskDetail:r}=ce(h),c=ya(),u=Te.useLoading({color:"#0000ff",loader:"bars",canCancel:!1}),a=Ie(),m=V([]),y=V(""),_=V([]);U(r,l=>{r&&(r.value.barcode=l.barcode??"",r.value.companyNm=l.companyNm,r.value.facBasAdr=l.facBasAdr,r.value.facDtlAdr=l.facDtlAdr,r.value.facNm=l.facNm,r.value.iotId=l.iotId,r.value.modelNm=l.modelNm,r.value.repTelNo=l.repTelNo??"",r.value.requestDt=l.requestDt,r.value.typeCd=l.typeCd)},{deep:!0});const b=N(()=>{var l;return((l=m.value)==null?void 0:l.length)>0}),i=N(()=>b.value?"재배정":"배정"),{value:s,toggle:x}=ga();function M(){if(r.value.taskId){const l=u.show();let d="";Ta(r.value.taskId).then(p=>{p&&p.message==="success"&&(r.value.teamSeq=null,y.value="",m.value=[])}).catch(p=>{d=p.message}).finally(()=>{l.hide(),d.length>0&&a.add({type:"error",text:d})})}}function T(l){if(r.value.taskId&&l){const d=u.show();let p="";const C={};C.teamSeq=l.teamSeq,Ia(r.value.taskId,C).then(f=>{f&&f.message==="success"&&(r.value.teamSeq=l.teamSeq,y.value=l.teamNm,m.value=l.members)}).catch(f=>{p=f.message}).finally(()=>{d.hide(),p.length>0&&a.add({type:"error",text:p})})}}function n(){if(b.value)M();else{const l=u.show();let d="";_a().then(p=>{_.value=p.data,x()}).catch(p=>{d=p.message}).finally(()=>{l.hide(),d.length>0&&a.add({type:"error",text:d})})}}function t(l){const d=_.value.find(p=>p.teamSeq===l);T(d),x()}return fe(async()=>{if(await de(),r.value.teamSeq){const l=u.show();let d="";ka(r.value.teamSeq).then(p=>{y.value=p.data.teamNm,m.value=p.data.members}).catch(p=>{d=p.message}).finally(()=>{l.hide(),d.length>0&&a.add({type:"error",text:d})})}}),(l,d)=>{const p=ea,C=ba;return w(),P(ee,null,{default:v(()=>[S(b)?(w(),P(qe,{key:0},{default:v(()=>[I(ae,null,{default:v(()=>[I(se,{hover:!1},{default:v(()=>[I(Le,{tag:"h2"},{default:v(()=>[$(" 작업조명 ")]),_:1})]),_:1}),I(se,{hover:!1},{default:v(()=>[I(K,{align:"right"},{default:v(()=>[$(B(S(y)),1)]),_:1})]),_:1}),I(se,{hover:!1},{default:v(()=>[I(Le,{tag:"h2"},{default:v(()=>[$(" 작업자명 ")]),_:1})]),_:1}),(w(!0),G(H,null,re(S(m),(f,o)=>(w(),P(se,{key:o,hover:!1},{default:v(()=>[I(K,{align:"right"},{default:v(()=>[$(B(f.userNm),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})):(w(),P(Xa,{key:1})),I(p,{class:"w-full",disabled:S(c).isTaskMember(),onClick:n},{default:v(()=>[$(B(S(i)),1)]),_:1},8,["disabled"]),I(ha,{modelValue:S(s),"onUpdate:modelValue":d[0]||(d[0]=f=>z(s)?s.value=f:null)},{title:v(()=>[$(" 작업 배정 ")]),default:v(()=>[I(qe,null,{default:v(()=>[(w(!0),G(H,null,re(S(_),f=>(w(),P(se,{key:f.teamSeq,onClick:o=>t(f.teamSeq)},{default:v(()=>[I(ee,{gap:.25},{default:v(()=>[I(K,null,{default:v(()=>[$(B(f.teamNm),1)]),_:2},1024),I(Ae,{justify:"end",align:"baseline"},{default:v(()=>[I(C,{name:"mdi:account-group",size:"20"}),(w(!0),G(H,null,re(f.members,o=>(w(),P(K,{key:o.mbrSeq},{default:v(()=>[$(B(o.userNm),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1})}}}),et=j({__name:"ProcessingTab",emits:["submit"],setup(e,{emit:h}){const r=h,c=pe(),{currentTask:u}=ce(c),a=N(()=>{var o;return(o=u.value)==null?void 0:o.typeCd}),m=V(["장비점검","급수점검","배수점검"]),y=Te.useLoading({color:"#0000ff",loader:"bars",canCancel:!1}),_=Ie(),b=N(()=>a.value==="0001"?ia:a.value==="0002"?da:ca),i=N(()=>a.value==="0001"?[{label:"",name:"수신확인결과코드",type:"json",disabled:!0,defaultValue:'{ "코드" : "미수신" }'},{label:"시험결과",name:"시험결과",type:"radio",options:[{label:"성공",value:!0},{label:"실패",value:!1}]},{label:"상담메모",name:"상담메모",type:"textarea"},{label:"기사메모",name:"기사메모",type:"textarea"},{label:"완료여부",name:"완료여부",type:"radio",options:[{label:"예",value:!0},{label:"아니오",value:!1}]},{label:"미완료사유",name:"미완료사유",type:"select",options:[...Object.keys(F).map(o=>({label:o,value:o}))],disabled:!1},{label:"처리일시",name:"처리일시",type:"date",defaultValue:new Date}]:a.value==="0002"?[{label:"AS 유형",name:"AS유형",type:"select",options:[...Object.keys(oe).map(o=>({label:o,value:o}))],defaultValue:l(oe.반품)},{label:"부품 유형",name:"부품유형",type:"select",options:[...Object.keys(ge).map(o=>({label:o,value:o}))],disabled:!1},{label:"상담메모",name:"상담메모",type:"textarea"},{label:"기사메모",name:"기사메모",type:"textarea"},{label:"완료여부",name:"완료여부",type:"radio",options:[{label:"예",value:!0},{label:"아니오",value:!1}]},{label:"미완료사유",name:"미완료사유",type:"select",options:[...Object.keys(F).map(o=>({label:o,value:o}))],disabled:!1},{label:"처리일시",name:"처리일시",type:"date",defaultValue:new Date}]:[{label:"정기점검종류",name:"정기점검종류",type:"multi-checkbox",options:[...Object.keys(he).map(o=>({label:o,value:m.value.findIndex(k=>k===o)>-1}))]},{label:"상담메모",name:"상담메모",type:"textarea"},{label:"기사메모",name:"기사메모",type:"textarea"},{label:"완료여부",name:"완료여부",type:"radio",options:[{label:"예",value:!0},{label:"아니오",value:!1}]},{label:"미완료사유",name:"미완료사유",type:"select",options:[...Object.keys(F).map(o=>({label:o,value:o}))],disabled:!1},{label:"처리일시",name:"처리일시",type:"date",defaultValue:new Date},{label:"차기예약",name:"차기예약",type:"date",defaultValue:Da(new Date,3)}]),{state:s,schema:x,items:M,handleSubmit:T,getFormItem:n}=Se(b,i,o=>{r("submit",{data:o,key:"process-tab"})});U(s,o=>{console.log("====== watch newState - ",o);const k=n("미완료사유");if(k&&(k.disabled=o.완료여부===!0),s.value.미완료사유=o.완료여부===!0?"":s.value.미완료사유,a.value===R.AS){const A=n("부품유형");A&&(A.disabled=o.AS유형!=="부품교체"),s.value.부품유형=o.AS유형!=="부품교체"?"":s.value.부품유형}},{immediate:!0,deep:!0});async function t(){var k;const o=await xa((k=u.value)==null?void 0:k.iotId);s.value.수신확인결과코드=JSON.stringify(o.data)}function l(o){const k=Object.values(oe).indexOf(o);return Object.keys(oe)[k]}function d(o){const k=Object.values(ge).indexOf(o);return Object.keys(ge)[k]}function p(o){const k=Object.values(F).indexOf(o);return Object.keys(F)[k]}function C(o){const k=Object.values(R).indexOf(o);return Object.keys(R)[k]}function f(o){const k=Object.values(he).indexOf(o);return Object.keys(he)[k]}return fe(async()=>{var o,k,A,O;if(console.log("====== 처리 탭 - ",u.value),((o=u.value)==null?void 0:o.statusCd)===Z.진행중||((k=u.value)==null?void 0:k.statusCd)===Z.보류||((A=u.value)==null?void 0:A.statusCd)===Z.완료){let Y="";const W=y.show();try{const g=(await Sa((O=u.value)==null?void 0:O.taskId)).data;console.log("==== processType.value - ",a.value),a.value===R.AS?(s.value.AS유형=g.asTypeCd?l(g.asTypeCd):"",s.value.부품유형=g.partTypeCd?d(g.partTypeCd):"",s.value.상담메모=g.customerMemo?g.customerMemo:"",s.value.기사메모=g.workerMemo?g.workerMemo:"",s.value.완료여부=g.completedYn,s.value.미완료사유=g.incompletedReasonCd?p(g.incompletedReasonCd):"",s.value.처리일시=g.updateDt):a.value===R.정기점검?(m.value=g.chkTypeCds?g.chkTypeCds.map(J=>f(J)):[],s.value.정기점검종류=g.chkTypeCds?g.chkTypeCds.map(J=>f(J)):[],s.value.상담메모=g.customerMemo?g.customerMemo:"",s.value.기사메모=g.workerMemo?g.workerMemo:"",s.value.완료여부=g.completedYn,s.value.미완료사유=g.incompletedReasonCd?p(g.incompletedReasonCd):"",s.value.처리일시=g.updateDt,s.value.차기예약=g.nextInsDt):a.value===R.설치&&(s.value.시험결과=g.testResultCd,s.value.상담메모=g.customerMemo?g.customerMemo:"",s.value.기사메모=g.workerMemo?g.workerMemo:"",s.value.완료여부=g.completedYn,s.value.미완료사유=g.incompletedReasonCd?p(g.incompletedReasonCd):"",s.value.처리일시=g.updateDt)}catch(q){Y=q.message}finally{W.hide(),Y.length>0&&_.add({type:"error",text:Y})}}}),(o,k)=>(w(),G(H,null,[I(K,{class:"text-gray-300"},{default:v(()=>[$(B(C(S(a)))+"에 대한 처리중입니다. ",1)]),_:1}),I(ae,null,{default:v(()=>[I(ee,null,{default:v(()=>[S(a)==="0001"?(w(),G(H,{key:0},[I(K,null,{default:v(()=>[$("장치 정보")]),_:1}),S(u)?(w(),P(ua,{key:0,modelValue:S(u).iotId,"onUpdate:modelValue":k[0]||(k[0]=A=>S(u).iotId=A),size:"sm",disabled:"",class:"w-full"},null,8,["modelValue"])):Oe("",!0),I(Ae,{justify:"end"},{default:v(()=>[I($a,{size:"sm",onClick:t},{default:v(()=>[$(" 수신확인 ")]),_:1})]),_:1})],64)):Oe("",!0),I(xe,{modelValue:S(s),"onUpdate:modelValue":k[1]||(k[1]=A=>z(s)?s.value=A:null),schema:S(x),items:S(M),onSubmit:S(T)},{submit:v(()=>[$(" 저장 ")]),_:1},8,["modelValue","schema","items","onSubmit"])]),_:1})]),_:1})],64))}}),at=j({__name:"EvidenceTab",emits:["submit"],setup(e,{emit:h}){const r=[{label:"고객확인서",name:"0001",type:"image-upload"},{label:"고객카드",name:"0002",type:"image-upload"},{label:"작업사진1",name:"0004",type:"image-upload"},{label:"작업사진2",name:"0005",type:"image-upload"},{label:"작업사진3",name:"0006",type:"image-upload"},{label:"고객서명",name:"0007",type:"signature",defaultValue:""}],c=[{label:"고객카드",name:"0002",type:"image-upload"},{label:"영수증",name:"0003",type:"image-upload"},{label:"작업사진1",name:"0004",type:"image-upload"},{label:"작업사진2",name:"0005",type:"image-upload"},{label:"작업사진3",name:"0006",type:"image-upload"},{label:"고객서명",name:"0007",type:"signature",defaultValue:""}],u=[{label:"작업사진1",name:"0004",type:"image-upload"},{label:"작업사진2",name:"0005",type:"image-upload"},{label:"작업사진3",name:"0006",type:"image-upload"},{label:"고객서명",name:"0007",type:"signature",defaultValue:""}],a=pe(),{currentTask:m}=ce(a),y=N(()=>{var d;return(d=m.value)==null?void 0:d.typeCd}),_=Te.useLoading({color:"#0000ff",loader:"bars",canCancel:!1}),b=Ie(),i=N(()=>y.value==="0001"?ma:y.value==="0002"?pa:fa),s=N(()=>y.value==="0001"?r:y.value==="0002"?c:u),{state:x,schema:M,items:T,handleSubmit:n}=Se(i,s,async d=>{var o,k,A,O,Y;await de();let p="",C="";const f=_.show();try{const W=[];for(const q of Object.keys(d)){const g=typeof d[q]=="string"&&d[q].startsWith("data:image");if(d[q]&&(typeof d[q]=="object"||g)){const J=g?d[q]:await t(d[q]);if((o=m.value)!=null&&o.taskId&&J){const we={};we.data=J;const Me=await Ca((k=m.value)==null?void 0:k.taskId,we);(A=Me.data)!=null&&A.tempImageId&&W.push({tempImageId:Me.data.tempImageId,imageCd:q})}}}if((O=m.value)!=null&&O.taskId&&W.length>0){const q={};q.images=W;const g=await Aa((Y=m.value)==null?void 0:Y.taskId,q);g.data.message==="success"?C="작업 상세 증빙 이미지를 업로드하였습니다.":p=g.data.message?g.data.message:"처리중에 문제가 발생하였습니다."}}catch(W){p=W.message}finally{f.hide(),p.length>0?b.add({type:"error",text:p}):C.length>0&&b.add({type:"success",text:C})}});function t(d){return new Promise((p,C)=>{const f=new FileReader;f.readAsDataURL(d),f.onload=()=>p(f.result),f.onerror=o=>C(o)})}function l(d){const p=Object.values(R).indexOf(d);return Object.keys(R)[p]}return fe(async()=>{var d,p;if(await de(),(d=m.value)!=null&&d.taskId){const C=_.show();let f="";Na((p=m.value)==null?void 0:p.taskId).then(async o=>{const k=o.data;if(k&&k.length>0)for(const A of k)x.value[A.imageCd]=`${A.imageURL}?date=${new Date().getTime()}`}).catch(o=>{f=o.message}).finally(()=>{C.hide(),f.length>0&&b.add({type:"error",text:f})})}}),(d,p)=>(w(),G(H,null,[I(K,{class:"text-gray-300"},{default:v(()=>[$(B(l(S(y)))+"에 대한 증빙중입니다. ",1)]),_:1}),I(ae,null,{default:v(()=>[I(ee,null,{default:v(()=>[I(xe,{modelValue:S(x),"onUpdate:modelValue":p[0]||(p[0]=C=>z(x)?x.value=C:null),schema:S(M),items:S(T),onSubmit:S(n)},{submit:v(()=>[$(" 저장 ")]),_:1},8,["modelValue","schema","items","onSubmit"])]),_:1})]),_:1})],64))}}),tt=[{label:"기본",key:"basic-tab",component:Ja},{label:"작업조",key:"work-group-tab",component:Za},{label:"처리",key:"process-tab",component:et},{label:"증빙",key:"evidence-tab",component:at}],jt=j({__name:"detail",setup(e){var M;Qe("작업 상세");const h=pe(),{currentTask:r,currentTaskDetail:c}=ce(h),u=Te.useLoading({color:"#0000ff",loader:"bars",canCancel:!1}),a=Ie(),{items:m,activeTab:y}=Ya(tt),{state:_,schema:b,items:i}=Se(va,[{name:"작업_일련번호",label:"작업 일련번호",type:"text",disabled:!0,defaultValue:((M=r.value)==null?void 0:M.taskId)??""},{name:"작업명",label:"작업명",type:"text",placeholder:"작업명을 입력해주세요"}]);U(y,T=>{T&&(T==="basic-tab"?i.value[1].disabled=!1:i.value[1].disabled=!0)});async function s(T){var n,t,l,d,p,C;if(console.log("==== handleSubmit - ",T),console.log("==== handleSubmit - ",r.value),((n=r.value)==null?void 0:n.statusCd)===Z.미배정||((t=r.value)==null?void 0:t.statusCd)===Z.보류||((l=r.value)==null?void 0:l.statusCd)===Z.완료){a.add({type:"info",text:"진행중 단계에서 변경사항을 저장 할 수 있습니다."});return}if(T&&T.key==="process-tab"){const f=x((d=r.value)==null?void 0:d.typeCd,T.data);if(f){let o="",k="";const A=u.show();try{const O=await wa((p=r.value)==null?void 0:p.taskId,f);O.data.message==="success"?k="작업 상세 처리정보를 업데이트 하였습니다.":o=O.data.message?O.data.message:"처리중에 문제가 발생하였습니다."}catch(O){o=O.message}finally{A.hide(),o.length>0?a.add({type:"error",text:o}):k.length>0&&a.add({type:"success",text:k})}}}else if(T&&T.key==="basic-tab"){let f="",o="";const k=u.show();try{const A={};A.taskNm=_.value.작업명,A.barcode=T.data.barcode??"",A.requestDt=ne(T.data.requestDt);const O=await Ma((C=r.value)==null?void 0:C.taskId,A);O.data.message==="success"?(c.value.barcode=A.barcode,c.value.requestDt=A.requestDt,o="작업 상세 정보를 업데이트 하였습니다."):f=O.data.message?O.data.message:"처리중에 문제가 발생하였습니다."}catch(A){f=A.message}finally{k.hide(),f.length>0?a.add({type:"error",text:f}):o.length>0&&a.add({type:"success",text:o})}}}function x(T,n){let t=null;return T==="0001"?(t={},t.testResultCd=n.시험결과,t.customerMemo=n.상담메모,t.workerMemo=n.기사메모,t.completedYn=n.완료여부,t.incompletedReasonCd=F[n.미완료사유],t.updateDt=ne(n.처리일시)):T==="0002"?(t={},t.asTypeCd=oe[n.AS유형],t.partTypeCd=ge[n.부품유형],t.customerMemo=n.상담메모,t.workerMemo=n.기사메모,t.completedYn=n.완료여부,t.incompletedReasonCd=F[n.미완료사유],t.updateDt=ne(n.처리일시)):T==="0003"&&(t={},t.chkTypeCds=n.정기점검종류.map(l=>he[l]),t.customerMemo=n.상담메모,t.workerMemo=n.기사메모,t.completedYn=n.완료여부,t.incompletedReasonCd=F[n.미완료사유],t.updateDt=ne(n.처리일시),t.nextInsDt=ne(n.차기예약)),t}return fe(async()=>{var t;await de();let T="";const n=u.show();Va(((t=r.value)==null?void 0:t.taskId)??"").then(l=>{console.log("====== Task Detail - ",l),l.data&&l.data.facNm&&(_.value.작업명=l.data.taskNm,c.value.barcode=l.data.barcode??"",c.value.companyNm=l.data.companyNm,c.value.facBasAdr=l.data.facBasAdr,c.value.facDtlAdr=l.data.facDtlAdr,c.value.facNm=l.data.facNm,c.value.iotId=l.data.iotId,c.value.modelNm=l.data.modelNm,c.value.repTelNo=l.data.repTelNo??"",c.value.requestDt=l.data.requestDt,c.value.typeCd=l.data.typeCd??"",c.value.statusCd=l.data.statusCd??"",c.value.taskId=l.data.taskId,c.value.taskNm=l.data.taskNm??"",c.value.teamSeq=l.data.teamSeq)}).catch(l=>{T=l.message}).finally(()=>{n.hide(),T.length>0&&a.add({type:"error",text:T})})}),(T,n)=>(w(),P(ee,null,{default:v(()=>[I(ae,null,{default:v(()=>[I(xe,{modelValue:S(_),"onUpdate:modelValue":n[0]||(n[0]=t=>z(_)?_.value=t:null),schema:S(b),items:S(i),"hide-submit":!0},null,8,["modelValue","schema","items"])]),_:1}),I(za,{modelValue:S(y),"onUpdate:modelValue":n[1]||(n[1]=t=>z(y)?y.value=t:null),items:S(m),onSubmit:s},null,8,["modelValue","items"])]),_:1}))}});export{jt as default};
