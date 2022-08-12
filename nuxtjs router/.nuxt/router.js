import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _25cec7aa = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _8343e244 = () => interopDefault(import('..\\pages\\items.vue' /* webpackChunkName: "pages/items" */))
const _63ed6fe4 = () => interopDefault(import('..\\pages\\items\\index.vue' /* webpackChunkName: "pages/items/index" */))
const _f9c3c968 = () => interopDefault(import('..\\pages\\items\\_id.vue' /* webpackChunkName: "pages/items/_id" */))
const _0cd076f0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _6a6b96b8 = () => interopDefault(import('..\\pages\\_slug\\deneme.vue' /* webpackChunkName: "pages/_slug/deneme" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _25cec7aa,
    name: "about"
  }, {
    path: "/items",
    component: _8343e244,
    children: [{
      path: "",
      component: _63ed6fe4,
      name: "items"
    }, {
      path: ":id",
      component: _f9c3c968,
      name: "items-id"
    }]
  }, {
    path: "/",
    component: _0cd076f0,
    name: "index"
  }, {
    path: "/:slug/deneme",
    component: _6a6b96b8,
    name: "slug-deneme"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
