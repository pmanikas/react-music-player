(this["webpackJsonpreact-music-player"]=this["webpackJsonpreact-music-player"]||[]).push([[0],{10:function(e,t,n){e.exports={container:"LibraryItem_container__2a_1a",active:"LibraryItem_active__2iN4i",cover:"LibraryItem_cover__2fHu0",meta:"LibraryItem_meta__2rsBn",title:"LibraryItem_title__2gpiO",artist:"LibraryItem_artist__11oTs"}},13:function(e,t,n){e.exports={library:"Library_library__1c0i4",active:"Library_active__132GR",title:"Library_title__3k3lC"}},15:function(e,t,n){e.exports={songContainer:"HeroSong_songContainer__mTN4V",cover:"HeroSong_cover__1xjGO",title:"HeroSong_title__32uY0",artist:"HeroSong_artist__3pkWm"}},23:function(e,t,n){e.exports={nav:"Nav_nav__2p4vD",navButton:"Nav_navButton__345KA"}},24:function(e,t,n){e.exports={mainContent:"App_mainContent__3N2BW",slidedRight:"App_slidedRight__17gUa"}},6:function(e,t,n){e.exports={player:"Player_player__zS77t",timeControl:"Player_timeControl__2TnNU",track:"Player_track__2HmwB",sliderBackground:"Player_sliderBackground__2X3OW",timeInput:"Player_timeInput__2qWbP",animateTrack:"Player_animateTrack__3xvfs",playerControl:"Player_playerControl__1mcph",icon:"Player_icon__v3iFJ"}},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),i=n.n(c),o=n(3),s=n(5),u=n.n(s),l=n(8),d=n(35),p=n.n(d),f=Object({NODE_ENV:"production",PUBLIC_URL:"https://pmanikas.github.io/react-music-player",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).VUE_APP_API_BASE_URL||"",b=p.a.create({baseURL:f});b.interceptors.response.use((function(e){return j(e)}),(function(e){return O(e)}));var j=function(e){return e},O=function(e){var t=e.response.status;403===t&&alert("You are not allowed to perform that task."),404===t?alert("We can't find what you're looking for."):401===t?alert("Unauthanticated"):alert("Something went wrong.")},v=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n="./songs/chillhopList.json",b.get(n);case 2:return t=e.sent,e.abrupt("return",t?t.data:[]);case 4:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n({type:"UPDATE_CURRENT_SONG",data:e});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=n(13),h=n.n(m),g=n(10),y=n.n(g),x=n(1),S=function(e){var t=e.song,n=e.audioRef,a=e.isPlaying,r=Object(o.c)((function(e){return e.songsState.currentSong})),c=Object(o.b)(),i=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(_(t));case 2:a&&n.current.play();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{onClick:i,className:"".concat(y.a.container," ").concat(t.id===r.id?y.a.active:""),children:[Object(x.jsx)("img",{className:y.a.cover,src:t.cover,alt:t.name}),Object(x.jsxs)("div",{className:y.a.meta,children:[Object(x.jsx)("h3",{className:y.a.title,children:t.name}),Object(x.jsx)("h4",{className:y.a.artist,children:t.artist})]})]})},k=function(e){var t=e.audioRef,n=Object(o.c)((function(e){return e.songsState.songs})),a=Object(o.c)((function(e){return e.songsState.currentSong})),r=Object(o.c)((function(e){return e.appearanceState.isLibraryOpen})),c=Object(o.c)((function(e){return e.playerState.isPlaying}));return Object(x.jsxs)("div",{className:"".concat(h.a.library," ").concat(r?h.a.active:""),children:[Object(x.jsx)("h2",{className:h.a.title,children:"Library"}),Object(x.jsx)("div",{className:h.a.songs,children:n.map((function(e){return Object(x.jsx)(S,{song:e,audioRef:t,isPlaying:c,currentSong:a},e.id)}))})]})},w=n(4),N=n(37),T=function(){var e=Object(l.a)(u.a.mark((function e(t,n,a,r,c){var i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.findIndex((function(e){return e.id===n.id})),e.next=3,a(t[(i+1)%t.length]);case 3:r&&c.current.play();case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(u.a.mark((function e(t,n,a,r,c){var i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.findIndex((function(e){return e.id===n.id})),e.next=3,i;case 3:if(e.t0=e.sent,0!==e.t0){e.next=8;break}a(t[t.length-1]),e.next=9;break;case 8:a(t[i-1]);case 9:r&&c.current.play();case 10:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c){return e.apply(this,arguments)}}(),L=n(6),C=n.n(L),E=n(11),R=n(12),A=n(22),U=function(e){var t=e.audioRef,n=Object(o.c)((function(e){return e.songsState.songs})),r=Object(o.c)((function(e){return e.songsState.currentSong})),c=Object(o.c)((function(e){return e.playerState.isPlaying})),i=Object(o.b)(),s=function(e){return i(_(e))},u=Object(a.useState)({currentTime:0,duration:0}),l=Object(N.a)(u,2),d=l[0],p=l[1],f=function(e){!function(e,t,n,a){var r=e.target.currentTime,c=e.target.duration;t(Object(w.a)(Object(w.a)({},n),{},{currentTime:r,duration:c})),c-r<1&&a("skip-forward")}(e,p,d,b)},b=function(e){"skip-back"===e?P(n,r,s,c,t):"skip-forward"===e&&T(n,r,s,c,t)},j=function(e){return t=e,"".concat(Math.floor(t/60),":").concat(("0"+Math.floor(t%60)).slice(-2));var t},O={transform:"translateX(".concat(d.currentTime/d.duration*100,"%)")};return Object(x.jsxs)("div",{className:C.a.player,children:[Object(x.jsxs)("div",{className:C.a.timeControl,children:[Object(x.jsx)("p",{className:C.a.timestamp,children:d.currentTime?j(d.currentTime):"0:00"}),Object(x.jsxs)("div",{className:C.a.track,children:[Object(x.jsx)("div",{style:{backgroundImage:"url(".concat(r.cover,")")},className:C.a.sliderBackground}),Object(x.jsx)("input",{onChange:function(e){t.current.currentTime=e.target.value,p(Object(w.a)(Object(w.a)({},d),{},{currentTime:e.target.value}))},className:C.a.timeInput,type:"range",min:0,value:d.currentTime||0,max:d.duration||0}),Object(x.jsx)("div",{style:O,className:C.a.animateTrack})]}),Object(x.jsx)("p",{className:C.a.timestamp,children:d.duration?j(d.duration):"0:00"})]}),Object(x.jsxs)("div",{className:C.a.playerControl,children:[Object(x.jsx)(E.a,{onClick:function(){return b("skip-back")},className:"".concat(C.a.icon," ").concat(C.a.skipBack),size:"2x",icon:R.a}),Object(x.jsx)(E.a,{onClick:function(){r&&r.audio&&(c?t.current.pause():t.current.play())},className:"".concat(C.a.icon," ").concat(C.a.play),size:"3x",icon:c?A.a:A.b}),Object(x.jsx)(E.a,{onClick:function(){return b("skip-forward")},className:"".concat(C.a.icon," ").concat(C.a.skipForward),size:"2x",icon:R.b})]}),Object(x.jsx)("audio",{onTimeUpdate:f,onLoadedMetadata:f,onPause:function(){return i({type:"PAUSE"})},onPlay:function(){return i({type:"PLAY"})},ref:t,src:r.audio})]})},I=n(15),B=n.n(I),W=function(){var e=Object(o.c)((function(e){return e.songsState.currentSong}));return Object(x.jsxs)("div",{className:B.a.songContainer,children:[Object(x.jsx)("img",{className:B.a.cover,src:e.cover,alt:e.name}),Object(x.jsx)("h2",{className:B.a.title,children:e.name}),Object(x.jsx)("h3",{className:B.a.artist,children:e.artist})]})},G=n(23),D=n.n(G),H=function(){var e=Object(o.b)();return Object(x.jsxs)("nav",{className:D.a.nav,children:[Object(x.jsx)("h1",{children:"Chill Vibes"}),Object(x.jsxs)("button",{onClick:function(){return e({type:"TOGGLE_LIBRARY"})},className:D.a.navButton,children:["Library \xa0",Object(x.jsx)(E.a,{icon:R.c})]})]})},Y=n(24),M=n.n(Y);var V=function(){var e=Object(o.b)();Object(a.useEffect)((function(){e(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:n=e.sent,t({type:"GET_SONGS",payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(a.useRef)(null),n=Object(o.c)((function(e){return e.appearanceState.isLibraryOpen}));return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"".concat(M.a.mainContent," ").concat(n?M.a.slidedRight:""),children:[Object(x.jsx)(H,{}),Object(x.jsx)(W,{}),Object(x.jsx)(U,{audioRef:t})]}),Object(x.jsx)(k,{audioRef:t})]})},z=(n(67),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var K=n(9),X=n(36),J={songs:[],currentSong:{}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SONGS":return Object(w.a)(Object(w.a)({},e),{},{songs:t.payload,currentSong:t.payload[0]});case"UPDATE_CURRENT_SONG":return Object(w.a)(Object(w.a)({},e),{},{currentSong:t.data});default:return Object(w.a)({},e)}},$={isLibraryOpen:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LIBRARY":return Object(w.a)(Object(w.a)({},e),{},{isLibraryOpen:!e.isLibraryOpen});default:return Object(w.a)({},e)}},Z={isPlaying:!1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAY":return Object(w.a)(Object(w.a)({},e),{},{isPlaying:!0});case"PAUSE":return Object(w.a)(Object(w.a)({},e),{},{isPlaying:!1});default:return Object(w.a)({},e)}},te=Object(K.c)({songsState:q,appearanceState:Q,playerState:ee}),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,ae=Object(K.e)(te,ne(Object(K.a)(X.a)));i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(o.a,{store:ae,children:Object(x.jsx)(V,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://pmanikas.github.io/react-music-player",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("https://pmanikas.github.io/react-music-player","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):F(t,e)}))}}()}},[[68,1,2]]]);
//# sourceMappingURL=main.f84290cc.chunk.js.map