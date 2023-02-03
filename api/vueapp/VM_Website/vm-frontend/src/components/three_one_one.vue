<template>

<div class="whole">
  <span style="font-size: 20px">Add action</span>

  <el-table
      class="border"
      ref="multipleTable"
      :data="form"
      tooltip-effect="dark"
      style="width:1000px">
    <el-table-column label="ACTION DETAIL">
    </el-table-column>

  </el-table>


  <el-table
      class="border"
      ref="multipleTable"
      :data="form"
      tooltip-effect="dark"
      style="width:1000vw">

    <el-table-column
        prop="link"
        label="External Links"
        show-overflow-tooltip>
    </el-table-column>

  </el-table>

  <el-table
      class="border"
      ref="multipleTable"
      :data="form"
      tooltip-effect="dark"
      style="width:1000vw">

    <el-table-column
        prop="description"
        label="Description"
        show-overflow-tooltip>
    </el-table-column>

  </el-table>


</div>


</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      form:[{
        action:''
      }],

    };
  },
  methods:{
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handle(){
      this.$router.push('/header/3-1');
    }
  }
}
</script>

<style scoped>
span {
  margin-right: 800px;
}

.whole{
  font-size:25px;
}

.form{
  margin-top: 30px;
}

.button{
  margin-bottom: 20px;
  margin-left: 500px;
}

h1{
  font-size:2vw;
}

.border{
  margin-top: 5vw;
}

::v-deep .el-table th {
  font-size: 1vw;
}

::v-deep .el-table tr {
  font-size: 1vw;
}

::v-deep .el-table td, .el-table th {
  font-size: 1vw;
}

::v-deep.el-table thead {
  font-size: 1vw;
}

::v-deep .el-table td, .el-table th {
  font-size: 1vw;
}

</style>