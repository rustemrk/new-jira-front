<template>
</template>
<script>
    export default {
        name: 'Frame',
        data() {
            return {}
        },
        computed: {
            isAppBusy() {
                return this.$store.getters.isAppBusy;
            },
        },
        methods: {
            setAppBusy(busy) {
                if (this.isAppBusy !== busy) {
                    this.$store.dispatch('app/setAppBusy', busy);
                }
            }
        }
    };
</script>