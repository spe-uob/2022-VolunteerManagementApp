<template>
    <div class="parent-container">
        <div class="child-container">
            <div class="details-title">
                <header class="this-title">Action Details</header>
            </div>
            <div class="details">
                <ul>
                    <div>Resident: {{ action.resident }}</div>
                    <div>Action Type: {{ action.help_type }}</div>
                    <div>Due Date: {{ action.Due }}</div>
                    <div>Priority: {{ action.priority }}</div>
                </ul>
            </div>

        </div>
        <div class="child-container">
            <div class="details-title">
                <header class="this-title">Assigned</header>
            </div>
            <div class="details">
                <label for="selectedHelpType">Status:</label>
                <select v-model="selectedHelpType" @change="onHelpTypeSelected(selectedHelpType)">
                    <option v-for="helptype in helpTypes" :key="helptype.id">{{ helptype.name }}</option>
                </select>
                <ul>
                    <label for="assignedVolunteers"> ASSIGNED VOLUNTEERS</label>
                    <li v-for="(volunteer, index) in assigned_volunteers" :key="index">
                        <div>{{ volunteer }}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-container">
            <div class="details-title">
                <header class="this-title">Assign Volunteers</header>
            </div>
            <div class="details">
                <ul class="my-list">
                    <li class="details-item" v-for="(volunteer,index) in volunteers" :key="index">
                        <div>{{ volunteer.name }}</div>
                        <button style="float:right" class="this-button" @click="assign(volunteer.pk)"> ASSIGN</button>
                    </li>
                </ul>
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
                    Due: "20th March 2032",
                    priority: "high"
                },
                helpTypes: [
                    {id: 1, name: "Pending volunteer interest"},
                    {id: 2, name: "Volunteer interest"},
                    {id: 3, name: "Volunteer assigned"},
                    {id: 4, name: "Ongoing"},
                    {id: 5, name: "Completed"},
                    {id: 6, name: "Couldn't complete"},
                    {id: 7, name: "No longer needed"},
                ],
                selectedHelpType: null,
                volunteers: [
                    {
                        name: "No One"
                    },
                    {
                        name: "No One"
                    },
                    {
                        name: "No One"
                    }
                ],
                priority: ["High", "Medium", "Low"],
                assigned_volunteers: []

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
            baseURL: function () {
                return window.location.origin
            },
            onHelpTypeSelected: async function (id) {
                let myHelpType = this.helpTypes.find(obj => obj.name === id)
                const csrftoken = this.getCookie('csrftoken')
                const json = await $.ajax({
                    url: this.baseURL() + `/api/actions/${this.id}/`,
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('X-CSRFToken', csrftoken)
                    },
                    method: "PATCH",
                    type: "PATCH",
                    contentType: 'application/json',
                    data: JSON.stringify({'action_status': myHelpType.id}),
                    success: () => {
                        //this.$emit('removed-action', response)
                        console.log("success")
                    },
                    error: (err) => {
                        console.error(JSON.stringify(err))
                    },

                }).catch((err) => {
                    console.error(JSON.stringify(err))
                })
                console.log(JSON.stringify(json))
                return json;
            },
            assign: async function (volunteer) {
                let assigned_volunteers = []
                let action = await this.getAction()
                assigned_volunteers = action.assigned_volunteers
                assigned_volunteers.push(volunteer)
                const csrftoken = this.getCookie('csrftoken')
                const json = await $.ajax({
                    url: this.baseURL() + `/api/actions/${this.id}/`,
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('X-CSRFToken', csrftoken)
                    },
                    method: "PATCH",
                    type: "PATCH",
                    contentType: 'application/json',
                    data: JSON.stringify({'assigned_volunteers': assigned_volunteers}),
                    success: () => {
                        //this.$emit('removed-action', response)
                        console.log("success")
                    },
                    error: (err) => {
                        console.error(JSON.stringify(err))
                    },

                }).catch((err) => {
                    console.error(JSON.stringify(err))
                })
                console.log(JSON.stringify(json))
                return json;
            },
            getAction: async function () {
                const csrftoken = this.getCookie('csrftoken')
                const json = await $.ajax({
                    url: this.baseURL() + `/api/actions/${this.id}/`,
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
                    console.error(JSON.stringify(err))
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
            getResidentByID: async function (id) {
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
            getHelpTypeByID: async function (id) {
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
                const month = date.toLocaleString('default', {month: 'long'});
                const day = date.getDate();
                return `${month} ${day}, ${year}`;
            },
            getStatusByID: function (id) {
                return this.helpTypes[id - 1]
            },
            getPriorityByID: function (id) {
                return this.priority[id - 1]
            },
            getVolunteers: async function () {
                const csrftoken = this.getCookie('csrftoken')
                const json = await $.ajax({
                    url: this.baseURL() + "/api/volunteers/",
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
            getVolunteerByPK: async function (pk) {
                let volunteers = await this.getVolunteers()
                volunteers = volunteers.results
                return volunteers.find(obj => obj.pk === pk);
            },
            getVolunteersInfo: async function (pkArray) {
                const volunteersInfo = await Promise.all(pkArray.map(async (pk) => {
                    const name = await this.getVolunteerByPK(pk);
                    return {pk, name};
                }));
                return volunteersInfo;
            }

        },
        async mounted() {
            let result = await this.getAction();
            console.log("GETACTIONS RESPONSE: " + JSON.stringify(result));
            this.action = {
                id: result.id,
                resident: await this.getResidentByID(result.resident),
                help_type: await this.getHelpTypeByID(result.help_type),
                Due: this.formatDate(result.requested_datetime),
                assigned: result.assigned_volunteers,
                status: this.getStatusByID(result.action_status),
                priority: this.getPriorityByID(result.action_priority),
                assigned_volunteers: result.assigned_volunteers
            };

            let allVolunteers = await this.getVolunteers();
            this.volunteers = allVolunteers.results?.map((obj) => {
                return {
                    name: obj.first_name + " " + obj.last_name,
                    pk: obj.pk
                }
            }) || [];

            let pkArray = this.action.assigned_volunteers

            this.assigned_volunteers = allVolunteers.results
                .filter(volunteer => pkArray.includes(volunteer.pk))
                .map(volunteer => `${volunteer.first_name} ${volunteer.last_name}`);

            console.log("this.volunteers: " + this.volunteers)
            console.log("this.action: " + this.action)

            console.log("assigned_volunteers: " + this.assigned_volunteers)
            // this.assigned_volunteers = await getVolunteersInfo(this.assigned_volunteers)

        }
    }
</script>

<style scoped>
    .parent-container {
        display: flex;
        flex-wrap: wrap;
        background-color: white;
        width: 100%;
        height: 100%;
    }

    .child-container {
        border-radius: 10px;
        background-color: rgb(232, 232, 238);
        /* border: 1px solid rgb(129, 120, 120); */
        flex-basis: 45%;
        box-shadow: -5px -1px 10px rgba(62, 62, 62, 0.134);
        padding: 10px;
        margin: 20px;
    }

    .details-title {
        font: "Times New Roman";
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        background-color: rgb(231, 228, 228);
        border: 1px solid rgb(89, 89, 89);
        padding: 10px;
        height: 10%;
        float: top;
    }

    .details {
        font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border: 1px solid rgb(129, 120, 120);
        box-shadow: -5px -1px 10px rgba(62, 62, 62, 0.134);
        background-color: white;
        padding: 20px;
    }

    .details-item {
        padding: 25px;
    }

    .footer-container {
        border-radius: 10px;
        background-color: grey;
        align-self: flex-end;
        width: 100%;
        height: 20%;
        box-shadow: -5px -1px 10px rgba(62, 62, 62, 0.134);
    }

    .this-title {
        font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-weight: bold;
        font-size: 100%;
    }

    .this-button {
        border: none;
        padding: 5px;
        border-radius: 5px;
        background-color: rgb(25, 211, 25);
        font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }

    .this-button:hover {
        background-color: blue;
    }

    .my-list {
        list-style-type: none;
    }


</style>
