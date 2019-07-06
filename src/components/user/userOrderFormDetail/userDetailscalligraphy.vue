<template lang="html">
  <el-container>
    <el-header class="tittle" v-model="i.title" v-for="i in name">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{i.title}}
    </el-header>
    <el-row class="book">
      <el-col :span="24" >
        <div class="likePo">
          <img :src="books.thumb_show" class="bookimg">
        </div>
        <div class="bookTittle pdT6">{{books.title}}</div>
        <div class="bookTxt pdT6 text-alignCenter">{{books.img_author}}|{{books.img_width}}×{{books.img_height}}|{{books.img_year}}</div>
        <div class="bookTxt pdT6 text-alignCenter">{{books.img_material}}</div>
        <div class="bookDetails " v-html="books.content">{{books.content}}</div>
        <div class="ptbg" v-if="books.is_hot===1">
            <span class="ptAttribute">热门</span>
        </div>
        <div class="ptbg" v-if="books.is_hot===-1" style="display:none;">
            <span class="ptAttribute">热门</span>
        </div>
        <el-row>
          <el-col :span="22" :offset="1" class="bookNav">
            <el-col :span="3" :offset="1" class="bookPortrait">
              <img :src="books.author_head_pic">
            </el-col>
            <el-col :span="18" :offset="1">
              <span class="bookPhotoTxt">{{books.author}}</span>
            </el-col>

          </el-col>
        </el-row>
        <el-button icon="el-icon-more" circle type="text" @click="dialogVisible = true"></el-button>
      <el-dialog title="操作" :visible.sync="dialogVisible" width="100%">
        <span slot="footer" class="dialog-footer">
          <el-row>
            <el-col :span="22" :offset="1">
              <!-- <el-col :span="4" :offset="2">
                <router-link :to="{name:'书画编辑详情',query: { id: books.id,title:books.title }}">
                  <div type="primary" @click="dialogVisible = false" class="icon">
                    <i class="el-icon-edit"></i>
                  </div>
                </router-link>
                <div class="del">编辑</div>
              </el-col> -->
              <el-col :span="4" :offset="2">
                <div type="danger" @click="submitForm()" class="icon">
                  <i class="el-icon-delete"></i>
                </div>
                <div class="del">删除</div>
              </el-col>
            </el-col>
          </el-row>
        </span>
      </el-dialog>
      </el-col>
    </el-row>

  </el-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dialogVisible: false,
      article_ids: "",
      name: [
        {
          title: "我的书画详情"
        }
      ],
      books: []
    };
  },
  mounted() {
    this.getImg();
  },
  methods: {
    getImg() {
      var newId = this.$route.query.id;
      const that = this;
      axios
        .get("/Api/User/paint_detail" + "?id=" + newId)
        .then(function(res) {
          that.article_ids = res.data.data.is_collect;
          that.books = res.data.data;
        })
        .catch(function(error) {});
    },
    submitForm(formName) {
      var newId = this.$route.query.id;
      let that = this;
      that.$http.post("/Api/User/paint_delete" + "?id=" + newId, {
        id: newId
      });
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less">
@import "../../../assets/index/indexSwiper.less";
@import "../../../assets/header.less";
@import "../../../assets/index/style.less";
@import "../../../assets/menu/details.less";
.book .ptAttribute {
  font-size: 11px;
  position: absolute;
  left: -37px;
  top: -28px;
  color: #fff;
  z-index: 99;
  width: 50px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-180deg);
}
.book .bookPortrait img {
  border-radius: 50px;
  margin-bottom: 10px;
}
.book .bookPhotoTxt {
  line-height: 40px;
}
.menu-video {
  width: 100%;
  height: 100%;
}

.of {
  overflow: hidden;
  margin-top: 20px;
}

.menu-video {
  height: 310px;
  width: 100%;
}

.swimg {
  width: 100%;
}
.el-carousel__indicators {
  display: none;
}
img {
  width: 100%;
}
.dialog-footer .shardImg img {
  width: 24px;
  height: 24px;
}

.dialog-footer .shardText {
  .fz(font-size, 24);
}
.icon {
  width: 35px;
  height: 35px;
  background-color: #dcdfe6;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
}
.dialog-footer .el-button--primary,
.dialog-footer .el-button--danger {
  border-radius: 50%;
  border: 1px solid #dcdfe6;
  color: #fff;
  background: #dcdfe6;
  text-align: center;
  width: 100%;
}
.el-dialog__footer {
  text-align: left;
}
.del {
  text-align: right;
  width: 30px;
  .fz(font-size, 24);
  color: #999999;
}
.el-dialog__title {
  line-height: 24px;
  .fz(font-size, 24);
  color: #999999;
}
.el-button.is-circle {
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 99;
  background: #fff;
}
.el-dialog {
  position: fixed;
  left: 0;
  bottom: 0;
  margin: 0;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  width: 50%;
}
.el-dialog__body {
  padding: 0 0px;
  color: #606266;
  font-size: 14px;
}
</style>