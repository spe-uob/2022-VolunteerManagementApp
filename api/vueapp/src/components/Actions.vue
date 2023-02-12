<template>
  <div>
    <div class="container">
      <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <title>TableSorter</title>
      </head>
      <body>

      <table>
        <tr>
          <th>actions</th>
        </tr>
        <tr class="info">
            <td>
              <div class="on">
                <a href="javascript:void(0)" data-category="price" data-orderby="asc" class="js_category">Help types
                  <i class="angle_top"></i>
                  <i class="angle_bottom"></i>
                </a>
              </div>
            </td>
          <td>
            <div class="on">
              <a href="javascript:void(0)" data-category="price" data-orderby="asc" class="js_category">ID
                <i class="angle_top"></i>
                <i class="angle_bottom"></i>
              </a>
            </div>
          </td>
          <td>
            <div class="on">
              <a href="javascript:void(0)" data-category="price" data-orderby="asc" class="js_category">Residents
                <i class="angle_top"></i>
                <i class="angle_bottom"></i>
              </a>
            </div>
          </td>
          <td>
            <div class="on">
              <a href="javascript:void(0)" data-category="price" data-orderby="asc" class="js_category">Due
                <i class="angle_top"></i>
                <i class="angle_bottom"></i>
              </a>
            </div>
          </td>
          <td>
            <div class="on">
              <a href="javascript:void(0)" data-category="price" data-orderby="asc" class="js_category">Status
                <i class="angle_top"></i>
                <i class="angle_bottom"></i>
              </a>
            </div>
            </td>
          <td>
            <div class="on">
              <a href="javascript:void(0)" data-category="price" data-orderby="asc" class="js_category">Assigned
                <i class="angle_top"></i>
                <i class="angle_bottom"></i>
              </a>
            </div>
            </td>
          <td>
            <div class="on">
              <a href="javascript:void(0)" data-category="price" data-orderby="asc" class="js_category">Priority
                <i class="angle_top"></i>
                <i class="angle_bottom"></i>
              </a>
            </div>
            </td>
          <td>
            <div class="on">
              <a href="javascript:void(0)" data-category="price" data-orderby="asc" class="js_category">Volunteer
                <i class="angle_top"></i>
                <i class="angle_bottom"></i>
              </a>
            </div>
          </td>
          <td>
            <div class="on">
              <a href="javascript:void(0)" data-category="price" data-orderby="asc" class="js_category">Compeleted
                <i class="angle_top"></i>
                <i class="angle_bottom"></i>
              </a>
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr class="info">
          <td>2</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
        </tr>
      </table>
      </body>
      </html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>type</title>
      </head>
      <body>
      <table>
        <tr>
          <th>filters</th>

        </tr>
        <tr class="info">
          <td>1</td>

        </tr>
        <tr>
          <td>1</td>

        </tr>
        <tr class="info">
          <td>1</td>

        </tr>
      </table>
      </body>
      </html>

<!--      <table1>-->
<!--        <tr><td>Referrals</td></tr>-->
<!--        <tr><td>111111111111111111111</td></tr>-->
<!--        <tr><td>55555555555</td></tr>-->
<!--      </table1>-->
      <!--      <table>-->
<!--        <tr><td>Actions</td></tr>-->
<!--        <tr>-->
<!--          <td>ID</td>-->
<!--          <td>Help type</td>-->
<!--          <td>Residents</td>-->
<!--            <td>Due</td>-->
<!--          <td>Status</td>-->
<!--          <td>assigned</td>-->
<!--          <td>Priority</td>-->
<!--        </tr>-->
<!--      </table>-->

    </div>
    <div class="right"
         @click="change(item,index)"
         v-for="(item, index) in btnList"
         :key="index">{{item.lable}}
      <div class="box-icon">
        <div class="up"
             :class="item.status === 1 ? 'opacity-5' : ''"></div>
        <div class="down"
             :class="item.status === 1 ? 'opacity-1' : ''"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Actions"
}
</script>

<style type="text/css">

.on {
  width: 150px;
  height: 40px;
  display: table-cell;
  position: relative;
}

.on a {
  display: block;
  overflow: hidden;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #5e5e5e;
}

.angle_top {
  content: '';
  width: 0;
  height: 0;
  display: block;
  border-style: solid;
  border-width: 0 6px 6px;
  border-color: transparent transparent #5e5e5e;
  position: absolute;
  transform: rotate(180deg);
  bottom: 14px;
  right: 17px;
}

.angle_bottom {
  content: '';
  width: 0;
  height: 0;
  display: block;
  border-style: solid;
  border-width: 0 6px 6px;
  border-color: transparent transparent #5e5e5e;
  position: absolute;
  top: 10px;
  right: 17px;
}
table, th, td {
  border: 1px lightgray solid;
  border-collapse: collapse;
}
table {
  width: 150%;
  margin: -100px auto;
}
th, td {
  padding: 10px;
  font-size:12px;
}
th {
  background-color:gray;
  color: black;
}
.info {
  background-color:white;
  color: black;
}

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body{
  font-family: 'Open Sans',sans-serif;
  font-size: 16px;
  line-height: 1.2;
  color: #333;
  background: white;
}

.container{
  max-width: 100%;
  margin: -100px auto;
  padding: 185px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  column-gap: 400px;
  row-gap: 10px;
  align-items: stretch;
}

table{
  background: gray;
  color: #fff;
  font-size: 30px;
  padding: 200px;
  border: skyblue 1px solid;
}
table1{
  background: green;
  color: #fff;
  font-size: 10px;
  padding: 200px;
  border: skyblue 1px solid;
}

/*.item:nth-of-type(1){*/
/*  background: black;*/
/*  !* chrome F12 click grid *!*/
/*  !* 横着合并 *!*/
/*  grid-column: 1/3;*/
/*  !* 竖着合并*!*/
/*  grid-row: 1/3;*/
/*}*/




</style>