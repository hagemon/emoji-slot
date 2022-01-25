import Vue from 'vue'
import Router from 'vue-router'
import SlotMachine from '@/components/SlotMachine'
// import Test from '@/components/Test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SlotMachine',
      component: SlotMachine
    },
    // {
    //   path: '/test',
    //   name: 'Test',
    //   component: Test
    // }
  ]
})
