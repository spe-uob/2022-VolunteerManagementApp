<template>
  <div>
    <table class="Action_table">
      <thead style="background-color: rgba(247, 247, 247, 1)">
      <tr style="font-size: 1rem;">
        <td colspan="2" style=" font-size: 1rem;font-weight:bold;">Actions</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </thead>

      <tbody>

      <tr style="background-color: rgba(223, 226, 230, 1); height: 1.5rem;">
        <th class="sortable" @click="sortTable('help_type')">Help Type<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable" @click="sortTable('resident')">Resident<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable" @click="sortTable('Due')">Due<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable" @click="sortTable('status')">Status<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable" @click="sortTable('assigned')">Assigned<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable" @click="sortTable('priority')">Priority<div style="display: inline-block;position: absolute;"><span></span><br /><span  ></span></div></th>
      </tr>

      <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index" @click="handleClick(1)">
        <td>{{item.help_type}}</td>
        <td>{{item.resident}}</td>
        <td>{{item.Due}}</td>
        <td>{{item.status}}</td>
        <td>{{item.assigned}}</td>
        <td>{{item.priority}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import $ from "jquery";

export default {
  name: 'actionTable',
  data() {
    return {
      toggle: false,
      list: [
        { help_type: 'Z', resident: 'John Doe', Due: '2021-01-01', status: 'Active' },
        { help_type: 'X', resident: 'Amy', Due: '2020-02-01', status: 'Inactive' },
        { help_type: 'Y', resident: 'Annie', Due: '2019-02-01', status: 'Inactive' },
        { help_type: 'A', resident: 'Bill', Due: '2018-02-01', status: 'Inactive' },
        { help_type: 'D', resident: 'Lin', Due: '2022-02-01', status: 'Inactive' },
        { help_type: 'C', resident: 'Skill', Due: '2014-02-01', status: 'Inactive' },
        { help_type: 'E', resident: 'miss', Due: '2013-02-01', status: 'Inactive' },
        { help_type: 'B', resident: 'doctor', Due: '2007-02-01', status: 'Inactive' },
      ],
      sortOrder:'',
    }
  },
  props: {
    containerSize: {
      type: Number,
      required: true
    },
  },
  created() {
    this.tableData = this.$store.state.tableData
  },
  methods: {
    handleClick(id){
      this.$router.push(`/action_page/${id}`)
    },
    sortTable(sortKey) {
      if (this.sortOrder === sortKey) {
        this.list.reverse();
      } else {
        if (sortKey === 'Due') {
          this.list.sort((a, b) => new Date(a[sortKey]) - new Date(b[sortKey]));
        } else if (sortKey === 'help_type') {
          this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        } else if (sortKey === 'resident') {
          this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        } else if (sortKey === 'status') {
          this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        }
        this.sortOrder = sortKey;
      }
    },
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
          assigned: 'n/a',
          status: result.action_status,
          priority: result.action_priority
        }
      })
    })
  },
}
</script>

<style>

.Action_table {
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

.Action_table th {
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





/*.right {*/
/*  padding: 0 20px;*/
/*  height: 32px;*/
/*  font-weight: 400;*/
/*  font-size: 14px;*/
/*  margin-left: 10px;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  line-height: 32px;*/
/*  cursor: pointer;*/
/*}*/
/*.up {*/
/*  border-bottom: 6px solid #217aff;*/
/*}*/
/*.down {*/
/*  border-top: 6px solid #217aff;*/
/*}*/
/*.opacity-5 {*/
/*  opacity: 0.5;*/
/*}*/
/*.opacity-1 {*/
/*  opacity: 1 !important;*/
/*}*/
/*.box-icon {*/
/*  height: 30px;*/
/*  margin-top: 7px;}*/
/*.up {*/
/*  width: 0px; !*设置宽高为0，所以div的内容为空，从才能形成三角形尖角*!*/
/*  height: 0px;*/
/*  border-bottom: 6px solid #a3a5b3;*/
/*  border-left: 4px solid transparent; !*transparent 表示透明*!*/
/*  border-right: 4px solid transparent;*/
/*  margin-bottom: 4px;*/
/*}*/
/*.down {*/
/*  width: 0px;*/
/*  height: 0px;*/
/*  opacity: 0.5;*/
/*  border-top: 6px solid #a3a5b3;*/
/*  border-left: 4px solid transparent;*/
/*  border-right: 4px solid transparent;*/
/*}*/

/*.box-icon div {*/
/*  height: 10px;*/
/*  margin-left: 4px;*/
/*}*/
/*.on {*/
/*  width: 150px;*/
/*  height: 40px;*/
/*  display: table-cell;*/
/*  position: relative;*/
/*}*/

/*.on a {*/
/*  display: block;*/
/*  overflow: hidden;*/
/*  width: 100%;*/
/*  height: 30px;*/
/*  line-height: 30px;*/
/*  text-align: center;*/
/*  color: #5e5e5e;*/
/*}*/

/*.angle_top {*/
/*  content: '';*/
/*  width: 0;*/
/*  height: 0;*/
/*  display: block;*/
/*  border-style: solid;*/
/*  border-width: 0 6px 6px;*/
/*  border-color: transparent transparent #5e5e5e;*/
/*  position: absolute;*/
/*  transform: rotate(180deg);*/
/*  bottom: 14px;*/
/*  right: 17px;*/
/*}*/

/*.angle_bottom {*/
/*  content: '';*/
/*  width: 0;*/
/*  height: 0;*/
/*  display: block;*/
/*  border-style: solid;*/
/*  border-width: 0 6px 6px;*/
/*  border-color: transparent transparent #5e5e5e;*/
/*  position: absolute;*/
/*  top: 10px;*/
/*  right: 17px;*/
/*}*/
/*table, th, td {*/
/*  border: 1px lightgray solid;*/
/*  border-collapse: collapse;*/
/*}*/
/*table {*/
/*  width: 150%;*/
/*  margin: -100px auto;*/
/*}*/
/*th, td {*/
/*  padding: 10px;*/
/*  font-size:12px;*/
/*}*/
/*th {*/
/*  background-color:gray;*/
/*  color: black;*/
/*}*/
/*.info {*/
/*  background-color:white;*/
/*  color: black;*/
/*}*/

/**{*/
/*  box-sizing: border-box;*/
/*  padding: 0;*/
/*  margin: 0;*/
/*}*/

/*body{*/
/*  font-family: 'Open Sans',sans-serif;*/
/*  font-size: 16px;*/
/*  line-height: 1.2;*/
/*  color: #333;*/
/*  background: white;*/
/*}*/

/*.container{*/
/*  max-width: 100%;*/
/*  margin: -100px auto;*/
/*  padding: 185px;*/
/*  display: grid;*/
/*  grid-template-columns: repeat(3,1fr);*/
/*  column-gap: 400px;*/
/*  row-gap: 10px;*/
/*  align-items: stretch;*/
/*}*/

/*table{*/
/*  background: gray;*/
/*  color: #fff;*/
/*  font-size: 30px;*/
/*  padding: 200px;*/
/*  border: skyblue 1px solid;*/
/*}*/
/*table1{*/
/*  background: green;*/
/*  color: #fff;*/
/*  font-size: 10px;*/
/*  padding: 200px;*/
/*  border: skyblue 1px solid;*/
/*}*/

/*.item:nth-of-type(1){*/
/*  background: black;*/
/*  !* chrome F12 click grid *!*/
/*  !* 横着合并 *!*/
/*  grid-column: 1/3;*/
/*  !* 竖着合并*!*/
/*  grid-row: 1/3;*/
/*}*/




</style>