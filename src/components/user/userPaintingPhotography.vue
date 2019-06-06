<template lang="html">
    <el-container>
        <el-header class="tittle">
            <div class="back" @click="$router.go(-1)">
                <i class="el-icon-arrow-left"></i>
            </div>
            {{title}}
        </el-header>
        <el-row class="indexSearchRow pdB2">
            <el-col :span="22" :offset="1">
                <el-col :span="24" class="num">书画摄影（{{num.count}}）</el-col>
            </el-col>
            <el-col :span="24" v-for="Painting in Paintings" class="PaintingNav">
                <router-link :to="{ name:'我的书画详情',query: {  id: Painting.id,title:Painting.title  }}">
                    <img :src="Painting.thumb" class="PtImg ">
                    <div class="ptText pd1 ">{{Painting.title}}</div>
                    <div class="ptTxt">{{Painting.img_author}}|{{Painting.img_material}}</div>
                   
                    <div class="ptbg" v-if="Painting.is_hot===1">
                    <span class="ptAttribute" >热门</span>
                    </div>
                    <div class="ptbg" v-if="Painting.is_hot===-1"  style="display:none;">
                    <span class="ptAttribute" > 热门</span>
                    </div>
                    <div  v-if="Painting.is_confirm===1">
                    <span class="audit" >审核中</span>
                    </div>
                    <div  v-if="Painting.is_confirm===-1">
                    <span class="audit">审核未通过</span>
                    </div>
                    <div  v-if="Painting.is_confirm===2" style="display:none;">
                    <span >审核通过</span>
                    </div>
                </router-link>
            </el-col>
        </el-row>
    </el-container>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "书画摄影",
      input3: "",
      Paintings: [],
      num: []
    };
  },
  mounted() {
    this.getData();
    this.getNum();
  },
  methods: {
    getData() {
      const that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/paint_list"
      })
        .then(function(res) {
          // console.log(res)
          that.Paintings = res.data.data;
          // console.log(that.Paintings)
        })
        .catch(function(error) {});

    },
    getNum() {
      const that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/paint_list"
      })
        .then(function(res) {
          that.num = res.data;
        })
        .catch(function(error) {});
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/search/search.less";
@import "../../assets/menu/menu.less";
.PaintingNav .ptAttribute[data-v-370c618c] {
  font-size: 11px;
  position: absolute;
  left: -15px;
  width: 25px;
  top: -29px;
  color: #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-185deg);
}
.PaintingNav .ptbg[data-v-370c618c] {
  top: 0.7vw;
}
.num {
  .fz(font-size, 34);
  color: #313131;
  font-weight: bold;
}
.audit {
  position: absolute;
  color: #ee4040;
  right: 10px;
  top: 15px;
  .fz(font-size, 24);
}
</style>