<template>
  <div>
    <div class="container-dum">
      <header :class="title">Actions</header>
      <div>

      </div>
      <ul class="action-list">
        <li class="action-item" v-for="action in filteredActions" :key="action.id">
          <a class="name">{{ action.type}}</a>
          <p class="address">{{ action.date}}</p>
        </li>
      </ul>
      <button class="addbtn" @click="openActionform">New Action</button>
    </div>

    <div class="container-dum">
      <header>Referrals</header>
      <ul class="action-list">
        <li class="action-item" v-for="action in filteredActions" :key="action.id">
          <a class="name">{{ action.type}}</a>
        </li>
      </ul>
      <button class="addbtn" @click="openReferralform">New Referral</button>
    </div>
    <div class="container-xyz">
      <addreferralform v-if="actionForm" :id="this.id"/>
      <addactionform v-if="referralForm" :id="this.id"></addactionform>
    </div>
  </div>

</template>


<script>
import $ from 'jquery';
import addactionform from './addactionform.vue';
import addreferralform from './addreferralform.vue'

export default {
  data() {
    return {
      actions: [
        {
          resident: 1,
          type: "dog walk",
          date: "today"
        },
        {
          resident: 1,
          type: "dog walk",
          date: "today"
        }
      ],
      referrals: [],
      actionForm: false,
      referralForm: false
    }
  },
  props: [],
  components: {
    addactionform,
    addreferralform
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    filteredActions() {
      return this.actions.filter(action => action.resident === parseInt(this.id));
    },
    filteredReferrals(){
      return this.referrals.filter(referral => referral.resident === parseInt(this.id))
    }
  },
  methods: {
    openActionform(){
      this.actionForm = false
      this.referralForm = true
    },
    openReferralform(){
      this.actionForm = true
      this.referralForm = false
    },
    getActions: async function () {
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
        url: `http://localhost:8000/api/actions/`,
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
      return json;
    },
    getReferrals: async function (){
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
        url: `http://localhost:8000/api/referrals/`,
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
    }
  },
  mounted() {
    console.log(this.id)
    this.getReferrals().then((response) => {
      this.referrals = response.results.map((result) => {
        return {
          resident: result.resident,
          type: result.referral_type,
        }
      })
    })
    this.getActions().then((response) => {
      console.log("response.results:" + + response.results)
      this.actions = response.results.map((result) => {
        return {
          resident: result.resident,
          type: result.help_type,
          date: result.requested_datetime
        }
      })
      console.log("this.actions: " + JSON.stringify(this.actions))
      console.log("filtered actions: " + this.filteredActions)
    })
  }
}
</script>

<style>

.title {
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
}
.container-dum {
  display: inline-block;
  margin-right: 20%;
}
.container-xyz {
  position: absolute;
  right: 5%;
  top: 10%;
  background-color: #fff;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.container-xyz h2 {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.container-xyz ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.container-xyz li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
}

.container-xyz li:last-child {
  border-bottom: none;
}
.box-container2 {
  background-color: purple;
  position: relative;
  top: 0px;
  left: -500px;
  width: 500px;
  height: 400px;
  margin: 0 auto;
}
.search-box {
  font-family: 'Times New Roman', Times, serif;
  width: 60%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 0;
  text-align: center;
}
.action-list {
  box-shadow: -5px -1px 10px rgb(123, 101, 101);
  background-color: transparent;
  width: 100%;
  list-style: none;
  padding: 0;
  text-align: center;
  margin-bottom: 10px;
}

.action-item {
  border: 1px solid #ddd;
  padding: 30px;
  box-sizing: border-box;
  width: 300px;
  height: 100px;
  text-align: left;
}

.name {
  color: #333;
  font-family:'Times New Roman', Times, serif;
  font-size: 20px;
}
.address {
  color: #555;
  font-family:'Times New Roman', Times, serif;
  font-size: 16px;
}

.addbtn {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #334756;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.addbtn:hover {
  background-color: #3e8e41;
}

.addbtn:active {
  background-color: #1e4420;
}

</style>