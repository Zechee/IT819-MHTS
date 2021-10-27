<template>
  <div>
    <el-card class="search-bar"> 
      <el-row :gutter="5">
      <el-col :span="12"><div class="grid-content bg-purple">
          <el-input placeholder="Please enter search content" v-model="keyword" class="input-with-select">
          <el-select placeholder="Searchable fields" v-model="search_type" slot="prepend">
            <el-option label="User name" value="1"></el-option>
            <el-option label="User name 2" value="2"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="search()" circle></el-button>
          </el-input></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      </el-row>    
</el-card>

    <el-card class="datatable">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="id" label="ID" width="150">
        </el-table-column>
        <el-table-column prop="fullname" label="Fullname"> </el-table-column>
        <el-table-column prop="username" label="Username"> </el-table-column>
        <el-table-column prop="email" label="E-mail"> </el-table-column>
        <el-table-column prop="mobile" label="Phone"> </el-table-column>
        <el-table-column prop="timezone" label="Time zone"> </el-table-column>
        <el-table-column prop="admin" label="Admin access"> </el-table-column>
        <el-table-column fixed="right" label="Operation" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">Change</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.page"
        :page-size="pagination.pagesize"
        :total="pagination.total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { getUserList } from "@/api/user";
export default {
  name: "Profile",
  data() {
    return {
      keyword: "",
      search_type: "",
      tableData: [],
      pagination: {
        total: 1,
        pagesize: 20,
        page: 1,
        orderby: "id",
        desc: 0,
      },
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    search(){
      if(this.keyword!==""){
        this.getUserList();
      }
    },
    handleSizeChange() {},
    handleCurrentChange(val) {
      this.pagination.page = val;
      console.log(val);
      this.getUserList();
    },
    handleClick() {},
    async getUserList() {
      if(this.keyword!==""){
        this.pagination.keyword = this.keyword
      }
      const response = await getUserList(this.pagination);
      console.log(this.pagination);
      this.tableData = response.data;
      this.pagination = response.data.pagination;
      console.log(response.data);
    },
  },
};
</script>

<style>
.el-select .el-input {
    width: 130px;
  }
.settings {
  max-width: 960px;
}
.submit {
  padding-left: 80px;
}
</style>