(this["webpackJsonpintro-react"]=this["webpackJsonpintro-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(4),r=n.n(a),s=n(6),l=n(2);var u=n(0),i=c.a.createContext();function d(e){var t=function(e,t){var n=c.a.useState(!1),o=Object(l.a)(n,2),a=o[0],r=o[1],s=c.a.useState(!0),u=Object(l.a)(s,2),i=u[0],d=u[1],j=c.a.useState(t),b=Object(l.a)(j,2),m=b[0],x=b[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),x(n),d(!1)}catch(a){r(a)}}),3e3)})),{item:m,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),x(t)}catch(a){r(a)}},loading:i,error:a}}("TODOS_V1",[]),n=t.item,o=t.saveItem,a=t.loading,r=t.error,d=c.a.useState(""),j=Object(l.a)(d,2),b=j[0],m=j[1],x=c.a.useState(!1),O=Object(l.a)(x,2),f=O[0],h=O[1],p=n.filter((function(e){return!!e.completed})).length,T=n.length,v=[];v=!b.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(u.jsx)(i.Provider,{value:{loading:a,error:r,totalTodos:T,completedTodos:p,searchValue:b,setSearchValue:m,searchedTodos:v,addTodo:function(e){var t=Object(s.a)(n);t.push({completed:!1,text:e}),o(t)},completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c[t].completed=!0,o(c)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c.splice(t,1),o(c)},openModal:f,setOpenModal:h},children:e.children})}n(13);function j(){var e=c.a.useContext(i),t=e.totalTodos,n=e.completedTodos;return Object(u.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," Tareas"]})}n(14);function b(){var e=c.a.useContext(i),t=e.searchValue,n=e.setSearchValue;return Object(u.jsx)("input",{className:"TodoSearch",placeholder:"Buscar Tarea",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}n(15);function m(e){return Object(u.jsx)("section",{children:Object(u.jsx)("ul",{children:e.children})})}n(16);function x(e){return Object(u.jsxs)("li",{className:"TodoItem",children:[Object(u.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:"\u221a"}),Object(u.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(u.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:"X"})]})}function O(){return Object(u.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."})}n(17);function f(){return Object(u.jsxs)("div",{className:"LoadingTodo-container",children:[Object(u.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(u.jsx)("p",{className:"LoadingTodo-text",children:"Cargando Tareas..."}),Object(u.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}n(18);function h(){return Object(u.jsx)("p",{className:"emptyTodos",children:"\xa1Crea tu primera Tarea!"})}n(19);function p(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=c.a.useContext(i),r=a.addTodo,s=a.setOpenModal;return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(n),s(!1)},children:[Object(u.jsx)("label",{children:"Escribe tu nueva Tarea"}),Object(u.jsx)("textarea",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Tarea"}),Object(u.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(u.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){s(!1)},children:"Cancelar"}),Object(u.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:"A\xf1adir"})]})]})}n(20);function T(e){return Object(u.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(21);function v(e){var t=e.children;return r.a.createPortal(Object(u.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}function g(){var e=c.a.useContext(i),t=e.error,n=e.loading,o=e.searchedTodos,a=e.completeTodo,r=e.deleteTodo,s=e.openModal,l=e.setOpenModal;return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsx)(b,{}),Object(u.jsxs)(m,{children:[t&&Object(u.jsx)(O,{}),n&&Object(u.jsx)(f,{}),!n&&!o.length&&Object(u.jsx)(h,{}),o.map((function(e){return Object(u.jsx)(x,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),!!s&&Object(u.jsx)(v,{children:Object(u.jsx)(p,{})}),Object(u.jsx)(T,{setOpenModal:l})]})}var C=function(){return Object(u.jsx)(d,{children:Object(u.jsx)(g,{})})};n(22);r.a.render(Object(u.jsx)(C,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.1a7d25e7.chunk.js.map