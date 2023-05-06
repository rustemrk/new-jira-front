<template>
    <main class="board">
        <kanban v-if="statuses" :statuses="statuses"/>
    </main>
</template>

<script>
    import Kanban from "@/components/board/kanban/Kanban";
    import Frame from "@/Frame";
    import todoStatusApi from "@/api/todoStatusApi";

    export default {
        name: "BoardFrame",
        components: {Kanban},
        extends: Frame,
        data() {
            return {
                statuses: null
            }
        },
        created() {
            this.getStatuses()
        },
        watch: {
            todoCreated() {
                this.getStatuses()
            },
            todoUpdated() {
                this.getStatuses()
            }
        },
        computed: {
            todoCreated() {
                return this.$store.getters["event/todoCreated"];
            },
            todoUpdated() {
                return this.$store.getters["event/todoUpdated"];
            },
        },
        methods: {
            async getStatuses() {
                this.setAppBusy(true);
                await todoStatusApi.getAllWithTodos().then(response => {
                    this.statuses = response.data
                }).finally(() => {
                    this.setAppBusy(false)
                })
            }
        },
    }
</script>

<style lang="scss">

</style>