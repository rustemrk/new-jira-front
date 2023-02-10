<template>
    <div class="kanban">
        <kanban-column
            v-for="status in statuses"
            :key="status.id"
            :status="status"
        />
    </div>
</template>

<script>
    import KanbanColumn from "@/components/board/kanban/KanbanColumn";

    export default {
        name: "Kanban",
        components: {
            KanbanColumn,
        },
        props: {
            statuses: null
        }
    }
</script>

<style lang="scss">

</style>