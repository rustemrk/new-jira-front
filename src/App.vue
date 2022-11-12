<template>
    <v-app class="app">
        <toolbar/>
        <router-view/>
    </v-app>
</template>

<script>
    import Toolbar from "@/components/toolbar/Toolbar";

    export default {
        name: 'App',
        components: {Toolbar},
        data() {
            return {}
        },
    };
</script>