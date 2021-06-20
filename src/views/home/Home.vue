<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
      <home-swiper :banners="banners"/>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultiData} from "@/network/home";
import HomeSwiper from "@/views/home/children/HomeSwiper";

export default {
  name: "Home",
  components: {HomeSwiper, NavBar},
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  created() {
    getHomeMultiData().then(res => {
      console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>