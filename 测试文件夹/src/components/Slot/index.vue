<template>
    <div class="tabbar_container">
        <div class="tabbar_warp">
            <div class="tabbar_wrap_t">
                <slot name="top"></slot>
            </div>
            <div class="tabbar_wrap_b">
                <div class="tabbar_wrap_b_l">
                    <slot name="bottom_left"></slot>
                </div>
                <div class="tabbar_wrap_b_r">
                    <slot name="bottom_right"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'SlotPage',
    data() {
        return {
        };
    },
    methods:{
        
    }
};
</script>

<style lang="scss">
.tabbar_container {
    width: 100%;
    background: #1D294A;
    color:#fff;
    .tabbar_warp {
        width: 1200px;
        margin: 0 auto;
        padding: 15px 0;
    }
    .tabbar_wrap_t {
        font-size: 14px;
    }
}
.tabbar_wrap_b {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    .tabbar_wrap_b_l {
        display: flex;
        align-items: center;
        color: #fff!important;
        cursor: pointer;
        font-size: 14px;
        
    }
}
</style>