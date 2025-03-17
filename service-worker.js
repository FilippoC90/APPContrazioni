self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("contrazioni-cache").then((cache) =>
      cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/service-worker.js"
        // aggiungi anche eventuali immagini o css se li usi
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
