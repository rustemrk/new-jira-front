<template>
    <aside class="sidebar" :class="isCollapsed ? 'sidebar__collapsed' : ''">
        <v-list nav dense>
            <v-subheader v-if="!isCollapsed">ПЛАНИРОВАНИЕ</v-subheader>
            <v-list-item-group
                class="sidebar-group"
                color="primary"
                mandatory
            >
                <sidebar-item
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
    import SidebarItem from "@/components/sidebar/SidebarItem";

    export default {
        name: "Sidebar",
        components: {SidebarItem},
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