<template>
    <div class="kanban" v-if="statuses">
        <kanban-column
            v-for="status in statuses"
            :key="status.id"
            :status="status"
            :title="status.name"
            :todo="todo"/>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';
    import KanbanColumn from "@/components/board/kanban/KanbanColumn";
    import todoApi from "@/api/todoApi";
    import todoStatusApi from "@/api/todoStatusApi";

    export default {
        name: "Kanban",
        components: {
            KanbanColumn,
            draggable
        },
        data() {
            return {
                todo: null,
                statuses: null
            }
        },
        created() {
            this.getStatuses()
            this.getTodo()
        },
        methods: {
            async getTodo() {
                await todoApi.get(10059).then(response => {
                    this.todo = response.data
                })
            },
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