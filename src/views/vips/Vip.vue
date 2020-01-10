<template>
    <div>
        <div>
            <van-divider>羊习习羊</van-divider>
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
    <div>
        <!-- <van-divider dashed>
            <van-radio-group v-model="radio">
          <van-radio name="1">已经阅读并同意<router-link to="/yxxy-doc">《羊习习羊注册协议》</router-link></van-radio>
        </van-radio-group>
    </van-divider> -->
    <div v-if="auth">
        <van-divider dashed>
            <van-radio-group v-model="radio">
              <van-radio name="1">购买即表示同意<router-link to="/yxxy-doc">《购买协议》</router-link></van-radio>
          </van-radio-group>
        </van-divider>
        <div><van-cell title="退出登录" is-link @click="logout" /></div>
      </div>
      <div v-else style="border-bottom:5px solid #EEEEEE">
        <div style="border-bottom:1px solid #EEEEEE">
          <van-cell title="登录" is-link to="/auth/login" />
        </div>
        <div>
          <van-cell title="注册" is-link to="/auth/register" />
        </div>
      </div>
</div>
<van-dialog
v-model="show"
title="标题"
show-cancel-button
>
<img src="https://img.yzcdn.cn/vant/apple-3.jpg">
</van-dialog>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'UserVip',
    computed: {
        ...mapState([
          'auth',
          'user'
          ])
    },
    data() {
        return {
            radio: 0,
            show: false
        }
    },
    methods: {
        showPopup() {
          this.$dialog.confirm({
            title: '购买羊习习羊VIP专享服务',
            message: '确认购买',
        }).then(() => {
            this.updateProfile();
        });
      },
        // 更新个人信息
        updateProfile () {
            this.$store.dispatch('updateUser', {
                is_vip: 1,
            })
            // alert('修改成功')
            this.$message.show('已成为VIP')
        }
    }
};
</script>
