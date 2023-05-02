<template>
  <div class="filter_container">
    <div class="f-title">Referral Filters</div>
    <div>
      <label for="id4">
        <input class="filter-head-input" id="id4" type="checkbox">
        <div @click="setToggle1" class="filter-head">
          <i class="arrow-right"></i>
          Referral Type
        </div>
        <div v-show="toggle1" class="filter-body">
          <div>
            <label for="quan">
              <input id="quan" type="checkbox" @click="checkAll($event)"> Select all
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="foodbank" v-model="checkData">
              foodbank
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="gp" v-model="checkData">
              gp
            </label>
          </div>
        </div>
      </label>
    </div>
    <!--        <div>-->
    <!--            <div class="filter-head" @click="setToggle1"><i class="arrow-right"></i> Referral Type</div>-->
    <!--            <div v-show="toggle1" class="filter-body">-->
    <!--                <div>-->
    <!--                    <label>-->
    <!--                        <input type="checkbox">-->
    <!--                        foodbank-->
    <!--                    </label>-->
    <!--                </div>-->
    <!--                <div>-->
    <!--                    <label>-->
    <!--                        <input type="checkbox">-->
    <!--                        gp-->
    <!--                    </label>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--        </div>-->

    <div>
      <label for="id5">
        <input class="filter-head-input" id="id5" type="checkbox">
        <div @click="setToggle2" class="filter-head">
          <i class="arrow-right"></i>
          Status
        </div>
        <div v-show="toggle2" class="filter-body">
          <div>
            <label for="select">
              <input id="select" type="checkbox" @click="checkall($event)"> Select all
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="Shielded" v-model="checkdata">
              Shielded
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="Internet Access" v-model="checkdata">
              Internet Access
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="Smart Device" v-model="checkdata">
              Smart Device
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="Online Shopping" v-model="checkdata">
              Online Shopping
            </label>
          </div>
          <div>
            <label>
              <input class="checkItem" type="checkbox" value="Online Comms" v-model="checkdata">
              Online Comms
            </label>
          </div>
        </div>
      </label>
    </div>

    <!--          <div>-->
    <!--            <label>-->
    <!--              <input type="checkbox">-->
    <!--              sub type1-->
    <!--            </label>-->
    <!--          </div>-->
    <!--          <div>-->
    <!--            <label>-->
    <!--              <input type="checkbox">-->
    <!--              sub type2-->
    <!--            </label>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </label>-->
    <!--    </div>-->

    <div>
      <label for="id6">
        <input class="filter-head-input" id="id6" type="checkbox">
        <div @click="setToggle3" class="filter-head">
          <i class="arrow-right"></i>
          Conpleted
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkData: [],
      checkdata: [],
      Checkdata: [],
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
    }
  }
}

</script>

<style scoped>



/*.filter-container {*/
/*  font-weight: bold;*/
/*  margin-top: 20px;*/
/*  background: #ebecf0;*/
/*  color: rgba(31, 31, 31, 0.7);*/
/*  width: 150px;*/
/*  position: absolute;*/
/*  right: 10px;*/
/*  top: 120px;*/
/*}*/

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