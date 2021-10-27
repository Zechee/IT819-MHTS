<template>
  <el-container>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple-dark">
              <el-link type="primary"> <a href="#/login">Admin Login</a> </el-link>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
              <el-link type="primary"> <a href="#/login">Feedback</a> </el-link>
          </div>
        </el-col >
      </el-row>


      <el-row>
          <el-col :span="24">
            <div class="title-container">
                <h3 class="title"><span>Welcome to use Manuka Honey Traceability System</span></h3>
            </div>
          </el-col>
      </el-row>

      <el-row>
          <div>
              <el-col :span="8">
                <h4>Product SN :</h4>
              </el-col>

              <el-col :span="16">
                <el-input
                  placeholder="Please input product SN"
                  v-model="input"
                  clearable>
                </el-input>
              </el-col>

              <el-col :span="8">
                <el-button 
                  type="primary" 
                  icon="el-icon-search">
                  Query
                </el-button>
              </el-col>

          </div>
      </el-row>

      <el-row>
          <el-col :span="12">
          <div>
            <p>Please enter the serial number (SN) of the product</p>


            <!-- <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload> -->

          </div>
          </el-col>

      </el-row>

      <el-row>
          <el-col>
              <span type="primary">Query History</span>
              <el-divider></el-divider>
              <span>12345678</span>
          </el-col>
      </el-row>


  </el-container>


</template>

<script>
import Vue from 'vue';
import { Row,Col } from 'element-ui';
Vue.use( Row,Col );

export default {

    data() {
      return {
        input: '',
        imageUrl: ''
      }
    },
    methods: {
        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }

}
</script>


<style>
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
    width: 100px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>