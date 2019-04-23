<template lang="html">
    <!-- <mt-header title="公司排名">
    </mt-header> -->
    <el-container>
        <el-header class="tittle">排名信息</el-header>
        <el-main class="companyRank">
            <el-row  class="companyRankRow pd2" v-for="k in companyRanksArray">
                <el-col :span="22" :offset="1" class="brB1 pdB3">
                    <el-col :span="6" class="companyRankRowImgLogo">
                        <img :src="k.companyLogo">
                    </el-col>
                    <span class="companyRanksIcon">
                        <img src="../../../static/testImg/first.png" v-if="k.rank === 1 ">
                        <img src="../../../static/testImg/second.png" v-if="k.rank === 2 ">
                        <img src="../../../static/testImg/thirdly.png" v-if="k.rank === 3 ">
                    </span>
                    <router-link :to="{ name: '公司排名详情', params: { id: k.id } }">
                        <el-col :span="17" :offset="1" class="companyText">
                            <div class="companyName overHidden lh1-6 pdT1">{{k.companyName}}</div>
                            <div class="companyCaption colorGray mgT1">{{k.companyCaption}}</div>
                        </el-col>
                    </router-link>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            companyRanksArray: [
                { id: 'companyRanks1000001', rank: 1, companyLogo: 'static/testImg/company.jpg', companyName: '哈尔滨鼎龙信息科技', companyCaption: '哈尔滨鼎龙科技有限公司成立于2006年，专注中小企业提供科技互联网的技术数据营......'  },
                { id: 'companyRanks1000002', rank: 2, companyLogo: 'static/testImg/company.jpg', companyName: '1哈尔滨鼎龙信息科技', companyCaption: '1哈尔滨鼎龙科技有限公司成立于2006年，专注中小企业提供科技互联网的技术数据营......'  },
                { id: 'companyRanks1000003', rank: 3, companyLogo: 'static/testImg/company.jpg', companyName: '2哈尔滨鼎龙信息科技', companyCaption: '2哈尔滨鼎龙科技有限公司成立于2006年，专注中小企业提供科技互联网的技术数据营......'  },
                { id: 'companyRanks1000004', rank: 4, companyLogo: 'static/testImg/company.jpg', companyName: '3哈尔滨鼎龙信息科技', companyCaption: '3哈尔滨鼎龙科技有限公司成立于2006年，专注中小企业提供科技互联网的技术数据营......'  },
                { id: 'companyRanks1000005', rank: 5, companyLogo: 'static/testImg/company.jpg', companyName: '4哈尔滨鼎龙信息科技', companyCaption: '4哈尔滨鼎龙科技有限公司成立于2006年，专注中小企业提供科技互联网的技术数据营......'  },
                { id: 'companyRanks1000006', rank: 6, companyLogo: 'static/testImg/company.jpg', companyName: '5哈尔滨鼎龙信息科技', companyCaption: '5哈尔滨鼎龙科技有限公司成立于2006年，专注中小企业提供科技互联网的技术数据营......'  },
                { id: 'companyRanks1000007', rank: 7, companyLogo: 'static/testImg/company.jpg', companyName: '6哈尔滨鼎龙信息科技', companyCaption: '6哈尔滨鼎龙科技有限公司成立于2006年，专注中小企业提供科技互联网的技术数据营......'  }
            ]   
        }
    }
};
</script>

<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
.el-main {
  padding: 0;
}
.companyRank {
    .companyRankRow {
        .companyRankRowImgLogo {
            img {
                width: 100%;
                border-radius: 8px;
            }
        }
        .companyRanksIcon {
            position: absolute;
            top: 12px;
            left: 20px;
            img {
                width: 24px;
                height: 24px;
            }
        }
    }
    .companyText {
        .companyName {
            .fz(font-size, 32);
            font-weight: 600;
        }
        .companyCaption {
            .fz(font-size, 28);
        }
    }
}
</style>
 