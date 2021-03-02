<template>
  <div>
       <ul >
         <router-link
         v-for="nav in navList" :key="nav.id" :to="nav.path" 
         active-class="active" tag='li'
        >
           <i class="iconfont" :class="nav.icon"></i>
           {{nav.title}}
         </router-link>
       </ul>
  </div>
</template>

<script>

export default {
  data(){
    return{
      navList:[
        {id:1,title:'电影',path:"/films",icon:"icon-all"},
        {id:2,title:'影院',path:'/cinema',icon:'icon-video'},
        {id:3,title:'个人中心',path:'/center',icon:'icon-account'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .active{color: orange;}
  ul{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.5rem;
    display: flex;
    background: #fff;
    z-index: 10;
    li{
      flex: 1;
      text-align: center;
      line-height: 0.25rem;
      display: flex;
      flex-direction:column
    }
  }
</style>
