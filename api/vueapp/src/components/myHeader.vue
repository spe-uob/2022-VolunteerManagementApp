<!--header-->
<template>
    <div>

        <el-menu
                class="el-menu-demo header"
                mode="horizontal"
                background-color="#447e9b"
                text-color="#fff"
                active-text-color="#FFFFFF"
                menu-trigger="hover"
        >

            <el-submenu index="1" class="subheader">
                <template #title>Actions&Referrals</template>
                <el-menu-item index="/header/1-1">Actions</el-menu-item>
                <el-menu-item index="/header/1-2">Feedback</el-menu-item>
                <el-menu-item index="/header/1-3">Organisations</el-menu-item>
                <el-menu-item index="/header/1-4">Referrals</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template #title>People</template>
                <el-menu-item index="/header/2-1">Coordinators</el-menu-item>
                <el-menu-item index="/header/2-2">Residents</el-menu-item>
                <el-menu-item index="/header/2-3">Volunteers</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template #title>Categories</template>
                <el-menu-item index="/header/3-1">Action types</el-menu-item>
                <el-menu-item index="/header/3-2">Referral types</el-menu-item>
                <el-menu-item index="/header/3-3">Requirements</el-menu-item>
                <el-menu-item index="/header/3-4">Wards</el-menu-item>
            </el-submenu>
            <el-menu-item index="/header/4">Menus</el-menu-item>
            <el-menu-item index="/header/5">Users Accounts</el-menu-item>
        </el-menu>
        <!-- <div class="box">
            <router-view></router-view>
        </div> -->
    </div>
</template>

<script>
export default {
  name: "myHeader",
};
</script>

<style>
    .box {
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Arial";
        font-weight: 700;

    }

    .header li {
        font-size: 23px;
    }

    .header li div {
        font-size: 23px;
    }

    .subheader {
        font-size: 23px;
    }


    .el-menu--horizontal ul li {
        font-size: 23px;
    }



</style>






