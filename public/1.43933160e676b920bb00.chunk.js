(this.webpackJsonp=this.webpackJsonp||[]).push([[1],{109:function(e,t,s){"use strict";const i=new class{reload(){try{location.reload()}catch(e){}}close(){try{window.close()}catch(e){}}focus(){window.focus()}};t.a=i},117:function(e,t,s){"use strict";function i(){return new Worker(s.p+"webp.worker.eafb4e17dc09d5858dc8.bundle.worker.js")}var n=s(26),r=s(38),a=s(27);const o=new class{constructor(){this.convertPromises={}}init(){this.worker=new i,this.worker.addEventListener("message",e=>{const t=e.data.payload;if(0===t.fileName.indexOf("main-")){const e=this.convertPromises[t.fileName];e&&(t.bytes?e.resolve(t.bytes):e.reject(),delete this.convertPromises[t.fileName])}else a.a.postMessage(e.data)})}postMessage(e){this.init&&(this.init(),this.init=null),this.worker.postMessage(e)}isWebpSupported(){return void 0===this.isWebpSupportedCache&&(this.isWebpSupportedCache=document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp")),this.isWebpSupportedCache}convert(e,t){if(e="main-"+e,this.convertPromises.hasOwnProperty(e))return this.convertPromises[e];const s=Object(r.a)();return this.postMessage({type:"convertWebp",payload:{fileName:e,bytes:t}}),this.convertPromises[e]=s}};n.a.webpWorkerController=o;t.a=o},123:function(e,t,s){"use strict";var i=s(26),n=s(67),r=s(36),a=s(12),o=s(62),c=s(27);const l=new class{constructor(){this.log=Object(r.b)("INSTANCE"),this.clearInstance=()=>{this.masterInstance&&!this.deactivated&&(this.log.warn("clear master instance"),o.a.delete("xt_instance"))},this.deactivateInstance=()=>{if(this.masterInstance||this.deactivated)return!1;this.log("deactivate"),this.deactivateTimeout=0,this.deactivated=!0,this.clearInstance(),a.default.idle.deactivated=!0,a.default.dispatchEvent("instance_deactivated")},this.checkInstance=(e=a.default.idle&&a.default.idle.isIDLE)=>{if(this.deactivated)return!1;const t=Date.now(),s={id:this.instanceID,idle:e,time:t};o.a.get("xt_instance",!1).then(i=>{!e||!i||i.id===this.instanceID||i.time<t-2e4?(o.a.set({xt_instance:s}),this.masterInstance||(c.a.startAll(),this.initial?this.log.warn("now master instance",s):this.initial=!0,this.masterInstance=!0),this.deactivateTimeout&&(clearTimeout(this.deactivateTimeout),this.deactivateTimeout=0)):this.masterInstance&&(c.a.stopAll(),this.log.warn("now idle instance",s),this.deactivateTimeout||(this.deactivateTimeout=window.setTimeout(this.deactivateInstance,3e4)),this.masterInstance=!1)})}}start(){if(!this.started){this.started=!0,this.reset(),a.default.addEventListener("idle",this.checkInstance),setInterval(this.checkInstance,5e3),this.checkInstance();try{document.documentElement.addEventListener("beforeunload",this.clearInstance)}catch(e){}}}reset(){this.instanceID=Object(n.a)(4294967295),this.masterInstance=!1,this.deactivateTimeout&&clearTimeout(this.deactivateTimeout),this.deactivateTimeout=0,this.deactivated=!1,this.initial=!1}activateInstance(){this.deactivated&&(this.reset(),this.checkInstance(!1),a.default.dispatchEvent("instance_activated"))}};i.a&&(i.a.singleInstance=l),t.a=l},13:function(e,t,s){"use strict";s.r(t),s.d(t,"langPack",(function(){return h})),s.d(t,"I18n",(function(){return u})),s.d(t,"i18n",(function(){return d})),s.d(t,"i18n_",(function(){return g})),s.d(t,"_i18n",(function(){return p})),s.d(t,"join",(function(){return f}));var i=s(26),n=s(30),r=s(72),a=s(27),o=s(77),c=s(5),l=s(12);const h={messageActionChatCreate:"ActionCreateGroup",messageActionChatEditTitle:"ActionChangedTitle",messageActionChatEditPhoto:"ActionChangedPhoto",messageActionChatEditVideo:"ActionChangedVideo",messageActionChatDeletePhoto:"ActionRemovedPhoto",messageActionChatReturn:"ActionAddUserSelf",messageActionChatReturnYou:"ActionAddUserSelfYou",messageActionChatJoined:"ActionAddUserSelfMega",messageActionChatJoinedYou:"ChannelMegaJoined",messageActionChatAddUser:"ActionAddUser",messageActionChatAddUsers:"ActionAddUser",messageActionChatLeave:"ActionLeftUser",messageActionChatLeaveYou:"YouLeft",messageActionChatDeleteUser:"ActionKickUser",messageActionChatJoinedByLink:"ActionInviteUser",messageActionPinMessage:"ActionPinnedNoText",messageActionContactSignUp:"Chat.Service.PeerJoinedTelegram",messageActionChannelCreate:"ActionCreateChannel",messageActionChannelEditTitle:"Chat.Service.Channel.UpdatedTitle",messageActionChannelEditPhoto:"Chat.Service.Channel.UpdatedPhoto",messageActionChannelEditVideo:"Chat.Service.Channel.UpdatedVideo",messageActionChannelDeletePhoto:"Chat.Service.Channel.RemovedPhoto",messageActionHistoryClear:"HistoryCleared",messageActionChannelMigrateFrom:"ActionMigrateFromGroup","messageActionPhoneCall.in_ok":"ChatList.Service.Call.incoming","messageActionPhoneCall.out_ok":"ChatList.Service.Call.outgoing","messageActionPhoneCall.in_missed":"ChatList.Service.Call.Missed","messageActionPhoneCall.out_missed":"ChatList.Service.Call.Cancelled","messageActionGroupCall.started":"ActionGroupCallJustStarted","messageActionGroupCall.started_by":"ActionGroupCallStarted","messageActionGroupCall.started_byYou":"ActionGroupCallStartedByYou","messageActionGroupCall.ended_by":"Chat.Service.VoiceChatFinished","messageActionGroupCall.ended_byYou":"Chat.Service.VoiceChatFinishedYou",messageActionBotAllowed:"Chat.Service.BotPermissionAllowed"};var u;!function(e){let t,h;function u(){const t=c.a.langPackCode;return e.lastRequestedLangCode=t,Promise.all([s.e(8).then(s.bind(null,125)),s.e(9).then(s.bind(null,126))]).then(([e,s])=>{const i=[];g(e.default,i),g(s.default,i);return f({_:"langPackDifference",from_version:0,lang_code:t,strings:i,version:0,local:!0})})}function d(t){return e.requestedServerLanguage=!0,Promise.all([a.a.invokeApiCacheable("langpack.getLangPack",{lang_code:t,lang_pack:c.a.langPack}),a.a.invokeApiCacheable("langpack.getLangPack",{lang_code:t,lang_pack:"android"}),s.e(8).then(s.bind(null,125)),s.e(9).then(s.bind(null,126)),e.polyfillPromise])}function g(e,t=[]){for(const s in e){const i=e[s];"string"==typeof i?t.push({_:"langPackString",key:s,value:i}):t.push(Object.assign({_:"langPackStringPluralized",key:s},i))}return t}function p(t){return e.lastRequestedLangCode=t,d(t).then(([e,t,s,i,n])=>{let r=[];[s,i].forEach(e=>{g(e.default,r)}),r=r.concat(e.strings);for(const e of t.strings)r.push(e);return e.strings=r,f(e)})}function f(e){return e.appVersion=c.a.langPackVersion,o.a.set({langPack:e}).then(()=>(m(e),e))}function m(s){if(s.lang_code!==e.lastRequestedLangCode)return;try{t=new Intl.PluralRules(s.lang_code)}catch(e){console.error("pluralRules error",e),t=new Intl.PluralRules(s.lang_code.split("-",1)[0])}e.strings.clear();for(const t of s.strings)e.strings.set(t.key,t);l.default.dispatchEvent("language_change",s.lang_code);Array.from(document.querySelectorAll(".i18n")).forEach(t=>{const s=e.weakMap.get(t);s&&s.update()})}function v(e,t,s={i:0}){let i=[];let n=0;return e.replace(/(\*\*)(.+?)\1|(\n)|un\d|%\d\$.|%./g,(e,r,a,o,c,l)=>{if(i.push(l.slice(n,c)),r)switch(r){case"**":{const e=document.createElement("b");e.append(...v(a,t,s)),i.push(e);break}}else o?i.push(document.createElement("br")):t&&i.push(t[s.i++]);return n=c+e.length,""}),n!==e.length&&i.push(e.slice(n)),i}function b(s,i=!1,n){const r=e.strings.get(s);let a;if(r)if("langPackStringPluralized"===r._&&(null==n?void 0:n.length)){let e=n[0];"string"==typeof e&&(e=+e.replace(/\D/g,""));a=r[t.select(e)+"_value"]||r.other_value}else a="langPackString"===r._?r.value:s;else a=s;if(i){if(null==n?void 0:n.length){const e=/un\d|%\d\$.|%./g;let t=0;a=a.replace(e,(e,s,i)=>""+n[t++])}return a}return v(a,n)}e.strings=new Map,e.requestedServerLanguage=!1,e.getCacheLangPack=function(){return h||(h=Promise.all([o.a.get("langPack"),e.polyfillPromise]).then(([t])=>t?(i.b,e.lastRequestedLangCode||(e.lastRequestedLangCode=t.lang_code),m(t),t):u()).finally(()=>{h=void 0}))},e.loadLocalLangPack=u,e.loadLangPack=d,e.getStrings=function(e,t){return a.a.invokeApi("langpack.getStrings",{lang_pack:c.a.langPack,lang_code:e,keys:t})},e.formatLocalStrings=g,e.getLangPack=p,e.saveLangPack=f,e.polyfillPromise="undefined"!=typeof Intl&&void 0!==Intl.PluralRules?Promise.resolve():s.e(28).then(s.bind(null,128)).then(e=>{window.Intl=Object.assign("undefined"!=typeof Intl?Intl:{},e.default)}),e.applyLangPack=m,e.superFormatter=v,e.format=b,e.weakMap=new WeakMap;class k{constructor(t){this.property="innerHTML",this.element=t.element||document.createElement("span"),this.element.classList.add("i18n"),this.update(t),e.weakMap.set(this.element,this)}}class y extends k{update(e){if(Object(n.g)(this,e),"innerHTML"===this.property)this.element.textContent="",this.element.append(...b(this.key,!1,this.args));else{const e=this.element[this.property],t=b(this.key,!0,this.args);void 0===e?this.element.dataset[this.property]=t:this.element[this.property]=t}}}e.IntlElement=y;e.IntlDateElement=class extends k{update(t){Object(n.g)(this,t);const s=new Intl.DateTimeFormat(e.lastRequestedLangCode+"-u-hc-h23",this.options);this.element[this.property]=Object(r.a)(s.format(this.date))}},e.i18n=function(e,t){return new y({key:e,args:t}).element},e.i18n_=function(e){return new y(e).element},e._i18n=function(e,t,s,i){return new y({element:e,key:t,args:s,property:i}).element}}(u||(u={})),t.default=u;const d=u.i18n,g=u.i18n_,p=u._i18n;function f(e,t=!0){const s=e.slice(0,1);for(let i=1;i<e.length;++i){const n=e.length-1===i&&t?"WordDelimiterLast":"WordDelimiter";s.push(d(n)),s.push(e[i])}return s}i.a.I18n=u},22:function(e,t,s){"use strict";s.r(t),s.d(t,"WebPushApiManager",(function(){return u}));var i=s(26),n=s(30),r=s(36),a=s(12),o=s(27),c=s(13),l=s(0),h=s(109);class u{constructor(){this.isAvailable=!0,this.isPushEnabled=!1,this.localNotificationsAvailable=!0,this.started=!1,this.settings={},this.isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,this.userVisibleOnly=!this.isFirefox,this.log=Object(r.b)("PM"),this.subscribe=()=>{this.isAvailable&&navigator.serviceWorker.ready.then(e=>{e.pushManager.subscribe({userVisibleOnly:this.userVisibleOnly}).then(e=>{this.isPushEnabled=!0,this.pushSubscriptionNotify("subscribe",e)}).catch(e=>{"denied"===Notification.permission?this.log("Permission for Notifications was denied"):(this.log("Unable to subscribe to push.",e),this.userVisibleOnly||(this.userVisibleOnly=!0,setTimeout(this.subscribe,0)))})})},this.isAliveNotify=()=>{if(!this.isAvailable||a.default.idle&&a.default.idle.deactivated)return;this.settings.baseUrl=(location.href||"").replace(/#.*$/,"")+"#/im";const e={},t={push_action_mute1d:l.isMobile?"PushNotification.Action.Mute1d.Mobile":"PushNotification.Action.Mute1d",push_action_settings:l.isMobile?"PushNotification.Action.Settings.Mobile":"PushNotification.Action.Settings",push_message_nopreview:"PushNotification.Message.NoPreview"};for(const s in t)e[s]=c.default.format(t[s],!0);const s={type:"ping",payload:{localNotifications:this.localNotificationsAvailable,lang:e,settings:this.settings}};navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage(s),this.isAliveTO=setTimeout(this.isAliveNotify,1e4)},"PushManager"in window&&"Notification"in window&&"serviceWorker"in navigator||(this.log.warn("Push messaging is not supported."),this.isAvailable=!1,this.localNotificationsAvailable=!1),this.isAvailable&&"denied"===Notification.permission&&this.log.warn("The user has blocked notifications.")}start(){this.started||(this.started=!0,this.getSubscription(),this.setUpServiceWorkerChannel())}setLocalNotificationsDisabled(){this.localNotificationsAvailable=!1}getSubscription(){this.isAvailable&&navigator.serviceWorker.ready.then(e=>{e.pushManager.getSubscription().then(e=>{this.isPushEnabled=!!e,this.pushSubscriptionNotify("init",e)}).catch(e=>{this.log.error("Error during getSubscription()",e)})})}unsubscribe(){this.isAvailable&&navigator.serviceWorker.ready.then(e=>{e.pushManager.getSubscription().then(e=>{this.isPushEnabled=!1,e&&(this.pushSubscriptionNotify("unsubscribe",e),setTimeout(()=>{e.unsubscribe().then(e=>{this.isPushEnabled=!1}).catch(e=>{this.log.error("Unsubscription error: ",e)})},3e3))}).catch(e=>{this.log.error("Error thrown while unsubscribing from push messaging.",e)})})}forceUnsubscribe(){this.isAvailable&&navigator.serviceWorker.ready.then(e=>{e.pushManager.getSubscription().then(e=>{this.log.warn("force unsubscribe",e),e&&e.unsubscribe().then(e=>{this.log.warn("force unsubscribe successful",e),this.isPushEnabled=!1}).catch(e=>{this.log.error("Unsubscription error: ",e)})}).catch(e=>{this.log.error("Error thrown while unsubscribing from push messaging.",e)})})}setSettings(e){this.settings=Object(n.a)(e),clearTimeout(this.isAliveTO),this.isAliveNotify()}hidePushNotifications(){if(this.isAvailable&&navigator.serviceWorker.controller){const e={type:"notifications_clear"};navigator.serviceWorker.controller.postMessage(e)}}setUpServiceWorkerChannel(){this.isAvailable&&(o.a.addServiceWorkerTaskListener("push_click",e=>{a.default.idle&&a.default.idle.deactivated?h.a.reload():a.default.dispatchEvent("push_notification_click",e.payload)}),navigator.serviceWorker.ready.then(this.isAliveNotify))}pushSubscriptionNotify(e,t){if(t){const s=t.toJSON();if(!(s&&s.endpoint&&s.keys&&s.keys.p256dh&&s.keys.auth))return this.log.warn("Invalid push subscription",s),this.unsubscribe(),this.isAvailable=!1,void this.pushSubscriptionNotify(e);this.log.warn("Push",e,s),a.default.dispatchEvent("push_"+e,{tokenType:10,tokenValue:JSON.stringify(s)})}else this.log.warn("Push",e,!1),a.default.dispatchEvent("push_"+e,!1)}}const d=new u;i.a&&(i.a.webPushApiManager=d),t.default=d},23:function(e,t,s){"use strict";s.r(t),s.d(t,"TelegramMeWebManager",(function(){return l}));var i=s(5),n=s(26),r=s(56),a=s(44),o=s(62),c=function(e,t,s,i){return new(s||(s=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function o(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,o)}c((i=i.apply(e,t||[])).next())}))};class l{constructor(){this.disabled=r.a.test||-1===i.a.domains.indexOf(location.hostname)}setAuthorized(e){return c(this,void 0,void 0,(function*(){this.disabled||o.a.get("tgme_sync").then(t=>{const s=Object(a.h)(!0);if(e&&t&&t.canRedirect===e&&t.ts+86400>s)return;o.a.set({tgme_sync:{canRedirect:e,ts:s}});const i=["//telegram.me/_websync_?authed="+(e?"1":"0"),"//t.me/_websync_?authed="+(e?"1":"0")].map(e=>{const t=document.createElement("script"),s=new Promise(e=>{t.onload=t.onerror=()=>{t.remove(),e()}});return t.src=e,document.body.appendChild(t),s});return Promise.all(i)})}))}}const h=new l;n.a&&(n.a.telegramMeWebManager=h),t.default=h},27:function(e,t,s){"use strict";function i(){return new Worker(s.p+"mtproto.worker.b0277eaa00e53933be7d.bundle.worker.js")}var n=s(30),r=s(74);var a=s(36),o=s(12),c=s(117),l=s(26),h=s(56),u=s(50);class d extends u.a{constructor(e,t,s){super(),this.dcId=e,this.url=t,this.debug=h.a.debug&&!1,this.handleOpen=()=>{this.log("opened"),this.debug&&this.log.debug("sending init packet"),this.dispatchEvent("open")},this.handleError=e=>{this.log.error("handleError",e),this.close()},this.handleClose=()=>{this.log("closed"),this.removeListeners(),this.dispatchEvent("close")},this.handleMessage=e=>{this.debug&&this.log.debug("<-","handleMessage",e.data.byteLength),this.dispatchEvent("message",e.data)},this.send=e=>{this.debug&&this.log.debug("-> body length to send:",e.length),this.ws.send(e)};let i=a.a.Error|a.a.Log;return this.debug&&(i|=a.a.Debug),this.log=Object(a.b)("WS-"+e+s,i),this.log("constructor"),this.connect(),this}removeListeners(){this.ws&&(this.ws.removeEventListener("open",this.handleOpen),this.ws.removeEventListener("close",this.handleClose),this.ws.removeEventListener("error",this.handleError),this.ws.removeEventListener("message",this.handleMessage),this.ws=void 0)}connect(){this.ws=new WebSocket(this.url,"binary"),this.ws.binaryType="arraybuffer",this.ws.addEventListener("open",this.handleOpen),this.ws.addEventListener("close",this.handleClose),this.ws.addEventListener("error",this.handleError),this.ws.addEventListener("message",this.handleMessage)}close(){if(this.ws){this.log("close execution");try{this.ws.close()}catch(e){}this.handleClose()}}}var g=s(123),p=s(62),f=s(22),m=s(81),v=s(109),b=s(23),k=s(31);const y=new class extends class{sha1Hash(e){return this.performTaskWorker("sha1-hash",e)}sha256Hash(e){return this.performTaskWorker("sha256-hash",e)}pbkdf2(e,t,s){return this.performTaskWorker("pbkdf2",e,t,s)}aesEncrypt(e,t,s){return this.performTaskWorker("aes-encrypt",Object(r.f)(e),Object(r.f)(t),Object(r.f)(s))}aesDecrypt(e,t,s){return this.performTaskWorker("aes-decrypt",e,t,s).then(e=>Object(r.f)(e))}rsaEncrypt(e,t){return this.performTaskWorker("rsa-encrypt",e,t)}factorize(e){return this.performTaskWorker("factorize",[...e])}modPow(e,t,s){return this.performTaskWorker("mod-pow",e,t,s)}gzipUncompress(e,t){return this.performTaskWorker("gzipUncompress",e,t)}computeSRP(e,t,s=!1){return this.performTaskWorker("computeSRP",e,t,s)}}{constructor(){super(),this.postSWMessage=()=>{},this.afterMessageIdTemp=0,this.taskId=0,this.awaiting={},this.pending=[],this.updatesProcessor=null,this.log=Object(a.b)("API-PROXY"),this.hashes={},this.apiPromisesSingle={},this.apiPromisesCacheable={},this.isSWRegistered=!0,this.debug=l.b,this.sockets=new Map,this.taskListeners={},this.taskListenersSW={},this.onWorkerMessage=e=>{const t=e.data;if(!Object(n.f)(t))return;const s=this.taskListeners[t.type];s?s(t):t.update?this.updatesProcessor&&this.updatesProcessor(t.update):t.progress?o.default.dispatchEvent("download_progress",t.progress):(t.hasOwnProperty("result")||t.hasOwnProperty("error"))&&this.finalizeTask(t.taskId,t.result,t.error)},this.log("constructor"),g.a.start(),this.registerServiceWorker(),this.addTaskListener("clear",()=>{Promise.all([m.a.toggleStorage(!1),p.a.clear(),Promise.race([b.default.setAuthorized(!1),Object(k.d)(3e3)]),f.default.forceUnsubscribe(),Promise.all(["cachedFiles","cachedStreamChunks"].map(e=>caches.delete(e)))]).finally(()=>{v.a.reload()})}),this.addTaskListener("connectionStatusChange",e=>{o.default.dispatchEvent("connection_status_change",e.payload)}),this.addTaskListener("convertWebp",e=>{c.a.postMessage(e)}),this.addTaskListener("socketProxy",e=>{const t=e.payload,s=t.id;if("send"===t.type){this.sockets.get(s).send(t.payload)}else if("close"===t.type){this.sockets.get(s).close()}else if("setup"===t.type){const e=new d(t.payload.dcId,t.payload.url,t.payload.logSuffix),i=()=>{this.postMessage({type:"socketProxy",payload:{type:"open",id:s}})},n=()=>{this.postMessage({type:"socketProxy",payload:{type:"close",id:s}}),e.removeEventListener("open",i),e.removeEventListener("close",n),e.removeEventListener("message",r),this.sockets.delete(s)},r=e=>{this.postMessage({type:"socketProxy",payload:{type:"message",id:s,payload:e}})};e.addEventListener("open",i),e.addEventListener("close",n),e.addEventListener("message",r),this.sockets.set(s,e)}}),this.addTaskListener("localStorageProxy",e=>{const t=e.payload;p.a[t.type](...t.args).then(t=>{this.postMessage({type:"localStorageProxy",id:e.id,payload:t})})}),o.default.addEventListener("language_change",e=>{this.performTaskWorkerVoid("setLanguage",e)}),window.addEventListener("online",e=>{this.forceReconnectTimeout()}),this.registerWorker()}isServiceWorkerOnline(){return this.isSWRegistered}registerServiceWorker(){if(!("serviceWorker"in navigator))return;const e=navigator.serviceWorker;e.register("./sw.js",{scope:"./"}).then(t=>{this.log("SW registered",t),this.isSWRegistered=!0;(t.installing||t.waiting||t.active).addEventListener("statechange",e=>{this.log("SW statechange",e)}),this.postSWMessage=e.controller.postMessage.bind(e.controller)},e=>{this.isSWRegistered=!1,this.log.error("SW registration failed!",e),this.onServiceWorkerFail&&this.onServiceWorkerFail()}),e.addEventListener("controllerchange",()=>{this.log.warn("controllerchange"),this.releasePending(),e.controller.addEventListener("error",e=>{this.log.error("controller error:",e)})}),e.addEventListener("message",e=>{const t=e.data;if(!Object(n.f)(t))return;const s=this.taskListenersSW[t.type];s&&s(t)}),this.addServiceWorkerTaskListener("requestFilePart",e=>{this.postMessage(e)}),e.addEventListener("messageerror",e=>{this.log.error("SW messageerror:",e)})}onWorkerFirstMessage(e){if(!this.worker){this.worker=e,this.log("set webWorker"),this.postMessage=this.worker.postMessage.bind(this.worker);const t=c.a.isWebpSupported();this.log("WebP supported:",t),this.postMessage({type:"webpSupport",payload:t}),this.postMessage({type:"userAgent",payload:navigator.userAgent}),this.releasePending()}}addTaskListener(e,t){this.taskListeners[e]=t}addServiceWorkerTaskListener(e,t){this.taskListenersSW[e]=t}registerWorker(){const e=new i;e.addEventListener("message",this.onWorkerFirstMessage.bind(this,e),{once:!0}),e.addEventListener("message",this.onWorkerMessage),e.addEventListener("error",e=>{this.log.error("WORKER ERROR",e)})}finalizeTask(e,t,s){const i=this.awaiting[e];void 0!==i&&(this.debug&&this.log.debug("done",i.taskName,t,s),s?i.reject(s):i.resolve(t),delete this.awaiting[e])}performTaskWorkerVoid(e,...t){const s={task:e,taskId:this.taskId,args:t};this.pending.push(s),this.releasePending(),this.taskId++}performTaskWorker(e,...t){return this.debug&&this.log.debug("start",e,t),new Promise((s,i)=>{this.awaiting[this.taskId]={resolve:s,reject:i,taskName:e},this.performTaskWorkerVoid(e,...t)})}releasePending(){this.postMessage&&(this.debug&&this.log.debug("releasing tasks, length:",this.pending.length),this.pending.forEach(e=>{this.postMessage(e)}),this.debug&&this.log.debug("released tasks"),this.pending.length=0)}setUpdatesProcessor(e){this.updatesProcessor=e}invokeApi(e,t={},s={}){return this.performTaskWorker("invokeApi",e,t,s)}invokeApiAfter(e,t={},s={}){let i=s;return i.prepareTempMessageId=""+ ++this.afterMessageIdTemp,i=Object.assign({},s),s.messageId=i.prepareTempMessageId,this.invokeApi(e,t,i)}invokeApiHashable(e,t={},s={}){const i=JSON.stringify(t);let n;return this.hashes[e]&&(n=this.hashes[e][i],n&&(t.hash=n.hash)),this.invokeApi(e,t,s).then(t=>{if(t._.includes("NotModified"))return this.debug&&this.log.warn("NotModified saved!",e,i),n.result;if(t.hash){const s=t.hash;this.hashes[e]||(this.hashes[e]={}),this.hashes[e][i]={hash:s,result:t}}return t})}invokeApiSingle(e,t={},s={}){const i=e+"-"+JSON.stringify(t);return this.apiPromisesSingle[i]?this.apiPromisesSingle[i]:this.apiPromisesSingle[i]=this.invokeApi(e,t,s).finally(()=>{delete this.apiPromisesSingle[i]})}invokeApiCacheable(e,t={},s={}){var i;const n=null!==(i=this.apiPromisesCacheable[e])&&void 0!==i?i:this.apiPromisesCacheable[e]={},r=JSON.stringify(t),a=n[r];if(a&&(!s.override||!a.fulfilled))return a.promise;let o;s.override&&(a&&a.timeout&&(clearTimeout(a.timeout),delete a.timeout),delete s.override),s.cacheSeconds&&(o=window.setTimeout(()=>{delete n[r]},1e3*s.cacheSeconds),delete s.cacheSeconds);const c=this.invokeApi(e,t,s);return n[r]={timestamp:Date.now(),fulfilled:!1,timeout:o,promise:c,params:t},c}clearCache(e,t){const s=this.apiPromisesCacheable[e];if(s)for(const e in s){const i=s[e];t(i.params)&&(i.timeout&&clearTimeout(i.timeout),delete s[e])}}setBaseDcId(e){return this.performTaskWorker("setBaseDcId",e)}setQueueId(e){return this.performTaskWorker("setQueueId",e)}setUserAuth(e){return"number"==typeof e&&(e={dcID:0,date:Date.now()/1e3|0,id:e}),o.default.dispatchEvent("user_auth",e),this.performTaskWorker("setUserAuth",e)}getNetworker(e,t){return this.performTaskWorker("getNetworker",e,t)}logOut(){return this.performTaskWorker("logOut")}cancelDownload(e){return this.performTaskWorker("cancelDownload",e)}downloadFile(e){return this.performTaskWorker("downloadFile",e)}uploadFile(e){return this.performTaskWorker("uploadFile",e)}toggleStorage(e){const t={type:"toggleStorage",payload:e};this.postMessage(t),this.postSWMessage(t)}stopAll(){return this.performTaskWorkerVoid("stopAll")}startAll(){return this.performTaskWorkerVoid("startAll")}forceReconnectTimeout(){this.postMessage({type:"online"})}forceReconnect(){this.postMessage({type:"forceReconnect"})}};l.a.apiManagerProxy=y;t.a=y},44:function(e,t,s){"use strict";s.d(t,"g",(function(){return r})),s.d(t,"a",(function(){return o})),s.d(t,"c",(function(){return l})),s.d(t,"d",(function(){return h})),s.d(t,"e",(function(){return u})),s.d(t,"f",(function(){return d})),s.d(t,"h",(function(){return g})),s.d(t,"b",(function(){return y}));var i=s(26),n=s(13);const r=["January","February","March","April","May","June","July","August","September","October","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o=86400,c=e=>{const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),s=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-s);const i=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t.getTime()-i.getTime())/o+1)/7)},l=e=>{const t=new Date,s=t.getTime()/1e3|0,i=e.getTime()/1e3|0;let n;return n=s-i<o&&t.getDate()===e.getDate()?("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2):t.getFullYear()!==e.getFullYear()?e.getDate()+"."+("0"+(e.getMonth()+1)).slice(-2)+"."+(""+e.getFullYear()).slice(-2):s-i<7*o&&c(t)===c(e)?a[e.getDay()].slice(0,3):r[e.getMonth()].slice(0,3)+" "+("0"+e.getDate()).slice(-2),n};function h(e){const t=new Date,s=t.getTime()/1e3|0,i=e.getTime()/1e3|0,r={};return s-i<o&&t.getDate()===e.getDate()?r.hour=r.minute="2-digit":t.getFullYear()!==e.getFullYear()?(r.year=r.day="numeric",r.month="2-digit"):s-i<7*o&&c(t)===c(e)?r.weekday="short":(r.month="short",r.day="numeric"),new n.default.IntlDateElement({date:e,options:r}).element}function u(e){return new n.default.IntlDateElement({date:e,options:{hour:"2-digit",minute:"2-digit"}}).element}i.a&&(i.a.formatDateAccordingToTodayNew=h);const d=(e,t={})=>{const s=t.monthAsNumber?".":" ",i=("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+(t.noSeconds?"":":"+("0"+e.getSeconds()).slice(-2));return(t.leadingZero?("0"+e.getDate()).slice(-2):e.getDate())+s+(t.monthAsNumber?("0"+(e.getMonth()+1)).slice(-2):r[e.getMonth()])+s+e.getFullYear()+(t.noTime?"":", "+i)};function g(e){const t=Date.now();return e?t/1e3|0:t}const p=new RegExp("20[0-9]{1,2}"),f=new RegExp("(\\w{3,}) ([0-9]{0,4})","i"),m=new RegExp("([0-9]{0,4}) (\\w{2,})","i"),v=new RegExp("^([0-9]{1,4})(\\.| |/|\\-)([0-9]{1,4})$","i"),b=new RegExp("^([0-9]{1,2})(\\.| |/|\\-)([0-9]{1,2})(\\.| |/|\\-)([0-9]{1,4})$","i"),k=[31,29,31,30,31,30,31,31,30,31,30,31];function y(e,t){const s=e.trim().toLowerCase();if(s.length<3)return;if(0==="today".indexOf(s)){const e=new Date,s=e.getFullYear(),i=e.getMonth(),n=e.getDate();e.setFullYear(s,i,n),e.setHours(0,0,0);const r=e.getTime();e.setFullYear(s,i,n+1),e.setHours(0,0,0);const a=e.getTime()-1;return void t.push({title:"Today",minDate:r,maxDate:a})}if(0==="yesterday".indexOf(s)){const e=new Date,s=e.getFullYear(),i=e.getMonth(),n=e.getDate();e.setFullYear(s,i,n),e.setHours(0,0,0);const r=e.getTime()-864e5;e.setFullYear(s,i,n+1),e.setHours(0,0,0);const a=e.getTime()-86400001;return void t.push({title:"Yesterday",minDate:r,maxDate:a})}const i=function(e){const t=new Date;if(e.length<=3)return-1;for(let s=0;s<7;s++)if(t.setDate(t.getDate()+1),0===S(t.getTime()).toLowerCase().indexOf(e))return t.getDay();return-1}(s);if(i>=0){const e=new Date,s=e.getTime(),n=i-e.getDay();e.setDate(e.getDate()+n),e.getTime()>s&&e.setTime(e.getTime()-6048e5);const r=e.getFullYear(),a=e.getMonth(),o=e.getDate();e.setFullYear(r,a,o),e.setHours(0,0,0);const c=e.getTime();e.setFullYear(r,a,o+1),e.setHours(0,0,0);const l=e.getTime()-1;return void t.push({title:S(c),minDate:c,maxDate:l})}let n;if(null===(n=v.exec(s)))if(null===(n=b.exec(s)))if(null===(n=p.exec(s))){if(null!==(n=f.exec(s))){const e=n[1],s=n[2],i=M(e);if(i>=0){const e=+s;if(e>0&&e<=31){return void A(t,e-1,i)}if(e>=2013){return void w(t,i,e)}}}if(null!==(n=m.exec(s))){const e=n[1],s=M(n[2]);if(s>=0){const i=+e;if(i>0&&i<=31){return void A(t,i-1,s)}if(i>=2013){w(t,s,i)}}}}else{let e=+s;const i=(new Date).getFullYear();if(e<2013){e=2013;for(let s=i;s>=e;s--){const e=new Date;e.setFullYear(s,0,1),e.setHours(0,0,0);const i=e.getTime();e.setFullYear(s+1,0,1),e.setHours(0,0,0);const n=e.getTime()-1;t.push({title:""+s,minDate:i,maxDate:n})}}else if(e<=i){const s=new Date;s.setFullYear(e,0,1),s.setHours(0,0,0);const i=s.getTime();s.setFullYear(e+1,0,1),s.setHours(0,0,0);const n=s.getTime()-1;t.push({title:""+e,minDate:i,maxDate:n})}}else{const e=n[1],s=n[3],i=n[5];if(!n[2]===n[4])return;const r=parseInt(e),a=parseInt(s)-1;let o=parseInt(i);o>=10&&o<=99&&(o+=2e3);const c=(new Date).getFullYear();if(D(r-1,a)&&o>=2013&&o<=c){const e=new Date;e.setFullYear(o,a,r),e.setHours(0,0,0);const s=e.getTime();e.setFullYear(o,a,r+1),e.setHours(0,0,0);const i=e.getTime()-1;return void t.push({title:P(s),minDate:s,maxDate:i})}}else{const e=n[1],s=n[3],i=parseInt(e),r=parseInt(s);if(i>0&&i<=31){if(r>=2013&&i<=12){return void w(t,i-1,r)}if(r<=12){A(t,i-1,r-1)}}else if(i>=2013&&r<=12){w(t,r-1,i)}}}function w(e,t,s){const i=(new Date).getFullYear(),n=Date.now();if(s>=2013&&s<=i){const i=new Date;i.setFullYear(s,t,1),i.setHours(0,0,0);const r=i.getTime();if(r>n)return;i.setMonth(i.getMonth()+1);const a=i.getTime()-1;e.push({title:C(r),minDate:r,maxDate:a})}}function A(e,t,s){if(D(t,s)){const n=(new Date).getFullYear(),r=Date.now();for(let a=n;a>=2013;a--){if(1===s&&28===t&&(((i=a)%4!=0||i%100==0)&&i%400!=0))continue;const o=new Date;o.setFullYear(a,s,t+1),o.setHours(0,0,0);const c=o.getTime();if(c>r)continue;o.setFullYear(a,s,t+2),o.setHours(0,0,0);const l=o.getTime()-1;a===n?e.push({title:T(c),minDate:c,maxDate:l}):e.push({title:P(c),minDate:c,maxDate:l})}}var i}function C(e){const t=new Date(e);return r[t.getMonth()].slice(0,3)+" "+t.getFullYear()}function T(e){const t=new Date(e);return r[t.getMonth()].slice(0,3)+" "+t.getDate()}function P(e){const t=new Date(e);return("0"+t.getDate()).slice(-2)+"."+("0"+(t.getMonth()+1)).slice(-2)+"."+t.getFullYear()}function S(e){const t=new Date(e);return a[t.getDay()]}function D(e,t){return t>=0&&t<12&&e>=0&&e<k[t]}function M(e){e=e.toLowerCase();for(let t=0;t<12;t++){if(0===r[t].toLowerCase().indexOf(e))return t}return-1}i.a.fillTipDates=y},67:function(e,t,s){"use strict";function i(e){return Math.floor(Math.random()*e)}function n(){return""+i(4294967295)+i(16777215)}s.d(t,"a",(function(){return i})),s.d(t,"b",(function(){return n}))},72:function(e,t,s){"use strict";function i(e,t,s=t+10){return(e=e.trim()).length>s&&(e=e.slice(0,t)+"..."),e}function n(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function r(e){return e.replace(/&/g,"&amp;").replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,e=>"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";").replace(/([^\#-~| |!])/g,e=>"&#"+e.charCodeAt(0)+";").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function a(e,t){if(e.length<t)return[e];let s=0,i=0,n=0;const r=[],o=o=>{let c=e.slice(i,o);const l=n++;if(c.length>t){a(c.slice(t),t).forEach(e=>{r[n++]=e}),c=c.slice(0,t)}i=o,s=0,r[l]=(r[l]||"")+c};let c=0;for(;;){let i=e.indexOf(" ",c);if(-1===i){c!==e.length-1&&o();break}i+=" ".length;const n=i-c;s+n>t&&o(s),c=i,s+=n}return r}function o(e){const t=e.replace("input","");return t[0].toLowerCase()+t.slice(1)}function c(e){return e="input"+(e=e[0].toUpperCase()+e.slice(1))}function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}s.d(t,"f",(function(){return i})),s.d(t,"e",(function(){return n})),s.d(t,"d",(function(){return r})),s.d(t,"g",(function(){return a})),s.d(t,"b",(function(){return o})),s.d(t,"c",(function(){return c})),s.d(t,"a",(function(){return l}))},74:function(e,t,s){"use strict";function i(e){e=e||[];let t=[];for(let s=0;s<e.length;++s)t.push((e[s]<16?"0":"")+(e[s]||0).toString(16));return t.join("")}function n(e){const t=e.length;let s=0,i=[];t%2&&(i.push(parseInt(e.charAt(0),16)),++s);for(let n=s;n<t;n+=2)i.push(parseInt(e.substr(n,2),16));return i}function r(e){let t,s="";for(let i=e.length,n=0,r=0;r<i;++r)t=r%3,n|=e[r]<<(16>>>t&24),2!==t&&i-r!=1||(s+=String.fromCharCode(a(n>>>18&63),a(n>>>12&63),a(n>>>6&63),a(63&n)),n=0);return s.replace(/A(?=A$|$)/g,"=")}function a(e){return e<26?e+65:e<52?e+71:e<62?e-4:62===e?43:63===e?47:65}function o(e,t){const s=e.length;if(s!==t.length)return!1;for(let i=0;i<s;++i)if(e[i]!==t[i])return!1;return!0}function c(e){return e instanceof ArrayBuffer?e:void 0!==e.buffer&&e.buffer.byteLength===e.length*e.BYTES_PER_ELEMENT?e.buffer:new Uint8Array(e).buffer}function l(...e){let t=0;e.forEach(e=>t+=e.byteLength||e.length);const s=new Uint8Array(t);let i=0;return e.forEach(e=>{s.set(e instanceof ArrayBuffer?new Uint8Array(e):e,i),i+=e.byteLength||e.length}),s}s.d(t,"e",(function(){return i})),s.d(t,"c",(function(){return n})),s.d(t,"d",(function(){return r})),s.d(t,"b",(function(){return o})),s.d(t,"f",(function(){return c})),s.d(t,"a",(function(){return l}))}}]);
//# sourceMappingURL=1.43933160e676b920bb00.chunk.js.map