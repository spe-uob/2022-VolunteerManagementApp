<template>
  <div class="filter-container">
    <div class="f-title">Action Filters</div>
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
              <input class="checkItem" type="checkbox" value="Shielded" v-model="checkData">
              Shielded
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="Internet Access" v-model="checkData">
              Internet Access
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="Smart Device" v-model="checkData">
              Smart Device
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="Online Shopping" v-model="checkData">
              Online Shopping
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="Online Comms" v-model="checkData">
              Online Comms
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
          Ward
        </div>
        <div v-show="toggle2" class="filter-body">
          <div>
            <label>
              <input type="checkbox">
              sub type1
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox">
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
          Account
        </div>
        <div v-show="toggle3" class="filter-body">
          <div>
            <label>
              <input type="checkbox">
              Consent Expiring
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
      toggle1: false,
      toggle2: false,
      toggle3: false,
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