<template>
  <div>
    <actionTable class="small-action-table"/>
    <referralTable class="small-referral-table"/>
  </div>
</template>

<script>
import referralTable from './referralTable.vue';
import actionTable from './actionTable.vue';

export default {
  name: 'AllActivity',
  components: {
    referralTable,
    actionTable
  }
}
</script>

<style scoped>
  .small-action-table {
    box-sizing: border-box;

    position: absolute;
    width: 718px;
    height: 839px;
    left: 20px;
    top: 194px;

    background: #F2F2F2;
    border: 1px solid #DFDFDF;
    border-radius: 5px;
  }

  .small-referral-table {
    box-sizing: border-box;

    position: absolute;
    width: 474px;
    height: 838px;
    left: 784px;
    top: 195px;

    background: #F2F2F2;
    border: 1px solid #DFDFDF;
    border-radius: 5px;
  }
</style>