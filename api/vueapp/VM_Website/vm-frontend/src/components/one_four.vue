
<template>
  <div class="position">

    <div class="referralsbox">
      <span class="font">Referrals</span>
      <el-table
          :data="tableData"
          max-height="750"
      >
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            prop="ID"
            label="ID"
            width="75"
            sortable>
        </el-table-column>
        <el-table-column
            prop="name"
            label="RESIDENT"
            width="120"
            sortable>
        </el-table-column>
        <el-table-column
            prop="organisation"
            label="REFERRAL ORGANISATION"
            width="220"
            sortable>
        </el-table-column>
        <el-table-column
            prop="type"
            label="REFERRAL TYPE"
            width="200"
            sortable>
        </el-table-column>
        <el-table-column
            prop="status"
            label="REFERRAL STATUS"
            width="175"
            sortable>
        </el-table-column>
        <el-table-column
            prop="coordinator"
            label="COORDINATOR"
            width="175"
            sortable>
        </el-table-column>
        <el-table-column
            prop="added"
            label="ADDED BY"
            width="120"
            sortable>
        </el-table-column>
        <el-table-column
            prop="completed"
            label="COMPLETED ON"
            width="165"
            sortable>
        </el-table-column>


      </el-table>
    </div>
  </div>

</template>

<script>
export default {
  name: "one_four",
  data() {
    return {
      referral: {},
      tableData: [
        {
          ID: '1',
          name: 'A',
          organisation: 'Test referral org 1',
          type: 'Test referral type 1',
          status: 'closed',
          coordinator: "GB",
          added: "AB",
          completed: "22/11/2022"
        }, {
          ID: '2',
          name: 'B',
          organisation: 'Test referral org 2',
          type: 'Test referral type 2',
          status: 'closed',
          coordinator: "GB",
          added: "AB",
          completed: "22/11/2022"
        }, {
          ID: '3',
          name: 'C',
          organisation: 'Test referral org 3',
          type: 'Test referral type 3',
          status: 'closed',
          coordinator: "GB",
          added: "AB",
          completed: "22/11/2022"

        }, {
          ID: '4',
          name: 'D',
          organisation: 'Test referral org 4',
          type: 'Test referral type 4',
          status: 'closed',
          coordinator: "GB",
          added: "AB",
          completed: "22/11/2022"
        }, {
          ID: '5',
          name: 'E',
          organisation: 'Test referral org 5',
          type: 'Test referral type 5',
          status: 'closed',
          coordinator: "GB",
          added: "AB",
          completed: "22/11/2022"
        }, {
          ID: '6',
          name: 'F',
          organisation: 'Test referral org 6',
          type: 'Test referral type 6',
          status: 'closed',
          coordinator: "GB",
          added: "AB",
          completed: "22/11/2022"
        }, {
          ID: '7',
          name: 'G',
          organisation: 'Test referral org 7',
          type: 'Test referral type 7',
          status: 'closed',
          coordinator: "GB",
          added: "AB",
          completed: "22/11/2022"
        }],
      multipleSelection: []}
  }}

</script>


<style lang="less" scoped>
.referralsbox {
  width: 75vw;
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

.font {
  font-size: 2vw;
  color: Black;
  padding-bottom: 1vw;
}

.space {
  margin-top: 2vw;
  margin-bottom: 2vw;
}

</style>
