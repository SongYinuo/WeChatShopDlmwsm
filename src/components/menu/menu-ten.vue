<template lang="html">
    <el-container>
        <el-header class="tittle">
            <div class="back" @click="$router.go(-1)">
                <i class="el-icon-arrow-left"></i>
            </div>
            书画摄影
        </el-header>
        <el-row class="indexSearchRow pdB2">
            <el-col :span="22" :offset="1">
                <el-input placeholder="请输入内容" v-model="input3" class="serachInput" prefix-icon="el-icon-search">
                </el-input>
            </el-col>
            <el-col :span="24" v-for="Painting in Paintings" class="PaintingNav">
                <router-link :to="{ name:'书画详情',query: { id: Painting.id }}">
                    <img :src="Painting.thumb" class="PtImg ">
                    <div class="ptText pd1 ">《{{Painting.title}}》</div>
                    <div class="ptTxt">{{Painting.img_author}}|{{Painting.img_material}}</div>

                    <div class="ptbg" v-if="Painting.is_hot===1">
                    <span class="ptAttribute" >热门</span>
                    </div>
                    <div class="ptbg" v-if="Painting.is_hot===-1"  style="display:none;">
                    <span class="ptAttribute" > 热门</span>
                    </div>
                </router-link>
            </el-col>

            <el-col>
                <router-link :to="{ name:'上传'}">
                    <span class="flbtn"><img src="static/testImg/write@2x.png">上传作品</span>
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
                input3: '',
                Paintings: [
                    // {
                    //     photoUrl: "static/testImg/youhua.jpg",
                    //     text: "大好河山",
                    //     txt: "作者|简笔画",
                    //     attribute: "热门",
                    //     id: "11001"
                    // },
                    // {
                    //     photoUrl: "static/testImg/youhua.jpg",
                    //     text: "大好河山",
                    //     txt: "作者|简笔画",
                    //     attribute: "热门",
                    //     id: "11002"
                    // },
                    // {
                    //     photoUrl: "static/testImg/painting-1.jpg",
                    //     text: "大好河山",
                    //     txt: "作者|简笔画",
                    //     attribute: "热门",
                    //     id: "11003"
                    // }, {
                    //     photoUrl: "static/testImg/painting-1.jpg",
                    //     text: "大好河山",
                    //     txt: "作者|简笔画",
                    //     attribute: "热门",
                    //     id: "11004"
                    // }, {
                    //     photoUrl: "static/testImg/photo1.jpg",
                    //     text: "大好河山",
                    //     txt: "作者|简笔画",
                    //     attribute: "热门",
                    //     id: "11005"
                    // }, {
                    //     photoUrl: "static/testImg/photo1.jpg",
                    //     text: "大好河山",
                    //     txt: "作者|简笔画",
                    //     attribute: "热门",
                    //     id: "11006"
                    // }, {
                    //     photoUrl: "static/testImg/photo1.jpg",
                    //     text: "大好河山",
                    //     txt: "作者|简笔画",
                    //     attribute: "热门",
                    //     id: "11007"
                    // }, {
                    //     photoUrl: "static/testImg/photo1.jpg",
                    //     text: "大好河山",
                    //     txt: "作者|简笔画",
                    //     attribute: "热门",
                    //     id: "11008"
                    // }
                ]
            }
        },mounted(){
            this.getData();
            
        },methods:{
            getData(){
                const that = this;
                axios
                .get("/php/Article/paint_list")
                .then(function(res){
                    console.log(res);
                    that.Paintings = res.data.data;
                }).catch(function(error){
                    console.log(error);
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "../../assets/index/style.less";
    @import "../../assets/header.less";
    @import "../../assets/search/search.less";
    @import "../../assets/menu/menu.less";
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
}.PaintingNav .ptbg[data-v-5a4365ff]{
        top: 0.6vw;
}
</style>