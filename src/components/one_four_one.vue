<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm" >
    <el-form-item label="External referal id" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="Added by" prop="region1">
      <el-select v-model="ruleForm.region" placeholder="What's your name?">
        <el-option label="A" ></el-option>
        <el-option label="B" ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Coordinator" prop="region2">
      <el-select v-model="ruleForm.region" placeholder="Who will mediate this referral?">
        <el-option label="E" ></el-option>
        <el-option label="F" ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Resident" prop="region3">
      <el-select v-model="ruleForm.region" placeholder="Who made the request?">
        <el-option label="C" ></el-option>
        <el-option label="D" ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Referral status" prop="region4">
      <el-select v-model="ruleForm.region" placeholder="What's the status of this action?">
        <el-option label="Referral org. closen"></el-option>
        <el-option label="Referral org. contacted"></el-option>
        <el-option label="Referral complete"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Completed on" required>
      <el-col :span="11">
        <el-form-item prop="date">
          <el-date-picker type="date" placeholder="select date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="time">
          <el-time-picker type="fixed-time" placeholder="select time" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="Notes" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item label="Referral type" prop="region5">
      <el-select v-model="ruleForm.region" placeholder="Which kind of referral is needed">
        <el-option label="Referral type1" ></el-option>
        <el-option label="Referral type2" ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Referral organisation" prop="region6">
    <el-select v-model="ruleForm.region" placeholder="What organisation are you referring to?">
      <el-option label="Referral organisation1" ></el-option>
      <el-option label="Referral organisation2" ></el-option>
    </el-select>
  </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">Save</el-button>
      <el-button @click="resetForm('ruleForm')">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "one_four_one",
  data() {
    return {
      ruleForm: {
        name: '',
        region1: '',
        region2: '',
        region3: '',
        region4: '',
        date: '',
        time: '',
        desc: '',
        region5: '',
        region6: ''
      },
      rules: {
        name: [
          { required: true, message: 'The ID of the referral in an external system', trigger: 'blur' },
        ],
        region1: [
          { required: true, message: 'Please select Add by', trigger: 'change' }
        ],
        region2: [
          { required: true, message: 'Please select Coordinator', trigger: 'change' }
        ],
        region3: [
          { required: true, message: 'Please select Resident', trigger: 'change' }
        ],
        region4: [
          { required: true, message: 'Please select Referral status', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: 'Please select the date', trigger: 'change' }
        ],
        date2: [
          { type: 'time', required: true, message: 'Please select the time', trigger: 'change' }
        ],
        desc: [
          { required: true, message: 'Please form the form', trigger: 'blur' }
        ],
        region5: [
          { required: true, message: 'Please select Referral type', trigger: 'change' }
        ],
        region6: [
          { required: true, message: 'Please select Referral organisation', trigger: 'change' }
        ],
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
    }
  }
}
</script>

<style scoped>

</style>