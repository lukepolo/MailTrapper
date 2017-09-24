<style>
    .mailbox {
        padding: 20px;
        border: 1px solid black;
        cursor: pointer;
    }
</style>
<template>
    <div id="wrapper">
        <main>
            <div class="left-side">
                <span class="title">
                  Mailboxes
                </span>
                <div class="doc">
                    <div v-for="mailbox in mailboxes">
                        <mailbox-tile :mailbox="mailbox"></mailbox-tile>
                    </div>
                    <div class="doc" style="padding-top:20px; text-align: center">
                        <button class="alt" @click="createMailBox">Create Mailbox</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import MailboxTile from './../components/MailboxTile'
    export default {
        components : {
            MailboxTile
        },
        created() {
            this.$store.dispatch('mailboxes/get')
        },
        methods: {
            createMailBox() {
                this.$store.dispatch('mailboxes/create')
            }
        },
        computed: {
            mailboxes() {
                return this.$store.state.mailboxes.mailboxes
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
    }

    #wrapper {
        background: radial-gradient(
                ellipse at top left,
                rgba(255, 255, 255, 1) 40%,
                rgba(229, 229, 229, .9) 100%
        );
        height: 100vh;
        padding: 60px 80px;
        width: 100vw;
    }

    #logo {
        height: auto;
        margin-bottom: 20px;
        width: 420px;
    }

    main {
        display: flex;
        justify-content: space-between;
    }

    main > div {
        flex-basis: 50%;
    }

    .left-side {
        display: flex;
        flex-direction: column;
    }

    .welcome {
        color: #555;
        font-size: 23px;
        margin-bottom: 10px;
    }

    .title {
        color: #2c3e50;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 6px;
    }

    .title.alt {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .doc p {
        color: black;
        margin-bottom: 10px;
    }

    .doc button {
        font-size: .8em;
        cursor: pointer;
        outline: none;
        padding: 0.75em 2em;
        border-radius: 2em;
        display: inline-block;
        color: #fff;
        background-color: #4fc08d;
        transition: all 0.15s ease;
        box-sizing: border-box;
        border: 1px solid #4fc08d;
    }

    .doc button.alt {
        color: #42b983;
        background-color: transparent;
    }
</style>
