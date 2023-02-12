<template>
    <div id="app">
        <header>
            <nav class="nav">
                <navbar/>
                <img class="symbol" src="../img/CompanyIcon.png"/>

                <div class="title">
                 <span>
                    Coordinator
                </span>
                    <span class="gap"></span>
                    <div class="dropdown">
                        <button class="dropbtn">Switch User <span class="dropdown-arrow">&#9660;</span></button>
                        <div class="dropdown-content">
                            <a href="#">Coordinator</a>
                            <a href="#">Volunteer</a>
                            <a href="#">Log Out</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="buttons">
                <span class="btn">All Activity</span>
                <span class="btn">Actions</span>
                <span class="btn">Referrals</span>
                <span class="btn">Residents</span>
                <span class="btn">Volunteers</span>
                <span class="btn">Organisations</span>
                <span class="btn">Phone Call</span>
            </div>
        </header>
      <Actions/>
    </div>


</template>

<script>
    import $ from 'jquery';
    // import myButton from "@/components/myButton";
    import navbar from './components/navbar.vue';
    import Actions from "@/components/Actions";

    export default {
        name: 'App',
        data() {
            return {
                buttons: [
                    {label: 'All Activity', left: '373px', selected: false},
                    {label: 'Actions', left: '526px', selected: false},
                    {label: 'Referrals', left: '679px', selected: false},
                    {label: 'Residents', left: '832px', selected: false},
                    {label: 'Volunteers', left: '985px', selected: false},
                    {label: 'Organisations', left: '1138px', selected: false},
                ],
                options: ['Account']
            }
        },
        components: {
            // myButton,
            navbar,
          // eslint-disable-next-line vue/no-unused-components
            Actions
        },
        methods: {
            doSomething() {
                console.log('Button was clicked');
            },
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
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('X-CSRFToken', csrftoken)
                    },
                    method: "POST",
                    type: "POST",
                    contentType: 'application/json',
                    data: JSON.stringify(action),
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
            },
            postResident: async function () {
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
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('X-CSRFToken', csrftoken)
                    },
                    method: "POST",
                    type: "POST",
                    contentType: 'application/json',
                    data: JSON.stringify(resident),
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
            },
            deleteResident: async function () {
                const csrftoken = this.getCookie('csrftoken')
                const json = await $.ajax({
                    url: "http://localhost:8000/" + "api/residents/37/",
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('X-CSRFToken', csrftoken)
                    },
                    method: "DELETE",
                    type: "DELETE",
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
            },
            getAction: async function () {
                const csrftoken = this.getCookie('csrftoken')
                const json = await $.ajax({
                    url: "http://localhost:8000/" + "api/actions/6/",
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('X-CSRFToken', csrftoken)
                    },
                    method: "GET",
                    type: "GET",
                    contentType: 'application/json',
                    data: JSON.stringify({'action_status': '7'}),
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
            },
            updateAction: async function () {
                const csrftoken = this.getCookie('csrftoken')
                const json = await $.ajax({
                    url: "http://localhost:8000/" + "api/actions/7/",
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('X-CSRFToken', csrftoken)
                    },
                    method: "PATCH",
                    type: "PATCH",
                    contentType: 'application/json',
                    data: JSON.stringify({"action_priority": "2"}),
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
        created() {

        }
    }
</script>

<style>
    .buttons .btn{
        font-weight: 500;
    }
    .buttons{
        margin: 6vw;
        display: flex;
        justify-content: center;

    }

    .btn{
        margin: 1.5vw;
        font-size: 1.5vw;
        color: black;
        /*text-transform: uppercase;*/

        /*transition: all 0.3s ease-in-out;*/
    }
    .btn:hover{
        background-color: white;
        color: white;
        border: 2px solid #3A4857;
        background-color: #3A4857;
        border-radius: 8px;
        font-weight: 500;
        cursor: pointer;
    }
    .btn:active {
        transform: scale(0.98);
    }
    .dropbtn {
        background-color: #3A4857;
        color: white;
        font-size: 1vw;
        border: none;
        display: flex;
        align-items: center;
    }

    .dropdown-arrow {
        margin-left: 0.4vw;
        font-size: 0.3vw;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: white;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        transition: all 0.3s ease-out;
    }

    /* Links inside the dropdown */
    .dropdown-content a {
        color: black;
        padding: 0.8em 1.5em;
        text-decoration: none;
        display: block;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {
        background-color: gray;
    }

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
        display: block;
    }

    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown:hover .dropbtn {
        background-color: lightblue;
    }

    @media (max-width: 767px) {
        .dropdown-content {
            position: static;
            display: block;
            width: 100%;
            margin-top: 10px;
        }
    }

    .symbol {
        position: absolute;
        width: 7vw;
        height: 3vw;
        left: 1em;
        top: 14px;
        transition: height 0.2s ease-in-out;
    }


    .title {
        position: absolute;
        width: 4vw;
        height: 2vw;
        right: 20vw;
        top: 1vw;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 1.5vw;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }

    .gap {
        padding-left: 0.4vw;
        padding-right: 0.4vw;
    }
</style>
