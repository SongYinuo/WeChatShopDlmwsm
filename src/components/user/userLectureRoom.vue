<template lang="html">

    <el-container>
        <el-header class="tittle">
            <div class="back" @click="$router.go(-1)">
                <i class="el-icon-arrow-left"></i>
            </div>
            {{title}}
        </el-header>
        <el-row>
             <el-col :span="24" class="num">讲堂（{{num.count}}）</el-col>
            <el-col :span="22" :offset="1">
             
                <div v-for="item in items">
                    <router-link :to="{ name:'种草详情',query: { id: item.id }}">
                        <el-row class="smallimg">
                           
                            <el-col :span="12" class="pd">
                                <p class="menu-strategy ">{{item.title}}</p>
                                <div class="menu-strategy-small omit">{{item.content}}</div>
                                <span class="menuTime">{{item.confirm_time_text}}</span>
                            </el-col>
                            <el-col :span="10" :offset="2">
                                <img :src="item.thumb">
                            <div  v-if="item.is_confirm===1">
                                 <span class="audit" >审核中</span>
                                 </div>
                                 <div  v-if="item.is_confirm===-1">
                                 <span class="audit">审核未通过</span>
                                 </div>
                                 <div  v-if="item.is_confirm===2" style="display:none;">
                                 <span >审核通过</span>
                                 </div>     
                            </el-col>
                        </el-row>
                    </router-link>
                </div>
            </el-col>
        </el-row>
    </el-container>

</template>

<script type="text/javascript">
import axios from "axios";
export default {
  data() {
    return {
      title: "用户讲堂",
      items: [],
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
      axios
        .get("/Api/User/classroom_list")
        .then(function(res) {
          console.log(res);
          that.items = res.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getNum() {
      const that = this;
      axios
        .get("/Api/User/classroom_list")
        .then(function(res) {
          console.log(res);
          that.num = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/menu/menu.less";

.menuTime {
  .fz(font-size, 24);
  color: #adaeaf;
}

.menuBtn {
  border-radius: 30px;
  background-color: #dab62e;
  .fz(font-size, 34);
  margin-right: 20px;
}

.menuBtn img {
  width: 24px;
}
.smallimg img {
  margin-top: 10px;
}
.num {
  .fz(font-size, 34);
  color: #313131;
  font-weight: bold;
  margin-left: 15px; 
}
.audit {
  position: absolute;
  color: #ee4040;
  right: 10px;
  top: 15px;
  .fz(font-size, 24);
}
</style>