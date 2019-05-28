<template lang="html">
    <div id="admire">
        <img src="static/testImg/Focus2.png" class="likeimage" v-if="!admire" @click="change()">
        <img v-else src="static/testImg/Focus1.png" class="likeimage" @click="change()">
    </div>
</template>

<script>
var local_admire = localStorage.getItem("admire"); //获取存储在本地的点赞状态
export default {
  props: ["article_idd"],
  data: function() {
    return {
      admire: local_admire,
      article_idd: this.article_idd
    };
  },
  methods: {
    change: function() {
      let that = this;
      this.admire == false ? (this.admire = true) : (this.admire = false);
      localStorage.setItem("admire", this.admire); //储存状态到本地，关闭页面重新打开会显示点赞状态
      console.log("收藏");
      this.$http
        .post("/Api/User/collect", {
          model: "article",
          id: that.article_idd
        })
        .then(res => {
          console.log(res);
          if (res.data.code == 1) {
           
          }
          console.log("文章id");
        })
        .catch(error => {});
    }
  }
};
</script>
<style>
.likeimage {
  width: 100%;
}
</style>
