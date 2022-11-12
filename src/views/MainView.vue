<template>
    <div class="main-view">
        <main-sidebar/>
        <router-view/>
    </div>
</template>

<script>
    import MainToolbar from "@/components/toolbar/Toolbar";
    import MainSidebar from "@/components/main/sidebar/MainSidebar";

    export default {
        name: "MainView",
        components: {MainSidebar, MainToolbar},
        data() {
            return {}
        },
    }
</script>

<style lang="scss">

</style>