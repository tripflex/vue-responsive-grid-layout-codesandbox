import Vue from 'vue';
import App from './App.vue';
import VueResponsiveGridLayout from 'vue-responsive-grid-layout';

Vue.use(VueResponsiveGridLayout);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount('#app');
