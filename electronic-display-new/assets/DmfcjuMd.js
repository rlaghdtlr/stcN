import{O as g,f as v,a5 as b,o as r,q as C,w as l,c as d,s as c,h as t,V as n,x as i,a4 as k,Y as $,b as h,_ as w}from"./QjpoZjjf.js";const x={slots:{root:"bg-[var(--ui-bg)] ring ring-[var(--ui-border)] divide-y divide-[var(--ui-border)] rounded-[calc(var(--ui-radius)*2)] shadow-sm",header:"p-4 sm:px-6",body:"p-4 sm:p-6",footer:"p-4 sm:px-6"}},B=$;var y;const O=g({extend:g(x),...((y=B.ui)==null?void 0:y.card)||{}}),S=v({__name:"Card",props:{as:{},class:{},ui:{}},setup(u){const s=u,e=b(),o=O();return(a,j)=>{var p;return r(),C(t(k),{as:a.as,class:c(t(o).root({class:[s.class,(p=s.ui)==null?void 0:p.root]}))},{default:l(()=>{var _,f,m;return[e.header?(r(),d("div",{key:0,class:c(t(o).header({class:(_=s.ui)==null?void 0:_.header}))},[n(a.$slots,"header")],2)):i("",!0),e.default?(r(),d("div",{key:1,class:c(t(o).body({class:(f=s.ui)==null?void 0:f.body}))},[n(a.$slots,"default")],2)):i("",!0),e.footer?(r(),d("div",{key:2,class:c(t(o).footer({class:(m=s.ui)==null?void 0:m.footer}))},[n(a.$slots,"footer")],2)):i("",!0)]}),_:3},8,["as","class"])}}}),V=Object.assign(S,{__name:"UCard"}),N={class:"split-layout"},U=v({__name:"split",setup(u){const s={root:"h-full transition-colors duration-300 bg-gray-50 dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg shadow-sm",body:"h-full"};return(e,o)=>{const a=V;return r(),d("div",N,[h(a,{class:"left-section",ui:s},{default:l(()=>[n(e.$slots,"left",{},void 0,!0)]),_:3}),h(a,{class:"right-section",ui:s},{default:l(()=>[n(e.$slots,"right",{},void 0,!0)]),_:3})])}}}),z=w(U,[["__scopeId","data-v-4e0aef58"]]);export{z as default};
