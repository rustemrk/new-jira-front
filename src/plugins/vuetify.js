import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        options: {customProperties: true},
        themes: {
            light: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                backgroundGlobal: '#FFFFFF',
                borderLine: '#DCDCDC',
                kanbanCardHover: '#F6F6F6',
                kanbanColumnBG: '#F8F8FF',
            },
            dark: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                backgroundGlobal: '#1A1A1A',
                borderLine: '#545454',
                kanbanCardHover: '#424242', // ???
                kanbanColumnBG: '#242424',
            },
        },
    },
});

export default vuetify