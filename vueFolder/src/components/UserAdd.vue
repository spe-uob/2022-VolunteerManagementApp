<template>
  <div>
    <el-form :model="ValidateForm" ref="ValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="ID"
    prop="id"
    :rules="[
      { required: true, message: 'The ID cannot be empty'},
      { type: 'number', message: 'The ID must be a number'}
    ]"
  >
    <el-input v-model.number="ValidateForm.id" ></el-input>
  </el-form-item>

 <el-form-item
    prop="username"
    label="UserName"
    :rules="[
      { required: true, message: 'The user name cannot be empty', trigger: 'blur' },
    ]"
  >
    <el-input v-model="ValidateForm.username"></el-input>
  </el-form-item>

  <el-form-item
    prop="address"
    label="Address"
    :rules="[
      { required: true, message: 'The address cannot be empty', trigger: 'blur' },
    ]"
  >
    <el-input v-model="ValidateForm.address"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ValidateForm')">Submit</el-button>
    <el-button @click="resetForm('ValidateForm')">Cancel</el-button>
  </el-form-item>
  </el-form>
  </div>
</template>

<script>
  export default {
     data() {
      return {
        ValidateForm: {
          id: '',
          username:'',
          address:''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        alert('cancel!')
      }
    }
  }
</script>

<style lang="scss" scoped>
.el-input{
  height: 50px;
}
</style>