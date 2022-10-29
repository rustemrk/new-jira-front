<template>
    <v-list-item @click="go(item.route)" class="sidebar-item">
        <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
</template>

<script>
    import router from "@/router";

    export default {
        name: "MainSidebarItem",
        props: {
            item: null
        },
        methods: {
            go(route) {
                router.push(route).catch(err => {
                });
            },
        }
    }
</script>

<style lang="scss">

</style>