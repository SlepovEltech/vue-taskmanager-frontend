(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32d867d6"],{"0d03":function(t,e,i){var s=i("6eeb"),a=Date.prototype,n="Invalid Date",r="toString",l=a[r],c=a.getTime;new Date(NaN)+""!=n&&s(a,r,(function(){var t=c.call(this);return t===t?l.call(this):n}))},"6eba":function(t,e,i){var s=i("23e7");s({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},d879:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"col s6 offset-s3 "},[i("h1",[t._v("Создать задачу")]),i("form",{on:{submit:function(e){return e.preventDefault(),t.submitHandler(e)}}},[i("div",{staticClass:"input-field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"validate",attrs:{id:"title",type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),i("label",{staticClass:"active",attrs:{for:"title"}},[t._v("Название")]),i("span",{staticClass:"helper-text",attrs:{"data-error":"Title is required"}}),i("span",{staticClass:"character-counter",staticStyle:{float:"right","font-size":"12px"}},[t._v(t._s(t.title.length)+"/128")])]),i("div",{ref:"chips",staticClass:"chips"}),i("div",{staticClass:"input-field"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"materialize-textarea",attrs:{id:"description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),i("label",{attrs:{for:"description"}},[t._v("Описание")]),i("span",{staticClass:"character-counter",staticStyle:{float:"right","font-size":"12px"}},[t._v(t._s(t.description.length)+"/2048")])]),i("input",{ref:"datepicker",attrs:{type:"text"}}),t._m(0)])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"center-align"},[i("button",{staticClass:"btn darken-3",attrs:{type:"submit"}},[t._v("Создать задачу")])])}],n=(i("a4d3"),i("e01a"),i("6eba"),i("0d03"),{name:"Create",data:function(){return{description:"",title:"",chips:null,date:null}},mounted:function(){this.chips=M.Chips.init(this.$refs.chips,{placeholder:"Tags"}),this.date=M.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy",defaultDate:new Date,setDefaultDate:!0})},methods:{submitHandler:function(){var t={title:this.title,description:this.description,id:Date.now(),status:"active",tags:this.chips.chipsData,deadline:this.date.date};console.log(t),this.$store.dispatch("addTask",t),this.$router.push("/list")}},destroyed:function(){this.date&&this.date.destroy&&this.date.destroy(),this.chips&&this.chips.destroy&&this.chips.destroy()}}),r=n,l=i("2877"),c=Object(l["a"])(r,s,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-32d867d6.79fb7cf1.js.map