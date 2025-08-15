'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0f153648c9d0b1057f408f57a03bfe5f",
".git/config": "9875d65a359934c09bd228fd1b89c351",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c38a1120ba56b8420db02f24f12f1a2e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3bfa8f268e6c55f3cb74222e7111eb4f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a18f4c5f2fd012ba50afdc6c5b1702dc",
".git/logs/refs/heads/master": "a18f4c5f2fd012ba50afdc6c5b1702dc",
".git/logs/refs/remotes/origin/master": "91676ee003462eaf6929e4c7c41fecd1",
".git/objects/02/d144aaf8c0b3f26d89a94049740b2a2075d3e2": "9118e7b05e9f719b4c75de62d2825b0d",
".git/objects/06/6a4a6cf48cce3c7988a95c6848d8778a4037e7": "65898f568f20af0354cf8b4fc742eeac",
".git/objects/08/f59468a16cfa41627e77884006d0cd5ba8f301": "a3742db628c791953733ea95c2cce0a7",
".git/objects/0a/d6f223364b0fe689921063b1046a7de24e6fcc": "6f666bb64a5f3a5f5e08dc314b1792fe",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/38/09540b9d98764b643dfb2ba2a6aa8634fb6d26": "e9d975ebcec439c0370543e7694a1456",
".git/objects/3e/392c5290db8c3b77e24144235e50850fd1e5fd": "1815525f603ba1f3d1ba26ddad8e8285",
".git/objects/3f/23a179d7a1c6c88cd4ba216bb910233d152d6d": "19e37a64328bf7a3a489800cea5ce3f5",
".git/objects/40/bfc60d9f1f826eb78bed1feb0f0f20d0c4a033": "be2765a76a3ba8c20d492ee3d7ee392f",
".git/objects/44/dc0f3b360a8648bbef7ad1f2e99d64d515c0fe": "3ec8b692da9f558118d3910783009cbd",
".git/objects/44/f754bcfece6419fd371ea45ed13400b5ce0287": "3befbfbcfd5e6c4b31bfb468d257f6a5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5b/ac6f331893cfc950bcb628b9c68576911edf8c": "b9030ec6ee96d550ce7db953c4484676",
".git/objects/68/0ea26bc951d967c785d3071c455918b2da8afb": "8b78a8f3589e1a34af5231a8255ef576",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/4c402d7ea66377a060512d134482caf1ce2269": "e9222f4911f6e1b122214d63a28806f2",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/77/f32f57f079f7acbe3162bba077bdfbe16aaaa3": "07fc80ede2284d465e69bc3a63e32536",
".git/objects/7b/a0fe57f6446667f54ca351bb5553599e41e461": "f86ea801372d1445155ce898b82f66de",
".git/objects/8a/1c85b178e1856624d652777f82711c7e8e665c": "47c12d052d8870de26f542fcfb9b78bc",
".git/objects/8c/dffad5e4d3f3ee02631b34c1c41c35507763f2": "ef0d1e0e1d049ed81cc420fe92022968",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/2a3849f421eb60761452a92c32eb9754cdff05": "47e442bc3c2591805653cf690f9ba6aa",
".git/objects/98/3cf43dd94303552924c5f744b967921504e189": "37ba03721d40cf0dff8cd0fd88917fe1",
".git/objects/9b/747e7a0af298412ad58ba01f8d14734baa367a": "11ed358b97303d179f89e389e6d57364",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/8fd6acf7bf36d7a33c278b5317a9b9d9a52787": "d66b92de50d2ce2a0e154311774e37e5",
".git/objects/a2/2b1d2ea64b8a66540eb7522eb454c5f4acf23b": "54e91c3cf7e8a28ceb6d7345896e91b8",
".git/objects/a7/0433a788118ad5d2d1dbaafdbfc2f4c0d02aff": "f43b351646c891d1ecfc61dea89967b7",
".git/objects/ac/8c1483c34cf2c10eef6a43b401b31c08191d2a": "c056826c72b6e0205591a8e24beb7a82",
".git/objects/b0/08c057d12f9fbae6ceb11dd93ccddba2fde0fd": "cec40f3c1bf10adb8366ccfd58dfa50e",
".git/objects/b1/0feca5b035fef1e057026164b86c439cc99680": "dcdc4b8058b9658cb39fc4adf02a5163",
".git/objects/b4/8de64f0cfe01f0e80e5dddf8c214b616ad6584": "fbb86699384bf04a613da8d0dcf332a0",
".git/objects/b4/b65663c37dbf6c22b68d40ab7d6687611e9d34": "03bc94016045d8a27d028424e7dfedff",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c0/95a429bec502fe8969cd4d085af51a57f809f0": "f4327e7169ab6a89788c43725c125c0f",
".git/objects/c2/8bf9e0d859c91066f32adacdb9eb427762627e": "9b8ee806b0753483f6986c5adc54060c",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/ef71d3583031d84d5cc3554334a22e4d3e2e5d": "8f8ff80014aefef8c4c707e0c5337dae",
".git/objects/ce/9f110136a58329dd78e8b051786bcb1602e2c6": "1aa51c8a959cded1800e9da9166e992a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c6f578fe5621a39059ee909464869763d86770": "60610136cc39aab05e34f0d9af82ae2b",
".git/objects/d7/5a2c21786b89d81ced8ee9d506555133255a06": "7ff0ce6435f05e8cd668231cc651380f",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/1d862e508dfe786f5d74c5095c6707d6b5c1c7": "58648fb2c47b3831684c924c78b7d790",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/36583cb81e78a6ed434bac0445c1eebdff22b4": "0470d9ccf2ba9d11b2d1cd09747ee258",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/115a89822f491cc3621ab182bfcfc87d8b40ba": "c6b93e1c30a0c48ce828a190df29c0ab",
".git/objects/f8/e514fecf51fe748a872713c3fc14d591b0f0eb": "6e29e9ee9716d1be9be3f977198cc0d1",
".git/objects/fa/fcdf0743d8d9bc350e89895a51a64cea2bb46a": "73aa8eaddecd22068060693559b9eeeb",
".git/ORIG_HEAD": "bb8f65f67aa5218a1bc08783d0cb739a",
".git/refs/heads/master": "bb8f65f67aa5218a1bc08783d0cb739a",
".git/refs/remotes/origin/master": "bb8f65f67aa5218a1bc08783d0cb739a",
"assets/AssetManifest.bin": "9c33df5108bddb296a729c9981516e7f",
"assets/AssetManifest.bin.json": "105f55d4854042e65169fbdc42f7d0c5",
"assets/AssetManifest.json": "11061c6efa488a91a6925d949f477081",
"assets/assets/images/background/game.png": "a35f8fb3ab52722b881f02a5a3717304",
"assets/assets/images/background/inicio.png": "88093a7b2cae7cb1267009c2455ae332",
"assets/assets/images/background/name_bg.png": "15b7ef19b53c49584566d1920301a890",
"assets/assets/images/buttons/btn_caida_rapida.png": "2675a2e35589d9c8196b08c07b93b7ac",
"assets/assets/images/buttons/btn_flecha_abj.png": "05ecc311a423ba9b2fc1df664cc731c3",
"assets/assets/images/buttons/btn_flecha_der.png": "3efcf124c11a87451fa34d57e610d046",
"assets/assets/images/buttons/btn_flecha_izq.png": "425d333666b7e49f46936a84a76478b8",
"assets/assets/images/buttons/btn_jugar.png": "5ac2f2d5f0c5fa79b2fb668b73d31c76",
"assets/assets/images/buttons/btn_rotar.png": "82bc4825b120489b0105a9bf97c0b7ce",
"assets/assets/images/icon/favicon.png": "d2ba127414fb7c1433967e41cdaa0629",
"assets/assets/music/theme.mp3": "ca255274b1304468868007d10a989232",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b1f2616a0567ff37aa85c5ee66f08f42",
"assets/NOTICES": "cba5e7ed758cdf8f8ada53f1b6082503",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
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
"favicon.png": "e4d0cb69d1886fa6123d3beeaa839fc5",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "41fe9f99d0b8837f6a23ee1861fc073a",
"icons/Icon-192.png": "09056e298fd28bc5d377a30f1066975a",
"icons/Icon-512.png": "47631360116e510d8331c02b90aad8b7",
"icons/Icon-maskable-192.png": "09056e298fd28bc5d377a30f1066975a",
"icons/Icon-maskable-512.png": "47631360116e510d8331c02b90aad8b7",
"index.html": "7532468ca29d380a0df2e166238f9e87",
"/": "7532468ca29d380a0df2e166238f9e87",
"main.dart.js": "e8977364b5f3b657dbe2178ae04822b7",
"manifest.json": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "7b2471689c73be94afe1a6995c8601d3"};
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
