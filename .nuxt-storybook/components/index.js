export { default as List } from '../../components/list/List.vue'
export { default as Logo } from '../../components/logo/Logo.vue'
export { default as Nav } from '../../components/nav/Nav.vue'

export const LazyList = import('../../components/list/List.vue' /* webpackChunkName: "components/list" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/logo/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNav = import('../../components/nav/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
