//SRC:https://www.youtube.com/watch?v=ksXwaWHCW6k&ab_channel=TraversyMedia

//Important to know that due to being a SPA the browser is not redirected which means it doesn't cache the tabs, so you have to go and refresh
const cacheName = "cache3";

//install
self.addEventListener("install", (event) => {
  console.log(`ServiceWorker is Installed`);
});
//activate and remove old cache
self.addEventListener("activate", (event) => {
  console.log(`ServiceWorker is activated`);
  event.waitUntil(
      caches.keys().then((cacheNames) =>{
          return Promise.all(
              cacheNames.map((cache)=>{
                  if(cache!==cacheName){
                      console.log("ServiceWorker deleted old cache")
                    return caches.delete(cache);
                  }
              })
          )
      })
  );
});
// fetch resources and cache them
self.addEventListener('fetch', e => {
  console.log('ServiceWorker is Fetching');
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const resClone = res.clone();
        // Open cahce
        caches.open(cacheName).then(cache => {
          // Add response to cache
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch(err => caches.match(e.request).then(res => res))
  );
});
