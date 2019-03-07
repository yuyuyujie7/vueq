import Vue from 'vue'
import APP from 'App'
import Router from 'vue-router'
import TOM from '@/components/lianxi/xuanran'
import NNAV from '@/components/laouyt/nav'
import { error } from 'util';
import Axios from 'axios';
import SHOWsp from '@/components/laouyt/showshoppinglist'


import LOGINAYOUT from '@/components/layoutss/login_layout'
Vue.use(Router)
Vue.use(Axios)
export default new Router({
  // mode:'history',传统url方式访问路由
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'*',
      component:error
    },
    // {
    //   path:'/',
    //   name:'main',
    //   component:Min
    // },
    {
      path: '/login_layout',
      name: 'login_layout',
      component: LOGINAYOUT
    },
    {
      path: '/xuanran',
      name: 'xuanran',
      component: TOM
    },
    // {
    //   path: '/ashoppinglist',
    //   name: 'ashoppinglist',
    //   component: SHPL,
    //   children:[{
    //     name:'c1',
    //     path:'/c1',
    //     component:C1,
    //   },
    //   {
    //     name:'c2',
    //     path:'/c2',
    //     component:C2,
    //   }]
    // },
    {
      path: '/showshoppinglist',
      name: 'showshoppinglist',
      component: SHOWsp
    }
  ]
})
