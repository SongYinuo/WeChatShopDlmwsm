<template lang="html">
  <section class="detail-content">
    <el-row class="pdT2">
        <el-col :span="22" :offset="1" v-html="content" class="detailsContent brT1"></el-col>
    </el-row>
  </section>
</template>

<script>
import Axios from "axios";
export default {
  props: ["content"],
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="less">
@import "../../assets/detail/details.less";
.detailsContent {
  img {
    width: 100%;
  }
}
</style>
