self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/pwagastosbuffalo/',
        '/pwagastosbuffalo/index.html',
        '/pwagastosbuffalo/manifest.json',
        'https://cdn-bnogl.nitrocdn.com/rjBzrGgodRWFccmtRumuxcGUUozZeaWW/assets/images/optimized/rev-dcc7c1c/getprodio.com/wp-content/uploads/2022/09/Construction-costs-bro-1024x1024.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
