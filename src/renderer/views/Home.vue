<template>
    <div class="wrapper">
        <div class="mailboxes-nav">
            <mailboxes></mailboxes>
        </div>
        <div class="messages-nav">
            <messages></messages>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Messages from './components/Messages'
    import Mailboxes from './components/Mailboxes'
    export default {
        components : {
            Messages,
            Mailboxes
        },
    }
</script>