import{ab as b,ac as g,ad as x,n as M,D as Q}from"./entry.bf64b599.js";import{b as k,c as i}from"./index.6949dd38.js";const _=new WeakMap;function z(u,p,f={}){const{mode:m="replace",route:a=b(),router:t=g(),transform:y=r=>r}=f;_.has(t)||_.set(t,new Map);const s=_.get(t);let e=a.params[u];k(()=>{e=void 0});let n;const l=x((r,c)=>(n=c,{get(){return r(),y(e!==void 0?e:i(p))},set(o){e!==o&&(e=o,s.set(u,o),c(),M(()=>{if(s.size===0)return;const q=Object.fromEntries(s.entries());s.clear();const{params:h,query:d,hash:w}=a;t[i(m)]({params:{...h,...q},query:d,hash:w})}))}}));return Q(()=>a.params[u],r=>{e=r,n()},{flush:"sync"}),l}const R=new WeakMap;function D(u,p,f={}){const{mode:m="replace",route:a=b(),router:t=g(),transform:y=r=>r}=f;R.has(t)||R.set(t,new Map);const s=R.get(t);let e=a.query[u];k(()=>{e=void 0});let n;const l=x((r,c)=>(n=c,{get(){return r(),y(e!==void 0?e:i(p))},set(o){e!==o&&(e=o,s.set(u,o),c(),M(()=>{if(s.size===0)return;const q=Object.fromEntries(s.entries());s.clear();const{params:h,query:d,hash:w}=a;t[i(m)]({params:h,query:{...d,...q},hash:w})}))}}));return Q(()=>a.query[u],r=>{e=r,n()},{flush:"sync"}),l}export{D as a,z as u};
