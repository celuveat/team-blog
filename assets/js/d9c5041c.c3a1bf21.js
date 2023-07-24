"use strict";(self.webpackChunkceluveat_team_blog=self.webpackChunkceluveat_team_blog||[]).push([[621],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>m});var l=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,l)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,l,r=function(n,e){if(null==n)return{};var t,l,r={},a=Object.keys(n);for(l=0;l<a.length;l++)t=a[l],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(l=0;l<a.length;l++)t=a[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var u=l.createContext({}),k=function(n){var e=l.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=k(n.components);return l.createElement(u.Provider,{value:e},n.children)},d="mdxType",s={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,u=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),d=k(t),c=r,m=d["".concat(u,".").concat(c)]||d[c]||s[c]||a;return t?l.createElement(m,i(i({ref:e},p),{},{components:t})):l.createElement(m,i({ref:e},p))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,i=new Array(a);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=n,o[d]="string"==typeof n?n:r,i[1]=o;for(var k=2;k<a;k++)i[k]=t[k];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6514:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>k});var l=t(7462),r=(t(7294),t(3905));const a={date:new Date("2023-07-21T00:00:00.000Z"),authors:"shin-mallang",title:"\uc140\ub7fd\uc787\uc758 CI/CD",description:"\uc140\ub7fd\uc787 \ud300\uc758 CI/CD\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4.",keywords:["CI/CD","\uc778\ud504\ub77c"],tags:["\ud68c\uace0","\uc6b0\uc544\ud55c\ud14c\ud06c\ucf54\uc2a4","\uae00\uc4f0\uae30"]},i=void 0,o={permalink:"/team-blog/back-blog/mallang/cicd/cicd",source:"@site/@backBlog/mallang/cicd/cicd.mdx",title:"\uc140\ub7fd\uc787\uc758 CI/CD",description:"\uc140\ub7fd\uc787 \ud300\uc758 CI/CD\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4.",date:"2023-07-21T00:00:00.000Z",formattedDate:"2023\ub144 7\uc6d4 21\uc77c",tags:[{label:"\ud68c\uace0",permalink:"/team-blog/back-blog/tags/\ud68c\uace0"},{label:"\uc6b0\uc544\ud55c\ud14c\ud06c\ucf54\uc2a4",permalink:"/team-blog/back-blog/tags/\uc6b0\uc544\ud55c\ud14c\ud06c\ucf54\uc2a4"},{label:"\uae00\uc4f0\uae30",permalink:"/team-blog/back-blog/tags/\uae00\uc4f0\uae30"}],readingTime:15.31,hasTruncateMarker:!1,authors:[{name:"donghun Shin",url:"https://github.com/shin-mallang",email:"huipulci1@naver.com",imageURL:"https://avatars.githubusercontent.com/u/52229930?v=4",key:"shin-mallang"}],frontMatter:{date:"2023-07-21T00:00:00.000Z",authors:"shin-mallang",title:"\uc140\ub7fd\uc787\uc758 CI/CD",description:"\uc140\ub7fd\uc787 \ud300\uc758 CI/CD\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4.",keywords:["CI/CD","\uc778\ud504\ub77c"],tags:["\ud68c\uace0","\uc6b0\uc544\ud55c\ud14c\ud06c\ucf54\uc2a4","\uae00\uc4f0\uae30"]}},u={authorsImageUrls:[void 0]},k=[{value:"\uc11c\ub860",id:"\uc11c\ub860",level:2},{value:"\uc81c\uc57d\uc870\uac74\uacfc \uc694\uad6c\uc0ac\ud56d",id:"\uc81c\uc57d\uc870\uac74\uacfc-\uc694\uad6c\uc0ac\ud56d",level:2},{value:"\ucef4\ud4e8\ud305 \ud30c\uc6cc",id:"\ucef4\ud4e8\ud305-\ud30c\uc6cc",level:3},{value:"\uc694\uad6c\uc0ac\ud56d",id:"\uc694\uad6c\uc0ac\ud56d",level:3},{value:"\uc140\ub7fd\uc787 \ud300\uc758 git \ube0c\ub79c\uce58 \uc804\ub7b5",id:"\uc140\ub7fd\uc787-\ud300\uc758-git-\ube0c\ub79c\uce58-\uc804\ub7b5",level:2},{value:"main \ube0c\ub79c\uce58",id:"main-\ube0c\ub79c\uce58",level:3},{value:"develop-backend/frontend \ube0c\ub79c\uce58",id:"develop-backendfrontend-\ube0c\ub79c\uce58",level:3},{value:"feature \ube0c\ub79c\uce58",id:"feature-\ube0c\ub79c\uce58",level:3},{value:"hotfix \ube0c\ub79c\uce58",id:"hotfix-\ube0c\ub79c\uce58",level:3},{value:"CI \uae30\uc220 \uc120\ud0dd\uacfc \uad6c\ucd95",id:"ci-\uae30\uc220-\uc120\ud0dd\uacfc-\uad6c\ucd95",level:2},{value:"\ubc31\uc5d4\ub4dc CI workflow",id:"\ubc31\uc5d4\ub4dc-ci-workflow",level:3},{value:"\ud504\ub860\ud2b8\uc5d4\ub4dc CI workflow",id:"\ud504\ub860\ud2b8\uc5d4\ub4dc-ci-workflow",level:3},{value:"\ud1b5\ud569(main) CI workflow",id:"\ud1b5\ud569main-ci-workflow",level:3},{value:"CD \uae30\uc220 \uc120\ud0dd\uacfc \uad6c\ucd95",id:"cd-\uae30\uc220-\uc120\ud0dd\uacfc-\uad6c\ucd95",level:2},{value:"Jenkins \ub300\uc2e0 Github Actions\ub97c \uc0ac\uc6a9\ud55c \uc774\uc720",id:"jenkins-\ub300\uc2e0-github-actions\ub97c-\uc0ac\uc6a9\ud55c-\uc774\uc720",level:3},{value:"\ucc38\uace0 - \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 \ube44\uad50",id:"\ucc38\uace0---\uba54\ubaa8\ub9ac-\uc0ac\uc6a9\ub7c9-\ube44\uad50",level:3},{value:"\uae30\ubcf8\uc801\uc778 \uc11c\ubc84\uc758 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9",id:"\uae30\ubcf8\uc801\uc778-\uc11c\ubc84\uc758-\uba54\ubaa8\ub9ac-\uc0ac\uc6a9\ub7c9",level:4},{value:"Github Actions self-hosted runner",id:"github-actions-self-hosted-runner",level:4},{value:"Jenkins",id:"jenkins",level:4},{value:"\ubc31\uc5d4\ub4dc CD workflow",id:"\ubc31\uc5d4\ub4dc-cd-workflow",level:3},{value:"\ubc31\uc5d4\ub4dc \ubc30\ud3ec \uc2a4\ud06c\ub9bd\ud2b8",id:"\ubc31\uc5d4\ub4dc-\ubc30\ud3ec-\uc2a4\ud06c\ub9bd\ud2b8",level:3},{value:"\ud504\ub860\ud2b8\uc5d4\ub4dc CD workflow",id:"\ud504\ub860\ud2b8\uc5d4\ub4dc-cd-workflow",level:3},{value:"\ud504\ub860\ud2b8\uc5d4\ub4dc \ubc30\ud3ec \uc2a4\ud06c\ub9bd\ud2b8",id:"\ud504\ub860\ud2b8\uc5d4\ub4dc-\ubc30\ud3ec-\uc2a4\ud06c\ub9bd\ud2b8",level:3},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2}],p={toc:k},d="wrapper";function s(n){let{components:e,...a}=n;return(0,r.kt)(d,(0,l.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\uc11c\ub860"},"\uc11c\ub860"),(0,r.kt)("p",null,"\uc548\ub155\ud558\uc138\uc694. \uc140\ub7fd\uc787\uc758 \ubc31\uc5d4\ub4dc \ub9d0\ub791\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc140\ub7fd\uc787 \ud300\uc758 CI/CD \uc544\ud0a4\ud14d\ucc98\ub97c \uc18c\uac1c\ud574 \ub4dc\ub9ac\uae30 \uc704\ud574 \ucc3e\uc544\uc654\uc2b5\ub2c8\ub2e4 \ud83d\ude0e"),(0,r.kt)("p",null,"\uc140\ub7fd\uc787 \ud300\uc740 \uc8fc\uc5b4\uc9c4 \uc81c\uc57d \ub0b4\uc5d0\uc11c \ubc30\ud3ec \uc790\ub3d9\ud654\ub97c \ub2ec\uc131\ud558\uae30 \uc704\ud574 \ub9ce\uc740 \uace0\ubbfc\uc744 \ud558\uc600\uace0, \ucd5c\uc885\uc801\uc73c\ub85c \ub2e4\uc74c\uacfc \uac19\uc740 CI/CD \uc544\ud0a4\ud14d\ucc98\ub97c \ub3c4\uc785\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CICD",src:t(4230).Z,width:"2738",height:"1520"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \uacfc\uc815\uc5d0\uc11c \uc0dd\uaca8\ub09c \uace0\ubbfc\ub4e4\uacfc \ubc1c\uc0dd\ud588\ub358 \ubb38\uc81c\ub4e4\uc744 \uc0b4\ud3b4\ubcf4\uba70 \uc804\uccb4\uc801\uc778 \uad6c\ucd95 \uacfc\uc815\uc744 \uc18c\uac1c\ud574 \ub4dc\ub9ac\ub824 \ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uc81c\uc57d\uc870\uac74\uacfc-\uc694\uad6c\uc0ac\ud56d"},"\uc81c\uc57d\uc870\uac74\uacfc \uc694\uad6c\uc0ac\ud56d"),(0,r.kt)("h3",{id:"\ucef4\ud4e8\ud305-\ud30c\uc6cc"},"\ucef4\ud4e8\ud305 \ud30c\uc6cc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \uac1c\uc218: \ucd5c\ub300 3\ub300"),(0,r.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \uc0ac\uc591: \ucd5c\ub300 t4g.small"),(0,r.kt)("li",{parentName:"ul"},"\uc2a4\ud1a0\ub9ac\uc9c0: \ucd5c\ub300 20GiB")),(0,r.kt)("h3",{id:"\uc694\uad6c\uc0ac\ud56d"},"\uc694\uad6c\uc0ac\ud56d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac1c\ubc1c \uc11c\ubc84\uc640 \ud504\ub85c\ub355\uc158 \uc11c\ubc84\uc758 \ubd84\ub9ac")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uc140\ub7fd\uc787-\ud300\uc758-git-\ube0c\ub79c\uce58-\uc804\ub7b5"},"\uc140\ub7fd\uc787 \ud300\uc758 git \ube0c\ub79c\uce58 \uc804\ub7b5"),(0,r.kt)("p",null,"CI/CD \uc544\ud0a4\ud14d\ucc98\uc5d0 \ub300\ud55c \uc18c\uac1c \uc804\uc5d0, \uc6d0\ud560\ud55c \uc124\uba85\uc744 \uc704\ud558\uc5ec \uc800\ud76c \ud300\uc758 git \ube0c\ub79c\uce58 \uc804\ub7b5\uc5d0 \ub300\ud574 \uc6b0\uc120 \uc18c\uac1c\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc140\ub7fd\uc787 \ud300\uc740 gitflow \uc804\ub7b5\uc744 \uc870\uae08 \uc218\uc815\ud558\uc5ec \ub2e4\uc74c\uacfc \uac19\uc774 5\uac1c\uc758 \ube0c\ub79c\uce58\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"main")," - \ud504\ub85c\ub355\uc158\uc6a9 \ube0c\ub79c\uce58"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"develop-backend")," - \ubc31\uc5d4\ub4dc\uc758 \ub2e4\uc74c \ucd9c\uc2dc \ubc84\uc804\uc744 \uac1c\ubc1c\ud558\ub294 \ube0c\ub79c\uce58"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"develop-frontend"),"- \ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 \ub2e4\uc74c \ucd9c\uc2dc \ubc84\uc804\uc744 \uac1c\ubc1c\ud558\ub294 \ube0c\ub79c\uce58"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feature")," - \uae30\ub2a5 \uac1c\ubc1c \ube0c\ub79c\uce58"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hotfix")," - main \ube0c\ub79c\uce58\uc5d0\uc11c \ubc1c\uc0dd\ud55c \ubc84\uadf8\ub97c \uc218\uc815\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ube0c\ub79c\uce58")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"main-\ube0c\ub79c\uce58"},"main \ube0c\ub79c\uce58"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main")," \ube0c\ub79c\uce58\uc5d0 \uc874\uc7ac\ud558\ub294 \ucf54\ub4dc\ub294 \uc2e4\uc81c \uc11c\ube44\uc2a4\ub420 \ucf54\ub4dc\uc774\uae30 \ub54c\ubb38\uc5d0 \ud56d\uc0c1 \ubc30\ud3ec \uac00\ub2a5\ud55c \uc0c1\ud0dc\uc5ec\uc57c \ud558\uba70 \uae30\ub2a5\uc774 \uc644\uc804\ud788 \uad6c\ud604\ub41c \uc0c1\ud0dc\uc5ec\uc57c \ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"main")," \ube0c\ub79c\uce58\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"develop-backend")," \ube0c\ub79c\uce58\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"develop-frontend")," \ube0c\ub79c\uce58\uc5d0\uc11c \uae30\ub2a5\ub4e4\uc774 \uc644\uc131\ud55c \uc774\ud6c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"merge"),"\ub429\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"develop-backendfrontend-\ube0c\ub79c\uce58"},"develop-","[backend/frontend]"," \ube0c\ub79c\uce58"),(0,r.kt)("p",null,"git flow\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," \ube0c\ub79c\uce58\ub97c \uc800\ud76c\uc758 \uc0c1\ud669\uc5d0 \ub9de\uac8c \uc7ac\uad6c\uc131\ud55c \ube0c\ub79c\uce58\ub85c,\n\ubc31\uc5d4\ub4dc\uc640 \ud504\ub860\ud2b8\uc5d4\ub4dc\uac00 \uac01\uac01 \uc11c\ub85c\uc758 \uc601\ud5a5\uc744 \ubc1b\uc9c0 \uc54a\uace0 \uac1c\ubc1c\uc744 \uc774\uc5b4\uac08 \uc218 \uc788\ub3c4\ub85d \ud558\uae30 \uc704\ud558\uc5ec \uc704\uc640 \uac19\uc774 \uad6c\uc131\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\ub294 \ud558\ub098\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"Repository"),"\ub97c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0, \ubc31\uc5d4\ub4dc\uc640 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 \ucf54\ub4dc \ud30c\uc77c \ubd84\ub9ac\ub3c4 \ud544\uc694\ud588\ub294\ub370\uc694,\n\uc800\ud76c\ub294 \ucd5c\uc0c1\uc704 directory\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"backend")," \ud3f4\ub354\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," \ud3f4\ub354\ub97c \ub450\uc5b4 \ucf54\ub4dc\ub97c \ubd84\ub9ac\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"develop-backend")," \ube0c\ub79c\uce58\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"backend")," \ud3f4\ub354\uc5d0\uc11c\ub9cc \uc791\uc5c5\uc774 \uc774\ub8e8\uc5b4\uc9c0\uba70,\n",(0,r.kt)("inlineCode",{parentName:"p"},"develop-frontend")," \ube0c\ub79c\uce58\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," \ud3f4\ub354\uc5d0\uc11c\ub9cc \uc791\uc5c5\uc774 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"feature-\ube0c\ub79c\uce58"},"feature \ube0c\ub79c\uce58"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"feature")," \ube0c\ub79c\uce58\ub294 \uae30\ub2a5\uc744 \uac1c\ubc1c\ud558\ub294 \ube0c\ub79c\uce58\ub85c, \uae30\ubcf8\uc801\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"\uc774\uc288"),"\uc640 1\ub3001 \ub9e4\ud551 \ub429\ub2c8\ub2e4.",(0,r.kt)("br",null),"\n\uac1c\ubc1c\ud574\uc57c \ud558\ub294 \uae30\ub2a5\ub4e4\uc5d0 \ub300\ud558\uc5ec \uba3c\uc800 \uc774\uc288\ub97c \uc0dd\uc131\ud558\uba74, \uac01 \uc774\uc288\ubcc4 \ub2f4\ub2f9\uc790\uac00 \uc774\uc288\uc5d0 \ub300\uc751\ub418\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"feature")," \ube0c\ub79c\uce58\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),"\n\uae30\ub2a5\uc744 \uac1c\ubc1c\ub418\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"feature")," \ube0c\ub79c\uce58\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," \ube0c\ub79c\uce58\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"PR"),"\uc744 \ub0a0\ub9bd\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"hotfix-\ube0c\ub79c\uce58"},"hotfix \ube0c\ub79c\uce58"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hotfix")," \ube0c\ub79c\uce58\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," \ube0c\ub79c\uce58\uc5d0\uc11c \ubc1c\uc0dd\ud55c \ubc84\uadf8\ub97c \uae09\ud558\uac8c \uc218\uc815\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 \uc0ac\uc6a9\ud558\ub294 \ube0c\ub79c\uce58\uc785\ub2c8\ub2e4.",(0,r.kt)("br",null),"\n\uc774\ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"hotfix")," \ube0c\ub79c\uce58\uc758 \ubcc0\uacbd \uc0ac\ud56d\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," \ube0c\ub79c\uce58\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," \ube0c\ub79c\uce58\uc5d0 \ubaa8\ub450 \ubc18\uc601\ub429\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"ci-\uae30\uc220-\uc120\ud0dd\uacfc-\uad6c\ucd95"},"CI \uae30\uc220 \uc120\ud0dd\uacfc \uad6c\ucd95"),(0,r.kt)("p",null,"\uc800\ud76c \ud300\uc740 CI\ub97c \uc704\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"Github Actions"),"\ub97c \uc0ac\uc6a9\ud558\uae30\ub85c \uacb0\uc815\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Github Actions"),"\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins"),"\uc5d0 \ube44\ud574 \ud559\uc2b5 & \uc801\uc6a9\ud558\uae30 \uc27d\ub2e4\uace0 \ud310\ub2e8\ud588\uc73c\uba70, ",(0,r.kt)("inlineCode",{parentName:"p"},"Github Actions")," \ub9cc\uc73c\ub85c\ub3c4 \uc6d0\ud558\ub294 \uae30\ub2a5\uc744 \ubaa8\ub450 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5c8\uae30\uc5d0 \uad73\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins"),"\ub97c \uc0ac\uc6a9\ud560 \uc774\uc720\uac00 \uc5c6\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubb34\uc5c7\ubcf4\ub2e4\ub3c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins"),"\ub97c \ub3c4\uc785\ud55c\ub2e4\uba74 \uc774\ub97c \uc704\ud55c \uc11c\ubc84\ub97c \ud558\ub098 \ub354 \uc0ac\uc6a9\ud574\uc57c \ud558\ub294\ub370, \uc774\ub807\uac8c \ub418\uba74 \uc800\ud76c\uc5d0\uac8c \uc8fc\uc5b4\uc9c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"\uc81c\uc57d\uc870\uac74"),"\uc744 \ub9cc\uc871\ud558\uba70 \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\uae30 \uc5b4\ub835\ub2e4\ub294 \ud310\ub2e8\uc774 \ub4e4\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub798\uc11c \uc800\ud76c\ub294 \ubc31\uc5d4\ub4dc\uc640 \ud504\ub860\ud2b8\uc5d4\ub4dc \ubaa8\ub450 CI \uae30\uc220\ub85c\uc368 ",(0,r.kt)("inlineCode",{parentName:"p"},"Github Actions"),"\ub97c \ub3c4\uc785\ud588\uc73c\uba70, \ub2e4\uc74c\uacfc \uac19\uc774 \uc124\uc815\uc744 \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\ubc31\uc5d4\ub4dc-ci-workflow"},"\ubc31\uc5d4\ub4dc CI workflow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"name: \u2728 Celuveat Backend CI \u2728\n\non:\n  push:\n    branches: [ \"develop-backend\" ]\n  pull_request:\n    branches: [ \"develop-backend\" ]\n\npermissions:\n  checks: write\n  pull-requests: write\n\njobs:\n  backend-test:\n    runs-on: ubuntu-latest\n    env:\n      working-directory: ./backend\n\n    steps:\n    - uses: actions/checkout@v3\n\n    - name: \u2728 JDK 17 \uc124\uc815\n      uses: actions/setup-java@v3\n      with:\n        java-version: '17'\n        distribution: 'temurin'\n\n    - name: \u2728 Gradlew \uad8c\ud55c \uc124\uc815\n      run: chmod +x ./gradlew\n      working-directory: ${{ env.working-directory }}\n\n    - name: \u2728 \ud14c\uc2a4\ud2b8 \uc9c4\ud589\n      run: ./gradlew test\n      working-directory: ${{ env.working-directory }}\n\n    - name: \u2728 \ud14c\uc2a4\ud2b8 \uacb0\uacfc Report\n      uses: EnricoMi/publish-unit-test-result-action@v2\n      if: always()\n      with:\n         files: '**/build/test-results/**/*.xml'\n\n    - name: \u2728 \ud14c\uc2a4\ud2b8 \uc2e4\ud328 Comment\n      uses: mikepenz/action-junit-report@v3\n      if: always()\n      with:\n        report_paths: '**/build/test-results/test/TEST-*.xml'\n")),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \uc124\uc815\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",{parentName:"p",href:"https://ttl-blog.tistory.com/1350"},"\ub9d0\ub791\uc774\uc758 \ube14\ub85c\uadf8"),"\ub97c \ucc38\uace0\ud574\uc8fc\uc138\uc694."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\ud504\ub860\ud2b8\uc5d4\ub4dc-ci-workflow"},"\ud504\ub860\ud2b8\uc5d4\ub4dc CI workflow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'name: \ud83c\udf54 Celuveat Frontend CI \ud83c\udf54\n\non:\n  push:\n    branches: [ "develop-frontend" ]\n  pull_request:\n    branches: [ "develop-frontend" ]\n\njobs:\n  frontend-test:\n    runs-on: ubuntu-latest\n    env:\n      working-directory: ./frontend\n\n    name: \ud83c\udf54\ud14c\uc2a4\ud2b8 \ub531 \ub300\ub77c \ud83d\udca2\ud83d\udc4a\n\n    steps:\n      - uses: actions/checkout@v3\n\n      - uses: actions/setup-node@v3\n        with:\n          node-version: \'18.16.1\'\n\n      - name: \ud83c\udf54 yarn install\n        run: yarn install\n        working-directory: ${{ env.working-directory }}\n\n      - name: \ud83c\udf54 eslint \ud14c\uc2a4\ud2b8\n        run: yarn lint\n        working-directory: ${{ env.working-directory }}\n\n      - name: \ud83c\udf54 React \ud504\ub85c\uc81d\ud2b8 \ube4c\ub4dc\n        run: yarn build\n        working-directory: ${{ env.working-directory }}\n')),(0,r.kt)("p",null,"\uc704\uc640 \uac19\uc774 \ubc31\uc5d4\ub4dc\uc640 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 CI workflow\ub97c \uc791\uc131\ud558\uc5ec develop-backend & develop-frontend \ube0c\ub79c\uce58\uc5d0 PR\uc774 \ubc1c\uc0d0\ud560 \ub54c\ub9c8\ub2e4 \ud14c\uc2a4\ud2b8\ub97c \uc218\ud589\ud558\ub3c4\ub85d \uc124\uc815\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\ud1b5\ud569main-ci-workflow"},"\ud1b5\ud569(main) CI workflow"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"(\uc544\uc9c1 \uc791\uc131\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4 \ud83d\ude0e)")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"cd-\uae30\uc220-\uc120\ud0dd\uacfc-\uad6c\ucd95"},"CD \uae30\uc220 \uc120\ud0dd\uacfc \uad6c\ucd95"),(0,r.kt)("p",null,"\ucc98\uc74c\uc5d0\ub294 CD\ub97c \uc704\ud55c \uae30\uc220\ub85c\uc368 ",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins"),"\ub97c \uc0ac\uc6a9\ud558\ub824 \ud588\uc2b5\ub2c8\ub2e4.\n\uc800\ub97c \ud3ec\ud568\ud55c \uba87\uba87 \ud300\uc6d0\ub4e4\uc774 \uc774\ubbf8 \uacbd\ud5d8\ud574 \ubcf8 \uae30\uc220\uc774\uc5c8\uae30 \ub54c\ubb38\uc5d0, \uc801\uc6a9\ud558\ub294\ub370 \ud070 \uc5b4\ub824\uc6c0\uc774 \uc5c6\uc744 \uac83\uc774\ub77c \ud310\ub2e8\ud588\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub7f0\ub370 \uc704\uc5d0\uc11c \uc5b8\uae09\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"\uc81c\uc57d\uc870\uac74"),"\uc744 \uace0\ub824\ud55c \uacb0\uacfc, \ucd5c\uc885\uc801\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins")," \ub300\uc2e0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Github Actions"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"self-hosted runners"),"\ub97c \uc0ac\uc6a9\ud558\uae30\ub85c \uacb0\uc815\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"jenkins-\ub300\uc2e0-github-actions\ub97c-\uc0ac\uc6a9\ud55c-\uc774\uc720"},"Jenkins \ub300\uc2e0 Github Actions\ub97c \uc0ac\uc6a9\ud55c \uc774\uc720"),(0,r.kt)("p",null,"\uc81c\uc57d\uc870\uac74 \uc18d\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ud56d\ubaa9\uc774 \uc874\uc7ac\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \uac1c\uc218: \ucd5c\ub300 3\ub300"),(0,r.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \uc0ac\uc591: \ucd5c\ub300 t4g.small")),(0,r.kt)("p",null,"\uac1c\ubc1c \uc11c\ubc84\uc640 \ud504\ub85c\ub355\uc158 \uc11c\ubc84\ub97c \ubd84\ub9ac\ud558\uae30 \uc704\ud55c \uc694\uad6c\uc0ac\ud56d\uc744 \uace0\ub824\ud588\uc744 \ub54c, \uc6b0\uc120 \uc774\ub4e4\uc744 \uc704\ud55c \uc11c\ubc84\uac00 \ucd5c\uc18c\ud55c 2\ub300\ub294 \ud560\ub2f9\ub418\uc5b4\uc57c \ud588\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",null),"\n(\uac1c\ubc1c \uc11c\ubc84 1\ub300, \ud504\ub85c\ub355\uc158 \uc11c\ubc84 1\ub300)"),(0,r.kt)("p",null,"\ub610\ud55c \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec\uc57c \ud588\uae30 \ub54c\ubb38\uc5d0, DB \uc804\uc6a9 \uc11c\ubc84\uac00 \ud55c \ub300 \ub354 \ud544\uc694\ud55c \uc0c1\ud669\uc774\uc5c8\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",null),"\n\uac1c\ubc1c \uc11c\ubc84\uc5d0\uc11c \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc124\uce58\ud558\uc5ec \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\ub3c4 \uc788\uc5c8\uc9c0\ub9cc, \ubcf4\uc548 & \uc131\ub2a5\uc0c1\uc758 \ubb38\uc81c\ub85c \uc778\ud574 \uc774\ub294 \uc88b\uc740 \ubc29\ubc95\uc774 \uc544\ub2c8\ub77c \ud310\ub2e8\ud558\uc600\uace0, \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc6a9 \uc11c\ubc84\ub97c \ub530\ub85c \ub450\uae30\ub85c \uacb0\uc815\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucd5c\uc885\uc801\uc73c\ub85c \uac1c\ubc1c, \ud504\ub85c\ub355\uc158, \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc11c\ubc84\ub97c \uac01\uac01 \ubd84\ub9ac\ud558\uc5ec \uc0ac\uc6a9\ud558\uae30\ub85c \uacb0\uc815\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \uc0c1\ud669\uc774\uc5c8\uae30\uc5d0 CD\ub97c \uc704\ud574\uc11c \ucd94\uac00\ub85c \uc11c\ubc84\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc5c8\uace0, \uacb0\uad6d \uae30\uc874 \uc11c\ubc84\uc5d0 \ucd94\uac00\ud558\ub294 \uc2dd\uc73c\ub85c \uad6c\uc131\ud558\uc5ec\uc57c \ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub54c \uac01 \uc11c\ubc84\uc758 \uc0ac\uc591\uc778 ",(0,r.kt)("inlineCode",{parentName:"p"},"t4g.small"),"\uc758 \uc2a4\ud399\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vCPU: 2"),(0,r.kt)("li",{parentName:"ul"},"RAM: 2 GiB")),(0,r.kt)("p",null,"RAM\uc774 2GB\ubc16\uc5d0 \uc548\ub418\uae30 \ub54c\ubb38\uc5d0 \uba54\ubaa8\ub9ac\ub97c \ucd5c\ub300\ud55c \uc801\uac8c \uc0ac\uc6a9\ud558\ub294 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec\uc57c \ud588\uc73c\uba70, \uc774\ub97c \uc704\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"Github Actions"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"self-hosted runners"),"\ub97c \ube44\uad50\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ube44\uad50 \uacb0\uacfc\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Github Actions"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"self-hosted runners"),"\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins"),"\ubcf4\ub2e4 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc774 \ud6e8\uc52c \ub0ae\uc558\uace0, \ub530\ub77c\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Github Actions"),"\ub97c \ud1b5\ud574 CD\ub97c \uad6c\ucd95\ud558\uae30\ub85c \uacb0\uc815\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\ucc38\uace0---\uba54\ubaa8\ub9ac-\uc0ac\uc6a9\ub7c9-\ube44\uad50"},"\ucc38\uace0 - \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 \ube44\uad50"),(0,r.kt)("p",null,"\ube44\uad50 \uc2dc \uacf5\ud1b5 \uc0ac\ud56d\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Swap \uba54\ubaa8\ub9ac 1.5 GB \ud560\ub2f9"),(0,r.kt)("li",{parentName:"ul"},"java 17 \ubc84\uc804 \uc124\uce58")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\uae30\ubcf8\uc801\uc778-\uc11c\ubc84\uc758-\uba54\ubaa8\ub9ac-\uc0ac\uc6a9\ub7c9"},"\uae30\ubcf8\uc801\uc778 \uc11c\ubc84\uc758 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9"),(0,r.kt)("p",null,"\uc790\ubc14\ub9cc\uc744 \uae54\uc544\ub454 \uc11c\ubc84\uc758 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"basic-java",src:t(4580).Z,width:"1332",height:"166"})),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"github-actions-self-hosted-runner"},"Github Actions self-hosted runner"),(0,r.kt)("p",null,"\ub2e8\uc21c Runner \uc124\uce58 \ud6c4 \uc2e4\ud589 \uc0c1\ud0dc\uc785\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"actions-basic",src:t(1155).Z,width:"1320",height:"424"})),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"\uc6f9\ud6c5\uc73c\ub85c runner\uac00 \ub3d9\uc791\ud558\uc5ec bootJar\uc744 \uc2e4\ud589\ud560 \ub54c\uc758 \ucd5c\ub300 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc785\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"actions-max",src:t(9006).Z,width:"1324",height:"124"})),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"jenkins"},"Jenkins"),(0,r.kt)("p",null,"Jenkins \uc124\uce58 \ud6c4 \ub2e8\uc21c \uc2e4\ud589 \uc0c1\ud0dc\uc785\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"jenkins-basic",src:t(6623).Z,width:"1302",height:"276"})),(0,r.kt)("p",null,"\uc6f9\ud6c5\uc73c\ub85c \uc820\ud0a8\uc2a4\uac00 \ub3d9\uc791\ud558\uc5ec bootJar\uc744 \uc2e4\ud589\ud560 \ub54c\uc758 \ucd5c\ub300 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc785\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"jenkins-max",src:t(6149).Z,width:"1336",height:"126"})),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"\uc774\ub807\ub4ef \uac04\ub2e8\ud55c \ube44\uad50\ub97c \ud1b5\ud574\uc11c\ub3c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins"),"\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"Github Actions")," \uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"self-hosted runners"),"\ubcf4\ub2e4 \ub9ce\uc740 \uba54\ubaa8\ub9ac\ub97c \ud544\uc694\ub85c \ud558\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucd5c\uc885\uc801\uc73c\ub85c \uc800\ud76c \ud300\uc740 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\ub3c4 \uc801\uace0, \uc801\uc6a9\ud558\uae30\ub3c4 \uc26c\uc6b4(?) ",(0,r.kt)("inlineCode",{parentName:"p"},"Github Actions self-hosted runners"),"\ub97c \uc0ac\uc6a9\ud558\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\ubc31\uc5d4\ub4dc-cd-workflow"},"\ubc31\uc5d4\ub4dc CD workflow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"name: \u2728 Celuveat backend DEV CD \u2728\n\non:\n  push:\n    branches:\n      - develop-backend\n    paths:\n      - 'backend/**'\n\njobs:\n  deploy-backend:\n    runs-on: self-hosted\n\n    steps:\n      - name: \u2728 Run Backend Deploy Script\n        run: |\n          cd ~\n          sudo ./deploy-backend.sh\n")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\ubc31\uc5d4\ub4dc-\ubc30\ud3ec-\uc2a4\ud06c\ub9bd\ud2b8"},"\ubc31\uc5d4\ub4dc \ubc30\ud3ec \uc2a4\ud06c\ub9bd\ud2b8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\n\necho() {\n    command echo "$(date \'+%Y-%m-%d %H:%M:%S\') - $*"\n}\n\nPROJECT_PATH=/home/ubuntu/2023-celuveat\nPROJECT_NAME=backend\nPORT=8080\nBUILD_PATH=build/libs\nJAR_NAME=celuveat-0.0.1-SNAPSHOT.jar\n\n\necho "\\n \u2728   [$PROJECT_PATH] \uacbd\ub85c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.\\n"\ncd $PROJECT_PATH\n\necho " \u2728   develop-backend \ube0c\ub79c\uce58\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4!\\n"\ngit switch develop-backend\n\necho "\\n \u2728   [$PROJECT_NAME] \uacbd\ub85c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.\\n"\ncd ./$PROJECT_NAME\n\necho " \u2728    \ucd5c\uc2e0 \ucf54\ub4dc\ub97c PULL \ud569\ub2c8\ub2e4!\\n"\ngit pull\n\n\necho " \u2728   \ud504\ub85c\uc81d\ud2b8\ub97c \uc0c8\ub86d\uac8c \ube4c\ub4dc\ud569\ub2c8\ub2e4.\\n"\n./gradlew clean build\n\necho " \u2728   [$PORT] \ubc88 \ud3ec\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ucc3e\uc2b5\ub2c8\ub2e4...\\n"\n\nPID=$(lsof -i :$PORT -t)\n\nif [ -z $PID ]; then\n    echo " \ud83c\udf89   \uc2e4\ud589\uc911\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc5c6\uc5b4\uc11c \uace7\ubc14\ub85c \uc2e4\ud589\ud569\ub2c8\ub2e4.\\n"\n\nelse\n    echo " \u274c   \uc2e4\ud589\uc911\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc788\uc5b4\uc11c \uc774\ub97c \uc885\ub8cc\ud569\ub2c8\ub2e4. [PID = $PID]\\n"\n    kill -15 $PID\nfi\n\necho " \u2728   \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud558\ub294\ub370 \ud544\uc694\ud55c \ud658\uacbd\ubcc0\uc218\ub97c \uc138\ud305\ud569\ub2c8\ub2e4.\\n"\n\nexport SPRING_PROFILES_ACTIVE="dev"\nexport DB_DRIVER_CLASS_NAME="com.mysql.cj.jdbc.Driver"\nexport DB_URL="jdbc:mysql://[\ube44\ubc00\uc785\ub2c8\ub2f9]"\nexport DB_USERNAME="\ube44\ubc00\uc785\ub2c8\ub2f9"\nexport DB_PASSWORD="\ube44\ubc00\uc785\ub2c8\ub2f9"\nexport CORS_ALLOW_ORIGINS="http://127.0.0.1:3000"\n\necho " \ud83c\udf89   \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2e4\ud589\ud569\ub2c8\ub2e4~ \ud83c\udf89\\n"\n\ncurrent_date=$(date \'+%Y-%m-%dT%H-%M\')\nBACKEND_LOG_FILE="backend-log-$current_date.log"\nnohup java -jar $PROJECT_PATH/$PROJECT_NAME/$BUILD_PATH/$JAR_NAME > /home/ubuntu/log/backend/$BACKEND_LOG_FILE 2>&1 &\n')),(0,r.kt)("p",null,"\uc870\uae08 \ub354 \uace0\ub3c4\ud654\uac00 \ud544\uc694\ud558\uc9c0\ub9cc, \uc6b0\uc120\uc740 \uac04\ub2e8\ud558\uac8c\ub9cc \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\ud504\ub860\ud2b8\uc5d4\ub4dc-cd-workflow"},"\ud504\ub860\ud2b8\uc5d4\ub4dc CD workflow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"name: \ud83c\udf54 Celuveat frontend DEV CD \ud83c\udf54\n\non:\n  push:\n    branches:\n      - develop-frontend\n    paths:\n      - 'frontend/**'\n\njobs:\n  deploy-frontend:\n    runs-on: self-hosted\n\n    steps:\n      - name: \ud83c\udf54 .env \ud30c\uc77c \uc138\ud305\n        run: |\n          touch ~/frontend-env/.env\n          echo KAKAO_MAP_API_KEY=${{ secrets.KAKAO_MAP_API_KEY }} >> ~/frontend-env/.env\n\n      - name: \ud83c\udf54 Run Frontend Deploy Script\n        run: |\n          cd ~\n          sudo ./deploy-frontend.sh\n")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\ud504\ub860\ud2b8\uc5d4\ub4dc-\ubc30\ud3ec-\uc2a4\ud06c\ub9bd\ud2b8"},"\ud504\ub860\ud2b8\uc5d4\ub4dc \ubc30\ud3ec \uc2a4\ud06c\ub9bd\ud2b8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\n\necho() {\n    command echo "$(date \'+%Y-%m-%d %H:%M:%S\') - $*"\n}\n\nPROJECT_PATH=/home/ubuntu/2023-celuveat\nPROJECT_NAME=frontend\nPORT=3000\n\necho "\\n \u2728   [$PROJECT_PATH] \uacbd\ub85c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.\\n"\ncd $PROJECT_PATH\n\necho " \u2728   develop-frontend \ube0c\ub79c\uce58\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4!\\n"\ngit switch develop-frontend\n\n\necho "\\n \u2728   [$PROJECT_NAME] \uacbd\ub85c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.\\n"\ncd ./$PROJECT_NAME\n\necho " \u2728    \ucd5c\uc2e0 \ucf54\ub4dc\ub97c PULL \ud569\ub2c8\ub2e4!\\n"\ngit pull\n\necho " \u2728   yarn install & yarn build \ub85c \ube4c\ub4dc\ud569\ub2c8\ub2e4.\\n"\nyarn install\nyarn build\n\necho " \u2728   [$PORT] \ubc88 \ud3ec\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ucc3e\uc2b5\ub2c8\ub2e4...\\n"\n\nPID=$(lsof -i :$PORT -t)\n\nif [ -z $PID ]; then\n    echo " \ud83c\udf89   \uc2e4\ud589\uc911\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc5c6\uc5b4\uc11c \uace7\ubc14\ub85c \uc2e4\ud589\ud569\ub2c8\ub2e4.\\n"\n\nelse\n    echo " \u274c   \uc2e4\ud589\uc911\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc788\uc5b4\uc11c \uc774\ub97c \uc885\ub8cc\ud569\ub2c8\ub2e4. [PID = $PID]\\n"\n    kill -15 $PID\nfi\n\necho " \u2728   .env \ud30c\uc77c \ubcf5\uc0ac\\n"\ncd /home/ubuntu\nmv /home/ubuntu/frontend-env/.env $PROJECT_PATH/$PROJECT_NAME\n\ncd $PROJECT_PATH/$PROJECT_NAME\npwd\n\necho " \u2728   \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2e4\ud589\\n"\ncurrent_date=$(date \'+%Y-%m-%dT%H-%M\')\nFRONTEND_LOG_FILE="frontend-log-$current_date.log"\nnohup yarn start -- --port $PORT > /home/ubuntu/log/frontend/$FRONTEND_LOG_FILE 2>&1 &\n')),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,r.kt)("p",null,"\uc774\ub807\uac8c \ud574\uc11c \uc140\ub7fd\uc787 \ud300\uc758 CI/CD \uc544\ud0a4\ud14d\ucc98\ub97c \uc0b4\ud3b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4.\n\uc774\uac83\ubcf4\ub2e4 \ub354 \uc88b\uc740 \ub300\uc548\uc774 \uc788\uc744 \uc218\ub3c4 \uc788\uaca0\uc9c0\ub9cc, \ube60\ub974\uac8c \uac1c\ubc1c\uc744 \uc9c4\ud589\ud574\uc57c \ud558\ub294 \uc0c1\ud669\uacfc,\n\ud300\uc6d0 \ub300\ubd80\ubd84\uc774 \uc9c0\uc2dd\uc774 \ubcc4\ub85c \uc5c6\ub294 \uc0c1\ud0dc\uc5d0\uc11c \uc801\uc6a9\ud558\uae30 \uc218\uc6d4\ud55c \uad6c\uc870\ub97c \ucc3e\ub2e4 \ubcf4\ub2c8 \uc774\ub7ec\ud55c \uad6c\uc870\ub85c \uadc0\uacb0\ub41c \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubd80\uc871\ud55c \ub0b4\uc6a9\uc740 \ucc28\uadfc\ucc28\uadfc \ucd94\uac00\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.\n\uc77d\uc5b4\uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4 \ud83d\ude0a"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null))}s.isMDXComponent=!0},4230:(n,e,t)=>{t.d(e,{Z:()=>l});const l=t.p+"assets/images/cicd-0b8f701c62c4636d0c4cf297fd30b97e.png"},6623:(n,e,t)=>{t.d(e,{Z:()=>l});const l=t.p+"assets/images/jenkins\uae30\ubcf8-039744d2e2cf359b43a60cd14b2db878.png"},6149:(n,e,t)=>{t.d(e,{Z:()=>l});const l=t.p+"assets/images/jenkins\ucd5c\ub300-691b956046a510c315242fddfb619972.png"},1155:(n,e,t)=>{t.d(e,{Z:()=>l});const l=t.p+"assets/images/\uae43\ud5d9\uc561\uc158\uae30\ubcf8-976e5e5011d5d0d028955f1bf4455323.png"},9006:(n,e,t)=>{t.d(e,{Z:()=>l});const l=t.p+"assets/images/\uae43\ud5d9\uc561\uc158\ucd5c\ub300-a92ed23a5c1c9a7af66430a03bff0e53.png"},4580:(n,e,t)=>{t.d(e,{Z:()=>l});const l=t.p+"assets/images/\uc790\ubc14\uc124\uce58\uae30\ubcf8\uc0c1\ud0dc-33b84a983f038a4a89c441f175f2acf5.png"}}]);