<template>
  <div>
    <div>

      <table class="right_table">
        <thead style="background-color: rgba(247, 247, 247, 1)">
        <tr style="font-size: 12px;">
          <td rowspan="4" style="font-size: 15px;font-weight:bold;">Referrals</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        </thead>
        <tbody>
        <tr style="background-color: rgba(223, 226, 230, 1); height: 20px;">
          <th @click="sortTable('type')">Type <span class="sortable1" :class="{ active: activeButton === 0 }" ></span></th>
          <th @click="sortTable('resident')">Resident<span class="sortable1" :class="{ active: activeButton === 1 }" ></span></th>
          <th @click="sortTable('created')">Created<span class="sortable1" :class="{ active: activeButton === 2 }" ></span></th>
          <th @click="sortTable('status')">Status<span class="sortable1" :class="{ active: activeButton === 3 }" ></span></th>
        </tr>

<!--        <tr style="background-color: rgba(223, 226, 230, 1); height: 20px;">-->
<!--          <th>Type<span class="sortable1" :class="{ active: activeButton === 0 }" @click="sortTable('help_type')"></span></th>-->
<!--          <th>Resident<span class="sortable1"  :class="{ active: activeButton === 1 }" @click="sortTable('resident')"></span></th>-->
<!--          <th>Due<span class="sortable1"   :class="{ active: activeButton === 2 }" @click="sortTable('Due')"></span></th>-->
<!--          <th>Status<span class="sortable1"   :class="{ active: activeButton === 3 }" @click="sortTable('status')"></span></th>-->
<!--          <th>Assigned<span class="sortable1"  :class="{ active: activeButton === 4 }" @click="sortTable('assigned')"></span></th>-->
<!--          <th>Priority<span class="sortable1"  :class="{ active: activeButton === 5 }" @click="sortTable('priority')"></span></th>-->
<!--        </tr>-->

        <tr  v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">
          <td>{{item.type}}</td>
          <td>{{item.resident}}</td>
          <td>{{item.created}}</td>
          <td>{{item.status}}</td>
        </tr>

        <tr v-for=" i in emptyRows" :class="'tr-color-' + i % 2" :key="i">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>


        </tbody>
      </table>
      <!--      <table class="table">-->
      <!--        <thead>-->
      <!--        <tr style="font-size: 17px;background-color: #f7f7f7;">-->
      <!--          <td rowspan="4" style="font-size: 17px;font-weight:bold;color: black">Referrals</td>-->
      <!--          <td></td>-->
      <!--          <td></td>-->
      <!--          <td></td>-->
      <!--          <td></td>-->
      <!--          <td></td>-->
      <!--        </tr>-->
      <!--        </thead>-->
      <!--        <tbody>-->

      <!--        <tr>-->
      <!--          <th>Referral Type<div style="display: inline-block;position: absolute;top:45px;"><span-->
      <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
      <!--          </th>-->
      <!--          <th>Resident<div style="display: inline-block;position: absolute;top: 45px;"><span-->
      <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
      <!--          </th>-->
      <!--          <th>Created<div style="display: inline-block;position: absolute;top: 45px;"><span-->
      <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
      <!--          </th>-->
      <!--          <th>Status<div style="display: inline-block;position: absolute;top: 45px;"><span-->
      <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
      <!--          </th>-->
      <!--          <th>Organisation<div style="display: inline-block;position: absolute;top: 45px;"><span-->
      <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
      <!--          </th>-->
      <!--          <th>Completed<div style="display: inline-block;position: absolute;top: 45px;"><span-->
      <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
      <!--          </th>-->
      <!--        </tr>-->
      <!--        &lt;!&ndash; 用索引值除以 2 取余 &ndash;&gt;-->
      <!--        <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">-->
      <!--          <td style="color:  black;">{{item.type}}</td>-->
      <!--          <td style="color:  black;">{{item.resident}}</td>-->
      <!--          <td style="color:  black;">{{item.created}}</td>-->
      <!--          <td style="color:  black;">{{item.status}}</td>-->
      <!--          <td style="color:  black;">{{item.organisation}}</td>-->
      <!--          <td style="color:  black;">{{item.completed}}</td>-->
      <!--        </tr>-->
      <!--        </tbody>-->
      <!--      </table>-->


      <!--      <div class="table1">-->
      <!--        <thead>-->
      <!--        <tr style="font-size: 17px;background-color: #f7f7f7;">-->
      <!--          <td rowspan="4" style="font-size: 17px;font-weight:bold;">Filters</td>-->
      <!--          <td></td>-->
      <!--        </tr>-->
      <!--        </thead>-->
      <!--          <div>-->
      <!--          <div class="t-head" @click="toggleHide()"><td style=font-weight:bold;>Referral Type</td></div>-->
      <!--          <div v-show="toggle" class="t-body">-->
      <!--            <p><input type="radio" name="111" id="1">-->
      <!--              <label for="1">foodbank</label></p >-->
      <!--            <p><input type="radio" name="111" id="1">-->
      <!--              <label for="1">gp</label></p >-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div>-->
      <!--          <div class="t-head" @click="toggleHide()"><td style=font-weight:bold;>Status</td></div>-->
      <!--          <div v-show="toggle" class="t-body">-->
      <!--&lt;!&ndash;            <p>1</p >&ndash;&gt;-->
      <!--&lt;!&ndash;            <p>2</p >&ndash;&gt;-->
      <!--&lt;!&ndash;            <p>3</p >&ndash;&gt;-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div>-->
      <!--          <div class="t-head" @click="toggleHide()"><td style=font-weight:bold;>organisation</td></div>-->
      <!--          <div v-show="toggle" class="t-body">-->
      <!--&lt;!&ndash;            <p>1</p >&ndash;&gt;-->
      <!--&lt;!&ndash;            <p>2</p >&ndash;&gt;-->
      <!--&lt;!&ndash;            <p>3</p >&ndash;&gt;-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->

      <!--     <table class="table1">-->
      <!--        <thead>-->
      <!--        <tr>-->
      <!--        <tr style="font-size: 17px;background-color: #f7f7f7;">-->
      <!--          <td rowspan="4" style="font-size: 17px;font-weight:bold;">Filters</td>-->
      <!--        </tr>-->
      <!--        </thead>-->

      <!--        <tbody>-->
      <!--        <tr class="info">-->
      <!--          <td>referral type-->
      <!--            <select class="classic">-->
      <!--              <option></option>-->
      <!--              <option>foodbank</option>-->
      <!--              <option>gp</option>-->
      <!--            </select>-->

      <!--          </td>-->

      <!--        </tr>-->
      <!--        <tr>-->
      <!--          <td>status-->
      <!--            <select class="classic">-->
      <!--              <option></option>-->
      <!--              <option></option>-->
      <!--              <option></option>-->
      <!--            </select>-->
      <!--          </td>-->

      <!--        </tr>-->
      <!--        <tr class="info">-->
      <!--          <td>organisation-->
      <!--            <select class="classic">-->
      <!--              <option></option>-->
      <!--              <option></option>-->
      <!--              <option></option>-->
      <!--            </select>-->
      <!--          </td>-->
      <!--        </tr>-->
      <!--        </tbody>-->
      <!--      </table>-->

    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      toggle: false,
      // list: 12,
      emptyRows: 0,
      activeButton: -1,
      list:
      [
        {type:'dog walking', resident:'Liu',created:'2021-01-01',status:'Inactive'},
        {type:'shopping', resident:'Zhang',created:'2023-01-01',status:'Active'},
        {type:'cooking', resident:'Lin',created:'2022-07-18',status:'Active'},
        {type:'Food parcel', resident:'john',created:'2022-01-02',status:'Inactive'},
        {type:'teaching', resident:'Bill',created:'2022-08-19',status:'Inactive'},
        {type:'selling', resident:'William',created:'2020-12-01',status:'Active'},
        {type:'playing', resident:'Amy',created:'2023-03-17',status:'Inactive'},
        {type:'playing', resident:'Amy',created:'2023-03-17',status:'Inactive'},
      ],
      sortOrder:'',
    }
  },
  props: {
    containerSize: {
      type: Number,
      required: true
    },
    left: {
      type: Number,
      required: false
    },
    top: {
      type: Number,
      required: false
    }
  },
  created() {
    this.tableData = this.$store.state.tableData
  },

  methods: {
    toggleActive(index) {
      if (this.activeButton === index) {
        this.activeButton = -1;
      } else {
        this.activeButton = index;
      }
    },
    baseURL: function(){
        return window.location.origin
      },
    sortTable(sortKey) {
      if (this.sortOrder === sortKey) {
        this.list.reverse();
      } else {
        if (sortKey === 'created') {
          this.toggleActive(2);
          this.list.sort((a, b) => new Date(a[sortKey]) - new Date(b[sortKey]));
        } else if (sortKey === 'type') {
          this.toggleActive(0);
          this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        } else if (sortKey === 'resident') {
          this.toggleActive(1);
          this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        } else if (sortKey === 'status') {
          this.toggleActive(3);
          this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        }
        this.sortOrder = sortKey;
      }
    },
    toggleHide() {
      this.toggle = !this.toggle;
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
  },
  mounted(){
    this.getReferrals().then(async (response) => {
      this.list = response.results.map((result) => {
        return {
          resident: result.resident,
          type: result.referral_type,
          created: result.created_datetime,
          status: result.referral_status,
          Completed: 'n/a'
        }
      })
    })
  },
}

</script>

<style>

.right_table {
  border-collapse: collapse;
  border-spacing: 12px;
  font-size: 12px;
  width: 80%;
  background-color: #f8f8f8;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

th,td{
  border: none;
}

.right_table th {
  background-color: rgba(234, 236, 239, 1);
  color: black;
  font-weight: bold;
  text-align: left;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

td {
  padding: 0.75rem 2rem;
  border-bottom: 1px solid #ddd;
  color: #333;
}









/*.container1 {*/
/*  position: relative;*/
/*  width: 70%;*/
/*  margin: 0 auto;*/
/*}*/

/*.table {*/
/*  border: 1px solid #f5f5f5;*/
/*  border-radius: 5px;*/
/*  margin: 0 auto;*/
/*  border-spacing: 0px;*/
/*  width: 100%;*/
/*  max-width: 100%;*/
/*}*/

/*.table1 {*/
/*  background: #ebecf0;*/
/*  color: rgba(31, 31, 31, 0.7);*/
/*  border-radius: 5px;*/
/*  //margin: 0 auto;*/
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

/* 定义余数为 0 的行颜色 */

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