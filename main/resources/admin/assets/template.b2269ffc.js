import{u as Q,Q as H,e as L,w as A,b as J,S as K,i as M}from"./index.b1634074.js";import{i as O,j as u,k,p as C,v as e,m as t,$ as n,n as V,y as x,z as S,F as B,l as P,Q as W,s as F,r as E,t as X,w as q,c as T}from"./@vue.0987707a.js";import{_ as Y}from"./UploadImgInput.965f0d9e.js";import{u as j}from"./vue-request.6886b8d7.js";import"./vue-router.0ed66d6f.js";import"./vue-i18n.e3137642.js";import"./@intlify.bed9fa1a.js";import"./source-map.205bdfab.js";import"./vue.5c5bb0aa.js";import"./@arco-design.370b0a2d.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.17358474.js";import"./b-tween.87ffe365.js";import"./dayjs.396bdce9.js";import"./b-validate.ee581f7d.js";import"./number-precision.6dad9ff9.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./@vueuse.d5398ce4.js";import"./pinia.2e07300c.js";import"./vue-demi.b3a9cad9.js";import"./naive-ui.506a45a0.js";import"./date-fns.a06005bd.js";import"./seemly.d0f7d7a4.js";import"./evtd.9eee5233.js";import"./@css-render.6ced7bf3.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./vooks.3f61458b.js";import"./vueuc.5f5811a3.js";import"./vdirs.ab69c576.js";import"./@juggle.32c34d6c.js";import"./lodash-es.33d1f95f.js";import"./date-fns-tz.c3c7eb03.js";import"./axios.b9f958b0.js";/* empty css                    */const Z={class:"flex items-center gap-3"},ee={class:"flex items-center gap-3"},te={__name:"content",setup(f){const l=O("data"),r=Q();let i=H(r);const s=o=>{c(o,a=>{l.value.favicon_ico=a})},b=o=>{c(o,a=>{l.value.logo=a})};function c(o,a){const{fileItem:g}=o,m=new FileReader;m.readAsDataURL(g.file),m.onload=()=>{a(m.result)}}return(o,a)=>{const g=u("a-textarea"),m=u("a-form-item"),v=u("a-divider"),w=u("a-button"),R=u("a-upload");return k(),C(B,null,[e(m,{label:"Head",field:"head"},{default:t(()=>[e(g,{modelValue:n(l).head,"onUpdate:modelValue":a[0]||(a[0]=d=>n(l).head=d),"auto-size":{minRows:5,maxRows:20}},null,8,["modelValue"])]),_:1}),e(m,{label:"Footer",field:"footer"},{default:t(()=>[e(g,{modelValue:n(l).footer,"onUpdate:modelValue":a[1]||(a[1]=d=>n(l).footer=d),"auto-size":{minRows:5,maxRows:20}},null,8,["modelValue"])]),_:1}),e(v),e(m,{label:"favicon.ico",field:"favicon_ico"},{extra:t(()=>[V("div",Z,[e(R,{"custom-request":s,size:"small","show-file-list":!1,accept:"image/*"},{"upload-button":t(()=>[e(w,{type:"outline",size:"mini"},{default:t(()=>[x(S(o.$t("upload")),1)]),_:1})]),_:1}),V("span",{class:"cursor-pointer hover:text-blue-400",onClick:a[3]||(a[3]=(...d)=>n(L)&&n(L)(...d))},S(n(i))+"/favicon.ico",1)])]),default:t(()=>[e(g,{modelValue:n(l).favicon_ico,"onUpdate:modelValue":a[2]||(a[2]=d=>n(l).favicon_ico=d),"auto-size":{minRows:4,maxRows:4}},null,8,["modelValue"])]),_:1}),e(m,{label:"logo",field:"logo"},{extra:t(()=>[V("div",ee,[e(R,{"custom-request":b,size:"small","show-file-list":!1,accept:"image/*"},{"upload-button":t(()=>[e(w,{type:"outline",size:"mini"},{default:t(()=>[x(S(o.$t("upload")),1)]),_:1})]),_:1}),V("span",{class:"cursor-pointer hover:text-blue-400",onClick:a[5]||(a[5]=(...d)=>n(L)&&n(L)(...d))},S(n(i))+"/logo.png",1)])]),default:t(()=>[e(g,{modelValue:n(l).logo,"onUpdate:modelValue":a[4]||(a[4]=d=>n(l).logo=d),"auto-size":{minRows:4,maxRows:4}},null,8,["modelValue"])]),_:1}),e(m,{label:"robots.txt",field:"robots_txt"},{extra:t(()=>[V("span",{class:"cursor-pointer hover:text-blue-400",onClick:a[7]||(a[7]=(...d)=>n(L)&&n(L)(...d))},S(n(i))+"/robots.txt",1)]),default:t(()=>[e(g,{modelValue:n(l).robots_txt,"onUpdate:modelValue":a[6]||(a[6]=d=>n(l).robots_txt=d),"auto-size":{minRows:5,maxRows:20}},null,8,["modelValue"])]),_:1}),e(m,{label:"ads.txt",field:"ads_txt"},{extra:t(()=>[V("span",{class:"cursor-pointer hover:text-blue-400",onClick:a[9]||(a[9]=(...d)=>n(L)&&n(L)(...d))},S(n(i))+"/ads.txt",1)]),default:t(()=>[e(g,{modelValue:n(l).ads_txt,"onUpdate:modelValue":a[8]||(a[8]=d=>n(l).ads_txt=d),"auto-size":{minRows:5,maxRows:20}},null,8,["modelValue"])]),_:1})],64)}}},le={class:"text-gray-300"},ae={__name:"carousel",setup(f){const l=O("data");l.value.carousel||(l.value.carousel=[]);function r(){l.value.carousel.push({image:"",link:"",title:""})}function i(o){l.value.carousel.splice(o,1)}const s=function(o,a,g){return o[a]=o.splice(g,1,o[a])[0],o};function b(o){let a=[];l.value.carousel.length>1&&o!==0&&(a=s(l.value.carousel,o,o-1)),a.length>0&&(l.value.carousel=a)}function c(o){let a=[];l.value.carousel.length>1&&o!==l.value.carousel.length-1&&(a=s(l.value.carousel,o,o+1)),a.length>0&&(l.value.carousel=a)}return(o,a)=>{const g=u("a-switch"),m=u("a-form-item"),v=u("icon-caret-left"),w=u("a-button"),R=u("icon-caret-right"),d=u("a-button-group"),N=u("icon-close-circle"),D=u("a-input"),p=u("a-form"),_=u("a-card"),$=u("a-grid-item"),U=u("icon-plus-circle"),G=u("a-grid");return k(),C(B,null,[e(m,{label:o.$t("enable")},{default:t(()=>[e(g,{type:"round",modelValue:n(l).enable_carousel,"onUpdate:modelValue":a[0]||(a[0]=y=>n(l).enable_carousel=y)},null,8,["modelValue"])]),_:1},8,["label"]),n(l).enable_carousel?(k(),P(G,{key:0,cols:{xs:1,sm:1,md:1,lg:2,xl:3,xxl:4},colGap:12,rowGap:16},{default:t(()=>[(k(!0),C(B,null,W(n(l).carousel,(y,z)=>(k(),P($,null,{default:t(()=>[e(_,{title:"#"+(z+1),size:"small",style:{height:"324px"},"header-style":{padding:"8px"}},{extra:t(()=>[e(d,{size:"small"},{default:t(()=>[e(w,{disabled:z===0,onClick:h=>b(z)},{icon:t(()=>[e(v)]),_:2},1032,["disabled","onClick"]),e(w,{disabled:z===n(l).carousel.length-1,onClick:h=>c(z)},{icon:t(()=>[e(R)]),_:2},1032,["disabled","onClick"])]),_:2},1024),e(w,{onClick:h=>i(z),class:"ml-2",size:"small"},{icon:t(()=>[e(N)]),_:2},1032,["onClick"])]),default:t(()=>[e(p,{model:y,layout:"vertical"},{default:t(()=>[e(m,{field:"image",label:o.$t("image")},{default:t(()=>[e(Y,{modelValue:y.image,"onUpdate:modelValue":h=>y.image=h,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),e(m,{field:"link",label:o.$t("link")},{default:t(()=>[e(D,{modelValue:y.link,"onUpdate:modelValue":h=>y.link=h},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),e(m,{field:"title",label:o.$t("title")},{default:t(()=>[e(D,{modelValue:y.title,"onUpdate:modelValue":h=>y.title=h},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),_:2},1032,["model"])]),_:2},1032,["title"])]),_:2},1024))),256)),e($,null,{default:t(()=>[e(_,{style:{height:"324px","background-color":"var(--color-fill-1)"},class:"h-full w-full flex items-center justify-center cursor-pointer",onClick:r},{default:t(()=>[V("div",le,[e(U,{size:60})])]),_:1})]),_:1})]),_:1})):F("",!0)],64)}}},oe={__name:"menu",setup(f){const l=O("data"),{data:r,loading:i}=j(A),s=E("");function b(c){let o=Number(c);s.value="",o&&o>0&&l.value.menu.select.push(o)}return(c,o)=>{const a=u("a-tree-select"),g=u("a-space"),m=u("a-form-item"),v=u("a-input-number");return k(),C(B,null,[e(m,{label:c.$t("select")},{default:t(()=>[e(g,{direction:"vertical"},{default:t(()=>[e(a,{modelValue:n(l).menu.select,"onUpdate:modelValue":o[0]||(o[0]=w=>n(l).menu.select=w),"allow-search":"","allow-clear":"","allow-create":"",scrollbar:"","tree-checkable":"","tree-check-strictly":"",loading:n(i),data:n(r),fieldNames:{key:"id",title:"name"},style:{width:"320px"},onPressEnter:b,"input-value":s.value,"onUpdate:inputValue":o[1]||(o[1]=w=>s.value=w)},null,8,["modelValue","loading","data","input-value"])]),_:1})]),_:1},8,["label"]),e(m,{label:c.$t("limit")},{default:t(()=>[e(v,{modelValue:n(l).menu.limit,"onUpdate:modelValue":o[2]||(o[2]=w=>n(l).menu.limit=w),min:0,style:{width:"150px"}},null,8,["modelValue"])]),_:1},8,["label"])],64)}}},ne={class:"w-full",style:{"max-width":"360px"}},I={__name:"List",props:{data:Object,showPageOption:Boolean,disableOrder:Boolean},setup(f){const{data:l,loading:r}=j(A);return(i,s)=>{const b=u("a-input-number"),c=u("a-form-item"),o=u("a-option"),a=u("a-select"),g=u("a-tree-select"),m=u("a-switch");return k(),C("div",ne,[e(c,{label:i.$t("limit")},{default:t(()=>[e(b,{modelValue:f.data.limit,"onUpdate:modelValue":s[0]||(s[0]=v=>f.data.limit=v),min:0},null,8,["modelValue"])]),_:1},8,["label"]),f.disableOrder?F("",!0):(k(),P(c,{key:0,label:i.$t("order")},{default:t(()=>[e(a,{modelValue:f.data.order,"onUpdate:modelValue":s[1]||(s[1]=v=>f.data.order=v)},{default:t(()=>[e(o,{value:""},{default:t(()=>[x("none")]),_:1}),e(o,{value:"id desc"},{default:t(()=>[x("id desc")]),_:1}),e(o,{value:"id asc"},{default:t(()=>[x("id asc")]),_:1}),e(o,{value:"views desc"},{default:t(()=>[x("views desc")]),_:1}),e(o,{value:"views asc"},{default:t(()=>[x("views asc")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])),f.showPageOption?(k(),C(B,{key:2},[e(c,{label:i.$t("maxPage")},{default:t(()=>[e(b,{modelValue:f.data.max_page,"onUpdate:modelValue":s[3]||(s[3]=v=>f.data.max_page=v),min:0},null,8,["modelValue"])]),_:1},8,["label"]),e(c,{label:"disable count"},{default:t(()=>[e(m,{type:"round",modelValue:f.data.disable_count,"onUpdate:modelValue":s[4]||(s[4]=v=>f.data.disable_count=v)},null,8,["modelValue"])]),_:1})],64)):(k(),P(c,{key:1,label:i.$t("range")},{default:t(()=>[e(g,{modelValue:f.data.category_ids,"onUpdate:modelValue":s[2]||(s[2]=v=>f.data.category_ids=v),"allow-search":!0,"allow-clear":!0,"tree-checkable":!0,"tree-check-strictly":!0,loading:n(r),data:n(l),fieldNames:{key:"id",title:"name"}},null,8,["modelValue","loading","data"])]),_:1},8,["label"]))])}}};const se={__name:"SelectTags",props:{modelValue:Array},emits:["update:modelValue"],setup(f,{emit:l}){const r=f,{modelValue:i}=X(r),s=E(i.value);q(i,()=>{s.value=i.value}),q(s,p=>{l("update:modelValue",p)});const{data:b,run:c,loading:o}=j(K,{manual:!0}),a=T(()=>{var p;return(p=b.value)==null?void 0:p.map((_,$)=>({value:_.id,label:_.name}))});function g(){s.value&&s.value.length>0&&c(s.value)}const{data:m,run:v,loading:w}=j(M,{manual:!0}),R=T(()=>{var p;return(p=m.value)==null?void 0:p.map((_,$)=>({value:_.id,label:_.name}))}),d=T(()=>{let p={},_=[];for(let $ in R.value){let U=R.value[$];p[U.value]=U}for(let $ in a.value){let U=a.value[$];p[U.value]=U}for(let $ in p)_.push(p[$]);return _});function N(p){let _={page:1,limit:100,order:""};p&&(_.where={field:"name",operator:"like",value:p}),v("tag",_)}g(),N();function D(p,_){_==="source"&&N(p),g()}return(p,_)=>{const $=u("a-input-tag"),U=u("a-transfer"),G=u("a-trigger");return k(),P(G,{position:"rt","auto-fit-position":"","unmount-on-close":!1,trigger:"click","popup-translate":[10,0]},{content:t(()=>[e(U,{data:n(d),modelValue:s.value,"onUpdate:modelValue":_[1]||(_[1]=y=>s.value=y),simple:"","show-search":"",onSearch:D,style:{"background-color":"var(--color-bg-5)"}},null,8,["data","modelValue"])]),default:t(()=>[e($,{modelValue:s.value,"onUpdate:modelValue":_[0]||(_[0]=y=>s.value=y),"unique-value":"","allow-clear":""},null,8,["modelValue"])]),_:1})}}},ue=J(se,[["__scopeId","data-v-c864af2f"]]),ie={class:"w-full",style:{"max-width":"360px"}},de={__name:"tagCloud",setup(f){const l=O("data");return(r,i)=>{const s=u("a-input-number"),b=u("a-form-item"),c=u("a-option"),o=u("a-select");return k(),C("div",ie,[e(b,{label:r.$t("limit")},{default:t(()=>[e(s,{modelValue:n(l).tag_cloud.limit,"onUpdate:modelValue":i[0]||(i[0]=a=>n(l).tag_cloud.limit=a),min:0},null,8,["modelValue"])]),_:1},8,["label"]),e(b,{label:r.$t("order")},{default:t(()=>[e(o,{modelValue:n(l).tag_cloud.order,"onUpdate:modelValue":i[1]||(i[1]=a=>n(l).tag_cloud.order=a)},{default:t(()=>[e(c,{value:""},{default:t(()=>[x("none")]),_:1}),e(c,{value:"id desc"},{default:t(()=>[x("id desc")]),_:1}),e(c,{value:"id asc"},{default:t(()=>[x("id asc")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(b,{label:r.$t("select")},{default:t(()=>[e(ue,{modelValue:n(l).tag_cloud.select,"onUpdate:modelValue":i[2]||(i[2]=a=>n(l).tag_cloud.select=a)},null,8,["modelValue"])]),_:1},8,["label"])])}}},re={class:"p-3"},me={class:"p-3"},ce={class:"p-3"},_e={class:"p-3"},pe={class:"p-3"},fe={class:"p-3"},ge={class:"p-3"},ve={class:"p-3"},Ze={__name:"template",setup(f){const l=O("data");return(r,i)=>{const s=u("a-tab-pane"),b=u("a-tabs");return k(),P(b,{type:"card-gutter","lazy-load":""},{default:t(()=>[e(s,{key:"content",title:r.$t("content")},{default:t(()=>[V("div",re,[e(te)])]),_:1},8,["title"]),e(s,{key:"menu",title:r.$t("menu")},{default:t(()=>[V("div",me,[e(oe)])]),_:1},8,["title"]),e(s,{key:"carousel",title:r.$t("carousel")},{default:t(()=>[V("div",ce,[e(ae)])]),_:1},8,["title"]),e(s,{key:"indexList",title:r.$t("homePageList")},{default:t(()=>[V("div",_e,[e(I,{data:n(l).index_list},null,8,["data"])])]),_:1},8,["title"]),e(s,{key:"globalList",title:r.$t("globalList")},{default:t(()=>[V("div",pe,[e(I,{data:n(l).global_list},null,8,["data"])])]),_:1},8,["title"]),e(s,{key:"categoryPageList",title:r.$t("categoryPageList")},{default:t(()=>[V("div",fe,[e(I,{data:n(l).category_page_list,showPageOption:!0},null,8,["data"])])]),_:1},8,["title"]),e(s,{key:"tagPageList",title:r.$t("tagPageList")},{default:t(()=>[V("div",ge,[e(I,{data:n(l).tag_page_list,showPageOption:!0,disableOrder:!0},null,8,["data"])])]),_:1},8,["title"]),e(s,{key:"tagCloud",title:r.$t("tagCloud")},{default:t(()=>[V("div",ve,[e(de)])]),_:1},8,["title"])]),_:1})}}};export{Ze as default};
