<template>
    <aside class="sidebar" :class="isCollapsed ? 'sidebar__collapsed' : ''">
        <v-list nav dense>
            <!--            <v-subheader v-if="!isCollapsed">REPORTS</v-subheader>-->
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
    import MainSidebarItem from "@/components/main/sidebar/MainSidebarItem";

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
    * {
        transition: 0.15s;
    }

    .sidebar {
        height: calc(100vh - 50px);
        width: 280px;
        border-right: 1px #DCDCDC solid;
        margin: 0;
    }

    .sidebar__collapsed {
        width: 57px;
    }
</style>