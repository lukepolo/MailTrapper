<template>
    <div v-if="mailbox">
        <router-link to="/">Home</router-link>
        \
        <router-link :to="{ name : `mailbox`, params : { mailbox : mailbox[`_id`] }}">
            {{ mailbox.name }}
        </router-link>
    </div>
</template>

<script>
    export default {
        computed: {
            mailbox() {
                return this.$store.state.mailboxes.mailbox
            },
        }
    }
</script>