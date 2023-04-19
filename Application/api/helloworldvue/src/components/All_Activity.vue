<template>
  <div>
    <!--    <table style="margin-left: 4rem">-->
    <!--      <thead style="background-color: rgba(247, 247, 247, 1)">-->
    <!--      <tr style="font-size: 1rem;">-->
    <!--        <td colspan="2" style=" font-size: 1rem;font-weight:bold;">Actions</td>-->
    <!--        <td></td>-->
    <!--        <td></td>-->
    <!--        <td></td>-->
    <!--        <td></td>-->
    <!--      </tr>-->
    <!--      </thead>-->

    <!--      <tbody>-->

    <!--      <tr style="background-color: rgba(223, 226, 230, 1); height: 1.5rem;">-->
    <!--        <th class="sortable">Help Type<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>-->
    <!--        <th class="sortable">Resident<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>-->
    <!--        <th class="sortable">Due<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>-->
    <!--        <th class="sortable">Status<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>-->
    <!--        <th class="sortable">Assigned<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>-->
    <!--        <th class="sortable">Priority<div style="display: inline-block;position: absolute;"><span></span><br /><span  ></span></div></th>-->
    <!--      </tr>-->

    <!--      <tr v-for="(item, index) in list1" :class="'tr-color-' + index % 2" :key="index">-->
    <!--        <td>{{item.type}}</td>-->
    <!--        <td>{{item.resident}}</td>-->
    <!--        <td>{{item.Due}}</td>-->
    <!--        <td>{{item.status}}</td>-->
    <!--        <td>{{item.assigned}}</td>-->
    <!--        <td>{{item.priority}}</td>-->
    <!--      </tr>-->
    <!--      </tbody>-->
    <!--    </table>-->

    <!--    <table class="referral_table" style="margin-left: 4rem">-->
    <!--      <thead style="background-color: rgba(247, 247, 247, 1)">-->

    <!--      <tr style="font-size: 1rem;">-->
    <!--        <td rowspan="4" style="font-size: 1rem;font-weight:bold;">Referrals</td>-->
    <!--        <td></td>-->
    <!--        <td></td>-->
    <!--        <td></td>-->
    <!--      </tr>-->

    <!--      </thead>-->
    <!--      <tbody>-->
    <!--      <tr style="background-color: rgba(223, 226, 230, 1); height: 1.5rem;">-->
    <!--        <th class="sortable">Referral Type<div style="display: inline-block;position: absolute;;"><span ></span><br /><span  ></span></div></th>-->
    <!--        <th class="sortable">Resident<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>-->
    <!--        <th class="sortable">Created<div style="display: inline-block;position: absolute;"><span></span><br /><span  ></span></div></th>-->
    <!--        <th class="sortable">Status<div style="display: inline-block;position: absolute;"><span></span><br /><span  ></span></div></th>-->
    <!--      </tr>-->

    <!--      <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">-->
    <!--        <td>{{item.type}}</td>-->
    <!--        <td>{{item.resident}}</td>-->
    <!--        <td>{{item.created}}</td>-->
    <!--        <td>{{item.status}}</td>-->
    <!--      </tr>-->
    <!--      </tbody>-->
    <!--    </table>-->
    <div class="container-table">
      <Action_table class="left-table"></Action_table>
      <Referral_table  class="right-table"></Referral_table>
    </div>


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
  name: 'AllActivity',
  data(){
    return {
    }
  },
  components: {
    // referralTable,
    // actionTable,
    Action_table: require('./table component/Actions.vue').default,
    Referral_table: require('./table component/myReferrals.vue').default,
    Referral_FilterComponent: require('./filter component/FilterComponent.vue').default,
    Action_FilterComponent: require('./filter component/Action_FilterComponent.vue').default
  },
  methods: {

  }

}
</script>

<style scoped>

.container-table{
  position: absolute;
  top: 150px;
  z-index: -1;
}

.left-table{
  width: 800px;
  margin-left: 20px;
  margin-top: 0px;
}

.right-table{
  width: 600px;
  margin-left: 700px;
  margin-top: 0px;
}



  @media (max-width: 1000px) {
  .left-table{
    position: relative;
    width: 120%;
    margin-left: 5px;
    bottom: 20px;
  }

  .right-table{
    width: 120%;
    margin-left: 5px;
  }
}

@media (min-width: 1600px) {
  .left-table{
    position: relative;
    margin-left: 50px;
    width: 50%;
  }

  .right-table{
    margin-left: 50%;
    width: 50%;
  }
}




/*table {*/
/*  border-collapse: collapse;*/
/*  width: 20%;*/
/*  min-width: 20rem;*/
/*  margin: 0rem;*/
/*  float: left;*/
/*  background-color: #f8f8f8;*/
/*  border-radius: 4px;*/
/*  overflow: hidden;*/
/*  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);*/
/*}*/

/*th,td{*/
/*  border: none;*/
/*}*/

/*th {*/
/*  background-color: rgba(234, 236, 239, 1);*/
/*  color: black;*/
/*  font-weight: bold;*/
/*  text-align: left;*/
/*  padding: 0.75rem 1rem;*/
/*  border-bottom: 1px solid #ddd;*/
/*  cursor: pointer;*/
/*}*/

/*th:hover {*/
/*  background-color: #354a63;*/
/*}*/

/*th.sortable:hover {*/
/*  background-color: #dddddd;*/
/*}*/

/*th.sortable:after {*/
/*  content: "\25B2";*/
/*  font-size: 12px;*/
/*  margin-left: 5px;*/
/*}*/

/*th.sortable.asc:after {*/
/*  content: "\25BC";*/
/*  font-size: 12px;*/
/*  margin-left: 5px;*/
/*}*/

/*td {*/
/*  padding: 0.75rem 2rem;*/
/*  border-bottom: 1px solid #ddd;*/
/*  color: #333;*/
/*}*/

/*tr:hover {*/
/*  background-color: #e6e6e6;*/
/*}*/

.table3{
  z-index: -1;
  background: #ebecf0;
  color: rgba(31, 31, 31, 0.7);
  border-radius: 0.5rem;
  border: 0.1rem solid #f7f7f7;
  width: 10rem;
  right: 10px;
  top: 150px;
}

.table4{
  background: #ebecf0;
  color: rgba(31, 31, 31, 0.7);
  border-radius: 0.5rem;
  border: 0.1rem solid #f7f7f7;
  width: 10rem;
  right: 10px;
  top: 400px;
}

.tr-color-0 {
  background: #f2f2f2;
}

.tr-color-1 {
  background: #fff;
}

</style>