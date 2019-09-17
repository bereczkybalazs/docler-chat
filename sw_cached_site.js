var cacheName = 'v2';

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cache) {
                    if (cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request)
            .then(function (response) {
                var cacheAssets = response.clone();
                caches
                    .open(cacheName)
                    .then(function (cache) {
                        cache.put(event.request, cacheAssets)
                    });
                return response;
            })
            .catch(function () {
                caches.match(event.request);
            })
    )
});
