<template>
    <div class="tabbar_container">
        <slot-page>
            <template v-slot:top>
                <div class="top_wrap">
                    <div :class="['wrap_t_title',index === currentIndex?'currentCtColor':'']" v-for="(item,index) in tabbarList" :key="index" @click="clickToChoose(index)">{{item.title}}</div>
                </div>
            </template>
            <template v-slot:bottom_left>
                <div :class="['tabbar_wrap_b_title',index === tabbarButtomIndex?'currentCtColor':'']" v-for="(item,index) in tabbarButtomList" :key="index" @click="clickButtonChoose(index)">{{item.title}}</div>
                <el-dropdown placement="bottom-end" trigger="click">
                    <span class="el-dropdown-link">
                        状态<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>未学习</el-dropdown-item>
                        <el-dropdown-item>正在进行</el-dropdown-item>
                        <el-dropdown-item>已学完</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </template>
        </slot-page>
        <div class="bottom_wrap">
            <div class="Allimg_wrap">
                <div class="textImg_wrap" v-for="(item,index) in courseList" :key="index">
                    <div class="img_container">
                        <div class="figure">
                            <img :src="item.imgUrl" alt=""/>
                            <div class="figcaption">{{item.title}}</div>
                        </div>
                    </div>
                    <div class="text_wrap">
                        <span class="text_wrap_label">{{item.title}}</span>
                        <div class="text_wrap_time">
                            <span>{{item.time}}课时</span>
                            <span class="status">{{item.status}}</span>
                        </div>
                    </div>
                </div>
                <div class="page_container">
                    <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                    </el-pagination>
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<script>
import SlotPage from '../../components/Slot/index';
export default {
    data() {
        return {
            tabbarList:[
                {title:'基础理论',value:'index'},
                {title:'真实漏洞',value:'index'},
                {title:'夺旗解题',value:'index'},
            ],
            tabbarButtomList:[
                {title:'推荐'},
                {title:'最新'},
            ],
            courseList:[
                {title:'内网渗透实战',imgUrl:require('../../assets/1.png'),time:15,status:'未学习'},
                {title:'C语言',imgUrl:require('../../assets/2.png'),time:15,status:'未学习'},
                {title:'Web安全实战分析',imgUrl:require('../../assets/3.png'),time:15,status:'未学习'},
                {title:'信息内容分析与管理',imgUrl:require('../../assets/4.png'),time:15,status:'未学习'},
                {title:'Web安全',imgUrl:require('../../assets/5.png'),time:15,status:'未学习'},
                {title:'Web安全（CTF Web）',imgUrl:require('../../assets/6.png'),time:15,status:'未学习'},
                {title:'数字隐藏技术',imgUrl:require('../../assets/7.png'),time:15,status:'未学习'},
                {title:'DVWA训练靶场',imgUrl:require('../../assets/8.png'),time:15,status:'未学习'},
                {title:'CTF基础知识',imgUrl:require('../../assets/9.png'),time:15,status:'未学习'},
                {title:'Android安全',imgUrl:require('../../assets/10.png'),time:15,status:'未学习'},
                {title:'高质量C++/C编程指南',imgUrl:require('../../assets/11.png'),time:15,status:'未学习'},
                {title:'信息安全数学基础',imgUrl:require('../../assets/12.png'),time:15,status:'未学习'},
            ],
            currentIndex:0,
            tabbarButtomIndex:0,
            currentPage:1,
            searchInput:''
        };
    },
    components:{
        SlotPage
    },
    methods:{
        clickToChoose(index){
            this.currentIndex = index
        },
        clickButtonChoose(index){
            this.tabbarButtomIndex = index
        },
        handleSizeChange(){

        },
        handleCurrentChange(){

        }
    }
};
</script>

<style lang="scss" scoped>
    @import '../courseTeach/index.scss';
</style>
