importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/123ebe470d8b29fdf9a0.js",
    "revision": "9d4ea47aa0ed8411f25a8158848a68a9"
  },
  {
    "url": "/_nuxt/17581b075d28614d3f80.js",
    "revision": "646803182f74408de8d37f07e8b6a444"
  },
  {
    "url": "/_nuxt/18163f075ab58abf5ab9.js",
    "revision": "13789bdd7b2515be39a7cf5b2f0a66d4"
  },
  {
    "url": "/_nuxt/1f7a535e6ece4eda0dac.js",
    "revision": "e198a02a39eae09ce9361478f77de40d"
  },
  {
    "url": "/_nuxt/3a6dc3b0b752baa48b99.js",
    "revision": "63bb7b3cfa1d768ceffbeda3925f90dc"
  },
  {
    "url": "/_nuxt/5afc3b5b9ef7e711706e.js",
    "revision": "28304d3f109084d1367a5c945b81f453"
  },
  {
    "url": "/_nuxt/64beb077fe003cdf260a.js",
    "revision": "9497e60d8bd45d1ba19f175f364aa94d"
  },
  {
    "url": "/_nuxt/68fd3167420663043d2d.js",
    "revision": "f5b17cca6fb80b8c74f366adb84ef220"
  },
  {
    "url": "/_nuxt/6a3dbd4386cd01bfcc27.js",
    "revision": "2121db252c7dd55b336734afce989c98"
  },
  {
    "url": "/_nuxt/82911b35df4a72809258.js",
    "revision": "47a0d6d7adb46c60c0a3e8cdb07cf8f3"
  },
  {
    "url": "/_nuxt/bfa375865f615dde8356.js",
    "revision": "d5b40bf225ae52e09c977808101f8721"
  },
  {
    "url": "/_nuxt/d8f974325196d9e5d8f6.js",
    "revision": "92d4970b3d903c57751a282b8eb7a7e2"
  },
  {
    "url": "/_nuxt/dffc9e6debb34d71513d.js",
    "revision": "68ccadb101bf65ec109c3106d1238caa"
  },
  {
    "url": "/_nuxt/e2583e7a7ca7481cd619.js",
    "revision": "ae435ac3bb8570b4a6f5037fc8778df0"
  },
  {
    "url": "/_nuxt/f8f4a8bec617d0270d44.js",
    "revision": "a4b51b3649d410befc80bd60338c12f0"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
