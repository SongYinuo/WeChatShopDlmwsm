<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{title}}
    </el-header>
    <el-row class="indexSearchRow pdB2">
      <el-col>
        <el-col :span="22" :offset="1">
          <!-- <router-link :to="{ name: '搜索页' }">
            <el-input placeholder="请输入内容" v-model="input3" class="serachInput" prefix-icon="el-icon-search">
            </el-input>
          </router-link> -->
          <!-- <el-form ref="form" :model="form">
              <el-form-item>
                <el-input placeholder="请输入内容" v-model="form.input" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search" @click="serachBtn"></el-button>
                </el-input>
              </el-form-item>
            </el-form> -->
        </el-col>
        <el-col :span="24" v-for="Painting in Paintings" class="PaintingNav">
          <router-link :to="{ name:'书画详情',query: { id: Painting.id,title:Painting.title  }}">
            <img :src="Painting.thumb" class="PtImg ">
            <div class="ptText pd1 ">《{{Painting.title}}》</div>
            <div class="ptTxt">{{Painting.img_author}}|{{Painting.img_material}}</div>

            <span v-if="Painting.is_hot===1" class="qq" >
              <!-- <span class="ptAttribute">热门</span> -->
              <img :src="qqqqa">
            </span>
            <span v-if="Painting.is_hot===-1" style="display:none;" class="qq">
              <img :src="qqqqa">
              <!-- <span class="ptAttribute"> 热门</span> -->
            </span>
          </router-link>
        </el-col>
      </el-col>
      <el-col>
        <router-link :to="{ name:'上传'}">
          <span class="flbtn"><img src="static/testImg/write@2x.png">上传作品</span>
        </router-link>
      </el-col>
        <el-main class="hotShop" style="padding: 1px;">
          <el-row>
            <el-col :span="12" v-for="item in goods" class="hotShopRow pdTRBL2">
              <router-link :to="{ name: '详情页', params: { id: item.id } }">
                <img :src="item.thumb">
                <div class="pd2 overHidden">《{{item.title}}》</div>
              </router-link>
            </el-col>
          </el-row>
        </el-main>
    </el-row>
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  inject: ["reload"],
  data() {
    return {
      title: "书画摄影",
      qqqqa: '/static/testImg/leftHot@2x.png',
      input3: "",
      Paintings: [],
      form: {
        input: ""
      },
      goods: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Article/paint_list"
      })
        .then(function(res) {
          that.Paintings = res.data.data;
        })
        .catch(function(error) {});
    },
    serachBtn() {
      const that = this;
      if (that.form.input === "") {
        that.$message({
          message: "请输入当前要搜索的文字",
          type: "warning"
        });
      } else {
        axios
          .get("/Api/Article/paint_list?keywords=" + that.form.input)
          .then(function(res) {
            this.reload();
            that.goods = res.data.data.goods_list;
          })
          .catch(function(error) {});
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/search/search.less";
@import "../../assets/menu/menu.less";
.indexSearchRow {
  .ptbg .ptAttribute[data-v-5a4365ff] {
    font-size: 9px;
    position: absolute;
    left: -40px;
    top: -29px;
    color: #fff;
    width: 50px;
    /* -webkit-transform: rotate(-45deg); */
    transform: rotate(-180deg);
    z-index: 99;
  }

  .PaintingNav .ptbg[data-v-5a4365ff] {
    top: 0.6vw;
    position: absolute;
  }
  .qq 
  img{
    width: 40px;
    height: 40px;
    position: absolute; 
    left:0px; 
    top:6px
  }
}
</style>
