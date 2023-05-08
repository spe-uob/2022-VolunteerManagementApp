<template>
  <div>
    <table class="left_table">
      <thead style="background-color: rgba(247, 247, 247, 1)">
      <tr style="font-size: 12px;">
        <td colspan="2" style=" font-size: 15px;font-weight:bold;">Actions</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr style="background-color: rgba(223, 226, 230, 1); height: 20px;">
        <th  @click="sortTable('help_type')">Type<span class="sortable1" :class="{ active: activeButton === 0 }"></span></th>
        <th  @click="sortTable('resident')">Resident<span class="sortable1"  :class="{ active: activeButton === 1 }" ></span></th>
        <th  @click="sortTable('Due')">Due<span class="sortable1"   :class="{ active: activeButton === 2 }" ></span></th>
        <th  @click="sortTable('status')">Status<span class="sortable1"   :class="{ active: activeButton === 3 }" ></span></th>
        <th  @click="sortTable('assigned')">Assigned<span class="sortable1"  :class="{ active: activeButton === 4 }" ></span></th>
        <th  @click="sortTable('priority')">Priority<span class="sortable1"  :class="{ active: activeButton === 5 }" ></span></th>
      </tr>

      </thead>

      <tbody>

      <tr v-for="(item,index) in data" :key="index" :class="'tr-color-' + index % 2" @click="handleClick(1)">
        <td class="table_hover">{{item.help_type}}</td>
        <td class="table_hover">{{item.resident}}</td>
        <td class="table_hover">{{item.Due}}</td>
        <td class="table_hover">{{item.status}}</td>
        <td class="table_hover">{{item.assigned}}</td>
        <td class="table_hover">{{item.priority}}</td>
      </tr>

      <tr v-for=" i in emptyRows" :class="'tr-color-' + i % 2" :key="i">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>

// import $ from "jquery";

