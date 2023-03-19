<template>
  <div>

    <table class="Resident_table">
      <thead style="background-color: rgba(247, 247, 247, 1)">
      <tr style="font-size: 1rem;">
        <td colspan="2" style=" font-size: 1rem;font-weight:bold;">Residents</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </thead>

      <tbody>

      <tr style="background-color: rgba(223, 226, 230, 1); height: 1.5rem;">
        <th class="sortable" @click="sortTable('FirstName')">First Name<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable" @click="sortTable('LastName')">Last Name<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable" @click="sortTable('PhoneNumber')">Phone Number<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable" @click="sortTable('Email')">Email<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable" @click="sortTable('TotalTimeReceived')">Total Time Received<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable" @click="sortTable('Consent')">Consent<div style="display: inline-block;position: absolute;"><span></span><br /><span  ></span></div></th>
      </tr>

      <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">
        <td style="color:  black;">{{item.FirstName}}</td>
        <td style="color:  black;">{{item.LastName}}</td>
        <td style="color:  black;">{{item.PhoneNumber}}</td>
        <td style="color:  black;">{{item.Email}}</td>
        <td style="color:  black;">{{item.TotalTimeReceived}}</td>
        <td style="color:  black;">{{item.Consent}}</td>
      </tr>
      </tbody>
    </table>
    <!--      <table class="table">-->
    <!--        <thead>-->
    <!--        <tr style="font-size: 17px;background-color: #f7f7f7;">-->
    <!--          <td rowspan="4" style="font-size: 17px;font-weight:bold;color: black">Residents</td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--        </tr>-->
    <!--        </thead>-->
    <!--        <tbody>-->

    <!--        <tr>-->
    <!--          <th>First Name<div style="display: inline-block;position: absolute;top:45px;"><span-->
    <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
    <!--          </th>-->
    <!--          <th>Last Name<div style="display: inline-block;position: absolute;top: 45px;"><span-->
    <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
    <!--          </th>-->
    <!--          <th>Phone Number<div style="display: inline-block;position: absolute;top: 45px;"><span-->
    <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
    <!--          </th>-->
    <!--          <th>Email<div style="display: inline-block;position: absolute;top: 45px;"><span-->
    <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
    <!--          </th>-->
    <!--          <th>Total Time Received<div style="display: inline-block;position: absolute;top: 45px;"><span-->
    <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
    <!--          </th>-->
    <!--          <th>Consent<div style="display: inline-block;position: absolute;top: 45px;"><span-->
    <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
    <!--          </th>-->
    <!--        </tr>-->
    <!--        &lt;!&ndash; 用索引值除以 2 取余 &ndash;&gt;-->
    <!--        <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">-->
    <!--          <td style="color:  black;">{{item.FirstName}}</td>-->
    <!--          <td style="color:  black;">{{item.LastName}}</td>-->
    <!--          <td style="color:  black;">{{item.PhoneNumber}}</td>-->
    <!--          <td style="color:  black;">{{item.Email}}</td>-->
    <!--          <td style="color:  black;">{{item.TotalTimeReceived}}</td>-->
    <!--          <td style="color:  black;">{{item.Consent}}</td>-->
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
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      toggle: false,
      list:10,
      sortOrder:'',
    }
  },
  created() {
    this.tableData = this.$store.state.tableData
  },
  methods: {
    sortTable(sortKey) {
      if (this.sortOrder === sortKey) {
        this.list.reverse();
      } else {
        if (sortKey === 'FirstName') {
          this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        } else if (sortKey === 'LastName') {
          this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        }
        this.sortOrder = sortKey;
      }
    },
    toggleHide() {
      this.toggle = !this.toggle;
    },
    getResidents: async function () {
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
        url: "http://localhost:8000/" + "api/residents/",
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
    this.getResidents().then((response) => {
      this.list = response.results.map((result) => {
        return {
          FirstName: result.first_name,
          LastName: result.last_name,
          PhoneNumber: result.phone,
          Email: 'n/a',
          TotalTimeReceived: 'n/a',
          Consent: 'n/a',
        }
      })
    })
  },
}

</script>

<style>



.Resident_table {
  border-collapse: collapse;
  border-spacing: 50px;
  font-size: 1vw;
  min-width: 80%;
  margin-left: 5%;
  background-color: #f8f8f8;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

th,td{
  border: none;
}

.Resident_table th {
  background-color: rgba(234, 236, 239, 1);
  color: black;
  font-weight: bold;
  text-align: left;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

th:hover {
  background-color: #354a63;
}

th.sortable:hover {
  background-color: #dddddd;
}

th.sortable:after {
  content: "\25B2";
  font-size: 12px;
  margin-left: 5px;
}

th.sortable.asc:after {
  content: "\25BC";
  font-size: 12px;
  margin-left: 5px;
}

td {
  padding: 0.75rem 2rem;
  border-bottom: 1px solid #ddd;
  color: #333;
}

tr:hover {
  background-color: #e6e6e6;
}

.tr-color-0 {
  background: #f2f2f2;
}

.tr-color-1 {
  background: #fff;
}










/*.container1 {*/
/*  position: relative;*/
/*  width: 70%;*/
/*  margin: 0 auto;*/
/*}*/

/*.table-container {*/
/*    box-sizing: border-box;*/
/*    position: absolute;*/
/*    width: 1229px;*/
/*    height: 854px;*/
/*    left: 20px;*/
/*    top: 194px;*/
/*    background: rgb(212, 215, 211);*/
/*    border: 1px solid #DFDFDF;*/
/*    border-radius: 5px;*/
/*  }*/

/*.table {*/
/*  border: 1px solid #f5f5f5;*/
/*  border-radius: 5px;*/
/*//margin: 0 auto;*/
/*  border-spacing: 0px;*/
/*  width: 100%;*/
/*  max-width: 100%;*/
/*  margin: 0;*/
/*}*/

/*.table1 {*/
/*  background: #ebecf0;*/
/*  color: rgba(31, 31, 31, 0.7);*/
/*  border-radius: 5px;*/
/*//margin: 0 auto;*/
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