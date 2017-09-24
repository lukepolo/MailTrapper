<template>
    <div>
        <template v-if="!editing">
            <router-link :to="{ name : `mailbox`, params : { mailbox : mailbox[`_id`] }}">
                {{ mailbox.name }}
            </router-link>
            <button @click="editing=true">
                rename
            </button>
            <button @click="remove">
                delete
            </button>
        </template>
        <template v-else>
            <form @submit.prevent="rename">
                <input type="text" v-model="form.name">
                <button type="submit">rename</button>
                <div @click="editing=false">
                    cancel
                </div>
            </form>
        </template>

    </div>
</template>

<script>
    export default {
        props : [
            'mailbox'
        ],
        data() {
            return {
                editing : false,
                form : {
                    name : this.mailbox.name,
                },
            }
        },
        methods : {
            rename() {
                this.$store.dispatch('mailboxes/update', {
                    form : this.form,
                    mailbox : this.mailbox[`_id`],
                }).then(() => {
                    this.editing = false
                })
            },
            remove() {
                this.$store.dispatch('mailboxes/remove', this.mailbox[`_id`])
            },
        }
    }
</script>
