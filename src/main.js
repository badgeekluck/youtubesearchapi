import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('formateDate' , function (value){
  if(!value) return ''
  return moment(value.toString()).format('MM/DD/YYYY hh:mm')
})

new Vue({
  render: h => h(App),
}).$mount('#app')
