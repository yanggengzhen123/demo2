<template>
    <div>
        11
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created(){
        this.test();
    },
    methods: {
        test(){
            var AA = function(){
                this.focus = {
                    name:'yang',
                    age:18
                }
            }
            AA.prototype.focus = {
                name:'geng',
                age:18
            }
            var bb = new AA()
            var cc = new AA()
            bb.focus.name = 'zhen'
            cc.focus.name = 'liyixuan'
            console.log(bb.focus.name)
            console.log(cc.focus.name)
        }
    },
};
</script>

<style>

</style>
