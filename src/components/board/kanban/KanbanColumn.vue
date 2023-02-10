<template>
    <v-col class="kanban-column">
        {{ status.name.toUpperCase() + ' ' + status.todos.length + ' задач' }}
        <draggable>
            <kanban-card v-for="todo in status.todos"
                         :key="todo.id"
                         :todo="todo"
            />
        </draggable>
    </v-col>
</template>

<script>
    import KanbanCard from "@/components/board/kanban/KanbanCard";
    import draggable from 'vuedraggable';

    export default {
        name: "KanbanColumn",
        components: {KanbanCard, draggable},
        props: {
            status: null
        }
    }
</script>

<style lang="scss">
    .kanban-column {
        min-width: 280px;
        max-width: 280px;
        height: 100%;
        background-color: ghostwhite;
        border-radius: 8px;
        padding: 5px;
    }
</style>