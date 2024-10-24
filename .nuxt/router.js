import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _33ec0579 = () => interopDefault(import('..\\pages\\artistas.vue' /* webpackChunkName: "pages/artistas" */))
const _0fd8bd25 = () => interopDefault(import('..\\pages\\museo.vue' /* webpackChunkName: "pages/museo" */))
const _76786ece = () => interopDefault(import('..\\pages\\pinturas.vue' /* webpackChunkName: "pages/pinturas" */))
const _62bfbc7c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _954e01e0 = () => interopDefault(import('..\\pages\\artista\\_slug.vue' /* webpackChunkName: "pages/artista/_slug" */))
const _1341dcdc = () => interopDefault(import('..\\pages\\museos\\_slug.vue' /* webpackChunkName: "pages/museos/_slug" */))
const _44b756b6 = () => interopDefault(import('..\\pages\\pintura\\_slug.vue' /* webpackChunkName: "pages/pintura/_slug" */))

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
    component: _33ec0579,
    name: "artistas"
  }, {
    path: "/museo",
    component: _0fd8bd25,
    name: "museo"
  }, {
    path: "/pinturas",
    component: _76786ece,
    name: "pinturas"
  }, {
    path: "/",
    component: _62bfbc7c,
    name: "index"
  }, {
    path: "/artista/:slug?",
    component: _954e01e0,
    name: "artista-slug"
  }, {
    path: "/museos/:slug?",
    component: _1341dcdc,
    name: "museos-slug"
  }, {
    path: "/pintura/:slug?",
    component: _44b756b6,
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
