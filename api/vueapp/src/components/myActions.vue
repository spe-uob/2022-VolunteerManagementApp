<template>
  <div>
    <div class="container1">
      <table style="margin-left: -7rem">
        <thead>
        <tr style="font-size: 1rem;background-color: #f7f7f7;">
          <td rowspan="4" style="font-size: 17px;font-weight:bold;color: black">Actions</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </thead>
        <tbody>

        <tr>
          <th>ID<div style="display: inline-block;position: absolute;top:75px;"><span
              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>
          </th>
          <th>Help Type<div style="display: inline-block;position: absolute;top:75px;"><span
              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>
          </th>
          <th>Resident<div style="display: inline-block;position: absolute;top: 75px;"><span
              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>
          </th>
          <th>Due<div style="display: inline-block;position: absolute;top: 75px;"><span
              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>
          </th>
          <th>Status<div style="display: inline-block;position: absolute;top: 75px;"><span
              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>
          </th>
          <th>Assigned<div style="display: inline-block;position: absolute;top: 75px;"><span
              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>
          </th>
          <th>Priority<div style="display: inline-block;position: absolute;top: 75px;"><span
              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>
          </th>
          <th>Volunteer<div style="display: inline-block;position: absolute;top: 75px;"><span
              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>
          </th>
          <th>Completed<div style="display: inline-block;position: absolute;top: 75px;"><span
              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>
          </th>
        </tr>
        <!-- 用索引值除以 2 取余 -->
        <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">
          <td style="color:  black;">{{item.id}}</td>
          <td style="color:  black;">{{item.type}}</td>
          <td style="color:  black;">{{item.resident}}</td>
          <td style="color:  black;">{{item.due}}</td>
          <td style="color:  black;">{{item.status}}</td>
          <td style="color:  black;">{{item.assigned}}</td>
          <td style="color:  black;">{{item.priority}}</td>
          <td style="color:  black;">{{item.volunteer}}</td>
          <td style="color:  black;">{{item.completed}}</td>
        </tr>
        </tbody>
      </table>
      <div>
        <myFilter class="table1"></myFilter>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
      list: [{
        id: "1",
        type: "1",
        resident: '1',
        due: '1',
        status: '1',
        assigned: '1',
        priority: '1',
        volunteer: '1',
        completed: '1',
      },
        {
          id: "1",
          type: "1",
          resident: '1',
          due: '1',
          status: '1',
          assigned: '1',
          priority: '1',
          volunteer: '1',
          completed: '1',
        },
        {
          id: "1",
          type: "1",
          resident: '1',
          due: '1',
          status: '1',
          assigned: '1',
          priority: '1',
          volunteer: '1',
          completed: '1',
        },
        {
          id: "1",
          type: "1",
          resident: '1',
          due: '1',
          status: '1',
          assigned: '1',
          priority: '1',
          volunteer: '1',
          completed: '1',
        },
        {
          id: "1",
          type: "1",
          resident: '1',
          due: '1',
          status: '1',
          assigned: '1',
          priority: '1',
          volunteer: '1',
          completed: '1',
        },
        {
          id: "1",
          type: "1",
          resident: '1',
          due: '1',
          status: '1',
          assigned: '1',
          priority: '1',
          volunteer: '1',
          completed: '1',
        },
      ]
    }
  },
  created() {
    this.tableData = this.$store.state.tableData
  },
  components: {
    myFilter: require('./myFilter.vue').default
  },
  methods: {
    toggleHide() {
      this.toggle = !this.toggle;
    }
  }
}

</script>

<style>
.container1 {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

.table {
  border: 1px solid #f5f5f5;
  border-radius: 5px;
//margin: 0 auto;
  border-spacing: 0px;
  width: 100%;
  max-width: 100%;
  margin: 0;
  overflow: hidden;

}

.table1 {
  background: #ebecf0;
  color: rgba(31, 31, 31, 0.7);
  border-radius: 5px;
//margin: 0 auto;
  border: 1px solid #f7f7f7;
  width: 200px;
  position: absolute;
  right: -220px;
  top: 0;
  /* position: fixed;
  left: 1200px;
  bottom: 745px; */
}

select {

  /* styling */
  background-color: white;
  border: black;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 0.1em 0.5em 0.5em;
}


th {
  background-color: #ebecf0;
  color: rgba(31, 31, 31, 0.7);
  cursor: pointer;
  text-align: left;
}


td {
  font-size: 13px;
  height: 30px;
}

th,
td {
  min-width: 90px;
  padding: 10px 10px;

}

/* 定义余数为 0 的行颜色 */

.tr-color-0 {
  background: #f2f2f2;
}

/* 定义余数为 1 的行颜色 */

.tr-color-1 {
  background: #fff;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #4c4b50;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #4c4b50;
}
</style>