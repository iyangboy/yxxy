webpackJsonp([14],{"2ceW":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a("Dd8w"),n=a.n(e),o=a("NYxO"),s={name:"UserVip",computed:n()({},Object(o.b)(["auth","user"])),data:function(){return{radio:0,show:!1}},methods:{showPopup:function(){var t=this;this.$dialog.confirm({title:"购买羊习习羊VIP专享服务",message:"确认购买"}).then(function(){t.updateProfile()})},updateProfile:function(){this.$store.dispatch("updateUser",{is_vip:1}),this.$message.show("已成为VIP")}}},r={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",[a("van-divider",[t._v("羊习习羊")])],1),t._v(" "),a("div",[a("van-grid",[a("van-grid-item",{attrs:{icon:"vip-card-o",text:"我要办卡"}}),t._v(" "),a("van-grid-item",{attrs:{icon:"chart-trending-o",text:"办卡进度"}}),t._v(" "),a("van-grid-item",{attrs:{icon:"balance-o",text:"开启信用"}}),t._v(" "),a("van-grid-item",{attrs:{icon:"hot-o",text:"特色权益"}})],1),t._v(" "),a("van-grid",[a("van-grid-item",{attrs:{icon:"gem-o",text:"卡片升级"}}),t._v(" "),a("van-grid-item",{attrs:{icon:"gift-o",text:"推荐有礼"}}),t._v(" "),a("van-grid-item",{attrs:{icon:"orders-o",text:"积分明细"}}),t._v(" "),a("van-grid-item",{attrs:{icon:"apps-o",text:"更多服务"}})],1)],1),t._v(" "),a("div",[a("van-divider",{attrs:{dashed:""}},[a("van-radio-group",{model:{value:t.radio,callback:function(i){t.radio=i},expression:"radio"}},[a("van-radio",{attrs:{name:"1"}},[t._v("购买即表示同意"),a("router-link",{attrs:{to:"/yxxy-doc"}},[t._v("《购买协议》")])],1)],1)],1),t._v(" "),a("div",{staticClass:"form-group",staticStyle:{"margin-top":"100px"}},[a("div",{staticClass:"col-sm-offset-2 col-sm-6"},[t.auth?a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"},on:{click:t.showPopup}},[t._v("购买羊习习羊VIP专享服务￥249")]):a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"},on:{click:t.showPopup}},[t._v("请登录")])])])],1),t._v(" "),a("van-dialog",{attrs:{title:"标题","show-cancel-button":""},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[a("img",{attrs:{src:"https://img.yzcdn.cn/vant/apple-3.jpg"}})])],1)},staticRenderFns:[]},c=a("VU/8")(s,r,!1,null,null,null);i.default=c.exports}});
//# sourceMappingURL=14.b7c7c949eaad00f52002.js.map