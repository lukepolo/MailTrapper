<template>
    <div class="wrapper">
        <div class="traps-nav">
            <traps></traps>
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
    import Traps from './components/Traps'
    export default {
        components : {
            Messages,
            Traps
        },
    }
</script>