<template>
  <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="200px" class="demo-dynamic">
    <el-form-item
        prop="NAME"
        label="NAME"
        :rules="[
      { required: true, message: 'Name could not be empty', trigger: 'blur' },
      { type: 'email', message: '', trigger: ['blur', 'change'] }
    ]"
    >
      <el-input v-model="dynamicValidateForm.email"></el-input>
    </el-form-item>
    <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :label="'ICON NAME' + index"
        :key="domain.key"
        :prop="'domains.' + index + '.value'"
        :rules="{
      required: true, message: 'Icon name could not be empty', trigger: 'blur'
    }"
    >
      <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">Delete</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('dynamicValidateForm')">Save</el-button>
      <el-button @click="addDomain">Save and continue editing</el-button>
      <el-button @click="resetForm('dynamicValidateForm')">Save and add another</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "three_two_one",
  data() {
    return {
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
        email: ''
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
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      });
    }
  }
}
</script>

<style scoped>

</style>