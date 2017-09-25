<template>
    <a class="btn btn-small clipboard" :data-clipboard-text="data">
        <span class="fal fa-clipboard"></span>
    </a>
</template>

<script>
    import Clipboard from 'clipboard';

    export default {
        props: {
            data: String
        },
        created () {
            new Clipboard('.clipboard', {
                text: this.data
            })
        }
    }
</script>