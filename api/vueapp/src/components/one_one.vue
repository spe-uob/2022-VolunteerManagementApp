<template>
    <div class="position">
        <button @click="addResident">addHardRes</button>
        <div class="font">
            <span>Resident</span>
            <el-button class="fix" @click="addResident">Add New Resident</el-button>
            <el-table
                    :data="tableData"
                    style="width: 1600px"
                    max-height="330px">
                <el-table-column
                        label="First Name"
                        prop="FirstName"
                        sortable
                >
                </el-table-column>

                <el-table-column
                        label="Last Name"
                        prop="LastName"
                        sortable>
                </el-table-column>
                <el-table-column
                        label="Phone"
                        prop="Phone">
                </el-table-column>

                <el-table-column
                        label="Email"
                        prop="Email">
                </el-table-column>

                <el-table-column
                        label="Time Received"
                        prop="Time Received"
                        sortable>
                </el-table-column>

                <el-table-column
                        label="Due"
                        prop="Due"
                        sortable>
                </el-table-column>


                <el-table-column
                        align="center">
                    <template slot="header" slot-scope="scope">
                        <el-input
                                class="InputWidth"
                                v-model="search"
                                placeholder="Search By Name"/>
                    </template>
                    <template slot="header" slot-scope="scope">
                        <el-input
                                class="InputWidth"
                                v-model="search"
                                placeholder="Search By Name"/>
                    </template>
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="updateResident(scope.row)">Update
                        </el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="deleteResident(scope.row)">Delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <div>
            <span class="font">Volunteers</span>
            <el-button @click="addVolunteer">Add New Volunteer</el-button>
            <el-table
                    :data="tableData"
                    style="width: 1600px"
                    max-height="330px">
                <el-table-column
                        label="First Name"
                        prop="FirstName"
                >
                </el-table-column>

                <el-table-column
                        label="Last Name"
                        prop="LastName">
                </el-table-column>
                <el-table-column
                        label="Phone"
                        prop="Phone">
                </el-table-column>

                <el-table-column
                        label="Email"
                        prop="Email">
                </el-table-column>

                <el-table-column
                        label="Time Received"
                        prop="Time Received">
                </el-table-column>


                <el-table-column
                        align="center">
                    <!--                <template slot="header" slot-scope="scope">-->
                    <!--                    <el-input-->
                    <!--                            class="InputWidth"-->
                    <!--                            v-model="search"-->
                    <!--                            placeholder="Search By Name"/>-->
                    <!--                </template>-->
                    <template slot="header" slot-scope="scope">
                        <el-input
                                class="InputWidth"
                                v-model="search"
                                placeholder="Search By Name"/>
                    </template>
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="updateVolunteer(scope.row)">Edit
                        </el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="deleteVolunteer(scope.row)">Delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>


        <el-dialog title="Add New Resident" :visible.sync="dialogFormVisible1" width="40%">
            <el-form label-width="8em" size="small">
                <el-form-item label="First Name">
                    <el-input v-model="resident.FirstName" autocomplete="off"
                              placeholder="FirstName cannot be empty"></el-input>
                </el-form-item>
                <el-form-item label="Last Name">
                    <el-input v-model="resident.LastName" autocomplete="off"
                              placeholder="LastName cannot be empty"></el-input>
                </el-form-item>
                <el-form-item label="Phone">
                    <el-input v-model="resident.Phone" autocomplete="off"
                              placeholder="The Phone Number cannot be empty"></el-input>
                </el-form-item>
                <el-form-item label="Email">
                    <el-input v-model="resident.Email" autocomplete="off"
                              placeholder="Please input the email"></el-input>
                </el-form-item>
                <el-form-item label="Time Received">
                    <el-input v-model="resident.Date" autocomplete="off"
                              placeholder="The date you received the Phone call"></el-input>
                </el-form-item>
                <el-form-item label="Due">
                    <el-input v-model="resident.Due" autocomplete="off" placeholder="Due cannot be empty"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible1 = false">Cancel</el-button>
                <el-button type="primary" @click="addResidentInfo">Add</el-button>
            </div>
        </el-dialog>

        <el-dialog title="Update Resident Info" :visible.sync="dialogFormVisible2" width="40%">
            <el-form label-width="8em" size="small">
                <el-form-item label="FirstName">
                    <el-input v-model="resident.FirstName" autocomplete="off"
                              placeholder="First Name cannot be empty"></el-input>
                </el-form-item>
                <el-form-item label="LastName">
                    <el-input v-model="resident.LastName" autocomplete="off"
                              placeholder="Last Name cannot be empty"></el-input>
                </el-form-item>
                <el-form-item label="Phone">
                    <el-input v-model="resident.Phone" autocomplete="off"
                              placeholder="The Phone Number cannot be empty"></el-input>
                </el-form-item>
                <el-form-item label="Email">
                    <el-input v-model="resident.Email" autocomplete="off"
                              placeholder="Please input the email"></el-input>
                </el-form-item>
                <el-form-item label="Time Received">
                    <el-input v-model="resident.Date" autocomplete="off"
                              placeholder="The date you received the Phone call"></el-input>
                </el-form-item>
                <el-form-item label="Due">
                    <el-input v-model="resident.Due" autocomplete="off" placeholder="Due cannot be empty"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible2 = false">Cancel</el-button>
                <el-button type="primary" @click="updateResidentInfo">Update</el-button>
            </div>
        </el-dialog>

        <el-dialog title="Add New Volunteer" :visible.sync="dialogFormVisible3" width="40%">
            <el-form label-width="8em" size="small">
                <el-form-item label="First Name">
                    <el-input v-model="volunteer.FirstName" autocomplete="off"
                              placeholder="FirstName cannot be empty"></el-input>
                </el-form-item>
                <el-form-item label="Last Name">
                    <el-input v-model="volunteer.LastName" autocomplete="off"
                              placeholder="LastName cannot be empty"></el-input>
                </el-form-item>
                <el-form-item label="Phone">
                    <el-input v-model="volunteer.Phone" autocomplete="off"
                              placeholder="The Phone Number cannot be empty"></el-input>
                </el-form-item>
                <el-form-item label="Email">
                    <el-input v-model="volunteer.Email" autocomplete="off"
                              placeholder="Please input the email"></el-input>
                </el-form-item>
                <el-form-item label="Time Received">
                    <el-input v-model="volunteer.Date" autocomplete="off"
                              placeholder="The date you received the Phone call"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible3 = false">Cancel</el-button>
                <el-button type="primary" @click="addVolunteerInfo">Add</el-button>
            </div>
        </el-dialog>

        <el-dialog title="Update Volunteer Info" :visible.sync="dialogFormVisible4" width="40%">
            <el-form label-width="8em" size="small">
                <el-form-item label="First Name">
                    <el-input v-model="volunteer.FirstName" autocomplete="off"
                              placeholder="FirstName cannot be empty"></el-input>
                </el-form-item>
                <el-form-item label="Last Name">
                    <el-input v-model="volunteer.LastName" autocomplete="off"
                              placeholder="LastName cannot be empty"></el-input>
                </el-form-item>
                <el-form-item label="Phone">
                    <el-input v-model="volunteer.Phone" autocomplete="off"
                              placeholder="The Phone Number cannot be empty"></el-input>
                </el-form-item>
                <el-form-item label="Email">
                    <el-input v-model="volunteer.Email" autocomplete="off"
                              placeholder="Please input the email"></el-input>
                </el-form-item>
                <el-form-item label="Time Received">
                    <el-input v-model="volunteer.Date" autocomplete="off"
                              placeholder="The date you received the Phone call"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible4 = false">Cancel</el-button>
                <el-button type="primary" @click="updateVolunteerInfo">Update</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "one_one",

        data() {
            return {
                dialogFormVisible1: false,
                dialogFormVisible2: false,
                dialogFormVisible3: false,
                dialogFormVisible4: false,

                resident: {},
                volunteer: {},
                tableData: [
                    {
                        FirstName: 'Adam',
                        LastName: 'Adam',
                        Phone: '11111111',
                        Email: "asdad@123.com",
                        Due: "2022-11-22"
                    }, {
                        FirstName: 'Bob',
                        LastName: 'Bob',
                        Phone: '11111111',
                        Email: "asdad@123.com",
                        Due: "2022-11-23"
                    }, {
                        FirstName: 'Cindy',
                        LastName: 'Cindy',
                        Phone: '11111111',
                        Email: "asdad@123.com",
                        Due: "2023-11-22"
                    }, {
                        FirstName: 'David',
                        LastName: 'David',
                        Phone: '11111111',
                        Email: "asdad@123.com",
                        Due: "2022-11-22"
                    }, {
                        FirstName: 'Bob',
                        LastName: 'Bob',
                        Phone: '11111111',
                        Email: "asdad@123.com",
                        Due: "2022-11-23"
                    }, {
                        FirstName: 'Bob',
                        LastName: 'Bob',
                        Phone: '11111111',
                        Email: "asdad@123.com",
                        Due: "2023-11-22"
                    }, {
                        FirstName: 'Bob',
                        LastName: 'Bob',
                        Phone: '11111111',
                        Email: "asdad@123.com",
                        Due: "2022-11-22"
                    }, {
                        FirstName: 'Bob',
                        LastName: 'Bob',
                        Phone: '11111111',
                        Email: "asdad@123.com",
                        Due: "2022-11-23"
                    }, {
                        FirstName: 'Bob',
                        LastName: 'Bob',
                        Phone: '11111111',
                        Email: "asdad@123.com",
                        Due: "2023-11-22"
                    },
                ],

            }
        },
        methods: {
            formatter(row, column) {
                return row.address;
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
            addResident: async function() {
                this.dialogFormVisible1 = true
                this.resident = {}

            let resident = {
                    "id": 4,
                    "first_name": "Ismael",
                    "last_name": "Bencharef",
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
            addResidentInfo() {
            },
            deleteResident() {
                this.$confirm('This will delete this Resident permanently?', 'Sign', {
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'No',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: 'Delete Successfully!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Delete canceled'
                    });
                });
            },
            updateResident(row) {
                this.dialogFormVisible2 = true
                this.resident = Object.assign({}, row)
            },
            updateResidentInfo() {
            },


            addVolunteer() {
                this.dialogFormVisible3 = true
                this.volunteer = {}
            },
            addVolunteerInfo() {
            },
            deleteVolunteer() {
                this.$confirm('This will delete this Volunteer permanently?', 'Sign', {
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'No',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: 'Delete Successfully!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Delete canceled'
                    });
                });
            },
            updateVolunteer(row) {
                this.dialogFormVisible4 = true
                this.volunteer = Object.assign({}, row)
            },
            updateVolunteerInfo() {
            },
        
        }
    }
</script>

<style scoped>

</style>
