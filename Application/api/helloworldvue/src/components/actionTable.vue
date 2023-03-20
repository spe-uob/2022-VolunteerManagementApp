<template>
  <div>
    <!--     api version-->

    <!--    <div class='table-container' :style="{ width: containerSize + 'px', height: containerSize + 'px'}">-->
    <!--      <table class="table">-->
    <!--        <thead>-->
    <!--        <tr style="font-size: 17px;background-color: #f7f7f7;">-->
    <!--          <td rowspan="4" style="font-size: 17px;font-weight:bold;color: black">Actions</td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--        </tr>-->
    <!--        </thead>-->
    <!--        <tbody>-->

    <!--        <tr>-->
    <!--          <th>ID<div style="display: inline-block;position: absolute;top:0px;">-->
    <!--            <span class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--          </div>-->
    <!--          </th>-->
    <!--          <th>Resident<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--            <span class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--          </th>-->
    <!--          <th>Help Type<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--            <span class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--          </div>-->
    <!--          </th>-->
    <!--          <th>Due<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--            <span-->
    <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--          </th>-->
    <!--          <th>Status<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--            <span-->
    <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--          </th>-->
    <!--        </tr>-->
    <!--        &lt;!&ndash; 用索引值除以 2 取余 &ndash;&gt;-->
    <!--        <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">-->
    <!--          <td style="color:  black;">{{item.id}}</td>-->
    <!--          <td style="color:  black;">{{item.resident}}</td>-->
    <!--          <td style="color:  black;">{{item.help_type}}</td>-->
    <!--          <td style="color:  black;">{{item.Due}}</td>-->
    <!--          <td style="color:  black;">{{item.Status}}</td>-->
    <!--        </tr>-->
    <!--        </tbody>-->
    <!--      </table>-->
    <!--    </div>-->


    <!--    new version-->

    <!--      <div class="table-container" :style="{width: containerSize + 'px', height: containerSize + 'px', left: left + 'px', top: top + 'px'}">-->
    <!--        <table class="table">-->
    <!--          <thead>-->
    <!--          <tr style="font-size: 17px;backgrou6nd-color: #f7f7f7;">-->
    <!--            <td rowspan="4" style="font-size: 17px;font-weight:bold;color: black">Actions</td>-->
    <!--            <td></td>-->
    <!--            <td></td>-->
    <!--            <td></td>-->
    <!--            <td></td>-->
    <!--          </tr>-->
    <!--          </thead>-->
    <!--          <tbody>-->

    <!--          <tr>-->
    <!--            <th>ID<div style="display: inline-block;position: absolute;top:45px;">-->
    <!--              <span-->
    <!--                  class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--            </th>-->
    <!--            <th>Resident<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--              <span-->
    <!--                  class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--            </th>-->
    <!--            <th>Help Type<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--              <span-->
    <!--                  class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--            </th>-->
    <!--            <th>Due<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--              <span-->
    <!--                  class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--            </th>-->
    <!--            <th>Status<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--              <span-->
    <!--                  class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--            </th>-->
    <!--          </tr>-->
    <!--          <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">-->
    <!--            <td style="color:  black;">{{item.id}}</td>-->
    <!--            <td style="color:  black;">{{item.resident}}</td>-->
    <!--            <td style="color:  black;">{{item.help_type}}</td>-->
    <!--            <td style="color:  black;">{{item.Organisation}}</td>-->
    <!--            <td style="color:  black;">{{item.Completed}}</td>-->
    <!--          </tr>-->
    <!--          </tbody>-->
    <!--        </table>-->

    <!--        <div>-->
    <!--          <FilterComponent class="table1"></FilterComponent>-->
    <!--        </div>-->
    <!--      </div>-->


    <div>
      <Action_tableComponent></Action_tableComponent>
    </div>


    <div>
      <FilterComponent></FilterComponent>
    </div>

  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'actionTable',
  data() {
    return {
      toggle: false,
    }
  },
  props: {
    containerSize: {
      type: Number,
      required: true
    },
  },
  components: {
    FilterComponent: require('./Action_FilterComponent.vue').default,
    Action_tableComponent:require('./Actions.vue').default
  },
  created() {
    this.tableData = this.$store.state.tableData
  },
  methods: {
    toggleHide() {
      this.toggle = !this.toggle;
    },
    getActions: async function () {
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
        url: "http://localhost:8000/" + "api/actions/",
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
  },
  mounted(){
    this.getActions().then((response) => {
      this.list = response.results.map((result) => {
        return {
          id: result.id,
          resident: result.resident,
          help_type: result.help_type,
          Due: 'n/a',
          Status: result.action_status,
        }
      })
    })
  },
}

</script>

<style>

