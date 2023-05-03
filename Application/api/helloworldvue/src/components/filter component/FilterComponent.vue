<template>
  <div class="filter_container">
    <div class="f-title">Referral Filters</div>
    <div>
      <label for="id4">
        <input @click="setToggle1" class="filter-head-input" id="id4" type="checkbox">
        <div class="filter-head">
          <i class="arrow-right"></i>
          Referral Type
        </div>
        <div v-show="toggle1" class="filter-body">
          <div>
            <label v-for="(referralType, index) in referralTypes" :key="index">
              <input class="checkItem" type="checkbox" v-model="selectedValues1" :value="referralType">
              {{ referralType }}
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
        <input @click="setToggle2" class="filter-head-input" id="id5" type="checkbox">
        <div class="filter-head">
          <i class="arrow-right"></i>
          Status
        </div>
        <div v-show="toggle2" class="filter-body">
          <div>
            <label v-for="(status, index) in statuses" :key="index">
              <input class="checkItem" type="checkbox" v-model="selectedValues1" :value="status">
              {{status}}
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
  </div>
</template>
<script>
import $ from "jquery";

export default {
  data() {
    return {
      checkData: [],
      checkdata: [],
      Checkdata: [],
      toggle1: false,
      toggle2: false,
      toggle3: false,
      referralTypes:["Food Bank","GP"],
      statuses:["Complete", "Contacted", "Chosen"],
      selectedValues1: [],
    }
  },
  watch: {
    selectedValues1(newValues) {
      this.$emit('updatereferral', newValues)
    },
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
    baseURL: function(){
        return window.location.origin
      },

    getReferrals: async function () {
        const csrftoken = this.getCookie('csrftoken')
        const json = await $.ajax({
          url: this.baseURL() + "/api/referrals/",
          beforeSend: function (xhr) {
            xhr.setRequestHeader('X-CSRFToken', csrftoken)
          },
          method: "GET",
          type: "GET",
          contentType: 'application/json',
          success: () => {
            //this.$emit('removed-action', response)
            console.log("success")
          },
          error: (err) => {
            console.error(JSON.stringify(err))
          }
        }).catch((err) => {
          console.err(JSON.stringify(err))
        })
        console.log(JSON.stringify(json))
        return json;
      },
    getCookie: function (name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
            }
          }
        }
        return cookieValue;
      },
    getReferralTypeByID: async function(id){
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
        url: this.baseURL() + '/api/referraltypes/',
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken)
        },
        method: "GET",
        type: "GET",
        contentType: 'application/json',
        success: () => {
          //this.$emit('removed-action', response)
          console.log("success")
        },
        error: (err) => {
          console.error(JSON.stringify(err))
        }
      }).catch((err) => {
        console.err(JSON.stringify(err))
      })
      console.log('GETRESIDENTBYIDCALL RETURN VALUE: ' + json.results.find(obj => obj.id === id).name)
      return json.results.find(obj => obj.id === id).name;
    },
  },
  async mounted() {
    let response = await this.getReferrals();
    response = response.results;
    console.log("GETACTIONS RESPONSE: " + JSON.stringify(response));
    this.referralTypes = await Promise.all(response.map(async (result) => {
      return await this.getReferralTypeByID(result.referral_type);
    }));
  },
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