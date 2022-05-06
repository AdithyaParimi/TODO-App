var W=Object.defineProperty;var j=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var H=(a,t,n)=>t in a?W(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,z=(a,t)=>{for(var n in t||(t={}))R.call(t,n)&&H(a,n,t[n]);if(j)for(var n of j(t))J.call(t,n)&&H(a,n,t[n]);return a};import{d as B,r as _,o as c,c as u,a as s,w as L,b as h,v as k,e as D,F as $,f as T,g as Y,t as v,n as P,h as E,u as f,i as O,j as C,k as A,l as b,m as N,p as w,q as K,s as G,x as Q,y as X,z as Z,A as ss,B as es}from"./vendor.21e12da0.js";const ts=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}};ts();const F=B("tasks",{state:()=>({tasks:[],currentTasks:[],completedTasks:[],session:U()}),actions:{async completedTasks(){const a=await this.session.api("tasks/completed");this.completedTasks=a},async currentTasks(){const a=await this.session.api("tasks/current");this.currentTasks=a},async currentUserTasks(){const a=await this.session.api("tasks/currentUserTasks");this.tasks=a},close(a){this.tasks.splice(a,1)},async addNewTask(a,t,n,i,o=!1){return await this.session.api("tasks",{completed:o,message:a,dueDate:new Date(t),createdBy:i,assignedTo:n})}}}),ns={class:"section"},os={class:"container"},as={class:"columns"},is={class:"column"},ls={class:"panel"},cs={class:"panel-block"},us=["onSubmit"],rs={class:"control has-icons-left"},ds=s("span",{class:"icon is-left"},[s("i",{class:"fas fa-calendar-plus","aria-hidden":"true"})],-1),ps=s("option",{disabled:"",selected:""},"Assign to",-1),_s=["value"],ms=s("button",{type:"submit",class:"button"},"Create",-1),hs=Y('<a class="panel-block columns title is-4"><div class="column is-two-quarter"><span class="Heading">Task Title</span></div><div class="column is-one-quarter"> Due Date </div><div class="column is-one-quarter"> Assigned To </div></a>',1),vs={class:"column is-two-quarter"},gs=["onUpdate:modelValue","disabled"],fs={class:"column is-one-quarter"},ks={key:0,class:"select column is-one-quarter"},bs=["v-model"],$s=["value"],ys={key:1,class:"column is-one-quarter"},Ts={setup(a){const t=U();_("All");const n=F(),i=_([]);n.currentUserTasks().then(()=>{i.value=n.tasks});const o=_(),l=_(),d=_(),m=_([]);t.getUsers().then(y=>{m.value=t.users});function g(){n.addNewTask(o.value,l.value,d.value,t.user._id).then(()=>{n.currentUserTasks().then(()=>{i.value=n.tasks})})}return(y,r)=>(c(),u("div",ns,[s("div",os,[s("div",as,[s("div",is,[s("article",ls,[s("div",cs,[s("form",{onSubmit:L(g,["prevent"])},[s("p",rs,[h(s("input",{class:"input is-primary",type:"text",placeholder:"New Task","onUpdate:modelValue":r[0]||(r[0]=e=>o.value=e)},null,512),[[k,o.value]]),ds]),s("div",null,[h(s("input",{type:"date",class:"input","onUpdate:modelValue":r[1]||(r[1]=e=>l.value=e)},null,512),[[k,l.value]]),h(s("select",{"onUpdate:modelValue":r[2]||(r[2]=e=>d.value=e)},[ps,(c(!0),u($,null,T(m.value,e=>(c(),u("option",{key:e._id,value:e._id},v(e.handle),9,_s))),128))],512),[[D,d.value]]),ms])],40,us)]),hs,(c(!0),u($,null,T(i.value,e=>{var S,x,V;return c(),u("div",{class:P(["panel-block columns",{"text-dec-line-through":e.completed==!0}]),key:e.message},[s("div",vs,[h(s("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":p=>e.completed=p,disabled:e.assignedTo!=((S=f(t).user)==null?void 0:S.id)},null,8,gs),[[E,e.completed]]),s("span",null,v(e.message),1)]),s("div",fs,v(f(O)(String(e.dueDate)).format("MMM-DD-YYYY")),1),e.createdBy==((x=f(t).user)==null?void 0:x._id)?(c(),u("div",ks,[s("select",{"v-model":e.assignedTo,class:"select"},[(c(!0),u($,null,T(m.value,p=>(c(),u("option",{key:p._id,value:e.assignedTo},v(p.handle),9,$s))),128))],8,bs)])):(c(),u("div",ys,v((V=m.value.find(p=>p._id===e.assignedTo))==null?void 0:V.handle),1))],2)}),128))])])])])]))}},ws={id:"main"},Us=["onSubmit"],Ss=s("h1",null,"Login",-1),xs=s("label",{for:"username"},"User Name",-1),Vs=s("label",{for:"password"},"Password",-1),Ns=s("input",{type:"submit",class:"btn btn-primary"},null,-1),qs=w(" \xA0 "),Ds=s("span",{class:"icon"},[s("i",{class:"fa fa-sign-in"})],-1),As=s("span",null,"Signup",-1),Ls=C({setup(a){const t=U(),n=_(),i=_();function o(){t.Login(n.value,i.value)}return(l,d)=>{const m=A("router-link");return c(),u("div",ws,[s("form",{onSubmit:L(o,["prevent"])},[Ss,s("div",null,[xs,h(s("input",{id:"username",class:"input form-control",placeholder:"User Name ","onUpdate:modelValue":d[0]||(d[0]=g=>n.value=g)},null,512),[[k,n.value]])]),s("div",null,[Vs,h(s("input",{id:"password",class:"input form-control",placeholder:"Password",type:"password","onUpdate:modelValue":d[1]||(d[1]=g=>i.value=g)},null,512),[[k,i.value]])]),Ns],40,Us),qs,b(m,{class:"button is-warning my-5",to:"/signup"},{default:N(()=>[Ds,As]),_:1})])}}}),Cs={class:"section"},Ms=s("h1",{class:"title"},"Signup",-1),Bs=s("label",{for:"Name"},"Name",-1),Ys=s("label",{for:"username"},"User Name",-1),Ps=s("label",{for:"email"},"Email",-1),Es=s("label",{for:"password"},"Password",-1),Os=s("span",{class:"icon"},[s("i",{class:"fa fa-sign-in"})],-1),Fs=s("span",null,"Signup",-1),Is=[Os,Fs],js=w(" \xA0 "),Hs=s("span",{class:"icon"},[s("i",{class:"fa fa-sign-in"})],-1),zs=s("span",null,"Login",-1),Ws=C({setup(a){const t=U(),n=_(),i=_(),o=_(),l=_();function d(){const m={name:n.value,handle:i.value,password:o.value,email:l.value,id:0,pic:""};t.Signup(m)}return(m,g)=>{const y=A("router-link");return c(),u("div",Cs,[Ms,s("div",null,[Bs,h(s("input",{id:"name",class:"input",placeholder:"Name","onUpdate:modelValue":g[0]||(g[0]=r=>n.value=r)},null,512),[[k,n.value]])]),s("div",null,[Ys,h(s("input",{id:"username",class:"input",placeholder:"User Name ","onUpdate:modelValue":g[1]||(g[1]=r=>i.value=r)},null,512),[[k,i.value]])]),s("div",null,[Ps,h(s("input",{id:"email",class:"input",placeholder:"email","onUpdate:modelValue":g[2]||(g[2]=r=>l.value=r)},null,512),[[k,l.value]])]),s("div",null,[Es,h(s("input",{id:"password",class:"input",placeholder:"Password","onUpdate:modelValue":g[3]||(g[3]=r=>o.value=r)},null,512),[[k,o.value]])]),s("button",{class:"button is-primary my-5",onClick:d},Is),js,b(y,{class:"button is-warning my-5",to:"/login"},{default:N(()=>[Hs,zs]),_:1})])}}}),Rs={class:"section"},Js={class:"container"},Ks={class:"columns"},Gs={class:"column"},Qs={class:"panel"},Xs={class:"panel-block"},Zs=["onSubmit"],se={class:"control has-icons-left"},ee=s("span",{class:"icon is-left"},[s("i",{class:"fas fa-calendar-plus","aria-hidden":"true"})],-1),te=s("option",{disabled:"",selected:""},"Assign to",-1),ne=s("button",{type:"submit",class:"button"},"Create",-1),oe=Y('<a class="panel-block columns title is-4"><div class="column is-two-quarter"><span class="Heading">Task Title</span></div><div class="column is-one-quarter"> Due Date </div><div class="column is-one-quarter"> Assigned To </div></a>',1),ae={class:"column is-two-quarter"},ie=["onUpdate:modelValue","disabled"],le={class:"column is-one-quarter"},ce={key:0,class:"select column is-one-quarter"},ue=["onUpdate:modelValue"],re=["value"],de={key:1,class:"column is-one-quarter"},pe={setup(a){const t=U();_("All");const n=F(),i=_([]);n.currentTasks().then(y=>{i.value=n.currentTasks});const o=_([]);t.getUsers().then(y=>{o.value=t.users});const l=_(),d=_(),m=_();function g(){tasksService.addNewTask(l.value,d.value,m.value,t.user._id).then(()=>{tasksService.currentUserTasks().then(()=>{allTasks.value=tasksService.tasks})})}return(y,r)=>(c(),u("div",Rs,[s("div",Js,[s("div",Ks,[s("div",Gs,[s("article",Qs,[s("div",Xs,[s("form",{onSubmit:L(g,["prevent"])},[s("p",se,[h(s("input",{class:"input is-primary",type:"text",placeholder:"New Task","onUpdate:modelValue":r[0]||(r[0]=e=>l.value=e)},null,512),[[k,l.value]]),w(" "+v(l.value)+" ",1),ee]),s("div",null,[h(s("input",{type:"date",class:"input","onUpdate:modelValue":r[1]||(r[1]=e=>d.value=e)},null,512),[[k,d.value]]),h(s("select",{"onUpdate:modelValue":r[2]||(r[2]=e=>m.value=e)},[te,(c(!0),u($,null,T(o.value,e=>(c(),u("option",{key:e._id},v(e.handle),1))),128))],512),[[D,m.value]]),ne])],40,Zs)]),oe,(c(!0),u($,null,T(i.value,e=>{var S,x,V;return c(),u("div",{class:P(["panel-block columns",{"text-dec-line-through":e.completed==!0}]),key:e.message},[s("div",ae,[h(s("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":p=>e.completed=p,disabled:e.assignedTo!=((S=f(t).user)==null?void 0:S.id)},null,8,ie),[[E,e.completed]]),s("span",null,v(e.message),1)]),s("div",le,v(f(O)(String(e.dueDate)).format("MMM-DD-YYYY")),1),e.createdBy==((x=f(t).user)==null?void 0:x._id)?(c(),u("div",ce,[h(s("select",{"onUpdate:modelValue":p=>e.assignedTo=p,class:"select"},[(c(!0),u($,null,T(o.value,p=>(c(),u("option",{value:p._id},v(p.handle),9,re))),256))],8,ue),[[D,e.assignedTo]])])):(c(),u("div",de,v((V=o.value.find(p=>p._id===e.assignedTo))==null?void 0:V.handle),1))],2)}),128))])])])])]))}},_e={class:"section"},me={class:"container"},he={class:"columns"},ve={class:"column"},ge={class:"panel"},fe={class:"panel-block"},ke=["onSubmit"],be={class:"control has-icons-left"},$e=s("span",{class:"icon is-left"},[s("i",{class:"fas fa-calendar-plus","aria-hidden":"true"})],-1),ye=s("option",{disabled:"",selected:""},"Assign to",-1),Te=s("button",{type:"submit",class:"button"},"Create",-1),we=Y('<a class="panel-block columns title is-4"><div class="column is-two-quarter"><span class="Heading">Task Title</span></div><div class="column is-one-quarter"> Due Date </div><div class="column is-one-quarter"> Assigned To </div></a>',1),Ue={class:"column is-two-quarter"},Se=["onUpdate:modelValue","disabled"],xe={class:"column is-one-quarter"},Ve={key:0,class:"select column is-one-quarter"},Ne=["onUpdate:modelValue"],qe=["value"],De={key:1,class:"column is-one-quarter"},Ae={setup(a){const t=U();_("All");const n=F(),i=_([]);n.completedTasks().then(y=>{i.value=n.completedTasks});const o=_([]);t.getUsers().then(y=>{o.value=t.users});const l=_(),d=_(),m=_();function g(){n.addNewTask(l.value,d.value,m.value,t.user._id).then(()=>{n.currentUserTasks().then(()=>{allTasks.value=n.tasks})})}return(y,r)=>(c(),u("div",_e,[s("div",me,[s("div",he,[s("div",ve,[s("article",ge,[s("div",fe,[s("form",{onSubmit:L(g,["prevent"])},[s("p",be,[h(s("input",{class:"input is-primary",type:"text",placeholder:"New Task","onUpdate:modelValue":r[0]||(r[0]=e=>l.value=e)},null,512),[[k,l.value]]),w(" "+v(l.value)+" ",1),$e]),s("div",null,[h(s("input",{type:"date",class:"input","onUpdate:modelValue":r[1]||(r[1]=e=>d.value=e)},null,512),[[k,d.value]]),h(s("select",{"onUpdate:modelValue":r[2]||(r[2]=e=>m.value=e)},[ye,(c(!0),u($,null,T(o.value,e=>(c(),u("option",{key:e._id},v(e.handle),1))),128))],512),[[D,m.value]]),Te])],40,ke)]),we,(c(!0),u($,null,T(i.value,e=>{var S,x,V;return c(),u("div",{class:P(["panel-block columns",{"text-dec-line-through":e.completed==!0}]),key:e.message},[s("div",Ue,[h(s("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":p=>e.completed=p,disabled:e.assignedTo!=((S=f(t).user)==null?void 0:S._id)},null,8,Se),[[E,e.completed]]),s("span",null,v(e.message),1)]),s("div",xe,v(f(O)(String(e.dueDate)).format("MMM-DD-YYYY")),1),e.createdBy==((x=f(t).user)==null?void 0:x._id)?(c(),u("div",Ve,[h(s("select",{"onUpdate:modelValue":p=>e.assignedTo=p,class:"select"},[(c(!0),u($,null,T(o.value,p=>(c(),u("option",{value:p._id},v(p.handle),9,qe))),256))],8,Ne),[[D,e.assignedTo]])])):(c(),u("div",De,v((V=o.value.find(p=>p._id===e.assignedTo))==null?void 0:V.handle),1))],2)}),128))])])])])]))}},Le=[{path:"/",redirect:"/tasks"},{path:"/tasks",component:Ts},{path:"/completedtasks",component:Ae},{path:"/currenttasks",component:pe},{path:"/signup",component:Ws},{path:"/login",component:Ls}],q=K({history:G(),routes:Le,linkActiveClass:"is-active"});q.beforeEach((a,t)=>{const n=U();["/tasks","/completedtasks","/currenttasks"].includes(a.path)?n.user||q.push("/login"):["/login","/signup"].includes(a.path)&&n.user&&q.push("/tasks")});const M=B("messages",{state:()=>({notifications:[]}),actions:{close(a){this.notifications.splice(a,1)}}}),Ce="http://localhost:3001/api/";function Me(a,t,n,i){let o={headers:i};return t&&(o={method:n!=null?n:"POST",cache:"no-cache",headers:z({"Content-Type":"application/json"},i),body:JSON.stringify(t)}),fetch(Ce+a,o).then(l=>l.json())}const U=B("session",{state:()=>({user:null,users:[],destinationUrl:null}),actions:{async Login(a,t){var i;const n=M();try{const o=await this.api("users/login",{email:a,password:t});o&&(n.notifications.push({type:"success",message:`Welcome back ${o.firstName}!`}),this.user=o,q.push((i=this.destinationUrl)!=null?i:"/tasks"))}catch(o){n.notifications.push({type:"danger",message:o.message}),console.table(n.notifications)}},async Signup(a){var n;const t=M();try{const i=await this.api("users",a,"POST");i&&(t.notifications.push({type:"success",message:`Welcome back ${i.firstName}!`}),this.user=i,q.push((n=this.destinationUrl)!=null?n:"/tasks"))}catch(i){t.notifications.push({type:"danger",message:i.message}),console.table(t.notifications)}},async getUsers(){this.users=await this.api("users")},Logout(){this.user=null,q.push("/login")},async api(a,t,n,i={}){var l,d;const o=M();(l=this.user)!=null&&l.token&&(i.Authorization=`Bearer ${this.user.token}`);try{const m=await Me(a,t,n,i);if((d=m.errors)!=null&&d.length)throw{message:m.errors.join(", ")};return await m.data}catch(m){o.notifications.push({type:"danger",message:m.message})}}}});var Be=(a,t)=>{const n=a.__vccOpts||a;for(const[i,o]of t)n[i]=o;return n};const I=a=>(Q("data-v-4173ca94"),a=a(),X(),a),Ye={key:0,class:"buttons"},Pe=I(()=>s("strong",null,"Sign up",-1)),Ee=w(" Log in "),Oe={key:1,class:"buttons"},Fe={class:"avatar"},Ie=["src"],je=w(),He=I(()=>s("br",null,null,-1)),ze=I(()=>s("strong",null,"Log out",-1)),We=[ze],Re=C({setup(a){const t=U();return(n,i)=>{const o=A("router-link");return f(t).user?(c(),u("div",Oe,[s("div",Fe,[s("img",{src:f(t).user.pic},null,8,Ie),s("div",null,[s("strong",null,v(f(t).user.name),1),je,He,s("i",null,v(f(t).user.email),1)])]),s("a",{class:"button is-primary",onClick:i[0]||(i[0]=l=>f(t).Logout())},We)])):(c(),u("div",Ye,[b(o,{class:"button is-primary",to:"/signup"},{default:N(()=>[Pe]),_:1}),b(o,{class:"button is-light",to:"/login"},{default:N(()=>[Ee]),_:1})]))}}});var Je=Be(Re,[["__scopeId","data-v-4173ca94"]]);const Ke={class:"navbar is-primary"},Ge={class:"navbar-brand"},Qe=s("img",{src:"https://bulma.io/images/bulma-logo-white.png",alt:"Bulma: a modern CSS framework based on Flexbox",width:"112",height:"28"},null,-1),Xe=s("div",{class:"navbar-burger","data-target":"navbarExampleTransparentExample"},[s("span"),s("span"),s("span")],-1),Ze={id:"navbarExampleTransparentExample",class:"navbar-menu"},st={key:0,class:"navbar-start"},et=w(" Tasks "),tt=w(" Completed Tasks "),nt=w(" Current Tasks "),ot={class:"navbar-end"},at={class:"navbar-item"},it=C({setup(a){const t=U();return(n,i)=>{const o=A("router-link");return c(),u("nav",Ke,[s("div",Ge,[b(o,{class:"navbar-item",to:"/"},{default:N(()=>[Qe]),_:1}),Xe]),s("div",Ze,[f(t).user?(c(),u("div",st,[b(o,{class:"navbar-item",to:"/tasks"},{default:N(()=>[et]),_:1}),b(o,{class:"navbar-item",to:"/completedtasks"},{default:N(()=>[tt]),_:1}),b(o,{class:"navbar-item",to:"/currenttasks"},{default:N(()=>[nt]),_:1})])):Z("",!0),s("div",ot,[s("div",at,[b(Je)])])])])}}});const lt={class:"container"},ct={setup(a){return(t,n)=>{const i=A("router-view");return c(),u($,null,[b(it),s("div",lt,[b(i)])],64)}}};ss(ct).use(q).use(es()).mount("#app");
