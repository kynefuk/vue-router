import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

// 全てのページ遷移前に実行される(グローバル)
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    console.log('global beforeEach')
    next()
  }
  next()

})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')