// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'
// import router from './router'
import Users from './components/Users'
import Test from './components/Test'

Vue.use(VueRouter);
Vue.use(vueResource);

const router = new VueRouter ({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Users},
    {path: '/test', component: Test}
  ]
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/">Users</router-link></li>
        <li><router-link to="/">Test</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `,
  // components: { App },
  // template: '<App/>'
}).$mount('#app');
