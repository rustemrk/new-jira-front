<template>
    <div class="main-view">
        <main-sidebar/>
        <router-view/>
    </div>
</template>

<script>
    import MainSidebar from "@/components/sidebar/MainSidebar";

    export default {
        name: "MainView",
        components: {MainSidebar},
        data() {
            return {}
        },
    }
</script>

<style lang="scss">

</style>