// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('contact-us', {
	data: function() {
		return {
			email: 'info@mycompany.com'
		};
	},
	template: `
		<div>
			<h1>Contact Us</h1>
			<p>Please send an e-mail to: {{ email }}</p>
		</div>
	`
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
