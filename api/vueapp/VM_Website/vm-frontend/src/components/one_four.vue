<template>
  <div>
  <el-table
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
    <el-table-column
        type="selection"
        width="55">
    </el-table-column>
    <el-table-column
        prop="ID"
        label="ID"
        width="75">
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
        width="220">
    </el-table-column>
    <el-table-column
        prop="type"
        label="REFERRAL TYPE"
        width="200">
    </el-table-column>
    <el-table-column
        prop="status"
        label="REFERRAL STATUS"
        width="175">
    </el-table-column>
    <el-table-column
        prop="coordinator"
        label="COORDINATOR"
        width="175">
    </el-table-column>
    <el-table-column
        prop="added"
        label="ADDED BY"
        width="120">
    </el-table-column>
    <el-table-column
        prop="completed"
        label="COMPLETED ON"
        width="165"
        sortable>
    </el-table-column>
    <el-table-column label="opration">
      <template slot-scope="scope">
        <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">edit</el-button>
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">delete</el-button>
      </template>
    </el-table-column>
<!--    <el-table-column-->
<!--&lt;!&ndash;        fixed="right"&ndash;&gt;-->
<!--        label="CHANGE DETAIL"-->
<!--        width="150">-->

<!--    <el-table-column-->
<!--        label="日期"-->
<!--        width="120">-->
<!--      <template slot-scope="scope">{{ scope.row.date }}</template>-->
<!--    </el-table-column>-->
<!--    <el-table-column-->
<!--        prop="address"-->
<!--        label="地址"-->
<!--        show-overflow-tooltip>-->
<!--    </el-table-column>-->
  </el-table>
    <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">change the status of the row 2 and 3</el-button>
    <el-button @click="toggleSelection()">cancle</el-button>
    <el-button type="primary"@click="jump1">ADD REFERRAL TYPES</el-button>
  </div>
</template>

<script>
export default {
  name: "one_four",
  data() {
    return {
      tableData3: [{
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
    },
  methods: {
    jump1(){
      this.$router.push('/header/1-4-1')
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.Delete()
    },
    Delete() {
      this.$confirm('This action permanently deletes the file if you continue', 'tips', {
        confirmButtonText: 'ensure',
        cancelButtonText: 'cancel',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'delete successfully!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'cancel delection'
        });
      });
    }
  }
}
</script>

<style scoped>

</style>
