<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      鉴定
    </el-header>
    <el-row class="upload">
      <el-col :span="22" :offset="1" class="phptos">
        <el-upload list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove"
          :action=domain :http-request=upqiniu :show-file-list="false" :before-upload="beforeUpload" :limit="9"
          accept="image/*" class="bgRelease">
          <i class="el-icon-plus">添加图片</i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-col>
      <el-col :span="22" :offset="1">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="name" label=" " label-width="10px">
            <el-input type="text" placeholder="古董名称" v-model="ruleForm.name" maxlength="10" show-word-limit>
            </el-input>
          </el-form-item>
          <el-form-item prop="nameAuthor" label=" " label-width="10px">
            <el-input type="text" placeholder="联系人" v-model="ruleForm.nameAuthor" maxlength="10" show-word-limit>
            </el-input>
          </el-form-item>
          <el-form-item label=" " required label-width="10px">
            <el-col :span="24">
              <el-form-item prop="year1">
                <el-input type="text" placeholder="联系方式" v-model="ruleForm.year1" style="width: 100%;"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item prop="messageText" class="messageTexts">
            <el-col :span="24">
              <el-input type="textarea" placeholder="说点什么吧" v-model="ruleForm.messageText" maxlength="50"
                show-word-limit>
              </el-input>
            </el-col>
          </el-form-item>
          <el-col :span="24" class="video">
            <div class="videotxt pdB3">视频</div>
            <el-upload class="pdB3" action="https://jsonplaceholder.typicode.com/posts/" accept="video/*"
              list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-col>
          <el-col :span="22" :offset="1">
            <el-button type="warning" class="releasevideo" @click="submitForm('ruleForm')">发布</el-button>
          </el-col>
        </el-form>
      </el-col>
    </el-row>

  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        imageUrl: "",
        // 七牛云的上传地址，根据自己所在地区选择，我这里是华南区
        domain: "https://upload-z2.qiniup.com",
        // 这是七牛云空间的外链默认域名
        qiniuaddr: "p3z6q1uw1.bkt.clouddn.com",
        dialogImageUrl: "",
        dialogVisible: false,
        ruleForm: {
          name: "",
          nameAuthor: "",
          year1: "",
          region: "",
          messageText: ""
        },
        rules: {
          name: [
            {
              required: true,
              message: "请输入古董",
              trigger: "blur"
            },
            {
              min: 2,
              max: 5,
              message: "长度在 2 到 5 个字符",
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
              min: 2,
              max: 5,
              message: "长度在 2 到 5 个字符",
              trigger: "blur"
            }
          ],
          year1: [
            {
              required: true,
              message: "请输入联系电话",
              trigger: "change"
            }
          ],
          region: [
            {
              required: true,
              message: "请选择活动区域",
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
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submitForm(formName) {
        let that = this;
        that.$http
          .post("/Api/User/prove_add", {
            title: that.ruleForm.name,
            img_author: that.ruleForm.nameAuthor,
            img_width: that.ruleForm.date1,
            img_height: that.ruleForm.date2,
            img_material: that.ruleForm.year1,
            img_year: that.ruleForm.year1,
            content: that.ruleForm.messageText,
            thumb: that.basic
          })
          .then(res => {
            console.log(res)
          })
          .catch(error => { });
      },
      upqiniu(req) {
        console.log(req);
        const config = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        };
        let filetype = "";
        if (req.file.type === "image/png") {
          filetype = "png";
        } else {
          filetype = "jpg";
        }
        // 重命名要上传的文件
        const keyname =
          "lytton" +
          new Date() +
          Math.floor(Math.random() * 100) +
          "." +
          filetype;
        // 从后端获取上传凭证token
        this.axios
          .post("/Article/article_img_add?", formData, config)
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
      },
      // 验证文件合法性
      beforeUpload(file) {
        const isJPG = file.type === "image/jpeg" || file.type === "image/png";
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error("上传头像图片只能是 JPG 格式!");
        }
        if (!isLt2M) {
          this.$message.error("上传头像图片大小不能超过 2MB!");
        }
        return isJPG && isLt2M;
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