<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">
        <router-link to="/">首页
            </router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="vip-card-o">
            <router-link to="/user-vip">购买会员
            </router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="friends-o">
            <router-link to="/user-me">个人中心
            </router-link>
        </van-tabbar-item>
  </van-tabbar>
</template>

<script>
    export default {
        name: 'TheFooter',
        data() {
            return {
                active: 0
            }
        }
    }
    </script>

    <style scoped>
    a:hover, a:focus {
        color: #e27575;
        transition: color .15s;
    }
    </style>
