<template>
    <v-col class="kanban-column" v-if="todo">
        {{ title.toUpperCase() }}
        <div class="col" v-if="status.id === todo.status.id">
            <div>{{ todo.id }}</div>
            <div>{{ todo.status.id }}</div>
            <div>{{ todo.title }}</div>
        </div>

    </v-col>
</template>

<script>

    export default {
        name: "KanbanColumn",
        props: {
            todo: null,
            title: null,
            status: null
        }
    }
</script>

<style lang="scss">
    .kanban-column {
        min-width: 220px;
        max-width: 220px;
        height: 100%;
        background-color: lightgray;
        border-radius: 8px;
        padding: 5px;

        .col {
            border: whitesmoke 1px solid;
            margin-bottom: 4px;
            margin-top: 4px;
            border-radius: 8px;
            background-color: whitesmoke;
            height: 100px;
        }
    }
</style>