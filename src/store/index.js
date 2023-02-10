import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from "@/store/modules/sidebar";
import event from "@/store/modules/event";
import app from "@/store/modules/app";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        app,
        sidebar,
        event
    }
})
