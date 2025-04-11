"use strict";(self.webpackChunklow_ops=self.webpackChunklow_ops||[]).push([[5235],{476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"environment/monitoring","title":"Monitoring","description":"Monitoring is essential for proactively identifying and addressing system issues, ensuring performance, and","source":"@site/docs/06-environment/04-monitoring.mdx","sourceDirName":"06-environment","slug":"/environment/monitoring","permalink":"/docs/environment/monitoring","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Monitoring"},"sidebar":"tutorialSidebar","previous":{"title":"Actions","permalink":"/docs/environment/actions"},"next":{"title":"Logs","permalink":"/docs/environment/logs"}}');var i=t(4848),s=t(8453),a=t(5537),o=t(9329);const l={title:"Monitoring"},c=void 0,u={},d=[{value:"Available Metrics",id:"available-metrics",level:3},{value:"Datadog Support",id:"datadog-support",level:3}];function h(e){const n={code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Monitoring is essential for proactively identifying and addressing system ",(0,i.jsx)(n.code,{children:"issues"}),", ensuring ",(0,i.jsx)(n.code,{children:"performance"}),", and\nmaintaining overall ",(0,i.jsx)(n.code,{children:"reliability"})," with minimal manual intervention."]}),"\n",(0,i.jsxs)(n.p,{children:["In Low-Ops each ",(0,i.jsx)(n.code,{children:"environment"})," is monitored separately and you can access the monitoring by navigating to\n",(0,i.jsx)(n.code,{children:"Application > Environment > Monitoring"}),". Select the period for which to display the metrics, default is last ",(0,i.jsx)(n.code,{children:"3 hours"}),"."]}),"\n",(0,i.jsx)("img",{src:"/img/monitoring.png",alt:"Monitoring",className:"image"}),"\n",(0,i.jsxs)(n.p,{children:["For more metrics you can go to the Grafana dashboard by clicking on the ",(0,i.jsx)(n.code,{children:"Open in Grafana"})," button."]}),"\n",(0,i.jsx)(n.h3,{id:"available-metrics",children:"Available Metrics"}),"\n","\n",(0,i.jsxs)(a.A,{children:[(0,i.jsxs)(o.A,{value:"generic",label:"Generic Application",default:!0,children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CPU Usage"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Displays the percentage of CPU utilization by the application."})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Memory Usage"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Displays the amount of memory used by the application."})})]}),(0,i.jsxs)(o.A,{value:"mendix",label:"Mendix Application",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CPU Usage"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Displays the percentage of CPU utilization by the application."})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Memory Usage"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Displays the amount of memory used by the application."})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Mendix Runtime Requests (per second)"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Displays the number of requests processed by the Mendix Runtime per second."})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"JVM Memory Usage"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Displays the number of Mendix Runtime sessions."})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Mendix Connection Bus"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Displays the status and performance of the Mendix Connection Bus."})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Microflow Metrics - Mendix Microflow Execution Frequency"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Displays Mendix Microflow Execution Frequency (per second)."})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Microflow Metrics - Mendix Microflow Execution Time"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Displays Mendix Microflow Execution Time.."})})]})]}),"\n",(0,i.jsx)(n.h3,{id:"datadog-support",children:"Datadog Support"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Datadog"})," is a monitoring service that allows you to monitor your application performance and troubleshoot issues."]}),"\n",(0,i.jsx)(n.p,{children:"Set following environment variables in the application environment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  DD_API_KEY=api-key\n  DD_HOSTNAME=hostname\n  DD_SITE=datadoghq.eu\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DD_HOSTNAME"})," is the hostname of the Mendix application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DD_API_KEY"})," is the API key for the Datadog service."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DD_SITE"})," is the Datadog site to use."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5537:(e,n,t)=>{t.d(n,{A:()=>M});var r=t(6540),i=t(4164),s=t(5627),a=t(6347),o=t(372),l=t(604),c=t(1861),u=t(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:t,groupId:i}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,u.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),g=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==r&&(c(n),a(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...s,className:(0,i.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function M(e){const n=(0,f.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}},9329:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var r=t(4164);const i={tabItem:"tabItem_Ymn6"};var s=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:t,children:n})}}}]);