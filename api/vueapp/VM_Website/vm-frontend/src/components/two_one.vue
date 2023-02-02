<template>
    <div class="residentBox">
        <span class="font">Coordinators</span>
        <el-table
                :data="tableData"
                max-height="500"
        >
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
                    prop="Phone"
                    sortable>
            </el-table-column>

            <el-table-column
                    label="Email"
                    prop="Email"
                    sortable>
            </el-table-column>

        </el-table>
    </div>
</template>
<script>
    export default {
        name: "two_one",
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
    .residentBox {
        width: 75vw;
    }
    .font {
        font-size: 2vw;
        color: Black;
        padding-bottom: 1vw;
    }
    ::v-deep .el-table th {
        font-size: 1vw;
    }

    ::v-deep .el-table tr {
        font-size: 1vw;
    }

    ::v-deep .el-table td, .el-table th {
        font-size: 1vw;
    }

    ::v-deep.el-table thead {
        font-size: 1vw;
    }
    ::v-deep .el-table td, .el-table th {
        font-size: 1vw;
    }

    .font {
        font-size: 2vw;
        color: Black;
        padding-bottom: 1vw;
    }


</style>
