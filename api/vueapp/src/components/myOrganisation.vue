<template>
  <div>
    <div class="container1">
      <table class="table">
        <thead>
        <tr style="font-size: 17px;background-color: #f7f7f7;">
          <td rowspan="4" style="font-size: 17px;font-weight:bold;color: black">Organisations</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>

        </tr>
        </thead>
        <tbody>

        <tr>
          <th>Name<div style="display: inline-block;position: absolute;top:45px;"><span
              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>
          </th>
          <th>Phone Number<div style="display: inline-block;position: absolute;top: 45px;"><span
              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>
          </th>
          <th>Address<div style="display: inline-block;position: absolute;top: 45px;"><span
              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>
          </th>
          <th>Main Contact<div style="display: inline-block;position: absolute;top: 45px;"><span
              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>
          </th>
          <th>Email<div style="display: inline-block;position: absolute;top: 45px;"><span
              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>
          </th>

        </tr>
        <!-- 用索引值除以 2 取余 -->
        <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">
          <td style="color:  black;">{{item.Name}}</td>
          <td style="color:  black;">{{item.PhoneNumber}}</td>
          <td style="color:  black;">{{item.Address}}</td>
          <td style="color:  black;">{{item.MainContact}}</td>
          <td style="color:  black;">{{item.Email}}</td>
        </tr>
        </tbody>
      </table>
  </div>
    <div class="search_wrap" :style="searchWrapStyle">
      <!-- 搜索栏 -->
      <header class="searchBox">
        <input
            type="text"
            class="input"
            :placeholder="placeholder"
            v-model="searchValue"
            @keyup.enter="handleSearch"
        />
      </header>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
      list: [{
        Name: "1",
        PhoneNumber: '1',
        Address: '1',
        MainContact: '1',
        Email: '1',

      },
        {
          Name: "1",
          PhoneNumber: '1',
          Address: '1',
          MainContact: '1',
          Email: '1',

        },
        {
          Name: "1",
          PhoneNumber: '1',
          Address: '1',
          MainContact: '1',
          Email: '1',

        },
        {
          Name: "1",
          PhoneNumber: '1',
          Address: '1',
          MainContact: '1',
          Email: '1',

        },
        {
          Name: "1",
          PhoneNumber: '1',
          Address: '1',
          MainContact: '1',
          Email: '1',

        },
        {
          Name: "1",
          PhoneNumber: '1',
          Address: '1',
          MainContact: '1',
          Email: '1',

        },
        {
          Name: "1",
          PhoneNumber: '1',
          Address: '1',
          MainContact: '1',
          Email: '1',
        },
        {
          Name: "1",
          PhoneNumber: '1',
          Address: '1',
          MainContact: '1',
          Email: '1',

        },

        {
          Name: "1",
          PhoneNumber: '1',
          Address: '1',
          MainContact: '1',
          Email: '1',

        },
        {
          Name: "1",
          PhoneNumber: '1',
          Address: '1',
          MainContact: '1',
          Email: '1',

        },
        {
          Name: "1",
          PhoneNumber: '1',
          Address: '1',
          MainContact: '1',
          Email: '1',

        },
        {
          Name: "1",
          PhoneNumber: '1',
          Address: '1',
          MainContact: '1',
          Email: '1',

        },
        {
          Name: "1",
          PhoneNumber: '1',
          Address: '1',
          MainContact: '1',
          Email: '1',

        },
      ]
    }
  },
created() {
  this.tableData = this.$store.state.tableData
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
  width: 70%;
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
}

.table1 {
  //background: #ebecf0;
  //color: rgba(31, 31, 31, 0.7);
  //border-radius: 5px;
//margin: 0 auto;
  //border: 1px solid #f7f7f7;
  //width: 200px;
  //position: absolute;
  //right: -220px;
  //top: 0;
  /* position: fixed;
  left: 1200px;
  bottom: 745px; */
}

select{
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

