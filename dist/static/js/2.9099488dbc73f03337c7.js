webpackJsonp([2],{"0jH9":function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=e("Gu7T"),i=e.n(a),s=(e("ssT3"),{name:"Register",data:function(){return{confirm:1,captchaTpl:"",username:"",phone:"",password:"",cpassword:"",captcha:"",msg:"",msgType:"",msgShow:!1}},created:function(){this.getCaptcha()},methods:{getCaptcha:function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"QWERTYUIPLKJHGFDSAZXCVBNM123456789",e="",a=[];try{a=[].concat(i()(Array(t))).map(function(){return r[Math.floor(Math.random()*r.length)]})}catch(t){}return a.forEach(function(t){e+='<span class="flex1 hcenter">'+t+"</span>"}),a=a.join(""),{tpl:e,captcha:a}}(6),r=t.tpl,e=t.captcha;this.captchaTpl=r,this.localCaptcha=e},register:function(t){var r=this;this.$nextTick(function(){("submit"===t.target.type?t.target:t.target.parentElement).canSubmit&&r.submit()})},submit:function(){if(!this.confirm)return alert("请勾选协议"),!1;if(this.captcha.toUpperCase()!==this.localCaptcha)alert("验证码不正确"),this.getCaptcha();else{var t={name:this.username,phone:this.phone,password:this.password,avatar:"https://api.adorable.io/avatars/200/"+this.username+".png"},r=this.$store.state.user;r&&r.name===t.name?alert("用户名已存在"):this.login(t)}},login:function(t){this.$store.dispatch("login",t),this.showMsg("注册成功","success")},showMsg:function(t){var r=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";this.msg=t,this.msgType=e,this.msgShow=!1,this.$nextTick(function(){r.msgShow=!0})}}}),o={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 col-md-offset-4 floating-box"},[e("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(r){t.msgShow=r}}}),t._v(" "),e("div",{staticClass:"panel panel-default"},[t._m(0),t._v(" "),e("div",{staticClass:"panel-body",attrs:{"data-validator-form":""}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("手机号")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.phone,expression:"phone",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator:input.required",value:{regex:/^[1]([3-9])[0-9]{9}$/,error:"请输入正确的手机号"},expression:"{ regex: /^[1]([3-9])[0-9]{9}$/, error: '请输入正确的手机号' }",arg:"input",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写用户手机号"},domProps:{value:t.phone},on:{input:function(r){r.target.composing||(t.phone=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("密码")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{regex:/^\w{6,16}$/,error:"密码要求 6 ~ 16 个单词字符"},expression:"{ regex: /^\\w{6,16}$/, error: '密码要求 6 ~ 16 个单词字符' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{id:"password",type:"password",placeholder:"请填写密码"},domProps:{value:t.password},on:{input:function(r){r.target.composing||(t.password=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("确认密码")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.cpassword,expression:"cpassword",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{target:"#password"},expression:"{ target: '#password' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"password",placeholder:"请填写确认密码"},domProps:{value:t.cpassword},on:{input:function(r){r.target.composing||(t.cpassword=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("图片验证码")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.captcha,expression:"captcha",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"图片验证码"},expression:"{ title: '图片验证码' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写验证码"},domProps:{value:t.captcha},on:{input:function(r){r.target.composing||(t.captcha=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"thumbnail",attrs:{title:"点击图片重新获取验证码"},on:{click:t.getCaptcha}},[e("div",{staticClass:"captcha vcenter",domProps:{innerHTML:t._s(t.captchaTpl)}})]),t._v(" "),e("div",{staticClass:"checkbox"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.confirm,expression:"confirm",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"请阅读协议"},expression:"{ title: '请阅读协议' }",modifiers:{required:!0}}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.confirm)?t._i(t.confirm,null)>-1:t.confirm},on:{change:function(r){var e=t.confirm,a=r.target,i=!!a.checked;if(Array.isArray(e)){var s=t._i(e,null);a.checked?s<0&&(t.confirm=e.concat([null])):s>-1&&(t.confirm=e.slice(0,s).concat(e.slice(s+1)))}else t.confirm=i}}}),t._v(" 已经阅读并同意\n                  ")]),t._v(" "),e("router-link",{attrs:{to:"/yxxy-doc"}},[t._v("《羊习习羊注册协议》")])],1),t._v(" "),e("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"},on:{click:t.register}},[e("i",{staticClass:"fa fa-btn fa-sign-in"}),t._v(" 注册\n                ")])])])],1)])},staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"panel-heading"},[r("h3",{staticClass:"panel-title"},[this._v("请注册")])])}]};var n=e("VU/8")(s,o,!1,function(t){e("7RI3")},"data-v-6498fe5c",null);r.default=n.exports},"5zde":function(t,r,e){e("zQR9"),e("qyJz"),t.exports=e("FeBl").Array.from},"7RI3":function(t,r){},Gu7T:function(t,r,e){"use strict";r.__esModule=!0;var a,i=e("c/Tr"),s=(a=i)&&a.__esModule?a:{default:a};r.default=function(t){if(Array.isArray(t)){for(var r=0,e=Array(t.length);r<t.length;r++)e[r]=t[r];return e}return(0,s.default)(t)}},Mhyx:function(t,r,e){var a=e("/bQp"),i=e("dSzd")("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(a.Array===t||s[i]===t)}},"c/Tr":function(t,r,e){t.exports={default:e("5zde"),__esModule:!0}},dY0y:function(t,r,e){var a=e("dSzd")("iterator"),i=!1;try{var s=[7][a]();s.return=function(){i=!0},Array.from(s,function(){throw 2})}catch(t){}t.exports=function(t,r){if(!r&&!i)return!1;var e=!1;try{var s=[7],o=s[a]();o.next=function(){return{done:e=!0}},s[a]=function(){return o},t(s)}catch(t){}return e}},fBQ2:function(t,r,e){"use strict";var a=e("evD5"),i=e("X8DO");t.exports=function(t,r,e){r in t?a.f(t,r,i(0,e)):t[r]=e}},msXi:function(t,r,e){var a=e("77Pl");t.exports=function(t,r,e,i){try{return i?r(a(e)[0],e[1]):r(e)}catch(r){var s=t.return;throw void 0!==s&&a(s.call(t)),r}}},qyJz:function(t,r,e){"use strict";var a=e("+ZMJ"),i=e("kM2E"),s=e("sB3e"),o=e("msXi"),n=e("Mhyx"),c=e("QRG4"),l=e("fBQ2"),u=e("3fs2");i(i.S+i.F*!e("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var r,e,i,d,p=s(t),m="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,h=void 0!==v,g=0,w=u(p);if(h&&(v=a(v,f>2?arguments[2]:void 0,2)),void 0==w||m==Array&&n(w))for(e=new m(r=c(p.length));r>g;g++)l(e,g,h?v(p[g],g):p[g]);else for(d=w.call(p),e=new m;!(i=d.next()).done;g++)l(e,g,h?o(d,v,[i.value,g],!0):i.value);return e.length=g,e}})}});
//# sourceMappingURL=2.9099488dbc73f03337c7.js.map