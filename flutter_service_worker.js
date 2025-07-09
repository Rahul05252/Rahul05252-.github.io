'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "99292d98badf05f9e1f8925c9efafdc4",
"assets/AssetManifest.bin.json": "1d22b19bbe2f70abc5bf82956c438adc",
"assets/AssetManifest.json": "2b305637505c54a4314eba93ba1caa0d",
"assets/Assets/Fonts/Alice-Regular.ttf": "c177c5a41939595f514cbaad18b1e439",
"assets/Assets/Fonts/Bainley-Regular.otf": "7117c475a8bfdec5563327a63d5d8c35",
"assets/Assets/Fonts/Charisty.otf": "5e5bbc70799d1be39eaace15e9ec19ff",
"assets/Assets/Fonts/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/Assets/Icons/facebook%2520128.png": "722015e7e155a40a46d636d3e230a8be",
"assets/Assets/Icons/github%2520%2520128.png": "0dab1d6c538dd5be67a9befec2f632ae",
"assets/Assets/Icons/gmail%2520128.png": "768c7c7be2ee2f69e0cac54f31e0a55a",
"assets/Assets/Icons/google-maps%2520128.png": "caa89167b044edccb929d319df7e8211",
"assets/Assets/Icons/instagram%2520128.png": "e5ad6e950e3d5b7e2a87a7ac5b67bcf5",
"assets/Assets/Icons/linkedin%2520128.png": "c24d2589bc95513e7ac74c16f97109bd",
"assets/Assets/Icons/phone%2520128.png": "8b442cfbe7db4f4320a7340fe9618d9c",
"assets/Assets/Icons/twitter%2520128.png": "d0079d03daadd3eebbe8f79fd4c297c9",
"assets/Assets/Icons/whatsapp%2520128.png": "13f9b7eb411cb152f661c46b8ca3a729",
"assets/Assets/Images/1.jpg": "81f15f7eda36cf491dcf4d86a7cfba3a",
"assets/Assets/Images/1900976.jpg": "392fbd2f7f5286f62d34f773ddb434b6",
"assets/Assets/Images/2.jpg": "eb28babdccf6a9cb0c219c2730cc1d5d",
"assets/Assets/Images/2314950.jpg": "63516cb5ab295c39c6c83299e6682c3d",
"assets/Assets/Images/2315001.jpg": "eef7fb980a49c263088126d94bdb3223",
"assets/Assets/Images/3.jpg": "f622e1f26c74609bf8771be418cb17f9",
"assets/Assets/Images/4.jpg": "a0d17914b87949df76c743647fecc972",
"assets/Assets/Images/5.jpg": "6ee3490faf8f1329dd7d10b348a29e9c",
"assets/Assets/Images/6.jpg": "fdb1b9e3e68b1e7cff8c5cf00af64813",
"assets/Assets/Images/972.jpg": "a3d089c706b142118de312bb4c94d9ec",
"assets/Assets/Images/app.png": "29193fd6616698f841dc7f7472057c28",
"assets/Assets/Images/cl.png": "cdd5272ed35c33b143d449a2aab2a540",
"assets/Assets/Images/fa.png": "8a328db0f90de931e2de318cc938de5f",
"assets/Assets/Images/facebook.png": "a75127b07e697fdb6714770ef1e1f54b",
"assets/Assets/Images/github.png": "a17150d90465d2bb381781ab5baf0147",
"assets/Assets/Images/hu.png": "27fbd3ab46bbe2eaa9137a855098592e",
"assets/Assets/Images/insatagram.png": "c2567e63b1783f9b7114471831bcdead",
"assets/Assets/Images/java%25203.png": "6fa3c42c459df8ec94fbfd15f3a55ee4",
"assets/Assets/Images/linkein.png": "a08d5cfd6c66a3d5f81d92c61b8ecc06",
"assets/Assets/Images/png1.png": "bd58b618ad7650842809308a8466b95d",
"assets/Assets/Images/png2.png": "4f3dc406373b33f51cd4dca8da52e30b",
"assets/Assets/Images/png3.png": "0af541aed286fef9334b37abaecd48bd",
"assets/Assets/Images/png4.png": "6f0860275f625e17320c9475b87e3e93",
"assets/Assets/Images/png5.png": "29193fd6616698f841dc7f7472057c28",
"assets/Assets/Images/png6.png": "ad511c3d1502149efa859837dccea63a",
"assets/Assets/Images/pngwing.com%2520(21).png": "a9321c27de9250b0ca38ab7f537c87f2",
"assets/Assets/Images/pot%2520image.jpg": "40f4675d38562780d984164a37ae2928",
"assets/Assets/Images/rahul.png": "c5226d46308109dc8ff8acf96f3382f0",
"assets/Assets/Images/x%2520twiitter.png": "7eb57922b9ac9c7a5f1d1c490fcac6d8",
"assets/Assets/Lottie/Animation%2520-%25201748102282432.json": "f24fbb389f24cea15641ea32bd7c9b15",
"assets/Assets/Lottie/Animation%2520-%25201748102651398.json": "1a656f25a530844915e33b7e32ecbec2",
"assets/Assets/Lottie/Animation%2520-%25201748102860080.json": "130d91d7ea701a49cbba0cc6246d616e",
"assets/Assets/Lottie/Animation%2520-%25201748103234396.json": "8a3c6fff61134dd4e1a6c86e14ae0a50",
"assets/FontManifest.json": "9953af1ed7bfbba6a674d9bf0d4d714a",
"assets/fonts/MaterialIcons-Regular.otf": "af182be5ffdc3a3b231b6a6fba5dbb51",
"assets/NOTICES": "573c2f5db037c2d5f7f245d7da646b9e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a8791b72d091df0da38fb90b24afa318",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1b0789ceadc4cc60b1873609ece6178a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon-16x16.png": "3016198b0e2af1feae065e8457a4c97f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "50e09033abe0005e00cab6aef4f9b705",
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
"index.html": "6bb7753d1ab3a50252dcd600f6f8208c",
"/": "6bb7753d1ab3a50252dcd600f6f8208c",
"main.dart.js": "530e6c9ae9ad87964cf70e92ba96d8f7",
"manifest.json": "a3657eb97850ed6840f7e87950955688",
"version.json": "89f27a9f4e6bb7e26552c9541033ccf9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
