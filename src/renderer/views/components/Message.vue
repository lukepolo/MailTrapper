<template>
    <div v-if="mail">
        <div class="message-details">
            <h3>{{ mail.subject }}</h3>
            <p>From: {{ message.from }}</p>
            <p>To: {{ message.to }}</p>
        </div>
        <div class="message-content" v-html="mail.html"></div>
    </div>
</template>

<script>
    export default {
        created() {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData',
        },
        methods: {
            fetchData() {
                this.$store.dispatch('mailboxes/messages/show', this.$route.params.message)
            }
        },
        computed: {
            mail() {
                let message = this.message;
                if (message) {
                    return message.mail;
                }
            },
            message() {
                return this.$store.state.mailboxes.messages.message
            }
        }
    }
</script>