(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[655],{8093:function(e,t,n){"use strict";var r=n(7294),o=n(6921);function a(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var u=a(r),l=i(o);"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),t.R=function({compiledSource:e,scope:t,components:n={},lazy:o}){const[a,i]=r.useState(!o||"undefined"===typeof window);r.useEffect((()=>{if(o){const e=window.requestIdleCallback((()=>{i(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const c=r.useMemo((()=>{const n=Object.assign({mdx:l.mdx,React:u.default},t),r=Object.keys(n),o=Object.values(n),a=Reflect.construct(Function,r.concat(`${e}; return MDXContent;`));return a.apply(a,o)}),[t,e]);if(!a)return u.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const s=u.default.createElement(l.MDXProvider,{components:n},u.default.createElement(c,null));return o?u.default.createElement("div",null,s):s}},6921:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return c},MDXProvider:function(){return d},mdx:function(){return y},useMDXComponents:function(){return f},withMDXComponents:function(){return s}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){return function(t){var n=f(t.components);return r.createElement(e,a({},t,{components:n}))}},f=function(e){var t=r.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=f(n),d=o,v=s["".concat(i,".").concat(d)]||s[d]||p[d]||a;return n?r.createElement(v,u(u({ref:t},c),{},{components:n})):r.createElement(v,u({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var a=n.length,i=new Array(a);i[0]=v;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"===typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},9669:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[course]/[lesson]",function(){return n(6911)}])},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(6273),u=n(387),l=n(7190);var c={};function s(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=u.useRouter(),f=a.default.useMemo((function(){var t=r(i.resolveHref(o,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?i.resolveHref(o,e.as):a||n}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,y=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var _=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,g=r(l.useIntersection({rootMargin:"200px"}),2),w=g[0],O=g[1],j=a.default.useCallback((function(e){w(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,w]);a.default.useEffect((function(){var e=O&&n&&i.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,r=c[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(o,d,p,{locale:t})}),[p,d,O,b,n,o]);var x={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:u}))}(e,o,d,p,y,h,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&s(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:o&&o.locale,k=o&&o.isLocaleDomain&&i.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);x.href=k||i.addBasePath(i.addLocale(p,E,o&&o.defaultLocale))}return a.default.cloneElement(t,x)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,l=o.useRef(),c=r(o.useState(!1),2),s=c[0],f=c[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||s||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),a=n(9311),i="undefined"!==typeof IntersectionObserver;var u=new Map},638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}i(n(7294));var a=i(n(4302));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,u=(i=n(7294))&&i.__esModule?i:{default:i},l=n(7161),c=n(6319);var s=[],f=[],d=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var v=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,o;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),o&&r(t,o),e}();function y(e){return function(e,t){var n=function(){if(!o){var t=new v(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=u.default.lazy(r.loader));var o=null;if(!d&&"function"===typeof r.webpack&&!r.suspense){var i=r.webpack();f.push((function(e){var t=!0,r=!1,o=void 0;try{for(var a,u=i[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var l=a.value;if(-1!==e.indexOf(l))return n()}}catch(c){r=!0,o=c}finally{try{t||null==u.return||u.return()}finally{if(r)throw o}}}))}var s=r.suspense?function(e,t){return u.default.createElement(r.lazy,a({},e,{ref:t}))}:function(e,t){n();var a=u.default.useContext(c.LoadableContext),i=l.useSubscription(o);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),u.default.useMemo((function(){return i.loading||i.error?u.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return s.preload=function(){return!r.suspense&&n()},s.displayName="LoadableComponent",u.default.forwardRef(s)}(p,e)}function h(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return h(e,t)}))}y.preloadAll=function(){return new Promise((function(e,t){h(s).then(e,t)}))},y.preloadReady=function(e){var t=void 0===e?[]:e;return new Promise((function(e){var n=function(){return d=!0,e()};h(f,t).then(n,n)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var m=y;t.default=m},6911:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return v}});var r=n(5893),o=n(1664),a=(n(9008),n(5152),n(8093)),i=n(7208),u=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}function s(e){return(0,r.jsxs)("div",{className:u().nav,children:[(0,r.jsx)(o.default,{href:"/".concat(e.courseData.href),children:(0,r.jsxs)("div",{className:u()["nav-title"],style:{backgroundImage:"url(/img/thumbnails/".concat(e.courseData.href,".svg)")},children:[(0,r.jsx)(o.default,{href:"/",children:(0,r.jsxs)("div",{className:u()["nav-org-banner"],children:[(0,r.jsx)("img",{src:"/img/Logo.svg",alt:"logo"}),(0,r.jsx)("h1",{children:"Return STEM;"})]})}),(0,r.jsxs)("h1",{children:[" ",e.courseData.name," "]})]})}),(0,r.jsx)("div",{style:{paddingTop:"20px"}}),(0,r.jsx)("div",{className:u()["nav-lesson-list"],children:(0,r.jsx)("div",{children:e.walkthroughData.lessons.map((function(t){return(0,r.jsx)(o.default,{href:"/".concat(e.courseData.href,"/").concat(t.href),children:e.lessonData.href===t.href?(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:u()["nav-lesson-active"],children:t.name}),(0,r.jsx)("div",{className:u()["nav-lesson-header-list"],children:e.headings.map((function(e){return 1===e.level?(0,r.jsx)(o.default,{href:"#".concat(e.slug),children:(0,r.jsx)("div",{children:(0,r.jsx)(a.R,c({},e.md))})},e.slug):""}))})]}):(0,r.jsx)("div",{className:u()["nav-lesson"],children:t.name})},"".concat(e.courseData.href,"/").concat(t.href))}))})})]})}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}var p=!0;function v(e){var t=e.courseData,n=e.walkthroughData,o=e.lessonData,i=e.mdContent,l=e.headings;return(0,r.jsxs)("div",{className:u()["documentation-container"],children:[(0,r.jsx)("div",{children:(0,r.jsx)(s,{courseData:t,walkthroughData:n,lessonData:o,headings:l})}),(0,r.jsx)("div",{className:u()["topbar-container"],children:(0,r.jsx)("div",{className:u()["content-container"],children:(0,r.jsxs)("div",{className:u()["md-container"],children:[(0,r.jsxs)("h1",{children:[o.name," "]}),(0,r.jsx)("div",{className:u().markdown,children:(0,r.jsx)(a.R,d({},i))})]})})})]})}},7208:function(e){e.exports={markdown:"guide_markdown__dJyaS",nav:"guide_nav__U1O_f","nav-lesson-list":"guide_nav-lesson-list__G3G6W","nav-org-banner":"guide_nav-org-banner__hbVFa","nav-title":"guide_nav-title__pLUMQ","nav-lesson":"guide_nav-lesson__YnCAf","nav-lesson-header-list":"guide_nav-lesson-header-list___lRHi","nav-lesson-active":"guide_nav-lesson-active__cncxe","md-container":"guide_md-container__SPHsq",topbar:"guide_topbar__286_X","topbar-container":"guide_topbar-container__nVDvC","content-container":"guide_content-container___oA0l","documentation-container":"guide_documentation-container__UWfo2"}},5152:function(e,t,n){n(638)},9008:function(e,t,n){n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=9669,e(e.s=t);var t}));var t=e.O();_N_E=t}]);