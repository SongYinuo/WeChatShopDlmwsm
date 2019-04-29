<template lang="html">

    <el-container>
        <el-header class="tittle">
            <div class="back" @click="$router.go(-1)">
                <i class="el-icon-arrow-left"></i>
            </div>
            红山文化
        </el-header>
        <el-col :span="22" :offset="1">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="攻略" name="first">
                    <el-row>
                        <div v-for="item in items">
                            <router-link :to="{ name:'旅游攻略',query: { id: item.id }}">
                                <el-row class="smallimg">
                                    <el-col :span="12" class="pd">
                                        <p class="menu-strategy ">{{item.text}}</p>
                                        <div class="menu-strategy-small omit">{{item.txt}}</div>
                                        <div class="menuTime">{{item.time}}</div>
                                    </el-col>
                                    <el-col :span="8" :offset="4">
                                        <img :src="item.iconUrl">

                                    </el-col>
                                </el-row>
                            </router-link>
                        </div>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="社区" name="second">
                    <div v-for="array in arrays">
                        <router-link :to="{name: '种草详情',query: { id: array.id }}">
                            <el-row>
                                <el-col :span="22">
                                    <img :src="array.iconUrl" class="fl menuHeader">
                                    <div class="fl menuHead-txt">{{array.text}}</div>
                                    <div class="fl cl menuHead-smtxt omit">{{array.txt}}</div>
                                    <p class="smalltxt-p cl fl">{{array.paragraph}}</p>
                                    <div class="cl smalltxt-div">{{array.article}}</div>

                                </el-col>
                            </el-row>
                            <el-row type="flex" class="row-bg smallimg " justify="space-around">


                                <el-col :span="6" :offset="3"><img :src="array.photoUrl"></el-col>
                                <el-col :span="6"><img :src="array.photoUrl"></el-col>
                                <el-col :span="6"><img :src="array.photoUrl"></el-col>



                            </el-row>

                        </router-link>
                    </div>
                    <div v-for="avideo in avideos">
                        <router-link :to="{name: '种草详情视频',query: { id: avideo.id }}">
                            <el-row>
                                <el-col :span="22">
                                    <img :src="avideo.iconUrl" class="fl menuHeader">
                                    <div class="fl menuHead-txt">{{avideo.text}}</div>
                                    <div class="fl cl menuHead-smtxt">{{avideo.txt}}</div>
                                    <p class="smalltxt-p cl fl">{{avideo.paragraph}}</p>
                                    <div class="cl smalltxt-div">{{avideo.article}}</div>

                                </el-col>
                            </el-row>
                            <el-row :gutter="22" class="mg ">

                                <el-col :span="22" :offset="3" class=" smallimg">
                                    <video :src="avideo.videoUrl" controls="controls" class="menu-video"></video>
                                </el-col>

                            </el-row>

                        </router-link>

                    </div>
                    <div v-for="array in arrays">
                        <router-link :to="{name: '种草详情',query: { id: array.id }}">
                            <el-row>
                                <el-col :span="22">
                                    <img :src="array.iconUrl" class="fl menuHeader">
                                    <div class="fl menuHead-txt">{{array.text}}</div>
                                    <div class="fl cl menuHead-smtxt">{{array.txt}}</div>
                                    <p class="smalltxt-p cl fl">{{array.paragraph}}</p>
                                    <div class="cl smalltxt-div">{{array.article}}</div>

                                </el-col>
                            </el-row>
                            <el-row type="flex" class="row-bg smallimg " justify="space-around">
                                <el-col :span="6" :offset="3"><img :src="array.photoUrl"></el-col>
                                <el-col :span="6"></el-col>
                                <el-col :span="6"></el-col>
                            </el-row>
                        </router-link>
                    </div>
                    <el-col>
                        <router-link :to="{ name:'发布'}">
                            <span class="flbtn"><img src="static/testImg/write@2x.png">发布</span>
                        </router-link>
                    </el-col>
                    <el-row>
                        <el-col :span="24">
                            <div class="emptyFOOT"></div>
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </el-container>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                activeName: 'first',
                items: [
                    {
                        text: "红山玉文化源远流长",
                        txt: "红山文化的玉文化是红山文化的先祖们集体的智慧而集中反",
                        iconUrl: "static/testImg/secondCompany.png",
                        time: "17分钟",
                        state: "审核中",
                        id: "11001"
                    },
                    {
                        text: "红山玉文化源远流长",
                        txt: "红山文化的玉文化是红山文化的先祖们集体的智慧而集中反",
                        iconUrl: "static/testImg/secondCompany.png",
                        time: "17分钟",
                        state: " ",
                        id: "11002"
                    },
                    {
                        text: "红山玉文化源远流长",
                        txt: "红山文化的玉文化是红山文化的先祖们集体的智慧而集中反",
                        iconUrl: "static/testImg/secondCompany.png",
                        time: "17分钟",
                        states: "已审核",
                        id: "11003"
                    }
                ],
                arrays: [
                    {
                        text: "红山玉文化源远流长",
                        txt: "47分钟前",
                        iconUrl: "static/testImg/shunPrincess.png",
                        paragraph: "红山文化|论红山文化的历史性",
                        article: "红山文化的玉文化是红山文化的先祖们集体的智慧而集中反",
                        photoUrl: "static/testImg/secondCompany.png",
                        id: "11004"
                    },

                ],
                avideos: [
                    {
                        text: "红山玉文化源远流长",
                        txt: "47分钟前",
                        iconUrl: "static/testImg/shunPrincess.png",
                        paragraph: "红山文化|论红山文化的历史性",
                        article: "红山文化的玉文化是红山文化的先祖们集体的智慧而集中反",
                        videoUrl: "http://www.runoob.com/try/demo_source/movie.mp4",
                        id: "11005"
                    },

                ]
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>
<style lang="less">
    @import "../../assets/index/style.less";
    @import "../../assets/header.less";
    @import "../../assets/menu/menu.less";

    .el-tabs__nav {
        margin-left: 35%;
    }

    .menuHead-smtxt {
        margin-left: 45px;
        .fz(font-size, 22);
        color: #949494;
        margin-top: -20px;
    }

    .smalltxt-p {
        .fz(font-size, 28);
        color: #313131;
        font-weight: bold;
        margin-left: 45px;
    }

    .menuTime {
        position: absolute;
        bottom: 10px;
        .fz(font-size, 24);
        color: #ADAEAF;
    }
</style>