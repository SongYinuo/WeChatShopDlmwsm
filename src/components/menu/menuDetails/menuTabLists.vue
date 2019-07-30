<template lang="html">
    <el-container>
      <el-header class="tittle"  v-for="i in name">
        <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
         </div>
           {{i.title}}
     </el-header>
    <el-main class="menuShunPrincess"  >
        <el-row>
            <el-col class="shunPrincessAdvertising">
                 <img :src="menuTab.image">
            </el-col>
        </el-row> 
         <el-row>
        <el-col :span="24">
          <!-- <el-col>
            <div class="tabMore" @click="dialogShow = true">更多</div>
          </el-col>  -->
          <el-tabs v-model="activeName" @tab-click="handleClick"> 
            <el-tab-pane :label="tabs.name" :name="tabs.name" name="first">
               <el-row v-for="(o, index) in tabs.sub_menu">
                 <el-row>
                    <el-col :span="24">
                    <div class="maskHeaderTitle pd4 colorBlack text-alignCenter bgCfff">{{o.name}}</div>
                    <el-col class="listRome fr" :span="6" v-if="index<6">
                      <router-link :to="{ name: '更多列表',query: { id: o.id,title:o.name }  }">
                          查看更多
                      <i class="el-icon-arrow-right"></i>
                      </router-link>
                    </el-col>
                  </el-col>
                </el-row>
                <el-row class="rows">
                  <el-col :span="8" v-for="q in o.goods_list" 
                    class="ShunPrincessRow bgCBlue pdTRBL1">
                    <router-link :to="{ name: '详情页',params: { id: q.goods_id,title:q.goods_name }}">
                      <div class="bgCfff pdTRBL1">
                        <img :src="q.original_img">
                        <div class="shunPrincessProductTitle pd2">{{q.goods_name}}</div>
                        <div class="shunPrincessProductPrice pdB2 colorRed">¥{{q.shop_price}}</div>
                      </div>
                    </router-link>
                  </el-col> 
                 </el-row>  
               </el-row> 
            </el-tab-pane>
          </el-tabs>
        </el-col> 
      </el-row>
       <el-dialog title="分类" :visible.sync="dialogShow" width="70%" top="0">
      </el-dialog> 
    </el-main>
    </el-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dialogShow: false,
      activeName: "first",
      name: [
        {
          title: "栏目分类"
        }
      ],
      menuTab: [],
      tabs: [],
      parent: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    handleClick(tab, event) {},
    getData() {
      var newId = this.$route.query.id;
      const that = this;
      axios
        .get("/Api/Goods/goods_channel_list" + "?cat_id=" + newId)
        .then(function(res) {
          that.menuTab = res.data.data.cat_data;
          that.tabs = res.data.data.channel_list;
        })
        .catch(function(error) {});
    }
  }
};
</script>

<style lang="less">
@import "../../../assets/index/style.less";
@import "../../../assets/header.less";
@import "../../../assets/menu/menu.less";
.el-tabs__header {
  margin: 0;
}
.menuShunPrincess {
  .el-tabs__nav {
    width: 100%;
    margin-left: 0%;
    overflow: hidden;
    background-color: #94bcdc;
  }
  .el-tabs__item {
    .fz(font-size, 28);
    width: 16.6%;
    padding: 0;
    text-align: center;
    color: #f2f2f2;
  }
  .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    width: 16.6%;
  }
  .el-tabs__active-bar {
    display: none;
  }
  .el-tabs__item.is-active {
    color: #f2f2f2;
    background-image: url("../../../../static/testImg/smallDot.png");
    background-repeat: no-repeat;
    background-position: 130% -10%;
  }
  .is-active {
    .fz(font-size, 36);
    font-weight: 600;
  }
  .el-tabs__content {
    background-color: #ffffff;
  }
  .ShunPrincessRow {
    // border: 4px solid #94BCDC;
  }
  .rows {
    border: 4px solid #94bcdc;
  }
  .menuShunPrincess .el-tabs__item:hover {
    .fz(font-size, 36);
    background-color: transparent;
    color: white;
  }
  .menuShunPrincess .el-tabs__item {
    color: white;
  }
  .tabMore {
    width: 50px;
    position: absolute;
    z-index: 1000;
    right: 0;
    margin-top: 18px;
    color: #f2f2f2;
    background-color: #94bcdc;
  }
  .el-dialog {
    position: fixed;
    right: 0;
    height: 100%;
  }
}
</style>