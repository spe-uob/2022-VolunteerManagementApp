<template>

  <div>

    <table style="margin-left: 4rem">
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
        <th class="sortable">Help Type<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable">Resident<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable">Due<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable">Status<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable">Assigned<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable">Priority<div style="display: inline-block;position: absolute;"><span></span><br /><span  ></span></div></th>
      </tr>

      <tr v-for="(item, index) in list1" :class="'tr-color-' + index % 2" :key="index">
        <td>{{item.type}}</td>
        <td>{{item.resident}}</td>
        <td>{{item.Due}}</td>
        <td>{{item.status}}</td>
        <td>{{item.assigned}}</td>
        <td>{{item.priority}}</td>
      </tr>
      </tbody>
    </table>

    <table style="margin-left: 4rem">
      <thead style="background-color: rgba(247, 247, 247, 1)">
      <tr style="font-size: 1rem;">
        <td rowspan="4" style="font-size: 1rem;font-weight:bold;">Referrals</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </thead>
      <tbody>
      <tr style="background-color: rgba(223, 226, 230, 1); height: 1.5rem;">
        <th class="sortable">Referral Type<div style="display: inline-block;position: absolute;;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable">Resident<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable">Created<div style="display: inline-block;position: absolute;"><span></span><br /><span  ></span></div></th>
        <th class="sortable">Status<div style="display: inline-block;position: absolute;"><span></span><br /><span  ></span></div></th>
      </tr>

      <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">
        <td>{{item.type}}</td>
        <td>{{item.resident}}</td>
        <td>{{item.created}}</td>
        <td>{{item.status}}</td>
      </tr>
      </tbody>
    </table>

    <div>
      <Action_FilterComponent class="table3"></Action_FilterComponent>
    </div>

    <div>
      <Referral_FilterComponent class="table4"></Referral_FilterComponent>
    </div>

  </div>

</template>

<script>
export default {
  name: 'All_Activity',
  data() {
    return {
      list1: [
        {
          type: "222222222222",
          resident: '2222222222',
          Due: '222222222222',
          status: '222222222',
          assigned: '222222222',
          priority: '22222222222'
        },
        {
          type: "",
          resident: '',
          Due: '',
          status: '',
          assigned: '',
          priority: ''
        },
        {
          type: "",
          resident: '',
          Due: '',
          status: '',
          assigned: '',
          priority: ''
        },
        {
          type: "",
          resident: '',
          Due: '',
          status: '',
          assigned: '',
          priority: ''
        },
        {
          type: "",
          resident: '',
          Due: '',
          status: '',
          assigned: '',
          priority: ''
        },
        {
          type: "",
          resident: '',
          Due: '',
          status: '',
          assigned: '',
          priority: ''
        },
        {
          type: "",
          resident: '',
          Due: '',
          status: '',
          assigned: '',
          priority: ''
        },

        {
          type: "",
          resident: '',
          Due: '',
          status: '',
          assigned: '',
          priority: ''
        },
        {
          type: "",
          resident: '',
          Due: '',
          status: '',
          assigned: '',
          priority: ''
        },
        {
          type: "",
          resident: '',
          Due: '',
          status: '',
          assigned: '',
          priority: ''
        },
        {
          type: "",
          resident: '',
          Due: '',
          status: '',
          assigned: '',
          priority: ''
        },
        {
          type: "",
          resident: '',
          Due: '',
          status: '',
          assigned: '',
          priority: ''
        },
      ],

      list: [
        {
          type: '2222222222222222222',
          resident: '2222222222',
          created: '22222222222',
          status: '2222222222'
        },
        {
          type: '',
          resident: '',
          created: '',
          status: ''
        },
        {
          type: '',
          resident: '',
          created: '',
          status: ''
        },
        {
          type: '',
          resident: '',
          created: '',
          status: ''
        },
        {
          type: '',
          resident: '',
          created: '',
          status: ''
        },
        {
          type: '',
          resident: '',
          created: '',
          status: ''
        },
        {
          type: '',
          resident: '',
          created: '',
          status: ''
        },

        {
          type: '',
          resident: '',
          created: '',
          status: ''
        },
        {
          type: '',
          resident: '',
          created: '',
          status: ''
        },
        {
          type: '',
          resident: '',
          created: '',
          status: ''
        },
        {
          type: '',
          resident: '',
          created: '',
          status: ''
        },
        {
          type: '',
          resident: '',
          created: '',
          status: ''
        },
      ],
      buttons: [
        {label: 'All Activity', left: '373rem', selected: false},
        {label: 'Actions', left: '526rem', selected: false},
        {label: 'Referrals', left: '679rem', selected: false},
        {label: 'Residents', left: '832rem', selected: false},
        {label: 'Volunteers', left: '985rem', selected: false},
        {label: 'Organisations', left: '1138rem', selected: false},
      ],
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Referral_FilterComponent: require('./FilterComponent.vue').default,
    Action_FilterComponent: require('./Action_FilterComponent.vue').default
  },
  methods: {

  }
}
</script>

<style>

table {
  border-collapse: collapse;
  width: 20%;
  max-width: 100rem;
  margin: 1rem;
  float: left;
  background-color: #f8f8f8;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

th,td{
  border: none;
}

th {
  background-color: #3A4857;
  color: #fff;
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
  background-color: #273b52;
}

th.sortable:after {
  content: "\25B2";
  margin-left: 2px;
}

th.sortable.asc:after {
  content: "\25BC";
}

td {
  padding: 0.75rem 2rem;
  border-bottom: 1px solid #ddd;
  color: #333;
}

tr:hover {
  background-color: #e6e6e6;
}



.table3{
  color: black;
  font-size: 10px;
  box-sizing: border-box;
  margin-left: 88%;
  border-collapse: collapse;
  border: none;
  background: #F2F2F2;
}




.table4{
  color: black;
  font-size: 10px;
  margin-left: 88%;
  margin-top: 10%;
  border-collapse: collapse;
  border: none;
  background: #F7F7F7;
}

.tr-color-0 {
  background: #f2f2f2;
}

.tr-color-1 {
  background: #fff;
}


@media (min-width: 768px) {
  table {
    max-width: 50%;
    font-size: 18px;
  }
}

@media (min-width: 992px) {
  table {
    max-width: 33.33%;
    font-size: 20px;
  }
}

@media (min-width: 1200px) {
  table {
    max-width: 25%;
    font-size: 22px;
  }
}

</style>
