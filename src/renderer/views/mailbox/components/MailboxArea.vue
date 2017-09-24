<template>
    <div>
        <mailbox-nav></mailbox-nav>
        <router-view name="messages"></router-view>
        <router-view></router-view>
    </div>
</template>

<script>
    import MailboxNav from './MailboxNav'
    export default {
        components : {
            MailboxNav
        },
        created() {
            this.fetchData()
        },
        methods : {
            fetchData() {
                this.$store.dispatch('mailboxes/show', this.$route.params.mailbox)
                this.$store.dispatch('mailboxes/messages/get', this.$route.params.mailbox)
            }
        },
    }
</script>