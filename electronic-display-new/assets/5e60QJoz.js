import{y as o,r as s,aI as v,z as L,k as w,C as x,d6 as y}from"./C320s8D_.js";const T=window.setInterval,{contentStyle:i,isMultifulMarqueeScreen:C}=x(),q=o(()=>i.value&&parseInt(i.value.width)||1820),S=o(()=>i.value&&parseInt(i.value.height)||80),u=s(100),f=s(0),l=s(2),g=s(0),m=s(""),n=v({longTextChecked:!1,shortTextChecked:!1,htmlTextChecked:!0,logoChecked:!0,imageChecked:!0,timeTextChecked:!0,marqueeBackgroundImgChecked:!1,marqueeBackgroundVideoChecked:!1,textBoxBorderChecked:!1}),I=v({htmlText:"",longText:"@@@이것은 실제 전광판에 표시될 긴 텍스트입니다...",shortText:"@@@이것은 실제 전광판에 표시될 짧은 텍스트입니다."}),c=v({backgroundImage:"",backgroundVideo:""}),P=o(()=>{const t="/stcN/electronic-display-new";return Array.from({length:41},(a,r)=>({id:r+1,src:`${t}/${r+1}.gif`,alt:`gif 이미지 ${r+1}`}))}),p=s(Array(5).fill(!1)),N=o(()=>{const t=Number(u.value);return isNaN(t)||t<0?0:t}),B=o(()=>{const a="/stcN/electronic-display-new/testImg.png";if(n.marqueeBackgroundImgChecked)return c.backgroundImage="testImg.png",a;c.backgroundImage=""}),O=o(()=>{const a="/stcN/electronic-display-new/bgv.mp4";if(n.marqueeBackgroundVideoChecked)return c.backgroundVideo="bgv.mp4",a;c.backgroundVideo=""}),R=()=>{const t=()=>{p.value=Array(5).fill(!1),setTimeout(()=>{p.value[l.value-1]=!0},50)},a=()=>{t(),f.value=0},r=()=>{f.value++},h=()=>{I.htmlText=`
      <p class="editor-paragraph" style="color: #ffffff; font-family: 'NanumGothic', '나눔고딕', sans-serif; font-weight: bold; font-size: 48px; margin: 0;">
        <span style="color: #ff0000;">에스티씨네트웍스</span>
        <span style="color: #ffffff;">방문을</span>
        <span style="color: #ffffff;">환영합니다.</span>
        <span style="color: #ffffff;">Welcome to</span>
        <span style="color: #ff0000;">STC Networks</span>
      </p>
    `.replace(/\s+/g," ").trim()},k=e=>{e.speed!==void 0&&(u.value=e.speed),e.numberOfLines!==void 0&&(l.value=e.numberOfLines,a()),e.marqueePadding!==void 0&&(g.value=e.marqueePadding),e.controls&&Object.assign(n,e.controls),y.save({speed:u.value,numberOfLines:l.value,marqueePadding:g.value,controls:n})},b=()=>{const e=y.load();e&&(k(e),e.controls&&Object.assign(n,e.controls))},d=()=>{b(),h(),t(),m.value=new Date().toLocaleString(),T(()=>{m.value=new Date().toLocaleString()},1e3)};return L(C,e=>{e&&(d(),b())}),w(()=>{d()}),{screenWidth:q,screenHeight:S,speed:u,loopCount:f,numberOfLines:l,marqueePadding:g,now:m,controls:n,content:I,backgroundContent:c,isMultifulMarqueeScreen:C,validSpeed:N,backgroundImage:B,backgroundVideo:O,images:P,isPlaying:p,resetPlayState:t,handleLinesChange:a,updateLoopCount:r,initializeHtmlText:h,initialize:d,updateSettings:k}};export{R as u};
