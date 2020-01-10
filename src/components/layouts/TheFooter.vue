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
    // 引入 title.js 的默认值
    import title from '@/directives/title'

    export default {
        name: 'TheFooter',
        // 添加 directives 选项，并注册 title
        directives: {
            title
        },
        data() {
            return {
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
