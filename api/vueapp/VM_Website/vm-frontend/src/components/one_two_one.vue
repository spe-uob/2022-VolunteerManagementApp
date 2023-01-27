<template>
  <div style="width: 100%;">
    <el-alert title="The organisation was added successfully.You may add another organisation below." type="success"
              show-icon :style="{display: n}">
    </el-alert>
    <el-alert title="The organisation was added successfully.You may edit it again below." type="success" show-icon
              :style="{display: e}">
    </el-alert>
    <div class="main" style="margin: 4em;">
      <el-form :model="formDate" label-position="left" label-width="16em">
        <el-form-item prop="action" label="Action">
          <div class="inputbox">
            <el-input v-model="formDate.action"></el-input>
            <div class="sub-title">Name of organisation</div>
          </div>
        </el-form-item>
        <el-form-item prop="Volunteer" label="Volunteer">
          <div class="inputbox">
            <el-input v-model="formDate.volunteer"></el-input>
            <div class="sub-title">First line of their address</div>
          </div>
        </el-form-item>
        <el-form-item prop="Resident" label="Resident">
          <div class="inputbox">
            <el-input v-model="formDate.resident"></el-input>
            <div class="sub-title">Second line of their address</div>
          </div>
        </el-form-item>
        <el-form-item prop="Time" label="Time">
          <div class="inputbox">
            <el-input v-model="formDate.time"></el-input>
            <div class="sub-title">Third line of their address</div>
          </div>
        </el-form-item>
        <el-form-item prop="Created date time" label="Created date time">
          <div class="inputbox">
            <el-input v-model="formDate.createdtime"></el-input>
            <div class="sub-title">Address postcode</div>
          </div>
        </el-form-item>
        <!--        <el-form-item prop="phonenumber" label="Email">-->
        <!--          <div class="inputbox">-->
        <!--            <el-input v-model="formDate.phonenumber"></el-input>-->
        <!--            <div class="sub-title">Main email for organisation contact</div>-->
        <!--          </div>-->
        <!--        </el-form-item>-->
        <el-form-item label="Notes">
          <div class="inputbox">
            <el-input v-model="formDate.note"></el-input>
            <div class="sub-title">Any other notes?</div>
          </div>
        </el-form-item>

        <div style="bottom: 1em;z-index:100;right: 2em;">
          <el-button class="btn" style="color: white;background-color: #aa0000;font-size: 0.2em;"
                     @click="Delete()">Delete
          </el-button>
          <el-button class="btn" style="color: white;background-color: rgb(79 141 171);font-size: 0.2em;"
                     @click="another()">Save and add another </el-button>
          <el-button class="btn" style="color: white;background-color: rgb(79 141 171);font-size: 0.2em;"
                     @click="edit()">Save and continue editing </el-button>
          <el-button class="btn" style="color: white;background-color: rgb(68, 126, 155);font-size: 0.2em;"
                     @click="dialongAdd()">SAVE</el-button>
        </div>
      </el-form>
    </div>
    <el-dialog
        :visible.sync="dialogVisible"
        width="90%">
		  <span class="title">
		   Are you sure?
		  </span>
      <br />
      <span class="title1">
		   Are you sure you want to delete the organisation "2"? All of the following related items will be deleted:
		  </span>
      <br />
      <span class="title2">
		   Summary
		  </span>
      <br />
      <span class="title3">
		   ·Organisations: 1
		  </span>
      <br />
      <span class="title2">
		   Objects
		  </span>
      <br />
      <span class="title3">
		   ·Organisations: 2
		  </span>
      <div style="margin-left: 3em;">
        <el-button class="btn" style="color: white;background-color: #aa0000;font-size: 1em;"
                   @click="agree()">Yes,I'm sure
        </el-button>
        <el-button class="btn" style="color: white;background-color: rgb(79 141 171);font-size: 1em;"
                   @click="No()">No,take me back </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: Object,
    formList: Object
  },
  data() {
    return {
      dialogVisible:false,
      n: 'none',
      e: 'none',
      formDate:{
        index:-1,
        action: '',
        resident: '',
        volunteer: '',
        time: '',
        createdtime: '',
        note: ''
      }
    };
  },
  created() {
    if(this.$store.state.status == -1){
      this.formDate=this.$store.state.formData

    }
  },
  methods: {
    dialongAdd() {
      this.$store.commit('receiveAMsg', {
        formDate: this.formDate
      })
      this.$router.push("/header/1-2")
    },
    Delete(){
      this.dialogVisible=true;
    },
    another() {
      this.n = ''
    },
    agree(){
      this.dialogVisible=false,
          this.formDate.name='';
      this.formDate.addressline1='',
          this.formDate.postcode='',
          this.formDate.contactname='',
          this.formDate.email='',
          this.formDate.phonenumber='';
    },
    No(){
      this.dialogVisible=false;
    },
    edit() {
      this.e = ''
    }
  }
}
</script>

<style>
.main {
  margin-left: 6em;
}

.sub-title {
  font-size: 1em;
  color: rgb(144, 147, 153);
}

.el-input {
  width: 33em;
}

.btn {
  margin-left: 2em;
  color: white;
}
.title {
  color: #909399;
  font-size: 2em;
  margin-top: 2em;
  margin-bottom: 2em;
  display: inline-block;
}
.title1 {
  color: #5d5f63;
  font-size: 2em;
  margin-bottom: 2em;
  display: inline-block;
}
.title2 {
  color: #0c0c0d;
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 2em;
  display: inline-block;
}
.title3 {
  color: #909399;
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 2em;
  display: inline-block;
  margin-left: 4em;
}

@media (min-width: 900px){
  .inputbox{
    width:800px
  }

}

</style>