import{r as t}from"./api.882d370b.js";function n(){return t({endpoint:"/task-teams"})}function o(e){return t({endpoint:`/task-teams/${e}`})}function i(e){return t({method:"POST",endpoint:"/task-teams",payload:e})}function m(e,a){return t({method:"POST",endpoint:`/task-teams/${e}`,payload:a})}function r(e){return t({method:"POST",endpoint:`/task-teams/${e}/delete`})}function T(e){return t({endpoint:`/task-teams/members?userNm=${e}`})}export{T as a,i as b,m as c,o as d,r as e,n as f};
