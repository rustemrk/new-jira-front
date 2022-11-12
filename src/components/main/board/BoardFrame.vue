<template>
    <main class="board">
        <kanban/>
    </main>
</template>

<script>
    import Kanban from "@/components/main/board/kanban/Kanban";

    export default {
        name: "BoardFrame",
        components: {Kanban},
    }
</script>

<style lang="scss">

</style>