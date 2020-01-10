<template>
  <van-row>
    <!-- <div class="credit-bg">
      <h2>本期仍需要还款</h2>
      <h3>0,00</h3>
      <p>最近还款日2020-01-10</p>
      <router-link to="/">账单明细</router-link>
      <div class="">
        <van-row>
          <van-col span="8">立即还款</van-col>
          <van-col span="8">分期还款</van-col>
          <van-col span="8">申请高额</van-col>
        </van-row>
      </div>
    </div> -->
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
    <div>
      <div class="jq22-coll-title">
        <h2>热门卡片</h2>
      </div>
      <div class="jq22-credit-card">
        <a href="javascript:;" class="jq22-flex">
          <van-row>
            <van-col span="12">
              <div class="jq22-flex-box">
                <h3>选择卡片类型</h3>
                <p>快递选卡</p>
                <p>免费配送</p>
              </div>
            </van-col>
            <van-col span="12"><div class="jq22-flex-card">
              <img src="../images/car-img-001.png" alt="">
            </div>
          </van-col>
        </van-row>
      </a>
      <a href="javascript:;" class="jq22-flex">
        <van-row>
          <van-col span="12">
            <div class="jq22-flex-box">
              <h3>银联标准卡IC</h3>
              <p>刷卡免年费</p>
              <p>双倍积分</p>
            </div>
          </van-col>
          <van-col span="12">
            <div class="jq22-flex-card">
              <img src="../images/car-img-002.png" alt="">
            </div>
          </van-col>
        </van-row>
      </a>
    </div>
  </div>
</van-row>
</template>

<script>
export default {
  name: 'HomeIndex',
  data() {
    return {
    }
  },
  methods: {
    showPopup() {
      this.$dialog.alert({
        title: '购买羊习习羊VIP专享服务',
        message: '确认购买'
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
  background-color: #EEEEEE;
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
  content: '';
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
