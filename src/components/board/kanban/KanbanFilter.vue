<template>
    <div class="kanban-filter">
        <type-filter :filter="filter"/>
    </div>
</template>

<script>
    import TypeFilter from "@/components/board/filter/TypeFilter";

    export default {
        name: "KanbanFilter",
        components: {TypeFilter},
        props: {
            filter: Object
        },
        data() {
            return {}
        },

    }
</script>

<style lang="scss">

</style>