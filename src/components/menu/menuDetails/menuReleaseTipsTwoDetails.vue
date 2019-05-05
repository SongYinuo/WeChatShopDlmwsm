<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      发布心得
    </el-header>
    <el-row class="Release">
      <el-col :span="22" :offset="1">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
          :on-preview="handlePictureCardPreview" :on-remove="handleRemove" class="bgRelease" >
          <i class="el-icon-plus">添加图片</i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-col>
      <el-col :span="22" :offset="1">
        <el-input type="text" placeholder="添加标题" v-model="text" maxlength="10" show-word-limit > 
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input type="textarea" placeholder="说点什么吧" v-model="textarea" maxlength="30" show-word-limit>
        </el-input>
      </el-col>
    </el-row>
     <el-col :span="22" :offset="1">
      <el-button type="warning" class="release" @click="submitUpload">发布</el-button>
    </el-col>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: "",
        dialogVisible: false,
        text: "",
        textarea: "",
        
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submitUpload(){
        console.log(this.text)
      }
    }
  };
</script>
<style lang="less">
  @import "../../../assets/index/indexSwiper.less";
  @import "../../../assets/header.less";
  @import "../../../assets/index/style.less";
  @import "../../../assets/menu/details.less";
  @import "../../../assets/fz.less";
</style>