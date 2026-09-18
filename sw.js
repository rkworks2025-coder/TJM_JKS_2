const CACHE_NAME = 'jks2-cache-v2';
const CACHE_FILES = [
  './',
  './index.html',
  './app.js',
  './style.css',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ネットワーク優先・失敗時のみキャッシュ
self.addEventListener('fetch', (e) => {
  // GASやGoogle Maps APIはキャッシュしない
  if (e.request.url.includes('script.google.com') ||
      e.request.url.includes('maps.googleapis.com') ||
      e.request.url.includes('fonts.googleapis.com')) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
