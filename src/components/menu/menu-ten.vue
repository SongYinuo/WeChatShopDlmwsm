<template lang="html">
    <el-container>
      <el-header class="tittle">书画摄影</el-header>
        <el-row class="indexSearchRow pdB2">
           <el-col :span="22" :offset="1">
            <el-input placeholder="请输入内容" v-model="input3" class="serachInput" prefix-icon="el-icon-search"></el-input>
         </el-col>
        <el-col :span="12" v-for="Painting in Paintings" class="PaintingNav">
            <img :src="Painting.photoUrl" class="PtImg pdB2">
            <div class="ptText pd1">{{Painting.text}}</div>
            <div class="ptTxt">{{Painting.txt}}</div>
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
                photoUrl:"static/testImg/painting-1.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
                id:"11001"
            },
              {
                photoUrl:"static/testImg/painting-1.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
                id:"11002"
            },
              {
                photoUrl:"static/testImg/painting-1.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
                id:"11003"
            },  {
                photoUrl:"static/testImg/painting-1.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
                id:"11004"
            },  {
                photoUrl:"static/testImg/photo1.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
                id:"11005"
            },  {
                photoUrl:"static/testImg/photo1.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
                id:"11006"
            },  {
                photoUrl:"static/testImg/photo1.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
                id:"11007"
            },  {
                photoUrl:"static/testImg/photo1.jpg",
                text:"大好河山",
                txt:"作者|简笔画",
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