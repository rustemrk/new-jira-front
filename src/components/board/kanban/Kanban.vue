<template>
    <div class="kanban" v-if="statuses">
        <kanban-column
            v-for="status in statuses"
            :key="status.id"
            :status="status"
        />
    </div>
</template>

<script>
    import KanbanColumn from "@/components/board/kanban/KanbanColumn";
    import todoStatusApi from "@/api/todoStatusApi";

    export default {
        name: "Kanban",
        components: {
            KanbanColumn,
        },
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
            }
        },
        computed: {
            todoCreated() {
                return this.$store.getters["event/todoCreated"];
            },
        },
        methods: {
            async getStatuses() {
                await todoStatusApi.list().then(response => {
                    this.statuses = response.data
                })
            }
        },

    }
</script>

<style lang="scss">

</style>