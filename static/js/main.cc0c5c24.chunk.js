(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__jeoBw",label:"ContactForm_label__z-4lJ",input:"ContactForm_input__jk_l0",addBtn:"ContactForm_addBtn__2_IW-",inputTitle:"ContactForm_inputTitle__16ev4"}},,,function(t,e,n){t.exports={contacts:"ContactList_contacts__ZQlue",addBtn:"ContactList_addBtn__3dA_i",contactName:"ContactList_contactName__3F05g",contactNumber:"ContactList_contactNumber__hhp6l"}},,function(t,e,n){t.exports={label:"Filter_label__1Lbhr",inputTitle:"Filter_inputTitle__1Imd4",input:"Filter_input__1RJpj"}},,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),o=(n(16),n(10)),s=n(3),l=n(20),u=(n(17),n(5)),d=n.n(u),b=n(0);function m(t){var e=t.contacts,n=t.handleBtn;return Object(b.jsx)(b.Fragment,{children:e.map((function(t){return Object(b.jsxs)("div",{className:d.a.contacts,children:[Object(b.jsx)("p",{id:t.id,className:d.a.contactName,children:t.name}),Object(b.jsx)("p",{className:d.a.contactNumber,children:t.number}),Object(b.jsx)("button",{className:d.a.addBtn,id:t.id,onClick:n,children:"Delete"})]},t.id)}))})}var j=n(7),p=n.n(j);function O(t){var e=t.data,n=t.handler;return Object(b.jsxs)("label",{className:p.a.label,children:[Object(b.jsx)("p",{className:p.a.inputTitle,children:"Find"}),Object(b.jsx)("input",{className:p.a.input,type:"text",name:"filter",value:e,onChange:n})]})}var h=n(2),_=n.n(h);function f(t){t.contacts;var e=t.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),d=u[0],m=u[1],j=Object(a.useState)(""),p=Object(s.a)(j,2),O=(p[0],p[1]),h=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":i(a);break;case"number":m(a);break;default:return}},f=Object(l.a)(),x=Object(l.a)();return Object(b.jsxs)("form",{className:_.a.form,onSubmit:function(t){t.preventDefault(),O({id:Object(l.a)(),name:r,number:d}),e({name:r,number:d}),i(""),m("")},children:[Object(b.jsxs)("label",{className:_.a.label,htmlFor:f,children:[Object(b.jsx)("p",{className:_.a.inputTitle,children:"Name"}),Object(b.jsx)("input",{className:_.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,id:f,onChange:h})]}),Object(b.jsxs)("label",{className:_.a.label,htmlFor:x,children:[Object(b.jsx)("p",{className:_.a.inputTitle,children:"Phone"}),Object(b.jsx)("input",{className:_.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:d,id:x,onChange:h})]}),Object(b.jsx)("button",{className:_.a.addBtn,type:"submit",children:"Add contact"})]})}var x=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];var N=function(){var t=Object(a.useState)(x),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),u=i[0],d=i[1];Object(a.useEffect)((function(){if(localStorage.getItem("contacts")){var t=JSON.parse(localStorage.getItem("contacts"));c(t)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var j=u.toLowerCase(),p=n.filter((function(t){return t.name.toLowerCase().includes(j)}));return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(f,{contacts:n,onSubmit:function(t){var e=t.name,a=t.number,r={id:Object(l.a)(),name:e,number:a};if(console.log(r),n.find((function(t){return t.name===r.name})))return alert("Sorry, contact ".concat(r.name," already existing"));c([].concat(Object(o.a)(n),[r])),console.log(n)}}),Object(b.jsx)(O,{data:u,handler:function(t){d(t.target.value),console.log(u)}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(m,{contacts:p,handleBtn:function(t){console.log(t.target.id),c(n.filter((function(e){return e.id!==t.target.id})))}})]})};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.cc0c5c24.chunk.js.map