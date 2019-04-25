import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/Homepage'
import Contact from '@/views/Contact'
import Blog from '@/views/Blog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
