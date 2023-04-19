<template>
  <div>
  <div>

    <table class="Organisation_table">
      <thead style="background-color: rgba(247, 247, 247, 1)">
      <tr style="font-size: 1rem;">
        <td colspan="2" style=" font-size: 1rem;font-weight:bold;">Organisations</td>
        <td></td>
        <td></td>
        <td style="text-align:right">
          <button  style="cursor: pointer;" @click="showNewForm()">Add</button>
        </td>
      </tr>
      </thead>

      <tbody>

      <tr style="background-color: rgba(223, 226, 230, 1); height: 1.5rem;">
        <th class="sortable" >Name<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable">Phone Number<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable">Address<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable">Main Contact<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
        <th class="sortable">Email<div style="display: inline-block;position: absolute;"><span ></span><br /><span  ></span></div></th>
      </tr>

      <tr v-for="(item, index) in filteredOrganisation" :class="'tr-color-' + index % 2" :key="index">
        <td style="color:  black;" @click="goUpdate(item)">{{item.name}}</td>
        <td style="color:  black;">{{item.phone}}</td>
        <td style="color:  black;">{{item.address}}</td>
        <td style="color:  black;">{{item.contact}}</td>
        <td style="color:  black;">{{item.email}}</td>
      </tr>

      </tbody>
    </table>
    <!--      <table class="table">-->
    <!--        <thead>-->
    <!--        <tr style="font-size: 17px;background-color: #f7f7f7;">-->
    <!--          <td rowspan="4" style="font-size: 17px;font-weight:bold;color: black">Organisations</td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->

    <!--        </tr>-->
    <!--        </thead>-->
    <!--        <tbody>-->

    <!--        <tr>-->
    <!--          <th>Name<div style="display: inline-block;position: absolute;top:45px;"><span-->
    <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
    <!--          </th>-->
    <!--          <th>Phone Number<div style="display: inline-block;position: absolute;top: 45px;"><span-->
    <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
    <!--          </th>-->
    <!--          <th>Address<div style="display: inline-block;position: absolute;top: 45px;"><span-->
    <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
    <!--          </th>-->
    <!--          <th>Main Contact<div style="display: inline-block;position: absolute;top: 45px;"><span-->
    <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
    <!--          </th>-->
    <!--          <th>Email<div style="display: inline-block;position: absolute;top: 45px;"><span-->
    <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span></div>-->
    <!--          </th>-->

    <!--        </tr>-->
    <!--        &lt;!&ndash; 用索引值除以 2 取余 &ndash;&gt;-->
    <!--        <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">-->
    <!--          <td style="color:  black;">{{item.Name}}</td>-->
    <!--          <td style="color:  black;">{{item.PhoneNumber}}</td>-->
    <!--          <td style="color:  black;">{{item.Address}}</td>-->
    <!--          <td style="color:  black;">{{item.MainContact}}</td>-->
    <!--          <td style="color:  black;">{{item.Email}}</td>-->
    <!--        </tr>-->
    <!--        </tbody>-->
    <!--      </table>-->
    <!-- <div class="search_wrap" :style="searchWrapStyle">
      <header class="searchBox">
        <input
            type="text"
            class="input"
            :placeholder="placeholder"
            v-model="searchValue"
            @keyup.enter="handleSearch"
        />
      </header>
    </div> -->
<!--    <div>-->
<!--      <FilterComponent></FilterComponent>-->
<!--    </div>-->
    <div>
      <div class="filter-container">
        <div class="f-title">Search</div>
        <!--    <div class="mi">-->
        <!--          <input type="search" name="" id="" placeholder="">-->
        <!--          <button type="button">Search</button>-->
        <!--        </div>-->
        <div>
          <div class="mi">
            <input type="text" v-model="search"/>
            <!--          <button type="button">Search</button>-->
          </div>
        </div>
      </div>
    </div>
  </div>
<!--    <Form v-if="newFormFlag" @back="closeNewForm()"></Form>-->
  </div>
</template>

<script>
import $ from 'jquery';
// import Form from './NewOrganisationForm'

