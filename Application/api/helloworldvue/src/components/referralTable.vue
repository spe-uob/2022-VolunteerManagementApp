<template>
  <div>
    <div>
      <!--        <table class="table">-->
      <!--          <thead>-->
      <!--          <tr style="font-size: 17px;background-color: #f7f7f7;">-->
      <!--            <td rowspan="4" style="font-size: 17px;font-weight:bold;color: black">Referrals</td>-->
      <!--            <td></td>-->
      <!--            <td></td>-->
      <!--            <td></td>-->
      <!--            <td></td>-->
      <!--          </tr>-->
      <!--          </thead>-->
      <!--          <tbody>-->

      <!--          <tr>-->
      <!--            <th>ID<div style="display: inline-block;position: absolute;top:45px;">-->
      <!--              <span-->
      <!--                class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
      <!--              </div>-->
      <!--            </th>-->
      <!--            <th>Resident<div style="display: inline-block;position: absolute;top: 45px;">-->
      <!--              <span-->
      <!--                class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
      <!--              </div>-->
      <!--            </th>-->
      <!--            <th>Help Type<div style="display: inline-block;position: absolute;top: 45px;">-->
      <!--              <span-->
      <!--                class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
      <!--              </div>-->
      <!--            </th>-->
      <!--            <th>Organisation<div style="display: inline-block;position: absolute;top: 45px;">-->
      <!--              <span-->
      <!--                class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
      <!--              </div>-->
      <!--            </th>-->
      <!--            <th>Completed<div style="display: inline-block;position: absolute;top: 45px;">-->
      <!--              <span-->
      <!--                class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
      <!--              </div>-->
      <!--            </th>-->
      <!--          </tr>-->
      <!--          &lt;!&ndash; 用索引值除以 2 取余 &ndash;&gt;-->
      <!--          <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">-->
      <!--            <td style="color:  black;">{{item.id}}</td>-->
      <!--            <td style="color:  black;">{{item.resident}}</td>-->
      <!--            <td style="color:  black;">{{item.help_type}}</td>-->
      <!--            <td style="color:  black;">{{item.Organisation}}</td>-->
      <!--            <td style="color:  black;">{{item.Completed}}</td>-->
      <!--          </tr>-->
      <!--          </tbody>-->
      <!--        </table>-->
      <div>
        <div>
          <!--        <table class="table">-->
          <!--          <thead>-->
          <!--          <tr style="font-size: 17px;background-color: #f7f7f7;">-->
          <!--            <td rowspan="4" style="font-size: 17px;font-weight:bold;color: black">Referrals</td>-->
          <!--            <td></td>-->
          <!--            <td></td>-->
          <!--            <td></td>-->
          <!--            <td></td>-->
          <!--          </tr>-->
          <!--          </thead>-->
          <!--          <tbody>-->

          <!--          <tr>-->
          <!--            <th>ID<div style="display: inline-block;position: absolute;top:45px;">-->
          <!--              <span-->
          <!--                class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
          <!--              </div>-->
          <!--            </th>-->
          <!--            <th>Resident<div style="display: inline-block;position: absolute;top: 45px;">-->
          <!--              <span-->
          <!--                class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
          <!--              </div>-->
          <!--            </th>-->
          <!--            <th>Help Type<div style="display: inline-block;position: absolute;top: 45px;">-->
          <!--              <span-->
          <!--                class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
          <!--              </div>-->
          <!--            </th>-->
          <!--            <th>Organisation<div style="display: inline-block;position: absolute;top: 45px;">-->
          <!--              <span-->
          <!--                class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
          <!--              </div>-->
          <!--            </th>-->
          <!--            <th>Completed<div style="display: inline-block;position: absolute;top: 45px;">-->
          <!--              <span-->
          <!--                class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
          <!--              </div>-->
          <!--            </th>-->
          <!--          </tr>-->
          <!--          &lt;!&ndash; 用索引值除以 2 取余 &ndash;&gt;-->
          <!--          <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">-->
          <!--            <td style="color:  black;">{{item.id}}</td>-->
          <!--            <td style="color:  black;">{{item.resident}}</td>-->
          <!--            <td style="color:  black;">{{item.help_type}}</td>-->
          <!--            <td style="color:  black;">{{item.Organisation}}</td>-->
          <!--            <td style="color:  black;">{{item.Completed}}</td>-->
          <!--          </tr>-->
          <!--          </tbody>-->
          <!--        </table>-->
          <div class="container-table">
            <table class="referral_table">
              <thead style="background-color: rgba(247, 247, 247, 1)">

              <tr style="font-size: 1rem;">
                <td rowspan="4" style="font-size: 1rem;font-weight:bold;">Referrals</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              </thead>
              <tbody>
              <tr style="background-color: rgba(223, 226, 230, 1); height: 1.5rem;">
                <th class="sortable">ID<div style="display: inline-block;position: absolute;;"><span ></span><br /><span  ></span></div></th>
                <th class="sortable">Referral Type<div style="display: inline-block;position: absolute;;"><span ></span><br /><span  ></span></div></th>
                <th class="sortable">Resident<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
                <th class="sortable">Created<div style="display: inline-block;position: absolute;"><span></span><br /><span  ></span></div></th>
                <th class="sortable">Status<div style="display: inline-block;position: absolute;"><span></span><br /><span  ></span></div></th>
                <th class="sortable">Organisation<div style="display: inline-block;position: absolute;"><span></span><br /><span  ></span></div></th>
                <th class="sortable">Completed<div style="display: inline-block;position: absolute;"><span></span><br /><span  ></span></div></th>
              </tr>

              <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">
                <td>{{item.id}}</td>
                <td>{{item.type}}</td>
                <td>{{item.resident}}</td>
                <td>{{item.created}}</td>
                <td>{{item.status}}</td>
                <td>{{item.organisation}}</td>
                <td>{{item.completed}}</td>
              </tr>
              </tbody>
            </table>
          </div>

          <div>
            <FilterComponent class="filter"></FilterComponent>
          </div>

        </div>


