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
    import todoApi from "@/api/todoApi";

    export default {
        name: "Kanban",
        components: {
            KanbanColumn,
        },
        props: {
            statuses: null
        },
        watch: {
            statuses: {
                handler(newValue) {
                    this.actualizeKanbanOrder(newValue);

                    let finalResult = [];
                    newValue.map(status => status.todos)
                        .map(todos => todos.map(todo => {
                            return {
                                todoId: todo.id,
                                statusId: todo.statusId,
                                kanbanOrder: todo.kanbanOrder
                            }
                        })).forEach(el => {
                        el.forEach(todo => {
                            finalResult.push(todo)
                        })
                    })

                    todoApi.saveKanbanOrder(finalResult);
                },
                deep: true
            }
        },
        methods: {
            actualizeKanbanOrder(statuses) {
                statuses.map(status => {
                    status.todos.forEach((todo, key) => {
                        todo.kanbanOrder = key
                    })
                })
            },
        }
    }
</script>

<style lang="scss">
    .kanban {
        display: grid;
        grid-auto-flow: column;
        gap: 10px;

        max-width: fit-content;
        height: 100%;
        padding: 20px 10px 10px; // todo подумать
        overflow-x: scroll;
        overflow-y: scroll;
        border-radius: 8px; // todo подумать

    }

    .kanban::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }

</style>