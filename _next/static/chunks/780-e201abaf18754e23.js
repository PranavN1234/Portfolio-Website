(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[780],{6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}})},3730:function(e){e.exports={style:{fontFamily:"'__JetBrains_Mono_103c20', '__JetBrains_Mono_Fallback_103c20'",fontStyle:"normal"},className:"__className_103c20",variable:"__variable_103c20"}},9673:function(e,t,n){"use strict";let r;n.d(t,{x8:function(){return tn},VY:function(){return e6},dk:function(){return tt},aV:function(){return e9},h_:function(){return e8},fC:function(){return e5},Dx:function(){return te},xz:function(){return e4}});var o,a,i,u,c,l,s,d=n(2265),f=n(8149),p=n(1584),h=n(8324),v=n(3201),m=n(1715),g=n(2358),y=n(5171),b=n(5137),E=n(7437),w="focusScope.autoFocusOnMount",x="focusScope.autoFocusOnUnmount",C={bubbles:!1,cancelable:!0},R=d.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...i}=e,[u,c]=d.useState(null),l=(0,b.W)(o),s=(0,b.W)(a),f=d.useRef(null),h=(0,p.e)(t,e=>c(e)),v=d.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;d.useEffect(()=>{if(r){let e=function(e){if(v.paused||!u)return;let t=e.target;u.contains(t)?f.current=t:N(f.current,{select:!0})},t=function(e){if(v.paused||!u)return;let t=e.relatedTarget;null===t||u.contains(t)||N(f.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&N(u)});return u&&n.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,u,v.paused]),d.useEffect(()=>{if(u){k.add(v);let e=document.activeElement;if(!u.contains(e)){let t=new CustomEvent(w,C);u.addEventListener(w,l),u.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(N(r,{select:t}),document.activeElement!==n)return}(S(u).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&N(u))}return()=>{u.removeEventListener(w,l),setTimeout(()=>{let t=new CustomEvent(x,C);u.addEventListener(x,s),u.dispatchEvent(t),t.defaultPrevented||N(null!=e?e:document.body,{select:!0}),u.removeEventListener(x,s),k.remove(v)},0)}}},[u,l,s,v]);let m=d.useCallback(e=>{if(!n&&!r||v.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=S(e);return[M(t,e),M(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&N(a,{select:!0})):(e.preventDefault(),n&&N(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,v.paused]);return(0,E.jsx)(y.WV.div,{tabIndex:-1,...i,ref:h,onKeyDown:m})});function S(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function M(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function N(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}R.displayName="FocusScope";var k=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=A(r,e)).unshift(e)},remove(e){var t;null===(t=(r=A(r,e))[0])||void 0===t||t.resume()}});function A(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var j=n(6935),I=n(1383),P=0;function D(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var _=function(){return(_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function T(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var L="right-scroll-bar-position",O="width-before-scroll-bar";function F(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var W="undefined"!=typeof window?d.useLayoutEffect:d.useEffect,B=new WeakMap,V=(void 0===o&&(o={}),(void 0===a&&(a=function(e){return e}),i=[],u=!1,c={read:function(){if(u)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var t=a(e,u);return i.push(t),function(){i=i.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(u=!0;i.length;){var t=i;i=[],t.forEach(e)}i={push:function(t){return e(t)},filter:function(){return i}}},assignMedium:function(e){u=!0;var t=[];if(i.length){var n=i;i=[],n.forEach(e),t=i}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),i={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),i}}}}).options=_({async:!0,ssr:!1},o),c),z=function(){},K=d.forwardRef(function(e,t){var n,r,o,a,i=d.useRef(null),u=d.useState({onScrollCapture:z,onWheelCapture:z,onTouchMoveCapture:z}),c=u[0],l=u[1],s=e.forwardProps,f=e.children,p=e.className,h=e.removeScrollBar,v=e.enabled,m=e.shards,g=e.sideCar,y=e.noIsolation,b=e.inert,E=e.allowPinchZoom,w=e.as,x=e.gapMode,C=T(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),R=(n=[i,t],r=function(e){return n.forEach(function(t){return F(t,e)})},(o=(0,d.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,W(function(){var e=B.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||F(e,null)}),r.forEach(function(e){t.has(e)||F(e,o)})}B.set(a,n)},[n]),a),S=_(_({},C),c);return d.createElement(d.Fragment,null,v&&d.createElement(g,{sideCar:V,removeScrollBar:h,shards:m,noIsolation:y,inert:b,setCallbacks:l,allowPinchZoom:!!E,lockRef:i,gapMode:x}),s?d.cloneElement(d.Children.only(f),_(_({},S),{ref:R})):d.createElement(void 0===w?"div":w,_({},S,{className:p,ref:R}),f))});K.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},K.classNames={fullWidth:O,zeroRight:L};var X=function(e){var t=e.sideCar,n=T(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return d.createElement(r,_({},n))};X.isSideCarExport=!0;var Y=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=s||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,a;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},H=function(){var e=Y();return function(t,n){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},U=function(){var e=H();return function(t){return e(t.styles,t.dynamic),null}},Z={left:0,top:0,right:0,gap:0},$=function(e){return parseInt(e||"",10)||0},q=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[$(n),$(r),$(o)]},J=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return Z;var t=q(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},G=U(),Q="data-scroll-locked",ee=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(Q,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(L," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(O," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(L," .").concat(L," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(O," .").concat(O," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(Q,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},et=function(){var e=parseInt(document.body.getAttribute(Q)||"0",10);return isFinite(e)?e:0},en=function(){d.useEffect(function(){return document.body.setAttribute(Q,(et()+1).toString()),function(){var e=et()-1;e<=0?document.body.removeAttribute(Q):document.body.setAttribute(Q,e.toString())}},[])},er=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;en();var a=d.useMemo(function(){return J(o)},[o]);return d.createElement(G,{styles:ee(a,!t,o,n?"":"!important")})},eo=!1;if("undefined"!=typeof window)try{var ea=Object.defineProperty({},"passive",{get:function(){return eo=!0,!0}});window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch(e){eo=!1}var ei=!!eo&&{passive:!1},eu=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},ec=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),el(e,r)){var o=es(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},el=function(e,t){return"v"===e?eu(t,"overflowY"):eu(t,"overflowX")},es=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ed=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,c=n.target,l=t.contains(c),s=!1,d=u>0,f=0,p=0;do{var h=es(e,c),v=h[0],m=h[1]-h[2]-i*v;(v||m)&&el(e,c)&&(f+=m,p+=v),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(p)||!o&&-u>p)&&(s=!0),s},ef=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ep=function(e){return[e.deltaX,e.deltaY]},eh=function(e){return e&&"current"in e?e.current:e},ev=0,em=[],eg=(l=function(e){var t=d.useRef([]),n=d.useRef([0,0]),r=d.useRef(),o=d.useState(ev++)[0],a=d.useState(U)[0],i=d.useRef(e);d.useEffect(function(){i.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eh),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=d.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,a=ef(e),u=n.current,c="deltaX"in e?e.deltaX:u[0]-a[0],l="deltaY"in e?e.deltaY:u[1]-a[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=ec(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ec(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var p=r.current||o;return ed(p,t,e,"h"===p?c:l,!0)},[]),c=d.useCallback(function(e){if(em.length&&em[em.length-1]===a){var n="deltaY"in e?ep(e):ef(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(eh).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=d.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),s=d.useCallback(function(e){n.current=ef(e),r.current=void 0},[]),f=d.useCallback(function(t){l(t.type,ep(t),t.target,u(t,e.lockRef.current))},[]),p=d.useCallback(function(t){l(t.type,ef(t),t.target,u(t,e.lockRef.current))},[]);d.useEffect(function(){return em.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",c,ei),document.addEventListener("touchmove",c,ei),document.addEventListener("touchstart",s,ei),function(){em=em.filter(function(e){return e!==a}),document.removeEventListener("wheel",c,ei),document.removeEventListener("touchmove",c,ei),document.removeEventListener("touchstart",s,ei)}},[]);var h=e.removeScrollBar,v=e.inert;return d.createElement(d.Fragment,null,v?d.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,h?d.createElement(er,{gapMode:e.gapMode}):null)},V.useMedium(l),X),ey=d.forwardRef(function(e,t){return d.createElement(K,_({},e,{ref:t,sideCar:eg}))});ey.classNames=K.classNames;var eb=new WeakMap,eE=new WeakMap,ew={},ex=0,eC=function(e){return e&&(e.host||eC(e.parentNode))},eR=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eC(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});ew[n]||(ew[n]=new WeakMap);var a=ew[n],i=[],u=new Set,c=new Set(o),l=function(e){!e||u.has(e)||(u.add(e),l(e.parentNode))};o.forEach(l);var s=function(e){!e||c.has(e)||Array.prototype.forEach.call(e.children,function(e){if(u.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,c=(eb.get(e)||0)+1,l=(a.get(e)||0)+1;eb.set(e,c),a.set(e,l),i.push(e),1===c&&o&&eE.set(e,!0),1===l&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),u.clear(),ex++,function(){i.forEach(function(e){var t=eb.get(e)-1,o=a.get(e)-1;eb.set(e,t),a.set(e,o),t||(eE.has(e)||e.removeAttribute(r),eE.delete(e)),o||e.removeAttribute(n)}),--ex||(eb=new WeakMap,eb=new WeakMap,eE=new WeakMap,ew={})}},eS=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),eR(r,o,n,"aria-hidden")):function(){return null}},eM=n(1538),eN="Dialog",[ek,eA]=(0,h.b)(eN),[ej,eI]=ek(eN),eP=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:i=!0}=e,u=d.useRef(null),c=d.useRef(null),[l=!1,s]=(0,m.T)({prop:r,defaultProp:o,onChange:a});return(0,E.jsx)(ej,{scope:t,triggerRef:u,contentRef:c,contentId:(0,v.M)(),titleId:(0,v.M)(),descriptionId:(0,v.M)(),open:l,onOpenChange:s,onOpenToggle:d.useCallback(()=>s(e=>!e),[s]),modal:i,children:n})};eP.displayName=eN;var eD="DialogTrigger",e_=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eI(eD,n),a=(0,p.e)(t,o.triggerRef);return(0,E.jsx)(y.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":eQ(o.open),...r,ref:a,onClick:(0,f.M)(e.onClick,o.onOpenToggle)})});e_.displayName=eD;var eT="DialogPortal",[eL,eO]=ek(eT,{forceMount:void 0}),eF=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=eI(eT,t);return(0,E.jsx)(eL,{scope:t,forceMount:n,children:d.Children.map(r,e=>(0,E.jsx)(I.z,{present:n||a.open,children:(0,E.jsx)(j.h,{asChild:!0,container:o,children:e})}))})};eF.displayName=eT;var eW="DialogOverlay",eB=d.forwardRef((e,t)=>{let n=eO(eW,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eI(eW,e.__scopeDialog);return a.modal?(0,E.jsx)(I.z,{present:r||a.open,children:(0,E.jsx)(eV,{...o,ref:t})}):null});eB.displayName=eW;var eV=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eI(eW,n);return(0,E.jsx)(ey,{as:eM.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,E.jsx)(y.WV.div,{"data-state":eQ(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),ez="DialogContent",eK=d.forwardRef((e,t)=>{let n=eO(ez,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eI(ez,e.__scopeDialog);return(0,E.jsx)(I.z,{present:r||a.open,children:a.modal?(0,E.jsx)(eX,{...o,ref:t}):(0,E.jsx)(eY,{...o,ref:t})})});eK.displayName=ez;var eX=d.forwardRef((e,t)=>{let n=eI(ez,e.__scopeDialog),r=d.useRef(null),o=(0,p.e)(t,n.contentRef,r);return d.useEffect(()=>{let e=r.current;if(e)return eS(e)},[]),(0,E.jsx)(eH,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,f.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,f.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,f.M)(e.onFocusOutside,e=>e.preventDefault())})}),eY=d.forwardRef((e,t)=>{let n=eI(ez,e.__scopeDialog),r=d.useRef(!1),o=d.useRef(!1);return(0,E.jsx)(eH,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var a,i;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var a,i;null===(a=e.onInteractOutside)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let u=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),eH=d.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...i}=e,u=eI(ez,n),c=d.useRef(null),l=(0,p.e)(t,c);return d.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:D()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:D()),P++,()=>{1===P&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),P--}},[]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(R,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:(0,E.jsx)(g.XB,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":eQ(u.open),...i,ref:l,onDismiss:()=>u.onOpenChange(!1)})}),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(e2,{titleId:u.titleId}),(0,E.jsx)(e7,{contentRef:c,descriptionId:u.descriptionId})]})]})}),eU="DialogTitle",eZ=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eI(eU,n);return(0,E.jsx)(y.WV.h2,{id:o.titleId,...r,ref:t})});eZ.displayName=eU;var e$="DialogDescription",eq=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eI(e$,n);return(0,E.jsx)(y.WV.p,{id:o.descriptionId,...r,ref:t})});eq.displayName=e$;var eJ="DialogClose",eG=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eI(eJ,n);return(0,E.jsx)(y.WV.button,{type:"button",...r,ref:t,onClick:(0,f.M)(e.onClick,()=>o.onOpenChange(!1))})});function eQ(e){return e?"open":"closed"}eG.displayName=eJ;var e0="DialogTitleWarning",[e1,e3]=(0,h.k)(e0,{contentName:ez,titleName:eU,docsSlug:"dialog"}),e2=e=>{let{titleId:t}=e,n=e3(e0),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return d.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},e7=e=>{let{contentRef:t,descriptionId:n}=e,r=e3("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return d.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(o)},[o,t,n]),null},e5=eP,e4=e_,e8=eF,e9=eB,e6=eK,te=eZ,tt=eq,tn=eG},4446:function(e,t,n){"use strict";n.d(t,{M:function(){return g}});var r=n(7437),o=n(2265),a=n(7797),i=n(458),u=n(9791);class c extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function l({children:e,isPresent:t}){let n=(0,o.useId)(),a=(0,o.useRef)(null),i=(0,o.useRef)({width:0,height:0,top:0,left:0}),{nonce:l}=(0,o.useContext)(u._);return(0,o.useInsertionEffect)(()=>{let{width:e,height:r,top:o,left:u}=i.current;if(t||!a.current||!e||!r)return;a.current.dataset.motionPopId=n;let c=document.createElement("style");return l&&(c.nonce=l),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${o}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),(0,r.jsx)(c,{isPresent:t,childRef:a,sizeRef:i,children:o.cloneElement(e,{ref:a})})}let s=({children:e,initial:t,isPresent:n,onExitComplete:u,custom:c,presenceAffectsLayout:s,mode:f})=>{let p=(0,i.h)(d),h=(0,o.useId)(),v=(0,o.useMemo)(()=>({id:h,initial:t,isPresent:n,custom:c,onExitComplete:e=>{for(let t of(p.set(e,!0),p.values()))if(!t)return;u&&u()},register:e=>(p.set(e,!1),()=>p.delete(e))}),s?[Math.random()]:[n]);return(0,o.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[n]),o.useEffect(()=>{n||p.size||!u||u()},[n]),"popLayout"===f&&(e=(0,r.jsx)(l,{isPresent:n,children:e})),(0,r.jsx)(a.O.Provider,{value:v,children:e})};function d(){return new Map}var f=n(5050),p=n(9047);let h=e=>e.key||"";function v(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}var m=n(9033);let g=({children:e,exitBeforeEnter:t,custom:n,initial:a=!0,onExitComplete:u,presenceAffectsLayout:c=!0,mode:l="sync"})=>{(0,p.k)(!t,"Replace exitBeforeEnter with mode='wait'");let d=(0,o.useMemo)(()=>v(e),[e]),g=d.map(h),y=(0,o.useRef)(!0),b=(0,o.useRef)(d),E=(0,i.h)(()=>new Map),[w,x]=(0,o.useState)(d),[C,R]=(0,o.useState)(d);(0,m.L)(()=>{y.current=!1,b.current=d;for(let e=0;e<C.length;e++){let t=h(C[e]);g.includes(t)?E.delete(t):!0!==E.get(t)&&E.set(t,!1)}},[C,g.length,g.join("-")]);let S=[];if(d!==w){let e=[...d];for(let t=0;t<C.length;t++){let n=C[t],r=h(n);g.includes(r)||(e.splice(t,0,n),S.push(n))}"wait"===l&&S.length&&(e=S),R(v(e)),x(d);return}let{forceRender:M}=(0,o.useContext)(f.p);return(0,r.jsx)(r.Fragment,{children:C.map(e=>{let t=h(e),o=d===C||g.includes(t);return(0,r.jsx)(s,{isPresent:o,initial:(!y.current||!!a)&&void 0,custom:o?void 0:n,presenceAffectsLayout:c,mode:l,onExitComplete:o?void 0:()=>{if(!E.has(t))return;E.set(t,!0);let e=!0;E.forEach(t=>{t||(e=!1)}),e&&(null==M||M(),R(b.current),u&&u())},children:e},t)})})}}}]);