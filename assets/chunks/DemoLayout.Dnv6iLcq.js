import{Icon as p}from"./theme.FAAQSNR9.js";import{defineComponent as h,ref as b,resolveComponent as i,openBlock as y,createElementBlock as _,createVNode as l,withCtx as n,createTextVNode as o,h as k}from"./framework.5osBTiNr.js";const m={class:"h-[50vh]"},g=h({__name:"DemoLayout",setup(f){function e(r){return()=>k(p,{icon:r})}const u=[{label:"且听风吟",key:"hear-the-wind-sing",icon:e("ion:chevron-up-outline")},{label:"1973年的弹珠玩具",key:"pinball-1973",icon:e("ion:chevron-up-outline"),disabled:!0,children:[{label:"鼠",key:"rat"}]},{label:"寻羊冒险记",key:"a-wild-sheep-chase",disabled:!0,icon:e("ion:chevron-up-outline")},{label:"舞，舞，舞",key:"dance-dance-dance",icon:e("ion:chevron-up-outline"),children:[{type:"group",label:"人物",key:"people",children:[{label:"叙事者",key:"narrator",icon:e("ion:chevron-up-outline")},{label:"羊男",key:"sheep-man"}]},{label:"饮品",key:"beverage",icon:e("ion:chevron-up-outline"),children:[{label:"威士忌",key:"whisky"}]},{label:"食物",key:"food",children:[{label:"三明治",key:"sandwich"}]},{label:"过去增多，未来减少",key:"the-past-increases-the-future-recedes"}]}],a=b(!0);return(r,c)=>{const t=i("n-button"),s=i("ProLayout");return y(),_("div",m,[l(s,{menus:u,collapsed:a.value,"onUpdate:collapsed":c[0]||(c[0]=d=>a.value=d)},{actions:n(()=>[l(t,null,{default:n(()=>[o("功能1")]),_:1}),l(t,null,{default:n(()=>[o("功能2")]),_:1}),l(t,null,{default:n(()=>[o("功能3")]),_:1})]),footer:n(()=>[o(" © 2024 Your Company. All rights reserved. ")]),default:n(()=>[o(" 我是内容 ")]),_:1},8,["collapsed"])])}}});export{g as default};