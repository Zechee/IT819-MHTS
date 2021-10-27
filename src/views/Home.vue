<template>
  <el-card class="home">
  <button>Contract</button>
  <button>Balance</button>
  
  </el-card>

</template>

<script>
// import Web3 from 'web3'
// Vue.prototype.Web3 = Web3

import {getListC} from "@/api/list"
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
      const response = await getListC();
      this.tableData = response.data.list;
      console.log(response.data);
    },
     onok(){
       console.log('ok');
     },
     
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
