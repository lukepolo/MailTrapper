<template>
    <router-link tag="div" class="mailbox" :to="{ name : `mailbox`, params : { mailbox : mailbox[`_id`] }}">
        <span class="title">
            {{ mailbox.name }}
        </span>
    </router-link>
</template>

<script>
    export default {
        props : [
            'mailbox'
        ]
    }
</script>
