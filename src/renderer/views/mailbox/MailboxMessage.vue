<template>
    <div v-if="mail">
      <pre>
            {{ mail.subject }}
            {{ message.from }} -> {{ message.to }}
        </pre>
        <pre v-html="mail.html"></pre>
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
        methods : {
            fetchData() {
                this.$store.dispatch('mailboxes/messages/show', this.$route.params.message)
            }
        },
        computed:{
            mail() {
                let message = this.message;
                if(message) {
                    return message.mail;
                }
            },
            message() {
                return this.$store.state.mailboxes.messages.message
            }
        }
    }
</script>