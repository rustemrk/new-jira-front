<template>
    <main class="board">
        <kanban-filter :filter="filter"/>
        <kanban v-if="statuses" :statuses="statuses"/>
    </main>
</template>

<script>
    import Kanban from "@/components/board/kanban/Kanban";
    import Frame from "@/Frame";
    import KanbanFilter from "@/components/board/kanban/KanbanFilter";
    import boardApi from "@/api/boardApi";

    export default {
        name: "BoardFrame",
        components: {KanbanFilter, Kanban},
        extends: Frame,
        data() {
            return {
                statuses: null,
                filter: null,
            }
        },
        created() {
            this.getDefaultFilter();
            this.fetchData()
            this.unwatchFilter = this.$watch('filter', this.onFilterChanged, {deep: true});
        },
        destroyed() {
            this.unwatchFilter();
        },
        watch: {
            todoCreated() {
                this.fetchData()
            },
            todoUpdated() {
                this.fetchData()
            },
        },
        computed: {
            todoCreated() {
                return this.$store.getters["event/todoCreated"];
            },
            todoUpdated() {
                return this.$store.getters["event/todoUpdated"];
            },
        },
        methods: {
            fetchData() {
                this.setAppBusy(true);
                try {
                    this.getTodoStatuses();
                } catch (err) {
                    console.error(err)
                } finally {
                    this.setAppBusy(false)
                }
            },
            onFilterChanged() {
                this.fetchData();
            },
            getDefaultFilter() {
                this.filter = {
                    todoTypes: []
                }
            },
            getTodoStatuses() {
                boardApi.search({
                    filter: this.filter
                }).then(response => {
                    this.statuses = response.data
                }).catch(err => console.error(err))
            },
        },
    }
</script>

<style lang="scss">
    @import "src/scss/abstracts/variables";

    .board {
        padding: 20px 16px 20px 10px !important; // временное решение
        flex-grow: 1;
        max-height: calc(100vh - 40px);
        width: 100%;

        @media screen and (max-width: 1599px) {
            width: 80%;
        }

        // todo нужно оптимизировать под разные разрешения
        //@media screen and (min-width: 4001px) {
        //  width: 87%;
        //}
        //
        //@media screen and (min-width: 2501px) and (max-width: 4000px) {
        //  width: 88.5%;
        //}
        //
        //@media screen and (min-width: 1600px) and (max-width: 2500px) {
        //  width: 88%;
        //}

    }
</style>