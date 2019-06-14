<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{title}}
    </el-header>
    <el-row class="upload uploadUp">
      <el-col :span="22" :offset="1">
          <el-upload list-type="picture-card" :action="uploadAction" :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload" :on-progress="onProgress" name="upfile"
          :on-preview="handlePictureCardPreview" :on-remove="handleRemove" accept="image/*" :limit="9" :data="editor"
          class="bgRelease">
          <i class="el-icon-plus">添加图片</i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-col>
      <el-col :span="22" :offset="1">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="name" required label=" " label-width="10px">
            <el-input type="text" placeholder="古董名称" v-model="ruleForm.name" maxlength="50" minlength="1" show-word-limit>
            </el-input>
          </el-form-item>
          <el-form-item prop="nameAuthor" required label=" " label-width="10px">
            <el-input type="text" placeholder="联系人" v-model="ruleForm.nameAuthor" maxlength="20" minlength="1" show-word-limit>
            </el-input>
          </el-form-item>
          <el-form-item prop="phone" required  label=" " label-width="10px">
              <el-input type="number" placeholder="联系方式" v-model="ruleForm.phone" style="width: 100%;">
              </el-input>
          </el-form-item>
          <el-form-item prop="messageText" class="messageTexts">
            <el-col :span="24">
              <el-input type="textarea" placeholder="说点什么吧" v-model="ruleForm.messageText" :rows="2" minlength="1"
                show-word-limit>
              </el-input>
            </el-col>
          </el-form-item>
          <!--
          <el-col :span="24" class="video">
            <div class="videotxt pdB3">视频</div>
            <el-upload class="pdB3" :action="uploadVideo" accept="video/*"
              list-type="picture-card" :on-preview="handleVideoCardPreview" :on-remove="handleVideoRemove" :data="editor" 
              :on-success="handleAvatarVideoSuccess" :on-progress="onVideoProgress" name="upfile"
              :limit="limitVideo"> 
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-col>
          -->
          <el-col :span="22" :offset="1">
            <el-button type="warning" class="release" @click="submitForm('ruleForm')">发布</el-button>
          </el-col>
        </el-form>
      </el-col>
    </el-row>

  </el-container>
</template>
<script>
import axios from "axios";
export default {
  inject: ["reload"],
  data() {
    return {
      editor: {
        model: "prove"
      },
      qiniuData: {
        key: "",
        token: ""
      },
      // upload_qiniu_url: "http://upload-z1.qiniup.com",
      limitVideo: 1,
      title: "鉴定",
      uploadAction: "/Api/Api/img_upload",
      // 七牛云的上传地址，根据自己所在地区选择，我这里是华南区
      // domain: "https://upload-z2.qiniup.com",
      // 这是七牛云空间的外链默认域名
      // qiniuaddr: "p3z6q1uw1.bkt.clouddn.com",
      dialogImageUrl: "",
      dialogVisible: false,
      // dialogVideoUrl: "",
      // uploadVideo: "/Api/Api/video_upload",
      ruleForm: {
        name: "",
        nameAuthor: "",
        phone: "",
        messageText: "",
        imgUrl: {},
        basic: {},
        // basicVideo: {},
        // videoUrl: {}
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入古董名称",
            trigger: "blur"
          },
          {
            min: 1,
            max: 50,
            message: "长度在 1 到 50 个字符",
            trigger: "blur"
          }
        ],
        nameAuthor: [
          {
            required: true,
            message: "请输入联系人名称",
            trigger: "blur"
          },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "请输入联系电话手机号码",
            trigger: "change"
          }
        ],
        messageText: [
          {
            required: true,
            message: "说点什么吧",
            trigger: "blur"
          }
        ]
      }
    };
  },
  // created() {
  //   this.getQiniuToken();
  // },
  methods: {
    handleRemove(file, fileList) {
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    beforeAvatarUpload(file) {
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
    },
    handleAvatarSuccess(res, file) {
      //请求完成
      this.dialogImageUrl = URL.createObjectURL(file.raw);
      this.imgUrl = res.data;
      this.imgUrl = this.imgUrl;
      let basic = this.imgUrl;
      basic = basic.substring(0, basic.lastIndexOf(","));
      this.basic = basic;
    },
    submitForm(formName) {
      var that = this;
      if (
        that.ruleForm.name === "" ||
        that.ruleForm.nameAuthor === "" ||
        that.ruleForm.phone === "" ||
        that.ruleForm.messageText === "" ||
        that.basic === ""
      ) {
        that.$message({
          message: "请输入当前要上传作品所需要的信息",
          type: "warning"
        });
      } else {
        that.$http
          .post("/Api/User/prove_add?", {
            title: that.ruleForm.name,
            contact_name: that.ruleForm.nameAuthor,
            contact_phone: that.ruleForm.phone,
            content: that.ruleForm.messageText,
            img_url: that.basic
            // video_url: that.basicVideo
          })
          .then(res => {})
          .catch(error => {});
        this.reload();
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

.uploadUp {
  padding-bottom: 40px;

  .el-form-item {
    padding-bottom: 24px;
  }

  .size .el-input__inner {
    background-color: transparent;
  }

  .material .el-input__inner {
    background-color: transparent;
  }

  .el-dialog {
    width: 100%;
  }

  .bgRelease ul li {
    width: 31.5%;
  }

  .bgRelease ul li:nth-child(3n + 3) {
    margin-right: 0;
  }
  .video .el-upload-list--picture-card .el-upload-list__item {
    width: 100px;
    height: 100px;
  }
  .video
    .el-upload-list--picture-card
    .el-upload-list__item-actions
    .el-upload-list__item-preview {
    display: none;
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.video-avatar {
  width: 400px;
  height: 200px;
}
</style>