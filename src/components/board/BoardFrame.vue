<template>
    <main class="board">
        <kanban/>
    </main>
</template>

<script>
    import Kanban from "@/components/board/kanban/Kanban";
    import KanbanColumn from "@/components/board/kanban/KanbanColumn";

    export default {
        name: "BoardFrame",
        components: {KanbanColumn, Kanban},
    }
</script>

<style lang="scss">

</style>