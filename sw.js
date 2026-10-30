const CACHE="as-music-pro-shell-v2";
const APP_SHELL=["./","./index.html","./manifest.webmanifest","./icon.svg"];

self.addEventListener("install",event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate",event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch",event=>{
  const request=event.request;
  const url=new URL(request.url);
  if(request.method!=="GET" || url.origin!==self.location.origin)return;

  event.respondWith((async()=>{
    try{
      const response=await fetch(request,{cache:"no-store"});
      if(response && response.ok){
        const copy=response.clone();
        const cache=await caches.open(CACHE);
        await cache.put(request,copy);
      }
      return response;
    }catch(error){
      const cached=await caches.match(request);
      if(cached)return cached;
      if(request.mode==="navigate"){
        return (await caches.match("./index.html")) || Response.error();
      }
      return Response.error();
    }
  })());
});
