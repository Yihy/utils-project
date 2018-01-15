import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/abc',
      name: 'abc',
      component: require('@/components/abc').default
    },
    {
      path: '/idNumberInfo',
      name: 'idNumberInfo',
      component: require('@/components/idNumberInfo').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
