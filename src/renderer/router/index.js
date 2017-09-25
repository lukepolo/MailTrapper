import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/views/Home'),
        children : [
            {
                path: 'mailbox/:mailbox',
                name: 'mailbox',
                components: {
                    default: require('./../views/components/Mailbox'),
                    messages: require('./../views/components/Messages'),
                }
            },
            {
                path: 'mailbox/:mailbox/message/:message',
                name: 'message',
                components: {
                    default: require('./../views/components/Message'),
                    messages: require('./../views/components/Messages'),
                }
            },
        ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})