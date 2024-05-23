import{_ as g}from"./chunks/theme.CdWN_p9z.js";import{d as o,r as y,o as e,c as F,w as h,e as k,l as c,n as i,t as u,b as t,g as m,s}from"./chunks/framework.DiKJsiOI.js";const C=o({__name:"query.md.demo.7ba06332",setup(E){const a=y({}),n=[{label:"姓名",prop:"name",component:"NInput",props:{placeholder:"请输入姓名"}},{label:"地址",prop:"address",component:"NInput"},{label:"选择",prop:"select",component:"n-select",props:{options:[{label:"Everybody's Got Something to Hide Except Me and My Monkey",value:"song0",disabled:!0},{label:"Drive My Car",value:"song1"},{label:"Norwegian Wood",value:"song2"},{label:"You Won't See",value:"song3",disabled:!0},{label:"Nowhere Man",value:"song4"},{label:"Think For Yourself",value:"song5"},{label:"The Word",value:"song6"},{label:"Michelle",value:"song7",disabled:!0},{label:"What goes on",value:"song8"},{label:"Girl",value:"song9"},{label:"I'm looking through you",value:"song10"},{label:"In My Life",value:"song11"},{label:"Wait",value:"song12"}],placeholder:"请选择地址"}}];return(_,l)=>{const r=t("n-space");return e(),F(r,{vertical:""},{default:h(()=>[k(c(g),{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=d=>a.value=d),columns:n,onSearch:l[1]||(l[1]=()=>console.log("搜索结果")),onReset:l[2]||(l[2]=()=>console.log("重置"))},null,8,["modelValue"]),i(" "+u(JSON.stringify(a.value)),1)]),_:1})}}}),B=s("h1",{id:"proqueryform",tabindex:"-1"},[i("ProQueryForm "),s("a",{class:"header-anchor",href:"#proqueryform","aria-label":'Permalink to "ProQueryForm"'},"​")],-1),b=s("blockquote",null,[s("p",null,"高级表单用于快速构建表单视图")],-1),v=s("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),f=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ProQueryForm } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '../../../packages/ProForm'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," formData"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({}); "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 初始化为空对象")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," options"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`"Everybody's Got Something to Hide Except Me and My Monkey"`),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song0'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    disabled: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Drive My Car'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song1'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Norwegian Wood'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song2'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`"You Won't See"`),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song3'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    disabled: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Nowhere Man'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song4'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Think For Yourself'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song5'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'The Word'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song6'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Michelle'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song7'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    disabled: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'What goes on'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song8'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Girl'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song9'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`"I'm looking through you"`),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song10'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'In My Life'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song11'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Wait'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song12'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," columns"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'姓名'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'name'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    component: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'NInput'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    props: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      placeholder: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'请输入姓名'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'地址'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'address'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    component: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'NInput'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选择'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'select'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    component: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'n-select'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    props: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      options: options,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      placeholder: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'请选择地址'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-space"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," vertical"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"ProQueryForm")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      v-model"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"formData"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      :"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"columns"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"columns"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      @"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"search"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"console."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'搜索结果'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      @"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"reset"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"console."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'重置'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    />")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    {{ "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"JSON"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"stringify"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(formData) }}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-space"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," scoped"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),N=JSON.parse('{"title":"ProQueryForm","description":"","frontmatter":{},"headers":[],"relativePath":"cn/form/query.md","filePath":"cn/form/query.md"}'),D={name:"cn/form/query.md"},W=Object.assign(D,{setup(E){return(a,p)=>{const n=t("demo");return e(),m("div",null,[B,b,v,k(n,{customClass:"",sourceCode:`<script setup lang="ts">
import { ProQueryForm } from '../../../packages/ProForm';
import { ref } from 'vue'

const formData = ref({}); // 初始化为空对象

const options = [
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: "You Won't See",
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: "I'm looking through you",
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]

const columns = [
  {
    label: '姓名',
    prop: 'name',
    component: 'NInput',
    props: {
      placeholder: '请输入姓名'
    },
  },
  {
    label: '地址',
    prop: 'address',
    component: 'NInput',
  },
  {
    label: '选择',
    prop: 'select',
    component: 'n-select',
    props: {
      options: options,
      placeholder: '请选择地址'
    },
  },
];



<\/script>

<template>
  <n-space vertical>
    <ProQueryForm
      v-model="formData"
      :columns="columns"
      @search="()=>console.log('搜索结果')"
      @reset="()=>console.log('重置')"
    />
    {{ JSON.stringify(formData) }}
  </n-space>
</template>

<style scoped>
</style>
`,options:"{}"},{highlight:h(()=>[f]),default:h(()=>[k(C)]),_:1})])}}});export{N as __pageData,W as default};
