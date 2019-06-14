<template lang="html">
  <section class="detail-content">
    <el-row class="pdT2">
      <el-col :span="24" v-for="k in datas">
        <img :src="k.img" class="contentUrl">
      </el-col>
    </el-row>
  </section>
</template>

<script>
import Axios from 'axios';
export default {
  data() {
    return {
      datas: [
     ]
    };

  },mounted(){
   
  },methods:{
    
  }
};
</script>

<style lang="less">
@import "../../assets/detail/details.less";
</style>
