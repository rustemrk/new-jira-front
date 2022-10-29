<template>
    <div>
        <main-toolbar/>
        <div class="content">
            <main-sidebar/>
            <router-view class="frame"/>
        </div>
    </div>
</template>

<script>
    import MainToolbar from "@/components/main/toolbar/MainToolbar";
    import MainSidebar from "@/components/main/sidebar/MainSidebar";

    export default {
        name: "MainView",
        components: {MainSidebar, MainToolbar},
        data() {
            return {

            }
        },
    }
</script>

<style lang="scss">
    .content {
        display: flex;
        flex-direction: row;
        height: calc(100vh - 50px);

        .frame {
            width: 100%;
        }
    }
</style>