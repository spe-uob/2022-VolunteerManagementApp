<template>
    <div>
        <table style="margin-left: 2rem">
            <thead>
            <tr>
                <th colspan="6" class="titleFont">Actions</th>
            </tr>
            <tr>
                <th class="sortable">Help Type</th>
                <th class="sortable">Resident</th>
                <th class="sortable">Due</th>
                <th class="sortable">Status</th>
                <th class="sortable">Assigned</th>
                <th class="sortable">Priority</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Help Type 1</td>
                <td>Resident 1</td>
                <td>Due Date 1</td>
                <td>Status 1</td>
                <td>Assigned To 1</td>
                <td>Priority 1</td>
            </tr>
            <tr>
                <td>Help Type 2</td>
                <td>Resident 2</td>
                <td>Due Date 2</td>
                <td>Status 2</td>
                <td>Assigned To 2</td>
                <td>Priority 2</td>
            </tr>
            </tbody>
        </table>

        <table style="margin-left: 2rem">
            <thead>
            <tr>
                <th colspan="6" class="titleFont">Referrals</th>
            </tr>
            <tr>
                <th class="sortable">Help Type</th>
                <th class="sortable">Resident</th>
                <th class="sortable">Due</th>
                <th class="sortable">Status</th>
                <th class="sortable">Assigned</th>
                <th class="sortable">Priority</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Help Type 3</td>
                <td>Resident 3</td>
                <td>Due Date 3</td>
                <td>Status 3</td>
                <td>Assigned To 3</td>
                <td>Priority 3</td>
            </tr>
            <tr>
                <td>Help Type 4</td>
                <td>Resident 4</td>
                <td>Due Date 4</td>
                <td>Status 4</td>
                <td>Assigned To 4</td>
                <td>Priority 4</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "All_Activity"

    }
</script>

<style scoped>

    /*.gap{*/
    /*    padding: 100px;*/
    /*}*/
    :root {
        --font-size: 16px;
        --border-radius: 4px;
        --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    table {
        border-collapse: collapse;
        width: 100%;
        max-width: 60rem;
        margin: 1rem;
        float: left;
        font-size: var(--font-size);
        background-color: #f8f8f8;
        border-radius: var(--border-radius);
        overflow: hidden;
        box-shadow: var(--box-shadow);
        border-radius: 5px;
    }

    th {
        background-color: #F5F5F5;
        font-weight: bold;
        text-align: left;
        padding: 0.75rem 1rem;
        border-bottom: 1px solid #ddd;
        cursor: pointer;
    }

    th:hover {
        background-color:  #e6e6e6;
    }

    th.sortable:hover {
        background-color:  #e6e6e6;
    }

    th.sortable:after {
        content: "\25B2";
        margin-left: 5px;
    }

    th.sortable.asc:after {
        content: "\25BC";
    }

    td {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid #ddd;
        color: #333;
    }

    tr:hover {
        background-color: #e6e6e6;
    }

    @media (min-width: 30em) {
        table {
            font-size: 1vw;
            margin: 2rem auto;
            max-width: 70%;
        }
    }

    @media (min-width: 48em) {
        table {
            font-size: 1.125vw;
            max-width: 50%;
        }
    }

    @media (min-width: 62em) {
        table {
            font-size: 1.25vw;
            max-width: 33.33%;
        }
    }

    @media (min-width: 75em) {
        table {
            font-size: 1.375vw;
            max-width: 25%;
        }
    }
    .titleFont{
        font-size: 2vw;
    }


</style>
