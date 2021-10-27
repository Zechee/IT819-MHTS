<template>
  
  <div>
    <el-card class="search-bar"> 
      <el-row :gutter="5">
        <el-col :span="12"><div class="grid-content bg-purple">
          <el-input placeholder="Please enter search content" v-model="keyword" class="input-with-select">
          <el-select placeholder="Searchable fields" v-model="search_type" slot="prepend">
            <el-option label="Product name" value="1"></el-option>
            <el-option label="Product name 2" value="2"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="search()" circle></el-button>
        </el-input></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </el-card>

    <el-card class="datatable">
      <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name">
      </el-table-column>
      <el-table-column
        prop="weight"
        label="Weight">
      </el-table-column>
      <el-table-column
        prop="index"
        label="Index">
      </el-table-column>
      <el-table-column
        prop="hash"
        label="Hash">
      </el-table-column>
      </el-table>
    </el-card>

  </div>

</template>

<script>
import {getProductList} from "@/api/product"
export default {        
  components: {

  },
  data() {
     return {
       row: null,
       tableData: []    
    }
  },
  created() {
    this.getList();
  },
  computed: {
    myrow:{
      get(){
        return this.row
      }
    }
  },
  methods: {
    async getList() {
      const response = await getProductList();
      this.tableData = response.data;
      console.log(response.data);
    },
     onok(){
       console.log('ok');
     }
  }
}
</script>
<style>
.home{
  background-color: #FFF;
}
.toolbar{
  text-align: right;
  padding: 12px;
}
</style>
