import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import app from './modules/app.js'
// import login from './modules/login.js'
// import common from './modules/common.js'

//this.$store.state.
//this.$store.getters


export default new Vuex.Store({
   modules: {
     app
   }
 })
