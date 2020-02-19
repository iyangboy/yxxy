<template>
  <van-row>
    <div>
      <van-notice-bar text="快速授信，快速贷款" left-icon="volume-o" />
    </div>
    <div>
      <van-grid :border="false" :column-num="1">
        <van-grid-item>
          <img src="../images/b1.png" alt="" style="width:100%" />
        </van-grid-item>
      </van-grid>
    </div>
    <div>
      <van-grid>
        <van-grid-item icon="vip-card-o" text="我要办卡" />
        <van-grid-item icon="chart-trending-o" text="办卡进度" />
        <van-grid-item icon="balance-o" text="开启信用" />
        <van-grid-item icon="hot-o" text="特色权益" />
      </van-grid>
      <van-grid>
        <van-grid-item icon="gem-o" text="卡片升级" />
        <van-grid-item icon="gift-o" text="推荐有礼" />
        <van-grid-item icon="orders-o" text="积分明细" />
        <van-grid-item icon="apps-o" text="更多服务" />
      </van-grid>
    </div>
    <!-- <div>
      <van-panel title="最高借款额度"> </van-panel>
      <van-panel title="32,000(元)"> </van-panel>
    </div> -->
    <!-- <div
      style="background-color: #fff; font-size:16px;color:#CCCCFF;line-height: 25px;"
    >
      <van-panel title="产品详情"> </van-panel>
      <div class="container">
        <van-row>
          <van-col span="12">
            <div style="margin-left:12px">最低日息</div>
          </van-col>
          <van-col span="12">
            <div style="margin-right:12px;float:right;">
              <span style="color:#FF0033;">0.01%</span>
              <span style="text-decoration: line-through">0.06%</span>
            </div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="12"
            ><div style="margin-left:12px">借款额度</div></van-col
          >
          <van-col span="12"
            ><div style="margin-right:12px;float:right;">
              2000-32000元
            </div></van-col
          >
        </van-row>
        <van-row>
          <van-col span="8"
            ><div style="margin-left:12px">分期期限</div></van-col
          >
          <van-col span="16"
            ><div style="margin-right:12px;float:right;">
              可选3、6、12、24、36期
            </div></van-col
          >
        </van-row>
        <van-row>
          <van-col span="12"
            ><div style="margin-left:12px">合作伙伴</div></van-col
          >
          <van-col span="12"
            ><div style="margin-right:12px;float:right;">
              农业银行、建设银行等
            </div></van-col
          >
        </van-row>
      </div>
    </div> -->
    <div>
      <van-panel title="VIP权益"> </van-panel>
      <div>
        <van-row>
          <van-col span="12"><img src="../images/qq-vip1.png" alt="" style="width:100%;" /></van-col>
          <van-col span="12"><img src="../images/aqy-vip.png" alt="" style="width:100%" /></van-col>
        </van-row>
        <van-row>
          <van-col span="12"><img src="../images/txsp-vip.png" alt="" style="width:100%" /></van-col>
          <van-col span="12"><img src="../images/zx-vip.png" alt="" style="width:100%" /></van-col>
        </van-row>
      </div>
    </div>
    <div style="height: 300px;">
      <van-form name="form">
        <!-- <van-field
          v-model="price"
          name="price"
          label="申请金额"
          placeholder="金额（最高32000元）"
          :rules="[{ required: true, message: '请填写金额' }]"
          @keyup="onClick"
        />
        <van-field
          readonly
          clickable
          name="picker"
          :value="value"
          label="分期期限"
          placeholder="点击选择期限（可分36期）"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            name="form1"
            show-toolbar
            :columns="columns"
            :default-index="2"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <van-cell-group>
          <van-field label="每期还款" v-model="money" readonly />
        </van-cell-group> -->
        <van-field name="radio" label="">
          <van-radio-group v-model="radio" direction="horizontal" slot="input">
            <van-radio name="1"
              >同意
              <span style="display:inline-block;"
                ><router-link to="/yxxy-doc">《注册协议》</router-link></span
              >
            </van-radio>
          </van-radio-group>
        </van-field>
        <div style="margin: 16px;">
          <van-button
            class="btn btn-primary btn-block"
            round
            block
            type="info"
            is-link
            to="/userBindingCard/1/edit"
          >
            立即申请
          </van-button>
        </div>
      </van-form>
    </div>
  </van-row>
</template>

<script>
export default {
  name: "HomeIndex",
  data() {
    return {
      money: "",
      price: "",
      month: 1,
      capital: "",
      money_rates: "",
      radio: "",
      value: "",
      columns: ["3个月", "6个月", "12个月", "24个月", "36个月"],
      showPicker: false
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
      if (this.value == "3个月") {
        this.month = 3;
      } else if (this.value == "6个月") {
        this.month = 6;
      } else if (this.value == "12个月") {
        this.month = 12;
      } else if (this.value == "24个月") {
        this.month = 24;
      } else if (this.value == "36个月") {
        this.month = 36;
      } else {
        this.month = 0;
      }
      this.capital = (this.price / this.month).toFixed(2);
      this.money_rates = (this.price * 0.003).toFixed(2);
      this.money = Number(this.capital) + Number(this.money_rates);
      // console.log(this.month);
      // console.log(this.price);
      // console.log(this.money);
    },
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onClick() {
      this.price = Number(this.price);
      if (this.price > 32000) {
        this.price = 32000;
      }
      this.capital = (this.price / this.month).toFixed(2);
      this.money_rates = (this.price * 0.003).toFixed(2);
      this.money = Number(this.capital) + Number(this.money_rates);
      this.money = this.money.toFixed(2);
      // console.log(this.month);
      // console.log(this.price);
      // console.log(this.money);
    },
    showPopup() {
      this.$dialog.alert({
        title: "购买快呗VIP专享服务",
        message: "确认购买"
      });
    }
  }
};
</script>

<style scoped>
</style>

<style scoped>
.credit-bg {
  width: 100%;
  height: auto;
  text-align: center;
  padding-top: 40px;
  position: relative;
  padding-bottom: 70px;
  background-color: #fff;
}
.jq22-coll-title {
  padding: 15px;
}
.jq22-coll-title h2 {
  position: relative;
  font-size: 0.9rem;
  font-weight: normal;
  color: #212121;
  padding-left: 0.5rem;
}
.jq22-coll-title h2:after {
  content: "";
  position: absolute;
  z-index: 0;
  top: 3px;
  left: 0;
  width: 3px;
  height: 15px;
  background: #e66c67;
  border-radius: 5px;
}
.jq22-credit-card {
  padding: 0 15px;
}
.jq22-credit-card .jq22-flex {
  border-radius: 5px;
  background: #f8f8f8;
  padding: 1px 15px;
  margin-bottom: 0.8rem;
}
.jq22-flex-box h3 {
  font-size: 0.9rem;
  color: #000000;
  font-weight: normal;
  margin-bottom: 0.5rem;
}
.jq22-flex-box p {
  font-size: 0.8rem;
  color: #676767;
  font-weight: normal;
}
.jq22-flex-card {
  width: 150px;
}
.jq22-flex-card img {
  width: 150px;
  height: auto;
  display: block;
  border: none;
}
</style>
