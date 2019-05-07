<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      发布心得
    </el-header>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
      <el-row class="Release">
        <el-col :span="22" :offset="1">
          <!-- <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
          :on-preview="handlePictureCardPreview" :on-remove="handleRemove" class="bgRelease" >
          <i class="el-icon-plus">添加图片</i>
        </el-upload> -->
          <el-form-item prop="file" class="upload-img-form" ref="uploadElement">
            <el-upload :action="InitializationAddUrl" ref="upload" :limit="9"
              list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove"
              class="bgRelease" :auto-upload='false' :on-change='changeUpload' multiple :show-file-list="true">
              <el-button slot="trigger">
               <i class="el-icon-plus">添加图片</i>
              </el-button>
            </el-upload>
            <!-- <v-upload/> -->
          </el-form-item>
          <!-- <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog> -->
        </el-col>
        <el-col :span="22" :offset="1">
          <el-form-item prop="text">
            <el-input type="text" placeholder="添加标题" v-model="ruleForm.text" show-word-limit></el-input>
          </el-form-item>
          <div style="margin: 20px 0;"></div>
          <el-form-item prop="textarea">
            <el-input type="textarea" placeholder="说点什么吧" v-model="ruleForm.textarea" show-word-limit></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="22" :offset="1" class="pdT16">
          <el-form-item>
            <el-button type="warning" class="release" @click="submitForm" v-if="this.ruleForm.text!==''&&this.ruleForm.textarea!==''">发布</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
   </el-container>
</template>
<script>
export default {
  // components: {
  //   'v-upload': Upload,
  // },
  data() {
    return {
      InitializationAddUrl: "https://jsonplaceholder.typicode.com/posts",
      dialogImageUrl: "",
      dialogVisible: false,
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
          { required: true, message: "请填要输入的标题信息", trigger: "blur" },
          { min: 1, max: 30, message: "长度在 1 到 30 个字符", trigger: "blur" }
        ],
        textarea: [
          { required: true, message: "请填要输入的文字信息", trigger: "blur" }
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
    changeUpload: function(file, fileList) {
      this.fileList = fileList;
      console.log(this.fileList);
      console.log(file);
      this.$nextTick(() => {
        let upload_list_li = document.getElementsByClassName(
          "el-upload-list"
        )[0].children;
        for (let i = 0; i < upload_list_li.length; i++) {
          let li_a = upload_list_li[i];
          let imgElement = document.createElement("img");
          imgElement.setAttribute("src", fileList[i].url);
          imgElement.setAttribute("style", "max-width:33.3%;padding-left:25%");
          if (li_a.lastElementChild.nodeName !== "IMG") {
            li_a.appendChild(imgElement);
          }
        }
      });
    },
    submitForm(formName) {
      console.log(this.ruleForm.text);
      console.log(this.ruleForm.textarea);
      console.log(this.ruleForm.IUrl);
      if (this.ruleForm.text === "" || this.ruleForm.textarea === "") {
        alert("请填要输入的信息");
      } else {
        alert("提交完成");
      }
      // this.$refs[formName].validate(valid => {
      //   console.log(this.ruleForm.text, this.ruleForm.textarea);
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
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
.Release .el-input__inner, .Release .el-textarea__inner {
  font-size: 14px;
  color: #333333;
}
</style>
