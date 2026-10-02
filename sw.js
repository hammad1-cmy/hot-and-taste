// AZFC Official Service Worker - Offline Caching & Background Push Engine
const CACHE_NAME = 'azfc-v5.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './admin.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((k) => {
          if (k !== CACHE_NAME) return caches.delete(k);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

// =========================================================================
// NATIVE SYSTEM OS BACKGROUND PUSH NOTIFICATION HANDLER
// =========================================================================
self.addEventListener('push', (event) => {
  let data = {
    title: '👑 AZFC VIP Hot Deal Alert!',
    body: 'Fresh hot crispy pizza & burger deals just launched across all Lahore branches!',
    tag: 'azfc-deal-alert',
    url: './index.html'
  };

  if (event.data) {
    try {
      data = Object.assign(data, event.data.json());
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: './icon-192.png',
    badge: './icon-192.png',
    vibrate: [200, 100, 200, 100, 200],
    tag: data.tag || 'azfc-deal',
    renotify: true,
    requireInteraction: true,
    data: {
      url: data.url || './index.html',
      timestamp: Date.now()
    },
    actions: [
      { action: 'open_app', title: '🔥 View Hot Deals' },
      { action: 'dismiss', title: 'Close' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Direct Message Trigger from Frontend / Admin Broadcast Engine
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const payload = event.data.payload || {};
    const title = payload.title || '👑 AZFC Fast & Crispy';
    const options = {
      body: payload.message || payload.body || 'New hot crispy deal is now available!',
      icon: './icon-192.png',
      badge: './icon-192.png',
      vibrate: [200, 100, 200, 100, 200],
      tag: payload.id || 'azfc-broadcast-' + Date.now(),
      renotify: true,
      requireInteraction: true,
      data: {
        url: './index.html'
      },
      actions: [
        { action: 'open_app', title: '🔥 Open App' }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  }
});

// Notification Click Handler: Deep-link straight into AZFC app
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'dismiss') return;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes('index.html') && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('./index.html');
      }
    })
  );
});
