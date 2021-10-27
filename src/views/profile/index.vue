<template>
  <el-card class="settings">
    <h2>System Settings</h2>

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="Username"> {{ form.username }} </el-form-item>
      <el-form-item label="Name">
        <el-input v-model="form.fullname"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password" show-password placeholder="No less than 6 digits (If you do not change your password, just leave this field blank)"></el-input>
      </el-form-item>
      <el-form-item label="Confirm">
        <el-input
          placeholder="Please enter your password again"
          show-password
          v-model="form.password_confirm"
        ></el-input>
      </el-form-item>

      <el-form-item label="Time Zone">
        <el-select v-model="form.timezone" placeholder="Please select a time zone">
          <el-option
            v-for="item in timezones"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <div class="submit">
        <el-button type="primary" @click="saveProfile" round>Save</el-button>
      </div>
    </el-form>
  </el-card>
</template>

<script>
import { getInfo, postProfile } from "@/api/user";
export default {
  name: "Profile",
  created() {
    this.getUserinfo();
  },
  methods: {
    async getUserinfo() {
      const response = await getInfo();
      this.form = response.data;
      console.log(response.data);
    },
    async saveProfile(){
      console.log(this.form);
      if(this.form.password_confirm != "" && this.form.password_confirm === this.form.password){
        const response = await postProfile(this.form);
        this.$message.success(response.data)
        console.log(response.data);
      }else{
        this.$message.error("Two inconsistent password entries! Please re-enter it.")
      }


    }
  },

  data() {
    return {
      form: {},
      timezones: [
        {
          value: "+8",
          label: "China",
        },
        {
          value: "+13",
          label: "New Zealand",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* .el-form-item /deep/ .el-form-item__label {
  line-height: 20px;
} */

.settings {
  max-width: 960px;
}
.submit {
  padding-left: 80px;
}
</style>
