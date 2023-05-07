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
            this.fetchData()
        },
        watch: {
            todoCreated() {
                this.fetchData()
            },
            todoUpdated() {
                this.fetchData()
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
            async fetchData() {
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