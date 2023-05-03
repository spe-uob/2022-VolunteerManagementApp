<template>
    <div class="grid-container">
        <div class="action_container">
            <table class="Action_table">
                <thead style="background-color: rgba(247, 247, 247, 1)">
                <tr style="font-size: 1rem;">
                    <td colspan="2" style=" font-size: 1rem;font-weight:bold;">Actions</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </thead>

                <tbody>

                <tr style="background-color: rgba(223, 226, 230, 1); height: 1.5rem;">
                    <th @click="sortTable('id')">ID<span class="sortable1"
                                                         :class="{ active: activeButton === 0 }"></span></th>
                    <th @click="sortTable('help_type')">Help Type<span class="sortable1"
                                                                       :class="{ active: activeButton === 1 }"></span>
                    </th>
                    <th @click="sortTable('resident')">Resident<span class="sortable1"
                                                                     :class="{ active: activeButton === 2 }"></span>
                    </th>
                    <th @click="sortTable('due')">Due<span class="sortable1"
                                                           :class="{ active: activeButton === 3 }"></span></th>
                    <th @click="sortTable('status')">Status<span class="sortable1"
                                                                 :class="{ active: activeButton === 4 }"></span></th>
                    <th @click="sortTable('assigned')">Assigned<span class="sortable1"
                                                                     :class="{ active: activeButton === 5 }"></span>
                    </th>
                    <th @click="sortTable('priority')">Priority<span class="sortable1"
                                                                     :class="{ active: activeButton === 6 }"></span>
                    </th>
                    <th @click="sortTable('volunteer')">Volunteer<span class="sortable1"
                                                                       :class="{ active: activeButton === 7 }"></span>
                    </th>
                    <th @click="sortTable('completed')">Completed<span class="sortable1"
                                                                       :class="{ active: activeButton === 8 }"></span>
                    </th>
                </tr>

                <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index"
                    @click="handleClick(item.id)">
                    <td>{{item.id}}</td>
                    <td>{{item.help_type}}</td>
                    <td>{{item.resident}}</td>
                    <td>{{item.due}}</td>
                    <td>{{item.status}}</td>
                    <td>{{item.assigned}}</td>
                    <td>{{item.priority}}</td>
                    <td>{{item.volunteer}}</td>
                    <td>{{item.completed}}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="FilterComponent_container">
            <FilterComponent class="action_filterComponent"></FilterComponent>
        </div>
    </div>
    <!--     api version-->

    <!--    <div class='table-container' :style="{ width: containerSize + 'px', height: containerSize + 'px'}">-->
    <!--      <table class="table">-->
    <!--        <thead>-->
    <!--        <tr style="font-size: 17px;background-color: #f7f7f7;">-->
    <!--          <td rowspan="4" style="font-size: 17px;font-weight:bold;color: black">Actions</td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--        </tr>-->
    <!--        </thead>-->
    <!--        <tbody>-->

    <!--        <tr>-->
    <!--          <th>ID<div style="display: inline-block;position: absolute;top:0px;">-->
    <!--            <span class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--          </div>-->
    <!--          </th>-->
    <!--          <th>Resident<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--            <span class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--          </th>-->
    <!--          <th>Help Type<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--            <span class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--          </div>-->
    <!--          </th>-->
    <!--          <th>Due<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--            <span-->
    <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--          </th>-->
    <!--          <th>Status<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--            <span-->
    <!--              class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--          </th>-->
    <!--        </tr>-->
    <!--        &lt;!&ndash; 用索引值除以 2 取余 &ndash;&gt;-->
    <!--        <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">-->
    <!--          <td style="color:  black;">{{item.id}}</td>-->
    <!--          <td style="color:  black;">{{item.resident}}</td>-->
    <!--          <td style="color:  black;">{{item.help_type}}</td>-->
    <!--          <td style="color:  black;">{{item.Due}}</td>-->
    <!--          <td style="color:  black;">{{item.Status}}</td>-->
    <!--        </tr>-->
    <!--        </tbody>-->
    <!--      </table>-->
    <!--    </div>-->


    <!--    new version-->

    <!--      <div class="table-container" :style="{width: containerSize + 'px', height: containerSize + 'px', left: left + 'px', top: top + 'px'}">-->
    <!--        <table class="table">-->
    <!--          <thead>-->
    <!--          <tr style="font-size: 17px;backgrou6nd-color: #f7f7f7;">-->
    <!--            <td rowspan="4" style="font-size: 17px;font-weight:bold;color: black">Actions</td>-->
    <!--            <td></td>-->
    <!--            <td></td>-->
    <!--            <td></td>-->
    <!--            <td></td>-->
    <!--          </tr>-->
    <!--          </thead>-->
    <!--          <tbody>-->

    <!--          <tr>-->
    <!--            <th>ID<div style="display: inline-block;position: absolute;top:45px;">-->
    <!--              <span-->
    <!--                  class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--            </th>-->
    <!--            <th>Resident<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--              <span-->
    <!--                  class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--            </th>-->
    <!--            <th>Help Type<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--              <span-->
    <!--                  class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--            </th>-->
    <!--            <th>Due<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--              <span-->
    <!--                  class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--            </th>-->
    <!--            <th>Status<div style="display: inline-block;position: absolute;top: 45px;">-->
    <!--              <span-->
    <!--                  class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
    <!--            </div>-->
    <!--            </th>-->
    <!--          </tr>-->
    <!--          <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">-->
    <!--            <td style="color:  black;">{{item.id}}</td>-->
    <!--            <td style="color:  black;">{{item.resident}}</td>-->
    <!--            <td style="color:  black;">{{item.help_type}}</td>-->
    <!--            <td style="color:  black;">{{item.Organisation}}</td>-->
    <!--            <td style="color:  black;">{{item.Completed}}</td>-->
    <!--          </tr>-->
    <!--          </tbody>-->
    <!--        </table>-->

    <!--        <div>-->
    <!--          <FilterComponent class="table1"></FilterComponent>-->
    <!--        </div>-->
    <!--      </div>-->
