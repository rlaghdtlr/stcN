import{b7 as v,b8 as p,b9 as b,f as d,ba as m}from"./BpJ2rQFs.js";function h(t={}){const{inheritAttrs:r=!0}=t,s=v(),l=d({setup(i,{slots:a}){return()=>{s.value=a.default}}}),u=d({inheritAttrs:r,setup(i,{attrs:a,slots:o}){return()=>{var e;s.value;const n=(e=s.value)==null?void 0:e.call(s,{..._(a),$slots:o});return r&&(n==null?void 0:n.length)===1?n[0]:n}}});return p({define:l,reuse:u},[l,u])}function _(t){const r={};for(const s in t)r[m(s)]=t[s];return r}const c=new Map;function w(t){const r=b();function s(o){var e;const n=c.get(t)||new Set;n.add(o),c.set(t,n);const f=()=>u(o);return(e=r==null?void 0:r.cleanups)==null||e.push(f),f}function l(o){function e(...n){u(e),o(...n)}return s(e)}function u(o){const e=c.get(t);e&&(e.delete(o),e.size||i())}function i(){c.delete(t)}function a(o,e){var n;(n=c.get(t))==null||n.forEach(f=>f(o,e))}return{on:s,once:l,off:u,emit:a,reset:i}}export{h as c,w as u};
