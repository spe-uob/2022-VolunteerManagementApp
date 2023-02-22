<template>
  <div>    
    <div>
        <actionTable :containerSize="600"></actionTable>
    </div>
    <div>
      <referralTable :containerSize="600" :left="700" :top="195"></referralTable>
    </div>
  </div>
  
</template>

<script>
import referralTable from './referralTable.vue';
import actionTable from './actionTable.vue';

export default {
  name: 'AllActivity',
  components: {
    referralTable,
    actionTable,
  }
}
</script>

<style scoped>
  .small-action-container {
    box-sizing: border-box;
    overflow: hidden;

    position: static;
    padding: 0;
    width: calc(50% - 10px);
    height: 839px;
    left: -20px;
    top: 194px;
    margin-right: 10px; 

    background: white;
    border: 1px solid #DFDFDF;
    border-radius: 5px;
    height: 100%;
    display: block;
  }
  .small-table {
    height: 100%;
    width: 100%;
    vertical-align: top;
    display: inline-block; 
  }

  .small-referral-container {
    box-sizing: border-box;
    overflow: hidden;

    position: static;
    margin: 0;
    padding: 0;
    width: 600px;
    width: calc(50% - 10px);
    left: 1000px;
    top: 194px;

    background: white;
    border: 1px solid #DFDFDF;
    border-radius: 5px;
    height: 100%;
    display: block;
  }
</style>