import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  List: () => import('../../components/list/List.vue' /* webpackChunkName: "components/list" */).then(c => wrapFunctional(c.default || c)),
  Nav: () => import('../../components/nav/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/logo/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