export default {
  name: 'actionTable',
  data() {
    return {
      toggle: false,
      // list: 12,
      emptyRows: 0,
      activeButton: -1,
      priority: ["High", "Medium", "Low"],
      helpTypes: ["Pending volunteer interest", "Volunteer interest", "Volunteer assigned", "Ongoing", "Completed", "Couldn't complete", "No longer needed"],
      sortOrder:'',
    }
  },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => [],
    }
  },

  methods: {
    toggleActive(index) {
      if (this.activeButton === index) {
        this.activeButton = -1;
      } else {
        this.activeButton = index;
      }
    },
    // eslint-disable-next-line no-unused-vars
    handleClick(id) {
      this.$router.push(`/action_page/${id}`)
    },
    // baseURL: function(){
    //     return window.location.origin
    //   },
    sortTable(sortKey) {
      let sortedData = [...this.data];
      if (this.sortOrder === sortKey) {
        sortedData.reverse();
      } else {
        if (sortKey === 'Due') {
          this.toggleActive(2);
          sortedData.sort((a, b) => new Date(a[sortKey]) - new Date(b[sortKey]));
        } else if (sortKey === 'help_type') {
          this.toggleActive(0);
          sortedData.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        } else if (sortKey === 'resident') {
          this.toggleActive(1);
          sortedData.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        } else if (sortKey === 'status') {
          this.toggleActive(3);
          sortedData.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        } else if (sortKey === 'assigned'){
          this.toggleActive(4);
          sortedData.sort((a, b) => a[sortKey] - b[sortKey]);
        } else if (sortKey === 'priority'){
          this.toggleActive(5);
          sortedData.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        }
        this.sortOrder = sortKey;
      }
      this.$emit('request-sort',  sortedData);
    },
    toggleHide() {
      this.toggle = !this.toggle;
    },
    //   getActions: async function () {
    //     const csrftoken = this.getCookie('csrftoken')
    //     const json = await $.ajax({
    //       url: this.baseURL() + '/api/actions/',
    //       beforeSend: function (xhr) {
    //         xhr.setRequestHeader('X-CSRFToken', csrftoken)
    //       },
    //       method: "GET",
    //       type: "GET",
    //       contentType: 'application/json',
    //       success: () => {
    //         //this.$emit('removed-action', response)
    //         console.log("success")
    //       },
    //       error: (err) => {
    //         console.error(JSON.stringify(err))
    //       },
    //
    //     }).catch((err) => {
    //       console.err(JSON.stringify(err))
    //     })
    //     console.log(JSON.stringify(json))
    //     return json;
    //   },
    //   getCookie: function (name) {
    //     let cookieValue = null;
    //     if (document.cookie && document.cookie !== '') {
    //       const cookies = document.cookie.split(';');
    //       for (let i = 0; i < cookies.length; i++) {
    //         const cookie = cookies[i].trim();
    //         // Does this cookie string begin with the name we want?
    //         if (cookie.substring(0, name.length + 1) === (name + '=')) {
    //           cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //           break;
    //         }
    //       }
    //     }
    //     return cookieValue;
    //   },
    //   getResidentByID: async function(id){
    //     const csrftoken = this.getCookie('csrftoken')
    //     const json = await $.ajax({
    //       url: this.baseURL() + '/api/residents/',
    //       beforeSend: function (xhr) {
    //         xhr.setRequestHeader('X-CSRFToken', csrftoken)
    //       },
    //       method: "GET",
    //       type: "GET",
    //       contentType: 'application/json',
    //       success: () => {
    //         //this.$emit('removed-action', response)
    //         console.log("success")
    //       },
    //       error: (err) => {
    //         console.error(JSON.stringify(err))
    //       }
    //     }).catch((err) => {
    //       console.err(JSON.stringify(err))
    //     })
    //     console.log('GETRESIDENTBYIDCALL RETURN VALUE: ' + json.results.find(obj => obj.id === id).first_name)
    //     return json.results.find(obj => obj.id === id).first_name;
    //   },
    //   getHelpTypeByID: async function(id){
    //     const csrftoken = this.getCookie('csrftoken')
    //     const json = await $.ajax({
    //       url: this.baseURL() + '/api/helptypes/',
    //       beforeSend: function (xhr) {
    //         xhr.setRequestHeader('X-CSRFToken', csrftoken)
    //       },
    //       method: "GET",
    //       type: "GET",
    //       contentType: 'application/json',
    //       success: () => {
    //         //this.$emit('removed-action', response)
    //         console.log("success")
    //       },
    //       error: (err) => {
    //         console.error(JSON.stringify(err))
    //       }
    //     }).catch((err) => {
    //       console.err(JSON.stringify(err))
    //     })
    //     console.log('GETRESIDENTBYIDCALL RETURN VALUE: ' + json.results.find(obj => obj.id === id).name)
    //     return json.results.find(obj => obj.id === id).name;
    //   },
    //   formatDate(dateString) {
    //     const date = new Date(dateString);
    //     const year = date.getFullYear();
    //     const month = date.toLocaleString('default', { month: 'long' });
    //     const day = date.getDate();
    //     return `${month} ${day}, ${year}`;
    // },
    //   getStatusByID: function(id){
    //     return this.helpTypes[id - 1]
    //   },
    //   getPriorityByID: function(id){
    //     return this.priority[id - 1]
    //   }
  },
  // async mounted(){
  //   let response = await this.getActions();
  //   response = response.results;
  //   console.log("GETACTIONS RESPONSE: " + JSON.stringify(response));
  //   this.list = await Promise.all(response.map(async (result) => {
  //     return {
  //       id: result.id,
  //       resident: await this.getResidentByID(result.resident),
  //       help_type: await this.getHelpTypeByID(result.help_type),
  //       Due: this.formatDate(result.requested_datetime),
  //       assigned: result.assigned_volunteers,
  //       status: this.getStatusByID(result.action_status),
  //       priority: this.getPriorityByID(result.action_priority)
  //     };
  //   }));
  // },


}
</script>

<style>

.left_table {
  border-collapse: collapse;
  font-size: 12px;
  border-spacing: 12px;
  width: 80%;
  background-color: #f8f8f8;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.table_hover:hover{
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}

th,td{
  border: none;
}


.left_table th {
  background-color: rgba(234, 236, 239, 1);
  color: black;
  font-weight: bold;
  text-align: left;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.left_table th:hover {
  background-color: #dddddd;
}


span.sortable1 {
  display: inline-block;
  width: 0;
  height: 0;
  margin-top: 0px;
  margin-left: 8px;
  vertical-align: middle;
  border-top: 0;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #999;
  border-left: 4px solid transparent;
}



span.sortable1.active{
  transform: rotate(180deg);
  border-top: 0;
  border-right: 4px solid transparent;
  border-bottom: 4px solid black;
  border-left: 4px solid transparent;
}

td {
  padding: 0.75rem 2rem;
  border-bottom: 1px solid #ddd;
  color: #333;
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