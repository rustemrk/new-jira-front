<template>
    <v-col class="kanban-column">
        {{ status.name.toUpperCase() + ' ' + status.todos.length + ' задач' }}
        <draggable
            :list="status.todos"
            group="todos"
            class="draggable-area"
            ghost-class="ghost-card"
            :move="move"
            @remove="onRemove($event, status)"
            @add="onAdd($event, status)"
            @end="onEnd"
            @start="onStart"
            :animation="200">
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
        },
        methods: {
            move(event) {
            },
            onEnd(event) {
            },
            onStart(event) {
            },
            onRemove(event, status) {
            },
            onAdd(event, status) {
                status.todos
                    .filter(todo => todo.statusId !== status.id)
                    .map(todo => todo.statusId = status.id)
            },
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

        .ghost-card {
            opacity: 0;
        }

        .draggable-area {
            height: calc(100% - 25px);
        }
    }
</style>