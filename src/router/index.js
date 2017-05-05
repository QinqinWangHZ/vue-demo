import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Line2 from '@/components/Line2'
import Message from '@/components/FatherToChild/Message'
import Message2 from '@/components/ChildToFather/Message2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/line2',
      name: 'Line2',
      component: Line2
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/message2',
      name: 'Message2',
      component: Message2
    }
  ]
})
