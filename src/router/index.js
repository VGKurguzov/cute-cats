import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import("../pages/HomePage")
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: () => import("../pages/NotFoundPage")
    }
  ]
})
