<template>
  <div>
    <pre>
      {{ mailbox }}
    </pre>
  </div>
</template>

<script>
  export default {
    computed : {
        mailbox() {
            return this.$store.state.mailboxes.mailbox
        }
    }
  }
</script>
