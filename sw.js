importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05129d5813f27ade5922.js",
    "revision": "17d6f70d097522dfe8cf04229cce1df4"
  },
  {
    "url": "/_nuxt/3f08432d1ae3ecd1b9f6.js",
    "revision": "05206abcb4928347e18c12366ae4fff0"
  },
  {
    "url": "/_nuxt/52e080b1f8b4c883fdd2.js",
    "revision": "dda4329eb3c0dc3b353fbc147e4ad94c"
  },
  {
    "url": "/_nuxt/7052ea119bab79e16415.js",
    "revision": "9588c26808689073afa653fd4605e0df"
  },
  {
    "url": "/_nuxt/8cc878e4c936861cd89d.js",
    "revision": "ed9aaf44e8207650fe9efbb23167000a"
  },
  {
    "url": "/_nuxt/9e6ebb2e203ec1383bfe.js",
    "revision": "f5d91e07ea518df35a2921c8d3167e26"
  },
  {
    "url": "/_nuxt/eb689ba96366bfc5f842.js",
    "revision": "b928145f92d1d864514fd767fa3c0e7e"
  }
], {
  "cacheId": "algorand",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
