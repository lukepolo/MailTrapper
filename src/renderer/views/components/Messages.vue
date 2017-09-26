<template>
    <div class="messages">
        <template v-if="messages && messages.length">
            <message-tile :message="message" v-for="message in messages" :key="message._id"></message-tile>
        </template>
        <template v-else>
            <div class="no-messages">
                <p class="text-center">
                    There are no messages!
                </p>
            </div>
        </template>
    </div>
</template>

<script>
    import MessageTile from './MessageTile'
    export default {
        components : {
            MessageTile,
        },
        computed : {
            messages() {
                return this.$store.state.traps.messages.messages[this.$route.params.trap]
            }
        }
    }
</script>