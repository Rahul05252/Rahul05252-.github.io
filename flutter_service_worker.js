'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c2afb5404858ff0dc5daa321b712de71",
"assets/AssetManifest.bin.json": "9a08c5bf80c8ebd047149da5d69ec948",
"assets/AssetManifest.json": "79fb0f6994f1a723c7f175e80b5d0fc3",
"assets/Assets/Fonts/Alice-Regular.ttf": "c177c5a41939595f514cbaad18b1e439",
"assets/Assets/Fonts/Bainley-Regular.otf": "7117c475a8bfdec5563327a63d5d8c35",
"assets/Assets/Fonts/Charisty.otf": "5e5bbc70799d1be39eaace15e9ec19ff",
"assets/Assets/Fonts/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/Assets/Images/1.jpg": "81f15f7eda36cf491dcf4d86a7cfba3a",
"assets/Assets/Images/2.jpg": "eb28babdccf6a9cb0c219c2730cc1d5d",
"assets/Assets/Images/3.jpg": "f622e1f26c74609bf8771be418cb17f9",
"assets/Assets/Images/4.jpg": "a0d17914b87949df76c743647fecc972",
"assets/Assets/Images/5.jpg": "6ee3490faf8f1329dd7d10b348a29e9c",
"assets/Assets/Images/6.jpg": "fdb1b9e3e68b1e7cff8c5cf00af64813",
"assets/Assets/Images/facebook.png": "a75127b07e697fdb6714770ef1e1f54b",
"assets/Assets/Images/github.png": "a17150d90465d2bb381781ab5baf0147",
"assets/Assets/Images/insatagram.png": "c2567e63b1783f9b7114471831bcdead",
"assets/Assets/Images/java%25203.png": "6fa3c42c459df8ec94fbfd15f3a55ee4",
"assets/Assets/Images/linkein.png": "a08d5cfd6c66a3d5f81d92c61b8ecc06",
"assets/Assets/Images/png1.png": "bd58b618ad7650842809308a8466b95d",
"assets/Assets/Images/png2.png": "4f3dc406373b33f51cd4dca8da52e30b",
"assets/Assets/Images/png3.png": "0af541aed286fef9334b37abaecd48bd",
"assets/Assets/Images/png4.png": "6f0860275f625e17320c9475b87e3e93",
"assets/Assets/Images/png5.png": "29193fd6616698f841dc7f7472057c28",
"assets/Assets/Images/png6.png": "ad511c3d1502149efa859837dccea63a",
"assets/Assets/Images/rahul.png": "c5226d46308109dc8ff8acf96f3382f0",
"assets/Assets/Images/x%2520twiitter.png": "7eb57922b9ac9c7a5f1d1c490fcac6d8",
"assets/FontManifest.json": "9953af1ed7bfbba6a674d9bf0d4d714a",
"assets/fonts/MaterialIcons-Regular.otf": "b7c5050b77e270f3a4aa2d1e8a3aa755",
"assets/NOTICES": "267d5f81ea3861ad58c40dcf86b32a44",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1fb35e01025dc929c981fd7387146ce6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "f2937289289665f1c88b47569ba4421e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon-16x16.png": "3016198b0e2af1feae065e8457a4c97f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-icon-192x192.png": "de99cf92d3c50bb79905cefd141ea877",
"icons/android-icon-36x36.png": "bc4fe733d214c3fb73754fcc419f7a1b",
"icons/android-icon-48x48.png": "f2a7b571c47e74ce856883792ccbbce7",
"icons/apple-icon-120x120.png": "44c74482b97a58268dc21d72d40e55f9",
"icons/apple-icon-152x152.png": "f6024cdff92a9a70a9699b344d2255ef",
"icons/apple-icon-180x180.png": "00ccb43195b82a570ca2816ac435a245",
"icons/apple-icon-57x57.png": "b21c69c00e82942bab35228d2c6033fb",
"icons/apple-icon-60x60.png": "8eed62b82ae09cd9c3afe30d9455d66c",
"icons/apple-icon-72x72.png": "b9a466334d824ea70731bce82c3765ce",
"icons/apple-icon-76x76.png": "ba140800c93fa3c5a0afdd9da957382d",
"icons/favicon-16x16.png": "3016198b0e2af1feae065e8457a4c97f",
"icons/favicon-32x32.png": "2147922f53a0e5af27bf19ffbd139287",
"icons/favicon-96x96.png": "768a9aaab70058e3445135d0ceb79649",
"icons/ms-icon-144x144.png": "add859093d224ce40b2f83a2d895a976",
"icons/ms-icon-150x150.png": "b06227e3c43b5a70a8acfc24f48b6f88",
"icons/ms-icon-310x310.png": "070a2aed87408e622602a5580adf0478",
"icons/ms-icon-70x70.png": "e2f2b39fe2ec5341b8bcdfbaa6541624",
"index.html": "c768dc910795aef8ad3c22031ece5ab5",
"/": "c768dc910795aef8ad3c22031ece5ab5",
"main.dart.js": "2654b358560b67a5b1a76fad099b36ba",
"manifest.json": "a3657eb97850ed6840f7e87950955688",
"version.json": "89f27a9f4e6bb7e26552c9541033ccf9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
