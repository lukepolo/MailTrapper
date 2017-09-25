<template>
    <span> {{ text }} </span>
</template>

<script>
    export default {
        props: {
            time: {}
        },
        mounted() {
            this.setCurrentTime()
            setInterval(() => {
                this.update();
            }, 1000)
        },
        data() {
            return {
                text: null,
                currentTime: null
            }
        },
        watch: {
            time: function () {
                this.setCurrentTime()
            }
        },
        methods: {
            update() {
                if (this.currentTime) {
                    Vue.set(this, 'text', this.currentTime.fromNow().replace('ute', ''))
                }
            },
            setCurrentTime() {

                let time = this.time

                if (!global.moment.isMoment(time)) {
                    time = this.parseDate(time)
                }

                this.currentTime = time
            }
        },
    }
</script>
