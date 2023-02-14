<template>
    <div>
        <table>
            <thead>
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

    table {
        border-collapse: collapse;
        width: 100%;
        text-align: left;
    }

    th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    tr:hover {
        background-color: #f5f5f5;
    }

    th {
        background-color: #4CAF50;
        color: white;
        cursor: pointer;
    }

    .sortable {
        background-color: #e6f2ff;
        cursor: pointer;
        user-select: none;
        padding-right: 20px;
    }

    .sortable:after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 5px;
        vertical-align: middle;
        border-top: 4px solid;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
    }

    .asc:after {
        border-top: 0;
        border-bottom: 4px solid;
    }

    .desc:after {
        border-top: 4px solid;
        border-bottom: 0;
    }

    @media screen and (max-width: 600px) {
        table {
            font-size: 12px;
        }
    }
</style>
