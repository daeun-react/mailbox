(this["webpackJsonpdaeun-mailbox"]=this["webpackJsonpdaeun-mailbox"]||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(19),i=n.n(r),s=n(18),l=n(8),o=n.n(l),d=n(2);var u,j=function(e){var t=e.data,n=e.section,a=e.onSectionChange,c=t.filter((function(e){return"inbox"===e.section&&"false"===e.read})).length,r=t.filter((function(e){return"trash"===e.section&&"false"===e.read})).length;return Object(d.jsx)("aside",{className:"sidebar",children:Object(d.jsxs)("ul",{className:"sidebar_container",children:[Object(d.jsx)("li",{onClick:function(){return a("inbox")},children:Object(d.jsxs)("button",{type:"button",className:o()({active:"inbox"===n}),children:[Object(d.jsxs)("span",{children:[Object(d.jsx)(s.a,{}),Object(d.jsx)("span",{children:" \ubc1b\uc740 \uba54\uc77c\ud568 "})]}),Object(d.jsx)("span",{className:"count",children:c})]})}),Object(d.jsx)("li",{onClick:function(){return a("trash")},children:Object(d.jsxs)("button",{type:"button",className:o()({active:"trash"===n}),children:[Object(d.jsxs)("span",{children:[Object(d.jsx)(s.b,{}),Object(d.jsx)("span",{children:" \uc9c0\uc6b4 \uba54\uc77c\ud568 "})]}),Object(d.jsx)("span",{className:"count",children:r})]})})]})})},m=n(34),b=n(37),h={theme:"light"},O=function(e,t){switch(t.type){case"DARK_MODE":return localStorage.setItem("theme","dark"),{theme:"dark"};case"LIGNT_MODE":return localStorage.setItem("theme","light"),{theme:"light"};default:return e}},f=Object(a.createContext)(),x=function(e){var t=Object(a.useReducer)(O,h),n=Object(b.a)(t,2),c=n[0],r=n[1];return Object(d.jsx)(f.Provider,{value:{state:c,dispatch:r},children:e.children})},v=n(12),p=n(10),_=n(7),g=n.n(_),N=n(13),E=n(16),I=n(73),k=n(72),w=n(24),S=n(25),y=n.n(S),T=function(){var e=Object(w.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat("http://localhost:4000","/mails"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=g.a.mark(B),D=g.a.mark(J),M="mail/SET_SECTION",R="mail/SET_READ",G="mail/SET_DELETE",A="mail/GET_ITEMS",L=Object(I.a)(M,(function(e){return e})),U=Object(I.a)(R,(function(e){return e})),F=Object(I.a)(G,(function(e){return e})),K=Object(I.a)(A);function B(e){var t,n,a;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t="".concat(e,"_SUCCESS"),n="".concat(e,"_FAILURE"),c.prev=1,c.next=4,Object(N.b)(T);case 4:return a=c.sent,c.next=7,Object(N.c)({type:t,payload:a});case 7:c.next=13;break;case 9:return c.prev=9,c.t0=c.catch(1),c.next=13,Object(N.c)({type:n,failure:!0,payload:c.t0});case 13:case"end":return c.stop()}}),C,null,[[1,9]])}function J(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.d)(A,(function(){return B(A)}));case 2:case"end":return e.stop()}}),D)}var H=Object(k.a)((u={},Object(p.a)(u,M,(function(e,t){var n=t.payload;return Object(E.a)(e,(function(e){e.section=n,e.selectedId=e.items.data.findIndex((function(e){return e.section===n}))+1}))})),Object(p.a)(u,R,(function(e,t){var n=t.payload;return Object(E.a)(e,(function(e){var t=e.items.data.findIndex((function(e){return e.id===n}));e.items.data[t].read=!0,e.selectedId=n}))})),Object(p.a)(u,G,(function(e,t){var n=t.payload;return Object(E.a)(e,(function(t){var a=t.items.data.findIndex((function(e){return e.id===n}));t.items.data[a].section="trash";var c=e.items.data.findIndex((function(e){return"inbox"===e.section&&e.id!==n}));c>-1?(t.items.data[c].read=!0,t.selectedId=t.items.data[c].id):(t.items.data[0].read=!0,t.selectedId=1)}))})),Object(p.a)(u,A,(function(e,t){return Object(E.a)(e,(function(e){e.items={loading:!0,data:null,failure:null}}))})),Object(p.a)(u,"mail/GET_ITEMS_SUCCESS",(function(e,t){var n=t.payload;return Object(E.a)(e,(function(e){e.items={loading:!1,data:n,failure:null}}))})),Object(p.a)(u,"mail/GET_ITEMS_FAILURE",(function(e,t){var n=t.payload;return Object(E.a)(e,(function(e){e.items={loading:!1,data:null,failure:n}}))})),u),{selectedId:1,section:"inbox",items:{loading:!1,data:[],failure:null}});var P=function(e){var t=e.id,n=e.read,c=e.title,r=e.from,i=e.time,s=Object(v.b)(),l=Object(v.c)((function(e){return e.mail})).selectedId,u=Object(a.useContext)(f).state,j=Object(a.useRef)(null);return Object(a.useEffect)((function(){t===l&&j.current.scrollIntoView({behavior:"smooth",block:"center"})}),[t,l]),Object(d.jsxs)("div",{className:o()("mail_items",{selected:t===l},{theme_light:"light"===u.theme},{theme_dark:"dark"===u.theme}),onClick:function(){s(U(t))},ref:j,children:[Object(d.jsx)("div",{className:"mail_items_trunc","data-read":n}),Object(d.jsx)("div",{className:"mail_items_title trunc",children:c}),Object(d.jsxs)("div",{className:"mail_items_sub",children:[Object(d.jsx)("span",{className:"mail_items_from trunc",children:r}),Object(d.jsx)("span",{className:"mail_items_time trunc",children:i.split(" ")[0]})]})]})};var V=function(e){var t=e.data,n=e.section,c=Object(a.useContext)(f).state;return Object(d.jsx)("div",{className:o()("mail_list",{theme_dark:"dark"===c.theme}),children:t.filter((function(e){return e.section===n})).map((function(e){return Object(d.jsx)(P,Object(m.a)({},e),e.id)}))})};var W=function(e){var t=e.selectedItem,n=e.onGotoTrash,c=t.id,r=t.title,i=t.from,l=t.time,u=t.msg,j=t.section,m=Object(a.useContext)(f).state;return Object(d.jsxs)("div",{className:o()("mail_view",{theme_light:"light"===m.theme},{theme_dark:"dark"===m.theme}),children:[Object(d.jsxs)("div",{className:"mail_view_header",children:[Object(d.jsx)("h3",{className:"mail_view_title",children:r}),"trash"!==j&&Object(d.jsx)(s.b,{className:"btn_delete",onClick:function(){return n(c)}}),Object(d.jsxs)("div",{className:"mail_sub",children:[Object(d.jsx)("div",{className:"mail_view_from",children:i}),Object(d.jsx)("div",{className:"mail_view_time",children:l})]})]}),Object(d.jsx)("div",{className:"mail_view_msg",children:u})]})};n(67);var q=function(){var e=Object(v.c)((function(e){return e.mail})),t=e.selectedId,n=e.section,c=e.items,r=Object(v.b)();if(Object(a.useEffect)((function(){r(K())}),[r]),!c.data)return null;if(c.loading)return Object(d.jsx)("div",{className:"loading",children:"loading..."});if(c.failure)return Object(d.jsx)("div",{children:"error"});var i=c.data.filter((function(e){return e.id===t}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{data:c.data,section:n,onSectionChange:function(e){return r(L(e))}}),Object(d.jsxs)("div",{className:"mail_container",children:[Object(d.jsx)(V,{data:c.data,section:n}),0===i.length?Object(d.jsx)("div",{className:"mail_view",children:"\uba54\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."}):Object(d.jsx)(W,{selectedItem:i[0],onGotoTrash:function(e){return r(F(e))}})]})]})};n(68);var z=function(){var e=Object(a.useContext)(f),t=e.state,n=e.dispatch;return Object(d.jsx)("button",{type:"button",className:o()("btn_darkmode",{btn_light:"light"===t.theme}),onClick:function(){"light"===t.theme?n({type:"DARK_MODE"}):n({type:"LIGNT_MODE"})},children:"BUTTON"})};n(69);var Q=function(){var e=Object(a.useContext)(f).dispatch;return Object(a.useEffect)((function(){var t=localStorage.getItem("theme");t||(t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",localStorage.setItem("theme",t));"dark"===t&&e({type:"DARK_MODE"}),"light"===t&&e({type:"LIGHT_MODE"})}),[e]),Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(z,{}),Object(d.jsx)("div",{className:"mail_wrapper",children:Object(d.jsx)(q,{})})]})},X=n(11),Y=n(38),Z=n(35),$=n(36),ee=g.a.mark(te);function te(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)([J()]);case 2:case"end":return e.stop()}}),ee)}var ne=Object(X.combineReducers)({mail:H}),ae=Object(Y.a)(),ce=Object(X.createStore)(ne,Object(Z.composeWithDevTools)(Object(X.applyMiddleware)(ae)));ae.run(te),i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x,{children:Object(d.jsx)(v.a,{store:ce,children:Object(d.jsx)(Q,{})})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.7c99e7a7.chunk.js.map