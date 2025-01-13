import{f as W,r as x,y as O,z as U,k as B,E as A,o as a,c as o,A as p,h as e,x as y,a as s,V as z,_ as S,d4 as R,F as L,v as V,b as h,w as T,t as E,q as j,b3 as N,cT as P,B as X,s as D,C as G,D as J,e as K,d5 as Q}from"./BIKIuSea.js";import{u as Y}from"./CaB3Y8mO.js";import{_ as Z}from"./DRsBg3KS.js";const ee=["src"],te=["src"],se=W({__name:"CustomMarquee",props:{speed:{default:100},play:{type:Boolean,default:!1},backgroundImage:{default:void 0},backgroundVideo:{default:void 0},lineIndex:{default:0},totalLines:{default:1},containerWidth:{default:800},containerHeight:{default:200}},emits:["text-start","text-end"],setup(M,{emit:t}){const n=M,u=t,l=x(null),c=x(null),i=x(0),_=x(!1),d=x(0),f=x(!1),v=x(!1),C=O(()=>({width:`${n.containerWidth*n.totalLines}px`,maxWidth:"none",top:0,left:`${-n.lineIndex*n.containerWidth}px`})),k=()=>{if(!n.play||!l.value||!c.value)return;i.value-=n.speed/60;const r=l.value.offsetWidth,$=c.value.offsetWidth;if(-i.value>=0&&!f.value&&(u("text-start"),f.value=!0),-i.value>=$){u("text-end"),i.value=r,f.value=!1,v.value=!1,k();return}d.value=window.requestAnimationFrame(k)};return U(()=>n.play,r=>{var $;r?(_.value=!0,i.value=(($=l.value)==null?void 0:$.offsetWidth)??0,k()):d.value&&(cancelAnimationFrame(d.value),_.value=!1)},{immediate:!0}),B(()=>{var r;n.play&&(i.value=((r=l.value)==null?void 0:r.offsetWidth)??0,k())}),A(()=>{window.cancelAnimationFrame(d.value)}),(r,$)=>(a(),o("div",{ref_key:"container",ref:l,class:"custom-marquee"},[r.backgroundImage?(a(),o("img",{key:0,src:r.backgroundImage,class:"marquee-background",style:p(e(C)),alt:"마퀴 배경 이미지"},null,12,ee)):y("",!0),r.backgroundVideo?(a(),o("video",{key:1,src:r.backgroundVideo,autoplay:"",muted:"",loop:"",class:"marquee-background",style:p(e(C)),alt:"마퀴 배경 비디오"},null,12,te)):y("",!0),s("div",{ref_key:"content",ref:c,class:"marquee-content",style:p({transform:`translateX(${e(i)}px)`,transition:e(_)?"none":"transform 0.3s ease"})},[z(r.$slots,"default",{},void 0,!0)],4)],512))}}),ne=Object.assign(S(se,[["__scopeId","data-v-dc5be462"]]),{__name:"UICustomMarquee"}),F=R("/stcN.png"),ae={key:0},oe={key:1},le={key:2,class:"time-display"},re=["innerHTML"],ie={key:4,src:F,alt:"샘플 이미지",style:{height:"2em"}},ce={key:5,class:"image-container"},ue=["src","alt"],de=W({__name:"MultifulMarqueeScreen",setup(M){const t=Y(),{screenWidth:n,screenHeight:u,speed:l,numberOfLines:c,marqueePadding:i,now:_,controls:d,content:f,isPlaying:v,backgroundImage:C,backgroundVideo:k,images:r}=t,$=m=>({opacity:v.value[m-1]?1:0,border:d.textBoxBorderChecked?"1px solid red":"none"}),g=m=>{m===c.value?v.value[m-2]=!0:m===1?(t.updateLoopCount(),v.value[c.value-1]||(v.value[c.value-1]=!0)):v.value[m-2]=!0},q=m=>{v.value[m-1]=!1,m===c.value&&setTimeout(()=>{v.value[c.value-1]=!0},50)};return(m,H)=>{const I=ne;return a(),o("div",{class:"screen",style:p({width:`${e(n)}px`,height:`${e(u)}px`})},[(a(!0),o(L,null,V(e(c),b=>(a(),o("div",{key:b,class:"marquee-line",style:p({height:`${100/e(c)}%`,padding:`${e(i)}px`})},[h(I,{speed:e(l),play:e(v)[b-1],"background-image":e(C),"background-video":e(k),"line-index":b-1,"total-lines":e(c),"container-width":e(n),"container-height":e(u),onTextStart:w=>g(b),onTextEnd:w=>q(b)},{default:T(()=>[s("div",{class:"text-content",style:p($(b))},[e(d).longTextChecked?(a(),o("p",ae,E(e(f).longText),1)):y("",!0),e(d).shortTextChecked?(a(),o("p",oe,E(e(f).shortText),1)):y("",!0),e(d).timeTextChecked?(a(),o("p",le,E(e(_)),1)):y("",!0),e(d).htmlTextChecked?(a(),o("p",{key:3,innerHTML:e(f).htmlText},null,8,re)):y("",!0),e(d).imageChecked?(a(),o("img",ie)):y("",!0),e(d).imageChecked?(a(),o("div",ce,[(a(!0),o(L,null,V(e(r),w=>(a(),o("img",{key:w.id,src:w.src,alt:w.alt,class:"sample-image"},null,8,ue))),128))])):y("",!0)],4)]),_:2},1032,["speed","play","background-image","background-video","line-index","total-lines","container-width","container-height","onTextStart","onTextEnd"])],4))),128))],4)}}}),_e=Object.assign(S(de,[["__scopeId","data-v-b0bfec5e"]]),{__name:"MultifulMarqueeScreen"}),fe={key:0,class:"image-container"},me=["src"],pe={key:1,class:"video-container"},ve=["src","type"],ge=["innerHTML"],he=["innerHTML"],ye=W({__name:"TheScreenOut",setup(M){const{currentUrl:t,currentFile:n,contentStyle:u,animationClass:l,isMultifulMarqueeScreen:c}=G(),{currentText:i,textBoxStyle:_,calculateMarqueeProps:d}=J(),f=x(!0);U(i,g=>{console.log("currentText changed:",g)});const v=O(()=>u.value?{width:u.value.width,height:u.value.height}:{}),C=()=>{f.value=!1},k=g=>{console.error("Media load error:",g),f.value=!1};U(()=>t.value,()=>{f.value=!0});const r=x(900),$=O(()=>i.value?d({style:i.value.textBoxStyle,containerWidth:r.value}):{});return B(()=>{const g=document.querySelector(".screen-out");g&&(r.value=g.clientWidth);const q=new ResizeObserver(m=>{});g&&q.observe(g),A(()=>{q.disconnect()})}),(g,q)=>{var I,b;const m=_e,H=Z;return a(),o("div",{ref:"container",class:"screen-out",style:p(e(v))},[s("div",{class:D(["content-wrapper",e(l)])},[e(c)?(a(),j(m,{key:0})):(a(),o(L,{key:1},[e(n)?(a(),o(L,{key:0},[(I=e(n).type)!=null&&I.startsWith("image")?(a(),o("div",fe,[N((a(),o("img",{key:e(t),src:e(t),style:p(e(u)),alt:"선택된 이미지",onLoad:C,onError:k},null,44,me)),[[P,!e(f)]])])):(b=e(n).type)!=null&&b.startsWith("video")?(a(),o("div",pe,[N((a(),o("video",{key:e(t),style:p(e(u)),autoplay:"",muted:"",loop:"",onLoadeddata:C,onError:k},[s("source",{src:e(t),type:e(n).type},null,8,ve)],36)),[[P,!e(f)]])])):y("",!0)],64)):y("",!0),e(i)?(a(),o("div",{key:1,class:"text-container",style:p({justifyContent:e(_).alignItems})},[e(_).scrollEffect==="marquee"?(a(),j(H,X({key:0},e($),{class:"marquee-wrapper",style:{...e(_),color:"white"}}),{default:T(()=>[s("div",{class:"text-content",style:p({padding:`${e(_).padding}px 0px`}),innerHTML:e(i).textMessage},null,12,ge)]),_:1},16,["style"])):(a(),o("div",{key:1,class:"text-wrapper",style:p({...e(_),justifyContent:e(_).justifyContent})},[s("div",{class:"text-content",style:p({padding:`${e(_).padding}px 0px`}),innerHTML:e(i).textMessage},null,12,he)],4))],4)):y("",!0)],64))],2)],4)}}}),xe=Object.assign(S(ye,[["__scopeId","data-v-14f737a5"]]),{__name:"UITheScreenOut"}),ke={},$e={class:"header"},be={class:"nav-container"},Te={class:"left-section"};function Me(M,t){const n=K;return a(),o("header",$e,[s("nav",be,[s("div",Te,[t[7]||(t[7]=s("img",{src:F,alt:"Logo",class:"logo-img"},null,-1)),t[8]||(t[8]=s("span",{class:"logo-text"},"전광판 표출 시스템",-1)),h(n,{to:"/",class:"nav-link",title:"표출관리"},{default:T(()=>t[0]||(t[0]=[s("i",{class:"fas fa-tv"},null,-1),s("span",{class:"nav-text"},"표출관리",-1)])),_:1}),h(n,{to:"/customEdit",class:"nav-link",title:"문안생성"},{default:T(()=>t[1]||(t[1]=[s("i",{class:"fas fa-edit"},null,-1),s("span",{class:"nav-text"},"문안생성",-1)])),_:1}),h(n,{to:"/systemControl",class:"nav-link",title:"시스템관리"},{default:T(()=>t[2]||(t[2]=[s("i",{class:"fas fa-cogs"},null,-1),s("span",{class:"nav-text"},"시스템관리",-1)])),_:1}),h(n,{to:"/help",class:"nav-link",title:"도움말"},{default:T(()=>t[3]||(t[3]=[s("i",{class:"fas fa-question-circle"},null,-1),s("span",{class:"nav-text"},"도움말",-1)])),_:1}),h(n,{to:"/test",class:"nav-link",title:"테스트"},{default:T(()=>t[4]||(t[4]=[s("i",{class:"fas fa-cog"},null,-1),s("span",{class:"nav-text"},"테스트",-1)])),_:1}),h(n,{to:"/test2",class:"nav-link",title:"테스트2"},{default:T(()=>t[5]||(t[5]=[s("i",{class:"fas fa-cog"},null,-1),s("span",{class:"nav-text"},"테스트2",-1)])),_:1}),h(n,{to:"/test3",class:"nav-link",title:"테스트3"},{default:T(()=>t[6]||(t[6]=[s("i",{class:"fas fa-cog"},null,-1),s("span",{class:"nav-text"},"테스트3",-1)])),_:1})])])])}const Ce=Object.assign(S(ke,[["render",Me],["__scopeId","data-v-2abd4b1a"]]),{__name:"UITheHeader"}),Se=()=>Q("color-mode").value,qe={class:"footer"},we={class:"footer-container"},Ie={class:"footer-content"},Le=["title"],We=W({__name:"TheFooter",setup(M){const t=Se(),n=x(!1);return B(()=>{n.value=t.value==="dark"}),(u,l)=>(a(),o("footer",qe,[s("div",we,[s("div",Ie,[l[1]||(l[1]=s("img",{src:F,alt:"Logo",class:"footer-logo"},null,-1)),l[2]||(l[2]=s("div",{class:"footer-text"},[s("p",{class:"copyright"},"© 2024 stcN. All rights reserved."),s("p",{class:"version"},"Version 1.0.0")],-1)),s("button",{class:"theme-toggle",title:e(t).value==="dark"?"라이트 모드로 전환":"다크 모드로 전환",onClick:l[0]||(l[0]=c=>e(t).preference=e(t).value==="dark"?"light":"dark")},[s("i",{class:D(e(t).value==="dark"?"fas fa-sun":"fas fa-moon")},null,2)],8,Le)])])]))}}),Ee=Object.assign(S(We,[["__scopeId","data-v-befe4121"]]),{__name:"UITheFooter"}),Oe={},Ue={class:"layout"},Be={class:"content-display-area"},Fe={class:"control-area"},He={class:"main-content"};function Ve(M,t){const n=xe,u=Ce,l=Ee;return a(),o("div",Ue,[s("div",Be,[h(n)]),s("div",Fe,[h(u),s("div",He,[z(M.$slots,"default",{},void 0,!0)]),h(l)])])}const Ae=S(Oe,[["render",Ve],["__scopeId","data-v-6f67de38"]]);export{Ae as default};
