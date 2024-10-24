import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c0c77436 = () => interopDefault(import('..\\pages\\artistas.vue' /* webpackChunkName: "pages/artistas" */))
const _5caa3439 = () => interopDefault(import('..\\pages\\museo.vue' /* webpackChunkName: "pages/museo" */))
const _3baea18c = () => interopDefault(import('..\\pages\\pinturas.vue' /* webpackChunkName: "pages/pinturas" */))
const _1b7198d6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _7cfa3e7c = () => interopDefault(import('..\\pages\\artista\\_slug.vue' /* webpackChunkName: "pages/artista/_slug" */))
const _6404fff0 = () => interopDefault(import('..\\pages\\museos\\_slug.vue' /* webpackChunkName: "pages/museos/_slug" */))
const _b574d7de = () => interopDefault(import('..\\pages\\pintura\\_slug.vue' /* webpackChunkName: "pages/pintura/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/artistas",
    component: _c0c77436,
    name: "artistas"
  }, {
    path: "/museo",
    component: _5caa3439,
    name: "museo"
  }, {
    path: "/pinturas",
    component: _3baea18c,
    name: "pinturas"
  }, {
    path: "/",
    component: _1b7198d6,
    name: "index"
  }, {
    path: "/artista/:slug?",
    component: _7cfa3e7c,
    name: "artista-slug"
  }, {
    path: "/museos/:slug?",
    component: _6404fff0,
    name: "museos-slug"
  }, {
    path: "/pintura/:slug?",
    component: _b574d7de,
    name: "pintura-slug"
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
