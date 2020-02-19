<template>
  <van-row>
    <div v-if="auth">
      <div class="user">
        <van-col span="8">
          <div class="avatar" style="line-height:100px; padding: 20px;">
            <van-image
            round
            width="5rem"
            height="5rem"
            :src="user.avatar"
            />
          </div>
        </van-col>
        <van-col span="16">
          <div style="padding-top: 40px;">
            <div>{{ user.phone ? user.phone : '***' }}</div>

            <div v-if="user.is_vip">当前会员等级：VIP会员</div>
            <div v-else >当前会员等级：普通会员</div>
          </div>
        </van-col>
      </div>
      <div class="info">
        <div class="" style="border-bottom:5px solid #EEEEEE">
          <div>
            <van-collapse v-model="activeNames">
              <van-collapse-item title="我的资料" name="1">
                姓名：{{ user.name }}
                <hr>
                身份证号码：{{ user.id_card }}
                <hr>
                银行卡号：{{ user.bank_card }}
                <hr>
                手机号：{{ user.phone }}
              </van-collapse-item>
            </van-collapse>
          </div>
          <div>
            <van-collapse v-model="cardNames">
              <van-collapse-item title="绑卡信息" name="1">
                持卡人姓名：{{ user.card_username }}
                <hr>
                身份证号码：{{ user.card_id_card }}
                <hr>
                开户行：{{ user.card_bank_name }}
                <hr>
                银行卡号：{{ user.card_bank_card }}
              </van-collapse-item>
            </van-collapse>
          </div>
          <div><van-cell title="编辑资料" is-link to="/userInfo/1/edit" /></div>
        </div>
        <div style="border-bottom:5px solid #EEEEEE">
          <div style="border-bottom:1px solid #EEEEEE">
            <van-cell title="订单列表" is-link />
          </div>
          <div>
            <van-collapse v-model="activeNames">
              <van-collapse-item title="联系客服" name="2">客服电话：13207170000</van-collapse-item>
            </van-collapse>
          </div>
        </div>
        <div style="border-bottom:5px solid #EEEEEE">
          <div><van-cell title="帮助中心" is-link to="/" />
          </div>
        </div>
        <div style="border-bottom:5px solid #EEEEEE">
          <div><van-cell title="退出登录" is-link @click="logout" /></div>
        </div>
      </div>
    </div>
    <div v-else style="border-bottom:5px solid #EEEEEE">
      <div style="border-bottom:1px solid #EEEEEE">
        <van-cell title="登录" is-link to="/auth/login" />
      </div>
      <div>
        <van-cell title="注册" is-link to="/auth/register" />
      </div>
    </div>
  </van-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Me',
  computed: {
    ...mapState([
      'auth',
      'user'
      ])
  },
  data () {
    return {
      activeNames: [],
      cardNames: [],
    }
  },
  methods: {
    logout () {
      // this.$store.dispatch('logout')
      this.$swal({
        text: '你确定要退出吗?',
        confirmButtonText: '退出'
      }).then((res) => {
        if (res.value) {
          this.$store.dispatch('logout')
        }
      })
    }
  }
}
</script>

<style scoped>
.user {
  height:100px;
  background-color: #EEEEEE;
}
.user_bg {
  background-image: url(../images/head-bg.png);
}
</style>
