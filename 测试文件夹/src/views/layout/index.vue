<template>
    <div>
        <div class="header_wrap">
            <div class="header_wrap_l">
                <div :class="['wrap_l_title',index === currentIndex?'currentColor':'']" v-for="(item,index) in list" :key="index" @click="clickToPath(index)">{{item.title}}</div>
            </div>
            <div class="header_wrap_r">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        测试账号<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                        <el-dropdown-item>后台管理</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <div class="avatar-wrapper">
                    <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
        'avatar'
        ])
    },
    data() {
        return {
            list:[
                {title:'课程教学',path:'/courseTeach'},
                {title:'操作练习',path:'/practice'},
                {title:'竞赛',path:'index'},
                {title:'漏洞库',path:'/loopholeLibrary'},
                {title:'工具箱',path:'index'},
                {title:'个人中心',path:'/mine'}
            ],
            currentIndex:0,
            path:'/'
        };
    },
    methods:{
        clickToPath(index){
            this.currentIndex = index
        },
        async logout() {
            await this.$store.dispatch('user/logout')
            this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        }
    },
    watch:{
        currentIndex(val) {
            this.path = this.list[val].path
            this.$router.push({path:this.path})
        },
        '$route' (to, from) {
            console.log(to);
            console.log(from);
        // 对路由变化作出响应...
        }
    }
};
</script>

<style lang="scss">
    @import './index.scss'
</style>
