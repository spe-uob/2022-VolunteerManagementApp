<template>
  <div id="app">
    <!-- <button @click="postAction" style="color: blue;">postAction</button>
    <button @click="postResident">postResident</button>
    <button @click="updateAction">updateAction</button>
    <button @click="deleteResident">deleteResident</button> -->
   <!-- <router-link to="/one_one">one_one</router-link>-->
    <head>
      <title>Coordinator Dashboard</title>
    </head>
    <header class="nav">
      <nav>      
        <navbar/>
      </nav>
      <header class="title">
        Coordinator
      </header>
      <myButton v-for="(item, index) in buttons" :key="index" :label="item.label" :left="item.left" @click.native="selectButton(index)" :selected="item.selected"/>
    </header>
  </div>
</template>

<script>
import $ from 'jquery';
import myButton from "@/components/myButton";
import navbar from './components/navbar.vue';

export default {
  name: 'App',
  data(){
    return{
      buttons: [
        { label: 'All Activity', left: '373px', selected: false },
        { label: 'Actions', left: '526px',selected: false },
        { label: 'Referrals', left: '679px',selected: false },
      ]
    }
  },
  components: {
    myButton,
    navbar
  },
  methods: {
    selectButton(index) {
      this.buttons.forEach((item, i) => {
        item.selected = (i === index)
      })
    },
    postAction: async function () {
      //TODO: build this obj with a form
      let action = {
          "id": 7,
          "external_action_id": null,
          "added_by": 2,
          "coordinator": 2,
          "call_datetime": "2022-11-27T12:54:16Z",
          "call_duration": null,
          "resident": 1,
          "requested_datetime": "2024-11-27T18:00:00Z",
          "assigned_volunteers": [],
          "action_status": "7",
          "action_priority": "1",
          "public_description": "",
          "private_description": "",
          "help_type": 5,
          "volunteer_made_contact_on": null,
          "assigned_date": "2022-11-27T13:26:15.887669Z",
          "completed_date": null,
          "action_uuid": "37b9d03a-a7a9-11ed-afa1-0242ac120002",
          "time_taken": null,
          "minimum_volunteers": 1,
          "maximum_volunteers": 1,
          "potential_volunteer_ids": [],
          "actionfeedback_set": [],
          "requirements": [
              1
          ],
          "interested_volunteers": []
      }
        const csrftoken = this.getCookie('csrftoken')
        const json = await $.ajax({
            url: "http://localhost:8000/" + "api/actions/",
            beforeSend: function(xhr) {
              xhr.setRequestHeader('X-CSRFToken', csrftoken)
            },
            method: "POST",
            type:"POST",
            contentType:'application/json',
            data :JSON.stringify(action),
            success: () => {
                //this.$emit('removed-action', response)
                console.log("success")
            },
            error: (err) => {
                console.error(JSON.stringify(err))
            }
            }).catch((err) => { console.err(JSON.stringify(err))})
            console.log(JSON.stringify(json))
        },
    postResident: async function(){
      let resident = {
          "id": 3,
          "first_name": "Lin",
          "last_name": "Bench",
          "phone": "111111111111111",
          "phone_secondary": null,
          "email": "bencharefismael@protonmail.com",
          "notes": "",
          "address_line_1": "foo",
          "address_line_2": "bar",
          "address_line_3": null,
          "postcode": "W",
          "internet_access": false,
          "smart_device": false,
          "confident_online_shopping": false,
          "confident_online_comms": false,
          "shielded": false,
          "time_received": null,
          "data_consent_date": "2023-02-08",
          "ward": 1
      }
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
            url: "http://localhost:8000/" + "api/residents/",
            beforeSend: function(xhr) {
              xhr.setRequestHeader('X-CSRFToken', csrftoken)
            },
            method: "POST",
            type:"POST",
            contentType:'application/json',
            data :JSON.stringify(resident),
            success: () => {
                //this.$emit('removed-action', response)
                console.log("success")
            },
            error: (err) => {
                console.error(JSON.stringify(err))
            }
            }).catch((err) => { console.err(JSON.stringify(err))})
            console.log(JSON.stringify(json))
        },
    deleteResident: async function(){
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
            url: "http://localhost:8000/" + "api/residents/37/",
            beforeSend: function(xhr) {
              xhr.setRequestHeader('X-CSRFToken', csrftoken)
            },
            method: "DELETE",
            type:"DELETE",
            contentType:'application/json',
            success: () => {
                //this.$emit('removed-action', response)
                console.log("success")
            },
            error: (err) => {
                console.error(JSON.stringify(err))
            }
            }).catch((err) => { console.err(JSON.stringify(err))})
            console.log(JSON.stringify(json))
    },
    getAction: async function(action_id) {
      const csrftoken = this.getCookie('csrftoken')
        const json = await $.ajax({
            url: "http://localhost:8000/" + "api/actions/6/",
            beforeSend: function(xhr) {
              xhr.setRequestHeader('X-CSRFToken', csrftoken)
            },
            method: "GET",
            type:"GET",
            contentType:'application/json',
            data:JSON.stringify({'action_status':'7'}),
            success: () => {
                //this.$emit('removed-action', response)
                console.log("success")
            },
            error: (err) => {
                console.error(JSON.stringify(err))
            }
            }).catch((err) => { console.err(JSON.stringify(err))})
            console.log(JSON.stringify(json))
    },
    updateAction: async function(){
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
            url: "http://localhost:8000/" + "api/actions/7/",
            beforeSend: function(xhr) {
              xhr.setRequestHeader('X-CSRFToken', csrftoken)
            },
            method: "PATCH",
            type:"PATCH",
            contentType:'application/json',
            data:JSON.stringify({"action_priority": "2"}),
            success: () => {
                //this.$emit('removed-action', response)
                console.log("success")
            },
            error: (err) => {
                console.error(JSON.stringify(err))
            }
            }).catch((err) => { console.err(JSON.stringify(err))})
            console.log(JSON.stringify(json))
    },
    getCookie: function(name) {
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
  created() {

  }
}
</script>

<style>
  .left-aligned-component {
    float: top;
    width: 20%;
  }
  .title {
        position: absolute;
        width: 169px;
        height: 36px;
        left: 1221px;
        top: 21px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 36px;
        display: flex;
        align-items: center;

        color: #FFFFFF;
    }
</style>
