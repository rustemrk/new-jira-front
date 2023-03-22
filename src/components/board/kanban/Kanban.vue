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