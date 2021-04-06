<template>
    <div class="tabbar_container">
        <slot-page>
            <template v-slot:top>
                1111
            </template>
            <template v-slot:bottom_left>
                1111
            </template>
            <template v-slot:bottom_right>
                搜索
            </template>
        </slot-page>
    </div>
</template>

<script>
import SlotPage from '../../components/Slot/index';
export default {
    data() {
        return {
            
        };
    },
    components:{
        SlotPage
    },
    methods:{
    }
};
</script>

<style lang="scss" scoped>
</style>
