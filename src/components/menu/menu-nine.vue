// <template lang="html">

  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{datas.menuClassify.menuName}}
    </el-header>
    <el-row class="greenFood">
    <el-main class="menuShunPrincess">
      <el-row >
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
            <el-tab-pane :label="k.label" :name="k.name" v-for="(k, index) in datas.menuClassify.menuSubsetClassify">
              <el-row v-for="o in k.grandsonArray">
                <el-row>
                  <el-col :span="24">
                    <div class="maskHeaderTitle pd4 colorBlack text-alignCenter bgCfff">{{o.title}}</div>
                    <el-col class="listRome fr" :span="6" v-if="index<6">
                      <router-link :to="{ name: '热卖商城页' }">
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
        activeName: "rice",
        menuClassify: {
          menuName: "绿色食品",
          headerUrlImg: "../../../static/testImg/banner01.png",
          menuSubsetClassify: [
            {
              menuSubsetName: "大米",
              label: "大米",
              name: "rice",
              menuSubsetId: "menuNineIdA1000001",
              active: true,
              grandsonArray: [
                {
                  title: "农家院大米",
                  grandsonId: "menuNineGrandsonId1000001",
                  mianmoShunPrincessArray: [
                    {
                      id: "riceGG00001",
                      url: "static/testImg/rice-2.jpg",
                      title: "农家特产优质绿色大米",
                      price: 124
                    },
                    {
                      id: "riceGG00002",
                      url: "static/testImg/rice-2.jpg",
                      title: "农家特产优质绿色大米",
                      price: 125
                    },
                    {
                      id: "riceGG00003",
                      url: "static/testImg/rice-2.jpg",
                      title: "农家特产优质绿色大米",
                      price: 126
                    },
                    {
                      id: "riceGG00004",
                      url: "static/testImg/rice-2.jpg",
                      title: "农家特产优质绿色大米",
                      price: 127
                    },
                    {
                      id: "riceGG00005",
                      url: "static/testImg/rice-2.jpg",
                      title: "农家特产优质绿色大米",
                      price: 128
                    },
                    {
                      id: "riceGG00006",
                      url: "static/testImg/rice-2.jpg",
                      title: "农家特产优质绿色大米",
                      price: 129
                    },
                    {
                      id: "riceGG00007",
                      url: "static/testImg/rice-2.jpg",
                      title: "农家特产优质绿色大米",
                      price: 130
                    },
                    {
                      id: "riceGG00008",
                      url: "static/testImg/rice-2.jpg",
                      title: "农家特产优质绿色大米",
                      price: 131
                    }
                  ]
                },
                {
                  title: "红肠",
                  grandsonId: "menuSixGrandsonId1000002",
                  mianmoShunPrincessArray: [
                    {
                      id: "hongchang0000001",
                      url: "static/testImg/food1.jpg",
                      title: "特技红肠-全家分享",
                      price: 224
                    },
                    {
                      id: "hongchang0000002",
                      url: "static/testImg/food1.jpg",
                      title: "特技红肠-全家分享",
                      price: 225
                    },
                    {
                       id: "hongchang0000003",
                      url: "static/testImg/food1.jpg",
                      title: "特技红肠-全家分享",
                      price: 226
                    },
                    {
                      id: "hongchang0000004",
                      url: "static/testImg/food1.jpg",
                      title: "特技红肠-全家分享",
                      price: 227
                    },
                    {
                       id: "hongchang0000005",
                      url: "static/testImg/food1.jpg",
                      title: "特技红肠-全家分享",
                      price: 228
                    },
                    {
                       id: "hongchang0000006",
                      url: "static/testImg/food1.jpg",
                      title: "特技红肠-全家分享",
                      price: 229
                    },
                    {
                       id: "hongchang0000007",
                      url: "static/testImg/food1.jpg",
                      title: "特技红肠-全家分享",
                      price: 230
                    },
                    {
                       id: "hongchang0000008",
                      url: "static/testImg/food1.jpg",
                      title: "特技红肠-全家分享",
                      price: 231
                    }
                  ]
                }
              ]
            },
            {
              menuSubsetName: "水源",
              label: "水源",
              name: "shuiyuan",
              menuSubsetId: "menuNineIdA1000001",
              active: "active",
              grandsonArray: [
                {
                  title: "水源",
                  grandsonId: "menuNineGrandsonId1000001",
                  mianmoShunPrincessArray: [
                    {
                      id: "shuiyuan00001",
                      url: "static/testImg/vegetables-1.jpg",
                      title: "健康水源",
                      price: 124
                    },
                    {
                       id: "shuiyuan00002",
                      url: "static/testImg/vegetables-1.jpg",
                      title: "健康水源",
                      price: 125
                    },
                    {
                      id: "shuiyuan00003",
                      url: "static/testImg/vegetables-1.jpg",
                      title: "健康水源",
                      price: 126
                    },
                    {
                       id: "shuiyuan00004",
                      url: "static/testImg/vegetables-1.jpg",
                      title: "健康水源",
                      price: 127
                    },
                    {
                       id: "shuiyuan00005",
                      url: "static/testImg/vegetables-1.jpg",
                      title: "健康水源",
                      price: 128
                    },
                    {
                       id: "shuiyuan00006",
                      url: "static/testImg/vegetables-1.jpg",
                      title: "健康水源",
                      price: 129
                    },
                    {
                       id: "shuiyuan00007",
                      url: "static/testImg/vegetables-1.jpg",
                      title: "健康水源",
                      price: 130
                    },
                    {
                       id: "shuiyuan00008",
                      url: "static/testImg/vegetables-1.jpg",
                      title: "健康水源",
                      price: 131
                    }
                  ]
                },
                {
                  title: "寡肽原液饰品",
                  grandsonId: "menuSixGrandsonId1000002",
                  mianmoShunPrincessArray: [
                    {
                      id: "YuanYemianmo0000001",
                      url: "static/testImg/product-details01-3.jpg",
                      title: "饰品-时尚走 秀必备11",
                      price: 224
                    },
                    {
                      id: "YuanYemianmo0000002",
                      url: "static/testImg/product-details01-3.jpg",
                      title: "饰品-时尚走 秀必备12",
                      price: 225
                    },
                    {
                      id: "YuanYemianmo0000003",
                      url: "static/testImg/product-details01-3.jpg",
                      title: "饰品-时尚走 秀必备13",
                      price: 226
                    },
                    {
                      id: "YuanYemianmo0000004",
                      url: "static/testImg/product-details01-3.jpg",
                      title: "顺格格面膜-时尚走 秀必备14",
                      price: 227
                    },
                    {
                      id: "YuanYemianmo0000005",
                      url: "static/testImg/product-details01-3.jpg",
                      title: "顺格格面膜-时尚走 秀必备15",
                      price: 228
                    },
                    {
                      id: "YuanYemianmo0000006",
                      url: "static/testImg/product-details01-3.jpg",
                      title: "顺格格面膜-时尚走 秀必备16",
                      price: 229
                    },
                    {
                      id: "YuanYemianmo0000007",
                      url: "static/testImg/product-details01-3.jpg",
                      title: "顺格格面膜-时尚走 秀必备17",
                      price: 230
                    },
                    {
                      id: "YuanYemianmo0000008",
                      url: "static/testImg/product-details01-3.jpg",
                      title: "顺格格面膜-时尚走 秀必备18",
                      price: 231
                    }
                  ]
                }
              ]
            },
            {
              menuSubsetName: "空气",
              label: "空气",
              name: "kongqi",
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
            },
            {
              menuSubsetName: "土壤",
              label: "土壤",
              name: "turang",
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
              menuSubsetName: "包包",
              label: "包包",
              name: "baobao",
              menuSubsetId: "menuSixIdA1000001",
              active: "active",
              grandsonArray: [
                {
                  title: "包包",
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
                      title: "包包-时尚走 秀必备2",
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
                      title: "包包-时尚走 秀必备5",
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
                      title: "包包-时尚走 秀必备7",
                      price: 130
                    },
                    {
                      id: "ShunGG00008",
                      url: "static/testImg/product-details01.jpg",
                      title: "包包-时尚走 秀必备8",
                      price: 131
                    }
                  ]
                }
              ]
            },
            {
              menuSubsetName: "食品",
              label: "食品",
              name: "shipina",
              menuSubsetId: "menuSixIdA1000001",
              active: "active",
              grandsonArray: [
                {
                  title: "食品",
                  grandsonId: "menuSixGrandsonId1000001",
                  mianmoShunPrincessArray: [
                    {
                      id: "ShunGG00001",
                      url: "static/testImg/product-details01.jpg",
                      title: "食品-时尚走 秀必备1",
                      price: 124
                    },
                    {
                      id: "ShunGG00002",
                      url: "static/testImg/product-details01.jpg",
                      title: "食品-时尚走 秀必备2",
                      price: 125
                    },
                    {
                      id: "ShunGG00003",
                      url: "static/testImg/product-details01.jpg",
                      title: "食品-时尚走 秀必备3",
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
                      title: "包包-时尚走 秀必备5",
                      price: 128
                    },
                    {
                      id: "ShunGG00006",
                      url: "static/testImg/product-details01.jpg",
                      title: "食品-时尚走 秀必备6",
                      price: 129
                    },
                    {
                      id: "ShunGG00007",
                      url: "static/testImg/product-details01.jpg",
                      title: "包包-时尚走 秀必备7",
                      price: 130
                    },
                    {
                      id: "ShunGG00008",
                      url: "static/testImg/product-details01.jpg",
                      title: "食品-时尚走 秀必备8",
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
