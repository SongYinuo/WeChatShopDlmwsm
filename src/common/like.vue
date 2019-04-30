<template lang="html">
  <!-- <div>
    <div class="likeimg" @tap="like">
      <img v-if="isClick==0" class="likeimage" @click="like()"
        src="http://img17.3lian.com/d/file/201703/08/0d04014b873fad9be92e93a4f97412f6.jpg">
      <img v-if="isClick==1" class="likeimage" @click="like()"
        src="http://image.biaobaiju.com/uploads/20180111/01/1515605129-IPibQmRBat.jpg">
    </div>
    <div class="clicknum">
      {{clickNum}}
    </div>
  </div> -->
    <div id="admire">
        <img src="static/testImg/Focus2.png" class="likeimage" v-if="!admire" @click="change()">
        <img v-else src="static/testImg/Focus1.png" class="likeimage" @click="change()">
    </div>
</template>

<script>
var local_admire = localStorage.getItem("admire"); //获取存储在本地的点赞状态
export default {
  data: function() {
    return {
      admire: local_admire
    };
  },
  methods: {
    change: function() {
      // alert(11111);
      this.admire == false ? (this.admire = true) : (this.admire = false);
      localStorage.setItem("admire", this.admire); //储存状态到本地，关闭页面重新打开会显示点赞状态
    }
  }
};
// export default {
//   data() {
//     return {
//       clickNum: 12,
//       isClick: ""
//     };
//   },
//   methods: {
//     like: function () {
//       if (this.isClick == 0) {
//         this.isClick = 1;
//         this.clickNum = this.clickNum + 1;
//         console.log(this.clickNum);
//       } else {
//         this.isClick = 0;
//         this.clickNum = this.clickNum - 1;
//       }
//     }
//   }
// };
</script>
<style>
.likeimage {
  width: 100%;
}
</style>
