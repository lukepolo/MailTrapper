import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import MailboxArea from './../views/mailbox/components/MailboxArea.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mailboxes',
      component: require('@/views/Mailboxes')
    },
    {
      path: '/mailbox/:mailbox',
      component: MailboxArea,
      children: [
          {
              path: '/',
              name: 'mailbox',
              components: {
                  default: require('./../views/mailbox/Mailbox'),
                  messages: require('./../views/mailbox/MailboxMessages'),
              }
          },
          {
              path: 'message/:message',
              name: 'mailbox_message',
              components: {
                  default: require('./../views/mailbox/MailboxMessage'),
                  messages: require('./../views/mailbox/MailboxMessages'),
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