.container{
  justify-content: flex-start;
  align-items: flex-start;
  vertical-align: top;
  box-sizing: border-box;
  position: absolute;
  width: 1229px;
  height: 854px;
  left: 20px;
  top: 194px;
  background: rgb(212, 215, 211);
  border: 1px solid #DFDFDF;
  border-radius: 5px;
}


/*table {*/
/*  border-collapse: collapse;*/
/*  width: 20%;*/
/*  max-width: 40rem;*/
/*  margin: 0rem;*/
/*  float: left;*/
/*  background-color: #f8f8f8;*/
/*  border-radius: 4px;*/
/*  overflow: hidden;*/
/*  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);*/
/*}*/
/*.table1 {*/
/*  background: #ebecf0;*/
/*  color: rgba(31, 31, 31, 0.7);*/
/*  border-radius: 5px;*/
/*  margin: 0 auto;*/
/*  border: 1px solid #f7f7f7;*/
/*  width: 200px;*/
/*  position: absolute;*/
/*  right: -220px;*/
/*  top: 0;*/
/*}*/

/*.tr-color-0 {*/
/*  background: #f2f2f2;*/
/*}*/

/*.tr-color-1 {*/
/*  background: #fff;*/
/*}*/

/*@media (min-width: 460px) {*/
/*  table {*/
/*    max-width: 50%;*/
/*    font-size: 18px;*/
/*  }*/
/*}*/


/*@media (min-width: 800px) {*/
/*  table {*/
/*    max-width: 50%;*/
/*    font-size: 18px;*/
/*  }*/

/*}*/

/*@media (min-width: 992px) {*/
/*  table {*/
/*    max-width: 33.33%;*/
/*    font-size: 20px;*/
/*  }*/
/*}*/

/*@media (min-width: 1200px) {*/
/*  table {*/
/*    max-width: 25%;*/
/*    font-size: 22px;*/
/*  }*/
/*}*/

/*.table-container {*/
/*    box-sizing: border-box;*/
/*    position: absolute;*/
/*    left: 20px;*/
/*    top: 194px;*/
/*    background: rgb(212, 215, 211);*/
/*    border: 1px solid #DFDFDF;*/
/*    border-radius: 5px;*/
/*  }*/

/*.table {*/
/*  border: 1px solid #f5f5f5;*/
/*  border-radius: 5px;*/
/*  margin: 0 auto;*/
/*  border-spacing: 0px;*/
/*  width: 100%;*/
/*  max-width: 100%;*/
/*  height: 100%;*/
/*  margin: 0;*/
/*}*/

/*.table1 {*/
/*  background: #ebecf0;*/
/*  color: rgba(31, 31, 31, 0.7);*/
/*  border-radius: 5px;*/
/*  margin: 0 auto;*/
/*  border: 1px solid #f7f7f7;*/
/*  width: 200px;*/
/*  position: absolute;*/
/*  right: -220px;*/
/*  top: 0;*/
/*  !* position: fixed;*/
/*  left: 1200px;*/
/*  bottom: 745px; *!*/
/*}*/

/*select {*/

/*  !* styling *!*/
/*  background-color: white;*/
/*  border: black;*/
/*  border-radius: 4px;*/
/*  display: inline-block;*/
/*  font: inherit;*/
/*  line-height: 1.5em;*/
/*  padding: 0.5em 0.1em 0.5em 0.5em;*/
/*}*/


/*th {*/
/*  background-color: #ebecf0;*/
/*  color: rgba(31, 31, 31, 0.7);*/
/*  cursor: pointer;*/
/*  text-align: left;*/
/*}*/


/*td {*/
/*  font-size: 13px;*/
/*  height: 30px;*/
/*}*/

/*th,*/
/*td {*/
/*  min-width: 90px;*/
/*  padding: 10px 10px;*/
/*}*/

/*!* 定义余数为 0 的行颜色 *!*/

/*.tr-color-0 {*/
/*  background: #f2f2f2;*/
/*}*/

/*!* 定义余数为 1 的行颜色 *!*/

/*.tr-color-1 {*/
/*  background: #fff;*/
/*}*/

/*.arrow {*/
/*  display: inline-block;*/
/*  vertical-align: middle;*/
/*  width: 0;*/
/*  height: 0;*/
/*  margin-left: 5px;*/
/*  opacity: 0.66;*/
/*}*/

/*.arrow.asc {*/
/*  border-left: 4px solid transparent;*/
/*  border-right: 4px solid transparent;*/
/*  border-bottom: 4px solid #4c4b50;*/
/*}*/

/*.arrow.dsc {*/
/*  border-left: 4px solid transparent;*/
/*  border-right: 4px solid transparent;*/
/*  border-top: 4px solid #4c4b50;*/
/*}*/
</style>