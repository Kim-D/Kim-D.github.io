import{i as J,a as q,u as Q,b as H}from"./Button.a6d1e8d0.js";import{O as B,r as $,L as w,h as i,P as K,Q as I,_ as X,f as Y,R as O,W as m,o as S,c as z,a as Z,T as p,v as N,G as f,b as h,q as V}from"./entry.c4ebd43d.js";import{u as G}from"./index.d7501e1d.js";const _=(e,n)=>{const c=B("form-events",void 0),a=B("form-group",void 0),v=B("form-inputs",void 0),s=$(e==null?void 0:e.id);w(()=>{s.value=(e==null?void 0:e.id)??(a==null?void 0:a.inputId.value),a&&(a.inputId.value=s.value,v&&(v.value[a.name.value]=s))});const r=$(!1);function l(u,g){c&&c.emit({type:u,path:g})}function d(){l("blur",a==null?void 0:a.name.value),r.value=!0}function b(){l("change",a==null?void 0:a.name.value)}const C=G(()=>{r.value&&l("input",a==null?void 0:a.name.value)},300);return{inputId:s,name:i(()=>(e==null?void 0:e.name)??(a==null?void 0:a.name.value)),size:i(()=>{var g;const u=n.size[a==null?void 0:a.size.value]?a==null?void 0:a.size.value:null;return(e==null?void 0:e.size)??u??((g=n==null?void 0:n.default)==null?void 0:g.size)}),color:i(()=>{var u;return(u=a==null?void 0:a.error)!=null&&u.value?"red":e==null?void 0:e.color}),emitFormBlur:d,emitFormInput:C,emitFormChange:b}},o=K(I.ui.strategy,I.ui.input,J),P=Y({components:{UIcon:q},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>o.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(o.size).includes(e)}},color:{type:String,default:()=>o.default.color,validator(e){return[...I.ui.colors,...Object.keys(o.color)].includes(e)}},variant:{type:String,default:()=>o.default.variant,validator(e){return[...Object.keys(o.variant),...Object.values(o.color).flatMap(n=>Object.keys(n))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","blur"],setup(e,{emit:n,slots:c}){const{ui:a,attrs:v}=Q("input",O(e,"ui"),o,O(e,"class")),{emitFormBlur:s,emitFormInput:r,size:l,color:d,inputId:b,name:C}=_(e,o),u=$(null),g=()=>{var t;e.autofocus&&((t=u.value)==null||t.focus())},A=t=>{n("update:modelValue",t.target.value),r()},W=t=>{s(),n("blur",t)};w(()=>{setTimeout(()=>{g()},e.autofocusDelay)});const T=i(()=>{var j,k;const t=((k=(j=a.value.color)==null?void 0:j[d.value])==null?void 0:k[e.variant])||a.value.variant[e.variant];return H(m(a.value.base,a.value.rounded,a.value.placeholder,a.value.size[l.value],e.padded?a.value.padding[l.value]:"p-0",t==null?void 0:t.replaceAll("{color}",d.value),(y.value||c.leading)&&a.value.leading.padding[l.value],(F.value||c.trailing)&&a.value.trailing.padding[l.value]),e.inputClass)}),y=i(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),F=i(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),D=i(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),L=i(()=>e.loading&&!y.value?e.loadingIcon:e.trailingIcon||e.icon),M=i(()=>m(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[l.value])),U=i(()=>m(a.value.icon.base,I.ui.colors.includes(d.value)&&a.value.icon.color.replaceAll("{color}",d.value),a.value.icon.size[l.value],e.loading&&"animate-spin")),E=i(()=>m(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[l.value])),R=i(()=>m(a.value.icon.base,I.ui.colors.includes(d.value)&&a.value.icon.color.replaceAll("{color}",d.value),a.value.icon.size[l.value],e.loading&&!y.value&&"animate-spin"));return{ui:a,attrs:v,name:C,inputId:b,input:u,isLeading:y,isTrailing:F,inputClass:T,leadingIconName:D,leadingIconClass:U,leadingWrapperIconClass:M,trailingIconName:L,trailingIconClass:R,trailingWrapperIconClass:E,onInput:A,onBlur:W}}}),x=["id","name","value","type","required","placeholder","disabled"];function ee(e,n,c,a,v,s){const r=q;return S(),z("div",{class:f(e.ui.wrapper)},[Z("input",p({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled||e.loading,class:["form-input",e.inputClass]},e.attrs,{onInput:n[0]||(n[0]=(...l)=>e.onInput&&e.onInput(...l)),onBlur:n[1]||(n[1]=(...l)=>e.onBlur&&e.onBlur(...l))}),null,16,x),N(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(S(),z("span",{key:0,class:f(e.leadingWrapperIconClass)},[N(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[h(r,{name:e.leadingIconName,class:f(e.leadingIconClass)},null,8,["name","class"])])],2)):V("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(S(),z("span",{key:1,class:f(e.trailingWrapperIconClass)},[N(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[h(r,{name:e.trailingIconName,class:f(e.trailingIconClass)},null,8,["name","class"])])],2)):V("",!0)],2)}const ie=X(P,[["render",ee]]);export{ie as _,_ as u};