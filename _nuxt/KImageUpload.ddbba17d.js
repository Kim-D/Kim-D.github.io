import z from"./Icon.54269085.js";import{h as f,k as r,f as B,C as F,r as g,D as x,o as p,c as m,a as n,S as I,b as K,d as S,t as k,q as U,p as D,e as T,n as j,_ as H}from"./entry.bf64b599.js";function $(s){return f(()=>{const c={};for(const o in s){const i=s[o],u=r(i);typeof u=="number"?c[o]=`${u}px`:c[o]=u}return c})}const q=s=>(D("data-v-506004a5"),s=s(),T(),s),A={class:"file-input-wrapper"},E={class:"w-full h-full min-h-12 flex gap-2"},L={key:0,class:"flex justify-center items-center"},M={key:1,class:"flex justify-center items-center"},P={class:"flex text-gray-400 items-center gap-1"},G={class:"d-btn"},J={key:0},O=q(()=>n("span",{class:"text-gray-400"}," 파일명: ",-1)),Q=B({__name:"KImageUpload",props:{modelValue:{},maxHeight:{default:80},maxFileSize:{default:1024*1024*3}},emits:["change","error","update:modelValue"],setup(s,{emit:c}){const o=s,i=c,{maxHeight:u,maxFileSize:y}=F(o),h=g(null),_=g(null),t=g(null),w=f(()=>t.value?"파일 변경":"파일 첨부"),V=f(()=>t.value?t.value.length>20?t.value.slice(0,20).concat("..."):t.value:""),v=$({maxHeight:u});x(t,async e=>{if(e){const l=h.value;if(!l)return;const d=await b(l.files[0]),a=_.value;if(!a)return;a.src=d}});const R=f(()=>!!t.value||typeof o.modelValue=="string");async function b(e){return new Promise((l,d)=>{const a=new FileReader;a.readAsDataURL(e),a.onload=()=>l(a.result),a.onerror=N=>d(N)})}function C(e){if(e.length){if(e[0].size>y.value){i("error",`파일 사이즈가 ${y.value/1024/1024}MB보다 큽니다.`);return}t.value=e[0].name,i("update:modelValue",e[0]),i("change",e[0])}}return x(()=>o.modelValue,async e=>{await j(),e&&typeof e=="string"&&(_.value.src=e)}),(e,l)=>{const d=z;return p(),m("div",A,[n("div",E,[n("div",{class:"image-wrapper",style:I(r(v))},[r(R)?(p(),m("div",L,[n("img",{id:"uploaded-image",ref_key:"uploadedImageRef",ref:_,style:I(r(v)),src:"",alt:""},null,4)])):(p(),m("div",M,[n("div",P,[K(d,{name:"ic:round-note-add",size:"20"}),S(" 이미지를 업로드해주세요 ")])]))],4),n("label",G,[S(k(r(w))+" ",1),n("input",{ref_key:"imageInputRef",ref:h,type:"file",class:"hidden",accept:"image/*",onChange:l[0]||(l[0]=a=>C(a.target.files))},null,544)])]),r(t)?(p(),m("div",J,[n("div",null,[O,n("span",null,k(r(V)),1)])])):U("",!0)])}}});const Y=H(Q,[["__scopeId","data-v-506004a5"]]);export{Y as K};
