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
    "revision": "796915b9c75041fa85345fd65a5c6afe"
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
    "url": "static/css/1814.ce10fd5a.chunk.css",
    "revision": "915983ddce5265c33292abcfb2cb3efc"
  },
  {
    "url": "static/css/1924.c9b9fd82.chunk.css",
    "revision": "5babbe3dd653a13b7ff0a4db5b58f4f3"
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
    "url": "static/css/2315.ca945317.chunk.css",
    "revision": "0001a6ab8d384b618383dc8bdcb7c301"
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
    "url": "static/css/2570.e35a5411.chunk.css",
    "revision": "001eb60049470d1ede105bf3035121ee"
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
    "url": "static/css/2930.db42657f.chunk.css",
    "revision": "53e5615c6bf44a7ccbd2d0babf8bc92b"
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
    "url": "static/css/3112.0740c151.chunk.css",
    "revision": "4ebe59e0d519e15b88c27cee716c41cc"
  },
  {
    "url": "static/css/3171.38638a9a.chunk.css",
    "revision": "bf5a5adc8b9502b33160fd90a5ee4d2b"
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
    "url": "static/css/3427.25b012ad.chunk.css",
    "revision": "1fa40266984c10216e9722cec07328c2"
  },
  {
    "url": "static/css/3634.b547d833.chunk.css",
    "revision": "d27b9c7a467af3d58d808f6c67c0f425"
  },
  {
    "url": "static/css/375.ee195a0e.chunk.css",
    "revision": "61110dea1de298d8b7f455455f3d7ee5"
  },
  {
    "url": "static/css/3960.59270940.chunk.css",
    "revision": "d93b5d239c5acd574eaf9a23b65a81d1"
  },
  {
    "url": "static/css/4019.92ee6332.chunk.css",
    "revision": "8192549041547c93e901e8ff05140e7e"
  },
  {
    "url": "static/css/450.0b865e7a.chunk.css",
    "revision": "2c749ee41ed4113d598c3b8833362971"
  },
  {
    "url": "static/css/4878.bab2e290.chunk.css",
    "revision": "60718da406f2425ceb0f56ed706deb26"
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
    "url": "static/css/5076.abd5c2bd.chunk.css",
    "revision": "098e799db26394e211382055690ed4a5"
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
    "url": "static/css/5263.10b1fcf9.chunk.css",
    "revision": "1554125d786c2c5b29d7c327c2f297f1"
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
    "url": "static/css/6039.4b4ca900.chunk.css",
    "revision": "c50d5029fe93a9b9fb01d618fcce077b"
  },
  {
    "url": "static/css/604.198113c4.chunk.css",
    "revision": "8a0928cb3dc2a440c6262fbdf4bdbbae"
  },
  {
    "url": "static/css/6045.4c2076a4.chunk.css",
    "revision": "fd25cd8d8b6c9843c5201ed06839fb59"
  },
  {
    "url": "static/css/6285.07f6f099.chunk.css",
    "revision": "51aad1cb9267ef2cc02ea8d1888064d2"
  },
  {
    "url": "static/css/6304.95367e9d.chunk.css",
    "revision": "67ece91cea71be633c2629926de371a7"
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
    "url": "static/css/7053.16e4a1d3.chunk.css",
    "revision": "b2dc88cca1ea6ce3b1ec1e833d552409"
  },
  {
    "url": "static/css/7242.05be551e.chunk.css",
    "revision": "243fcea7193c067148c22eb20edb178b"
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
    "url": "static/css/7852.92ee6332.chunk.css",
    "revision": "124bd45c6f34ab300c3cd3d5dbadb885"
  },
  {
    "url": "static/css/8029.473508db.chunk.css",
    "revision": "f4c4bd4918da498b8457fbfc1fa54614"
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
    "url": "static/css/8336.b92d1d55.chunk.css",
    "revision": "c8dcf24d1dd1eeea3b7760c6729cb15b"
  },
  {
    "url": "static/css/8435.07fb44b3.chunk.css",
    "revision": "bb4970279a3ba59f064a2ed8c3e574d1"
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
    "url": "static/css/9418.9d237ea1.chunk.css",
    "revision": "05bd056f2436c5129a08ab7bab0f4741"
  },
  {
    "url": "static/css/9452.fcd5ff27.chunk.css",
    "revision": "d3a63a3e33c27aa88d29a0f6e6bf07be"
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
    "url": "static/css/9739.4b4ca900.chunk.css",
    "revision": "e43421f32b7866bdf862f5494d601c88"
  },
  {
    "url": "static/css/9835.b969164e.chunk.css",
    "revision": "8ff435beda177b24a008cef488885319"
  },
  {
    "url": "static/css/accession.45fffe1f.chunk.css",
    "revision": "2a6b6888c4c1c33e272241765610f823"
  },
  {
    "url": "static/css/advanced-search.7c6c5cd8.chunk.css",
    "revision": "619be6e822313ddfe961b4e20c1b1878"
  },
  {
    "url": "static/css/browse.f7e04ca6.chunk.css",
    "revision": "59081d615054371cbe278c85e7dd148f"
  },
  {
    "url": "static/css/collection-statistics.9d861751.chunk.css",
    "revision": "63dec6ad89e98ddcac9b21c4bf6d46c2"
  },
  {
    "url": "static/css/collection.391d3540.chunk.css",
    "revision": "4fa3e832b1899da19d00f0f9fef052fa"
  },
  {
    "url": "static/css/collections.972af12e.chunk.css",
    "revision": "fc0ca3b167defc9f75c001fb33db99b9"
  },
  {
    "url": "static/css/contact.b0770619.chunk.css",
    "revision": "01a8b7751d6b9d6bef54b12be4a30b62"
  },
  {
    "url": "static/css/embed.eb01657d.chunk.css",
    "revision": "af1472874701848b1e59578674661e61"
  },
  {
    "url": "static/css/footer.aefe8c02.chunk.css",
    "revision": "3eb8a3a34967ffb85c2c327bae240c1f"
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
    "url": "static/css/home.3010aec3.chunk.css",
    "revision": "944f4e5252de3ba8b4092845062f8d78"
  },
  {
    "url": "static/css/meta-analysis.4d9b4728.chunk.css",
    "revision": "c73409fb4a497cc1568c7f96839bdaeb"
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
    "url": "static/css/viewer-with-controls.2df4b553.chunk.css",
    "revision": "6afd13d7a7582c7f0684a10add6c09d1"
  },
  {
    "url": "static/js/1177.88fd9538.chunk.js",
    "revision": "bb2d5ff753fce88040952a0d091cd568"
  },
  {
    "url": "static/js/1181.d5a7bd13.chunk.js",
    "revision": "9c4c2e3979f8743b773ad6b329255f9b"
  },
  {
    "url": "static/js/1192.278ee9e9.chunk.js",
    "revision": "2c130a0a1b5e190dfc42b171bc2aba66"
  },
  {
    "url": "static/js/1198.d241962d.chunk.js",
    "revision": "d89fdf4126f6017bb51287b13cd527fe"
  },
  {
    "url": "static/js/126.8d6d189b.chunk.js",
    "revision": "f956b350ec21f5425e81cf6a9ed80faa"
  },
  {
    "url": "static/js/134.c600c793.chunk.js",
    "revision": "e8033f3033b416ab23f69fbfaf9585d8"
  },
  {
    "url": "static/js/1502.eec173eb.chunk.js",
    "revision": "c90db26a23c8fe7e97092fe6e620bd97"
  },
  {
    "url": "static/js/1612.29bfc211.chunk.js",
    "revision": "c56f700e2d8e96efb2f60364cc9a5fb8"
  },
  {
    "url": "static/js/1666.4abd90f5.chunk.js",
    "revision": "3b8847bf38742ff3948815e8e398b051"
  },
  {
    "url": "static/js/1814.8743916c.chunk.js",
    "revision": "94cabd1f6663a9090a0e4ab961424a05"
  },
  {
    "url": "static/js/1924.c66a36dc.chunk.js",
    "revision": "c9ce5a6c4eae9edfd5d0326d1040e291"
  },
  {
    "url": "static/js/2023.24ec975d.chunk.js",
    "revision": "a9095376c93fc41bcc29ae246b076adf"
  },
  {
    "url": "static/js/2055.c5bd0992.chunk.js",
    "revision": "1e343d7dd1572aa8cab89543f2b03391"
  },
  {
    "url": "static/js/2100.f93c895d.chunk.js",
    "revision": "8c3718f0e5ad13804bd9af8729f5225a"
  },
  {
    "url": "static/js/2288.4c6d7142.chunk.js",
    "revision": "74eb7a6eba16fcfbf4570d4c010e0aeb"
  },
  {
    "url": "static/js/2315.799847e7.chunk.js",
    "revision": "91b8fb8ba9d6835e4276e3d90fd89929"
  },
  {
    "url": "static/js/2492.8a412e2c.chunk.js",
    "revision": "9ff10417f9a934dbcd1fb4a99672d448"
  },
  {
    "url": "static/js/2527.65b7ad85.chunk.js",
    "revision": "423f77a8c069b26ef17f9e5a1a74bc83"
  },
  {
    "url": "static/js/253.78f4c776.chunk.js",
    "revision": "6e1bc8c81d863edbfdcb1f9973154a9e"
  },
  {
    "url": "static/js/2570.2051f205.chunk.js",
    "revision": "3b2106e08d86d146b5d090ca5d4049d6"
  },
  {
    "url": "static/js/258.88778747.chunk.js",
    "revision": "df6d3565e2db5abec63b63ac6d166d5a"
  },
  {
    "url": "static/js/2594.c5031766.chunk.js",
    "revision": "ede08a4aa7d280e0b70263ccfe860887"
  },
  {
    "url": "static/js/2615.ae0f8208.chunk.js",
    "revision": "b9a3a6b9366a04bb946225008e68118d"
  },
  {
    "url": "static/js/2633.a0f720d8.chunk.js",
    "revision": "3f711669e06715cf9998d2a1a380f701"
  },
  {
    "url": "static/js/2822.83b46d02.chunk.js",
    "revision": "da94481ef66236582da39cc2e8765937"
  },
  {
    "url": "static/js/2881.75d16b23.chunk.js",
    "revision": "2fe7d9007257c72ce3eaa36e505d26af"
  },
  {
    "url": "static/js/2930.4f2e076e.chunk.js",
    "revision": "52fbe50dab51b176d263c58fe40b3feb"
  },
  {
    "url": "static/js/3016.e01c935b.chunk.js",
    "revision": "38c366d78f7ac077f0a31b2fdb9cac14"
  },
  {
    "url": "static/js/3104.5055d7be.chunk.js",
    "revision": "0986c79a8fdb877df06b943ca397ec2b"
  },
  {
    "url": "static/js/3112.3b5cb321.chunk.js",
    "revision": "eefb139fd76ac583b4670631ac6abf15"
  },
  {
    "url": "static/js/3171.09272d24.chunk.js",
    "revision": "6f6bea8755a675642d52e8dff1a93de4"
  },
  {
    "url": "static/js/3173.dcafa909.chunk.js",
    "revision": "bcfa8734d62226b390b775f4e41a9401"
  },
  {
    "url": "static/js/3283.f676e926.chunk.js",
    "revision": "a2fecc4778207d722865c4c59389c1ba"
  },
  {
    "url": "static/js/3287.941ca2f3.chunk.js",
    "revision": "8dba76d5f382e164be63eccfe1fcda4f"
  },
  {
    "url": "static/js/3427.883922e1.chunk.js",
    "revision": "aff6e8e407b4e67084a347cffc8381dd"
  },
  {
    "url": "static/js/3634.f548ac09.chunk.js",
    "revision": "bb71d92fe96393d1477a2c054663b5e5"
  },
  {
    "url": "static/js/375.1bee3db2.chunk.js",
    "revision": "4b73e784ebe60bbe49c90eda1d5adbed"
  },
  {
    "url": "static/js/3845.13a65801.chunk.js",
    "revision": "788df6daef15359c9138f3b19f7c5534"
  },
  {
    "url": "static/js/3960.d2eb1335.chunk.js",
    "revision": "065485edd9dc67b18f7a2f0f3edda991"
  },
  {
    "url": "static/js/3969.55e818cf.chunk.js",
    "revision": "3afb43e1c73d4e84160f09b1541fed1a"
  },
  {
    "url": "static/js/4019.49fa4011.chunk.js",
    "revision": "ee51bf7fe7164f6ac2e42497099f09c7"
  },
  {
    "url": "static/js/402.9a90ee97.chunk.js",
    "revision": "b96faef6aa485b585e74b8ac320d63da"
  },
  {
    "url": "static/js/4125.714f31e3.chunk.js",
    "revision": "fb0721e2db9e16c29f2a2ef1eba63c7d"
  },
  {
    "url": "static/js/4302.10db98d5.chunk.js",
    "revision": "26ae340f672fce27e29247fb66d1e302"
  },
  {
    "url": "static/js/4442.f64c1879.chunk.js",
    "revision": "7a80e2094d537db8c205a7ce6636cfc7"
  },
  {
    "url": "static/js/450.20f30b12.chunk.js",
    "revision": "8a61fecdb441691cb9f78acd6d77a09b"
  },
  {
    "url": "static/js/4830.32d6d1c1.chunk.js",
    "revision": "0ba1ca1fe1b247058421b9ec1fe77582"
  },
  {
    "url": "static/js/4878.8777d9ac.chunk.js",
    "revision": "185de24fb996b81a96395c8cb27a37d4"
  },
  {
    "url": "static/js/4963.16f2649b.chunk.js",
    "revision": "0ab6081007fac19d580d188463bff76b"
  },
  {
    "url": "static/js/4974.c7ba0907.chunk.js",
    "revision": "93ca855dff47eec015c32123f65737e7"
  },
  {
    "url": "static/js/5076.15a5e07c.chunk.js",
    "revision": "026566939e57c86df121b8664a7ac415"
  },
  {
    "url": "static/js/5144.aa21ea0d.chunk.js",
    "revision": "ebf1a2a78dff1697dff5dc493e4b8e21"
  },
  {
    "url": "static/js/5154.35279333.chunk.js",
    "revision": "9e5b77f20879d433ddcf414eac98a237"
  },
  {
    "url": "static/js/5190.0e7859fa.chunk.js",
    "revision": "078b15a29cd66d942d37e804efb019b6"
  },
  {
    "url": "static/js/5236.08a67aa3.chunk.js",
    "revision": "06fdba2ade68d5c6b5ef7c8d464ca818"
  },
  {
    "url": "static/js/5263.b50c73cc.chunk.js",
    "revision": "81a98169dc7162e19a40b542d6d3ef54"
  },
  {
    "url": "static/js/5291.554b7fec.chunk.js",
    "revision": "dc4c8fb118ad0883ec676956657b923a"
  },
  {
    "url": "static/js/5404.ffdd489b.chunk.js",
    "revision": "a37a85712848691aad0f7bfeb9ba6cd2"
  },
  {
    "url": "static/js/5471.a61563e5.chunk.js",
    "revision": "8998fff936b8c5d7b509463d58b37b98"
  },
  {
    "url": "static/js/5581.0e5e5a44.chunk.js",
    "revision": "7c8b32c6905b1f522b696628c07016ef"
  },
  {
    "url": "static/js/5591.5f6279b0.chunk.js",
    "revision": "c0de5ca46940ace101792a6344ea8510"
  },
  {
    "url": "static/js/5633.d606bdd9.chunk.js",
    "revision": "402673af9751efd06aad2dc7ca4cde74"
  },
  {
    "url": "static/js/5709.7237d9bb.chunk.js",
    "revision": "464b0d8ffc1a2d38b890ed3a9eafdcf3"
  },
  {
    "url": "static/js/5750.00100c7b.chunk.js",
    "revision": "4686ce89d2b8787cfd2615bf3c1e3949"
  },
  {
    "url": "static/js/5839.7ec03f30.chunk.js",
    "revision": "fc2060fc3246c73df788b5f370e4b8f1"
  },
  {
    "url": "static/js/5843.449e81bf.chunk.js",
    "revision": "d312ed0dd728d005751449e550ac4b74"
  },
  {
    "url": "static/js/604.b279ceaf.chunk.js",
    "revision": "cdc76c993005c0bc5a9825931b4bc48d"
  },
  {
    "url": "static/js/6045.51cbe749.chunk.js",
    "revision": "9561a867e879d6d66a006173897e013d"
  },
  {
    "url": "static/js/6264.5a841124.chunk.js",
    "revision": "42b7df04e086821016d37e06dcc73b11"
  },
  {
    "url": "static/js/6285.8e17c3f2.chunk.js",
    "revision": "edf957420334d2bf373d57174710d790"
  },
  {
    "url": "static/js/6344.0930c96b.chunk.js",
    "revision": "abef357b762700e143a493495524c7ee"
  },
  {
    "url": "static/js/6401.3b428dbe.chunk.js",
    "revision": "614b840644b6fd7dacb33a97b506f0d1"
  },
  {
    "url": "static/js/660.99cb4364.chunk.js",
    "revision": "d50b9c1f15824e50409be891c04fe20c"
  },
  {
    "url": "static/js/6618.4bbbb418.chunk.js",
    "revision": "dd6d742ba08246dd23097c7cd882d8d7"
  },
  {
    "url": "static/js/6624.7ef1e01d.chunk.js",
    "revision": "a1004a830212904f51d3cb95e36def6e"
  },
  {
    "url": "static/js/6852.38c3e747.chunk.js",
    "revision": "3f09aacbfb42e5f93e928598f5c0a19f"
  },
  {
    "url": "static/js/7041.2740203c.chunk.js",
    "revision": "1a4760af3fbaac429406eb8c619cc405"
  },
  {
    "url": "static/js/7053.0e142fd0.chunk.js",
    "revision": "19fc688be7de27fb0e2c75bb2818a48f"
  },
  {
    "url": "static/js/7242.6e107d54.chunk.js",
    "revision": "0535377f8c1f737412d4b58c58935f8f"
  },
  {
    "url": "static/js/7389.f4a2d0ad.chunk.js",
    "revision": "c34931766d1a6025bc294a1c656342ce"
  },
  {
    "url": "static/js/7732.ff40385f.chunk.js",
    "revision": "a254f6a5292c494b230231e2ef2b7499"
  },
  {
    "url": "static/js/7784.cb9852a9.chunk.js",
    "revision": "41df1cbcd10baadb754b4f552bcb686b"
  },
  {
    "url": "static/js/7803.89ed67b7.chunk.js",
    "revision": "70b8ce5a32a5d9f03652a7e0d2912301"
  },
  {
    "url": "static/js/7852.b5da8986.chunk.js",
    "revision": "2776b00bd1974be3048bf00251d85bc3"
  },
  {
    "url": "static/js/7955.a07ebf8c.chunk.js",
    "revision": "dfe46ac97c9667b8634812b756d13b06"
  },
  {
    "url": "static/js/8029.b6b2730c.chunk.js",
    "revision": "cdd7b8ca89241b58a9915df8ea9f155a"
  },
  {
    "url": "static/js/8095.27e1d81d.chunk.js",
    "revision": "e1ff4adfb4c5eac47ad3ade31c129288"
  },
  {
    "url": "static/js/8133.dffd51ff.chunk.js",
    "revision": "c35abbec6d1dcbc492bc126b7370afa4"
  },
  {
    "url": "static/js/8217.d7cff985.chunk.js",
    "revision": "2349e29991f4bfbaec47e09d35f998cc"
  },
  {
    "url": "static/js/8259.f617f911.chunk.js",
    "revision": "c006bf0fd11b7846ad739ef44b0bf845"
  },
  {
    "url": "static/js/8305.02b22859.chunk.js",
    "revision": "5653d6c96c921290facb2e7cea83b78f"
  },
  {
    "url": "static/js/8333.c9bcedf1.chunk.js",
    "revision": "46590c216cb548703adff08da3ef7fef"
  },
  {
    "url": "static/js/8336.827a481b.chunk.js",
    "revision": "7364de89e3a390be452ebd20c3715a72"
  },
  {
    "url": "static/js/8384.ebd132f5.chunk.js",
    "revision": "e84a41f8e79e985a8c1ee358453be32e"
  },
  {
    "url": "static/js/8435.d2117632.chunk.js",
    "revision": "a7244e6241676e902baffc75503cd41e"
  },
  {
    "url": "static/js/8461.71f5da64.chunk.js",
    "revision": "268d57568cb269cb100b6283c575ca9b"
  },
  {
    "url": "static/js/8671.e80172a8.chunk.js",
    "revision": "faa554aa1ff6ed1da819da1855e28289"
  },
  {
    "url": "static/js/8677.9576c068.chunk.js",
    "revision": "0b8947fba07eb1576ff43c0532053e33"
  },
  {
    "url": "static/js/8870.f10aa598.chunk.js",
    "revision": "aebd37f09a3cd58efcad3811f6e82edb"
  },
  {
    "url": "static/js/8903.2d488987.chunk.js",
    "revision": "594d4c053ed6e2cc1448c5d628ec61a7"
  },
  {
    "url": "static/js/8914.b85b439e.chunk.js",
    "revision": "03c11b3b63d7309b10545db178e21969"
  },
  {
    "url": "static/js/8939.c1df9422.chunk.js",
    "revision": "5eda7178ceb8565c608f4797a3577d22"
  },
  {
    "url": "static/js/9070.ec537437.chunk.js",
    "revision": "1c290f84a9d2a61b8a9edd360433e3bb"
  },
  {
    "url": "static/js/9219.8d3b29f0.chunk.js",
    "revision": "5cd6f4a1838bd124704d861b535aa9ee"
  },
  {
    "url": "static/js/9302.3f8947d8.chunk.js",
    "revision": "582a0914bd31b036574931f77bc38057"
  },
  {
    "url": "static/js/9362.071b2b9e.chunk.js",
    "revision": "b4fe545896b10da2420db6b822650f7b"
  },
  {
    "url": "static/js/9373.44d8c29f.chunk.js",
    "revision": "3bc4677d5902e66c22cf50cb77ab1358"
  },
  {
    "url": "static/js/9418.c0dcc392.chunk.js",
    "revision": "1d07c9eb761e8b0bce12492fa7f3dcc9"
  },
  {
    "url": "static/js/9452.edb75027.chunk.js",
    "revision": "e569019dd9ecd39cabbd9afa787414f4"
  },
  {
    "url": "static/js/9480.6b516a54.chunk.js",
    "revision": "17fda6b2bc36826d396b0e4fbbbd119e"
  },
  {
    "url": "static/js/953.a22a21c7.chunk.js",
    "revision": "5216e11916362d5e88b626d43b77ac47"
  },
  {
    "url": "static/js/9632.fb77ef5b.chunk.js",
    "revision": "727bd1f6ecb0ffa65c62dd35dc84f2fd"
  },
  {
    "url": "static/js/9739.273cef9f.chunk.js",
    "revision": "37e8ca80fecba4c665080a3c612817bd"
  },
  {
    "url": "static/js/9796.788d77c7.chunk.js",
    "revision": "109c365d89e28e08fabeb5e4b809a0f7"
  },
  {
    "url": "static/js/9835.161af5cb.chunk.js",
    "revision": "82d23c6178cb31a57374577e50f641c3"
  },
  {
    "url": "static/js/accession.1b8ea946.chunk.js",
    "revision": "17258a52d8e9e4e1aca6c99bc30193cf"
  },
  {
    "url": "static/js/advanced-search.b6a3552c.chunk.js",
    "revision": "134e07f8542930ecf392d3f656fd358d"
  },
  {
    "url": "static/js/browse.afd70bf8.chunk.js",
    "revision": "66f9b5f85876a65c2d83d7af66e9312a"
  },
  {
    "url": "static/js/collection-statistics.655da867.chunk.js",
    "revision": "6f829c45ce9fbb485eb7274ae0ff9233"
  },
  {
    "url": "static/js/collection.999c0a48.chunk.js",
    "revision": "c427a80927ea9762ddd7d6ae276c6414"
  },
  {
    "url": "static/js/collections.442ff66d.chunk.js",
    "revision": "edcd27abfd179f47d4ef304dd74febd1"
  },
  {
    "url": "static/js/contact.7c714dd3.chunk.js",
    "revision": "273b97ace73f9c8080f9f705ad56c7f5"
  },
  {
    "url": "static/js/embed.fd92c4e8.chunk.js",
    "revision": "0447486b67c92299cec7f69c113be2d8"
  },
  {
    "url": "static/js/footer.adfac604.chunk.js",
    "revision": "e76103767510237a0f35b99f81d97e3f"
  },
  {
    "url": "static/js/graph-msm.a228cedf.chunk.js",
    "revision": "a9b6333f39225ab94f42d3009c3c5fde"
  },
  {
    "url": "static/js/graph.08e3c94e.chunk.js",
    "revision": "a21761ec795330760ee97e404f90e795"
  },
  {
    "url": "static/js/help.1a9e6136.chunk.js",
    "revision": "8a462ba84cf221eebfa5f532536e4c58"
  },
  {
    "url": "static/js/home.8b314353.chunk.js",
    "revision": "da779589451cc29ba28c6f37a375ea67"
  },
  {
    "url": "static/js/intersection-observer.6296de56.chunk.js",
    "revision": "b2636aca71a591d4688b98f3961e65ba"
  },
  {
    "url": "static/js/main.075a4fe9.js",
    "revision": "940b6c23a1ffb4b9cb75fe86899a7980"
  },
  {
    "url": "static/js/meta-analysis.40ebac6e.chunk.js",
    "revision": "834cbc252e78db51052d6fdae6bc024a"
  },
  {
    "url": "static/js/pointer.a4b7f4b7.chunk.js",
    "revision": "00ce45f0259c1d9a1720247185268154"
  },
  {
    "url": "static/js/projections.8b11c7cf.chunk.js",
    "revision": "9a1cdc2e4eb6c2b91caa3672e0de9854"
  },
  {
    "url": "static/js/protvista-coloured-sequence.49d85964.chunk.js",
    "revision": "120c13f352bf0f9830f8961e2e502945"
  },
  {
    "url": "static/js/protvista-interpro-track.8c8b4068.chunk.js",
    "revision": "e3bb329dd306865f6c58ab73a9404110"
  },
  {
    "url": "static/js/protvista-manager.2dead016.chunk.js",
    "revision": "d66448b4bf388e10b43478e3b469e7ba"
  },
  {
    "url": "static/js/protvista-navigation.3427dc30.chunk.js",
    "revision": "ec7c6ab0c8911c38cb3c9bb0aeaa3c65"
  },
  {
    "url": "static/js/protvista-sequence.d898965e.chunk.js",
    "revision": "965490212e4b56945c214cce8e0b1664"
  },
  {
    "url": "static/js/snack-bar-container.f206c776.chunk.js",
    "revision": "cf2c035ac87fe32783a3b13128b84bf4"
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
      /\/grafana\//, // exclude Grafana from the scope of the service worker
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
