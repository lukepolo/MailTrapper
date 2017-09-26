<template>
    <div class="traps">
        <template v-for="trap in traps" v-if="trap.name">
            <trap-tile :trap="trap"></trap-tile>
        </template>
        <div class="actions text-center">
            <button class="btn btn-primary" @click="createMailBox">Create Trap</button>
        </div>
    </div>
</template>

<script>
    import TrapTile from './TrapTile'
    export default {
        components : {
            TrapTile
        },
        created() {
            this.$store.dispatch('traps/get')
        },
        methods: {
            createMailBox() {
                this.$store.dispatch('traps/create')
            }
        },
        computed: {
            traps() {
                return this.$store.state.traps.traps
            }
        }
    }
</script>