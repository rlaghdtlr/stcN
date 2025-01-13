import{O as B,f as T,Z as q,a5 as Z,$ as G,d0 as H,Q as J,a6 as K,R as W,aU as X,y as U,o,c as u,a as _,b as I,w as d,h as s,d1 as ee,q as p,ac as F,s as r,B as ae,d2 as se,V as N,d as A,t as M,aY as ie,x as v,Y as re}from"./BIKIuSea.js";const oe={slots:{root:"relative flex items-start",base:"shrink-0 flex items-center justify-center rounded-[var(--ui-radius)] text-[var(--ui-bg)] ring ring-inset ring-[var(--ui-border-accented)] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",container:"flex items-center",wrapper:"ms-2",icon:"shrink-0 size-full",label:"block font-medium text-[var(--ui-text)]",description:"text-[var(--ui-text-muted)]"},variants:{color:{primary:"focus-visible:outline-[var(--ui-primary)]",secondary:"focus-visible:outline-[var(--ui-secondary)]",success:"focus-visible:outline-[var(--ui-success)]",info:"focus-visible:outline-[var(--ui-info)]",warning:"focus-visible:outline-[var(--ui-warning)]",error:"focus-visible:outline-[var(--ui-error)]",neutral:"focus-visible:outline-[var(--ui-border-inverted)]"},size:{xs:{base:"size-3",container:"h-4",wrapper:"text-xs"},sm:{base:"size-3.5",container:"h-4",wrapper:"text-xs"},md:{base:"size-4",container:"h-5",wrapper:"text-sm"},lg:{base:"size-4.5",container:"h-5",wrapper:"text-sm"},xl:{base:"size-5",container:"h-6",wrapper:"text-base"}},required:{true:{label:"after:content-['*'] after:ms-0.5 after:text-[var(--ui-error)]"}},disabled:{true:{base:"cursor-not-allowed opacity-75",label:"cursor-not-allowed opacity-75",description:"cursor-not-allowed opacity-75"}},checked:{true:""}},compoundVariants:[{color:"primary",checked:!0,class:"ring-2 ring-[var(--ui-primary)] bg-[var(--ui-primary)]"},{color:"secondary",checked:!0,class:"ring-2 ring-[var(--ui-secondary)] bg-[var(--ui-secondary)]"},{color:"success",checked:!0,class:"ring-2 ring-[var(--ui-success)] bg-[var(--ui-success)]"},{color:"info",checked:!0,class:"ring-2 ring-[var(--ui-info)] bg-[var(--ui-info)]"},{color:"warning",checked:!0,class:"ring-2 ring-[var(--ui-warning)] bg-[var(--ui-warning)]"},{color:"error",checked:!0,class:"ring-2 ring-[var(--ui-error)] bg-[var(--ui-error)]"},{color:"neutral",checked:!0,class:"ring-2 ring-[var(--ui-border-inverted)] bg-[var(--ui-bg-inverted)]"}],defaultVariants:{size:"md",color:"primary"}},ne=re;var P;const te=B({extend:B(oe),...((P=ne.ui)==null?void 0:P.checkbox)||{}}),le=T({__name:"Checkbox",props:q({label:{},description:{},color:{},size:{},icon:{},indeterminate:{type:Boolean},indeterminateIcon:{},defaultValue:{type:Boolean},class:{},ui:{},disabled:{type:Boolean},required:{type:Boolean},name:{},value:{},id:{}},{modelValue:{type:Boolean,default:void 0},modelModifiers:{}}),emits:q(["update:modelValue","change"],["update:modelValue"]),setup(m,{emit:S}){const a=m,n=Z(),$=S,c=G(m,"modelValue"),j=H(J(a,"required","value")),b=K(),{id:E,emitFormChange:O,emitFormInput:Y,size:D,color:L,name:Q,disabled:f}=W(a),g=E.value??X(),h=U({get(){return a.indeterminate?"indeterminate":c.value},set(e){c.value=e==="indeterminate"?void 0:e}}),i=U(()=>te({size:D.value,color:L.value,required:a.required,disabled:f.value,checked:(c.value??a.defaultValue)||a.indeterminate}));function R(e){const t=new Event("change",{target:{value:e}});$("change",t),O(),Y()}return(e,t)=>{var k,y,w,x,V,z;return o(),u("div",{class:r(i.value.root({class:[a.class,(k=a.ui)==null?void 0:k.root]}))},[_("div",{class:r(i.value.container({class:(y=a.ui)==null?void 0:y.container}))},[I(s(se),ae({id:s(g),checked:h.value,"onUpdate:checked":t[0]||(t[0]=l=>h.value=l),"default-checked":e.defaultValue},s(j),{name:s(Q),disabled:s(f),class:i.value.base({class:(w=a.ui)==null?void 0:w.base}),"onUpdate:checked":R}),{default:d(()=>[I(s(ee),{"as-child":""},{default:d(()=>{var l,C;return[e.indeterminate?(o(),p(F,{key:0,name:e.indeterminateIcon||s(b).ui.icons.minus,class:r(i.value.icon({class:(l=a.ui)==null?void 0:l.icon}))},null,8,["name","class"])):(o(),p(F,{key:1,name:e.icon||s(b).ui.icons.check,class:r(i.value.icon({class:(C=a.ui)==null?void 0:C.icon}))},null,8,["name","class"]))]}),_:1})]),_:1},16,["id","checked","default-checked","name","disabled","class"])],2),e.label||n.label||e.description||n.description?(o(),u("div",{key:0,class:r(i.value.wrapper({class:(x=a.ui)==null?void 0:x.wrapper}))},[e.label||n.label?(o(),p(s(ie),{key:0,for:s(g),class:r(i.value.label({class:(V=a.ui)==null?void 0:V.label}))},{default:d(()=>[N(e.$slots,"label",{label:e.label},()=>[A(M(e.label),1)])]),_:3},8,["for","class"])):v("",!0),e.description||n.description?(o(),u("p",{key:1,class:r(i.value.description({class:(z=a.ui)==null?void 0:z.description}))},[N(e.$slots,"description",{description:e.description},()=>[A(M(e.description),1)])],2)):v("",!0)],2)):v("",!0)],2)}}}),ue=Object.assign(le,{__name:"UCheckbox"});export{ue as _};
