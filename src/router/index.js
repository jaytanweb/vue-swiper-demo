import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import swiper from '@/components/swiper'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/',
      name: 'swiper',
      component: swiper
    }
  ]
})
