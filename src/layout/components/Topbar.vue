<template>
<div>

  <div class="topr">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        Current User: {{ getUsername() }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="profile">Edit Profile</el-dropdown-item>
        <el-dropdown-item command="logout">Logout</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
    <el-breadcrumb-item>System Setting</el-breadcrumb-item>
  </el-breadcrumb>


</div>
</template>

<script>
import { removeToken } from "@/utils/auth";
import store from "@/store";

export default {
  data() {
    return {
      activeIndex: "1",
    };
  },

  methods: {
    handleCommand(command){
      if(command === "logout"){
        removeToken();
        this.$router.push("login");
      }
      else{
        if (this.$route.path !== "/" + command) {
          this.$router.push(command);
        }
        
      }
    },
    getUsername() {
      return store.getters.fullname;
    },
  },
};
</script>

<style>
</style>