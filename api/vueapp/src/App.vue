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

            <div v-if="!CallStarted" class="buttons">
                <myButton v-for="(item, index) in buttons" :key="index" :label="item.label" :left="item.left"
                          @click.native="selectButton(index)" :selected="item.selected"/>
                <button class="btn" @click="Start_Call">Start Call</button>
                <!-- <FilterComponent/> -->
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
    import $ from 'jquery';
    import myButton from "@/components/myButton";
    import navbar from './components/navbar.vue';
    // import FilterComponent from './components/FilterComponent.vue';


    export default {
        name: 'App',
        data() {
            return {
                showContent: false,
                buttons: [
                    {label: 'All Activity', left: '273px', selected: false},
                    {label: 'Actions', left: '426px', selected: false},
                    {label: 'Referrals', left: '579px', selected: false},
                    {label: 'Residents', left: '732px', selected: false},
                    {label: 'Volunteers', left: '885px', selected: false},
                    {label: 'Organisations', left: '1038px', selected: false},
                ],
                CallStarted: false,
                options: ['Account']
            }
        },
        created() {
            const callStarted = localStorage.getItem('callStarted');
            if (callStarted !== null) {
                this.CallStarted = callStarted === 'true';
            }
        },
        watch: {
            //TODO: fix gets broken when you refresh on Start Call or forward. Most likely need to run updateCallStarted on more than popstate event
            $route(to, from) {
                if (from !== '/Start_Call')
                    this.updateCallStarted(to.path)
            }
        },
        mounted() {
            this.updateCallStarted(this.$route.path);
            window.addEventListener('popstate', this.onPopState);
            window.addEventListener('beforeunload', this.onBeforeUnload);
        },
        beforeDestroy() {
            window.removeEventListener('popstate', this.onPopState);
            window.removeEventListener('beforeunload', this.onBeforeUnload);
        },
        components: {
            navbar,
            myButton,
            // FilterComponent
        },
        methods: {
            updateCallStarted(routeName) {
                this.CallStarted = (routeName === '/Start_Call' || routeName.startsWith('/add'));
                localStorage.setItem('callStarted', this.CallStarted);
            },
            onBeforeUnload() {
                //code here
            },
            onPopState() {
                this.updateCallStarted(this.$route.name)
            },
            Start_Call() {
                this.$router.push("/Start_Call")
            },
            back() {
                this.$emit('buttonClick')
                this.$router.push("/All Activity")
            },
            selectButton(index) {
                this.buttons.forEach((item, i) => {
                    item.selected = (i === index)
                    if (i === index) {
                        this.$router.push(`/${item.label}`)
                    }
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
    }
</script>

<style>

    /*.callbtn {*/
    /*    position: absolute;*/
    /*    width: 117px;*/
    /*    height: 48px;*/
    /*    left: 1365px;*/
    /*    top: 112px;*/
    /*    background: #1C405A;*/
    /*    border-radius: 5px;*/
    /*    color: white;*/
    /*}*/


    .router-link {
        text-decoration: none;
        color: inherit;
    }

    .buttons .btn {
        font-weight: 500;
    }

    .buttons {
        margin: 5vw;
        display: flex;
        justify-content: center;
    }

    .btn {
        margin: 1.5vw;
        font-size: 1.5vw;
        color: black;
        /*text-transform: uppercase;*/

        transition: all 0.1s ease-in-out;
    }

    .btn:hover {
        background-color: white;
        color: white;
        /*border: 1px solid #3A4857;*/
        background-color: #3A4857;
        border-radius: 2px;
        cursor: pointer;
    }

    .btn:active {
        transform: scale(1.15);
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropbtn {
        /* background-color: #3A4857;
        color: white;
        font-size: 1rem;
        border: none;
        display: flex;
        align-items: center; */
        /*background-color: #3A4857;*/
        /*color: white;*/
        /*position: absolute;*/
        /*width: 73px;*/
        /*height: 45px;*/
        /*left: 1300px;*/
        /*top: -1px;*/
        background-color: #3A4857;
        color: white;
        font-size: 1rem;
        border: none;
        display: flex;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;
    }

    .dropdown-arrow {
        margin-left: 0.4rem;
        font-size: 0.5rem;
        transition: transform 0.2s ease-in-out;
    }

    /* Dropdown Content (Hidden by Default) */
    /*.dropdown-content {*/
    /*    display: none;*/
    /*    position: absolute;*/
    /*    top: 100%;*/
    /*    left: 1300px;*/
    /*    background-color: #f9f9f9;*/
    /*    min-width: 160px;*/
    /*    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);*/
    /*    z-index: 1;*/
    /*}*/
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: white;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        z-index: 1;
        transition: all 0.3s ease-out;
        top: 100%;
    }


    /* Links inside the dropdown */
    .dropdown-content a,
    .dropdown-content a:hover {
        color: black;
        padding: 0.8em 1.5em;
        text-decoration: none;
        display: block;
        background-color: transparent;
        transition: transform 0.2s ease-in-out;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {
        background-color: #eee;
    }

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
        display: block;
    }

    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown:hover .dropbtn {
        font-weight: bold;
    }

    .dropdown-content a {
        border-bottom: 1px solid #eee;
    }

    .dropdown-content a:last-child {
        border-bottom: none;
    }

    .dropdown:hover .dropdown-arrow {
        transform: rotate(180deg);
    }

    .symbol {
        position: absolute;
        width: 7vw;
        height: 3vw;
        left: 1em;
        top: 14px;
        transition: height 0.2s ease-in-out;
    }


    /*.title {*/
    /*    position: absolute;*/
    /*    width: 10vw;*/
    /*    height: 2vw;*/
    /*    right: 20vw;*/
    /*    top: 1.5vw;*/

    /*    font-family: 'Inter';*/
    /*    font-style: normal;*/
    /*    font-weight: 300;*/
    /*    font-size: 2vw;*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*    color: #FFFFFF;*/
    /*}*/

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
