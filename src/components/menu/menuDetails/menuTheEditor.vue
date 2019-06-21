<template lang="html">
  <el-container >
    <el-header class="tittle" v-model="title" v-for="i in name">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      <!-- 编辑详情 -->
      {{i.title}}
    </el-header>
     
    <el-upload class="upload-demo" action="/Api/Api/img_upload" :on-preview="handlePreview" :on-remove="handleRemove"
      :file-list="img.user_show_url" :data="editor" list-type="picture" >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <!-- <el-form-item prop="file" class="upload-img-form" ref="uploadElement">
            <el-upload :action=InitializationAddImgUrl list-type="picture-card" :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload" :on-progress="onProgress" name="upfile"
              :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :data="editor" accept="image/*"
              :limit="9">
              <el-button slot="trigger">
                <i class="el-icon-plus">添加图片</i>
              </el-button>
            </el-upload>
          </el-form-item> -->
        <div v-for="b in img.user_show_url">
           <img :src="b">
          </div>
  </el-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "编辑详情",
      name: [
        {
          title: "编辑详情"
        }
      ],
      editor: {
        model: "article"
      },
      img: [
      ]
    };
  },
  mounted() {
    this.getImg();
  },
  methods: {
    handleRemove(file, fileList) {
    },
    handlePreview(file) {
    },
    methods: {
      handleRemove(file, fileList) {
      },
      handlePreview(file) {
      },
      getImg(){
        var newId = this.$route.query.id;
        const that = this;
        axios
          .get("/Api/User/article_detail" + "?article_id=" + newId)
          .then(function(res){
        that.img = res.data.data;
      })
      }
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