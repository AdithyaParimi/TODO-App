import{d as F,r as _,o as u,c,a as s,n as k,w as j,b as p,v as f,e as C,t as $,f as E,F as S,g as L,u as d,h as I,i as z,j as q,k as Y,l as B,m as D,p as T,q as g,s as N,x as H,y as R,z as G,A as J,B as K,C as W,D as Q}from"./vendor.9a395f97.js";const X=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const v of r.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&o(v)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}};X();const Z=F("tasks",{state:()=>({tasks:[{id:0,assignedTo:1,isCompleted:!1,message:"Make Bulma great again",dueDate:new Date("07-05-2021"),isOwned:2},{id:1,assignedTo:2,isCompleted:!0,message:"Add some more features",dueDate:new Date("07-26-2021"),isOwned:2},{id:2,assignedTo:3,isCompleted:!1,message:"Make a github account",dueDate:new Date("08-23-2021"),isOwned:3},{id:3,assignedTo:2,isCompleted:!0,message:"Learn how to use github",dueDate:new Date("09-10-2021"),isOwned:3},{id:4,assignedTo:3,isCompleted:!1,message:"add a .gitignore file",dueDate:new Date("07-10-2022"),isOwned:1}]}),actions:{close(i){this.tasks.splice(i,1)},createTasks(i,e,a,o,t,r=!1){this.tasks.push({id:i,isCompleted:r,message:e,dueDate:new Date(a),isOwned:t,assignedTo:o})}}}),x=[{firstName:"Adithya",lastName:"Parimi",handle:"Adhi",password:"password",email:"parimia@newpaltz.edu",pic:"https://randomuser.me/api/portraits/men/1.jpg",id:1},{firstName:"Sasi",lastName:"Maddineni",handle:"sasi",password:"password",email:"maddinenis2@newpaltz.com",pic:"https://randomuser.me/api/portraits/men/2.jpg",id:2},{firstName:"Ramu",lastName:"Malemapati",handle:"ram",password:"password",email:"malempar2@newpaltz.edu",pic:"https://randomuser.me/api/portraits/women/3.jpg",id:3}];var V=Object.freeze(Object.defineProperty({__proto__:null,list:x},Symbol.toStringTag,{value:"Module"}));const ss={class:"section"},es={class:"container"},as={class:"columns"},ts=I('<div class="column is-3"><div class="card"><header class="card-header"><p class="card-header-title"> Component </p><button class="card-header-icon" aria-label="more options"><span class="icon"><i class="fas fa-angle-down" aria-hidden="true"></i></span></button></header><div class="card-content"><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div></div><footer class="card-footer"><a href="#" class="card-footer-item">Save</a><a href="#" class="card-footer-item">Edit</a><a href="#" class="card-footer-item">Delete</a></footer></div></div>',1),ns={class:"column"},is={class:"panel"},os={class:"tabs is-boxed"},ls=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-clipboard-list","aria-hidden":"true"})]),s("span",null,"Current")],-1),rs=[ls],ds=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar-times","aria-hidden":"true"})]),s("span",null,"Completed")],-1),us=[ds],cs=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar-day","aria-hidden":"true"})]),s("span",null,"Upcoming")],-1),ps=[cs],ms=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar","aria-hidden":"true"})]),s("span",null,"All")],-1),_s=[ms],hs={class:"panel-block"},vs=["onSubmit"],fs={class:"control has-icons-left"},gs=s("span",{class:"icon is-left"},[s("i",{class:"fas fa-calendar-plus","aria-hidden":"true"})],-1),bs=s("option",{disabled:"",selected:""},"Assign to",-1),ws=["value"],$s=s("button",{type:"submit",class:"button"},"Create",-1),ys={class:"column is-three-quarter"},Cs=["onUpdate:modelValue","disabled"],Ns=s("br",null,null,-1),ks={key:0,class:"select column is-one-quarter"},xs=["onUpdate:modelValue"],Ts=["value"],Ss={key:1,class:"column is-one-quarter"},Ds=I('<div class="column is-3"><h1 class="title">Table of contents</h1><h2 class="subtitle">Intra-page navigation</h2><aside class="menu"><p class="menu-label"> General </p><ul class="menu-list"><li><a>Dashboard</a></li><li><a>Customers</a></li></ul><p class="menu-label"> Administration </p><ul class="menu-list"><li><a>Team Settings</a></li><li><a class="is-active">Manage Your Team</a><ul><li><a>Members</a></li><li><a>Plugins</a></li><li><a>Add a member</a></li></ul></li><li><a>Invitations</a></li><li><a>Cloud Storage Environment Settings</a></li><li><a>Authentication</a></li></ul><p class="menu-label"> Transactions </p><ul class="menu-list"><li><a>Payments</a></li><li><a>Transfers</a></li><li><a>Balance</a></li></ul></aside></div>',1),Us={setup(i){const e=_("All"),a=Z(),o=_(),t=_(),r=_();function v(b){a.createTasks(Math.max(...a.tasks.map(l=>l.id))+1,o.value,t.value,r.value,m.user.id),console.log(o)}return(b,l)=>(u(),c("div",ss,[s("div",es,[s("div",as,[ts,s("div",ns,[s("article",is,[s("div",os,[s("ul",null,[s("li",{class:k(["is-current",{"is-active":e.value=="Current"}]),onClick:l[0]||(l[0]=n=>e.value="Current")},rs,2),s("li",{class:k(["is-completed",{"is-active":e.value=="Completed"}]),onClick:l[1]||(l[1]=n=>e.value="Completed")},us,2),s("li",{class:k(["is-upcoming",{"is-active":e.value=="Upcoming"}]),onClick:l[2]||(l[2]=n=>e.value="Upcoming")},ps,2),s("li",{class:k(["is-all",{"is-active":e.value=="All"}]),onClick:l[3]||(l[3]=n=>e.value="All")},_s,2)])]),s("div",hs,[s("form",{onSubmit:j(v,["prevent"])},[s("p",fs,[p(s("input",{class:"input is-primary",type:"text",placeholder:"New Task","onUpdate:modelValue":l[4]||(l[4]=n=>o.value=n)},null,512),[[f,o.value]]),C(" "+$(o.value)+" ",1),gs]),s("div",null,[p(s("input",{type:"date",class:"input","onUpdate:modelValue":l[5]||(l[5]=n=>t.value=n)},null,512),[[f,t.value]]),p(s("select",{"onUpdate:modelValue":l[6]||(l[6]=n=>r.value=n)},[bs,(u(!0),c(S,null,L(d(V).list,n=>(u(),c("option",{value:n.id},$(n.handle),9,ws))),256))],512),[[E,r.value]]),$s])],40,vs)]),(u(!0),c(S,null,L(d(a).tasks,(n,h)=>{var M,O,P;return p((u(),c("a",{class:k(["panel-block columns",{"text-dec-line-through":n.isCompleted==!0}])},[s("div",ys,[p(s("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":w=>n.isCompleted=w,disabled:n.assignedTo!=((M=d(m).user)==null?void 0:M.id)},null,8,Cs),[[q,n.isCompleted]]),Ns,C(" "+$(d(Y)(String(n.dueDate)).format("MMM-DD-YYYY")),1)]),n.isOwned==((O=d(m).user)==null?void 0:O.id)?(u(),c("div",ks,[p(s("select",{"onUpdate:modelValue":w=>n.assignedTo=w,class:"select"},[(u(!0),c(S,null,L(d(V).list,w=>(u(),c("option",{value:w.id},$(w.handle),9,Ts))),256))],8,xs),[[E,n.assignedTo]])])):B("",!0),n.isOwned!=((P=d(m).user)==null?void 0:P.id)?(u(),c("div",Ss,$(d(V).list.find(w=>w.id===n.assignedTo).handle),1)):B("",!0)],2)),[[z,(e.value=="All"||e.value=="Upcoming"||e.value=="Current"&&!n.isCompleted||e.value=="Completed"&&n.isCompleted)&&(n.isOwned==d(m).user.id||n.assignedTo==d(m).user.id)]])}),256))])]),Ds])])]))}},Ls={class:"section"},Vs=s("h1",{class:"title"},"Login",-1),As=s("label",{for:"username"},"User Name",-1),Ms=s("label",{for:"password"},"Password",-1),Os=s("span",{class:"icon"},[s("i",{class:"fa fa-sign-in"})],-1),Ps=s("span",null,"Login",-1),Es=[Os,Ps],Bs=C(" \xA0 "),Is=s("span",{class:"icon"},[s("i",{class:"fa fa-sign-in"})],-1),Fs=s("span",null,"Signup",-1),js=D({setup(i){const e=_(),a=_();function o(){te(e.value,a.value)}return(t,r)=>{const v=T("router-link");return u(),c("div",Ls,[Vs,s("div",null,[As,p(s("input",{id:"username",class:"input",placeholder:"User Name ","onUpdate:modelValue":r[0]||(r[0]=b=>e.value=b)},null,512),[[f,e.value]])]),s("div",null,[Ms,p(s("input",{id:"password",class:"input",placeholder:"Password","onUpdate:modelValue":r[1]||(r[1]=b=>a.value=b)},null,512),[[f,a.value]])]),s("button",{class:"button is-primary my-5",onClick:o},Es),Bs,g(v,{class:"button is-warning my-5",to:"/signup"},{default:N(()=>[Is,Fs]),_:1})])}}}),zs={class:"section"},qs=s("h1",{class:"title"},"Signup",-1),Ys=s("label",{for:"firstName"},"First Name",-1),Hs=s("label",{for:"lastName"},"Last Name",-1),Rs=s("label",{for:"username"},"User Name",-1),Gs=s("label",{for:"email"},"Email",-1),Js=s("label",{for:"password"},"Password",-1),Ks=s("span",{class:"icon"},[s("i",{class:"fa fa-sign-in"})],-1),Ws=s("span",null,"Signup",-1),Qs=[Ks,Ws],Xs=C(" \xA0 "),Zs=s("span",{class:"icon"},[s("i",{class:"fa fa-sign-in"})],-1),se=s("span",null,"Login",-1),ee=D({setup(i){const e=_(),a=_(),o=_(),t=_(),r=_();function v(){const b={firstName:e.value,lastName:a.value,handle:o.value,password:t.value,email:r.value,id:0,pic:""};ne(b)}return(b,l)=>{const n=T("router-link");return u(),c("div",zs,[qs,s("div",null,[Ys,p(s("input",{id:"firstName",class:"input",placeholder:"First Name","onUpdate:modelValue":l[0]||(l[0]=h=>e.value=h)},null,512),[[f,e.value]])]),s("div",null,[Hs,p(s("input",{id:"lastName",class:"input",placeholder:"Last Name","onUpdate:modelValue":l[1]||(l[1]=h=>a.value=h)},null,512),[[f,a.value]])]),s("div",null,[Rs,p(s("input",{id:"username",class:"input",placeholder:"User Name ","onUpdate:modelValue":l[2]||(l[2]=h=>o.value=h)},null,512),[[f,o.value]])]),s("div",null,[Gs,p(s("input",{id:"email",class:"input",placeholder:"email","onUpdate:modelValue":l[3]||(l[3]=h=>r.value=h)},null,512),[[f,r.value]])]),s("div",null,[Js,p(s("input",{id:"password",class:"input",placeholder:"Password","onUpdate:modelValue":l[4]||(l[4]=h=>t.value=h)},null,512),[[f,t.value]])]),s("button",{class:"button is-primary my-5",onClick:v},Qs),Xs,g(n,{class:"button is-warning my-5",to:"/login"},{default:N(()=>[Zs,se]),_:1})])}}}),ae=[{path:"/home",component:Us},{path:"/signup",component:ee},{path:"/login",component:js}],y=H({history:R(),routes:ae,linkActiveClass:"is-active"});y.beforeEach((i,e)=>{["/home"].includes(i.path)?m.user||y.push("/login"):["/login","/signup"].includes(i.path)&&m.user&&y.push("/home")});const U=G({user:null});async function te(i,e){const a=x.find(o=>o.handle===i);if(!a)throw{message:"User not found"};if(a.password!==e)throw{message:"Incorrect password"};U.user=a,y.push("/home")}async function ne(i){const e=Math.max(...x.map(a=>a.id))+1;x.push({email:i.email,firstName:i.firstName,lastName:i.lastName,password:i.password,handle:i.handle,id:e,pic:""}),U.user=x.find(a=>a.id==e)||null,y.push("/home")}function ie(){U.user=null,y.push("/login")}var m=U;var oe=(i,e)=>{const a=i.__vccOpts||i;for(const[o,t]of e)a[o]=t;return a};const A=i=>(J("data-v-01d4ffbc"),i=i(),K(),i),le={key:0,class:"buttons"},re=A(()=>s("strong",null,"Sign up",-1)),de=C(" Log in "),ue={key:1,class:"buttons"},ce={class:"avatar"},pe=["src"],me=C(),_e=A(()=>s("br",null,null,-1)),he=A(()=>s("strong",null,"Log out",-1)),ve=[he],fe=D({setup(i){return(e,a)=>{const o=T("router-link");return d(m).user?(u(),c("div",ue,[s("div",ce,[s("img",{src:d(m).user.pic},null,8,pe),s("div",null,[s("strong",null,$(d(m).user.firstName)+" "+$(d(m).user.lastName),1),me,_e,s("i",null,$(d(m).user.email),1)])]),s("a",{class:"button is-primary",onClick:a[0]||(a[0]=t=>d(ie)())},ve)])):(u(),c("div",le,[g(o,{class:"button is-primary",to:"/signup"},{default:N(()=>[re]),_:1}),g(o,{class:"button is-light",to:"/login"},{default:N(()=>[de]),_:1})]))}}});var ge=oe(fe,[["__scopeId","data-v-01d4ffbc"]]);const be={class:"navbar is-primary"},we={class:"navbar-brand"},$e=s("img",{src:"https://bulma.io/images/bulma-logo-white.png",alt:"Bulma: a modern CSS framework based on Flexbox",width:"112",height:"28"},null,-1),ye=s("div",{class:"navbar-burger","data-target":"navbarExampleTransparentExample"},[s("span"),s("span"),s("span")],-1),Ce={id:"navbarExampleTransparentExample",class:"navbar-menu"},Ne={class:"navbar-start"},ke=C(" Home "),xe={class:"navbar-end"},Te={class:"navbar-item"},Se=D({setup(i){return(e,a)=>{const o=T("router-link");return u(),c("nav",be,[s("div",we,[g(o,{class:"navbar-item",to:"/"},{default:N(()=>[$e]),_:1}),ye]),s("div",Ce,[s("div",Ne,[g(o,{class:"navbar-item",to:"/home"},{default:N(()=>[ke]),_:1})]),s("div",xe,[s("div",Te,[g(ge)])])])])}}}),De={class:"container"},Ue={setup(i){return(e,a)=>{const o=T("router-view");return u(),c(S,null,[g(Se),s("div",De,[g(o)])],64)}}};W(Ue).use(y).use(Q()).mount("#app");
