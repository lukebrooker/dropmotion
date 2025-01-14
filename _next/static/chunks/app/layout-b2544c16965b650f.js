(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{4841:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3587,23)),Promise.resolve().then(r.t.bind(r,6688,23)),Promise.resolve().then(r.t.bind(r,8381,23)),Promise.resolve().then(r.bind(r,5425)),Promise.resolve().then(r.bind(r,3291))},5425:(e,t,r)=>{"use strict";r.d(t,{ThemeProvider:()=>a});var n=r(1133),s=r(9587);function a(e){let{children:t,...r}=e;return(0,n.jsx)(s.N,{attribute:"class",defaultTheme:"dark",enableSystem:!0,...r,children:t})}},3291:(e,t,r)=>{"use strict";r.d(t,{ThemeSwitcher:()=>o});var n=r(1133),s=r(9587),a=r(1321);function o(){let[e,t]=(0,a.useState)(!1),{theme:r,setTheme:o}=(0,s.D)();return((0,a.useEffect)(()=>t(!0),[]),e)?(0,n.jsx)("button",{onClick:()=>o("dark"===r?"light":"dark"),className:"text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors","aria-label":"Switch to ".concat("dark"===r?"light":"dark"," mode"),children:"dark"===r?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}):(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})})}):null}},8381:()=>{},6688:e=>{e.exports={style:{fontFamily:"'Albert Sans', 'Albert Sans Fallback'",fontStyle:"normal"},className:"__className_59ce6d"}},9587:(e,t,r)=>{"use strict";r.d(t,{D:()=>m,N:()=>d});var n=r(1321),s=(e,t,r,n,s,a,o,l)=>{let i=document.documentElement,c=["light","dark"];function m(t){(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&a?s.map(e=>a[e]||e):s;r?(i.classList.remove(...n),i.classList.add(t)):i.setAttribute(e,t)}),l&&c.includes(t)&&(i.style.colorScheme=t)}if(n)m(n);else try{let e=localStorage.getItem(t)||r,n=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;m(n)}catch(e){}},a=["light","dark"],o="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=n.createContext(void 0),c={setTheme:e=>{},themes:[]},m=()=>{var e;return null!=(e=n.useContext(i))?e:c},d=e=>n.useContext(i)?n.createElement(n.Fragment,null,e.children):n.createElement(h,{...e}),u=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:s=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:m=u,defaultTheme:d=s?"system":"light",attribute:h="data-theme",value:b,children:p,nonce:g,scriptProps:k}=e,[S,C]=n.useState(()=>y(c,d)),[x,E]=n.useState(()=>y(c)),T=b?Object.values(b):m,L=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=w());let n=b?b[t]:t,o=r?v(g):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(...T),n&&i.classList.add(n)):e.startsWith("data-")&&(n?i.setAttribute(e,n):i.removeAttribute(e))};if(Array.isArray(h)?h.forEach(c):c(h),l){let e=a.includes(d)?d:null,r=a.includes(t)?t:e;i.style.colorScheme=r}null==o||o()},[g]),A=n.useCallback(e=>{let t="function"==typeof e?e(S):e;C(t);try{localStorage.setItem(c,t)}catch(e){}},[S]),N=n.useCallback(e=>{E(w(e)),"system"===S&&s&&!t&&L("system")},[S,t]);n.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),n.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?C(e.newValue):A(d))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[A]),n.useEffect(()=>{L(null!=t?t:S)},[t,S]);let M=n.useMemo(()=>({theme:S,setTheme:A,forcedTheme:t,resolvedTheme:"system"===S?x:S,themes:s?[...m,"system"]:m,systemTheme:s?x:void 0}),[S,A,t,x,s,m]);return n.createElement(i.Provider,{value:M},n.createElement(f,{forcedTheme:t,storageKey:c,attribute:h,enableSystem:s,enableColorScheme:l,defaultTheme:d,value:b,themes:m,nonce:g,scriptProps:k}),p)},f=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:a,enableSystem:o,enableColorScheme:l,defaultTheme:i,value:c,themes:m,nonce:d,scriptProps:u}=e,h=JSON.stringify([a,r,i,t,m,c,o,l]).slice(1,-1);return n.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:"(".concat(s.toString(),")(").concat(h,")")}})}),y=(e,t)=>{let r;if(!l){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},v=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},w=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},e=>{var t=t=>e(e.s=t);e.O(0,[302,587,634,775,358],()=>t(4841)),_N_E=e.O()}]);