"use strict";(self.webpackChunklow_ops=self.webpackChunklow_ops||[]).push([[8099],{4057:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"environment/settings","title":"Settings","description":"Configure your environment with settings for domain, scaling, and environment management.","source":"@site/docs/06-environment/10-settings.mdx","sourceDirName":"06-environment","slug":"/environment/settings","permalink":"/low-ops-docs/docs/environment/settings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Settings"},"sidebar":"tutorialSidebar","previous":{"title":"Variables","permalink":"/low-ops-docs/docs/environment/variables"},"next":{"title":"Administration","permalink":"/low-ops-docs/docs/docs/administration"}}');var s=i(4848),o=i(8453),r=i(4731);const l={title:"Settings"},c=void 0,d={},a=[{value:"Domain Settings",id:"domain-settings",level:3},{value:"Scaling Settings",id:"scaling-settings",level:3},{value:"Delete Environment",id:"delete-environment",level:3},{value:"Mendix Access Settings",id:"mendix-access-settings",level:3},{value:"Mendix Runtime Settings",id:"mendix-runtime-settings",level:3}];function m(n){const e={admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Configure your environment with settings for domain, scaling, and environment management."}),"\n",(0,s.jsxs)(e.p,{children:["Go to ",(0,s.jsx)(e.code,{children:"Application > Environment > Settings"})," to access these settings."]}),"\n",(0,s.jsx)(e.h3,{id:"domain-settings",children:"Domain Settings"}),"\n",(0,s.jsxs)(e.p,{children:["Domain settings configure your environment's domain. The default URL format is ",(0,s.jsx)(e.code,{children:"[app name]-[environment name].[domain]"}),".\nYou can:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Use a custom URL"}),"\n",(0,s.jsxs)(e.li,{children:["Add ",(0,s.jsx)(e.code,{children:"TLS Certificate"})," and ",(0,s.jsx)(e.code,{children:"TLS Certificate Key"})," to enable TLS"]}),"\n"]}),"\n",(0,s.jsx)("img",{src:"/img/domain-settings.png",alt:"Domain Settings",className:"image"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsxs)(e.p,{children:["Re-deploy the environment to apply new domain settings. ",(0,s.jsx)(r.A,{})]})}),"\n",(0,s.jsx)(e.h3,{id:"scaling-settings",children:"Scaling Settings"}),"\n",(0,s.jsx)(e.p,{children:"Adjust your environment's resources:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"CPU allocation"}),"\n",(0,s.jsx)(e.li,{children:"Memory allocation"}),"\n",(0,s.jsx)(e.li,{children:"Number of replicas"}),"\n"]}),"\n",(0,s.jsx)("img",{src:"/img/scaling-settings.png",alt:"Scaling Settings",className:"image"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsxs)(e.p,{children:["Re-deploy the environment to apply new scaling settings. ",(0,s.jsx)(r.A,{})]})}),"\n",(0,s.jsx)(e.h3,{id:"delete-environment",children:"Delete Environment"}),"\n",(0,s.jsx)(e.p,{children:"Remove the current environment and all its resources."}),"\n",(0,s.jsx)("img",{src:"/img/delete-environment.png",alt:"Delete Environment",className:"image"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"This action cannot be undone. All environment resources will be permanently deleted."})}),"\n",(0,s.jsx)(e.h3,{id:"mendix-access-settings",children:"Mendix Access Settings"}),"\n",(0,s.jsx)(e.p,{children:"Get login credentials for:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Mendix Studio Pro"}),"\n",(0,s.jsx)(e.li,{children:"Mendix Debugger"}),"\n"]}),"\n",(0,s.jsx)("img",{src:"/img/mendix-access.png",alt:"Mendix Access",className:"image"}),"\n",(0,s.jsx)(e.h3,{id:"mendix-runtime-settings",children:"Mendix Runtime Settings"}),"\n",(0,s.jsx)(e.p,{children:"Manage Mendix runtime configuration:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Add new settings"}),"\n",(0,s.jsx)(e.li,{children:"Edit existing settings"}),"\n",(0,s.jsx)(e.li,{children:"Remove settings"}),"\n"]}),"\n",(0,s.jsx)("img",{src:"/img/mendix-runtime.png",alt:"Mendix Runtime",className:"image"}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["To override the application URL, add ",(0,s.jsx)(e.code,{children:"ApplicationRootUrl"})," with your custom URL as the ",(0,s.jsx)(e.code,{children:"VALUE"}),"."]})}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsxs)(e.p,{children:["Re-deploy the environment to apply new runtime settings. ",(0,s.jsx)(r.A,{})]})})]})}function g(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(m,{...n})}):m(n)}},4731:(n,e,i)=>{i.d(e,{A:()=>s});var t=i(4848);const s=()=>(0,t.jsx)("a",{href:"/docs/environment/deployment",className:"redeploy-link",children:"Deploy Environment."})},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>l});var t=i(6540);const s={},o=t.createContext(s);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);