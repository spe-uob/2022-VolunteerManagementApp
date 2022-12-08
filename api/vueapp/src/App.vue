<template>
  <div id="app"><!--<router-view></router-view>-->
    <aHeader/>
    <my-button></my-button>
    <button :onclick="postAction()">button</button>
  </div>
</template>

<script>
import $ from 'jquery';
import myButton from "@/components/myButton";
import aHeader from './components/aHeader.vue';

export default {
  name: 'App',
  data(){
    return{}
  },
  components: {
    myButton,
    aHeader
  },
  methods: {
    postAction: async function () {
      //TODO: build this obj with a form
      let action = {
          "id": 6,
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
          "action_uuid": "5e57f148-758d-11ed-a1eb-0242ac120002",
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
      //{
        //     "resident": 1,
        //     "volunteers_needed": 1,
        //     "requested_datetime": "2021-04-21 06:05",
        //     "interested_volunteers": [],
        //     "assigned_voluneteers": [],
        //     "action_status": "1",
        //     "action_priority": "2",
        //     "public_description":"",
        //     "private_description":"",
        //     "help_type":2,
        //     "created_datetime":"",
        //     "total_time_taken":""
        // }
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
    getAction: async function(action_id) {
      const csrftoken = this.getCookie('csrftoken')
        const json = await $.ajax({
            url: "http://localhost:8000/" + "api/actions/" + action_id + "/",
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

</style>
