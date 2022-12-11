<template>
 <div class="text">
   <div class="font">
     <span>Select Feedback to change</span>
     <el-button class="fix" @click="addFeedback">Add Feedback</el-button>

  <el-table
      class="border"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width:1000px"
      @selection-change="handleSelectionChange">
    <el-table-column
        type="selection"
        width="55">
    </el-table-column>
    <el-table-column
        label="ID"
        width="50">
      <template slot-scope="scope">{{ scope.row.id }}</template>
    </el-table-column>
    <el-table-column
        prop="action"
        label="ACTION"
        show-overflow-tooltip>
    </el-table-column>
    <el-table-column
        prop="volunteer"
        label="VOLUNTEER"
        width="120">
    </el-table-column>

    <el-table-column
        label="RESIDENT"
        prop="resident"
        width="120">
    </el-table-column>
    <el-table-column
        label="TIME TAKEN"
        prop="time"
        width="120">
    </el-table-column>
    <el-table-column
        label="CREATED DATE"
        prop="create"
        show-overflow-tooltip>
    </el-table-column>
    <el-table-column
        align="right">
      <template slot="header" slot-scope="scope">
        <el-input
            v-model="search"
            size="mini"
            placeholder="search"/>
      </template>
      <template slot-scope="scope">
        <el-button
            size="mini"
            @click="updateFeedback(scope.row)">Update
        </el-button>
        <el-button
            slot="reference"
            @click="deleteFeedback()" size="mini">Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>

     <div style="margin-top: 20px">
       <el-button @click="deleteFeedback()" class="button2">Delete</el-button>
       <el-button @click="toggleSelection()" class="button3">Cancel</el-button>
     </div>
   </div>

   <el-dialog title="Add Feedback" :visible.sync="dialogFormVisible1" width="40%">
     <el-form label-width="8em" size="small">
       <el-form-item label="First Name">
         <el-input v-model="feedback.action" autocomplete="off"
                   placeholder="FirstName cannot be empty"></el-input>
       </el-form-item>
       <el-form-item label="Last Name">
         <el-input v-model="feedback.volunteer" autocomplete="off"
                   placeholder="LastName cannot be empty"></el-input>
       </el-form-item>
       <el-form-item label="time">
         <el-input v-model="feedback.time" autocomplete="off"
                   placeholder="The Phone Number cannot be empty"></el-input>
       </el-form-item>
       <el-form-item label="created date time">
         <el-input v-model="feedback.create" autocomplete="off"
                   placeholder="Please input the email"></el-input>
       </el-form-item>
     </el-form>
     <div slot="footer" class="dialog-footer">
       <el-button @click="dialogFormVisible1 = false">Cancel</el-button>
       <el-button type="primary" @click="addFeedbackInfo">Add</el-button>
     </div>
   </el-dialog>

   <el-dialog title="Update Feedback Info" :visible.sync="dialogFormVisible2" width="40%">

     <el-form label-width="8em" size="small">
       <el-form-item label="Action">
         <el-input v-model="feedback.action" autocomplete="off"
                   placeholder="First Name cannot be empty"></el-input>
       </el-form-item>
       <el-form-item label="Volunteer">
         <el-input v-model="feedback.volunteer" autocomplete="off"
                   placeholder="Last Name cannot be empty"></el-input>
       </el-form-item>
       <el-form-item label="Resident">
         <el-input v-model="feedback.resident" autocomplete="off"
                   placeholder="The Phone Number cannot be empty"></el-input>
       </el-form-item>
       <el-form-item label="Time">
         <el-input v-model="feedback.time" autocomplete="off"
                   placeholder="Last Name cannot be empty"></el-input>
       </el-form-item>
       <el-form-item label="Created date time">
         <el-input v-model="feedback.create" autocomplete="off"
                   placeholder="Last Name cannot be empty"></el-input>
       </el-form-item>
     </el-form>

     <div slot="footer" class="dialog-footer">
       <el-button @click="dialogFormVisible2 = false">Cancel</el-button>
       <el-button type="primary" @click="updateFeedbackInfo">Update</el-button>
     </div>
   </el-dialog>
 </div>
</template>

<script>
export default {
name: "one_two",
  data() {
    return {
      dialogFormVisible1: false,
      dialogFormVisible2: false,

      feedback: {},
      tableData: [
        {
        id: '1',
        action: 'Action 21',
        volunteer: 'Luke Sweeney',
        resident: 'Noel Wester',
        time: '0:15:00',
        create: 'March 2,2022,10:59 a.m.'
      }, {
        id: '2',
        action: 'Action 21',
        volunteer: 'Luke Sweeney',
        resident: 'Noel Wester',
        time: '0:15:00',
        create: 'March 2,2022,10:59 a.m.'
      }, {
        id: '3',
        action: 'Action 21',
        volunteer: 'Luke Sweeney',
        resident: 'Noel Wester',
        time: '0:15:00',
        create: 'March 2,2022,10:59 a.m.'
      }, {
        id: '4',
        action: 'Action 21',
        volunteer: 'Luke Sweeney',
        resident: 'Noel Wester',
        time: '0:15:00',
        create: 'March 2,2022,10:59 a.m.'
      }
      ],
    }
    return {
      pickerOptions: {
        shortcuts: [{
          text: 'Today',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: 'Yesterday',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: 'last week',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
      value3: ''
    };
    return {
      count: 0
    }
  },
  methods: {
    load () {
      this.count += 2
    },
    deleteFeedback() {
      this.$confirm('Are you sure you want to delete the selected Feedback?', 'Sign', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Delete Successfully!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        });
      });
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
    updateFeedback(row) {
      this.dialogFormVisible2 = true
      this.resident = Object.assign({}, row)
    },
    updateFeedbackInfo() {
    },
    addFeedback() {
      this.dialogFormVisible1 = true
      this.resident = {}
    },
    addFeedbackInfo() {
    },
  },
}
</script>
<style scoped>
 .border{
   margin-top: 100px;
   /*position: absolute;*/
   position: absolute;
   top: 100px;
   left: 20px;
 }

 .button1{
   position: absolute;
   top:100px;
   right: 100px;
 }
 .button2{
   position: absolute;
   top: 500px;
   left:20px;
 }
 .button3{
   position: absolute;
   top:500px;
   left:100px;
 }
 .font {
   font-size: 30px;
   color: black;
   padding-bottom: 100px;
 }
 span {
   margin-right: 1000px;
 }
 .fix {
   margin-left: 800px;
 }

</style>
