import Vue from 'vue'
import VueRouter from 'vue-router'
import loginRegister from '../views/loginRegister.vue'
import test from '../views/test'
import HelloWorld from "@/views/HelloWorld";
import testQuestion from '../components/test-question-single/testQuestion.vue'
Vue.use(VueRouter);

const routes = [
  {path:'/login', name:'login', component: loginRegister},
  {path:'/test', name:'test' , component:test},
  {path:'/HelloWorld',name:'HelloWorld',component: HelloWorld},
  {path:'/',name:'testQuestion',component: testQuestion}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
