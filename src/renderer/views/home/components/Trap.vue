<template>
    <div v-if="trap" class="trap-details">
        <h2 class="trap-name">
            <form class="rename-form" @submit.prevent="rename">
                <input ref="trap_name" type="text" v-model="form.name">
            </form>
            <span class="rename" @click="rename" :class="{ changed : this.trap.name != this.form.name}">
                <i class="fal fa-check"></i>
            </span>
        </h2>

        <div class="trap-smtp-info">
            <h3>
                SMTP Credentials
            </h3>

            <p>
                Port : 2525
            </p>

            <p>
                <clipboard :data="trap.username"></clipboard> Username And Password : {{ trap.username }}
            </p>
        </div>

        <div class="delete-button">
            <div class="btn btn-danger text-center" @click="remove">
                Delete Trap
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            this.fetchData()
        },
        watch : {
            '$route' : 'fetchData',
            trap : function() {
                if(this.trap) {
                    Vue.set(this.form, 'name', this.trap.name)
                }
            }
        },
        data() {
            return {
                editing : false,
                form : {
                    name : null,
                },
            }
        },
        methods: {
            fetchData() {
                this.$store.dispatch('traps/show', this.$route.params.trap)
                this.$store.dispatch('traps/messages/get', this.$route.params.trap)
            },
            rename() {
                this.$store.dispatch('traps/update', {
                    form : this.form,
                    trap : this.trap[`_id`],
                }).then(() => {
                    this.$refs.trap_name.blur()
                })
            },
            remove() {
                this.$store.dispatch('traps/remove', this.trap[`_id`]).then(() => {
                    this.$router.push('/')
                })
            },
        },
        computed: {
            trap() {
                return this.$store.state.traps.trap
            }
        }
    }
</script>
