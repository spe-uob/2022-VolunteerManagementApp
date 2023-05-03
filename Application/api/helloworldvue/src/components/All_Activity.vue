<template>
    <div class="wrapper">
        <div class="grid-1">
            <Action_table :table-data="data" @request-sort="sortData" :data="filteredData"
                          class="left-table"></Action_table>
        </div>
        <div class="grid-2">
            <Referral_table :referral-data="referral_data" @request-sort1="sortData1"
                            :referral_data="filteredReferralData" class="right-table"></Referral_table>
        </div>

        <div class="grid-3">
            <Action_FilterComponent @update="handleUpdate" class="Action_FilterComponent"></Action_FilterComponent>
            <Referral_FilterComponent @updatereferral="handleUpdate1"
                                      class="Referral_FilterComponent"></Referral_FilterComponent>
        </div>
    </div>


</template>

<script>

    import Action_table from "@/components/table component/Actions.vue";
    import Action_FilterComponent from "@/components/filter component/Action_FilterComponent.vue";
    import Referral_table from "@/components/table component/myReferrals.vue";
    import Referral_FilterComponent from "@/components/filter component/FilterComponent.vue";
    import $ from "jquery";

    export default {
        name: 'AllActivity',
        data() {
            return {
                data: [
                    {
                        help_type: "Shopping",
                        resident: 'John Doe',
                        Due: '2021-01-01',
                        status: 'Pending volunteer interest',
                        assigned: 'A',
                        priority: 'High'
                    },
                    {
                        help_type: 'Food parcel',
                        resident: 'Amy',
                        Due: '2020-02-01',
                        status: 'Volunteer interest',
                        assigned: 'B',
                        priority: 'Medium'
                    },
                    {
                        help_type: 'Call',
                        resident: 'Annie',
                        Due: '2019-02-01',
                        status: 'Ongoing',
                        assigned: 'C',
                        priority: 'Low'
                    },
                    {
                        help_type: 'Shopping',
                        resident: 'Bill',
                        Due: '2018-02-01',
                        status: 'Ongoing',
                        assigned: 'D',
                        priority: 'Medium'
                    },
                    {
                        help_type: 'Prescription',
                        resident: 'Lin',
                        Due: '2022-02-01',
                        status: 'Volunteer assigned',
                        assigned: 'E',
                        priority: 'Low'
                    },
                    {
                        help_type: 'Dog walk',
                        resident: 'Skill',
                        Due: '2014-02-01',
                        status: 'Volunteer interest',
                        assigned: 'F',
                        priority: 'High'
                    },
                    {
                        help_type: 'Chores',
                        resident: 'miss',
                        Due: '2013-02-01',
                        status: 'Completed',
                        assigned: 'G',
                        priority: 'Medium'
                    },
                    {
                        help_type: 'Call',
                        resident: 'doctor',
                        Due: '2007-02-01',
                        status: 'Volunteer assigned',
                        assigned: 'H',
                        priority: 'Low'
                    },
                ],
                selectedValues: [],
                helpTypes: ["Pending volunteer interest", "Volunteer interest", "Volunteer assigned", "Ongoing", "Completed", "Couldn't complete", "No longer needed"],
                priority: ["High", "Medium", "Low"],
                referral_data: [
                    {type: 'dog walking', resident: 'Liu', created: '2021-01-01', status: 'Ongoing'},
                    {type: 'shopping', resident: 'Zhang', created: '2023-01-01', status: 'Pending volunteer interest'},
                    {type: 'cooking', resident: 'Lin', created: '2022-07-18', status: 'Ongoing'},
                    {type: 'Food parcel', resident: 'john', created: '2022-01-02', status: 'Completed'},
                    {type: 'teaching', resident: 'Bill', created: '2022-08-19', status: 'Pending volunteer interest'},
                    {type: 'selling', resident: 'William', created: '2020-12-01', status: 'Volunteer assigned'},
                    {type: 'playing', resident: 'Amy', created: '2023-03-17', status: 'Completed'},
                    {type: 'playing', resident: 'Amy', created: '2023-03-17', status: 'Volunteer assigned'},
                ],
                selectedValues1: [],
                referralStatus: [
                    {id: 1, name: "Chosen"},
                    {id: 2, name: "Contacted"},
                    {id: 3, name: "Complete"},
                ],
            }
        },
        components: {
            Action_table,
            Action_FilterComponent,
            Referral_table,
            Referral_FilterComponent,
        },
        computed: {
            filteredData() {
                if (this.selectedValues.length === 0) {
                    return this.data
                } else {
                    return this.data.filter(item => {
                        return this.selectedValues.includes(item.help_type) ||
                            this.selectedValues.includes(item.status) ||
                            this.selectedValues.includes(item.priority)
                    })
                }
            },
            filteredReferralData() {
                if (this.selectedValues1.length === 0) {
                    return this.referral_data
                } else {
                    return this.referral_data.filter(item => {
                        return this.selectedValues1.includes(item.type) ||
                            this.selectedValues1.includes(item.status)
                    })
                }
            }
        },
        methods: {
            handleUpdate(newValues) {
                this.selectedValues = newValues
            },
            handleUpdate1(newValues) {
                this.selectedValues1 = newValues
            },
            sortData(sortedData) {
                this.data = sortedData;
            },
            sortData1(sortedData) {
                this.referral_data = sortedData;
            },
            baseURL: function () {
                return window.location.origin
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
                    },

                }).catch((err) => {
                    console.err(JSON.stringify(err))
                })
                console.log(JSON.stringify(json))
                return json;
            },
            getReferrals: async function () {
                const csrftoken = this.getCookie('csrftoken')
                const json = await $.ajax({
                    url: this.baseURL() + "/api/referrals/",
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
            getReferralTypeByID: async function (id) {
                const csrftoken = this.getCookie('csrftoken')
                const json = await $.ajax({
                    url: this.baseURL() + '/api/referraltypes/',
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
            getStatusByID_referral: function (id) {
                return this.referralStatus[id - 1]
            },
        },
        async mounted() {
            let response = await this.getActions();
            response = response.results;
            console.log("GETACTIONS RESPONSE: " + JSON.stringify(response));
            this.data = await Promise.all(response.map(async (result) => {
                return {
                    id: result.id,
                    resident: await this.getResidentByID(result.resident),
                    help_type: await this.getHelpTypeByID(result.help_type),
                    Due: this.formatDate(result.requested_datetime),
                    assigned: result.assigned_volunteers,
                    status: this.getStatusByID(result.action_status),
                    priority: this.getPriorityByID(result.action_priority)
                };
            }));

            let referral_response = await this.getReferrals();
            referral_response = referral_response.results;
            console.log("GETREFERRALS RESPONSE: " + JSON.stringify(referral_response));
            this.referral_data = await Promise.all(referral_response.map(async (result) => {
                return {
                    id: result.id,
                    resident: await this.getResidentByID(result.resident),
                    type: await this.getReferralTypeByID(result.referral_type),
                    created: this.formatDate(result.created_datetime),
                    status: this.getStatusByID_referral(result.referral_status).name,
                };
            }));
        },

    }
</script>

<style scoped>


    .wrapper {
        display: grid;
        grid-template-columns: 2fr 2fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: " l r r f";
        grid-gap: 10px;
    }

    .grid-1 {
        grid-area: l;
        /*background: #3385FF;*/
        /*grid-area: 1 / -1 / 4 / 2;*/
    }

    .grid-2 {
        grid-area: r;
        /*background: #3385FF;*/
        /*grid-area: 1 / 2 / 4 / 3;*/
    }

    .grid-3 {
        /*grid-area: 1 / col4-start / third-line / 6;*/
        grid-area: f;
    }

    .left-table {
        width: 100%;
        margin-left: 10px;
    }

    .right-table {
        margin-left: 10px;
        width: 100%;
    }


    .left-table {
        width: 100%;
        margin-left: 10px;
    }

    .right-table {
        margin-left: 10px;
        width: 100%;
    }


    .Action_FilterComponent {
        position: static;
        background: #ebecf0;
        color: rgba(31, 31, 31, 0.7);
        border-radius: 0.5rem;
        width: 12rem;
        border: 0.1rem solid #f7f7f7;
    }

    .Referral_FilterComponent {
        position: static;
        background: #ebecf0;
        color: rgba(31, 31, 31, 0.7);
        border-radius: 0.5rem;
        width: 12rem;
        border: 0.1rem solid #f7f7f7;
        top: 300px;
    }


    @media screen and (max-width: 1000px) {
        .wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            gap: 10px;
        }

        .grid-1 {
            width: 700px;
            grid-area: 1 / 1 / 2 / 4;
        }

        .grid-2 {
            grid-area: 2 / 1 / 3 / 4;
        }

        .grid-3 {
            grid-area: 1 / 5 / third-line / 6;
        }

        .right-table {
            margin-left: 10px;
        }

        @media screen and (max-width: 1000px) {
            .wrapper {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                gap: 10px;
            }


            .grid-1 {
                width: 700px;
                grid-area: 1 / 1 / 2 / 4;
            }

            .grid-2 {
                grid-area: 2 / 1 / 3 / 4;
            }

            .grid-3 {
                grid-area: 1 / 5 / third-line / 6;
            }

            .right-table {
                margin-left: 10px;
            }


        }

        /*@media (max-width: 1350px ){*/
        /*  .filter-container{*/
        /*    display: none;*/
        /*  }*/
        /*}*/
        /*  @media (max-width: 1000px) {*/
        /*  .left-table{*/
        /*    position: relative;*/
        /*    width: 120%;*/
        /*    margin-left: 5px;*/
        /*    bottom: 20px;*/
        /*  }*/
        /*  .right-table{*/
        /*    width: 120%;*/
        /*    margin-left: 5px;*/
        /*  }*/
        /*}*/
        /*@media (min-width: 1600px) {*/
        /*  .left-table{*/
        /*    position: relative;*/
        /*    margin-left:50px;*/
        /*    width: 1000px;*/
        /*  }*/
        /*  .right-table{*/
        /*    margin-left: 90%;*/
        /*    width: 800px;*/
        /*  }*/
        /*}*/
        /*table {*/
        /*  border-collapse: collapse;*/
        /*  width: 20%;*/
        /*  min-width: 20rem;*/
        /*  margin: 0rem;*/
        /*  float: left;*/
        /*  background-color: #f8f8f8;*/
        /*  border-radius: 4px;*/
        /*  overflow: hidden;*/
        /*  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);*/
        /*}*/
        /*th,td{*/
        /*  border: none;*/
        /*}*/
        /*th {*/
        /*  background-color: rgba(234, 236, 239, 1);*/
        /*  color: black;*/
        /*  font-weight: bold;*/
        /*  text-align: left;*/
        /*  padding: 0.75rem 1rem;*/
        /*  border-bottom: 1px solid #ddd;*/
        /*  cursor: pointer;*/
        /*}*/
        /*th:hover {*/
        /*  background-color: #354a63;*/
        /*}*/
        /*th.sortable:hover {*/
        /*  background-color: #dddddd;*/
        /*}*/
        /*th.sortable:after {*/
        /*  content: "\25B2";*/
        /*  font-size: 12px;*/
        /*  margin-left: 5px;*/
        /*}*/
        /*th.sortable.asc:after {*/
        /*  content: "\25BC";*/
        /*  font-size: 12px;*/
        /*  margin-left: 5px;*/
        /*}*/
        /*td {*/
        /*  padding: 0.75rem 2rem;*/
        /*  border-bottom: 1px solid #ddd;*/
        /*  color: #333;*/
        /*}*/
        /*tr:hover {*/
        /*  background-color: #e6e6e6;*/
        /*}*/
        .tr-color-0 {
            background: #f2f2f2;
        }

        .tr-color-1 {
            background: #fff;
        }

        /*@media (max-width: 1350px ){*/
        /*  .filter-container{*/
        /*    display: none;*/
        /*  }*/
        /*}*/
        /*  @media (max-width: 1000px) {*/
        /*  .left-table{*/
        /*    position: relative;*/
        /*    width: 120%;*/
        /*    margin-left: 5px;*/
        /*    bottom: 20px;*/
        /*  }*/
        /*  .right-table{*/
        /*    width: 120%;*/
        /*    margin-left: 5px;*/
        /*  }*/
        /*}*/
        /*@media (min-width: 1600px) {*/
        /*  .left-table{*/
        /*    position: relative;*/
        /*    margin-left:50px;*/
        /*    width: 1000px;*/
        /*  }*/
        /*  .right-table{*/
        /*    margin-left: 90%;*/
        /*    width: 800px;*/
        /*  }*/
        /*}*/
        /*table {*/
        /*  border-collapse: collapse;*/
        /*  width: 20%;*/
        /*  min-width: 20rem;*/
        /*  margin: 0rem;*/
        /*  float: left;*/
        /*  background-color: #f8f8f8;*/
        /*  border-radius: 4px;*/
        /*  overflow: hidden;*/
        /*  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);*/
        /*}*/
        /*th,td{*/
        /*  border: none;*/
        /*}*/
        /*th {*/
        /*  background-color: rgba(234, 236, 239, 1);*/
        /*  color: black;*/
        /*  font-weight: bold;*/
        /*  text-align: left;*/
        /*  padding: 0.75rem 1rem;*/
        /*  border-bottom: 1px solid #ddd;*/
        /*  cursor: pointer;*/
        /*}*/
        /*th:hover {*/
        /*  background-color: #354a63;*/
        /*}*/
        /*th.sortable:hover {*/
        /*  background-color: #dddddd;*/
        /*}*/
        /*th.sortable:after {*/
        /*  content: "\25B2";*/
        /*  font-size: 12px;*/
        /*  margin-left: 5px;*/
        /*}*/
        /*th.sortable.asc:after {*/
        /*  content: "\25BC";*/
        /*  font-size: 12px;*/
        /*  margin-left: 5px;*/
        /*}*/
        /*td {*/
        /*  padding: 0.75rem 2rem;*/
        /*  border-bottom: 1px solid #ddd;*/
        /*  color: #333;*/
        /*}*/
        /*tr:hover {*/
        /*  background-color: #e6e6e6;*/
        /*}*/
        .tr-color-0 {
            background: #f2f2f2;
        }

        .tr-color-1 {
            background: #fff;
        }
    }


</style>
