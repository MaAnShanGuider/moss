import{i as S,r as F,j as t,k as s,p as u,v as a,m as o,F as w,Q as G,l as p,u as I,$ as r,q as k,n,z as c,s as l,y as g,H as $}from"./@vue.0987707a.js";import{u as v}from"./vue-request.6886b8d7.js";import{b as E,u as H,R as M,T as O,U as P,V as Q,e as z}from"./index.b1634074.js";import"./vue-router.0ed66d6f.js";import"./vue-i18n.e3137642.js";import"./@intlify.bed9fa1a.js";import"./source-map.205bdfab.js";import"./vue.5c5bb0aa.js";import"./@arco-design.370b0a2d.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.17358474.js";import"./b-tween.87ffe365.js";import"./dayjs.396bdce9.js";import"./b-validate.ee581f7d.js";import"./number-precision.6dad9ff9.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./@vueuse.d5398ce4.js";import"./pinia.2e07300c.js";import"./vue-demi.b3a9cad9.js";import"./naive-ui.506a45a0.js";import"./date-fns.a06005bd.js";import"./seemly.d0f7d7a4.js";import"./evtd.9eee5233.js";import"./@css-render.6ced7bf3.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./vooks.3f61458b.js";import"./vueuc.5f5811a3.js";import"./vdirs.ab69c576.js";import"./@juggle.32c34d6c.js";import"./lodash-es.33d1f95f.js";import"./date-fns-tz.c3c7eb03.js";import"./axios.b9f958b0.js";/* empty css                    */const U={class:"flex place-items-center"},A={key:0,class:"w-full h-full"},J=["src","alt"],K={key:1,class:"w-full h-full grid justify-items-center items-center"},W={class:"opacity-20 text-gray-500"},X={class:"absolute text-white",style:{top:"3px",right:"-40px"}},Y={__name:"theme",setup(Z){const d=S("data"),_=H(),h=F([]),{run:C}=v(M,{manual:!0}),{run:R}=v(O,{manual:!0,onSuccess:()=>{C()}});return v(Q,{onSuccess:m=>{h.value=m;for(let i=0;i<m.length;i++)v(P,{defaultParams:[m[i].id],onSuccess:(y,b)=>{h.value[i].screenshot=y}})}}),S("useSaveSuccess").value.push(()=>{R()}),(m,i)=>{const y=t("a-badge"),b=t("a-spin"),V=t("icon-image-close"),B=t("icon-check-circle"),L=t("a-tag"),f=t("a-descriptions-item"),N=t("a-descriptions"),j=t("a-card"),T=t("a-grid-item"),q=t("a-grid"),D=t("a-divider");return s(),u(w,null,[a(q,{rowGap:20,colGap:14,cols:{xs:1,sm:2,md:3,lg:4},class:"w-full mb-4"},{default:o(()=>[(s(!0),u(w,null,G(h.value,e=>(s(),p(T,null,{default:o(()=>[a(j,{class:I(["h-full cursor-pointer",{current:e.id===r(d).current}]),size:"mini",style:k([{"border-width":"2px"},{borderColor:e.id===r(d).current?r(_).color:""}]),onClick:x=>r(d).current=e.id},{header:o(()=>[n("div",U,[n("div",null,c(e.name?e.name:e.id),1),a(y,{value:e.version,class:"ml-2",color:r(_).dark?"#5d6a77":"#b7bfce"},null,8,["value","color"])])]),cover:o(()=>[n("div",{class:"overflow-hidden image",style:k({backgroundColor:r(_).dark?"#282c34":""})},[e.has_screenshot?(s(),u("div",A,[a(b,{loading:!e.screenshot,class:"w-full h-full",size:32},{default:o(()=>[e.screenshot?(s(),u("img",{key:0,class:"w-full h-full p-1",src:e.screenshot,alt:e.name},null,8,J)):l("",!0)]),_:2},1032,["loading"])])):(s(),u("div",K,[n("span",W,[a(V,{size:120})])]))],4),e.id===r(d).current?(s(),u("div",{key:0,class:"absolute right-0 top-0 z-5 check",style:k({borderRightColor:r(_).color})},[n("span",X,[a(B,{size:20})])],4)):l("",!0)]),default:o(()=>[a(N,{column:1,size:"mini","value-style":{paddingRight:"0"}},{title:o(()=>[n("b",null,c(e.name),1),e.version?(s(),p(L,{key:0,size:"mini",class:"ml-2",color:"arcoblue",style:{"border-radius":"30px"}},{default:o(()=>[g(c(e.version),1)]),_:2},1024)):l("",!0)]),default:o(()=>[e.author?(s(),p(f,{key:0,label:"author"},{default:o(()=>[g(c(e.author),1)]),_:2},1024)):l("",!0),e.homepage?(s(),p(f,{key:1,label:"homepage"},{default:o(()=>[n("span",{onClick:i[0]||(i[0]=$((...x)=>r(z)&&r(z)(...x),["stop"])),class:"hover:underline"},c(e.homepage),1)]),_:2},1024)):l("",!0),e.license?(s(),p(f,{key:2,label:"license"},{default:o(()=>[g(c(e.license),1)]),_:2},1024)):l("",!0),e.description?(s(),p(f,{key:3,label:"description"},{default:o(()=>[g(c(e.description),1)]),_:2},1024)):l("",!0)]),_:2},1024)]),_:2},1032,["class","style","onClick"])]),_:2},1024))),256))]),_:1}),a(D)],64)}}},De=E(Y,[["__scopeId","data-v-60049bf3"]]);export{De as default};
