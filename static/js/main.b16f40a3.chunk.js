(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={contacts:"ContactList_contacts__2ZoMd",addBtn:"ContactList_addBtn__2_Jrl",contactName:"ContactList_contactName__27iAz",contactNumber:"ContactList_contactNumber__3-Lnf"}},21:function(t,e,n){t.exports={label:"Filter_label__2_QKz",inputTitle:"Filter_inputTitle__3j9ce",input:"Filter_input__2pwWb"}},39:function(t,e,n){},64:function(t,e,n){},8:function(t,e,n){t.exports={form:"ContactForm_form__1QZOx",label:"ContactForm_label__33AgA",input:"ContactForm_input__3JuQ_",addBtn:"ContactForm_addBtn__1unZc",inputTitle:"ContactForm_inputTitle__32B89"}},84:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(18),u=n.n(r),o=(n(39),n(9)),i=n(20),s=n(6),l=n(4),b=n(2),d=(Object(b.b)("contacts/addRequest"),Object(b.b)("contacts/addSuccess"),Object(b.b)("contacts/addFail"),Object(b.b)("contacts/deleteRequest"),Object(b.b)("contacts/deleteSuccess"),Object(b.b)("contacts/deleteFail"),Object(b.b)("contacts/fetchRequest"),Object(b.b)("contacts/fetchSuccess"),Object(b.b)("contacts/fetchFail"),Object(b.b)("contacts/filter")),f=(Object(b.b)("contacts/delete"),n(5)),j=n.n(f),p=n(10),O=n(11),m=n.n(O);function h(){return x.apply(this,arguments)}function x(){return(x=Object(p.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(j.a.mark((function t(e){var n,c,a,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,c=e.number,a={name:n,number:c},r=m.a.post("/contacts",a),t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t){return g.apply(this,arguments)}function g(){return(g=Object(p.a)(j.a.mark((function t(e){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.delete("/contacts/".concat(e.target.id));case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}m.a.defaults.baseURL="https://6193c189d3ae6d0017da8819.mockapi.io",m.a.defaults.baseURL="https://6193c189d3ae6d0017da8819.mockapi.io";var N,w,y=Object(b.c)("contacts/addContact",function(){var t=Object(p.a)(j.a.mark((function t(e){var n,c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,c=e.number,t.next=3,_({name:n,number:c});case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),k=Object(b.c)("contacts/deleteContacts",function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),F=Object(b.c)("contacts/fetchContacts",Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),A=Object(b.d)([],(N={},Object(s.a)(N,F.fulfilled,(function(t,e){return e.payload})),Object(s.a)(N,y.fulfilled,(function(t,e){return[].concat(Object(i.a)(t),[e.payload.data])})),Object(s.a)(N,k.fulfilled,(function(t,e){return t.filter((function(t){return t.id!==e.payload.id}))})),N)),B=Object(b.d)("",Object(s.a)({},d,(function(t,e){return e.payload}))),L=Object(b.d)(!1,(w={},Object(s.a)(w,y.fulfilled,(function(){return!1})),Object(s.a)(w,y.rejected,(function(){return!1})),Object(s.a)(w,y.pending,(function(){return!0})),Object(s.a)(w,k.fulfilled,(function(){return!1})),Object(s.a)(w,k.rejected,(function(){return!1})),Object(s.a)(w,k.pending,(function(){return!0})),Object(s.a)(w,F.fulfilled,(function(){return!1})),Object(s.a)(w,F.rejected,(function(){return!1})),Object(s.a)(w,F.pending,(function(){return!0})),w)),S=Object(l.b)({contacts:A,filter:B,loading:L}),T=n(12),z=Object(i.a)(Object(b.e)({serializableCheck:{ignoredActions:[T.a,T.f,T.b,T.c,T.d,T.e]}})),Z=Object(b.a)({reducer:S,middleware:z,devTools:!1}),q=(n(64),n(15)),J=n.n(q),R=n(34),M=n.n(R),Q=n(13),D=function(t){return t.contacts},E=function(t){return t.loading},P=Object(Q.a)([function(t){return t.filter},D],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))})),U=n(1);var I=Object(o.b)((function(t){return{contacts:P(t),isLoading:E(t)}}),(function(t){return{addContact:function(){return t(y())},deleteContact:function(e){return t(k(e))},fetchContacts:function(){return t(F())}}}))((function(t){var e=t.contacts,n=t.deleteContact,a=t.fetchContacts,r=t.isLoading;return Object(c.useEffect)((function(){a()}),[a]),Object(U.jsxs)(U.Fragment,{children:[r&&Object(U.jsx)(M.a,{type:"Bars",color:"#00008B",height:120,width:120}),e.map((function(t){return Object(U.jsxs)("div",{className:J.a.contacts,children:[Object(U.jsx)("p",{id:t.id,className:J.a.contactName,children:t.name}),Object(U.jsx)("p",{className:J.a.contactNumber,children:t.number}),Object(U.jsx)("button",{className:J.a.addBtn,id:t.id,onClick:n,children:"Delete"})]},t.id)}))]})})),K=n(21),W=n.n(K);var $=Object(o.b)((function(t){return{data:t.filter}}),(function(t){return{handler:function(e){return t(d(e.target.value))}}}))((function(t){var e=t.data,n=t.handler;return Object(U.jsxs)("label",{className:W.a.label,children:[Object(U.jsx)("p",{className:W.a.inputTitle,children:"Find"}),Object(U.jsx)("input",{className:W.a.input,type:"text",name:"filter",value:e,onChange:n})]})})),G=n(24),H=n(86),V=n(8),X=n.n(V);var Y=Object(o.b)((function(t){return{contacts:D(t)}}),(function(t){return{onSubmit:function(e){var n=e.name,c=e.number;return t(y({name:n,number:c}))},deleteContact:function(e){return t(k(e))}}}))((function(t){var e=t.onSubmit,n=t.contacts,a=Object(c.useState)(""),r=Object(G.a)(a,2),u=r[0],o=r[1],i=Object(c.useState)(""),s=Object(G.a)(i,2),l=s[0],b=s[1],d=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":b(c);break;default:return}},f=function(){o(""),b("")},j=Object(H.a)(),p=Object(H.a)();return Object(U.jsxs)("form",{className:X.a.form,onSubmit:function(t){if(t.preventDefault(),n.find((function(t){return t.name===u})))return alert("Sorry, contact ".concat(u," already existing")),void f();e({name:u,number:l}),f()},children:[Object(U.jsxs)("label",{className:X.a.label,htmlFor:j,children:[Object(U.jsx)("p",{className:X.a.inputTitle,children:"Name"}),Object(U.jsx)("input",{className:X.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:u,id:j,onChange:d})]}),Object(U.jsxs)("label",{className:X.a.label,htmlFor:p,children:[Object(U.jsx)("p",{className:X.a.inputTitle,children:"Phone"}),Object(U.jsx)("input",{className:X.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,id:p,onChange:d})]}),Object(U.jsx)("button",{className:X.a.addBtn,type:"submit",children:"Add contact"})]})}));var tt=function(){return Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)("h1",{children:"Phonebook"}),Object(U.jsx)(Y,{}),Object(U.jsx)($,{}),Object(U.jsx)("h2",{children:"Contacts"}),Object(U.jsx)(I,{})]})};u.a.render(Object(U.jsx)(a.a.StrictMode,{children:Object(U.jsx)(o.a,{store:Z,children:Object(U.jsx)(tt,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.b16f40a3.chunk.js.map