</template>

<script>
    import $ from 'jquery';

    export default {
        name: 'actionTable',
        data() {
            return {
                toggle: false,
                list: [
                    {
                        id: '1',
                        help_type: 'Dog Walking',
                        resident: 'John',
                        due: 'Fri, Feb 3, 2023',
                        status: 'Ongoing',
                        assigned: '1/1',
                        priority: 'Normal',
                        volunteer: 'I',
                        completed: 'Mon, Feb 6, 2023'
                    },
                    {
                        id: '9',
                        help_type: 'Food Bank',
                        resident: 'Liu',
                        due: 'Mon, Jan 15, 2023',
                        status: 'Ongoing',
                        assigned: '2/2',
                        priority: 'Normal',
                        volunteer: 'F',
                        completed: 'Mon, Feb 6, 2023'
                    },
                    {
                        id: '11',
                        help_type: 'Shopping',
                        resident: 'Bob',
                        due: 'Mon, Jan 8, 2023',
                        status: 'Ongoing',
                        assigned: '1/1',
                        priority: 'Normal',
                        volunteer: 'D',
                        completed: 'Mon, Jan 15, 2023'
                    },
                    {
                        id: '27',
                        help_type: 'Prescription',
                        resident: 'Ally',
                        due: 'Sun, Feb19 , 2023',
                        status: 'Ongoing',
                        assigned: '1/1',
                        priority: 'Normal',
                        volunteer: 'A',
                        completed: 'Sun, Feb19 , 2023'
                    },
                    {
                        id: '3',
                        help_type: 'Volunteer Assigned',
                        resident: 'Bill',
                        due: 'Sun, Feb12 , 2023',
                        status: 'Ongoing',
                        assigned: '2/2',
                        priority: 'Normal',
                        volunteer: 'C',
                        completed: 'Sun, Feb12 , 2023'
                    },
                    {
                        id: '15',
                        help_type: 'Volunteer Assigned',
                        resident: 'Alice',
                        due: 'Wed, Aug 11, 2023',
                        status: 'Ongoing',
                        assigned: '1/2',
                        priority: 'Normal',
                        volunteer: 'D'
                    },
                    {
                        id: '17',
                        help_type: 'Dog Walking',
                        resident: 'Sid',
                        due: 'Mon, Jan 1, 2023',
                        status: 'Ongoing',
                        assigned: '0/1',
                        priority: 'Normal',
                        volunteer: 'A'
                    },
                ],
                priority: ["High", "Medium", "Low"],
                helpTypes: ["Pending volunteer interest", "Volunteer interest", "Volunteer assigned", "Ongoing", "Completed", "Couldn't complete", "No longer needed"],
                sortOrder: '',
                activeButton: -1,
            }
        },
        props: {
            containerSize: {
                type: Number,
                required: true
            },
        },
        components: {
            FilterComponent: require('./filter component/Action_FilterComponent.vue').default
        },
        created() {
            this.tableData = this.$store.state.tableData
        },
        methods: {
            toggleActive(index) {
                if (this.activeButton === index) {
                    this.activeButton = -1;
                } else {
                    this.activeButton = index;
                }
            },
            toggleHide() {
                this.toggle = !this.toggle;
            },
            handleClick(id) {
                this.$router.push(`/action_page/${id}`)
            },
            sortTable(sortKey) {
                if (this.sortOrder === sortKey) {
                    this.list.reverse();
                } else {
                    if (sortKey === 'id') {
                        this.toggleActive(0);
                        this.list.sort((a, b) => a[sortKey] - b[sortKey]);
                    } else if (sortKey === 'help_type') {
                        this.toggleActive(1);
                        this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
                    } else if (sortKey === 'resident') {
                        this.toggleActive(2);
                        this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
                    } else if (sortKey === 'due') {
                        this.toggleActive(3);
                        this.list.sort((a, b) => new Date(a[sortKey]) - new Date(b[sortKey]));
                    } else if (sortKey === 'status') {
                        this.toggleActive(4);
                        this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
                    } else if (sortKey === 'assigned') {
                        this.toggleActive(5);
                        this.list.sort((a, b) => a[sortKey] - b[sortKey]);
                    } else if (sortKey === 'priority') {
                        this.toggleActive(6);
                        this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
                    } else if (sortKey === 'volunteer') {
                        this.toggleActive(7);
                        this.list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
                    } else if (sortKey === 'completed') {
                        this.toggleActive(8);
                        this.list.sort((a, b) => new Date(a[sortKey]) - new Date(b[sortKey]));
                    }
                    this.sortOrder = sortKey;
                }
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
            }
        },
        async mounted() {
            let response = await this.getActions();
            response = response.results;
            console.log("GETACTIONS RESPONSE: " + JSON.stringify(response));
            this.list = await Promise.all(response.map(async (result) => {
                return {
                    id: result.id,
                    resident: await this.getResidentByID(result.resident),
                    help_type: await this.getHelpTypeByID(result.help_type),
                    due: this.formatDate(result.requested_datetime),
                    assigned: result.assigned_volunteers,
                    status: this.getStatusByID(result.action_status),
                    priority: this.getPriorityByID(result.action_priority)
                };
            }));
        },
    }
