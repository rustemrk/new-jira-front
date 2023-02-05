<template>
    <aside class="sidebar" :class="isCollapsed ? 'sidebar__collapsed' : ''">
        <v-list nav dense>
            <v-subheader v-if="!isCollapsed">ПЛАНИРОВАНИЕ</v-subheader>
            <v-list-item-group
                class="sidebar-group"
                color="primary"
                mandatory
            >
                <main-sidebar-item
                    v-for="item in staticItems"
                    :key="item.id"
                    :item="item"
                />
            </v-list-item-group>
        </v-list>
    </aside>
</template>

<script>
    import {mapGetters} from "vuex";
    import MainSidebarItem from "@/components/sidebar/MainSidebarItem";

    export default {
        name: "MainSidebar",
        components: {MainSidebarItem},
        data() {
            return {
                group: null,
            }
        },
        computed: {
            ...mapGetters({
                isCollapsed: 'sidebar/isCollapsed',
                staticItems: 'sidebar/getStaticItems'
            })
        },
    }
</script>

<style lang="scss">

</style>