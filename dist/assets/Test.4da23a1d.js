import{a as e}from"./index.59ead915.js";import{d as a,r as t,a as l,o as s,c as o,h as u,q as d,j as n,t as r,L as m}from"./vendor.a8dd9754.js";var p=a({expose:[],setup(a){t(.1);const p=t(""),v=t(0),f=t(0),b=()=>{v.value+=1};return e.get("https://127.0.0.1:4242/login").then((e=>{console.log(e.data)})),(e,a)=>{const t=l("el-tab-pane"),c=l("el-tabs");return s(),o(m,null,[u(c,{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=e=>p.value=e),onTabClick:b},{default:d((()=>[u(t,{key:1,label:"test1",name:"test1"},{default:d((()=>[n(r(v.value),1)])),_:1}),u(t,{key:2,label:"test2",name:"test2"},{default:d((()=>[n(r(f.value),1)])),_:1})])),_:1},8,["modelValue"])],1024)}}});export default p;