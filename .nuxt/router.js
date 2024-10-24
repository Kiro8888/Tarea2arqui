import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _92651cf8 = () => interopDefault(import('..\\pages\\artistas.vue' /* webpackChunkName: "pages/artistas" */))
const _21c6c4fa = () => interopDefault(import('..\\pages\\museo.vue' /* webpackChunkName: "pages/museo" */))
const _0d4c4a4e = () => interopDefault(import('..\\pages\\pinturas.vue' /* webpackChunkName: "pages/pinturas" */))
const _3ee3acd2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _325df6db = () => interopDefault(import('..\\pages\\artista\\_slug.vue' /* webpackChunkName: "pages/artista/_slug" */))
const _d9ad809e = () => interopDefault(import('..\\pages\\museos\\_slug.vue' /* webpackChunkName: "pages/museos/_slug" */))
const _5aa94c70 = () => interopDefault(import('..\\pages\\pintura\\_slug.vue' /* webpackChunkName: "pages/pintura/_slug" */))

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
    component: _92651cf8,
    name: "artistas"
  }, {
    path: "/museo",
    component: _21c6c4fa,
    name: "museo"
  }, {
    path: "/pinturas",
    component: _0d4c4a4e,
    name: "pinturas"
  }, {
    path: "/",
    component: _3ee3acd2,
    name: "index"
  }, {
    path: "/artista/:slug?",
    component: _325df6db,
    name: "artista-slug"
  }, {
    path: "/museos/:slug?",
    component: _d9ad809e,
    name: "museos-slug"
  }, {
    path: "/pintura/:slug?",
    component: _5aa94c70,
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
