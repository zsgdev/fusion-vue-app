(function(){"use strict";var t={410:function(t,o,n){var e=n(963),s=n(252);const r={class:"app"};function i(t,o,n,e,i,a){const u=(0,s.up)("navbar"),l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",r,[(0,s.Wm)(u)]),(0,s.Wm)(l)],64)}const a=(0,s._)("h3",null," Список пользователей ",-1);function u(t,o,n,e,r,i){const u=(0,s.up)("post-item");return(0,s.wg)(),(0,s.iD)("div",null,[a,(0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.posts,((t,o)=>((0,s.wg)(),(0,s.j4)(u,{post:t,key:o},null,8,["post"])))),128))])])}var l=n(577);const c={class:"post"},p={class:"post-title"},d={class:"post-body"};function v(t,o,n,e,r,i){return(0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("div",p,(0,l.zw)(n.post.title),1),(0,s._)("div",d,(0,l.zw)(n.post.body),1)])}var f={name:"post-item",props:{post:{type:Object,required:!0}}},b=n(744);const m=(0,b.Z)(f,[["render",v],["__scopeId","data-v-6f05b6c7"]]);var h=m,y={components:{PostItem:h},props:{posts:{type:Array,required:!0}}};const _=(0,b.Z)(y,[["render",u]]);var w=_;const g=t=>((0,s.dD)("data-v-79dad7bd"),t=t(),(0,s.Cn)(),t),P=g((()=>(0,s._)("div",null,[(0,s._)("h1",{style:{"text-align":"center"}},"Создание поста")],-1))),O={class:"create-post"};function k(t,o,n,r,i,a){return(0,s.wg)(),(0,s.iD)("div",null,[P,(0,s._)("div",O,[(0,s._)("form",{onSubmit:o[3]||(o[3]=(0,e.iM)((()=>{}),["prevent","stop"])),class:"create-post"},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":o[0]||(o[0]=o=>t.post.title=o),class:"input",type:"text",placeholder:"Напишите название"},null,512),[[e.nr,t.post.title]]),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":o[1]||(o[1]=o=>t.post.body=o),class:"input",type:"text",placeholder:"Напишите описание"},null,512),[[e.nr,t.post.body]]),(0,s._)("button",{class:"button",onClick:o[2]||(o[2]=t=>a.createPost())}," Добавить пост ")],32)])])}var D={name:"post-form",data:function(){return{post:{title:"",body:""}}},methods:{createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}};const j=(0,b.Z)(D,[["render",k],["__scopeId","data-v-79dad7bd"]]);var x=j;const Z={class:"navbar",style:{}},I=(0,s.Uk)("Home"),J=(0,s.Uk)("Post blog");function W(t,o){const n=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",Z,[(0,s._)("div",null,[(0,s.Wm)(n,{to:"/"},{default:(0,s.w5)((()=>[I])),_:1})]),(0,s._)("div",null,[(0,s.Wm)(n,{to:"/about"},{default:(0,s.w5)((()=>[J])),_:1})])])}const C={},H=(0,b.Z)(C,[["render",W],["__scopeId","data-v-04761e06"]]);var U=H,F={components:{PostForm:x,PostList:w,Navbar:U},data:function(){return{title:null,body:null,posts:[{id:1,title:"Javascript",body:"Описание поста"},{id:2,title:"Javascript",body:"Описание поста"},{id:3,title:"Javascript",body:"Описание поста"}]}},methods:{createPost(t){console.log(t),this.posts.push(t)}}};const T=(0,b.Z)(F,[["render",i],["__scopeId","data-v-d5d70034"]]);var q=T,z=n(119);const L={class:"post-blog"};function M(t,o,n,e,r,i){const a=(0,s.up)("post-form"),u=(0,s.up)("post-list");return(0,s.wg)(),(0,s.iD)("div",L,[(0,s.Wm)(a,{onCreate:o[0]||(o[0]=t=>i.createPost(t))}),(0,s.Wm)(u,{posts:t.posts},null,8,["posts"])])}var V={components:{PostForm:x,PostList:w},data:function(){return{title:null,body:null,posts:[{id:1,title:"Javascript",body:"Описание поста"},{id:2,title:"Javascript",body:"Описание поста"},{id:3,title:"Javascript",body:"Описание поста"}]}},methods:{createPost(t){console.log(t),this.posts.push(t)}}};const Y=(0,b.Z)(V,[["render",M],["__scopeId","data-v-144958c2"]]);var A=Y;function E(t,o,n,e,r,i){return(0,s.wg)(),(0,s.iD)("div",null," Home page ")}var K={};const N=(0,b.Z)(K,[["render",E]]);var S=N;const $=[{path:"/",name:"home",component:S},{path:"/about",name:"about",component:A}],B=(0,z.p7)({history:(0,z.PO)("/ulbi-vue-app/"),routes:$});var G=B,Q=n(637),R=(0,Q.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,e.ri)(q).use(R).use(G).mount("#app")}},o={};function n(e){var s=o[e];if(void 0!==s)return s.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(o,e,s,r){if(!e){var i=1/0;for(c=0;c<t.length;c++){e=t[c][0],s=t[c][1],r=t[c][2];for(var a=!0,u=0;u<e.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](e[u])}))?e.splice(u--,1):(a=!1,r<i&&(i=r));if(a){t.splice(c--,1);var l=s();void 0!==l&&(o=l)}}return o}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[e,s,r]}}(),function(){n.d=function(t,o){for(var e in o)n.o(o,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};n.O.j=function(o){return 0===t[o]};var o=function(o,e){var s,r,i=e[0],a=e[1],u=e[2],l=0;if(i.some((function(o){return 0!==t[o]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(u)var c=u(n)}for(o&&o(e);l<i.length;l++)r=i[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},e=self["webpackChunkulbi_vue_app"]=self["webpackChunkulbi_vue_app"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(410)}));e=n.O(e)})();
//# sourceMappingURL=app.ce82b3f6.js.map