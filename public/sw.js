// LICITA SENTINEL - Service Worker
const CACHE_NAME = "licita-sentinel-v2";
const STATIC_ASSETS = [
  "/",
  "/dashboard",
  "/login",
  "/manifest.json",
  "/favicon.ico",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-touch-icon.png",
  "/icon.svg"
];

// Instalação: Cache dos recursos principais do App Shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[LICITA-SENTINEL-SW] App Shell pré-armazenado para instalação móvel.");
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn("[LICITA-SENTINEL-SW] Erro não impeditivo em pré-cache:", err);
      });
    })
  );
  self.skipWaiting();
});

// Ativação: Limpeza de caches obsoletos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[LICITA-SENTINEL-SW] Removendo cache obsoleto:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estratégia: Network First com fallback para Cache
self.addEventListener("fetch", (event) => {
  // Ignora requisições não-GET ou esquemas que não sejam http/https (como chrome-extension)
  if (event.request.method !== "GET" || !event.request.url.startsWith("http")) {
    return;
  }

  // APIs do Next.js continuam priorizando a rede
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, copy);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.mode === "navigate") {
            return caches.match("/dashboard") || caches.match("/");
          }
        });
      })
  );
});
