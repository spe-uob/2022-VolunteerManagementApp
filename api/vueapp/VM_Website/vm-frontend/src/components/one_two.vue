<template>
  <div style="width: 100%;">

    <div id="main">
			<span class="title">
				Select Feedback to change
			</span>
      <el-button
          style="float: right;width: 150px;height: 2vw;padding-top:0.25vw;font-size: 1px;padding-left: 1vw;margin-top: 2vw;"
          type="info" round @click="Toadd()">ADD FEEDBACK<i style="font-weight: bolder"
                                                            class="el-icon-plus button"></i></el-button>

      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
                @selection-change="handleSelectionChange" :cell-style="columnStyle">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column label="Action">
          <template slot-scope="scope">
            <el-link style="color: rgb(68, 126, 155);" @click="handleEdit(scope.$index, scope.row)">
              {{ scope.row.name }}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column prop="Volunteer" label="VOLUNTEER">
        </el-table-column>
        <el-table-column prop="Resident" label="RESIDENT" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="Time" label="TIME" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="Created date time" label="CREATED DATE TIME" show-overflow-tooltip>
        </el-table-column>
        <el-table-column align="center" label="OPTION">
          <template slot-scope="scope">
            <el-button style="color: white;background-color: #aa0000;font-size: 1vw;" @click="handleDelete(scope.$index, scope.row)">Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <span
          style="display: inline-block;margin-left: 1em;margin-top: 2em;font-size: 1em;color: #909399;">{{tableData.length}}
				organisations</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: '',
      options: [{
        value: '选项1',
        label: "St.John's Surgery"
      }, {
        value: '选项2',
        label: 'Fliwood Food Centre'
      }, {
        value: '选项3',
        label: 'Test referal org 1'
      }],
      value: '',
    }
  },
  created() {
    this.tableData = this.$store.state.tableData

  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    Toadd() {
      this.$store.commit('receiveBMsg', {
        formData: {}
      })
      this.$store.commit('receiveStatus', {
        status: 0
      })
      this.$router.push("/addFeedbacks")
    },
    columnStyle({
                  row,
                  column,
                  rowIndex,
                  columnIndex
                }) {
      if (columnIndex == 1) { //第1的背景色就改变了1都是列数的下标（The background colour of the 1st changes 1 is the subscript of the column number）
        return 'color: rgb(68, 126, 155);'
      }
    },
    handleEdit(index, row) { //编辑信息（Editorial information）
      this.$store.commit('receiveBMsg', {
        formData: {
          index: index,
          Action: row.Action,
          Volunteer: row.Volunteer,
          Resident: row.Resident,
          Time: row.Time,
          Createddatetime: row.Createddatetime,
        },
      })
      this.$store.commit('receiveStatus', {
        status: -1
      })
      this.$router.push("/addFeedbacks")
    },
    handleDelete(index, row) { //删除数据（Delete data）
      this.tableData.splice(index, 1);
    },
    getDeleteVisible(index, row) {
      this.visible = false; //隐藏弹出框（Hide pop-up boxes）
    },
    handleSizeChange: function(size) {
      this.pagesize = size;
      console.log(this.pagesize) //每页下拉显示数据（Drop-down display of data per page）
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage) //点击第几页（Click on the pages）
    },
  },
}
</script>

<style scoped>
#main {
  margin-left: 4vw;
  margin-right: 4vw;

}

.title {
  color: black;
  font-size: 2vw;
  margin-top: 0vw;
  margin-bottom: 3vw;
  display: inline-block;
}

.select {
  width: 30vw;
  max-height: 2vw;
  margin-bottom: 2vw;
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
