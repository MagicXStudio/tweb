(this.webpackJsonp=this.webpackJsonp||[]).push([[2],{10:function(e,t,s){"use strict";s.r(t),s.d(t,"langPack",(function(){return h})),s.d(t,"I18n",(function(){return d})),s.d(t,"i18n",(function(){return u})),s.d(t,"i18n_",(function(){return g})),s.d(t,"_i18n",(function(){return p})),s.d(t,"join",(function(){return f}));var n=s(9),r=s(19),i=s(63),a=s(14),o=s(45),c=s(3),l=s(8);const h={messageActionChatCreate:"ActionCreateGroup",messageActionChatEditTitle:"ActionChangedTitle",messageActionChatEditPhoto:"ActionChangedPhoto",messageActionChatEditVideo:"ActionChangedVideo",messageActionChatDeletePhoto:"ActionRemovedPhoto",messageActionChatReturn:"ActionAddUserSelf",messageActionChatReturnYou:"ActionAddUserSelfYou",messageActionChatJoined:"ActionAddUserSelfMega",messageActionChatJoinedYou:"ChannelMegaJoined",messageActionChatAddUser:"ActionAddUser",messageActionChatAddUsers:"ActionAddUser",messageActionChatLeave:"ActionLeftUser",messageActionChatLeaveYou:"YouLeft",messageActionChatDeleteUser:"ActionKickUser",messageActionChatJoinedByLink:"ActionInviteUser",messageActionPinMessage:"ActionPinnedNoText",messageActionContactSignUp:"Chat.Service.PeerJoinedTelegram",messageActionChannelCreate:"ActionCreateChannel",messageActionChannelEditTitle:"Chat.Service.Channel.UpdatedTitle",messageActionChannelEditPhoto:"Chat.Service.Channel.UpdatedPhoto",messageActionChannelEditVideo:"Chat.Service.Channel.UpdatedVideo",messageActionChannelDeletePhoto:"Chat.Service.Channel.RemovedPhoto",messageActionHistoryClear:"HistoryCleared",messageActionChannelMigrateFrom:"ActionMigrateFromGroup","messageActionPhoneCall.in_ok":"ChatList.Service.Call.incoming","messageActionPhoneCall.out_ok":"ChatList.Service.Call.outgoing","messageActionPhoneCall.in_missed":"ChatList.Service.Call.Missed","messageActionPhoneCall.out_missed":"ChatList.Service.Call.Cancelled",messageActionBotAllowed:"Chat.Service.BotPermissionAllowed"};var d;!function(e){let t,h;function d(){const t=c.a.langPackCode;return e.lastRequestedLangCode=t,Promise.all([s.e(7).then(s.bind(null,113)),s.e(8).then(s.bind(null,114))]).then(([e,s])=>{const n=[];g(e.default,n),g(s.default,n);return f({_:"langPackDifference",from_version:0,lang_code:t,strings:n,version:0,local:!0})})}function u(t){return e.requestedServerLanguage=!0,Promise.all([a.a.invokeApiCacheable("langpack.getLangPack",{lang_code:t,lang_pack:c.a.langPack}),a.a.invokeApiCacheable("langpack.getLangPack",{lang_code:t,lang_pack:"android"}),s.e(7).then(s.bind(null,113)),s.e(8).then(s.bind(null,114)),e.polyfillPromise])}function g(e,t=[]){for(const s in e){const n=e[s];"string"==typeof n?t.push({_:"langPackString",key:s,value:n}):t.push(Object.assign({_:"langPackStringPluralized",key:s},n))}return t}function p(t){return e.lastRequestedLangCode=t,u(t).then(([e,t,s,n,r])=>{let i=[];[s,n].forEach(e=>{g(e.default,i)}),i=i.concat(e.strings);for(const e of t.strings)i.push(e);return e.strings=i,f(e)})}function f(e){return e.appVersion=c.a.langPackVersion,o.a.set({langPack:e}).then(()=>(m(e),e))}function m(s){if(s.lang_code!==e.lastRequestedLangCode)return;t=new Intl.PluralRules(s.lang_code),e.strings.clear();for(const t of s.strings)e.strings.set(t.key,t);l.default.broadcast("language_change");Array.from(document.querySelectorAll(".i18n")).forEach(t=>{const s=e.weakMap.get(t);s&&s.update()})}function k(e,t,s={i:0}){let n=[];let r=0;return e.replace(/(\*\*)(.+?)\1|(\n)|un\d|%\d\$.|%./g,(e,i,a,o,c,l)=>{if(n.push(l.slice(r,c)),i)switch(i){case"**":{const e=document.createElement("b");e.append(...k(a,t,s)),n.push(e);break}}else o?n.push(document.createElement("br")):t&&n.push(t[s.i++]);return r=c+e.length,""}),r!==e.length&&n.push(e.slice(r)),n}function v(s,n=!1,r){const i=e.strings.get(s);let a;if(i)if("langPackStringPluralized"===i._&&(null==r?void 0:r.length)){let e=r[0];"string"==typeof e&&(e=+e.replace(/\D/g,""));a=i[t.select(e)+"_value"]||i.other_value}else a="langPackString"===i._?i.value:s;else a=s;if(n){if(null==r?void 0:r.length){const e=/un\d|%\d\$.|%./g;let t=0;a=a.replace(e,(e,s,n)=>""+r[t++])}return a}return k(a,r)}e.strings=new Map,e.requestedServerLanguage=!1,e.getCacheLangPack=function(){return h||(h=Promise.all([o.a.get("langPack"),e.polyfillPromise]).then(([t])=>t?(n.b,e.lastRequestedLangCode||(e.lastRequestedLangCode=t.lang_code),m(t),t):d()).finally(()=>{h=void 0}))},e.loadLocalLangPack=d,e.loadLangPack=u,e.getStrings=function(e,t){return a.a.invokeApi("langpack.getStrings",{lang_pack:c.a.langPack,lang_code:e,keys:t})},e.formatLocalStrings=g,e.getLangPack=p,e.saveLangPack=f,e.polyfillPromise="undefined"!=typeof Intl&&void 0!==Intl.PluralRules?Promise.resolve():s.e(25).then(s.bind(null,117)).then(e=>{window.Intl=Object.assign("undefined"!=typeof Intl?Intl:{},e.default)}),e.applyLangPack=m,e.superFormatter=k,e.format=v,e.weakMap=new WeakMap;class b{constructor(t){this.property="innerHTML",this.element=t.element||document.createElement("span"),this.element.classList.add("i18n"),this.update(t),e.weakMap.set(this.element,this)}}class w extends b{update(e){if(Object(r.g)(this,e),"innerHTML"===this.property)this.element.textContent="",this.element.append(...v(this.key,!1,this.args));else{const e=this.element[this.property],t=v(this.key,!0,this.args);void 0===e?this.element.dataset[this.property]=t:this.element[this.property]=t}}}e.IntlElement=w;e.IntlDateElement=class extends b{update(t){Object(r.g)(this,t);const s=new Intl.DateTimeFormat(e.lastRequestedLangCode+"-u-hc-h23",this.options);this.element[this.property]=Object(i.a)(s.format(this.date))}},e.i18n=function(e,t){return new w({key:e,args:t}).element},e.i18n_=function(e){return new w(e).element},e._i18n=function(e,t,s,n){return new w({element:e,key:t,args:s,property:n}).element}}(d||(d={})),t.default=d;const u=d.i18n,g=d.i18n_,p=d._i18n;function f(e,t=!0){const s=e.slice(0,1);for(let n=1;n<e.length;++n){const r=e.length-1===n&&t?"WordDelimiterLast":"WordDelimiter";s.push(u(r)),s.push(e[n])}return s}n.a.I18n=d},107:function(e,t,s){"use strict";function n(){return new Worker(s.p+"webp.worker.e2f95252e005269b462d.bundle.worker.js")}var r=s(9),i=s(24),a=s(14);const o=new class{constructor(){this.convertPromises={}}init(){this.worker=new n,this.worker.addEventListener("message",e=>{const t=e.data.payload;if(0===t.fileName.indexOf("main-")){const e=this.convertPromises[t.fileName];e&&(t.bytes?e.resolve(t.bytes):e.reject(),delete this.convertPromises[t.fileName])}else a.a.postMessage(e.data)})}postMessage(e){this.init&&(this.init(),this.init=null),this.worker.postMessage(e)}isWebpSupported(){return void 0===this.isWebpSupportedCache&&(this.isWebpSupportedCache=document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp")),this.isWebpSupportedCache}convert(e,t){if(e="main-"+e,this.convertPromises.hasOwnProperty(e))return this.convertPromises[e];const s=Object(i.a)();return this.postMessage({type:"convertWebp",payload:{fileName:e,bytes:t}}),this.convertPromises[e]=s}};r.a.webpWorkerController=o;t.a=o},109:function(e,t,s){"use strict";var n=s(9),r=s(54),i=s(23),a=s(8),o=s(45),c=s(14);const l=new class{constructor(){this.log=Object(i.b)("INSTANCE"),this.clearInstance=()=>{this.masterInstance&&!this.deactivated&&(this.log.warn("clear master instance"),o.a.delete("xt_instance"))},this.deactivateInstance=()=>{if(this.masterInstance||this.deactivated)return!1;this.log("deactivate"),this.deactivateTimeout=0,this.deactivated=!0,this.clearInstance(),a.default.idle.deactivated=!0,a.default.dispatchEvent("instance_deactivated")},this.checkInstance=(e=a.default.idle&&a.default.idle.isIDLE)=>{if(this.deactivated)return!1;const t=Date.now(),s={id:this.instanceID,idle:e,time:t};o.a.get("xt_instance",!1).then(n=>{!e||!n||n.id===this.instanceID||n.time<t-2e4?(o.a.set({xt_instance:s}),this.masterInstance||(c.a.startAll(),this.initial?this.log.warn("now master instance",s):this.initial=!0,this.masterInstance=!0),this.deactivateTimeout&&(clearTimeout(this.deactivateTimeout),this.deactivateTimeout=0)):this.masterInstance&&(c.a.stopAll(),this.log.warn("now idle instance",s),this.deactivateTimeout||(this.deactivateTimeout=window.setTimeout(this.deactivateInstance,3e4)),this.masterInstance=!1)})}}start(){if(!this.started){this.started=!0,this.reset(),a.default.addEventListener("idle",this.checkInstance),setInterval(this.checkInstance,5e3),this.checkInstance();try{document.documentElement.addEventListener("beforeunload",this.clearInstance)}catch(e){}}}reset(){this.instanceID=Object(r.a)(4294967295),this.masterInstance=!1,this.deactivateTimeout&&clearTimeout(this.deactivateTimeout),this.deactivateTimeout=0,this.deactivated=!1,this.initial=!1}};n.a&&(n.a.singleInstance=l),t.a=l},14:function(e,t,s){"use strict";function n(){return new Worker(s.p+"mtproto.worker.a1f719321ba6d33601dd.bundle.worker.js")}var r=s(19),i=s(70);var a=s(23),o=s(8),c=s(107),l=s(9),h=s(59),d=s(33);class u extends d.a{constructor(e,t,s){super(),this.dcId=e,this.url=t,this.debug=h.a.debug&&!1,this.handleOpen=()=>{this.log("opened"),this.debug&&this.log.debug("sending init packet"),this.dispatchEvent("open")},this.handleError=e=>{this.log.error("handleError",e),this.close()},this.handleClose=()=>{this.log("closed"),this.removeListeners(),this.dispatchEvent("close")},this.handleMessage=e=>{this.debug&&this.log.debug("<-","handleMessage",e.data.byteLength),this.dispatchEvent("message",e.data)},this.send=e=>{this.debug&&this.log.debug("-> body length to send:",e.length),this.ws.send(e)};let n=a.a.Error|a.a.Log;return this.debug&&(n|=a.a.Debug),this.log=Object(a.b)("WS-"+e+s,n),this.log("constructor"),this.connect(),this}removeListeners(){this.ws&&(this.ws.removeEventListener("open",this.handleOpen),this.ws.removeEventListener("close",this.handleClose),this.ws.removeEventListener("error",this.handleError),this.ws.removeEventListener("message",this.handleMessage),this.ws=void 0)}connect(){this.ws=new WebSocket(this.url,"binary"),this.ws.binaryType="arraybuffer",this.ws.addEventListener("open",this.handleOpen),this.ws.addEventListener("close",this.handleClose),this.ws.addEventListener("error",this.handleError),this.ws.addEventListener("message",this.handleMessage)}close(){if(this.ws){this.log.error("close execution");try{this.ws.close()}catch(e){}this.handleClose()}}}var g=s(115),p=s(109);const f=new class extends class{sha1Hash(e){return this.performTaskWorker("sha1-hash",e)}sha256Hash(e){return this.performTaskWorker("sha256-hash",e)}pbkdf2(e,t,s){return this.performTaskWorker("pbkdf2",e,t,s)}aesEncrypt(e,t,s){return this.performTaskWorker("aes-encrypt",Object(i.f)(e),Object(i.f)(t),Object(i.f)(s))}aesDecrypt(e,t,s){return this.performTaskWorker("aes-decrypt",e,t,s).then(e=>Object(i.f)(e))}rsaEncrypt(e,t){return this.performTaskWorker("rsa-encrypt",e,t)}factorize(e){return this.performTaskWorker("factorize",[...e])}modPow(e,t,s){return this.performTaskWorker("mod-pow",e,t,s)}gzipUncompress(e,t){return this.performTaskWorker("gzipUncompress",e,t)}computeSRP(e,t,s=!1){return this.performTaskWorker("computeSRP",e,t,s)}}{constructor(){super(),this.afterMessageIdTemp=0,this.taskId=0,this.awaiting={},this.pending=[],this.updatesProcessor=null,this.log=Object(a.b)("API-PROXY"),this.hashes={},this.apiPromisesSingle={},this.apiPromisesCacheable={},this.isSWRegistered=!0,this.debug=l.b,this.sockets=new Map,this.taskListeners={},this.onWorkerMessage=e=>{const t=e.data;if(!Object(r.f)(t))return;const s=this.taskListeners[t.type];s?s(t):t.update?this.updatesProcessor&&this.updatesProcessor(t.update):t.progress?o.default.broadcast("download_progress",t.progress):(t.hasOwnProperty("result")||t.hasOwnProperty("error"))&&this.finalizeTask(t.taskId,t.result,t.error)},this.log("constructor"),p.a.start(),this.registerServiceWorker(),this.addTaskListener("clear",()=>{g.a.deleteDatabase().finally(()=>{location.reload()})}),this.addTaskListener("connectionStatusChange",e=>{o.default.broadcast("connection_status_change",e.payload)}),this.addTaskListener("convertWebp",e=>{c.a.postMessage(e)}),this.addTaskListener("socketProxy",e=>{const t=e.payload,s=t.id;if("send"===t.type){this.sockets.get(s).send(t.payload)}else if("close"===t.type){this.sockets.get(s).close()}else if("setup"===t.type){const e=new u(t.payload.dcId,t.payload.url,t.payload.logSuffix),n=()=>{this.postMessage({type:"socketProxy",payload:{type:"open",id:s}})},r=()=>{this.postMessage({type:"socketProxy",payload:{type:"close",id:s}}),e.removeEventListener("open",n),e.removeEventListener("close",r),e.removeEventListener("message",i),this.sockets.delete(s)},i=e=>{this.postMessage({type:"socketProxy",payload:{type:"message",id:s,payload:e}})};e.addEventListener("open",n),e.addEventListener("close",r),e.addEventListener("message",i),this.sockets.set(s,e)}}),this.registerWorker()}isServiceWorkerOnline(){return this.isSWRegistered}registerServiceWorker(){if(!("serviceWorker"in navigator))return;const e=navigator.serviceWorker;e.register("./sw.js",{scope:"./"}).then(e=>{this.log("SW registered",e),this.isSWRegistered=!0;(e.installing||e.waiting||e.active).addEventListener("statechange",e=>{this.log("SW statechange",e)})},e=>{this.isSWRegistered=!1,this.log.error("SW registration failed!",e),this.onServiceWorkerFail&&this.onServiceWorkerFail()}),e.addEventListener("controllerchange",()=>{this.log.warn("controllerchange"),this.releasePending(),e.controller.addEventListener("error",e=>{this.log.error("controller error:",e)})}),e.addEventListener("message",e=>{const t=e.data;Object(r.f)(t)&&this.postMessage(t)}),e.addEventListener("messageerror",e=>{this.log.error("SW messageerror:",e)})}onWorkerFirstMessage(e){if(!this.worker){this.worker=e,this.log("set webWorker"),this.postMessage=this.worker.postMessage.bind(this.worker);const t=c.a.isWebpSupported();this.log("WebP supported:",t),this.postMessage({type:"webpSupport",payload:t}),this.releasePending()}}addTaskListener(e,t){this.taskListeners[e]=t}registerWorker(){const e=new n;e.addEventListener("message",this.onWorkerFirstMessage.bind(this,e),{once:!0}),e.addEventListener("message",this.onWorkerMessage),e.addEventListener("error",e=>{this.log.error("WORKER ERROR",e)})}finalizeTask(e,t,s){const n=this.awaiting[e];void 0!==n&&(this.debug&&this.log.debug("done",n.taskName,t,s),s?n.reject(s):n.resolve(t),delete this.awaiting[e])}performTaskWorker(e,...t){return this.debug&&this.log.debug("start",e,t),new Promise((s,n)=>{this.awaiting[this.taskId]={resolve:s,reject:n,taskName:e};const r={task:e,taskId:this.taskId,args:t};this.pending.push(r),this.releasePending(),this.taskId++})}releasePending(){this.postMessage&&(this.debug&&this.log.debug("releasing tasks, length:",this.pending.length),this.pending.forEach(e=>{this.postMessage(e)}),this.debug&&this.log.debug("released tasks"),this.pending.length=0)}setUpdatesProcessor(e){this.updatesProcessor=e}invokeApi(e,t={},s={}){return this.performTaskWorker("invokeApi",e,t,s)}invokeApiAfter(e,t={},s={}){let n=s;return n.prepareTempMessageId=""+ ++this.afterMessageIdTemp,n=Object.assign({},s),s.messageId=n.prepareTempMessageId,this.invokeApi(e,t,n)}invokeApiHashable(e,t={},s={}){const n=JSON.stringify(t);let r;return this.hashes[e]&&(r=this.hashes[e][n],r&&(t.hash=r.hash)),this.invokeApi(e,t,s).then(t=>{if(t._.includes("NotModified"))return this.debug&&this.log.warn("NotModified saved!",e,n),r.result;if(t.hash){const s=t.hash;this.hashes[e]||(this.hashes[e]={}),this.hashes[e][n]={hash:s,result:t}}return t})}invokeApiSingle(e,t={},s={}){const n=e+"-"+JSON.stringify(t);return this.apiPromisesSingle[n]?this.apiPromisesSingle[n]:this.apiPromisesSingle[n]=this.invokeApi(e,t,s).finally(()=>{delete this.apiPromisesSingle[n]})}invokeApiCacheable(e,t={},s={}){var n;const r=null!==(n=this.apiPromisesCacheable[e])&&void 0!==n?n:this.apiPromisesCacheable[e]={},i=JSON.stringify(t),a=r[i];if(a&&(!s.override||!a.fulfilled))return a.promise;let o;s.override&&(a&&a.timeout&&(clearTimeout(a.timeout),delete a.timeout),delete s.override),s.cacheSeconds&&(o=window.setTimeout(()=>{delete r[i]},1e3*s.cacheSeconds),delete s.cacheSeconds);const c=this.invokeApi(e,t,s);return r[i]={timestamp:Date.now(),fulfilled:!1,timeout:o,promise:c,params:t},c}clearCache(e,t){const s=this.apiPromisesCacheable[e];if(s)for(const e in s){const n=s[e];t(n.params)&&(n.timeout&&clearTimeout(n.timeout),delete s[e])}}setBaseDcId(e){return this.performTaskWorker("setBaseDcId",e)}setQueueId(e){return this.performTaskWorker("setQueueId",e)}setUserAuth(e){return o.default.broadcast("user_auth",e),this.performTaskWorker("setUserAuth",e)}getNetworker(e,t){return this.performTaskWorker("getNetworker",e,t)}logOut(){return this.performTaskWorker("logOut")}cancelDownload(e){return this.performTaskWorker("cancelDownload",e)}downloadFile(e){return this.performTaskWorker("downloadFile",e)}uploadFile(e){return this.performTaskWorker("uploadFile",e)}toggleStorage(e){return this.performTaskWorker("toggleStorage",e)}stopAll(){return this.performTaskWorker("stopAll")}startAll(){return this.performTaskWorker("startAll")}};l.a.apiManagerProxy=f;t.a=f},54:function(e,t,s){"use strict";function n(e){return Math.floor(Math.random()*e)}function r(){return""+n(4294967295)+n(16777215)}s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return r}))},63:function(e,t,s){"use strict";function n(e,t,s=t+10){return(e=e.trim()).length>s&&(e=e.slice(0,t)+"..."),e}function r(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function i(e){return e.replace(/&/g,"&amp;").replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,e=>"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";").replace(/([^\#-~| |!])/g,e=>"&#"+e.charCodeAt(0)+";").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function a(e,t){if(e.length<t)return[e];let s=0,n=0,r=0;const i=[],o=o=>{let c=e.slice(n,o);const l=r++;if(c.length>t){a(c.slice(t),t).forEach(e=>{i[r++]=e}),c=c.slice(0,t)}n=o,s=0,i[l]=(i[l]||"")+c};let c=0;for(;;){let n=e.indexOf(" ",c);if(-1===n){c!==e.length-1&&o();break}n+=" ".length;const r=n-c;s+r>t&&o(s),c=n,s+=r}return i}s.d(t,"f",(function(){return n})),s.d(t,"e",(function(){return r})),s.d(t,"d",(function(){return i})),s.d(t,"g",(function(){return a})),s.d(t,"b",(function(){return o})),s.d(t,"c",(function(){return c})),s.d(t,"a",(function(){return l}));function o(e){const t=e.replace("input","");return t[0].toLowerCase()+t.slice(1)}function c(e){return e="input"+(e=e[0].toUpperCase()+e.slice(1))}function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}},70:function(e,t,s){"use strict";function n(e){e=e||[];let t=[];for(let s=0;s<e.length;++s)t.push((e[s]<16?"0":"")+(e[s]||0).toString(16));return t.join("")}function r(e){const t=e.length;let s=0,n=[];t%2&&(n.push(parseInt(e.charAt(0),16)),++s);for(let r=s;r<t;r+=2)n.push(parseInt(e.substr(r,2),16));return n}function i(e){let t,s="";for(let n=e.length,r=0,i=0;i<n;++i)t=i%3,r|=e[i]<<(16>>>t&24),2!==t&&n-i!=1||(s+=String.fromCharCode(a(r>>>18&63),a(r>>>12&63),a(r>>>6&63),a(63&r)),r=0);return s.replace(/A(?=A$|$)/g,"=")}function a(e){return e<26?e+65:e<52?e+71:e<62?e-4:62===e?43:63===e?47:65}function o(e,t){const s=e.length;if(s!==t.length)return!1;for(let n=0;n<s;++n)if(e[n]!==t[n])return!1;return!0}function c(e){return e instanceof ArrayBuffer?e:void 0!==e.buffer&&e.buffer.byteLength===e.length*e.BYTES_PER_ELEMENT?e.buffer:new Uint8Array(e).buffer}function l(...e){let t=0;e.forEach(e=>t+=e.byteLength||e.length);const s=new Uint8Array(t);let n=0;return e.forEach(e=>{s.set(e instanceof ArrayBuffer?new Uint8Array(e):e,n),n+=e.byteLength||e.length}),s}s.d(t,"e",(function(){return n})),s.d(t,"c",(function(){return r})),s.d(t,"d",(function(){return i})),s.d(t,"b",(function(){return o})),s.d(t,"f",(function(){return c})),s.d(t,"a",(function(){return l}))}}]);
//# sourceMappingURL=2.7a83f118985841f3f5f4.chunk.js.map