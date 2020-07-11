import Vue from 'vue'
import ElementUI from 'element-ui'
import  'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import Login from './components/Login.vue'
import {Button} from 'element-ui'
import{Form,FormItem} from 'element-ui'
import{Input} from 'element-ui'
Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Router)

export default new Router({
  routes: [
    { path:'/',redirect:'/login'},
    {path:'/login',component:Login},
  ]
})
