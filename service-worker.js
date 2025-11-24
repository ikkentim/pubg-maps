self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/icon-192.png',
          '/icon-512.png',
          '/deston.html',
          '/deston.png',
          '/erangel.html',
          '/erangel.webp',
          '/paramo.html',
          '/paramo.png',
          '/taego.html',
          '/taego.webp',
          '/vikendi.html',
          '/vikendi.jpg',
          '/rondo.html',
          '/rondo.jpg',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
