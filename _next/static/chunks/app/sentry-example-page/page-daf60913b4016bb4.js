(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[756],{21852:function(e,t,n){Promise.resolve().then(n.bind(n,77905))},77905:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(57437),a=n(26225),o=n.n(a),s=n(74775),i=n(2936),l=n(17745),c=n(32722),p=n(45209),u=n(51898);function d(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Sentry Onboarding"}),(0,r.jsx)("meta",{name:"description",content:"Test Sentry for your Next.js app!"})]}),(0,r.jsxs)("main",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,r.jsx)("h1",{style:{fontSize:"4rem",margin:"14px 0"},children:(0,r.jsx)("svg",{style:{height:"1em"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 44",children:(0,r.jsx)("path",{fill:"currentColor",d:"M124.32,28.28,109.56,9.22h-3.68V34.77h3.73V15.19l15.18,19.58h3.26V9.22h-3.73ZM87.15,23.54h13.23V20.22H87.14V12.53h14.93V9.21H83.34V34.77h18.92V31.45H87.14ZM71.59,20.3h0C66.44,19.06,65,18.08,65,15.7c0-2.14,1.89-3.59,4.71-3.59a12.06,12.06,0,0,1,7.07,2.55l2-2.83a14.1,14.1,0,0,0-9-3c-5.06,0-8.59,3-8.59,7.27,0,4.6,3,6.19,8.46,7.52C74.51,24.74,76,25.78,76,28.11s-2,3.77-5.09,3.77a12.34,12.34,0,0,1-8.3-3.26l-2.25,2.69a15.94,15.94,0,0,0,10.42,3.85c5.48,0,9-2.95,9-7.51C79.75,23.79,77.47,21.72,71.59,20.3ZM195.7,9.22l-7.69,12-7.64-12h-4.46L186,24.67V34.78h3.84V24.55L200,9.22Zm-64.63,3.46h8.37v22.1h3.84V12.68h8.37V9.22H131.08ZM169.41,24.8c3.86-1.07,6-3.77,6-7.63,0-4.91-3.59-8-9.38-8H154.67V34.76h3.8V25.58h6.45l6.48,9.2h4.44l-7-9.82Zm-10.95-2.5V12.6h7.17c3.74,0,5.88,1.77,5.88,4.84s-2.29,4.86-5.84,4.86Z M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"})})}),(0,r.jsx)("p",{children:"Get started by sending us a sample error:"}),(0,r.jsx)("button",{type:"button",style:{padding:"12px",cursor:"pointer",backgroundColor:"#AD6CAA",borderRadius:"4px",border:"none",color:"white",fontSize:"14px",margin:"18px"},onClick:()=>{!function(e,t){let n=function(e){if(e.startTime){let t={...e};return t.startTimestamp=(0,l.$k)(e.startTime),delete t.startTime,t}return e}(e);(0,i.Ok)(()=>(0,p.$e)(e.scope,r=>{let a=(0,i.Gd)(),o=r.getSpan(),d=e.onlyIfParent&&!o?void 0:function(e,{parentSpan:t,spanContext:n,forceTransaction:r,scope:a}){var o;let u;if(!function(e){if("boolean"==typeof __SENTRY_TRACING__&&!__SENTRY_TRACING__)return!1;let t=(0,p.s3)(),n=t&&t.getOptions();return!!n&&(n.enableTracing||"tracesSampleRate"in n||"tracesSampler"in n)}())return;let d=(0,i.aF)();if(t&&!r)u=t.startChild(n);else if(t){let r=(0,c.j)(t),{traceId:a,spanId:o}=t.spanContext(),s=(0,l.Tt)(t);u=e.startTransaction({traceId:a,parentSpanId:o,parentSampled:s,...n,metadata:{dynamicSamplingContext:r,...n.metadata}})}else{let{traceId:t,dsc:r,parentSpanId:o,sampled:s}={...d.getPropagationContext(),...a.getPropagationContext()};u=e.startTransaction({traceId:t,parentSpanId:o,parentSampled:s,...n,metadata:{dynamicSamplingContext:r,...n.metadata}})}return a.setSpan(u),(o=u)&&((0,s.xp)(o,"_sentryIsolationScope",d),(0,s.xp)(o,"_sentryScope",a)),u}(a,{parentSpan:o,spanContext:n,forceTransaction:e.forceTransaction,scope:r});return function(e,t,n=()=>{}){var r;let a;try{a=e()}catch(e){throw t(e),n(),e}return r=a,(0,u.J8)(r)?r.then(e=>(n(),e),e=>{throw t(e),n(),e}):(n(),r)}(()=>t(d),()=>{if(d){let{status:e}=(0,l.XU)(d);e&&"ok"!==e||d.setStatus("internal_error")}},()=>d&&d.end())}))}({name:"Example Frontend Span",op:"test"},async()=>{if(!(await fetch("/api/sentry-example-api")).ok)throw Error("Sentry Example Frontend Error")})},children:"Throw error!"}),(0,r.jsxs)("p",{children:["Next, look for the error on the"," ",(0,r.jsx)("a",{href:"https://javascript-mastery.sentry.io/issues/?project=4507222371729408",children:"Issues Page"}),"."]}),(0,r.jsxs)("p",{style:{marginTop:"24px"},children:["For more information, see"," ",(0,r.jsx)("a",{href:"https://docs.sentry.io/platforms/javascript/guides/nextjs/",children:"https://docs.sentry.io/platforms/javascript/guides/nextjs/"})]})]})]})}},26225:function(e,t){"use strict";function n(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}},function(e){e.O(0,[31,971,117,744],function(){return e(e.s=21852)}),_N_E=e.O()}]);