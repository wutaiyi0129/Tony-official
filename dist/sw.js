if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const o=e=>i(e,r),d={module:{uri:r},exports:a,require:o};s[r]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(l(...e),a)))}}define(["./workbox-5d477881"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app-ads.txt",revision:"25d4f9cc70eaa78a137543eef7a0e1a3"},{url:"assets/arenq-9cb5ccda.otf",revision:null},{url:"assets/beckman-a7139702.otf",revision:null},{url:"assets/bw-map-e450793a.jpeg",revision:null},{url:"assets/close-80658a2f.png",revision:null},{url:"assets/coverhunt-c6738774.png",revision:null},{url:"assets/dcc-df01a4db.png",revision:null},{url:"assets/download-d8482a29.png",revision:null},{url:"assets/downloadHover-5ffc8278.png",revision:null},{url:"assets/frontend-966214a8.png",revision:null},{url:"assets/github-3b4e1609.png",revision:null},{url:"assets/index-bd645bbe.js",revision:null},{url:"assets/index-ec95282e.css",revision:null},{url:"assets/kelhel-f23c566e.png",revision:null},{url:"assets/komikult-181d04c6.png",revision:null},{url:"assets/leaderboard-437b259e.png",revision:null},{url:"assets/logo-black-b79d8cb6.png",revision:null},{url:"assets/math-magicians-6f8f17e8.png",revision:null},{url:"assets/microverse-b34fd502.png",revision:null},{url:"assets/mova-1d2d6d8c.otf",revision:null},{url:"assets/movie-metro-874a55d6.png",revision:null},{url:"assets/nairobi-87db6c03.png",revision:null},{url:"assets/nyeusi-ba020537.png",revision:null},{url:"assets/overcame-bold-55329540.woff",revision:null},{url:"assets/overcame-outline-c8da765a.woff",revision:null},{url:"assets/pineapple-21fd8460.png",revision:null},{url:"assets/pineappleHover-2f13f8ae.png",revision:null},{url:"assets/rubyrails-ba26b9e4.png",revision:null},{url:"assets/shaq-093ea94c.png",revision:null},{url:"assets/space-hub-2f9a6dae.png",revision:null},{url:"assets/swift-37b69b14.png",revision:null},{url:"assets/swiftblack-c77567a8.png",revision:null},{url:"assets/white-abstract-28311fe4.png",revision:null},{url:"assets/world-map-a167947e.png",revision:null},{url:"index.html",revision:"6979d9741e8d645a9a260e81b3a8be55"},{url:"logo.png",revision:"aebe4438a440f5a9d88efd390efec7e9"},{url:"manifest.webmanifest",revision:"852ae457dec924bbd280204251248811"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"video/Video1.mp4",revision:"737e712fc904b0824fd48bd39a2a71ee"},{url:"video/Video2.mp4",revision:"51914961d21411204aa52029cd609df6"},{url:"video/Video3.mp4",revision:"6ac848b5c9400c53dab3928743d1ddd3"},{url:"video/Video4.mp4",revision:"bf619d205c3167e210ec686da580c26c"},{url:"video/Video5.mp4",revision:"7ea4e8ff6295a27e80776f85a7a2fb95"},{url:"video/Video6.mp4",revision:"4d5f37aaa31e365d1e6289e7258751e1"},{url:"app-ads.txt",revision:"25d4f9cc70eaa78a137543eef7a0e1a3"},{url:"logo.png",revision:"aebe4438a440f5a9d88efd390efec7e9"},{url:"video/Video1.mp4",revision:"737e712fc904b0824fd48bd39a2a71ee"},{url:"video/Video2.mp4",revision:"51914961d21411204aa52029cd609df6"},{url:"video/Video3.mp4",revision:"6ac848b5c9400c53dab3928743d1ddd3"},{url:"video/Video4.mp4",revision:"bf619d205c3167e210ec686da580c26c"},{url:"video/Video5.mp4",revision:"7ea4e8ff6295a27e80776f85a7a2fb95"},{url:"video/Video6.mp4",revision:"4d5f37aaa31e365d1e6289e7258751e1"},{url:"manifest.webmanifest",revision:"852ae457dec924bbd280204251248811"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>e.pathname.startsWith("/video/")),new e.NetworkFirst({cacheName:"dynamic-cache",networkTimeoutSeconds:10,plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:604800})]}),"GET")}));
