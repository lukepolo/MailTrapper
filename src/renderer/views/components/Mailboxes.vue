<template>
    <div class="mailboxes">
        <template v-for="mailbox in mailboxes" v-if="mailbox.name">
            <mailbox-tile :mailbox="mailbox"></mailbox-tile>
        </template>
        <div class="actions text-center">
            <button class="btn btn-primary" @click="createMailBox">Create Trap</button>
        </div>
    </div>
</template>

<script>
    import MailboxTile from './MailboxTile'
    export default {
        components : {
            MailboxTile
        },
        created() {
            this.$store.dispatch('mailboxes/get')
        },
        methods: {
            createMailBox() {
                this.$store.dispatch('mailboxes/create')
            }
        },
        computed: {
            mailboxes() {
                return this.$store.state.mailboxes.mailboxes
            }
        }
    }
</script>