<template>
    <router-link class="message" :class="{ unread : message.read ? false : true }" tag="div" :to="{ name : `message`, params : { mailbox : this.$route.params.mailbox, message : message[`_id`] }}">
        <div class="subject">
            {{ message.mail.subject }}
        </div>
        <div class="details">
            <div class="sentTo">
                {{ message.mail.to }}
            </div>
            <div class="time">
                <time-ago :time="message.mail.date"></time-ago>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        props : ['message'],
    }
</script>