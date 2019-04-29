<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      发布分享
    </el-header>
    <el-row class="share">
      <el-col :span="22" :offset="1">
        <el-input type="textarea" :rows="2" placeholder="说点什么吧" v-model="textarea">

        </el-input>
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
          :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>

      </el-col>

    </el-row>
    <el-col :span="22" :offset="1">
      <el-button type="warning" class="release">发布</el-button>
    </el-col>

  </el-container>
</template>
<script>

  export default {
    data() {
      return {
        textarea: "",
        dialogImageUrl: '',
        dialogVisible: false

      };

    }, methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }


  };
</script>
<style lang="less">
  @import "../../../assets/index/indexSwiper.less";
  @import "../../../assets/header.less";
  @import "../../../assets/index/style.less";
  @import "../../../assets/menu/details.less";

  .el-textarea__inner {
    border: 0px;
    border-radius: 4px;
    height: 120px;
  }

  .el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    width: 75px;
    height: 100px;
    line-height: 100px;
    vertical-align: top;
    position: absolute;
    right: 20px;
    top: 0;
  }

  .el-upload-list--picture-card .el-upload-list__item {
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 75px;
    height: 100px;
    margin: 0 8px 8px 0;
    display: inline-block;
    position: absolute;
    right: 110px;
    top: 0;
  }

  .el-upload-list--picture-card .el-progress {
    top: 10%;
    left: 10%;
    -webkit-transform: translate(-10%, -10%);
    transform: translate(-10%, -10%);
    bottom: auto;
    width: 5px;
  }

  .el-upload-list--picture-card .el-upload-list__item-actions {
    position: absolute;
    width: 25px;
    height: 25px;
    right: 110px;
    top: 0;
    cursor: default;
    text-align: center;
    color: #fff;
    opacity: 0;
    font-size: 20px;
    background-color: rgba(0, 0, 0, .5);
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
  }

  .el-upload-list--picture-card .el-progress {
    top: 10%;
    left: 10%;
    transform: translate(-10%, -10%);
    bottom: auto;
    width: 5px;
  }
</style>