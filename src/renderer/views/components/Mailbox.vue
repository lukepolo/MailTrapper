<template>
    <div v-if="mailbox" class="mailbox-details">
        <h2 class="mailbox-name">
            <form class="rename-form" @submit.prevent="rename">
                <input ref="mailbox_name" type="text" v-model="form.name">
            </form>
            <span class="rename" @click="rename" :class="{ changed : this.mailbox.name != this.form.name}">
                <i class="fal fa-check"></i>
            </span>
        </h2>

        <div class="mailbox-smtp-info">
            <h3>
                SMTP Credentials
            </h3>

            <p>
                Port : 2525
            </p>

            <p>
                Username : {{ mailbox.username }}
            </p>

            <p>
                Password : {{ mailbox.password }}
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
            mailbox : function() {
                Vue.set(this.form, 'name', this.mailbox.name)
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
                this.$store.dispatch('mailboxes/show', this.$route.params.mailbox)
                this.$store.dispatch('mailboxes/messages/get', this.$route.params.mailbox)
            },
            rename() {
                this.$store.dispatch('mailboxes/update', {
                    form : this.form,
                    mailbox : this.mailbox[`_id`],
                }).then(() => {
                    this.$refs.mailbox_name.blur()
                })
            },
            remove() {
                this.$store.dispatch('mailboxes/remove', this.mailbox[`_id`]).then(() => {
                    this.$router.push('/')
                })
            },
        },
        computed: {
            mailbox() {
                return this.$store.state.mailboxes.mailbox
            }
        }
    }
</script>
