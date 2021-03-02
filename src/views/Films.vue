<template>
  <div>
     <SwiperCom cName="film-banner" v-show ="banners.length>0">
       <div
        v-for="banner in banners"
        :key="banner.bannerId"
        class="swiper-slide"
      >
        <img width="100%" :src="banner.imgUrl" alt="">
       </div>
     </SwiperCom> 
  </div>
</template>

<script>
import {instance} from '../utils/http';

import Swiper from 'swiper';
import SwiperCom from '@/components/Swiper';

export default {
  data(){
    return{
      banners:[]
    }
  },

  components:{
    SwiperCom
  },

  created(){
    instance.get("/gateway?type=2&cityId=310100&k=3140584",{
      headers:{
        'X-Host':'mall.cfg.common-banner'
      }
    }).then(res=>{
      this.banners=[...res.data.data]
      console.log(res.data.data)
      this.$nextTick(()=>{
        new Swiper('.film-banner',{
          loop:true,
          pagination:{
            el:'.swiper-pagination'
          }
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.film-banner{
    height:1.92rem;
  }
 .film-banner img{
    height: 1.92rem;
  }
  /deep/ .swiper-pagination-bullet-active{
    background: #fff!important;
  }
</style>
