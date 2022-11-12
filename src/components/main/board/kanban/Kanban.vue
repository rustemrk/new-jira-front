<template>
    <div class="kanban">
        <kanban-column/>
        <kanban-column/>
        <kanban-column/>
        <kanban-column/>
        <kanban-column/>
        <kanban-column/>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';
    import KanbanColumn from "@/components/main/board/kanban/KanbanColumn";

    export default {
        name: "Kanban",
        components: {
            KanbanColumn,
            draggable
        }
    }
</script>

<style lang="scss">

</style>