<template>
  <div class="grid-container1">

    <div class="organisation_contain"><table class="Organisation_table">
      <thead style="background-color: rgba(247, 247, 247, 1)">
      <tr style="font-size: 1rem;">
        <td colspan="2" style=" font-size: 1rem;font-weight:bold;">Organisations</td>
        <td></td>
        <td></td>
        <td style="text-align:right">
          <button  style=" cursor: pointer;" @click="showNewForm()">Add</button>
        </td>
      </tr>
      </thead>

      <tbody>

      <tr style="background-color: rgba(223, 226, 230, 1); height: 1.5rem;">
        <th @click="sortTable('Name')">Name<span class="sortable1" :class="{ active: activeButton === 0 }"></span></th>
        <th @click="sortTable('PhoneNumber')">Phone Number<span class="sortable1" :class="{ active: activeButton === 1 }"></span></th>
        <th @click="sortTable('address')">Address<span class="sortable1" :class="{ active: activeButton === 2 }"></span></th>
        <th @click="sortTable('MainContact')">Main Contact<span class="sortable1" :class="{ active: activeButton === 3 }"></span></th>
        <th @click="sortTable('Email')">Email<span class="sortable1" :class="{ active: activeButton === 4 }"></span></th>
      </tr>

      <tr v-for="(item, index) in filteredOrganisation" :class="'tr-color-' + index % 2" :key="index" @click="goUpdate(item)">
        <td class="table_hover">{{item.Name}}</td>
        <td class="table_hover">{{item.PhoneNumber}}</td>
        <td class="table_hover">{{item.address}}</td>
        <td class="table_hover">{{item.MainContact}}</td>
        <td class="table_hover">{{item.Email}}</td>
      </tr>

      </tbody>
    </table></div>

    <div class="FilterComponent_container1">
      <div class="filter-container">
        <div class="f-title">Search</div>
        <div>
          <div class="mi1">
            <input type="text" v-model="search"/>
          </div>
        </div>
      </div>
    </div>

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
        {
          Name: 'Noel',
          PhoneNumber: '01179123456',
          address:'A',
          MainContact: 'noel.wester@gmail.com',
          Email:'Carol Lamentably',
        },
        {
          Name: 'Bill',
          PhoneNumber: '01179123456',
          address:'A',
          MainContact: 'noel.wester@gmail.com',
          Email:'Carol Lamentably',
        },
        {
          Name: 'Amy',
          PhoneNumber: '345456',
          address:'A',
          MainContact: 'noel.wester@gmail.com',
          Email:'Carol Lamentably',
        },
        {
          Name: "LIU",
          PhoneNumber: '01142332456',
          address:'A',
          MainContact: 'noel.wester@gmail.com',
          Email:'Carol Lamentably',
        },
        {
          Name: 'WANG',
          PhoneNumber: '01123123',
          address:'A',
          MainContact: 'noel.wester@gmail.com',
          Email:'Carol Lamentably',
        },

      ],
      search:"",
      sortOrder:'',
      activeButton: -1,
    }
  },
  computed: {
    filteredOrganisation() {
      return this.list.filter(organisation => {
        // return resident.name.toLowerCase().includes(this.search.toLowerCase());
        return (
            organisation.Name.toLowerCase().includes(this.search.toLowerCase())
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
    toggleActive(index) {
      if (this.activeButton === index) {
        this.activeButton = -1;
      } else {
        this.activeButton = index;
      }
    },
    sortTable(sortKey) {
      if (this.sortOrder === sortKey) {
        this.list.reverse();
      } else {
        if (sortKey === 'Name') {
          this.toggleActive(0);
          this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        } else if (sortKey === 'PhoneNumber') {
          this.toggleActive(1);
          this.list.sort((a, b) => a[sortKey] - b[sortKey]);
        } else if (sortKey === 'address') {
          this.toggleActive(2);
          this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        } else if (sortKey === 'MainContact') {
          this.toggleActive(3);
          this.list.sort((a, b) => a[sortKey] - b[sortKey]);
        } else if (sortKey === 'Email') {
          this.toggleActive(4);
          this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        } else if (sortKey === 'postcode') {
          this.toggleActive(4);
          this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
          this.sortOrder = sortKey;
        }
      }
    },
    showNewForm(){
      this.$router.push("/createOrganisation");
       this.newFormFlag = true;
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
          PhoneNumber: result.phone,
          address: result.address_line_1,
          MainContact: result.contact_name,
          Email: result.email,
          postcode:result.postcode,
        }
      })
    })
  },
}
</script>

<style scoped lang="scss">

.organisation_contain{
  grid-column-start: 1;
  grid-column-end: col4-start;
  grid-row-start: 1;
  grid-row-end: third-line;
}


.FilterComponent_container1{
  grid-area: 1 / col4-start / third-line / 6 ;
}


.Organisation_table{
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 50px;
  font-size: 12px;
  width: 100%;
  margin-left: 10px;
  background-color: #f8f8f8;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

@media (max-width: 900px) {
  .Organisation_table{
    width: 100%;
    margin-left: 0px;
  }
}

th,td{
  border: none;
}

th {
  background-color: rgba(234, 236, 239, 1);
  color: black;
  font-weight: bold;
  text-align: left;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

th:hover{
  background-color: #dddddd;
}


td {
  padding: 0.75rem 2rem;
  border-bottom: 1px solid #ddd;
  color: #333;
}


.tr-color-0 {
  background: #f2f2f2;
}

.tr-color-1 {
  background: #fff;
}

.filter-container {
  font-weight: bold;
  background: #ebecf0;
  color: rgba(31, 31, 31, 0.7);
  border-radius: 0.5rem;
  border: 0.1rem solid #f7f7f7;
  width: 12rem;
}


.f-title{
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  padding: 6px;
  color: black;
  background-color: rgba(247, 247, 247, 1)
}


.mi1 {
  position: relative;
  left: 2.5px;
  top: 3px;
  width:165px;
  height: 35px;
}



@media (max-width: 1350px) {
  .FilterComponent_container1 {
    display: none;
  }
  .mi1 input{
    height: 10px;
  }
  .mi1 input[type="text"] {
    width: 100%;
    box-sizing: border-box;
  }

  .mi1 {
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 1;
  }
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

