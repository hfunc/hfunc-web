import{r as e,x as t,y as s,z as a,A as r,B as i,C as o}from"./vendor.a8dd9754.js";const u=Symbol();function n(){const i=e(!1),o=t(),n=()=>o.matched.filter((e=>{if(e.meta.title)return!0})).map((e=>({path:e.path,title:e.meta.title}))),l=e(n()),f=()=>{l.value=n()},m={visible:s(i),setVisible:e=>{e&&f(),i.value=e},routes:l,refresh:f,push:e=>{l.value.push(e)}};return a(u,m),r((()=>{f()})),m}function l(){const e=i(u);if(o((()=>{null==e||e.setVisible(!1)})),!e)throw new Error("useBookListInject must be used after useBookListProvide");return e}export{l as a,n as u};