<template>

<div class="whole">

  <span>Select action type to change</span>
  <el-button style="float: right;width: 13em;height: 2em;padding-top:0.25em;font-size: 1.5vw;padding-left: 1em;margin-top: 2em;"
             class="fix" @click="handle">ADD ACTION TYPE</el-button>
  <el-table
      class="border"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width:1000vw"
      @selection-change="handleSelectionChange">
    <el-table-column
        type="selection"
        width="55">
    </el-table-column>
    <el-table-column
        prop="action"
        label="ACTION"
        show-overflow-tooltip>
    </el-table-column>
  </el-table>

  <div style="margin-top: 10vw">
    <el-button @click="deleteFeedback()" class="button2">Delete</el-button>
    <el-button @click="toggleSelection()" class="button3">Cancel</el-button>
  </div>

</div>
</template>

<script>
export default {
  name: "three_one",
  data() {
    return {
      tableData: [
        {
          action: 'dog walk',
        }, {
          action: 'Chores',
        }, {
          action: 'Prescription',
        }, {
          action: 'Shopping',
        }
      ],
    }
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${ i }`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value: [1, 4]
    };
  },
  methods:{
    handle(){
      this.$router.push('/header/3-1-1');
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
  }
}

</script>

<style scoped>


.whole{
  font-size: 2vw;
  color: black;
  padding-bottom: 50vw;
}
span {
  margin-right: 80vw;
}

.button2{
  margin-left: 4vw;
}

.button3{
  margin-left:4vw;
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
