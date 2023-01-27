<template>
    <div class="position">
        <div class="font">
            <span>Resident</span>
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
            </el-table>
        </div>

        <div>
            <span class="font">Volunteers</span>
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

            </el-table>
        </div>
    </div>

</template>

<script>
    export default {
        name: "one_one",

        data() {
            return {


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

    }
</script>

<style scoped>
    .margin {
        margin-top: 20px;
    }

    .left {
        position: absolute;
        top: 100px;
        left: 20px;
        display: block;
        margin-right: 20px;
    }

    .right {
        margin-left: 20px;
        position: absolute;
        top: 100px;
        right: 0px;
    }

    .position {
        /*position: absolute;*/
        /*top: 100px;*/
        /*left: 30px;*/
    }

    .InputWidth {
        width: 200px;
    }

    .font {
        font-size: 30px;
        color: black;
        padding-bottom: 20px;
    }

    .p1 {
        position: absolute;
        top: 80px;
        right: 50px;
    }

    span {
        margin-right: 1200px;
    }

    .fix {
        margin-left: 50px;
    }

</style>
