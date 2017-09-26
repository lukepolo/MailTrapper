<template>
    <router-link tag="div" class="trap" :to="{ name : `trap`, params : { trap : trap[`_id`] }}">
        <span class="title">
            {{ trap.name }}
        </span>
    </router-link>
</template>

<script>
    export default {
        props : [
            'trap'
        ]
    }
</script>
