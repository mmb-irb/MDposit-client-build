/* This file is auto-generated, please do not edit it manually */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

const MINUTE = 60; // seconds
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

// https://developers.google.com/web/tools/workbox/modules/workbox-core#skip_waiting_and_clients_claim
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// https://developers.google.com/web/tools/workbox/modules/workbox-precaching#reading_precached_assets_directly
workbox.precaching.cleanupOutdatedCaches();

// https://developers.google.com/web/tools/workbox/modules/workbox-precaching#serving_precached_responses
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "3834bd9bebcf463df9e7e70d7608ab2f"
  },
  {
    "url": "static/css/accession.39bbe650.chunk.css",
    "revision": "0056ca5d583bccde6a76b647a6b6b330"
  },
  {
    "url": "static/css/advanced-search.2edb7cbb.chunk.css",
    "revision": "abbee3a18abdf32bd3875116da55ae09"
  },
  {
    "url": "static/css/browse.f8561778.chunk.css",
    "revision": "e0babe0e6069c46ae9faa80867493c46"
  },
  {
    "url": "static/css/contact.8876a84b.chunk.css",
    "revision": "e70580a2561c1b56ccea8a387d390354"
  },
  {
    "url": "static/css/custom-search.06422cd3.chunk.css",
    "revision": "de024a87eef1b647b2bcbbceea42e0d2"
  },
  {
    "url": "static/css/dist-perres.67b1e5d3.chunk.css",
    "revision": "51858d9a9954e8d0902f7a64103e58b9"
  },
  {
    "url": "static/css/electrostatic.ea74640e.chunk.css",
    "revision": "23911fc8cc116a69dd5c5c0741a9b678"
  },
  {
    "url": "static/css/embed.6f2ee28e.chunk.css",
    "revision": "d355190da4ff54a9e551ea0255e1794d"
  },
  {
    "url": "static/css/energies.699bce96.chunk.css",
    "revision": "3fb7e1b351b85503abd6536a9f4553f3"
  },
  {
    "url": "static/css/epitopes.3a7044f2.chunk.css",
    "revision": "f80a1956661d2b532f39dd405fa76097"
  },
  {
    "url": "static/css/files.7fc24f97.chunk.css",
    "revision": "6593360926599bac722b0d0b44a36b72"
  },
  {
    "url": "static/css/fluctuation.604fa437.chunk.css",
    "revision": "c288868c56842bdbe30740e336076b2b"
  },
  {
    "url": "static/css/footer.95a60a0a.chunk.css",
    "revision": "ddcac32b217b54438cfa30af2b3a0624"
  },
  {
    "url": "static/css/graph-msm.c53e0bfc.chunk.css",
    "revision": "a6b10e962832c2bd88675ba2c1a72413"
  },
  {
    "url": "static/css/graph.9dce14a8.chunk.css",
    "revision": "efa32fd695b8ecf43895b5ff7a5d708e"
  },
  {
    "url": "static/css/hbonds.9d049dbd.chunk.css",
    "revision": "bbeeb729449f61c638a794fd951ce554"
  },
  {
    "url": "static/css/help.26d8be25.chunk.css",
    "revision": "bd11b04c2f3d1fd3e122ceb014b0c55b"
  },
  {
    "url": "static/css/home.5e40fa3b.chunk.css",
    "revision": "66405903170a90de7802ea3a1ad9950b"
  },
  {
    "url": "static/css/markov.91368815.chunk.css",
    "revision": "200f30d786de740d1e4c4f2ffc672cbc"
  },
  {
    "url": "static/css/meta-analysis.be00ff25.chunk.css",
    "revision": "532685c3858759c8f3e285adda677291"
  },
  {
    "url": "static/css/mutations.6c47ede7.chunk.css",
    "revision": "6ffd369b3f237b51fa1b7ae8401c6169"
  },
  {
    "url": "static/css/overview.3a6f5cc4.chunk.css",
    "revision": "1da866e9d7f684de056d99d6b2f7ae64"
  },
  {
    "url": "static/css/pca.6ce67e89.chunk.css",
    "revision": "fe0646fba5b422f95e2ae9566017875b"
  },
  {
    "url": "static/css/pockets.2bb27fa1.chunk.css",
    "revision": "cafb5da250abd18a0d5f2b3277086d93"
  },
  {
    "url": "static/css/project-menu.c32676f9.chunk.css",
    "revision": "b26e1dbe808243f02166d0661fc6a5b1"
  },
  {
    "url": "static/css/projections.80968645.chunk.css",
    "revision": "b941cdd9c271dccb4b7ee7b1637f0ea1"
  },
  {
    "url": "static/css/rgyr.4793db4e.chunk.css",
    "revision": "4f84453d94cca83c0291ea6a2b935f2f"
  },
  {
    "url": "static/css/rmsd-pairwise.bd84f96b.chunk.css",
    "revision": "63408ff4f1e68b0cff6394364ec3816a"
  },
  {
    "url": "static/css/rmsd-perres.368888ff.chunk.css",
    "revision": "06433d9fc6889bb356ff256eb66cf4b6"
  },
  {
    "url": "static/css/rmsds.4f403808.chunk.css",
    "revision": "533f5612f8457da935e378180fdd5a5d"
  },
  {
    "url": "static/css/sasa.14c7d7a7.chunk.css",
    "revision": "c454e31da9085ae9cc5195536f547268"
  },
  {
    "url": "static/css/trajectory.f17857bb.chunk.css",
    "revision": "30893b187280f709ff4078dd8964e20e"
  },
  {
    "url": "static/css/viewer-with-controls.f98ece4d.chunk.css",
    "revision": "9dff090b54a1b580a027402c560eaecf"
  },
  {
    "url": "static/js/1235.d7c14a54.chunk.js",
    "revision": "72b30def1399205f671b75ea3db75b55"
  },
  {
    "url": "static/js/1280.1cf89416.chunk.js",
    "revision": "4b73df3d70d30b032cf832ef90826731"
  },
  {
    "url": "static/js/1502.44b63e52.chunk.js",
    "revision": "b7e882f69dcfaaf2afec0083e628f889"
  },
  {
    "url": "static/js/1772.f3a30e54.chunk.js",
    "revision": "255eae6c7019fda647376057535dbfdd"
  },
  {
    "url": "static/js/1993.21165c72.chunk.js",
    "revision": "dfb8820c8aecfa38e3789da52dbe0bc4"
  },
  {
    "url": "static/js/2260.9c7ea847.chunk.js",
    "revision": "73d324a5b5e4554580c6d3c9ecea8c98"
  },
  {
    "url": "static/js/2577.fab5e066.chunk.js",
    "revision": "a87ebd5b564f87316bdc3f2cb1846a78"
  },
  {
    "url": "static/js/2594.fb7d199e.chunk.js",
    "revision": "c547c58eefe2dccdd88a292076d7fda5"
  },
  {
    "url": "static/js/2597.d10a17a1.chunk.js",
    "revision": "7efc30d14ffbecece295c5f186c8ae4b"
  },
  {
    "url": "static/js/2599.128251e8.chunk.js",
    "revision": "240facb0428622d52bd75fadeb5ede8f"
  },
  {
    "url": "static/js/3173.e4876ea0.chunk.js",
    "revision": "3297e556d812bf7f2fd1726e34f40739"
  },
  {
    "url": "static/js/3316.f35fc3d7.chunk.js",
    "revision": "a1bceaa24cdea36774e754d7e75289c2"
  },
  {
    "url": "static/js/3784.c57bd069.chunk.js",
    "revision": "653bc8f965b8cf0a07dfae57e3189ceb"
  },
  {
    "url": "static/js/3845.5afd1208.chunk.js",
    "revision": "20b65e290ba092f16320ceb5643e3d68"
  },
  {
    "url": "static/js/4040.ecfe33d5.chunk.js",
    "revision": "3d87f6738bfd374e2f8de3c71b5ba064"
  },
  {
    "url": "static/js/4227.e2cc851f.chunk.js",
    "revision": "8643d3a5cb073ba9760b68b510de81a7"
  },
  {
    "url": "static/js/4457.ebd00662.chunk.js",
    "revision": "0c095c46def3854e854288e469ae5501"
  },
  {
    "url": "static/js/4817.dc36e091.chunk.js",
    "revision": "85d190fe0978e24d2e9a1993910ad001"
  },
  {
    "url": "static/js/5291.5ac2f0ef.chunk.js",
    "revision": "1cc897dfb05af0ed3c8ed86647558457"
  },
  {
    "url": "static/js/5577.88e3f952.chunk.js",
    "revision": "3d82b4661d0fcfa2408ce177b25c1251"
  },
  {
    "url": "static/js/5839.d0b1fc84.chunk.js",
    "revision": "295073c31a0db0c2a97f31d431b01ecc"
  },
  {
    "url": "static/js/6190.451582c9.chunk.js",
    "revision": "8acc4a08bafee1f99bcb86ac7369fbed"
  },
  {
    "url": "static/js/6264.10e7e620.chunk.js",
    "revision": "16948b4a492ff9a2eb2669c1c668c1a4"
  },
  {
    "url": "static/js/6886.30668e32.chunk.js",
    "revision": "e3ccbea52eafec60b41dd16f131939c7"
  },
  {
    "url": "static/js/7415.5f6d8b09.chunk.js",
    "revision": "e8039ba8b65caf4861f0e46f9a0a706d"
  },
  {
    "url": "static/js/7784.b51149e7.chunk.js",
    "revision": "a37a4a748e1815ea228a406f08b33d4f"
  },
  {
    "url": "static/js/7803.7206ea7f.chunk.js",
    "revision": "0cd790530fcd7ecf66f49fdfcf15c1e8"
  },
  {
    "url": "static/js/8095.a7eab98f.chunk.js",
    "revision": "a6640a58b9a92acea947a5639b21c817"
  },
  {
    "url": "static/js/8280.c3733cc9.chunk.js",
    "revision": "96ef5b4acfb20815341f327f2a0783c0"
  },
  {
    "url": "static/js/8324.c468749f.chunk.js",
    "revision": "51ace3c3c436884de21c3f4a2cad0dd8"
  },
  {
    "url": "static/js/9070.3e6113fa.chunk.js",
    "revision": "740a09e7c69f66e577ef34988f234f12"
  },
  {
    "url": "static/js/9072.9354e95e.chunk.js",
    "revision": "f44784cd65cc34193d2e1cb01ba064e8"
  },
  {
    "url": "static/js/9256.21492ff1.chunk.js",
    "revision": "e9b00d7a043a98236479db6beab93d8f"
  },
  {
    "url": "static/js/accession.c4286bd5.chunk.js",
    "revision": "520827b8302792ba0bfd77a22dac9dd4"
  },
  {
    "url": "static/js/advanced-search.d12c9d5a.chunk.js",
    "revision": "df0097940b24215da2e56578956f8b02"
  },
  {
    "url": "static/js/browse.dddc8831.chunk.js",
    "revision": "11836e7c1f76b9d9d10d18276d118aea"
  },
  {
    "url": "static/js/contact.e8eccbb9.chunk.js",
    "revision": "b71fa1db51ac42c5e8ea1b52ae6b7971"
  },
  {
    "url": "static/js/custom-search.02060f38.chunk.js",
    "revision": "a9e4b6d0393f944b4e4f089850b84697"
  },
  {
    "url": "static/js/dist-perres.f08694d8.chunk.js",
    "revision": "21a65b711473992030f047aa3df8580f"
  },
  {
    "url": "static/js/electrostatic.e17383a6.chunk.js",
    "revision": "0819cfd04923992dee14e61ec22be778"
  },
  {
    "url": "static/js/embed.0f7e2259.chunk.js",
    "revision": "64de8e9b02258c0a2ba11200cc10ef0a"
  },
  {
    "url": "static/js/energies.9715b8d4.chunk.js",
    "revision": "2db0edd8ca59f00f09bcf5662f0d280b"
  },
  {
    "url": "static/js/epitopes.f3bd95f5.chunk.js",
    "revision": "c6af19dcded44df3171f6c71477518a4"
  },
  {
    "url": "static/js/files.ddcc76ea.chunk.js",
    "revision": "3f3769d5ed3250efa7ff6bd50aeadba9"
  },
  {
    "url": "static/js/fluctuation.f584d059.chunk.js",
    "revision": "d87f16a0727c7224de7b94b1578b8d9b"
  },
  {
    "url": "static/js/footer.73e83dd7.chunk.js",
    "revision": "d0a06563cb8a17addb49aaf8602a0159"
  },
  {
    "url": "static/js/graph-msm.0db1e4b6.chunk.js",
    "revision": "c69c983cad22012d32127b5385878b50"
  },
  {
    "url": "static/js/graph.70273ab9.chunk.js",
    "revision": "591c99564f2f6500c450f97fa5cae5ad"
  },
  {
    "url": "static/js/hbonds.bc363768.chunk.js",
    "revision": "4cc78cab4a271dea585a69893b0cb82f"
  },
  {
    "url": "static/js/help.79792c14.chunk.js",
    "revision": "17c4022186da83af1adba1a3d8324216"
  },
  {
    "url": "static/js/home.90ae3fd0.chunk.js",
    "revision": "76a41ae0d80e1dc3037a7ffd9dea6a37"
  },
  {
    "url": "static/js/intersection-observer.e95f0f77.chunk.js",
    "revision": "cc2fe391bcb1ed4e666b9b61e9ea42c6"
  },
  {
    "url": "static/js/json.bbb22e02.chunk.js",
    "revision": "31e2592213e24c5d52ed996a4a8dccec"
  },
  {
    "url": "static/js/main.d9690047.js",
    "revision": "24b2b0845913fdda6fbdf6b4af1b8174"
  },
  {
    "url": "static/js/markov.dd5e557c.chunk.js",
    "revision": "34ed69592189b216ef9e26276618b850"
  },
  {
    "url": "static/js/meta-analysis.d0c0f7ae.chunk.js",
    "revision": "071b836908cb67bbb846b863c20ae3cd"
  },
  {
    "url": "static/js/mutations.f22e8d7c.chunk.js",
    "revision": "11f6bdb562371632e51cc86687b218ea"
  },
  {
    "url": "static/js/overview.7b9c1334.chunk.js",
    "revision": "816aa95b84a7b617a84918d366469bc6"
  },
  {
    "url": "static/js/pca.22c96982.chunk.js",
    "revision": "616fe3d9374521dec42654b09e0836df"
  },
  {
    "url": "static/js/pockets.840216fb.chunk.js",
    "revision": "f3fe5bf8cfeb4fa94dcc740e89150063"
  },
  {
    "url": "static/js/project-menu.081cf14c.chunk.js",
    "revision": "6151228d62c3e505a4b59cee8fda8437"
  },
  {
    "url": "static/js/projections.805512e6.chunk.js",
    "revision": "15ee63eab7ca13fd8320e988df58ef57"
  },
  {
    "url": "static/js/protvista-coloured-sequence.2e84124c.chunk.js",
    "revision": "afb04a42f1f9eba452d652ca5fcd22be"
  },
  {
    "url": "static/js/protvista-interpro-track.c6dbb8c4.chunk.js",
    "revision": "752413c2c17f61852499536fdf54fc12"
  },
  {
    "url": "static/js/protvista-manager.4352be77.chunk.js",
    "revision": "e97abc959f3dc8feb1b3b408a8170899"
  },
  {
    "url": "static/js/protvista-navigation.ccf44325.chunk.js",
    "revision": "c7ee16723ff2ead423be8991778666a1"
  },
  {
    "url": "static/js/protvista-sequence.93210973.chunk.js",
    "revision": "fae430162f73306a899c3dd2de835325"
  },
  {
    "url": "static/js/rgyr.5b45b83b.chunk.js",
    "revision": "d5e458b1fd53291b9eb455455723d067"
  },
  {
    "url": "static/js/rmsd-pairwise.6aa77c04.chunk.js",
    "revision": "18abb6d688643071fa1d14dac4d79afd"
  },
  {
    "url": "static/js/rmsd-perres.2ed54189.chunk.js",
    "revision": "939958b1ebceae36f08c9b956f2ac0d7"
  },
  {
    "url": "static/js/rmsds.99121d4e.chunk.js",
    "revision": "032a7b3378f798d44a352cb5ad82dfb3"
  },
  {
    "url": "static/js/sasa.57186a5c.chunk.js",
    "revision": "2509138aba3e8e50d95b4232f0ea5c35"
  },
  {
    "url": "static/js/snack-bar-container.70cf8efc.chunk.js",
    "revision": "77a05a1f70c31c9906e4b6feab03bdfb"
  },
  {
    "url": "static/js/trajectory.2598163a.chunk.js",
    "revision": "467e68e486ada63fd7d29a8aefa44312"
  }
], {}); // content will be injected here