<!--      <div>-->
<!--        <FilterComponent></FilterComponent>-->
<!--      </div>-->

    </div>
  </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      toggle: false,
      list: [
        {id:'1',type:'Dog Walking', resident:'John',created:'Fri, Feb 3, 2023 - 10:15am',status:'Pending',organisation:'Fliwood Food Centre',completed:'Mon, Feb 6, 2023 - 09:15am'},
        {id:'9',type:'Food Bank', resident:'Liu',created:'Mon, Jan 15, 2023 - 10:15am',status:'Pending',organisation:'Surgery',completed:'Mon, Feb 6, 2023 - 09:15am'},
        {id:'11',type:'Shopping', resident:'Bob',created:'Mon, Jan 8, 2023 - 10:15am',status:'Pending',organisation:'Fliwood Food Centre',completed:'Mon, Jan 15, 2023 - 10:15am'},
        {id:'27',type:'Prescription', resident:'Ally',created:'Sun, Feb19 , 2023 - 10:15am',status:'Pending',organisation:'Fliwood Food Centre',completed:'Sun, Feb19 , 2023 - 10:15am'},
        {id:'3',type:'Volunteer Assigned', resident:'Bill',created:'Sun, Feb12 , 2023 - 10:15am',status:'Pending',organisation:'Surgery',completed:'Sun, Feb12 , 2023 - 10:15am'},
        {id:'15',type:'Volunteer Assigned', resident:'Alice',created:'Wed, Aug 11, 2023 - 5:30pm',status:'Pending',organisation:'Surgery'},
        {id:'17',type:'Dog Walking', resident:'Sid',created:'Mon, Jan 1, 2023 - 10:15am',status:'Pending',organisation:'Fliwood Food Centre'},
      ],
      sortOrder:'',
    }
  },
  props: {
    containerSize: {
      type: Number,
      required: true
    },
    left: {
      type: Number,
      required: false
    },
    top: {
      type: Number,
      required: false
    }
  },
  created() {
    this.tableData = this.$store.state.tableData
  },
  components: {
    FilterComponent: require('./filter component/FilterComponent.vue').default
  },
  methods: {
    toggleHide() {
      this.toggle = !this.toggle;
    },
    getReferrals: async function () {
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
        url: "http://localhost:8000/" + "api/referrals/",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken)
        },
        method: "GET",
        type: "GET",
        contentType: 'application/json',
        success: () => {
          //this.$emit('removed-action', response)
          console.log("success")
        },
        error: (err) => {
          console.error(JSON.stringify(err))
        }
      }).catch((err) => {
        console.err(JSON.stringify(err))
      })
      console.log(JSON.stringify(json))
      return json;
    },
    getCookie: function (name) {
      let cookieValue = null;
      if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    },
  },
  mounted(){
    this.getReferrals().then((response) => {
      this.list = response.results.map((result) => {
        return {
          id: result.id,
          type: result.referral_type,
          resident: result.resident,
          created: result.created_datetime,
          status: result.referral_status,
          organisation: result.referral_organisation,
          completed: result.completed_date
        }
      })
    })
  },
}
</script>

