<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      发布心得
    </el-header>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-row class="Release">
        <el-col :span="22" :offset="1">
          <el-form-item prop="file" class="upload-img-form" ref="uploadElement">
            <el-upload :action=InitializationAddImgUrl list-type="picture-card" :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload" :on-progress="onProgress" name="upfile"
              :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :data="editor" accept="image/*"
              :limit="9">
              <el-button slot="trigger">
                <i class="el-icon-plus">添加图片</i>
              </el-button>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="22" :offset="1">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="text">
              <el-input type="text" placeholder="添加标题" v-model="ruleForm.text" show-word-limit></el-input>
            </el-form-item>
            <div style="margin: 20px 0;"></div>
            <el-form-item prop="textarea">
              <el-input type="textarea" placeholder="说点什么吧" v-model="ruleForm.textarea" show-word-limit></el-input>
            </el-form-item>
            <el-col :span="24" class="video">
             <div class="videotxt pdB3">视频</div> 
             <el-form-item label="视频" label-width="60px">
              <el-switch v-model="photo" @change="test()"></el-switch>
            </el-form-item>
             <el-upload class="pdB3" action="http://192.168.1.5/api/user/test" list-type="picture-card"
	              :on-preview="handlePictureCardPreview" :on-remove="handleRemove" ref="ruleForm.photo"
	              v-if="this.ruleForm.photo">
	              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
            </el-col>
          </el-form>
        </el-col>
        <el-col :span="22" :offset="1" class="pdT16">
          <el-form-item>
            <el-button type="warning" class="release" @click="submitForm('ruleForm')">发布</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>
<script>
  import axios from "axios";
  export default {
    data() {
      return {
        
        editor: {
          model: "article"
        },
        editorVideo: {
          model: "prove"
        },
        InitializationAddImgUrl: "/Api/Api/img_upload",
        // InitializationAddVideoUrl: "/Api/Api/video_upload",
        qniuyyu: "http://upload-z1.qiniup.com",
        dialogImageUrl: "",
        dialogVisible: false,
        dialogImageUrl: "",
        dialogVisible: false,
        delivery: false,
        photo: false,
        text: "",
        textarea: "",
        file: "",
        ruleForm: {
          text: "",
          textarea: "",
          file: "",
          IUrl: ""
        },
        rules: {
          text: [
            {
              required: true,
              message: "请填要输入的标题信息",
              trigger: "blur"
            },
            {
              min: 1,
              max: 30,
              message: "长度在 1 到 30 个字符",
              trigger: "blur"
            }
          ],
          textarea: [
            {
              required: true,
              message: "请填要输入的文字信息",
              trigger: "blur"
            }
          ]
        }
      };
    },
    methods: {
    
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handleRemoveVideo(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handlePictureCardPreviewVideo(file) {
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
      beforeAvatarUploadVideo(file) {
        //请求前
        console.log(file);
        const isVideo =
          file.type === "image/video" ||
          file.type === "image/mp4"
        const isLt20M = file.size / 1024 / 1024 < 20;
        if (!isVideo) {
          this.$message.error("仅支持video，mp4视频！");
        }
        if (!isLt20M) {
          this.$message.error("上传视频大小不能超过 20MB!");
        }
        return isVideo && isLt20M;
      },
      onProgress(event, file, fileList) {
        //请求中
      },
      onProgressVideo(event, file, fileList) {
        //请求中
      },
      handleAvatarSuccess(res, file) {
        //请求完成
        console.log(res, file);
        this.dialogImageUrl = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccessVideo(res, file) {
        //请求完成
        console.log(res, file);
        this.dialogImageUrl = URL.createObjectURL(file.raw);
      },
      submitForm(formName) {
        // axios({
        //   method: "post",
        //   headers: {
        //     "Content-Type": "application/x-www-form-urlencoded"
        //   },
        //   url: "/Api/User/article_img_add",
        //   formData: {
        //     cat_id: 1004,
        //     title: this.ruleForm.text,
        //     content: this.ruleForm.textarea,
        //     user_url: this.ruleForm.IUrl
        //   }
        // })
        let that = this;
        that.$http
          .post("/Api/User/article_img_add?", {
            title: that.ruleForm.text,
            content: that.ruleForm.textarea,

          })
          .then(function (res) {
            console.log(res);
            // if (this.ruleForm.text === "" || this.ruleForm.textarea === "") {
            //   alert("请填要输入的信息");
            // } else {
            //   alert("提交完成");
            // }
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(this.ruleForm.text);
        console.log(this.ruleForm.textarea);
        console.log(this.ruleForm.IUrl);

      },
      test: function () {
        this.ruleForm.photo = !this.ruleForm.photo
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

  .el-upload-list__item-actions {
    display: none;
  }

  .el-upload-list--picture-card .el-upload-list__item {
    width: 30.6%;
  }

  .Release .el-input__inner,
  .Release .el-textarea__inner {
    font-size: 14px;
    color: #333333;
  }
</style>