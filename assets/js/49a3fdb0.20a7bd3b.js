"use strict";(self.webpackChunkceluveat_team_blog=self.webpackChunkceluveat_team_blog||[]).push([[7522],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},_=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(t),_=o,k=u["".concat(c,".").concat(_)]||u[_]||d[_]||a;return t?r.createElement(k,l(l({ref:n},p),{},{components:t})):r.createElement(k,l({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=_;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}_.displayName="MDXCreateElement"},1287:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=t(7462),o=(t(7294),t(3905));const a={date:new Date("2023-10-21T00:00:00.000Z"),authors:"kdkdhoho",title:"\uc140\ub7fd\uc787\uc758 \ubb34\uc911\ub2e8 \ubc30\ud3ec \uc801\uc6a9\uae30",description:"\uc140\ub7fd\uc787\uc758 \ubb34\uc911\ub2e8 \ubc30\ud3ec \uc801\uc6a9\uae30",keywords:["\ubb34\uc911\ub2e8\ubc30\ud3ec","Infra"],tags:["\ubb34\uc911\ub2e8\ubc30\ud3ec","Infra"]},l=void 0,s={permalink:"/team-blog/back-blog/doggy/zero_downtime_deploy/ZeroDowntimeDeploy",source:"@site/@backBlog/doggy/zero_downtime_deploy/ZeroDowntimeDeploy.mdx",title:"\uc140\ub7fd\uc787\uc758 \ubb34\uc911\ub2e8 \ubc30\ud3ec \uc801\uc6a9\uae30",description:"\uc140\ub7fd\uc787\uc758 \ubb34\uc911\ub2e8 \ubc30\ud3ec \uc801\uc6a9\uae30",date:"2023-10-21T00:00:00.000Z",formattedDate:"2023\ub144 10\uc6d4 21\uc77c",tags:[{label:"\ubb34\uc911\ub2e8\ubc30\ud3ec",permalink:"/team-blog/back-blog/tags/\ubb34\uc911\ub2e8\ubc30\ud3ec"},{label:"Infra",permalink:"/team-blog/back-blog/tags/infra"}],readingTime:6.34,hasTruncateMarker:!0,authors:[{name:"dongho Kim",url:"https://github.com/kdkdhoho",email:"hkim4410@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/66300965?v=4",key:"kdkdhoho"}],frontMatter:{date:"2023-10-21T00:00:00.000Z",authors:"kdkdhoho",title:"\uc140\ub7fd\uc787\uc758 \ubb34\uc911\ub2e8 \ubc30\ud3ec \uc801\uc6a9\uae30",description:"\uc140\ub7fd\uc787\uc758 \ubb34\uc911\ub2e8 \ubc30\ud3ec \uc801\uc6a9\uae30",keywords:["\ubb34\uc911\ub2e8\ubc30\ud3ec","Infra"],tags:["\ubb34\uc911\ub2e8\ubc30\ud3ec","Infra"]},nextItem:{title:"\uc548\uc804\ud55c S3 \ubc84\ud0b7 \uc815\ucc45 \uc124\uc815\ud558\uae30",permalink:"/team-blog/back-blog/royce/S3/S3_CloudFront_ACM"}},c={authorsImageUrls:[void 0]},i=[{value:"Rolling? \ube14\ub8e8/\uadf8\ub9b0?",id:"rolling-\ube14\ub8e8\uadf8\ub9b0",level:2}],p={toc:i},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc140\ub7fd\uc787\uc758 \ubb34\uc911\ub2e8 \ubc30\ud3ec \uc801\uc6a9\uae30"),(0,o.kt)("p",null,"\uc548\ub155\ud558\uc138\uc694. \uc140\ub7fd\uc787 \ud300 \ubc31\uc5d4\ub4dc \ub3c4\uae30\uc785\ub2c8\ub2e4. \ud83d\udc36",(0,o.kt)("br",null),"\n\uc774\ubc88 \uae00\uc5d0\uc120 \uc140\ub7fd\uc787\uc774 \uc5b4\ub5bb\uac8c \ubb34\uc911\ub2e8 \ubc30\ud3ec\ub97c \uc801\uc6a9\ud588\ub294 \uc9c0\uc5d0 \ub300\ud574 \uc791\uc131\ud558\uace0\uc790 \ud569\ub2c8\ub2e4.",(0,o.kt)("br",null),"\n\uadf8\ub7fc \ubc14\ub85c \uc2dc\uc791\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h1",{id:"\uc5b4\ub5bb\uac8c-\uc801\uc6a9\ud560\uae4c"},"\ud83e\udd14\uc5b4\ub5bb\uac8c \uc801\uc6a9\ud560\uae4c?"),(0,o.kt)("h2",{id:"rolling-\ube14\ub8e8\uadf8\ub9b0"},"Rolling? \ube14\ub8e8/\uadf8\ub9b0?"),(0,o.kt)("p",null,"\ud604\uc7ac \ubc30\ud3ec \uc11c\ubc84\ub85c EC2 \uc778\uc2a4\ud134\uc2a4 1\ub300\ub97c \uc0ac\uc6a9\uc911\uc785\ub2c8\ub2e4.",(0,o.kt)("br",null),"\n\ubb34\uc911\ub2e8 \ubc30\ud3ec\ub97c \uc704\ud574 \uc778\uc2a4\ud134\uc2a4\ub97c \ucd94\uac00\ub85c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc120 \uae30\uc220 \uac80\ud1a0 \uc694\uccad\uc744 \ubcf4\ub0b4\uc57c \ud558\uba70 \uadf8\ub3d9\uc548\uc758 \ub300\uae30 \uc2dc\uac04\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4. \ub610, \ucd94\uac00 \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud55c\uc9c0\ub3c4 \ubbf8\uc9c0\uc218\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub530\ub77c\uc11c \ud55c \ub300\uc758 \uc11c\ubc84\uc5d0\uc11c\ub3c4 \ucda9\ubd84\ud788 \ubb34\uc911\ub2e8 \ubc30\ud3ec\ub97c \uc9c4\ud589\ud560 \uc218 \uc788\ub2e4\uace0 \ud310\ub2e8\ud588\uae30\uc5d0 ",(0,o.kt)("strong",{parentName:"p"},"\ube14\ub8e8/\uadf8\ub9b0")," \ubc29\uc2dd\uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4."),(0,o.kt)("h1",{id:"\ubc30\ud3ec-\uc2dc\ub098\ub9ac\uc624"},"\ud83e\udd14\ubc30\ud3ec \uc2dc\ub098\ub9ac\uc624"),(0,o.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c 8080\ud3ec\ud2b8\uc640 8081\ud3ec\ud2b8\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc804\uccb4\uc801\uc778 \uc2dc\ub098\ub9ac\uc624\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\uadf8\ub9b0\uc774 ",(0,o.kt)("strong",{parentName:"li"},"\ubc30\ud3ec\ub420 \ud3ec\ud2b8(Idle Port)"),"\ub97c \ucc3e\ub294\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\uadf8\ub9b0\uc744 ",(0,o.kt)("strong",{parentName:"li"},"\ubc30\ud3ec"),"\ud55c\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\uadf8\ub9b0 ",(0,o.kt)("strong",{parentName:"li"},"\ud5ec\uc2a4 \uccb4\ud06c"),"\ub97c \uc9c4\ud589\ud55c\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\ubb38\uc81c\uac00 \uc5c6\ub2e4\uba74, ",(0,o.kt)("strong",{parentName:"li"},"Nginx\uc758 \ud3ec\ud2b8 \ud3ec\uc6cc\ub529 \uc124\uc815"),"\uc744 ",(0,o.kt)("strong",{parentName:"li"},"\uadf8\ub9b0\uc73c\ub85c \ubcc0\uacbd"),"\ud558\uace0 ",(0,o.kt)("strong",{parentName:"li"},"\ube14\ub8e8\ub97c \uc885\ub8cc"),"\ud55c\ub2e4.",(0,o.kt)("br",null),"\n\ubb38\uc81c\uac00 \uc788\ub2e4\uba74, ",(0,o.kt)("strong",{parentName:"li"},"\uadf8\ub9b0\uc744 \uc885\ub8cc\ud55c\ub2e4."))),(0,o.kt)("p",null,"\uc774\uc81c \uc704 \uc2dc\ub098\ub9ac\uc624\uc758 \uacfc\uc815\uc5d0 \ub300\ud574 \ub354 \uc790\uc138\ud788 \ub9d0\uc500\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"Idle Port\ub294 8080 \ud3ec\ud2b8\uc5d0 \uc694\uccad\uc744 \uc3d8\uc544\ubcf4\uace0 \uc751\ub2f5\uc758 \uacb0\uacfc\ub85c \ucc3e\uc2b5\ub2c8\ub2e4.",(0,o.kt)("br",null),"\n\ub9cc\uc57d \uc751\ub2f5 \ucf54\ub4dc\uac00 200\uc774\uba74 \ud604\uc7ac 8080 \ud3ec\ud2b8\uc5d0\uc11c \ube14\ub8e8\uac00 \ub3d9\uc791\uc911\uc778 \uc148\uc774\ub2c8 8081\ud3ec\ud2b8\uac00 Idle Port\uac00 \ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ub807\uac8c \ucc3e\uc740 \ud3ec\ud2b8\ub85c \uadf8\ub9b0\uc744 \ubc30\ud3ec\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uadf8 \ub2e4\uc74c \uadf8\ub9b0\uc758 \ud5ec\uc2a4 \uccb4\ud06c\ub97c \uc9c4\ud589\ud558\uae30 \uc704\ud574 30\ucd08\uc758 \ub300\uae30 \uc2dc\uac04\uc744 \uac00\uc9d1\ub2c8\ub2e4.",(0,o.kt)("br",null),"\n\uc774\uc720\ub294 \uace7\ubc14\ub85c \uc2e4\ud589\ud55c \ud5ec\uc2a4 \uccb4\ud06c \uc774\ud6c4\uc5d0 \uc608\uc0c1\uce58 \ubabb\ud55c \uc0c1\ud669\uc73c\ub85c \uadf8\ub9b0 \uc11c\ubc84\uac00 \uc8fd\uac8c\ub420 \uac00\ub2a5\uc131\uc744 \uc5fc\ub450\ud574\ub450\uc5c8\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ud604\uc7ac \uc2a4\ud504\ub9c1 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc11c\ubc84\uc5d0 \uc81c\ub300\ub85c \ub744\uc5b4\uc9c0\uae30\uae4c\uc9c0 \uc57d 20\ucd08\uc758 \uc2dc\uac04\uc774 \uc18c\uc694\ub418\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud5ec\uc2a4 \uccb4\ud06c \uacb0\uacfc, \uadf8\ub9b0 \uc11c\ubc84\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \ubc30\ud3ec\uac00 \ub410\ub2e4\uba74 Nginx\uc758 \ud3ec\ud2b8 \ud3ec\uc6cc\ub529 \uc124\uc815\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 5\ucd08\uc758 \ub300\uae30 \uc2dc\uac04\uc744 \uc8fc\uace0 \ube14\ub8e8 \uc11c\ubc84\ub97c \uc885\ub8cc\ud569\ub2c8\ub2e4.",(0,o.kt)("br",null),"\n\uadf8\ub9b0 \uc11c\ubc84\uc5d0 \ubb38\uc81c\uac00 \uc0dd\uaca8 \uc815\uc0c1\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uc9c0 \uc54a\uc558\ub2e4\uba74 \uc885\ub8cc\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'RESPONSE_CODE=$(curl -o /dev/null -w "%{http_code}" http://localhost:8080/celebs)\nif [ ${RESPONSE_CODE} = 200 ];\n    then\n        IDLE_PORT=8081\n        IDLE_MONITORING_PORT=18082\n        USED_PORT=8080\n    else\n        IDLE_PORT=8080\n        IDLE_MONITORING_PORT=18081\n        USED_PORT=8081\nfi\n\necho "IDLE_PORT=${IDLE_PORT}"\necho "IDLE_MONITORING_PORT=${IDLE_MONITORING_PORT}"\n\nIMAGE_TAG=back-prod-${APP_VERSION_TAG}\nDOCKER_CONTAINER_NAME=backend-${IDLE_PORT}\nDOCKER_HUB_REPOSITORY=celuveat/celuveat\nSERVER_LOG_DIR_PATH=~/log\nDOCKER_LOG_DIR_PATH=/app/logs\n\ndocker pull ${DOCKER_HUB_REPOSITORY}:${IMAGE_TAG}\ndocker run \\\n-d \\\n--name ${DOCKER_CONTAINER_NAME} \\\n-p $IDLE_PORT:8080 \\\n-p $IDLE_MONITORING_PORT:18080 \\\n-e "SPRING_PROFILES_ACTIVE=prod" \\\n-v ${SERVER_LOG_DIR_PATH}:${DOCKER_LOG_DIR_PATH} \\\n${DOCKER_HUB_REPOSITORY}:${IMAGE_TAG}\n\n# \uc0c8\ub85c \ub72c \ucee8\ud14c\uc774\ub108 \ud655\uc778\nsleep 30\nHEALTHY_CODE=$(curl -o /dev/null -w "%{http_code}" http://localhost:${IDLE_PORT}/celebs)\nif [ ${HEALTHY_CODE} != 200 ];\n    then\n            IDLE_CONTAINER_ID=$(docker ps -q --filter "publish=${IDLE_PORT}")\n            docker stop ${IDLE_CONTAINER_ID}\n            docker rm ${IDLE_CONTAINER_ID}\n            echo "TERMINATED"\n            exit 1\nfi\n\necho "set \\$service_url http://127.0.0.1:${IDLE_PORT};set \\$service_monitoring_url http://127.0.0.1:${IDLE_MONITORING_PORT};" | sudo tee /etc/nginx/conf.d/service-url.inc\nsudo service nginx reload\n\nsleep 5\nUSED_CONTAINER_ID=$(docker ps -q --filter "publish=${USED_PORT}")\ndocker stop ${USED_CONTAINER_ID}\ndocker rm ${USED_CONTAINER_ID}\ndocker image prune -f\n')),(0,o.kt)("h1",{id:"\ubaa8\ub2c8\ud130\ub9c1\uc740"},"\ud83e\udd14\ubaa8\ub2c8\ud130\ub9c1\uc740..?"),(0,o.kt)("p",null,"\uae30\uc874\uc5d0 \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc704\ud574 Spring Actuator\uc758 \ud3ec\ud2b8\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"18080")," \ud3ec\ud2b8\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.",(0,o.kt)("br",null),"\n\ubb34\uc911\ub2e8 \ubc30\ud3ec\ub97c \uc704\ud574, \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc704\ud55c \ud3ec\ud2b8\ub3c4 \ud568\uaed8 \ubcc0\uacbd\ud574\uc918\uc57c \ud569\ub2c8\ub2e4.",(0,o.kt)("br",null),"\n\ub530\ub77c\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"8080, 18080")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"8081, 18081")," \uc73c\ub85c \ubb36\uc5b4\uc11c \uad00\ub9ac\ud558\uae30\ub85c \uacb0\uc815\ud588\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub9c8\ucc2c\uac00\uc9c0\ub85c Nginx\uc5d0\uc11c \ud3ec\ud2b8 \ud3ec\uc6cc\ub529\uc744 \ucc98\ub9ac\ud574\uc90d\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uadf8\ub7f0\ub370 \uc5ec\uae30\uc11c \uc911\uc694\ud55c \uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4!!",(0,o.kt)("br",null),"\nNginx\uc5d0\uc11c Actuator\uc758 \ud3ec\ud2b8\ub97c \ud3ec\uc6cc\ub529\ud574\uc8fc\uae30 \uc704\ud574 18080 \ud3ec\ud2b8\ub97c listen\ud558\uc5ec \uc810\uc720\ud558\uac8c \ub429\ub2c8\ub2e4.",(0,o.kt)("br",null),"\n\uc989, Actuator\uc758 \ud3ec\ud2b8\ub85c 18080 \ud3ec\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc9c0 \ubabb\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uacb0\uacfc\uc801\uc73c\ub85c \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc704\ud55c \ud3ec\ud2b8\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"18081")," \uacfc ",(0,o.kt)("inlineCode",{parentName:"p"},"18082")," \ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4 !"),(0,o.kt)("h1",{id:"nginx-\uc124\uc815"},"\ud83e\udd14Nginx \uc124\uc815"),(0,o.kt)("p",null,"\uc544\ub798\ub294 Nginx \ud3ec\ud2b8 \ud3ec\uc6cc\ub529 \uc124\uc815 \uc2a4\ud06c\ub9bd\ud2b8\uc785\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"server {\n  listen 443 ssl;\n  server_name api.celuveat.com;\n\n  ssl_certificate /etc/letsencrypt/live/api.celuveat.com/fullchain.pem;\n  ssl_certificate_key /etc/letsencrypt/live/api.celuveat.com/privkey.pem;\n\n  include /etc/nginx/conf.d/service-url.inc;\n  location / {\n    proxy_pass $service_url;\n    proxy_set_header Host $http_host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto $scheme;\n  }\n}\n\nserver {\n  listen 18080;\n  include /etc/nginx/conf.d/service-url.inc;\n  location / {\n    proxy_pass $service_monitoring_url;\n    proxy_set_header Host $http_host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto $scheme;\n  }\n}\n")),(0,o.kt)("h1",{id:"github-actions-workflow"},"\ud83e\udd14Github Actions Workflow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"name: \u2728 Celuveat backend PROD CD \u2728\n\nenv:\n  PROFILE: prod\n  IMAGE_TAG: back-prod-${{ secrets.APP_VERSION_TAG }}\n  DOCKER_CONTAINER_NAME: backend\n  DOCKER_HUB_REPOSITORY: celuveat/celuveat\n  SERVER_LOG_DIR_PATH: ~/log\n  DOCKER_LOG_DIR_PATH: /app/logs\n\non:\n  workflow_dispatch:\n  push:\n    branches:\n      - main\n    paths:\n      - \"backend/**\"\n\njobs:\n  backend-docker-build-and-push:\n    runs-on: ubuntu-latest\n    defaults:\n      run:\n        working-directory: ./backend\n\n    steps:\n      - name: \u2728 Checkout repository\n        uses: actions/checkout@v3\n        with:\n          submodules: true\n          token: ${{ secrets.ACTION_TOKEN }}\n\n      - name: \u2728 JDK 17 \uc124\uc815\n        uses: actions/setup-java@v3\n        with:\n          java-version: '17'\n          distribution: 'temurin'\n\n      - name: \u2728 Gradle Caching\n        uses: actions/cache@v3\n        with:\n          path: |\n            ~/.gradle/caches\n            ~/.gradle/wrapper\n          key: ${{ runner.os }}-gradle-${{ hashFiles('**/*.gradle*', '**/gradle-wrapper.properties') }}\n          restore-keys: |\n            ${{ runner.os }}-gradle-\n\n      - name: \u2728 Gradlew \uad8c\ud55c \uc124\uc815\n        run: chmod +x ./gradlew\n\n      - name: \u2728 Jar \ud30c\uc77c \ube4c\ub4dc\n        run: ./gradlew bootJar\n\n      - name: \u2728 DockerHub\uc5d0 \ub85c\uadf8\uc778\n        uses: docker/login-action@v2\n        with:\n          username: ${{ secrets.DOCKER_HUB_USERNAME }}\n          password: ${{ secrets.DOCKER_HUB_PASSWORD }}\n\n      - name: \u2728 Docker Image \ube4c\ub4dc \ud6c4 DockerHub\uc5d0 Push\n        uses: docker/build-push-action@v4\n        with:\n          context: ./backend\n          file: ./backend/Dockerfile\n          push: true\n          platforms: linux/arm64\n          tags: ${{ env.DOCKER_HUB_REPOSITORY }}:${{ env.IMAGE_TAG }}\n\n  backend-docker-pull-and-run:\n    runs-on: [self-hosted, prod]\n    if: ${{ needs.backend-docker-build-and-push.result == 'success' }}\n    needs: [ backend-docker-build-and-push ]\n    steps:\n      - name: \u2728 \ubc30\ud3ec \uc2a4\ud06c\ub9bd\ud2b8 \uc2e4\ud589\n        run: |\n          export APP_VERSION_TAG=${{ secrets.APP_VERSION_TAG }}\n          sh /home/ubuntu/deploy.sh\n")))}d.isMDXComponent=!0}}]);