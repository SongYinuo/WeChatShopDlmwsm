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
         <el-form :model="ruleForm"  ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="name" >
        <el-input type="textarea" :rows="2" placeholder="说点什么吧" v-model="ruleForm.name">
        </el-input>
        </el-form-item>
        <el-upload :action=domain list-type="picture-card" accept="video/*"
          :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-change="changeUpload">
          <i class="el-icon-plus"></i>
        </el-upload>
         <el-col :span="22" :offset="1">
      <el-button type="warning" class="release"  @click="submitForm('ruleForm')">发布</el-button>
    </el-col>
        </el-form>
      </el-col>

    </el-row>
   

  </el-container>
</template>
<script>
 import axios from "axios";
export default {
  data() {
    return {
      imageUrl: "",
      textarea: "",
      domain: "https://upload-z2.qiniup.com",
      qiniuaddr: "p3z6q1uw1.bkt.clouddn.com",
      dialogImageUrl: "",
      dialogVisible: false,
      ruleForm: {
        name: ""
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
     handleRemove(file, fileList) {
      console.log(file, fileList);
    }, 
    changeUpload: function(file, fileList) {
      this.fileList = fileList;
      console.log(this.fileList);
      console.log(file);},
    submitForm(formName) {
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     // alert('submit!');
      //     console.log(this.ruleForm.name);
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
      let that = this;
      that.$http
      .post("/Api/User/article_video_add",{
        content: that.ruleForm.name,
      })
      
    },
    upqiniu(req) {
        console.log(req);
        const config = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        };
        this.axios
          .post("/Api/User/article_video_add", formData, config)
          .then(res => {
            console.log(res, res.url);
            const formdata = new FormData();
            formdata.append("file", req.file);
            formdata.append("token", res.data);
            formdata.append("key", keyname);
            // 获取到凭证之后再将文件上传到七牛云空间
            this.axios.post(this.domain, formdata, config).then(res => {
              this.imageUrl = "http://" + this.qiniuaddr + "/" + res.data.key;
              console.log(this.imageUrl);
            });
          });
        },beforeUpload(file){
      const isMP4 = file.type === "image/jpeg" ;
      const isLt8M = file.size / 1024 / 1024 < 8;
      if (!isMP4){
        this.$message.error("上传头像图片只能是 MP4 格式!");
      }if (!isLt8M){
        this.$message.error("上传头像图片大小不能超过 8MB!");
      }
      return isMP4 && isLt8M;
    },
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
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}

.el-upload-list--picture-card .el-progress {
  top: 10%;
  left: 10%;
  transform: translate(-10%, -10%);
  bottom: auto;
  width: 5px;
}
</style>