import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: require('@/components/dashboard/Dashboard').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
