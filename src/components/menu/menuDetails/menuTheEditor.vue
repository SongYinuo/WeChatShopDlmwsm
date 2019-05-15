<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      编辑详情
    </el-header>
    <el-upload action="http://192.168.1.13/api/user/test" list-type="picture-card"
      :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :limit="3" >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }


  }
</script>

<style lang="less">
  @import "../../../assets/index/indexSwiper.less";
  @import "../../../assets/header.less";
  @import "../../../assets/index/style.less";
  @import "../../../assets/menu/details.less";
  @import "../../../assets/fz.less";
</style>