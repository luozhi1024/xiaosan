<template>
  <swipe class="my-swipe">
      <swipe class="slide1"></swipe>
      <swipe class="slide2"></swipe>
      <swipe class="slide3"></swipe>
  </swipe>
</template>


<script>
    import "vue-swipe/dist/vue-swipe.css";
    import  {Swipe} from "vue-swipe";
    export default {
created(){
            this.$emit("switchtab","book")
        },
        components:{
            swipe : Swipe,

        }
    }
    // 使用vue的自带组件案列
</script>

<style lang="scss" scoped>
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
    .slide1 {
        background-color: #0089dc;
        color: #fff;
    }
    .slide2 {
        background-color: #ffd705;
        color: #000;
    }
    .slide3 {
        background-color: #ff2d4b;
        color: #fff;
    }
</style>
