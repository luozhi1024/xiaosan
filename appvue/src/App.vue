<template>
  <div id="app">
    <commonheader :selectMenu="selectMenu"></commonheader>
    <router-view class="content"/>
    <commonfooter @changeTitle="changeTitle" :menuList="menuList"></commonfooter>
  </div>
</template>
<script>

  import  commonheader from "@/components/commonheader.vue";
  import  commonfooter from "@/components/commonfooter.vue"
  export default {
      components :{
          commonheader,
          commonfooter,
      },
      methods: {
          changeTitle(menu){
              this.selectMenu = menu;
          }
      },
      data(){
          return{
              menuList: [
                  {
                      title: '电影',
                      bgColor: '#e54847',
                      name: 'movie',
                      path: '/movie'
                  },{
                      title: '音乐',
                      bgColor: '#009688',
                      name: 'music',
                      path: '/music'
                  },{
                      title: '书籍',
                      bgColor: '#795548',
                      name: 'book',
                      path: '/book'
                  },{
                      title: '图片',
                      bgColor: '#3f51b5',
                      name: 'photo',
                      path: '/photo'
                  }
              ],
              selectMenu: {}
          }
      }

  }
</script>

<style lang="scss">

</style>
