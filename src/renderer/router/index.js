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
      path: '/dateUtils',
      name: 'dateUtils',
      component: require('@/components/dateutils').default
    },
    {
      path: '/idNumberInfo',
      name: 'idNumberInfo',
      component: require('@/components/idNumberInfo').default
    },
    {
      path: '/regex',
      name: 'regex',
      component: require('@/components/regex').default
    },
    {
      path: '/cron',
      name: 'cron',
      component: require('@/components/cron').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
