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
  import addactionform from './add form/addactionform.vue';
  import addreferralform from './add form/addreferralform.vue'
  
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
        helpTypes: [
                { id: 1, name: "Pending volunteer interest" },
                { id: 2, name: "Volunteer interest" },
                { id: 3, name: "Volunteer assigned" },
                { id: 4, name: "Ongoing" },
                { id: 5, name: "Completed" },
                { id: 6, name: "Couldn't complete" },
                { id: 7, name: "No longer needed" },
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
      baseURL: function(){
          return window.location.origin
        },
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
                url: this.baseURL() + '/api/actions/',
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
                url: this.baseURL() + '/api/referrals/',
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
      },
      getVolunteerByID: async function(id){
            const csrftoken = this.getCookie('csrftoken')
            const json = await $.ajax({
            url: this.baseURL() + '/api/volunteers/',
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
            console.log('GETRESIDENTBYIDCALL RETURN VALUE: ' + json.results.find(obj => obj.id === id).first_name)
            return json.results.find(obj => obj.id === id).first_name;
        },
        getHelpTypeByID: async function(id){
            const csrftoken = this.getCookie('csrftoken')
            const json = await $.ajax({
                url: this.baseURL() + '/api/helptypes/',
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
            console.log('GETRESIDENTBYIDCALL RETURN VALUE: ' + json.results.find(obj => obj.id === id).name)
            return json.results.find(obj => obj.id === id).name;
        },
        formatDate(dateString) {
            const date = new Date(dateString);
            const year = date.getFullYear();
            const month = date.toLocaleString('default', { month: 'long' });
            const day = date.getDate();
            return `${month} ${day}, ${year}`;
    },
    },

    //TODO: need to modify to get volunteerby id.
    async mounted() {
    let response = await this.getReferrals();
    this.referrals = await Promise.all(response.results.map(async (result) => {
          return {
            //change this to volunteer, from all referrals filter the ones with the relevanted inputted volunteer
            resident: result.resident,
            type: result.referral_type,
          }
        }))
    response = await this.getActions()
    this.actions = await Promise.all(response.results.map(async (result) => {
          return {
            resident: await this.getVolunteerByID(result.resident),
            type: await this.getHelpTypeByID(result.help_type),
            date: await this.formatDate(result.requested_datetime),
          }
        }))
        console.log("this.actions: " + JSON.stringify(this.actions))
        console.log("filtered actions: " + this.filteredActions)
    }
  }
  </script>
  
  <style>
  
  .title {
    font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            "Helvetica Neue",
            Arial,
            "Noto Sans",
            "Liberation Sans",
            sans-serif,
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
            "Noto Color Emoji";
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
    font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            "Helvetica Neue",
            Arial,
            "Noto Sans",
            "Liberation Sans",
            sans-serif,
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
            "Noto Color Emoji";
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
    font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            "Helvetica Neue",
            Arial,
            "Noto Sans",
            "Liberation Sans",
            sans-serif,
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
            "Noto Color Emoji";
    font-size: 20px;
  }
  .address {
    color: #555;
    font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            "Helvetica Neue",
            Arial,
            "Noto Sans",
            "Liberation Sans",
            sans-serif,
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
            "Noto Color Emoji";
    font-size: 16px;
  }
  
  .addbtn {
    font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            "Helvetica Neue",
            Arial,
            "Noto Sans",
            "Liberation Sans",
            sans-serif,
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
            "Noto Color Emoji";
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