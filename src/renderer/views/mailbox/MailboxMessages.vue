<template>
    <div>
        <template v-if="messages && messages.length">
            <div v-for="message in messages">
                <message-tile :message="message"></message-tile>
            </div>
        </template>
        <template v-else>
            There are no messages!
        </template>

    </div>
</template>

<script>
    import MessageTile from './components/MessageTile'
    export default {
        components : {
            MessageTile,
        },
        computed : {
            messages() {
                return this.$store.state.mailboxes.messages.messages[this.$route.params.mailbox]
            }
        }
    }
</script>