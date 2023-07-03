<template>
    <div class="kanban-wrapper">
        <div class="kanban">
            <kanban-column
                v-for="status in statuses"
                :key="status.id"
                :status="status"
                @dragEnd="saveOrder"
            />
        </div>
    </div>
</template>

<script>
    import KanbanColumn from "@/components/board/kanban/KanbanColumn";
    import boardApi from "@/api/boardApi";

    export default {
        name: "Kanban",
        components: {
            KanbanColumn,
        },
        props: {
            statuses: null,
            todos: null
        },
        methods: {
            async saveOrder() {
                let result = [];
                await this.actualizeKanbanOrder(this.statuses);
                await this.getPreparedTodos(this.statuses, result);
                boardApi.saveOrder(result)
                    .catch(err => console.error(err));
            },
            actualizeKanbanOrder(statuses) {
                statuses.map(status => {
                    status.todos.forEach((todo, key) => {
                        todo.kanbanOrder = key
                    })
                })
            },
            getPreparedTodos(statuses, result) {
                statuses.map(status => status.todos)
                    .map(todos => todos.map(todo => {
                        return {
                            todoId: todo.id,
                            statusId: todo.statusId,
                            kanbanOrder: todo.kanbanOrder
                        }
                    }))
                    .forEach(el => {
                        el.forEach(todo => {
                            result.push(todo)
                        })
                    })
            }
        }
    }
</script>

<style lang="scss">
    .kanban-wrapper {
        width: 100%;
        overflow: auto;
        height: 100%;

        .kanban {
            display: flex;
            flex-direction: row;
            width: 100%;
            gap: 10px;
            border-radius: 5px;
        }
    }


    //.ms::-webkit-scrollbar {
    //    display: none; /* Safari and Chrome */
    //}
</style>