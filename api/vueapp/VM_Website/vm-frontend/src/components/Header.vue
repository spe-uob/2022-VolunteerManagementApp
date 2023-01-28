<!--header-->
<template>
    <div style="width: 100%">

        <el-menu
                :default-active="this.$route.path"
                class="header"
                mode="horizontal"
                background-color="#447e9b"
                text-color="#fff"
                active-text-color="#FFFFFF"
                menu-trigger="hover"
                router
        >

            <el-submenu index="1" class="subheader">
                <template #title>PhoneCall&Referrals</template>
                <el-menu-item index="/header/1-1">PhoneCall</el-menu-item>
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
                <el-menu-item index="/header/3-1">Action</el-menu-item>
                <el-menu-item index="/header/3-2">Referral</el-menu-item>
                <el-menu-item index="/header/3-3">Requirements</el-menu-item>
                <el-menu-item index="/header/3-4">Wards</el-menu-item>
            </el-submenu>
            <el-menu-item index="/header/4">Menus</el-menu-item>
            <el-menu-item index="/header/5">Users Accounts</el-menu-item>
        </el-menu>
        <div class="box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
</script>

<style>
    .box {
        margin-bottom: 3%;
        margin-left: 10%;
        margin-top: 2%;
        display: block;
        justify-content: center;
        align-items: center;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Arial";
        font-weight: 600;

    }
    .header {
        display: block;
    }

    @media only screen and (max-width: 620px) {
        .header {
            display: none;
        }
    }

    .el-menu--horizontal ul li {
        font-size: 1.5vw;
    }

        .header li {
            font-size: 1.5vw;
        }

        .header li div {
            font-size: 1.5vw;
        }

        .subheader {
            font-size: 1.5vw;
        }







</style>






