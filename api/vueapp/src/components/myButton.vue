<template>
    <button>aButton</button>
</template> 

<script>
//import $ from 'jquery';
//import { response } from 'express';
    export default {
        name: 'myButton',
        //props: [action],
        components: {
        },
        
        data(){
            return {

            }
        },
        props: ['action', 'activeResident','title', 'requirements','help_types'],
        computed: {

        },
        methods: {
        // addNewAction: function () {
        //     let action = {
        //         "resident": 1,
        //         "volunteers_needed": 1,
        //         "requested_datetime": "2021-04-21 06:05",
        //         "interested_volunteers": [],
        //         "assigned_voluneteers": [],
        //         "action_status": "1",
        //         "action_priority": "2",
        //         "public_description":"",
        //         "private_description":"",
        //         "help_type":2,
        //         "created_datetime":"",
        //         "total_time_taken":""
        //     }
        //     const csrftoken = this.getCookie('csrftoken');
        //     $.ajax({
        //         url: "http://localhost:8000/" + "api/actions",
        //     beforeSend: function(xhr) {
        //         xhr.setRequestHeader('X-CSRFToken', csrftoken)
        //     },
        //     method: "POST",
        //     type:"POST",
        //     contentType:'application/json',
        //     data: action,
        //     success: (response) => {
        //         this.$emit('new-action', response)
        //     },
        //     error: (err) => {
        //         console.error(err)
        //     }
        //     })
        // },
    }, 
}
</script>

<style scoped>
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>