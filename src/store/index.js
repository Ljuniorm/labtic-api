import Vue from 'vue'
import Vuex from 'vuex'
import reqModel from './modulos/reqModel'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        reqModel
    }
})
