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
            <el-input type="text" placeholder="作品名" v-model="ruleForm.name" maxlength="50" minlength="1"
              show-word-limit>
            </el-input>
          </el-form-item>
          <el-form-item prop="nameAuthor" required label=" " label-width="10px">
            <el-input type="text" placeholder="作者名" v-model="ruleForm.nameAuthor" maxlength="20" minlength="1"
              show-word-limit>
            </el-input>
          </el-form-item>
          <el-form-item label="尺寸" required class="size" label-width="40px">
            <el-row class="sizes">
              <el-col :span="9">
                <el-form-item prop="date1">
                  <el-input type="number" v-model="ruleForm.date1" style="width: 100%;"></el-input>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="3">cm ×</el-col>
              <el-col :span="9">
                <el-form-item prop="date2">
                  <el-input type="number" v-model="ruleForm.date2" style="width: 100%;"></el-input>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="3">cm</el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="年份" required class="material" label-width="40px">
            <el-col :span="24">
              <el-form-item prop="year1">
                <el-input type="text" placeholder="请输入年份" v-model="ruleForm.year1" style="width: 100%;" maxlength="50"
                  minlength="1"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="材质" required class="material" label-width="40px">
            <el-col :span="24">
              <el-form-item prop="year1">
                <el-input type="text" placeholder="请输入材质" v-model="ruleForm.texture" maxlength="50" minlength="1"
                  show-word-limit></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item prop="messageText" class="messageTexts">
            <el-col :span="24">
              <el-input type="textarea" placeholder="说点什么吧" v-model="ruleForm.messageText" :rows="2" minlength="1"
                show-word-limit>
              </el-input>
            </el-col>
          </el-form-item>
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
        model: "paint"
      },
      title: "上传",
      uploadAction: "/Api/Api/img_upload",
      // editor: {
      //   model: "article"
      // },
      dialogImageUrl: "",
      dialogVisible: false,
      ruleForm: {
        name: "",
        nameAuthor: "",
        date1: "",
        date2: "",
        year1: "",
        texture: "",
        messageText: "",
        // 图片的地址
        imgUrl: {},
        // 后赋值的图片地址
        basic: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入名称",
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
            message: "请输入作者名",
            trigger: "blur"
          },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur"
          }
        ],
        date1: [
          {
            required: true,
            message: "请输入长度数字尺寸cm",
            trigger: "blur"
          }
        ],
        date2: [
          {
            required: true,
            message: "请输入宽度数字尺寸cm",
            trigger: "blur"
          }
        ],
        year1: [
          {
            required: true,
            message: "请输入年限",
            trigger: "blur"
          }
        ],
        texture: [
          {
            required: true,
            message: "请输入材质",
            trigger: "blur"
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
      // console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    beforeAvatarUpload(file) {
      //请求前
      // console.log(file);
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
        that.ruleForm.date1 === "" ||
        that.ruleForm.date2 === "" ||
        that.ruleForm.year1 === "" ||
        that.ruleForm.texture === "" ||
        that.basic === ""
      ) {
        that.$message({
          message: "请输入当前要上传作品所需要的信息",
          type: "warning"
        });
      } else {
        that.$http
          .post("/Api/User/paint_add?", {
            title: that.ruleForm.name,
            img_author: that.ruleForm.nameAuthor,
            img_width: that.ruleForm.date1,
            img_height: that.ruleForm.date2,
            img_material: that.ruleForm.texture,
            img_year: that.ruleForm.year1,
            content: that.ruleForm.messageText,
            thumb: that.basic
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
}
</style>