</script>


<style>

    /*.grid-container {*/
    /*    display: grid;*/
    /*    grid-template-columns: repeat(10, 1fr);*/
    /*    grid-template-areas: "t t t t t t t t f f" "t t t t t t t t f f" "t t t t t t t t . ." ". . . . . . . . . .";*/
    /*    grid-gap: 1rem;*/
    /*    align-items: center;*/
    /*}*/

    /*.action_container {*/
    /*    grid-area: t;*/
    /*}*/

    /*.FilterComponent_container {*/
    /*    grid-area: f;*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*    height: 15rem;*/
    /*}*/

    /*@media only screen and (max-width: 600px) {*/
    /*    .grid-container {*/
    /*        grid-template-areas: "t t t t t t t t" "f f f f f f f f" ". . . . . . . . . .";*/
    /*        grid-template-columns: repeat(8, 1fr);*/
    /*    }*/

    /*    .FilterComponent_container {*/
    /*        order: 1;*/
    /*        height: auto;*/
    /*    }*/

    /*    .action_container {*/
    /*        order: 2;*/
    /*    }*/
    /*}*/


    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        grid-gap: 20px;
    }

    .action_container {
        grid-column-start: 1;
        grid-column-end: col4-start;
        grid-row-start: 1;
        grid-row-end: third-line;
    }

    .FilterComponent_container {
        grid-area: 1 / col4-start / third-line / 6;
    }


    .Action_table {
        table-layout: fixed;
        border-collapse: collapse;
        border-spacing: 50px;
        font-size: 12px;
        width: 100%;
        margin-left: 10px;
        background-color: #f8f8f8;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    @media (max-width: 1350px) {
        .FilterComponent_container {
            display: none;
        }

        .grid-container {
            display: flex;
            margin: 20px;
        }
    }


    /*    @media (max-width: 900px) {*/
    /*        .Action_table{*/
    /*            width: 100%;*/
    /*            margin-left: 0px;*/
    /*        }*/
    /*    }*/

    /*    th,td{*/
    /*        border: none;*/
    /*    }*/

    /*    th {*/
    /*        background-color: rgba(234, 236, 239, 1);*/
    /*        color: black;*/
    /*        font-weight: bold;*/
    /*        text-align: left;*/
    /*        padding: 0.75rem 1rem;*/
    /*        border-bottom: 1px solid #ddd;*/
    /*        cursor: pointer;*/
    /*    }*/


    /*    td {*/
    /*        padding: 0.75rem 2rem;*/
    /*        border-bottom: 1px solid #ddd;*/
    /*        color: #333;*/
    /*    }*/


    /*    .tr-color-0 {*/
    /*        background: #f2f2f2;*/
    /*    }*/

    /*    .tr-color-1 {*/
    /*        background: #fff;*/
    /*    }*/

    /*    span.sortable1 {*/
    /*        display: inline-block;*/
    /*        width: 0;*/
    /*        height: 0;*/
    /*        margin-top: 6px;*/
    /*        margin-left: 8px;*/
    /*        vertical-align: middle;*/
    /*        border-top: 0;*/
    /*        border-right: 4px solid transparent;*/
    /*        border-bottom: 4px solid #999;*/
    /*        border-left: 4px solid transparent;*/
    /*    }*/

    /*    span.sortable1.active{*/
    /*        transform: rotate(180deg);*/
    /*        border-top: 0;*/
    /*        border-right: 4px solid transparent;*/
    /*        border-bottom: 4px solid black;*/
    /*        border-left: 4px solid transparent;*/
    /*    }*/

    /*    .action_filterComponent{*/
    /*        position: static;*/
    /*        background: #ebecf0;*/
    /*        color: rgba(31, 31, 31, 0.7);*/
    /*        border-radius: 0.5rem;*/
    /*        width: 12rem;*/
    /*        border: 0.1rem solid #f7f7f7;*/
    /*        top: 400px;*/
    /*    }*/

    /*table {*/
    /*  border-collapse: collapse;*/
    /*  width: 20%;*/
    /*  max-width: 40rem;*/
    /*  margin: 0rem;*/
    /*  float: left;*/
    /*  background-color: #f8f8f8;*/
    /*  border-radius: 4px;*/
    /*  overflow: hidden;*/
    /*  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);*/
    /*}*/
    /*.table1 {*/
    /*  background: #ebecf0;*/
    /*  color: rgba(31, 31, 31, 0.7);*/
    /*  border-radius: 5px;*/
    /*  margin: 0 auto;*/
    /*  border: 1px solid #f7f7f7;*/
    /*  width: 200px;*/
    /*  position: absolute;*/
    /*  right: -220px;*/
    /*  top: 0;*/
    /*}*/

    /*.tr-color-0 {*/
    /*  background: #f2f2f2;*/
    /*}*/

    /*.tr-color-1 {*/
    /*  background: #fff;*/
    /*}*/

    /*@media (min-width: 460px) {*/
    /*  table {*/
    /*    max-width: 50%;*/
    /*    font-size: 18px;*/
    /*  }*/
    /*}*/


    /*@media (min-width: 800px) {*/
    /*  table {*/
    /*    max-width: 50%;*/
    /*    font-size: 18px;*/
    /*  }*/

    /*}*/

    /*@media (min-width: 992px) {*/
    /*  table {*/
    /*    max-width: 33.33%;*/
    /*    font-size: 20px;*/
    /*  }*/
    /*}*/

    /*@media (min-width: 1200px) {*/
    /*  table {*/
    /*    max-width: 25%;*/
    /*    font-size: 22px;*/
    /*  }*/
    /*}*/

    /*.table-container {*/
    /*    box-sizing: border-box;*/
    /*    position: absolute;*/
    /*    left: 20px;*/
    /*    top: 194px;*/
    /*    background: rgb(212, 215, 211);*/
    /*    border: 1px solid #DFDFDF;*/
    /*    border-radius: 5px;*/
    /*  }*/

    /*.table {*/
    /*  border: 1px solid #f5f5f5;*/
    /*  border-radius: 5px;*/
    /*  margin: 0 auto;*/
    /*  border-spacing: 0px;*/
    /*  width: 100%;*/
    /*  max-width: 100%;*/
    /*  height: 100%;*/
    /*  margin: 0;*/
    /*}*/

    /*.table1 {*/
    /*  background: #ebecf0;*/
    /*  color: rgba(31, 31, 31, 0.7);*/
    /*  border-radius: 5px;*/
    /*  margin: 0 auto;*/
    /*  border: 1px solid #f7f7f7;*/
    /*  width: 200px;*/
    /*  position: absolute;*/
    /*  right: -220px;*/
    /*  top: 0;*/
    /*  !* position: fixed;*/
    /*  left: 1200px;*/
    /*  bottom: 745px; *!*/
    /*}*/

    /*select {*/

    /*  !* styling *!*/
    /*  background-color: white;*/
    /*  border: black;*/
    /*  border-radius: 4px;*/
    /*  display: inline-block;*/
    /*  font: inherit;*/
    /*  line-height: 1.5em;*/
    /*  padding: 0.5em 0.1em 0.5em 0.5em;*/
    /*}*/


    /*th {*/
    /*  background-color: #ebecf0;*/
    /*  color: rgba(31, 31, 31, 0.7);*/
    /*  cursor: pointer;*/
    /*  text-align: left;*/
    /*}*/


    /*td {*/
    /*  font-size: 13px;*/
    /*  height: 30px;*/
    /*}*/

    /*th,*/
    /*td {*/
    /*  min-width: 90px;*/
    /*  padding: 10px 10px;*/
    /*}*/

    /*!* 定义余数为 0 的行颜色 *!*/

    /*.tr-color-0 {*/
    /*  background: #f2f2f2;*/
    /*}*/

    /*!* 定义余数为 1 的行颜色 *!*/

    /*.tr-color-1 {*/
    /*  background: #fff;*/
    /*}*/

    /*.arrow {*/
    /*  display: inline-block;*/
    /*  vertical-align: middle;*/
    /*  width: 0;*/
    /*  height: 0;*/
    /*  margin-left: 5px;*/
    /*  opacity: 0.66;*/
    /*}*/

    /*.arrow.asc {*/
    /*  border-left: 4px solid transparent;*/
    /*  border-right: 4px solid transparent;*/
    /*  border-bottom: 4px solid #4c4b50;*/
    /*}*/

    /*.arrow.dsc {*/
    /*  border-left: 4px solid transparent;*/
    /*  border-right: 4px solid transparent;*/
    /*  border-top: 4px solid #4c4b50;*/
    /*}*/
</style>
