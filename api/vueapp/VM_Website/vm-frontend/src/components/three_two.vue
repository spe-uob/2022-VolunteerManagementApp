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
        width="115">
    </el-table-column>
    <el-table-column
        label="REFERRAL TYPES"
        prop="REFERRALTYPES"
        width="1250">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
  </el-table>
    <el-button @click="toggleSelection()">cancle</el-button>

    <el-button type="primary"@click="jump">ADD REFERRAL</el-button>
  </div>
</template>

<script>
export default {
  name: "three_two",
  data() {
    return {
      tableData3: [{
        REFERRALTYPES: 'GP'
      }],
        multipleSelection: []
}
  },
        methods: {
    jump(){
      this.$router.push('/three_two/3-2-1')
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
      }
    }
  }
</script>

<style scoped>

</style>

<!--<i class="el-icon-time"></i>-->
<!--<el-table-column-->
<!--    prop="completed"-->
<!--    label="COMPLETED ON"-->
<!--    width="150"-->
<!--    sortable>-->
<!--<template slot-scope="scope">-->
<!--  <span style="margin-left: 10px">{{ scope.row.date }}</span>-->
<!--</template>-->
<!--</el-table-column>-->