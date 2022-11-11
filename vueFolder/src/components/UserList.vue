<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="UserName"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
     data() {
        return {
          tableData: [{
            id: '1001',
            username: 'Whitaker',
            address: '400 Fifth Avenue, New York, NY 10018'
          }, {
            id: '1002',
            username: 'Eva',
            address: '400 Fifth Avenue, New York, NY 10018'
          }, {
            id: '1003',
            username: 'Zoey',
            address: '400 Fifth Avenue, New York, NY 10018'
          }, {
            id: '1004',
            username: 'Lucy',
            address: '400 Fifth Avenue, New York, NY 10018'
          }, {
            id: '1005',
            username: 'Addison',
            address: '400 Fifth Avenue, New York, NY 10018'
          }, {
            id: '1006',
            username: 'Zora',
            address: '400 Fifth Avenue, New York, NY 10018'
          }, {
            id: '1007',
            username: 'Aubrey',
            address: '400 Fifth Avenue, New York, NY 10018'
          }, {
            id: '1008',
            username: 'Rose',
            address: '400 Fifth Avenue, New York, NY 10018'
          }]
        }
      }
  }
</script>

<style lang="scss" scoped>
.el-table{
  width: 500px;
}
</style>