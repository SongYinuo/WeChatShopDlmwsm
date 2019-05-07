<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      鉴定
    </el-header>
    <el-row class="upload">
      <el-col :span="22" :offset="1">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
          :on-preview="handlePictureCardPreview" :on-remove="handleRemove" class="bgRelease">
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

          <!-- <el-form-item label="尺寸" required class="size" label-width="40px">
            <el-row class="sizes">
              <el-col :span="9">
                <el-form-item prop="date1">
                  <el-input type="text" placeholder=" " v-model="ruleForm.date1" style="width: 100%;"></el-input>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="3">cm ×</el-col>
              <el-col :span="9">
                <el-form-item prop="date2">
                  <el-input placeholder=" " v-model="ruleForm.date2" style="width: 100%;"></el-input>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="3">cm</el-col>
            </el-row>
          </el-form-item> -->
          <el-form-item label=" " required  label-width="10px">
            <el-col :span="24">
              <el-form-item prop="year1">
                <el-input type="text" placeholder="联系方式" v-model="ruleForm.year1" style="width: 100%;"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <!-- <el-form-item label="材质" required class="material" label-width="40px">
            <el-col :span="24">
              <el-form-item prop="year1">
                <el-select v-model="ruleForm.region" placeholder="请选择材质" style="width: 100%;">
                  <el-option label="布面油画" value="Oilcanvas"></el-option>
                  <el-option label="彩铅画" value=" colorlead"></el-option>
                  <el-option label="其他" value="other"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-form-item> -->

          <el-form-item prop="messageText" class="messageTexts">
            <el-col :span="24">
              <el-input type="textarea" placeholder="说点什么吧" v-model="ruleForm.messageText" maxlength="50"
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
  export default {
    data() {
      return {
        dialogImageUrl: "",
        dialogVisible: false,
        ruleForm: {
          name: '',
          nameAuthor: '',
          
          year1: '',
          region: '',
          messageText: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入古董', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ], nameAuthor: [
            { required: true, message: '请输入联系人名称', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
           year1: [
            { required: true, message: '请输入联系电话', trigger: 'change' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ], messageText: [
            { required: true, message: '说点什么吧', trigger: 'blur' }
          ]
        },
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
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            console.log(this.ruleForm.name, this.ruleForm.nameAuthor,  this.ruleForm.year1, this.ruleForm.region, this.ruleForm.messageText);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

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