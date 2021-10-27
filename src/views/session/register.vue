<template>
  <el-container>
    <div class="register">
      <el-form
        ref="ruleform"
        :model="ruleform"
        :rules="rules"
        label-width="80px"
      >
        <h2>User Registration</h2>
        <el-form-item label="Username" prop="username">
          <el-input
            placeholder="Please fill in the letters and do not include spaces"
            v-model="ruleform.username"
          ></el-input>
        </el-form-item>

        <el-form-item label="Name" prop="fullname">
          <el-input
            placeholder="Example: John Smith"
            v-model="ruleform.fullname"
          ></el-input>
        </el-form-item>

        <el-form-item label="Password" prop="password">
          <el-input
            placeholder="Password cannot be less than 6 digits"
            v-model="ruleform.password"
          ></el-input>
        </el-form-item>

        <el-form-item label="Confirm" prop="password_confirm">
          <el-input
            placeholder="Please fill in the password again"
            v-model="ruleform.password_confirm"
          ></el-input>
        </el-form-item>

        <el-form-item label="Time Zone">
          <el-select v-model="ruleform.timezone" placeholder="Select time zone">
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
          <el-button type="primary" @click="submitForm('ruleform')" round
            >Sign up</el-button
          >
        </div>
      </el-form>
    </div>
  </el-container>
</template>

<script>
import { validateRealName } from "@/utils/validate";
import { signup } from "@/api/user";

export default {
  name: "Register",
  data() {
    return {
      ruleform: {
        username: "",
        fullname: "",
        password_confirm: "",
        password: "",
        timezone: "+13",
      },
      rules: {
        username: [
          { required: true, message: "Please enter a username", trigger: "blur" },
        ],
        fullname: [{ required: true, message: "Please enter a name", trigger: "blur", validator: validateRealName }],
        password: [{ required: true, message: "Password cannot be empty", trigger: "blur" }],
        password_confirm: [
          { required: true, message: "Password confirmation cannot be empty", trigger: "blur" },
        ],
      },
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
  methods: {
    async save() {
      if (
        this.ruleform.password_confirm != "" &&
        this.ruleform.password != "" &&
        this.ruleform.password_confirm === this.ruleform.password
      ) {
        delete this.ruleform.password_confirm;
        const response = await signup(this.ruleform);
        this.$message({
          message: response.data.message,
          type: "success",
        });
        this.$router.push("login");
      } else {
        this.$message.error("The password cannot be empty or the password is not entered consistently, please re-enter it.");
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.save();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>


<style lang="scss">
.register h2 {
  text-align: center;
}
.register {
  margin: 0 auto;
  width: 500px;
}
.submit {
  padding-left: 80px;
}
</style>
