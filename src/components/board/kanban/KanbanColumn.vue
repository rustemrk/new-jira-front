<template>
    <v-col class="kanban-column">
        {{ status.name.toUpperCase() + ' ' + status.todos.length + ' задач' }}
        <draggable
            :list="status.todos"
            group="todos"
            class="draggable-area"
            ghost-class="ghost-card"
            :move="onMove"
            @remove="onItemRemove($event, status)"
            @add="onItemAdd($event, status)"
            @end="onDragEnd"
            @start="onDragStart"
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
            onMove(event) {
            },
            onDragEnd() {
                this.$emit('dragEnd')
            },
            onDragStart(event) {
            },
            onItemRemove(event, status) {
            },
            onItemAdd(event, status) {
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