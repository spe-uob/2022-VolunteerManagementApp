<template>
   <div class="container">
        <div class="action-details-container">
            <div class="details-title">
                <header>Action Details</header>
            </div>
            <div class="action-details">
                <ul>
                        <div>Resident: {{ action.resident }}</div>
                        <div>Action Type: {{ action.help_type }}</div>
                        <div>Due Date: {{ action.Due }}</div>
                </ul>
            </div>

        </div>
        <div class="assigned-container">
            <div class="details-title">
                <header>Assigned</header>
            </div>
            <div class="assigned-details">
                <label for="selectedHelpType">Status:</label>
                <select v-model="selectedHelpType">
                <option v-for="helptype in helptypes" :key="helptype.id">{{ helptype.name }}</option>
                </select>

            </div>
        </div>
   </div>
</template>

<script>
import $ from "jquery";

export default {
    data() {
        return {
            action: {
                resident: "Ismael Bencharef",
                help_type: "Shopping",
                Due: "20th March 2032"
            },
            helptypes: [
                { id: 1, name: "Pending volunteer interest" },
                { id: 2, name: "Volunteer interest" },
                { id: 3, name: "Volunteer assigned" },
                { id: 4, name: "Ongoing" },
                { id: 5, name: "Completed" },
                { id: 6, name: "Couldn't complete" },
                { id: 7, name: "No longer needed" },
            ],
            selectedHelpType: null

        }
    },
    computed: {
    id() {
      return this.$route.params.id;
    },
    // filteredActions() {
    //   return this.actions.filter(action => action.id === parseInt(this.id));
    // },
  },
    methods: {
        getActions: async function () {
            const csrftoken = this.getCookie('csrftoken')
            const json = await $.ajax({
                url: this.baseURL() + `/api/actions/${this.id}`,
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
                },

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
        getResidentByID: async function(id){
            const csrftoken = this.getCookie('csrftoken')
            const json = await $.ajax({
            url: this.baseURL() + '/api/residents/',
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
        getStatusByID: function(id){
        return this.helpTypes[id - 1]
        },
        getPriorityByID: function(id){
        return this.priority[id - 1]
        }
    },
    async mounted(){
    let result = await this.getAction();
    // console.log("GETACTIONS RESPONSE: " + JSON.stringify(response));
    this.action = {
      id: result.id,
      resident: await this.getResidentByID(result.resident),
      help_type: await this.getHelpTypeByID(result.help_type),
      Due: this.formatDate(result.requested_datetime),
      assigned: result.assigned_volunteers,
      status: this.getStatusByID(result.action_status),
      priority: this.getPriorityByID(result.action_priority)
    };    
  }
}
</script>

<style scoped>
 .container {
  display: inline-block;
  background-color: green;
  width: 100%;
  height: 90%;
 }
 .action-details-container {
    background-color: blue;
    width: 45%;
    float: left;
    height: 50%;
    box-shadow: -5px -1px 10px rgba(62, 62, 62, 0.134);
    padding: 10px;
 }
 .details-title {
    border: 1px solid black;
    padding: 5px;
    height: 10%;
    float: top;
 }
 .action-details {
    box-shadow: -5px -1px 10px rgba(62, 62, 62, 0.134);
    background-color: aqua;
 }
 .assigned-container {
    background-color: turquoise;
    width: 50%;
    float: right;
    height: 50%;
    box-shadow: -5px -1px 10px rgba(62, 62, 62, 0.134);
 }

</style>
