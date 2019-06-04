<template lang="html">
    <el-row class="indexSearchRow pdB2">
        <el-col :span="22" :offset="1">
          <router-link :to="{ name: '搜索页' }">
               <el-input class="serachInput" placeholder="在千万商品中搜索" prefix-icon="el-icon-search"  v-model="indexSearch"></el-input>
          </router-link>
        </el-col>
    </el-row>
</template>
<style lang="less">
@import "../../assets/fz.less";
@import "../../assets/index/style.less";
@import "../../assets/search/search.less";
</style>
<script>
export default {
  data() {
    return {
      indexSearch: ""
    };
  }
};
</script>
