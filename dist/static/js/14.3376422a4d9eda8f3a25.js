webpackJsonp([14],{"2ceW":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("Dd8w"),o=e.n(a),r=e("NYxO"),s={name:"UserVip",computed:o()({},Object(r.b)(["auth","user"])),data:function(){return{radio:0,show:!1}},methods:{showPopup:function(){var t=this;this.$dialog.confirm({title:"购买快呗VIP专享服务",message:"确认购买"}).then(function(){t.updateProfile()})},updateProfile:function(){this.$store.dispatch("updateUser",{is_vip:1}),this.$message.show("已成为VIP")}}},n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",[e("van-divider",[t._v("快呗")])],1),t._v(" "),e("div",[e("van-grid",[e("van-grid-item",{attrs:{icon:"vip-card-o",text:"我要办卡"}}),t._v(" "),e("van-grid-item",{attrs:{icon:"chart-trending-o",text:"办卡进度"}}),t._v(" "),e("van-grid-item",{attrs:{icon:"balance-o",text:"开启信用"}}),t._v(" "),e("van-grid-item",{attrs:{icon:"hot-o",text:"特色权益"}})],1),t._v(" "),e("van-grid",[e("van-grid-item",{attrs:{icon:"gem-o",text:"卡片升级"}}),t._v(" "),e("van-grid-item",{attrs:{icon:"gift-o",text:"推荐有礼"}}),t._v(" "),e("van-grid-item",{attrs:{icon:"orders-o",text:"积分明细"}}),t._v(" "),e("van-grid-item",{attrs:{icon:"apps-o",text:"更多服务"}})],1)],1),t._v(" "),e("div",[t.auth?e("div",[e("div",{staticClass:"form-group"},[e("van-divider",{attrs:{dashed:""}},[e("van-radio-group",{model:{value:t.radio,callback:function(i){t.radio=i},expression:"radio"}},[e("van-radio",{attrs:{name:"1"}},[t._v("购买即表示同意"),e("router-link",{attrs:{to:"/yxxy-doc"}},[t._v("《购买协议》")])],1)],1)],1),t._v(" "),e("div",{staticClass:"col-sm-offset-2 col-sm-6"},[t.auth?e("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"},on:{click:t.showPopup}},[t._v("购买快呗VIP专享服务￥249")]):t._e()])],1)]):e("div",{staticStyle:{"border-bottom":"5px solid #EEEEEE"}},[e("div",{staticStyle:{"border-bottom":"1px solid #EEEEEE"}},[e("van-cell",{attrs:{title:"登录","is-link":"",to:"/auth/login"}})],1),t._v(" "),e("div",[e("van-cell",{attrs:{title:"注册","is-link":"",to:"/auth/register"}})],1)])]),t._v(" "),e("van-dialog",{attrs:{title:"标题","show-cancel-button":""},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[e("img",{attrs:{src:"https://img.yzcdn.cn/vant/apple-3.jpg"}})])],1)},staticRenderFns:[]},d=e("VU/8")(s,n,!1,null,null,null);i.default=d.exports}});
//# sourceMappingURL=14.3376422a4d9eda8f3a25.js.map