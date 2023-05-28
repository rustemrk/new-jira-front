<template>
    <div class="kanban-column">
        <div class="column-header">
            {{ status.name.toUpperCase() + ' ' + status.todos.length + ' задач' }}
        </div>
        <div class="column-list">
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
        </div>
    </div>
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
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        gap: 5px;
        min-width: 280px;
        max-width: 280px;
        background-color: var(--v-kanbanColumnBG-base);
        border-radius: 8px;

        .column-header {
            padding: 5px;
            position: sticky;
            z-index: 2;
            background-color: var(--v-kanbanColumnBG-base);
            top: 0;
            border-radius: 8px 8px 0 0;
            border-bottom: lightgrey 1px solid;
        }

        .column-list {
            padding: 5px;
            height: 100%;

            .ghost-card {
                opacity: 0;
            }

            .draggable-area {
                display: flex;
                flex-direction: column;
                gap: 5px;
                height: 100%;
            }
        }
    }

</style>