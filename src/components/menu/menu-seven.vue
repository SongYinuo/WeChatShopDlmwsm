<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{datas.menuClassify.menuName}}
    </el-header>
    <el-row class="habai">
    <el-main class="menuShunPrincess">
      <el-row>
        <el-col class="shunPrincessAdvertising">
          <img :src="datas.menuClassify.headerUrlImg">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-col>
            <div class="tabMore" @click="dialogShow = true">更多</div>
          </el-col>
          <el-tabs v-model="datas.activeName" @tab-click="handleClick">
            <el-tab-pane  :label="k.label" :name="k.name" v-for="(k, index) in datas.menuClassify.menuSubsetClassify">
              <el-row v-for="o in k.grandsonArray">
                <el-row>
                  <el-col :span="24">
                    <div class="maskHeaderTitle pd4 colorBlack text-alignCenter bgCfff">{{o.title}}</div>
                    <el-col class="listRome fr" :span="6" v-if="index<6">
                      <router-link :to="{ name: '更多列表' }">
                        查看更多
                        <i class="el-icon-arrow-right"></i>
                      </router-link>
                    </el-col>
                  </el-col>
                </el-row>
                <el-row class="rows">
                  <el-col :span="8" v-for="q in o.mianmoShunPrincessArray" :key="o.id"
                    class="ShunPrincessRow bgCBlue pdTRBL1">
                    <router-link :to="{ name: '详情页', params: { id: q.id } }">
                      <div class="bgCfff pdTRBL1">
                        <img :src="q.url">
                        <div class="shunPrincessProductTitle pd2">{{q.title}}</div>
                        <div class="shunPrincessProductPrice pdB2 colorRed">¥{{q.price}}</div>
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
        <el-row>
          <el-col :span="22" :offset="1" class="pd2 text-alignLeft brB1"
            v-for="(l, index) in datas.menuClassify.menuSubsetClassify">
            <router-link :to="{ name: 'tab栏目分类', params: { id: l.menuSubsetId, name: l.menuSubsetName } }">
              <el-col :span="18">{{l.label}}</el-col>
              <el-col :span="6" class="text-alignRight"><i class="el-icon-arrow-right"></i></el-col>
            </router-link>
          </el-col>
        </el-row>
      </el-dialog>
    </el-main>
    </el-row>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      dialogShow: false,
      datas: {
        activeName: "hongchang",
        menuClassify: {
          menuName: "哈百年",
          headerUrlImg: "../../../static/testImg/banner01.png",
          menuSubsetClassify: [
            {
              menuSubsetName: "红肠",
              label: "红肠",
              name: "hongchang",
              menuSubsetId: "menuSevenIdA1000002",
              active: true,
              grandsonArray: [
                {
                  title: "哈尔滨红肠",
                  grandsonId: "menuSevenGrandsonIdB1000001",
                  mianmoShunPrincessArray: [
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品红肠 品味经典-回味无穷",
                      price: 124
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品红肠 品味经典-回味无穷2",
                      price: 125
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品红肠 品味经典-回味无穷",
                      price: 126
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品红肠 品味经典-回味无穷",
                      price: 127
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品红肠 品味经典-回味无穷",
                      price: 128
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品红肠 品味经典-回味无穷",
                      price: 129
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品红肠 品味经典-回味无穷",
                      price: 130
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品红肠 品味经典-回味无穷",
                      price: 131
                    }
                  ]
                },
                {
                  title: "五常大米",
                  grandsonId: "menuSevenGrandsonIdB2000001",
                  mianmoShunPrincessArray: [
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香",
                      price: 124
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香2",
                      price: 125
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香3",
                      price: 126
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香4",
                      price: 127
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香5",
                      price: 128
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香6",
                      price: 129
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香7",
                      price: 130
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香8",
                      price: 131
                    }
                  ]
                }
              ]
            },
            {
              menuSubsetName: "秋林",
              label: "秋林",
              name: "qiulin",
              menuSubsetId: "menuSevenIdA1000002",
              active: true,
              grandsonArray: [
                {
                  title: "哈尔滨红肠",
                  grandsonId: "menuSevenGrandsonIdB1000001",
                  mianmoShunPrincessArray: [
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品秋林红肠 品味经典-回味无穷",
                      price: 124
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品秋林红肠 品味经典-回味无穷2",
                      price: 125
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品秋林红肠 品味经典-回味无穷",
                      price: 126
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品秋林红肠 品味经典-回味无穷",
                      price: 127
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品红秋林肠 品味经典-回味无穷",
                      price: 128
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品秋林红肠 品味经典-回味无穷",
                      price: 129
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品秋林红肠 品味经典-回味无穷",
                      price: 130
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "精品秋林红肠 品味经典-回味无穷",
                      price: 131
                    }
                  ]
                },
                {
                  title: "五常大米",
                  grandsonId: "menuSevenGrandsonIdB2000001",
                  mianmoShunPrincessArray: [
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香",
                      price: 124
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香2",
                      price: 125
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香3",
                      price: 126
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香4",
                      price: 127
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香5",
                      price: 128
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香6",
                      price: 129
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香7",
                      price: 130
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米 入口回味-唇齿留香8",
                      price: 131
                    }
                  ]
                }
              ]
            },
            {
              menuSubsetName: "文化",
              label: "文化",
              name: "wenhua",
              menuSubsetId: "menuSevenIdA1000002",
              active: true,
              grandsonArray: [
                {
                  title: "哈尔滨文化",
                  grandsonId: "menuSevenGrandsonIdB1000001",
                  mianmoShunPrincessArray: [
                    {
                      url: "static/testImg/food1.jpg",
                      title: "哈尔滨文化",
                      price: 124
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "哈尔滨文化2",
                      price: 125
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "哈尔滨文化3",
                      price: 126
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "哈尔滨文化4",
                      price: 127
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "哈尔滨文化5",
                      price: 128
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "哈尔滨文化6",
                      price: 129
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "哈尔滨文化7",
                      price: 130
                    },
                    {
                      url: "static/testImg/food1.jpg",
                      title: "哈尔滨文化8",
                      price: 131
                    }
                  ]
                },
                {
                  title: "五常大米",
                  grandsonId: "menuSevenGrandsonIdB2000001",
                  mianmoShunPrincessArray: [
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米文化1",
                      price: 124
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米文化2",
                      price: 125
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米文化3",
                      price: 126
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米文化4",
                      price: 127
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米文化5",
                      price: 128
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米文化6",
                      price: 129
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米文化7",
                      price: 130
                    },
                    {
                      url: "static/testImg/rice-2.jpg",
                      title: "五常大米文化8",
                      price: 131
                    }
                  ]
                }
              ]
            },
            {
              menuSubsetName: "口红",
              label: "口红",
              name: "kouhong",
              menuSubsetId: "menuSixIdA1000001",
              active: "active",
              grandsonArray: [
                {
                  title: "口红",
                  grandsonId: "menuSixGrandsonId1000001",
                  mianmoShunPrincessArray: [
                    {
                      id: "ShunGG00001",
                      url: "static/testImg/product-details01.jpg",
                      title: "口红-时尚走 秀必备1",
                      price: 124
                    },
                    {
                      id: "ShunGG00002",
                      url: "static/testImg/product-details01.jpg",
                      title: "口红-时尚走 秀必备2",
                      price: 125
                    },
                    {
                      id: "ShunGG00003",
                      url: "static/testImg/product-details01.jpg",
                      title: "口红-时尚走 秀必备3",
                      price: 126
                    },
                    {
                      id: "ShunGG00004",
                      url: "static/testImg/product-details01.jpg",
                      title: "饰品-时尚走 秀必备4",
                      price: 127
                    },
                    {
                      id: "ShunGG00005",
                      url: "static/testImg/product-details01.jpg",
                      title: "口红-时尚走 秀必备5",
                      price: 128
                    },
                    {
                      id: "ShunGG00006",
                      url: "static/testImg/product-details01.jpg",
                      title: "饰品-时尚走 秀必备6",
                      price: 129
                    },
                    {
                      id: "ShunGG00007",
                      url: "static/testImg/product-details01.jpg",
                      title: "饰品-时尚走 秀必备7",
                      price: 130
                    },
                    {
                      id: "ShunGG00008",
                      url: "static/testImg/product-details01.jpg",
                      title: "口红-时尚走 秀必备8",
                      price: 131
                    }
                  ]
                }
              ]
            },
            {
              menuSubsetName: "衣衫",
              label: "衣衫",
              name: "yishan",
              menuSubsetId: "menuSixIdA1000001",
              active: "active",
              grandsonArray: [
                {
                  title: "衣衫",
                  grandsonId: "menuSixGrandsonId1000001",
                  mianmoShunPrincessArray: [
                    {
                      id: "ShunGG00001",
                      url: "static/testImg/product-details01.jpg",
                      title: "衣衫-时尚走 秀必备1",
                      price: 124
                    },
                    {
                      id: "ShunGG00002",
                      url: "static/testImg/product-details01.jpg",
                      title: "衣衫-时尚走 秀必备2",
                      price: 125
                    },
                    {
                      id: "ShunGG00003",
                      url: "static/testImg/product-details01.jpg",
                      title: "饰品-时尚走 秀必备3",
                      price: 126
                    },
                    {
                      id: "ShunGG00004",
                      url: "static/testImg/product-details01.jpg",
                      title: "饰品-时尚走 秀必备4",
                      price: 127
                    },
                    {
                      id: "ShunGG00005",
                      url: "static/testImg/product-details01.jpg",
                      title: "衣衫-时尚走 秀必备5",
                      price: 128
                    },
                    {
                      id: "ShunGG00006",
                      url: "static/testImg/product-details01.jpg",
                      title: "饰品-时尚走 秀必备6",
                      price: 129
                    },
                    {
                      id: "ShunGG00007",
                      url: "static/testImg/product-details01.jpg",
                      title: "饰品-时尚走 秀必备7",
                      price: 130
                    },
                    {
                      id: "ShunGG00008",
                      url: "static/testImg/product-details01.jpg",
                      title: "顺格格面膜-时尚走 秀必备8",
                      price: 131
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  }
};
</script>


<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/menu/menu.less";
</style>