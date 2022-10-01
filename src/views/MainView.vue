<template>
    <div>
        <main-toolbar/>
        <div>
            <main-sidebar/>
        </div>
    </div>
</template>

<script>
    import MainToolbar from "@/components/main/MainToolbar";
    import MainSidebar from "@/components/main/MainSidebar";

    export default {
        name: "MainView",
        components: {MainSidebar, MainToolbar},
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">

</style>