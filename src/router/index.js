import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hom from '@/view/home'
import login from '@/view/person/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'hom',
      component: hom
    },
    {
      path: '/person/login',
      name: 'login',
      component: login
    }
  ]
})
