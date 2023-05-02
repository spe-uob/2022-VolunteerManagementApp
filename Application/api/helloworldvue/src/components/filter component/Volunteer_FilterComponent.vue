<template>
  <div class="filter-container">
    <div class="f-title">Filters</div>
    <div>
      <label for="id7">
        <input class="filter-head-input" id="id7" type="checkbox">
        <div @click="setToggle1" class="filter-head">
          <i class="arrow-right"></i>
          Status
        </div>
        <div v-show="toggle1" class="filter-body">
          <div>
            <label for="quan">
              <input id="quan" type="checkbox" @click="checkAll($event)"> Select all
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="Dog Walking" v-model="checkData">
              Dog Walking
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="Food Parcel" v-model="checkData">
              Food Parcel
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="Leafleting" v-model="checkData">
              Leafleting
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="Prescription" v-model="checkData">
              Prescription
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="shopping" v-model="checkData">
              Shopping
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="Volunteer Assigned" v-model="checkData">
              Volunteer Assigned
            </label>
          </div>
        </div>
      </label>
    </div>

    <div>
      <label for="id8">
        <input class="filter-head-input" id="id8" type="checkbox">
        <div @click="setToggle2" class="filter-head">
          <i class="arrow-right"></i>
          Checks
        </div>
        <div v-show="toggle2" class="filter-body">
          <div>
            <label for="select">
              <input id="select" type="checkbox" @click="checkall($event)"> Select all
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="sub type1" v-model="checkdata">
              sub type1
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="sub type2" v-model="checkdata">
              sub type2
            </label>
          </div>
        </div>
      </label>
    </div>


    <div>
      <label for="id9">
        <input class="filter-head-input" id="id9" type="checkbox">
        <div @click="setToggle3" class="filter-head">
          <i class="arrow-right"></i>
          Ward
        </div>
        <div v-show="toggle3" class="filter-body">
          <div>
            <label for="all">
              <input id="all" type="checkbox" @click="Checkall($event)"> Select all
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="sub type1" v-model="Checkdata">
              sub type1
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="sub type2" v-model="Checkdata">
              sub type2
            </label>
          </div>
        </div>
      </label>
    </div>

    <div>
      <label for="id10">
        <input class="filter-head-input" id="id10" type="checkbox">
        <div @click="setToggle4" class="filter-head">
          <i class="arrow-right"></i>
          Account
        </div>
        <div v-show="toggle4" class="filter-body">
          <div>
            <label for="All">
              <input id="All" type="checkbox" @click="CheckAll($event)"> Select all
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="Daily Digest" v-model="CheckData">
              Daily Digest
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="  Weekly Digest" v-model="CheckData">
              Weekly Digest
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value=" User Without Account" v-model="CheckData">
              User Without Account
            </label>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkData: [],
      checkdata: [],
      Checkdata: [],
      CheckData: [],
      toggle1: false,
      toggle2: false,
      toggle3: false,
      toggle4: false,
    }
  },
  watch: {
    checkData: {
      handler() {
        if (this.checkData.length == 3) {
          document.querySelector('#quan').checked = true;
        } else {
          document.querySelector('#quan').checked = false;
        }
      },
      deep: true
    },
    checkdata: {
      handler() {
        if (this.checkdata.length == 3) {
          document.querySelector('#select').checked = true;
        } else {
          document.querySelector('#select').checked = false;
        }
      },
      deep: true
    },
    Checkdata: {
      handler() {
        if (this.Checkdata.length == 3) {
          document.querySelector('#all').checked = true;
        } else {
          document.querySelector('#all').checked = false;
        }
      },
      deep: true
    },
    CheckData: {
      handler() {
        if (this.CheckData.length == 3) {
          document.querySelector('#All').checked = true;
        } else {
          document.querySelector('#All').checked = false;
        }
      },
      deep: true
    }
  },
  methods: {
    setToggle1() {
      this.toggle1 = !this.toggle1;
    },
    setToggle2() {
      this.toggle2 = !this.toggle2;
    },
    setToggle3() {
      this.toggle3 = !this.toggle3;
    },
    setToggle4() {
      this.toggle4 = !this.toggle4;
    },
    checkAll(e){
      var checkObj = document.querySelectorAll('.checkItem');
      if(e.target.checked){
        for(var i=0;i<checkObj.length;i++){
          if(!checkObj[i].checked){
            this.checkData.push(checkObj[i].value);
          }
        }
      }else {
        this.checkData = [];
      }
    },
    checkall(e){
      var checkObj = document.querySelectorAll('.checkItem');
      if(e.target.checked){
        for(var i=0;i<checkObj.length;i++){
          if(!checkObj[i].checked){
            this.checkdata.push(checkObj[i].value);
          }
        }
      }else {
        this.checkdata = [];
      }
    },
    Checkall(e){
      var checkObj = document.querySelectorAll('.checkItem');
      if(e.target.checked){
        for(var i=0;i<checkObj.length;i++){
          if(!checkObj[i].checked){
            this.Checkdata.push(checkObj[i].value);
          }
        }
      }else {
        this.Checkdata = [];
      }
    },
    CheckAll(e){
      var checkObj = document.querySelectorAll('.checkItem');
      if(e.target.checked){
        for(var i=0;i<checkObj.length;i++){
          if(!checkObj[i].checked){
            this.CheckData.push(checkObj[i].value);
          }
        }
      }else {
        this.Checkdata = [];
      }
    }
  }
}

</script>

<style scoped>


.f-title{
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  padding: 4px;
  color: black;
  background-color: rgba(247, 247, 247, 1);
}

.filter-head{
  background: #eee;
  padding: 8px;
  font-size: 10px;
  border-top: 1px solid #D8D8D8;
  margin: 1px 0;
  color: black;
}

.filter-head:hover{
  background-color: #dddddd;
}

.filter-head-input{
  display: none;
}
.arrow-right {
  display: inline-block;
  width: 0.45rem;
  height: 0.45rem;
  border-top: .10rem solid #666;
  border-right: .10rem solid #666;
  margin-right: 6px;
  transform: rotate(45deg);
  transition: transform 0.1s ease-in-out;
}

.filter-head-input:checked+.filter-head .arrow-right{
  transform: rotate(135deg);
  transition: transform 0.1s ease-in-out;
}

label{
  font-size: 10px;
  color: black;
}

.filter-body{
  background-color: white;
}

</style>