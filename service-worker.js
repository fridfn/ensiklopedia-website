// Cache name
const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/global.css',
  '/main.jsx',
  '/app.jsx',
];

// Install event: digunakan untuk menyimpan aset ke cache saat Service Worker diinstal
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker installing and caching files');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event: digunakan untuk menghapus cache lama saat Service Worker diaktifkan
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event: mengatur bagaimana permintaan akan ditangani (misalnya, dari cache atau dari jaringan)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
  );
});
