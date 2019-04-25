<template lang="html">
    <el-container>
      <el-header class="tittle">书画摄影</el-header>
        <el-row class="indexSearchRow pdB2">
           <el-col :span="22" :offset="1">
            <el-input placeholder="请输入内容" v-model="input3" class="serachInput" prefix-icon="el-icon-search"></el-input>
         </el-col>
        <el-col :span="24" v-for="Painting in Paintings" class="PaintingNav">
            <img :src="Painting.photoUrl" class="PtImg ">
            <div class="ptText pd1 ">《{{Painting.text}}》</div>
            <div class="ptTxt">{{Painting.txt}}</div>
            <div class="ptbg"></div>
            <span class="ptAttribute">{{Painting.attribute}}</span>
        </el-col>
     
        <el-col> 
            <router-link :to="{ name:'首页'}">
                <span class="flbtn"><img src="static/testImg/write@2x.png">上传作品</span>
            </router-link>
        </el-col>
        </el-row>
   </el-container>
   
</template>

<script>
export default {
    data() {
        return {
            input3:'',
        Paintings:[
            {
                photoUrl:"static/testImg/youhua.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
                attribute:"热门",
                id:"11001"
            },
              {
                photoUrl:"static/testImg/youhua.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
                attribute:"热门",
                id:"11002"
            },
              {
                photoUrl:"static/testImg/painting-1.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
                attribute:"热门",
                id:"11003"
            },  {
                photoUrl:"static/testImg/painting-1.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
                attribute:"热门",
                id:"11004"
            },  {
                photoUrl:"static/testImg/photo1.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
                attribute:"热门",
                id:"11005"
            },  {
                photoUrl:"static/testImg/photo1.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
                attribute:"热门",
                id:"11006"
            },  {
                photoUrl:"static/testImg/photo1.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
                attribute:"热门",
                id:"11007"
            },  {
                photoUrl:"static/testImg/photo1.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
                attribute:"热门",
                id:"11008"
            }
        ]
        }
    },
};
</script>

<style lang="less" scoped>
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/search/search.less";
@import "../../assets/menu/menu.less";

</style>