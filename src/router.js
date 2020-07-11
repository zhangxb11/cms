import Vue from 'vue'
import ElementUI from 'element-ui'
import  'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import Login from './components/Login.vue'
import manager from './components/manager.vue'
import {Button,Form,FormItem,Input,Message,Container,Header,Aside,Main,Menu,Submenu,MenuItemGroup,MenuItem,Card}from 'element-ui'
import meetingsmanagement from './components/manager/meetingsmanagement.vue'
import RequiredCourse from './components/manager/RequiredCourse.vue'
import PublicCourses from './components/manager/PublicCourses.vue'

Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Card)
Vue.prototype.$message = Message

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/manager',component:manager,
      children:[
        {path: '/1',component:meetingsmanagement},
        {path: '/1-1',component:RequiredCourse},
        {path: '/1-2',component:PublicCourses}
      ]
    }
  ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
