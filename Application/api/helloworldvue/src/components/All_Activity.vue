<template>

    <div class="wrapper">
      <div class="grid-1"><Action_table class="left-table"></Action_table></div>
      <div class="grid-2"><Referral_table  class="right-table"></Referral_table></div>

      <div class="grid-3">
      <Action_FilterComponent class="Action_FilterComponent"></Action_FilterComponent>
     <Referral_FilterComponent class="Referral_FilterComponent"></Referral_FilterComponent>
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


.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-gap: 0px;
}

.grid-1 {
  width: 700px;
}

.grid-2 {
  width: 550px;
}
.grid-3{
  width: 200px;
}

.left-table{
  margin-left: 10px;
  width: 840px;
}

.right-table{
  width: 680px;
}

.Action_FilterComponent{
  position: static;
  background: #ebecf0;
  color: rgba(31, 31, 31, 0.7);
  border-radius: 0.5rem;
  width: 12rem;
  border: 0.1rem solid #f7f7f7;
}

.Referral_FilterComponent{
  position: static;
  background: #ebecf0;
  color: rgba(31, 31, 31, 0.7);
  border-radius: 0.5rem;
  width: 12rem;
  border: 0.1rem solid #f7f7f7;
  top: 300px;
}

@media screen and (max-width:1000px){

  .grid-1{
    grid-row: 1;
  }

  .grid-2 {
    width: 700px;
    grid-row: 2;
    margin-top: 10px;
  }
  .right-table{
    width: 820px;
  }

  .grid-3{
    margin-left: 20px;
    grid-area: 1 / col4-start / third-line ;
  }

  .right-table{
    margin-left: 20px;
  }

  .wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }


}

  /*@media (max-width: 1350px ){*/
  /*  .filter-container{*/
  /*    display: none;*/
  /*  }*/
  /*}*/
  /*  @media (max-width: 1000px) {*/
  /*  .left-table{*/
  /*    position: relative;*/
  /*    width: 120%;*/
  /*    margin-left: 5px;*/
  /*    bottom: 20px;*/
  /*  }*/
  /*  .right-table{*/
  /*    width: 120%;*/
  /*    margin-left: 5px;*/
  /*  }*/
  /*}*/
  /*@media (min-width: 1600px) {*/
  /*  .left-table{*/
  /*    position: relative;*/
  /*    margin-left:50px;*/
  /*    width: 1000px;*/
  /*  }*/
  /*  .right-table{*/
  /*    margin-left: 90%;*/
  /*    width: 800px;*/
  /*  }*/
  /*}*/
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
  .tr-color-0 {
    background: #f2f2f2;
  }

  .tr-color-1 {
    background: #fff;
  }


</style>