import Vue from "vue";
import App from "./App.vue";
import "./assets/global.scss";
import VueParticles from 'vue-particles'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(VueParticles)

Vue.config.productionTip = false;


new Vue({
    render: h => h(App)
}).$mount("#app");
