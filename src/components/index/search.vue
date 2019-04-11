<template lang="html">
    <el-row class="indexSearchRow pdB2">
        <el-col :span="22" :offset="1">
            <el-input class="serachInput" placeholder="在千万商品中搜索" prefix-icon="el-icon-search"  v-model="indexSearch"></el-input>
        </el-col>
    </el-row>
</template>

<style lang="less">
@import "../../assets/fz.less";
.indexSearchRow {
  .serachInput {
    input {
      .fz(font-size, 32);
      color: #b3b3b3;
      border: 0;
      background-color: #e8e8e8;
    }
    .el-input__icon {
      .fz(font-size, 40);
      color: #dab52d;
    }
  }
}
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
