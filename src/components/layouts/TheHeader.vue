<template>
    <div>
        <van-nav-bar
        title="快呗"
        />
    </div>
</template>

<script>
    // 引入 TheEntry.vue 的默认值
    import TheEntry from '@/components/layouts/TheEntry'

    export default {
        name: 'TheHeader',
        // 添加 components 选项，并注册 TheEntry
        components: {
            TheEntry
        },
        data() {
            return {
                logo: {
                    // src 的值是用反引号（`）标识的模板字符串，我们只需将变量放在 ${} 的大括号之中
                    // src: `${this.uploadsUrl}sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg`,
                    src: 'https://qiniu.haoglj.com/yxxy0109logo.png',
                    title: 'YXXY'
                },
                navList: ['社区', '头条', '问答', '教程'],
                activeNavIndex: 0,
                showCollapsedNav: false
            }
        },
        beforeCreate() {
            // 在当前实例上添加一个 uploadsUrl 属性
            this.uploadsUrl = 'https://vuejscaffcdn.phphub.org/uploads/'
        },
        methods: {
            changeNavIndex(index) {
                this.activeNavIndex = index
            },
            toggleNav() {
                this.showCollapsedNav = !this.showCollapsedNav
            }
        }
    }
</script>

<style scoped>
    .title {
        display: none;
    }

    .navbar-default .navbar-nav > .active > a {
        background: rgba(0, 0, 0, .03);
    }
</style>
