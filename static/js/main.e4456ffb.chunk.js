(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{20:function(e,t,a){e.exports=a(36)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=(a(25),a(2)),l=a(12),s=a(13),u=a(4),m=a(16),d=a(17),f=a(14),h=(a(26),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).createTasks=n.createTasks.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"delete",value:function(e){this.props.delete(e)}},{key:"createTasks",value:function(e){var t=this;return r.a.createElement("li",{key:e.key},e.text,r.a.createElement("button",{type:"button",onClick:function(){return t.delete(e.key)}},"X"))}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return r.a.createElement("ul",{className:"theList"},r.a.createElement(f.a,{duration:250,easing:"ease-out"},e))}}]),a}(n.Component)),b=(a(27),a(28),a(37)),k=function(){return r.a.createElement("footer",{className:"fadeInUp",style:{animationDelay:"2s"}},r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://github.com/rohit1204/todo-list",target:"__blank",rel:"noopener noreferrer"},"To-Do List")),r.a.createElement("a",{href:"https://github.com/rohit1204",target:"__blank",className:"github"},r.a.createElement("ion-icon",{name:"logo-github"})),r.a.createElement("a",{href:"https://instagram.com/rohit.ahuja04",target:"__blank",className:"github"},r.a.createElement(b.a,{color:"#fb5581"})))},v=a(5),E=(a(31),a(42)),p=a(38),j=a(39),y=a(40);var O=function(e){var t=e.darkMode,a=e.setDarkMode,c=Object(n.useState)(!1),o=Object(i.a)(c,2),l=o[0],s=o[1],u=Object(E.a)("isThemeSet",!1),m=Object(i.a)(u,2),d=(m[0],m[1]);return Object(p.a)(l),r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar-left",onClick:function(){a((function(e){return!e})),d(!0)}},t?r.a.createElement(j.a,{color:"#ffc107"}):r.a.createElement(y.a,null)),r.a.createElement("div",{className:"navbar-middle"},r.a.createElement(v.b,{to:"/",onClick:function(){s(!1)}},"To-Do ",r.a.createElement("span",null,"List"))))},g=a(41);var w=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1],l=Object(n.useRef)(""),s=Object(E.a)("darkMode",!1),u=Object(i.a)(s,2),m=u[0],d=u[1],f=Object(E.a)("isThemeSet",!1),b=Object(i.a)(f,1)[0];return Object(g.a)((function(){window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches&&!b?d(!0):!window.matchMedia||window.matchMedia("(prefers-color-scheme:dark)").matches||b||d(!1)})),r.a.useEffect((function(){m?document.querySelector("body").classList.add("dark-mode"):document.querySelector("body").classList.remove("dark-mode")}),[m]),r.a.createElement("div",{className:"todoListMain"},r.a.createElement(v.a,null,r.a.createElement(O,{darkMode:m,setDarkMode:d}),r.a.createElement("div",{className:"header"},r.a.createElement("form",{onSubmit:function(e){if(" "!==l.value){var t={text:l.value,key:Date.now()};o((function(e){return e.concat(t)})),l.value=" "}console.log(o),e.preventDefault()}},r.a.createElement("input",{ref:function(e){return l=e},placeholder:"enter task"}),r.a.createElement("button",{type:"submit"},"add"))),r.a.createElement(h,{entries:c,delete:function(e){var t=c.filter((function(t){return t.key!==e}));o(t)}}),r.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.e4456ffb.chunk.js.map