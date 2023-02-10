<template>
    <v-app class="app">
        <toolbar/>
        <vue-topprogress
            ref="topProgress"
            :speed="200"/>
        <router-view/>
    </v-app>
</template>

<script>
    import Toolbar from "@/components/toolbar/Toolbar";
    import {vueTopprogress} from 'vue-top-progress'

    export default {
        name: 'App',
        components: {Toolbar, vueTopprogress},
        data() {
            return {}
        },
        computed: {
            isAppBusy() {
                return this.$store.getters["app/isAppBusy"];
            },
        },
        watch: {
            isAppBusy() {
                if (this.isAppBusy) {
                    this.$refs.topProgress.start();
                } else {
                    this.$refs.topProgress.done();
                }
            },
        },
    };
</script>