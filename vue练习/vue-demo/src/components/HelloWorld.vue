<template>
    <div>
     <el-form label-width="100px" :model="{data:Form}">
       <el-form-item
          v-for="(item, index) in Form"
          :label="'input' + (index+1)"
          :key="index"
          :prop="'Form.' + index + '.value'"
          :rules="{required: true, message:'111', trigger: 'blur'}"
        >
          <el-input  v-model="Form[index]" style="width:50%"></el-input>
          <el-button @click.prevent="removeInput(index)" type="danger">删除</el-button>
        </el-form-item>
     </el-form>
      <el-button @click="addInput">新增input框</el-button>
      <el-button type="primary" :disabled="disabled">提交</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
          inputValue:null,
          allValue:100,
          Form:[null]
        };
    },
    computed: {
      disabled(){
        this.inputValue = null
        this.Form.forEach((item,index)=>{
          this.inputValue += Number(item)
        })
        return this.inputValue === 100? false : true
      }
    },
    methods: {
      addInput(){
        this.Form.push(null)
      },
      removeInput(index){
        this.Form.splice(index,1)
      }
    },
};
</script>