<style>
.container-table{
  position: absolute;
  top: 150px;
  z-index: -1;
}

.referral_table {
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 50px;
  font-size: 12px;
  width: 80%;
  margin-left: 40px;
  background-color: #f8f8f8;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
@media (max-width: 900px) {
  .referral_table{
    width: 100%;
    margin-left: 0px;
  }
}

.referral_table th,td{
  border: none;
}

.referral_table th {
  background-color: rgba(234, 236, 239, 1);
  color: black;
  font-weight: bold;
  text-align: left;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.referral_table th:hover {
  background-color: #354a63;
}

.referral_table th.sortable:after {
  content: "\25B2";
  font-size: 12px;
  margin-left: 5px;
}

.referral_table th.sortable:active:after {
  content: "\25BC";
  font-size: 12px;
  margin-left: 5px;
}

.referral_table td {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #ddd;
  color: #333;
}

.referral_table tr:hover {
  background-color: #e6e6e6;
}

.filter{
  z-index: -1;
  background: #ebecf0;
  color: rgba(31, 31, 31, 0.7);
  border-radius: 0.5rem;
  border: 0.1rem solid #f7f7f7;
  width: 10rem;
  right: 10px;
  top: 150px;
}

/*.table-container {*/
/*    box-sizing: border-box;*/
/*    position: absolute;*/
/*    width: 1229px;*/
/*    height: 854px;*/
/*    left: 20px;*/
/*    top: 194px;*/
/*    background: rgb(212, 215, 211);*/
/*    border: 1px solid #DFDFDF;*/
/*    border-radius: 5px;*/
/*  }*/

/*.table {*/
/*  border: 1px solid #f5f5f5;*/
/*  border-radius: 5px;*/
/*  margin: 0 auto;*/
/*  border-spacing: 0px;*/
/*  width: 100%;*/
/*  max-width: 100%;*/
/*  margin: 0;*/
/*}*/

/*.table1 {*/
/*  background: #ebecf0;*/
/*  color: rgba(31, 31, 31, 0.7);*/
/*  border-radius: 5px;*/
/*  margin: 0 auto;*/
/*  border: 1px solid #f7f7f7;*/
/*  width: 200px;*/
/*  position: absolute;*/
/*  right: -220px;*/
/*  top: 0;*/
/*}*/

/*select {*/

/*  !* styling *!*/
/*  background-color: white;*/
/*  border: black;*/
/*  border-radius: 4px;*/
/*  display: inline-block;*/
/*  font: inherit;*/
/*  line-height: 1.5em;*/
/*  padding: 0.5em 0.1em 0.5em 0.5em;*/
/*}*/


/*th {*/
/*  background-color: #ebecf0;*/
/*  color: rgba(31, 31, 31, 0.7);*/
/*  cursor: pointer;*/
/*  text-align: left;*/
/*}*/


/*td {*/
/*  font-size: 13px;*/
/*  height: 30px;*/
/*}*/

/*th,*/
/*td {*/
/*  min-width: 90px;*/
/*  padding: 10px 10px;*/

/*}*/

/*!* 定义余数为 0 的行颜色 *!*/

/*.tr-color-0 {*/
/*  background: #f2f2f2;*/
/*}*/

/*!* 定义余数为 1 的行颜色 *!*/

/*.tr-color-1 {*/
/*  background: #fff;*/
/*}*/

/*.arrow {*/
/*  display: inline-block;*/
/*  vertical-align: middle;*/
/*  width: 0;*/
/*  height: 0;*/
/*  margin-left: 5px;*/
/*  opacity: 0.66;*/
/*}*/

/*.arrow.asc {*/
/*  border-left: 4px solid transparent;*/
/*  border-right: 4px solid transparent;*/
/*  border-bottom: 4px solid #4c4b50;*/
/*}*/

/*.arrow.dsc {*/
/*  border-left: 4px solid transparent;*/
/*  border-right: 4px solid transparent;*/
/*  border-top: 4px solid #4c4b50;*/
/*}*/
</style>