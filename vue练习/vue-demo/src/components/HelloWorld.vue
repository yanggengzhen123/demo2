<template>
    <div>
     <el-form label-width="100px" :model="dynamicValidateForm">
       <el-form-item
          v-for="(item, index) in dynamicValidateForm.Form"
          :label="'input' + (index+1)"
          :key="index"
          :prop="'Form.' + index + '.value'"
          :rules="{required: true, message:`请输入input${index+1}值`, trigger: 'blur'}"
        >
          <el-input  v-model="item.value" style="width:50%"></el-input>
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
          dynamicValidateForm:{
            Form:[
              {value:''}
            ]
          }
          
        };
    },
    computed: {
      disabled(){
        this.inputValue = null
        this.dynamicValidateForm.Form.forEach((item,index)=>{
          this.inputValue += Number(item.value)
        })
        return this.inputValue === 100? false : true
      }
    },
    methods: {
      addInput(){
        this.dynamicValidateForm.Form.push({value:''})
      },
      removeInput(index){
        this.dynamicValidateForm.Form.splice(index,1)
      }
    },
};
</script>
