self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("habit-cache").then(cache => {
      return cache.addAll([
        "/daftar/",
        "/daftar/index.html",
        "/daftar/style.css",
        "/daftar/app.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