export default {

  data() {
    return {
      // newFormFlag: false,
      toggle: false,
      list: [
        // {
        //   name: 'Noel',
        //   phone: '01179123456',
        //   address:'A',
        //   email: 'noel.wester@gmail.com',
        //   contact:'Carol Lamentably',
        // },
        // {
        //   name: 'Noel',
        //   phone: '355667564532',
        //   address:'A',
        //   email: 'noel.wes@gmail.com',
        //   contact:'Carol Lamentably',
        // },
        // {
        //   name: 'Noe',
        //   phone: '465768778787',
        //   address:'A',
        //   email: 'noe.wester@gmail.com',
        //   contact:'Carol Lamentably',
        // },
        // {
        //   name: 'Noel',
        //   phone: '01179123456',
        //   address:'A',
        //   email: 'noel.wester@gmail.com',
        //   contact:'Carol Lamentably',
        // },
        // {
        //   name: 'Nel',
        //   phone: '0456667665',
        //   address:'A',
        //   email: 'nel.weser@gmail.com',
        //   contact:'Carol Lamentably',
        // }
      ],
      search:"",
      sortOrder:'',
    }
  },
  computed: {
    filteredOrganisation() {
      return this.list.filter(organisation => {
        // return resident.name.toLowerCase().includes(this.search.toLowerCase());
        return (
            organisation.name.toLowerCase().includes(this.search.toLowerCase()) ||
            organisation.phone.toLowerCase().includes(this.search.toLowerCase()) ||
            organisation.address.toLowerCase().includes(this.search.toLowerCase()) ||
            organisation.email.toLowerCase().includes(this.search.toLowerCase()) ||
            organisation.contact.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
  },
  // components: {
  //   FilterComponent: require('./search_box component/OrganisationSearch.vue').default,
    // Form:Form
  // },
  created() {
    this.tableData = this.$store.state.tableData
  },
  methods: {
    // closeNewForm(){
    //   this.newFormFlag = false;
    // },
    showNewForm(){
      this.$router.push("/createOrganisation");
      // this.newFormFlag = true;
    },
    goUpdate(data){
      console.log(data);
      localStorage.setItem("org",JSON.stringify(data));
      this.$router.push("/updateOrganisation");

    },
    toggleHide() {
      this.toggle = !this.toggle;
    },
    baseURL: function(){
        return window.location.origin
      },
    getOrganisations: async function () {
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
        url: this.baseURL() + "/api/organisations/",
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
  mounted() {
    this.getOrganisations().then((response) => {
      this.list = response.results.map((result) => {
        return {
          Name: result.name,
          PhoneNumber: result.phone_number,
          Address: result.address_line_1,
          MainContact: result.contact_name,
          Email: result.email
        }
      })
    })
  },
}
</script>

<style scoped lang="scss">
.Organisation_table {
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 50px;
  font-size: 12px;
  min-width: 80%;
  margin-left: 40px;
  background-color: #f8f8f8;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

th,td{
  border: none;
}

.Organisation_table th {
  background-color: rgba(234, 236, 239, 1);
  color: black;
  font-weight: bold;
  text-align: left;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

th:hover {
  background-color: #dddddd;
}

th.sortable:hover {
  background-color: #dddddd;
}

th.sortable:after {
  content: "\25B2";
  font-size: 12px;
  margin-left: 5px;
}

th.sortable.asc:after {
  content: "\25BC";
  font-size: 12px;
  margin-left: 5px;
}

td {
  font-size: 12px;
  height: 20px;
  padding: 0.75rem 2rem;
  border-bottom: 1px solid #ddd;
  color: #333;
}

tr:hover {
  background-color: #e6e6e6;
}

.tr-color-0 {
  background: #f2f2f2;
}

.tr-color-1 {
  background: #fff;
}
.filter-container {
  font-weight: bold;
  margin-top: 20px;
  background: #ebecf0;
  color: rgba(31, 31, 31, 0.7);
  border-radius: 0.5rem;
  border: 0.1rem solid #f7f7f7;
  width: 10rem;
  position: absolute;
  right: 0.5%;
  top: 23%;
}

.f-title{
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  padding: 6px;
  color: black;
  background-color: rgba(247, 247, 247, 1)
}


@media (max-width: 1180px ){
  .filter-container{
    display: none;
  }
}

.mi {
  position: relative;
  left: 2.5px;
  top: 3px;
  width:150px;
  height: 30px;
  border: 2px solid rgba(223, 226, 230, 1);
}

.mi input {
  float: left;
  width: 130px;
  height: 33px;
  padding: 0 10px;
  font-size: 14px;
  line-height: 48px;
  border: 1px solid #e0e0e0;
  outline: none;
  transition: all 0.3s;
}


/*.container1 {*/
/*  position: relative;*/
/*  width: 70%;*/
/*  margin: 0 auto;*/
/*}*/

/*.table-container {*/
/*    justify-content: flex-start;*/
/*    align-items: flex-start;*/
/*    vertical-align: top;*/
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
/* margin: 0 auto;*/
/*  border-spacing: 0px;*/
/*  width: 100%;*/
/*  max-width: 100%;*/
/*  margin: 0;*/
/*}*/

/*.table1 {*/
/*   background: #ebecf0;*/
/*   color: rgba(31, 31, 31, 0.7);*/
/*   border-radius: 5px;*/
/*  margin: 0 auto;*/
/*   border: 1px solid #f7f7f7;*/
/*   width: 200px;*/
/*  position: absolute;*/
/*  right: -220px;*/
/*  top: 0;*/
/*  !* position: fixed;*/
/*  left: 1200px;*/
/*  bottom: 745px; *!*/
/*}*/

/*select{*/
/*                   background-color: white;*/
/*                   border: black;*/
/*                   border-radius: 4px;*/
/*                   display: inline-block;*/
/*                   font: inherit;*/
/*                   line-height: 1.5em;*/
/*                   padding: 0.5em 0.1em 0.5em 0.5em;*/
/*                 }*/

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

