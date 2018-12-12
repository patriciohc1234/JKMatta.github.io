var dataCacheName = 'DachserData-v1';
var cacheName = "Dachser-v1";
var filesToCache = [
    "/",
    "/index.html",
    "/lista.html",
    "/menu.html",
    "/viewlist.html",
    "/viewtienda.html",
    "/js/addProductos.js",
    "/js/api.js",
    "/js/detalle-list.js",
    "/js/grafica.js",
    "/js/menu-listas.js",
    "/js/menu-tiendas.js",
    "/js/menu-tiendaso.js",
    "/js/tienda-fisica.js",
    "/js/tienda-online.js",
    "/js/time.js",
    "/js/login.js",
    "/js/app.js",
    "/img/login.jpg",
    "/img/logo.png",
    "/img/logo128.png",
    "/img/logo144.png",
    "/img/logo152.png",
    "/img/logo256.png",
    "/img/logo512.png",
    "/img/menu.jpg",
    "/img/silueta-del-icono-de-hogar.png",
    "/css/login.css",
    "/css/base.css",
    "/css/lista.css",
    "/css/load.css",
    "/css/menu.css",
    "/css/viewlist.css",
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  /*
   * Fixes a corner case in which the app wasn't returning the latest data.
   * You can reproduce the corner case by commenting out the line below and
   * then doing the following steps: 1) load app for first time so that the
   * initial New York City data is shown 2) press the refresh button on the
   * app 3) go offline 4) reload the app. You expect to see the newer NYC
   * data, but you actually see the initial data. This happens because the
   * service worker is not yet activated. The code below essentially lets
   * you activate the service worker faster.
   */
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
  if (e.request.url.indexOf(dataUrl) > -1) {
    /*
     * When the request URL contains dataUrl, the app is asking for fresh
     * weather data. In this case, the service worker always goes to the
     * network and then caches the response. This is called the "Cache then
     * network" strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
     */
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    /*
     * The app is asking for app shell files. In this scenario the app uses the
     * "Cache, falling back to the network" offline strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
     */
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});