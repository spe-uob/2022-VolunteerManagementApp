<template>
  <div class="filter-container">
    <div class="f-title">Action Filters</div>
    <div>
      <label for="id7">
        <input class="filter-head-input" id="id7" type="checkbox">
        <div @click="setToggle1" class="filter-head">
          <i class="arrow-right"></i>
          Help Type
        </div>
        <div v-show="toggle1" class="filter-body">
<!--          <div>-->
<!--            <label for="quan">-->
<!--              <input id="quan" type="checkbox" @click="checkAll($event)"> Select all-->
<!--            </label>-->
<!--          </div>-->
          <div>
            <label v-for="(helpType, index) in help_Types" :key="index">
              <input class="checkItem" type="checkbox" v-model="selectedValues" :value="helpType">
              {{helpType}}
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
          Status
        </div>
        <div v-show="toggle2" class="filter-body">
          <div>
            <label v-for="(status, index) in statuses" :key="index">
              <input class="checkItem" type="checkbox" v-model="selectedValues" :value="status">
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

    <div>
      <label for="id9">
        <input class="filter-head-input" id="id9" type="checkbox">
        <div @click="setToggle3" class="filter-head">
          <i class="arrow-right"></i>
          Priority
        </div>
        <div v-show="toggle3" class="filter-body">
          <div>
            <label  v-for="(priority, index) in Priority" :key="index">
              <input class="checkItem" type="checkbox" v-model="selectedValues" :value="priority">
              {{priority}}
            </label>
          </div>
        </div>
      </label>
    </div>
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
      help_Types:["A","Y"],
      statuses:["Active","Inactive"],
      Priority:["Low","Medium","High"],
      helpTypes: ["Pending volunteer interest", "Volunteer interest", "Volunteer assigned", "Ongoing", "Completed", "Couldn't complete", "No longer needed"],
      priority: ["High", "Medium", "Low"],
      selectedValues: []
    }
  },
  watch: {
    selectedValues(newValues) {
      this.$emit('update', newValues) // 触发update事件，将新的selectedValues值传递给父组件
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
    baseURL: function(){
      return window.location.origin
    },
    getActions: async function () {
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
        url: this.baseURL() + '/api/actions/',
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
        },

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
    getHelpTypeByID: async function(id){
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
        url: this.baseURL() + '/api/helptypes/',
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
    getStatusByID: function(id){
      return this.helpTypes[id - 1]
    },
    getPriorityByID: function(id){
      return this.priority[id - 1]
    },
  },
  async mounted() {

    let response = await this.getActions();
    response = response.results;
    console.log("GETACTIONS RESPONSE: " + JSON.stringify(response));

    this.help_Types = await Promise.all(response.map(async (result) => {
      return await this.getHelpTypeByID(result.help_type);
    }));

    this.statuses = response.map((result) => {
      return this.getStatusByID(result.action_status)
    });

    this.Priority = response.map((result) => {
      return this.getPriorityByID(result.action_priority)
    });
  },
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