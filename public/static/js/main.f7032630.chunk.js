(this["webpackJsonpurl-shortener-client"]=this["webpackJsonpurl-shortener-client"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(28),c=n.n(a),o=(n(36),n(6)),l=n(3),i=(n(37),n(0));var j=function(){return Object(i.jsx)("div",{className:"container landing",children:Object(i.jsxs)("div",{className:"flex justify-center row h-100",children:[Object(i.jsx)("div",{className:"col-6 flex justify-center my-auto",children:"We help shorten your URL."}),Object(i.jsxs)("div",{className:"col-6 flex justify-center my-auto flex-column align-items-center",children:[Object(i.jsx)(o.b,{to:"signup",className:"btn btn-dark-blue",children:"Sign Up"}),Object(i.jsx)(o.b,{to:"signin",className:"btn btn-light-blue mt-1",children:"Sign In"})]})]})})},u=n(5),b=n(11),d=n(17),m=n(16);function h(){var e=Object(d.b)(),t=e.register,n=e.handleSubmit,s=e.setError,a=e.getValues,c=e.formState.errors,j=Object(r.useState)(!1),h=Object(b.a)(j,2),O=h[0],p=h[1];return Object(i.jsxs)("div",{className:"container flex justify-center align-items-center",children:[O&&Object(i.jsx)(l.a,{to:"/signin"}),Object(i.jsxs)("form",{className:"flex-column auth-form",onSubmit:n((function(e){var t={name:e.name,username:e.username,password:e.password},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};try{fetch("/api/auth/signup",n).then((function(e){return e.json()})).then((function(e){if(console.log(e),!e.success)return s("username",{type:"manual",message:e.message});p(!0)}))}catch(r){console.error(r)}})),children:[Object(i.jsx)("label",{htmlFor:"",children:"Name"}),Object(i.jsx)("input",Object(u.a)(Object(u.a)({},t("name",{required:"Name field cannot be empty"})),{},{type:"text"})),Object(i.jsx)(m.a,{errors:c,name:"name",render:function(e){var t=e.message;return Object(i.jsx)("small",{className:"color-error",children:t})}}),Object(i.jsx)("label",{className:"mt-1",htmlFor:"",children:"Username"}),Object(i.jsx)("input",Object(u.a)(Object(u.a)({},t("username",{required:"Username field cannot be empty"})),{},{type:"text"})),Object(i.jsx)(m.a,{errors:c,name:"username",render:function(e){var t=e.message;return Object(i.jsx)("small",{className:"color-error",children:t})}}),Object(i.jsx)("label",{className:"mt-1",htmlFor:"",children:"Password"}),Object(i.jsx)("input",Object(u.a)(Object(u.a)({},t("password",{required:"Password field cannot be empty",minLength:{value:8,message:"Password must be at least 8 characters"}})),{},{type:"password"})),Object(i.jsx)(m.a,{errors:c,name:"password",render:function(e){var t=e.message;return Object(i.jsx)("small",{className:"color-error",children:t})}}),Object(i.jsx)("label",{className:"mt-1",htmlFor:"",children:"Confirm Password"}),Object(i.jsx)("input",Object(u.a)(Object(u.a)({},t("confirmPassword",{required:"Confirm password field cannot be empty",validate:function(e){return e===a("password")||"Password does not match"}})),{},{type:"password"})),Object(i.jsx)(m.a,{errors:c,name:"confirmPassword",render:function(e){var t=e.message;return Object(i.jsx)("small",{className:"color-error",children:t})}}),Object(i.jsx)("button",{className:"btn btn-dark-blue my-1",type:"submit",children:"Sign Up"}),Object(i.jsxs)("small",{children:["Already had an account? ",Object(i.jsx)(o.b,{to:"/signin",children:"Sign in"})]})]})]})}function O(){var e=Object(d.b)(),t=e.register,n=e.handleSubmit,s=e.setError,a=e.formState.errors,c=Object(r.useState)(!1),j=Object(b.a)(c,2),h=j[0],O=j[1];return Object(i.jsxs)("div",{className:"container flex justify-center align-items-center",children:[h&&Object(i.jsx)(l.a,{to:"/home"}),Object(i.jsxs)("form",{className:"flex-column auth-form",onSubmit:n((function(e){var t={username:e.username,password:e.password},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};try{fetch("/api/auth/signin",n).then((function(e){return e.json()})).then((function(e){return e.success?(localStorage.setItem("user",JSON.stringify(e.value)),O(!0),Object(i.jsx)(l.a,{to:"/home"})):s("username",{type:"manual",message:e.message})}))}catch(r){console.error(r)}})),children:[Object(i.jsx)("label",{className:"mt-1",htmlFor:"",children:"Username"}),Object(i.jsx)("input",Object(u.a)(Object(u.a)({},t("username",{required:"Username field cannot be empty"})),{},{type:"text"})),Object(i.jsx)(m.a,{errors:a,name:"username",render:function(e){var t=e.message;return Object(i.jsx)("small",{className:"color-error",children:t})}}),Object(i.jsx)("label",{className:"mt-1",htmlFor:"",children:"Password"}),Object(i.jsx)("input",Object(u.a)(Object(u.a)({},t("password",{required:"Password field cannot be empty",minLength:{value:8,message:"Password must be at least 8 characters"}})),{},{type:"password"})),Object(i.jsx)(m.a,{errors:a,name:"password",render:function(e){var t=e.message;return Object(i.jsx)("small",{className:"color-error",children:t})}}),Object(i.jsx)("button",{className:"btn btn-dark-blue my-1",type:"submit",children:"Sign In"}),Object(i.jsxs)("small",{children:["Don't have an account? ",Object(i.jsx)(o.b,{to:"/signup",children:"Sign up"})]})]})]})}var p=n(13),x=n(14),f=n(15),g=n(23),v=n(22),y=n(2),N=n.n(y),S=n(10),w=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).state={urls:[],token:""},r.getUrls=r.getUrls.bind(Object(f.a)(r)),r}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.getUrls()}},{key:"getUrls",value:function(){var e=Object(S.a)(N.a.mark((function e(){var t,n=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,JSON.parse(localStorage.getItem("user")).token;case 3:e.t1=e.sent,e.t2={token:e.t1},e.t0.setState.call(e.t0,e.t2),t={method:"GET",headers:{"Content-Type":"application/json",Authorization:this.state.token}};try{fetch("/api/url/list",t).then((function(e){return e.json()})).then((function(e){e.success&&n.setState({urls:e.value.urls})}))}catch(r){r&&console.error(r)}case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:this.state.urls&&this.state.urls.map((function(e){return Object(i.jsx)("li",{children:e.shortUrl},e._id)}))})})}}]),n}(s.a.Component),C=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).state={url:"",generatedUrl:"",copiedToClipboard:!1},r.handleChange=r.handleChange.bind(Object(f.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(f.a)(r)),r.copyToClipboard=r.copyToClipboard.bind(Object(f.a)(r)),r}return Object(x.a)(n,[{key:"handleChange",value:function(e){this.setState({url:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this,n={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token||""},body:JSON.stringify({longUrl:this.state.url})};try{fetch("http://localhost:3000/api/url/shorten",n).then((function(e){return e.json()})).then((function(e){e.success&&(console.log(e),t.setState({generatedUrl:e.value.url,copiedToClipboard:!1}))}))}catch(r){console.error(r)}e.preventDefault()}},{key:"copyToClipboard",value:function(e){this.setState({copiedToClipboard:!0}),navigator.clipboard.writeText(this.state.generatedUrl)}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container row",children:[Object(i.jsxs)("div",{className:"col-6 p-2",children:[Object(i.jsx)("form",{onSubmit:this.handleSubmit,children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("input",{type:"text",name:"url",value:this.state.url,onChange:this.handleChange,placeholder:"Enter your URL...",className:"mr-1 col-8"}),Object(i.jsx)("input",{className:"btn btn-light-blue",type:"submit",value:"Generate URL"})]})}),this.state.generatedUrl&&Object(i.jsxs)("div",{className:"mt-1",children:[Object(i.jsx)("label",{htmlFor:"",children:"Short URL"}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("input",{type:"text",disabled:!0,value:this.state.generatedUrl,className:"col-8 mr-1"}),Object(i.jsx)("input",{className:"btn btn-dark-blue",type:"button",value:"Copy to clipboard",onClick:this.copyToClipboard})]})]}),this.state.generatedUrl&&this.state.copiedToClipboard&&Object(i.jsx)("small",{children:"URL copied to clipboard"})]}),Object(i.jsxs)("div",{className:"col-6 p-2",children:[Object(i.jsx)("h3",{children:"Generated URL"}),Object(i.jsx)(w,{})]})]})}}]),n}(s.a.Component),U=function(){return localStorage.removeItem("user"),Object(i.jsx)(l.a,{to:"/"})},k=n(31),T=["component"],P=function(e){var t=e.component,n=Object(k.a)(e,T),r=JSON.parse(localStorage.getItem("user"))||null;return Object(i.jsx)(l.b,Object(u.a)(Object(u.a)({},n),{},{render:function(e){return r?Object(i.jsx)(t,Object(u.a)(Object(u.a)({},n),e)):Object(i.jsx)(l.a,{to:{pathname:"/",state:{from:e.location}}})}}))};var L=function(e){return["home","list"].includes(e.location.pathname.slice(1))?Object(i.jsxs)("ul",{className:"navbar row",children:[Object(i.jsx)("li",{className:"mr-2",children:Object(i.jsx)(o.b,{className:"color-white",to:"/home",children:"Generate URL"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{className:"color-white",to:"/logout",children:"Logout"})})]}):null};var F=function(){return Object(i.jsx)(o.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(l.b,{path:"/",component:L}),Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.b,{exact:!0,path:"/",children:Object(i.jsx)(j,{})}),Object(i.jsx)(l.b,{path:"/signup",children:Object(i.jsx)(h,{})}),Object(i.jsx)(l.b,{path:"/signin",children:Object(i.jsx)(O,{})}),Object(i.jsx)(P,{path:"/home",component:C}),Object(i.jsx)(P,{path:"/logout",component:U})]})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))};c.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(F,{})}),document.getElementById("root")),I()}},[[45,1,2]]]);
//# sourceMappingURL=main.f7032630.chunk.js.map