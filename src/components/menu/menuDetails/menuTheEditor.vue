<template>
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>编辑
    </el-header>
    <el-upload
      list-type="picture-card"
      :action="uploadAction"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-progress="onProgress"
      name="upfile"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :data="editor"
      accept="image/*"
      :limit="9">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl">
    </el-dialog>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      uploadAction: "/Api/Api/img_upload",
      dialogImageUrl: "",
      dialogVisible: false,
      editor: {
        model: "article"
      }
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
    beforeAvatarUpload(file) {
      //请求前
      console.log(file);
      const isJPG =
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "image/gif" ||
        file.type === "image/bmp" ||
        file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("仅支持jpg，png，bmp，gif格式的图片！");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    onProgress(event, file, fileList) {
      //请求中
    },
    handleAvatarSuccess(res, file) {
      //请求完成
      console.log(res, file);
      this.dialogImageUrl = URL.createObjectURL(file.raw);
    }
  },
  mounted() {}
};
</script>
<style lang="less">
@import "../../../assets/index/indexSwiper.less";
@import "../../../assets/header.less";
@import "../../../assets/index/style.less";
@import "../../../assets/menu/details.less";
@import "../../../assets/fz.less";
</style>
