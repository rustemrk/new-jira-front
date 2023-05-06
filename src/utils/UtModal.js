import Vue from 'vue'
// import IdGenerator from '~/components/utils/IdGenerator'
// import ErrorModal from '~/components/modal/ErrorModal'
import router from "@/router";
import store from "@/store";
import vuetify from '../plugins/vuetify'

let modalCounter = 0

export const UtModal = {
    /**
     * Show modal
     * @param {Modal component} modalClass
     * @param {Modal configs} config
     */
    showModal(modalClass, config = {}) {
        const self = this
        modalCounter++

        const CompClone = Vue.extend(modalClass)
        const propsData = Object.assign(
            {
                id: `dm-modal-${modalCounter}`,
                value: true // to show modal
            },
            config.propsData ? config.propsData : {}
        )
        const modalCfg = {...config, propsData}

        const modalContainer = document.createElement('div')
        document.body.appendChild(modalContainer)

        const comp = new CompClone({
            propsData: modalCfg.propsData,
            router,
            store,
            vuetify,
            mounted() {
                const th = this
                th.$once('close', () => th.$destroy())

                // Add event listeners
                const events = modalCfg.on || {}
                for (const name in events) {
                    th.$on(name, events[name])
                }
            },
            destroyed() {
                // Make sure we not in document any more
                if (this.$el && this.$el.parentNode) {
                    this.$el.parentNode.removeChild(this.$el)
                }
            }
        })
        comp.$mount(modalContainer)
    }
}