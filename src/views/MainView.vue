<template>
    <div class="main-view">
        <sidebar/>
        <router-view/>
    </div>
</template>

<script>
    import Sidebar from "@/components/sidebar/Sidebar";

    export default {
        name: "MainView",
        components: {Sidebar},
        data() {
            return {}
        },
    }
</script>

<style lang="scss">
    .main-view {
        background-color: var(--v-backgroundGlobal-base);
        //transition: background-color .1s;
    }
</style>