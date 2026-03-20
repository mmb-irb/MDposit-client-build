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
    "revision": "1c3d5a9b90c583eab02e0d2f08cbc74f"
  },
  {
    "url": "static/css/1181.73a5df46.chunk.css",
    "revision": "b7803f37dae6bcb420f2217d3f985331"
  },
  {
    "url": "static/css/126.f10f4b3a.chunk.css",
    "revision": "b9de8136cf0b5df61dff5c42acc70804"
  },
  {
    "url": "static/css/134.742a1071.chunk.css",
    "revision": "fd42f77eef1e8c269cabdc2d81cb84fa"
  },
  {
    "url": "static/css/1612.68cff4da.chunk.css",
    "revision": "a0150f283bcf125a8a5ec450f66b90d8"
  },
  {
    "url": "static/css/1732.87c6cfe3.chunk.css",
    "revision": "03f065d4c96f608c723c6f7c5823ac0c"
  },
  {
    "url": "static/css/1814.ce10fd5a.chunk.css",
    "revision": "915983ddce5265c33292abcfb2cb3efc"
  },
  {
    "url": "static/css/2055.07074042.chunk.css",
    "revision": "d5fd56fde8f8a7a863a1d4dcb3e6aec1"
  },
  {
    "url": "static/css/2100.2e498fb2.chunk.css",
    "revision": "8035757552841d614ee7e502f8b1909a"
  },
  {
    "url": "static/css/2117.3f4c3551.chunk.css",
    "revision": "0c5374e150ab130a277330bd5a3d3583"
  },
  {
    "url": "static/css/2492.feefd118.chunk.css",
    "revision": "02064e1c566ac10d3d8962f25a078d93"
  },
  {
    "url": "static/css/2527.12a4ac1c.chunk.css",
    "revision": "260b17ede71a766e2b769f85abba6a41"
  },
  {
    "url": "static/css/2615.1244525f.chunk.css",
    "revision": "f5d6a6c39c3ad3a9ef800c6ce7e96b9d"
  },
  {
    "url": "static/css/2633.c17f991b.chunk.css",
    "revision": "f97054809d03253eefdbcb55966727b3"
  },
  {
    "url": "static/css/2881.c909f8ed.chunk.css",
    "revision": "d245711453005bd1bc7ccf4b02b864ec"
  },
  {
    "url": "static/css/3016.1257c0eb.chunk.css",
    "revision": "35765969d417f6b1165ccee758d0fc92"
  },
  {
    "url": "static/css/3074.07f6f099.chunk.css",
    "revision": "178ac991b712445d9bbc8e1e7cfe3237"
  },
  {
    "url": "static/css/3171.38638a9a.chunk.css",
    "revision": "bf5a5adc8b9502b33160fd90a5ee4d2b"
  },
  {
    "url": "static/css/3215.ec05b9cd.chunk.css",
    "revision": "8713cf12c4cf8046e513e8355bb92017"
  },
  {
    "url": "static/css/3259.3a736d50.chunk.css",
    "revision": "cca276a65e037519167420bbdd18af33"
  },
  {
    "url": "static/css/3283.84769dd3.chunk.css",
    "revision": "2fe22e906189d7035e78c6145f890619"
  },
  {
    "url": "static/css/3287.74e8f9b4.chunk.css",
    "revision": "207e4771a0f6c867ded33056aec8b96c"
  },
  {
    "url": "static/css/3715.90b52df1.chunk.css",
    "revision": "788791a088c88ff684a53176b49f8389"
  },
  {
    "url": "static/css/375.ee195a0e.chunk.css",
    "revision": "61110dea1de298d8b7f455455f3d7ee5"
  },
  {
    "url": "static/css/3753.a64289de.chunk.css",
    "revision": "e600cb9e7383f6470a741f94a9561add"
  },
  {
    "url": "static/css/3960.59270940.chunk.css",
    "revision": "d93b5d239c5acd574eaf9a23b65a81d1"
  },
  {
    "url": "static/css/4313.ee60f0b2.chunk.css",
    "revision": "677b5b50ccf6f0ef4073ee75fb31c0e6"
  },
  {
    "url": "static/css/450.0b865e7a.chunk.css",
    "revision": "2c749ee41ed4113d598c3b8833362971"
  },
  {
    "url": "static/css/4778.5d50ff93.chunk.css",
    "revision": "31abda9349e7cd9b5325978217f3dc30"
  },
  {
    "url": "static/css/4963.473508db.chunk.css",
    "revision": "32df5a8aefe3c92f6fcbff1a5a94a810"
  },
  {
    "url": "static/css/4974.8a406f28.chunk.css",
    "revision": "1c6f939de1ca8f9ad4eac63f6bfcd8ce"
  },
  {
    "url": "static/css/5096.6d0b20e8.chunk.css",
    "revision": "9a2663cdfdca8c736a2b3111b0f03c02"
  },
  {
    "url": "static/css/5144.67ea2797.chunk.css",
    "revision": "e8c3b594f972da1d17abf6437828202e"
  },
  {
    "url": "static/css/5154.f1ad5e97.chunk.css",
    "revision": "24d6252da25e5d23dc5e63f774b1823c"
  },
  {
    "url": "static/css/5190.427682d2.chunk.css",
    "revision": "03c6311449e8854854deaa05718d712a"
  },
  {
    "url": "static/css/5236.c2afdb63.chunk.css",
    "revision": "4151c3473ca15464079b7294972a9aa4"
  },
  {
    "url": "static/css/5263.a0eed2b5.chunk.css",
    "revision": "8ba0934963a02dfd47600edeeb0af232"
  },
  {
    "url": "static/css/5471.0ecbeb7f.chunk.css",
    "revision": "6ff58d0b3b94e82fd24a573a42535805"
  },
  {
    "url": "static/css/5591.98274008.chunk.css",
    "revision": "a41db3a3baba05d8fde15bcc4bcd392e"
  },
  {
    "url": "static/css/5709.f28160ab.chunk.css",
    "revision": "f31f4f549a6a3ebbc6ab3c1b87891ab8"
  },
  {
    "url": "static/css/5851.94a1fcba.chunk.css",
    "revision": "cd2e7fb0bac062d9e15b18e197527f8d"
  },
  {
    "url": "static/css/5919.bf574ba7.chunk.css",
    "revision": "078ee705448dc7c497798641c3d22f00"
  },
  {
    "url": "static/css/5952.ae93aaed.chunk.css",
    "revision": "62a9b571524b868fb8ce5a95455c907a"
  },
  {
    "url": "static/css/604.599ee70e.chunk.css",
    "revision": "21630487f7e37ca0d8ab2b5f21e64c0b"
  },
  {
    "url": "static/css/6285.07f6f099.chunk.css",
    "revision": "51aad1cb9267ef2cc02ea8d1888064d2"
  },
  {
    "url": "static/css/6304.2f23062a.chunk.css",
    "revision": "cc47c1abbae64b7e26741d4efa5e2ee7"
  },
  {
    "url": "static/css/6344.c9055c2b.chunk.css",
    "revision": "0850be905c46402a5aa99b755343bf27"
  },
  {
    "url": "static/css/6547.2ada64b0.chunk.css",
    "revision": "6c23e2eed5ecde06310d766b6f637dd8"
  },
  {
    "url": "static/css/6624.09a8edf1.chunk.css",
    "revision": "641dc498dc3d12e9cb9ab7a1cbeec732"
  },
  {
    "url": "static/css/6889.87c6cfe3.chunk.css",
    "revision": "c53ce3bf7991ea452296826ae3a4e929"
  },
  {
    "url": "static/css/7053.16e4a1d3.chunk.css",
    "revision": "b2dc88cca1ea6ce3b1ec1e833d552409"
  },
  {
    "url": "static/css/7197.8bc569eb.chunk.css",
    "revision": "7c117c368c0e4066304e9273b5cdb7b6"
  },
  {
    "url": "static/css/7385.19a20ea1.chunk.css",
    "revision": "902510e2e4c9c9aaa1a7ff720fa5f255"
  },
  {
    "url": "static/css/7389.5419505e.chunk.css",
    "revision": "482aa2a95695624b2947edb2a2cec0e0"
  },
  {
    "url": "static/css/7732.e1c67c52.chunk.css",
    "revision": "ad59c31b040c3537404e826f47ce9f6f"
  },
  {
    "url": "static/css/8029.473508db.chunk.css",
    "revision": "f4c4bd4918da498b8457fbfc1fa54614"
  },
  {
    "url": "static/css/8042.5aae05db.chunk.css",
    "revision": "7ea2d6e065fbecb7ca163011a32eb6be"
  },
  {
    "url": "static/css/8133.eb2cea5e.chunk.css",
    "revision": "7bdbcf8e11ea85a6721fec7e3268bf2c"
  },
  {
    "url": "static/css/8217.0a8c07f1.chunk.css",
    "revision": "6a38ac4d2a178a723ab052cbf2aeccf2"
  },
  {
    "url": "static/css/8333.b06190bd.chunk.css",
    "revision": "da53e3de52f58577a42effa8266d60dd"
  },
  {
    "url": "static/css/854.efc834a5.chunk.css",
    "revision": "862482c893d40655e74378a6ff41c88f"
  },
  {
    "url": "static/css/8870.2ea7ea5d.chunk.css",
    "revision": "f544f7a23167bad9edcf66d56d2fde9e"
  },
  {
    "url": "static/css/8939.6721b729.chunk.css",
    "revision": "ef1e245f7f27c61dada29d6f13720e5c"
  },
  {
    "url": "static/css/9302.5d8f70e4.chunk.css",
    "revision": "f2f4512503a5b051591ef56a591ddc0a"
  },
  {
    "url": "static/css/9373.b5834da8.chunk.css",
    "revision": "b668d287649f2dd5b3a47c18d99cb1cb"
  },
  {
    "url": "static/css/9418.6bd8248f.chunk.css",
    "revision": "737505d2b6f1b0790f73edd297517a06"
  },
  {
    "url": "static/css/942.1c998593.chunk.css",
    "revision": "8dbae541fe3c09c18d2b9526de6e57d2"
  },
  {
    "url": "static/css/9480.f28160ab.chunk.css",
    "revision": "1835382f01f14255bf388513f397b8af"
  },
  {
    "url": "static/css/953.c5231419.chunk.css",
    "revision": "74d709c16ab58472cf3da74d5cd1f28b"
  },
  {
    "url": "static/css/9769.3f4c3551.chunk.css",
    "revision": "7e71ff9118fa68170460b8da6d642594"
  },
  {
    "url": "static/css/accession.bd6e4525.chunk.css",
    "revision": "cb569128353ffc34be37d5903dd35ab2"
  },
  {
    "url": "static/css/advanced-search.0cd7490e.chunk.css",
    "revision": "fd0b4cc991d217d20866798bd4398b75"
  },
  {
    "url": "static/css/browse.b873654a.chunk.css",
    "revision": "0ea95c5313b2ce5d6f1d47d01c1ca00e"
  },
  {
    "url": "static/css/collection-statistics.1a482d4a.chunk.css",
    "revision": "56496db167b6ae86d090ceb9b5febf69"
  },
  {
    "url": "static/css/collection.4c4c90cf.chunk.css",
    "revision": "94b4eef2f6505392027e214a3b1fe7be"
  },
  {
    "url": "static/css/collections.a6acfd6e.chunk.css",
    "revision": "1dc48bbbcb46b358e6ca2e774a6a19c6"
  },
  {
    "url": "static/css/contact.b0770619.chunk.css",
    "revision": "01a8b7751d6b9d6bef54b12be4a30b62"
  },
  {
    "url": "static/css/embed.b0018109.chunk.css",
    "revision": "958b4166f63d070a6d1dc918c87db094"
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
    "url": "static/css/help.d6896d66.chunk.css",
    "revision": "6a4c891792795cdbfc1d5f49fbeb8d8c"
  },
  {
    "url": "static/css/home.c5f5a113.chunk.css",
    "revision": "18b2d427f4254508cf7d10aa48f18501"
  },
  {
    "url": "static/css/meta-analysis.667f1bc0.chunk.css",
    "revision": "f2c090128bab581974395710605a9803"
  },
  {
    "url": "static/css/pointer.e5c37f50.chunk.css",
    "revision": "47b77ebfd573f5332b2946310c1f90c0"
  },
  {
    "url": "static/css/projections.80968645.chunk.css",
    "revision": "b941cdd9c271dccb4b7ee7b1637f0ea1"
  },
  {
    "url": "static/css/viewer-with-controls.f0d230fe.chunk.css",
    "revision": "c59be7402effe5656a0501d1092dc55d"
  },
  {
    "url": "static/js/1177.410d1ee5.chunk.js",
    "revision": "3db9a0388c2595a704f6ba5ad68b51d1"
  },
  {
    "url": "static/js/1181.9841a3d6.chunk.js",
    "revision": "d310e7598c6dc711f8d0662e27b5f531"
  },
  {
    "url": "static/js/1198.44183c9c.chunk.js",
    "revision": "309aa59799049ab1ed18178f1490a7fa"
  },
  {
    "url": "static/js/126.0285df09.chunk.js",
    "revision": "c0c9f4d68f016b30dafae6a7d37a2e0a"
  },
  {
    "url": "static/js/1281.cce695a4.chunk.js",
    "revision": "07e7b2663ad06e456c96e63918dc3ff2"
  },
  {
    "url": "static/js/134.5db321bd.chunk.js",
    "revision": "d537eb8e2f1e0745db74dc34bda94a32"
  },
  {
    "url": "static/js/1502.ab892a3c.chunk.js",
    "revision": "924e3b75acbce9960ea7c9291e5731f9"
  },
  {
    "url": "static/js/1612.488a06c3.chunk.js",
    "revision": "6de78dece886811113e571ce44fdc172"
  },
  {
    "url": "static/js/1772.6a5e8ae7.chunk.js",
    "revision": "104b94cb7f3c829d5b1ee3675f6d3760"
  },
  {
    "url": "static/js/1814.8ec7dd3a.chunk.js",
    "revision": "ee6396dd40c9ceeb16482b3f570efb11"
  },
  {
    "url": "static/js/2055.7f960b6e.chunk.js",
    "revision": "8219c2261889eb8cadb5e43ca5c78ca4"
  },
  {
    "url": "static/js/2100.69be806b.chunk.js",
    "revision": "89f30b78e9904b19955ded2489cf8a71"
  },
  {
    "url": "static/js/2116.292af179.chunk.js",
    "revision": "4e5f8dcdfc855bd5531c192ab51b7a7a"
  },
  {
    "url": "static/js/2117.c4d80dd1.chunk.js",
    "revision": "2a66260798f99b2b234b9cf6956d096f"
  },
  {
    "url": "static/js/2260.206a6f73.chunk.js",
    "revision": "432d2efcb87c9cff55a6d5251ce0bc62"
  },
  {
    "url": "static/js/2288.0e74113a.chunk.js",
    "revision": "61e299be8e52718ec75cb405eb90c27f"
  },
  {
    "url": "static/js/2492.5cba08c0.chunk.js",
    "revision": "dcd3694d3e8e8bc51b29adb14d476ff5"
  },
  {
    "url": "static/js/2527.7a612e21.chunk.js",
    "revision": "67cf4c3311fa53080a2d5be188eb22d7"
  },
  {
    "url": "static/js/258.fbaada3d.chunk.js",
    "revision": "97588114720ddac9771e1c94a92da3fa"
  },
  {
    "url": "static/js/2594.f2c4b56c.chunk.js",
    "revision": "172170da25607b794350d8814f79c433"
  },
  {
    "url": "static/js/2615.ff4bfc0a.chunk.js",
    "revision": "3511e766032131f98e4f327dd13ba9ba"
  },
  {
    "url": "static/js/2633.b7dba79f.chunk.js",
    "revision": "62f9cb67595043e64cad52a41a99dca7"
  },
  {
    "url": "static/js/2703.ecc4345f.chunk.js",
    "revision": "471d2d4c59f66e236b618cd275d34051"
  },
  {
    "url": "static/js/2822.7cdb4d55.chunk.js",
    "revision": "db08cd1f5328bb600d11dc6ffdf8e017"
  },
  {
    "url": "static/js/2881.6ec8147b.chunk.js",
    "revision": "621e24c29e13024d86e520b048fa7ef3"
  },
  {
    "url": "static/js/3016.0e0d4146.chunk.js",
    "revision": "668ea85558a1084ed3a4d4fd22e9ba65"
  },
  {
    "url": "static/js/3171.9aa7eba2.chunk.js",
    "revision": "a4321cfaed516c98f6c0ecf340d2b100"
  },
  {
    "url": "static/js/3173.249a33ef.chunk.js",
    "revision": "8ef662989e6e8a4495aa74718cbb9a51"
  },
  {
    "url": "static/js/3215.89d1682f.chunk.js",
    "revision": "6cc4bfbc4549a6aa75d3a4d9774caf4f"
  },
  {
    "url": "static/js/3259.10a600f2.chunk.js",
    "revision": "22e52ae89d2b78ef45b124f8a860a0d6"
  },
  {
    "url": "static/js/3283.85d95af6.chunk.js",
    "revision": "f57da16533d647d3f15f1b0d7d6b36a6"
  },
  {
    "url": "static/js/3287.9916c07a.chunk.js",
    "revision": "cbfc47199f37b4ae4384c201bef1d091"
  },
  {
    "url": "static/js/3395.3a1c5154.chunk.js",
    "revision": "9f22194322bfa3a163aa2842ec23bc7d"
  },
  {
    "url": "static/js/3715.d98693fd.chunk.js",
    "revision": "ae19ba838ebc89ba0ae48461e9d71d18"
  },
  {
    "url": "static/js/375.5511c1bc.chunk.js",
    "revision": "5004234df4f57989be6604051d63d42c"
  },
  {
    "url": "static/js/3753.080ede10.chunk.js",
    "revision": "16793d71f47c75b266911a51e029a3b8"
  },
  {
    "url": "static/js/3845.eb1fb52a.chunk.js",
    "revision": "ec38c4e10dcbf02885b7b189da9d953c"
  },
  {
    "url": "static/js/3960.187f2658.chunk.js",
    "revision": "f693e3e5f2e0fea5f1d6113c22167467"
  },
  {
    "url": "static/js/3969.ee7dbc5d.chunk.js",
    "revision": "283091a1fdd0a7dda18d67e4b6b812a0"
  },
  {
    "url": "static/js/4125.289aadc9.chunk.js",
    "revision": "8a983921b8acfc2e904371f120d21186"
  },
  {
    "url": "static/js/4172.86e9425a.chunk.js",
    "revision": "980c439c01843837ef8525172fd6330f"
  },
  {
    "url": "static/js/4313.3c4ef3ae.chunk.js",
    "revision": "3b2eecd7c531ab53a1fd4f22fe8bf557"
  },
  {
    "url": "static/js/450.37407a38.chunk.js",
    "revision": "d16729dec7c07bfa6cb4d7f8182da77b"
  },
  {
    "url": "static/js/4516.0a93ee04.chunk.js",
    "revision": "eeeeec37598e51936bacf976933b011f"
  },
  {
    "url": "static/js/4778.4ce931b5.chunk.js",
    "revision": "bbff5c9f959924fde6c3e445a5a0eb33"
  },
  {
    "url": "static/js/4963.d7895011.chunk.js",
    "revision": "2d9da453df2b56d9084f000837b87f70"
  },
  {
    "url": "static/js/4974.013e2e73.chunk.js",
    "revision": "1191eb42fc0f84110db9071bc4430d04"
  },
  {
    "url": "static/js/5096.95e57879.chunk.js",
    "revision": "c2af9e9389fe80013d0f88f28cc44c82"
  },
  {
    "url": "static/js/5144.ecaef6ce.chunk.js",
    "revision": "1b63b871ab9ffc186e6538b3d4f83127"
  },
  {
    "url": "static/js/5154.e1a25394.chunk.js",
    "revision": "62d1d62abd7f4e8b70e8cbc68298c897"
  },
  {
    "url": "static/js/5190.1bf945f5.chunk.js",
    "revision": "a89b2aa30b085021613dc990367b3b63"
  },
  {
    "url": "static/js/5236.78d0f691.chunk.js",
    "revision": "714ab8f9fd4aa4bec862695d913ead75"
  },
  {
    "url": "static/js/5263.931003aa.chunk.js",
    "revision": "502a5dcaa78de898fc4f70304ab49f10"
  },
  {
    "url": "static/js/5291.689051d6.chunk.js",
    "revision": "88692c1958041d30bfa82af737b1822c"
  },
  {
    "url": "static/js/5471.3354a148.chunk.js",
    "revision": "345368ad1daf466891eb77b2011c6e3b"
  },
  {
    "url": "static/js/5581.fdc523a6.chunk.js",
    "revision": "4696633d3d35d940ddb03cf90f11daef"
  },
  {
    "url": "static/js/5591.527650c6.chunk.js",
    "revision": "7d58090f700058bae35528b12b934c5c"
  },
  {
    "url": "static/js/5633.4af149a8.chunk.js",
    "revision": "de1166651d4c5669cd115b8f1803ff9d"
  },
  {
    "url": "static/js/5709.5e650e99.chunk.js",
    "revision": "87ea65ab136c508311d3a3218f4f4cd5"
  },
  {
    "url": "static/js/5750.0462e20e.chunk.js",
    "revision": "04fb0ca359ad7b69df092161ebbf959c"
  },
  {
    "url": "static/js/5839.ae78f8d8.chunk.js",
    "revision": "ec93c1b29b53f63ab0f908cb7f22aabc"
  },
  {
    "url": "static/js/5851.f35a9afd.chunk.js",
    "revision": "fe782a3a873c22c6743216bcce56a30b"
  },
  {
    "url": "static/js/5919.115f58b1.chunk.js",
    "revision": "3032e42dcbf58dc1c95b226c406d7fd6"
  },
  {
    "url": "static/js/5952.49a1f231.chunk.js",
    "revision": "47ba7aa32bf576f9c41a92c3aab6fc26"
  },
  {
    "url": "static/js/604.bd5be792.chunk.js",
    "revision": "f9046704e6af4f91069a1e34aa04e6cd"
  },
  {
    "url": "static/js/6264.b82448be.chunk.js",
    "revision": "32064e8145daa15df0da9fd1b3204aea"
  },
  {
    "url": "static/js/6285.fba1a901.chunk.js",
    "revision": "a9ac069355958702315ef904da00a6f5"
  },
  {
    "url": "static/js/6344.019bafdd.chunk.js",
    "revision": "a0ff00b582c786b599965453dc7870e0"
  },
  {
    "url": "static/js/6401.bc92c5e9.chunk.js",
    "revision": "8e93b8470c5ca4b06330a7f576a7edaa"
  },
  {
    "url": "static/js/6463.0843a6ce.chunk.js",
    "revision": "906f65c7c7b9e1f585bd1994437f5c44"
  },
  {
    "url": "static/js/6618.9c4dda44.chunk.js",
    "revision": "4a04b8699afb020abc0bb118221d2a8b"
  },
  {
    "url": "static/js/6624.d502392f.chunk.js",
    "revision": "c9e9fe17c6198995114e5c8dfbb4d07f"
  },
  {
    "url": "static/js/6651.a38b56a5.chunk.js",
    "revision": "67c288f5f11b0474276ff38dbee1e17a"
  },
  {
    "url": "static/js/6889.2e810410.chunk.js",
    "revision": "11af3646c2a1f226090a660f49da7fb1"
  },
  {
    "url": "static/js/6893.d2ba7834.chunk.js",
    "revision": "a59b1ea1949db5277c6fd73848bcc312"
  },
  {
    "url": "static/js/6996.e3cf1121.chunk.js",
    "revision": "181ce49bba7461e0d4eddf361adc3fca"
  },
  {
    "url": "static/js/7053.53bf355a.chunk.js",
    "revision": "d29ee4579882eb22c52f2e0ea847c4e6"
  },
  {
    "url": "static/js/7197.737d7d20.chunk.js",
    "revision": "702853c3ac714e8b82cb1dda11a9d379"
  },
  {
    "url": "static/js/7385.3dd6e33a.chunk.js",
    "revision": "231c54aca12fe79ac354660ae0363ce6"
  },
  {
    "url": "static/js/7389.923d3c55.chunk.js",
    "revision": "26903b0a4b4d8e795d215cdccaf0a97c"
  },
  {
    "url": "static/js/7732.37804cd6.chunk.js",
    "revision": "7f0bfdb7798b97536510551d04f61572"
  },
  {
    "url": "static/js/7784.f8ce3f14.chunk.js",
    "revision": "e06b7b53990f949b8887281617096475"
  },
  {
    "url": "static/js/7803.e8b86595.chunk.js",
    "revision": "9bebd7d738b1c7396bbac31f6664e71d"
  },
  {
    "url": "static/js/7955.b8757695.chunk.js",
    "revision": "baee40b636f3521dd6e7616671298cf5"
  },
  {
    "url": "static/js/8029.6e156a59.chunk.js",
    "revision": "2594ce322fc0c1c4181c7b0ad26853d3"
  },
  {
    "url": "static/js/8042.ebda55b1.chunk.js",
    "revision": "ba0398dc39545096b94c246321fb722c"
  },
  {
    "url": "static/js/8095.f48bfaee.chunk.js",
    "revision": "d087103ddca418ea98d18c33fbb46279"
  },
  {
    "url": "static/js/8133.5d5bd7d8.chunk.js",
    "revision": "0b78de3e5260d051ac69ec8677e9010e"
  },
  {
    "url": "static/js/8217.82973307.chunk.js",
    "revision": "b70e0e2f82a769d5fd683fb01d327f38"
  },
  {
    "url": "static/js/8333.f191d748.chunk.js",
    "revision": "b7b26d725a177bd6e73fa986648888b0"
  },
  {
    "url": "static/js/8473.c82576df.chunk.js",
    "revision": "50d995fdda5797e97c4dbfcb0a734733"
  },
  {
    "url": "static/js/854.27260c91.chunk.js",
    "revision": "b2dbc9da49affae9d5f3eff98a445dad"
  },
  {
    "url": "static/js/8671.959c57c4.chunk.js",
    "revision": "ed26390287f2418fc04cb1a574ad6cb6"
  },
  {
    "url": "static/js/8677.47925a51.chunk.js",
    "revision": "2189d396257407c75e86b070a42fcd2c"
  },
  {
    "url": "static/js/8870.3e920852.chunk.js",
    "revision": "4a8acb4131566ce10a82ebf03b0e4155"
  },
  {
    "url": "static/js/8883.7dd95534.chunk.js",
    "revision": "4472ef12d8ff0b339a1e015e5e595021"
  },
  {
    "url": "static/js/8903.cd805ea8.chunk.js",
    "revision": "a74a011cbb4c52fad1ca39ded648cde7"
  },
  {
    "url": "static/js/8914.e21c05cd.chunk.js",
    "revision": "33cac070a73aee897ffc75d25cd8e8a6"
  },
  {
    "url": "static/js/8939.fbf13806.chunk.js",
    "revision": "3a82d1be7012a24ab326f7994aa4f3c0"
  },
  {
    "url": "static/js/9070.23ccb5e2.chunk.js",
    "revision": "006042956e9fa15fa301907375f70cc8"
  },
  {
    "url": "static/js/9215.de479e2c.chunk.js",
    "revision": "e79f52ddfd01e68eb4cd42659e4752f0"
  },
  {
    "url": "static/js/9219.308ac381.chunk.js",
    "revision": "95b4a8fc4fa38b29574b7f34aee902b6"
  },
  {
    "url": "static/js/9251.66216188.chunk.js",
    "revision": "5053b7ce31624606cf63ff9c90fb123d"
  },
  {
    "url": "static/js/9302.df5fad1c.chunk.js",
    "revision": "947b2b64ce33d0d18b95d454342facce"
  },
  {
    "url": "static/js/9373.36f6f3da.chunk.js",
    "revision": "30ad0610ffc49e041e27358537c34118"
  },
  {
    "url": "static/js/9392.6d2171a5.chunk.js",
    "revision": "dc3af035b7e0d96c944cd865e488245b"
  },
  {
    "url": "static/js/9418.72f089a1.chunk.js",
    "revision": "2f18c051bdbd3c0cb30c6c0061786ac9"
  },
  {
    "url": "static/js/942.fea40920.chunk.js",
    "revision": "ed2c10f6bc1e96ffac8d8e7406798e23"
  },
  {
    "url": "static/js/9480.ad59e851.chunk.js",
    "revision": "140e6df82b3a36ffcc0ff44ff5c6bf0d"
  },
  {
    "url": "static/js/953.88f5073f.chunk.js",
    "revision": "b96d272cbb06a67df601cb8c3119c38b"
  },
  {
    "url": "static/js/9632.355f647d.chunk.js",
    "revision": "ae847176d5ae9e1d9074bd399bf07fd1"
  },
  {
    "url": "static/js/9769.e8d3c79b.chunk.js",
    "revision": "71f5e257c3d57e57399f27024dffbcdb"
  },
  {
    "url": "static/js/accession.c6c7d192.chunk.js",
    "revision": "035cce24d8534d35f76158b41fa90977"
  },
  {
    "url": "static/js/advanced-search.ad719db8.chunk.js",
    "revision": "b04d2f31e1824a460602783374691a38"
  },
  {
    "url": "static/js/browse.0d9bc7e6.chunk.js",
    "revision": "e5a291f825fdb57f55e91b1aa5b327dd"
  },
  {
    "url": "static/js/collection-statistics.64459a8d.chunk.js",
    "revision": "a561e6272e79f2011405b7f3d1ca5e23"
  },
  {
    "url": "static/js/collection.badc34a1.chunk.js",
    "revision": "54d10d3be2e1f76b63a16284c6e95393"
  },
  {
    "url": "static/js/collections.3d338f68.chunk.js",
    "revision": "9cddf13bcb52774086fd127b1e21a621"
  },
  {
    "url": "static/js/contact.361d12ba.chunk.js",
    "revision": "15082ada29cde5250c4b2d50432716d1"
  },
  {
    "url": "static/js/embed.ab28650b.chunk.js",
    "revision": "28e8b3d33945b58eb91b0e3ee5b86de5"
  },
  {
    "url": "static/js/footer.39496aea.chunk.js",
    "revision": "eceb33f9a5ba7e996ee996985bebc060"
  },
  {
    "url": "static/js/graph-msm.41f26273.chunk.js",
    "revision": "4877d45d43cdf97a2cee79ad0908afa6"
  },
  {
    "url": "static/js/graph.c29ad219.chunk.js",
    "revision": "f1240b91352a9d9e40d90bc62de7f080"
  },
  {
    "url": "static/js/help.d8a74491.chunk.js",
    "revision": "9df72620e80ab329a28cbd6de744fc31"
  },
  {
    "url": "static/js/home.6ae379e5.chunk.js",
    "revision": "19e02a15f4f7683e4d2ed06db2fb627d"
  },
  {
    "url": "static/js/intersection-observer.267a9602.chunk.js",
    "revision": "6a25d2ab4bbaef2e95c7611ec6097bb6"
  },
  {
    "url": "static/js/main.878aa57e.js",
    "revision": "b9f68fa65170bb84cb18180a3ac87b9c"
  },
  {
    "url": "static/js/meta-analysis.f0399f77.chunk.js",
    "revision": "325e487d26ee88b9f11007ce5b53c4f0"
  },
  {
    "url": "static/js/pointer.82517eac.chunk.js",
    "revision": "bcd4395b6717d9ea3786d05105974a08"
  },
  {
    "url": "static/js/projections.ac848036.chunk.js",
    "revision": "1d08c746762999fb382047579408f2ed"
  },
  {
    "url": "static/js/protvista-coloured-sequence.7fae04a5.chunk.js",
    "revision": "7a0b4818d2573d686b8f9292b1fb1571"
  },
  {
    "url": "static/js/protvista-interpro-track.336b24e1.chunk.js",
    "revision": "0e0523644a54d7d965acdb74512217d9"
  },
  {
    "url": "static/js/protvista-manager.3b518613.chunk.js",
    "revision": "d539b044bed605dc2c5cc60ab844b67e"
  },
  {
    "url": "static/js/protvista-navigation.3a1d0c9e.chunk.js",
    "revision": "c266d217423d06f5f1858ff02db4a0ef"
  },
  {
    "url": "static/js/protvista-sequence.7f409216.chunk.js",
    "revision": "a99ecdcdaee8cc52a481a15e7dfdac7f"
  },
  {
    "url": "static/js/snack-bar-container.5d0a483a.chunk.js",
    "revision": "3df3ef862b0ea940c5ff3b3e00da70d4"
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
      /\/vre_lite\//, /\/vre\//, // exclude the VRE from the scope of the service worker
      /\/minio\//, // exclude MinIO from the scope of the service worker
      /\/auth\//, /\/vault\//, // These two were requested by Josep Lluís Gelpi
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
