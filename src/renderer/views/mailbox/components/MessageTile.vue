<template>
    <router-link tag="div" class="message" :to="{ name : `mailbox_message`, params : { message : message[`_id`]}}">
        {{ message.mail.subject }}
        {{ message.mail.to }}
        {{ message.mail.date }}
    </router-link>
</template>

<script>
    export default {
        props : ['message'],
    }
</script>

<style>
    .message {
        cursor: pointer;
        border: 1px solid black;
        width: 30%;
    }

    .message.router-link-active {
        background-color : cornflowerblue;
    }

</style>