// navigation route (any navigation request to any part of the scope of the service worker)
workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL('./index.html'),
  {
    blacklist: [
      /^\/_/,
      /\/[^\/]+\.[^\/]+$/,
      /\/api\//, // avoid responding to /api, because it should be outside of the scope of that service worker
      /\/optimade\//, // avoid responding to /optimade, because it should be outside of the scope of that service worker
    ],
  },
);

// routing recipes
// see: https://developers.google.com/web/tools/workbox/guides/common-recipes
// images - Cache First
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg|ico)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 100,
        maxAgeSeconds: 40 * DAY,
      }),
    ],
  }),
);

// external images - Cache First
workbox.routing.registerRoute(
  /^https?:\/\/.*?\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'external-images',
    plugins: [
      new workbox.cacheableResponse.Plugin({ statuses: [0, 200] }),
      new workbox.expiration.Plugin({
        maxEntries: 10,
        maxAgeSeconds: 20 * DAY,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);

// static assets - Cache First
// (usually, just fonts then, since images are handled before)
workbox.routing.registerRoute(
  /\/static\//,
  new workbox.strategies.CacheFirst({
    cacheName: 'static',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
        maxAgeSeconds: 10 * WEEK,
        // it's alright if it's purged, we're using display-font: swap anyway
        purgeOnQuotaError: true,
      }),
    ],
  }),
);

// api calls - Stale While Revalidate
// (except for trajectory files, because of ranged requests)
workbox.routing.registerRoute(
  // the missing "t" below is on purpose!!! Do not think you need to fix it!
  // It's to get basically, anything not finishing by "ajectory", or
  // "ajectory.bin", or "ajectory.trj", or "ajectory.traj"
  /^https?:\/\/mmb.irbbarcelona.org\/.*\/api\/rest\/(.(?!rajectory(\.(tra?j|bin))?$))+$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'api-calls',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 100,
        maxAgeSeconds: 40 * DAY,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);
