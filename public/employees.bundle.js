(()=>{"use strict";var e,t={860:(e,t,n)=>{var r=n(466),o=n(897),l=n(72),a=n(807);function c(){var e=(0,a.s0)();return r.createElement("div",null,"Currently Employed:"," ",r.createElement("select",{onChange:function(t){return e(t.target.value?"/employees?employed=".concat(t.target.value):"/employees")}},r.createElement("option",{value:""},"All"),r.createElement("option",{value:"true"},"Employed"),r.createElement("option",{value:"false"},"Not Employed")))}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(c,e);var t,n,o,l,a=(o=c,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(o);if(l){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,e)});function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=a.call(this)).handleSubmit=e.handleSubmit.bind(p(e)),e}return t=c,(n=[{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.forms.employeeAdd,n={name:t.name.value,extension:t.ext.value,email:t.email.value,title:t.title.value};this.props.createEmployee(n),t.name.value="",t.ext.value="",t.email.value="",t.title.value=""}},{key:"render",value:function(){return r.createElement("form",{name:"employeeAdd",onSubmit:this.handleSubmit},"Name: ",r.createElement("input",{type:"text",name:"name"}),r.createElement("br",null),"Extension: ",r.createElement("input",{type:"text",name:"ext",maxLength:4}),r.createElement("br",null),"Email: ",r.createElement("input",{type:"text",name:"email"}),r.createElement("br",null),"Title: ",r.createElement("input",{type:"text",name:"title"}),r.createElement("br",null),r.createElement("button",null,"Add"))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(r.Component);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function v(e){var t=(0,a.TH)().search,n=new URLSearchParams(t).get("employed"),o=e.employees.filter((function(e){return!n||String(e.currentlyEmployed)===n})).map((function(t){return r.createElement(O,{key:t._id,employee:t,deleteEmployee:e.deleteEmployee})}));return r.createElement("table",{className:"bordered-table"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Action"),r.createElement("th",null,"Name"),r.createElement("th",null,"Extension"),r.createElement("th",null,"Email"),r.createElement("th",null,"Title"),r.createElement("th",null,"Date Hired"),r.createElement("th",null,"Currently Employed?"),r.createElement("th",null))),r.createElement("tbody",null,o))}function O(e){return r.createElement("tr",null,r.createElement("td",null,r.createElement(l.rU,{to:"/edit/".concat(e.employee._id)},"Edit")),r.createElement("td",null,e.employee.name),r.createElement("td",null,e.employee.extension),r.createElement("td",null,e.employee.email),r.createElement("td",null,e.employee.title),r.createElement("td",null,e.employee.dateHired.toDateString()),r.createElement("td",null,e.employee.currentlyEmployed?"Yes":"No"),r.createElement("td",null,r.createElement("button",{onClick:function(){e.deleteEmployee(e.employee._id)}},"DELETE")))}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,n,o,l,a=(o=u,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(o);if(l){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=a.call(this)).state={employees:[]},e.createEmployee=e.createEmployee.bind(h(e)),e.deleteEmployee=e.deleteEmployee.bind(h(e)),e}return t=u,(n=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;fetch("/api/employees").then((function(e){return e.json()})).then((function(t){console.log("Total count of employees:",t.count),t.employees.forEach((function(e){e.dateHired=new Date(e.dateHired)})),e.setState({employees:t.employees})})).catch((function(e){console.log(e)}))}},{key:"createEmployee",value:function(e){var t=this;fetch("/api/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.employee.dateHired=new Date(e.employee.dateHired);var n=t.state.employees.concat(e.employee);t.setState({employees:n}),console.log("Total count of employees:",n.length)})).catch((function(e){console.log(e)}))}},{key:"deleteEmployee",value:function(e){var t=this;fetch("/api/employees/".concat(e),{method:"DELETE"}).then((function(e){e.ok?t.loadData():console.log("Failed to delete employee.")}))}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("h1",null,"Employee Management Application"),r.createElement(c,null),r.createElement("hr",null),r.createElement(v,{employees:this.state.employees,deleteEmployee:this.deleteEmployee}),r.createElement("hr",null),r.createElement(y,{createEmployee:this.createEmployee}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.Component);function w(){return r.createElement("div",null,"This is a placeholder for the employee report.")}function j(){var e=(0,a.UO)().id;return r.createElement("div",null,r.createElement("h1",null,"This is a placeholder for editing employee: ".concat(e)," "))}function S(){var e=function(){return r.createElement("h1",null,"Page Not Found")};return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"/employees",element:r.createElement(g,null)}),r.createElement(a.AW,{path:"/edit/:id",element:r.createElement(j,null)}),r.createElement(a.AW,{path:"/report",element:r.createElement(w,null)}),r.createElement(a.AW,{path:"/",element:r.createElement(a.Fg,{replace:!0,to:"/employees"})}),r.createElement(a.AW,{path:"*",element:r.createElement(e,null)}))}function P(){var e=function(){return r.createElement("span",null," | ")};return r.createElement("nav",null,r.createElement(l.OL,{end:!0,to:"/"},"Home"),r.createElement(e,null),r.createElement(l.OL,{to:"/employees"},"All Employees"),r.createElement(e,null),r.createElement(l.OL,{to:"/report"},"report"))}function _(){return r.createElement("div",null,r.createElement(P,null),r.createElement(S,null))}(0,o.s)(document.getElementById("content")).render(r.createElement(l.UT,null,r.createElement(r.StrictMode,null,r.createElement(_,null))))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,n,o,l)=>{if(!n){var a=1/0;for(m=0;m<e.length;m++){for(var[n,o,l]=e[m],c=!0,u=0;u<n.length;u++)(!1&l||a>=l)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(c=!1,l<a&&(a=l));if(c){e.splice(m--,1);var i=o();void 0!==i&&(t=i)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[n,o,l]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={624:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,l,[a,c,u]=n,i=0;if(a.some((t=>0!==e[t]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(u)var m=u(r)}for(t&&t(n);i<a.length;i++)l=a[i],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(m)},n=self.webpackChunkcomp_693_m1_exercise=self.webpackChunkcomp_693_m1_exercise||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[736],(()=>r(860)));o=r.O(o)})();
//# sourceMappingURL=employees.bundle.js.map