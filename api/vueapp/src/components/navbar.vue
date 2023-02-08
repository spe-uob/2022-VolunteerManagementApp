<!--header-->
<template>
    <nav>
        <el-menu
                :default-active="this.$route.path"
                class="el-menu-demo header"
                mode="horizontal"
                background-color="#374863"
                text-color="#fff"
                active-text-color="#FFFFFF"
                menu-trigger="hover"
                router
        >

            <el-submenu index="1" class="subheader">
                <template #title>PhoneCall & Referrals</template>
                <el-menu-item index="/one_one">PhoneCall</el-menu-item>
                <el-menu-item index="/one_two">Feedback</el-menu-item>
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
        <div class="box">
            <router-view></router-view>
        </div>
    </nav>
</template>

<script>
import { Menu, Submenu, MenuItem } from 'element-ui'
export default {
    components: {
    'el-menu': Menu,
    'el-submenu': Submenu,
    'el-menu-item': MenuItem
  },
  name: 'navbar',
  methods: {

  }
}
</script>

<style>
  @import 'element-ui/lib/theme-chalk/index.css';
</style>






