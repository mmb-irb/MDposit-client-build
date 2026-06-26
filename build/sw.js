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
    "revision": "aba1c6c6672181790f9985c08532457c"
  },
  {
    "url": "static/css/1181.73a5df46.chunk.css",
    "revision": "b7803f37dae6bcb420f2217d3f985331"
  },
  {
    "url": "static/css/125.42930ae2.chunk.css",
    "revision": "d1ed13f0bf7a45249f8dd558d093388e"
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
    "url": "static/css/2911.270ce99d.chunk.css",
    "revision": "6477f74306f5ca3a056835e1dc8a08a7"
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
    "url": "static/css/3595.ae763669.chunk.css",
    "revision": "8c512c766246c99b4a2913e267b1f3bb"
  },
  {
    "url": "static/css/3715.43f1cf55.chunk.css",
    "revision": "0674b2edaea0ba7f179166019a90c84e"
  },
  {
    "url": "static/css/3717.0bb09543.chunk.css",
    "revision": "6c838d17390025d3ca958cb8b20e60bc"
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
    "url": "static/css/450.0b865e7a.chunk.css",
    "revision": "2c749ee41ed4113d598c3b8833362971"
  },
  {
    "url": "static/css/4778.1945e556.chunk.css",
    "revision": "eb1aaa5d5c4b97f00a5ae6fbbacc9e55"
  },
  {
    "url": "static/css/4822.feecd875.chunk.css",
    "revision": "412ebdbbfcf6d7df4748b98fa0843e71"
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
    "url": "static/css/5096.badc6e8e.chunk.css",
    "revision": "d68fa41879974550c9fe838dbcb76402"
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
    "url": "static/css/6034.feecd875.chunk.css",
    "revision": "db94684df8375d76e98c1d1ecf967100"
  },
  {
    "url": "static/css/604.198113c4.chunk.css",
    "revision": "8a0928cb3dc2a440c6262fbdf4bdbbae"
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
    "url": "static/css/7197.8bc569eb.chunk.css",
    "revision": "7c117c368c0e4066304e9273b5cdb7b6"
  },
  {
    "url": "static/css/731.25f5d710.chunk.css",
    "revision": "f451931cfbe9c9eeea9974168b88a5e2"
  },
  {
    "url": "static/css/7385.333844c7.chunk.css",
    "revision": "af18bb162fd5d251854f2e261e106f70"
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
    "url": "static/css/8042.2a1eab99.chunk.css",
    "revision": "54ab2b6577c200511b3c37b8a21faa73"
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
    "url": "static/css/872.0bb09543.chunk.css",
    "revision": "7a42b62daf48d99eef17520fe8f43474"
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
    "url": "static/css/9480.f28160ab.chunk.css",
    "revision": "1835382f01f14255bf388513f397b8af"
  },
  {
    "url": "static/css/953.c5231419.chunk.css",
    "revision": "74d709c16ab58472cf3da74d5cd1f28b"
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
    "url": "static/css/advanced-search.9883d9e1.chunk.css",
    "revision": "02063a843c192a7656cbd3889ff928db"
  },
  {
    "url": "static/css/browse.a072a4ff.chunk.css",
    "revision": "94d74421ef4027fa72d8af8521c4e150"
  },
  {
    "url": "static/css/collection-statistics.73f01657.chunk.css",
    "revision": "b1ad23822e3570a92fe8bbc97456c42e"
  },
  {
    "url": "static/css/collection.51fd9978.chunk.css",
    "revision": "623becbb35557471382c6628b7ba9a23"
  },
  {
    "url": "static/css/collections.07d49a96.chunk.css",
    "revision": "a9804fea76d1e85329bbf69ade8af982"
  },
  {
    "url": "static/css/contact.b0770619.chunk.css",
    "revision": "01a8b7751d6b9d6bef54b12be4a30b62"
  },
  {
    "url": "static/css/embed.68c9ec33.chunk.css",
    "revision": "800d4488e00d87bdff3635517aaba444"
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
    "url": "static/css/meta-analysis.e5d428ac.chunk.css",
    "revision": "41f8ebe630d93b992537764010f45ac4"
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
    "url": "static/css/viewer-with-controls.2a68a59e.chunk.css",
    "revision": "f73a19b2455a5221e9005015518a277c"
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
    "url": "static/js/1198.d241962d.chunk.js",
    "revision": "d89fdf4126f6017bb51287b13cd527fe"
  },
  {
    "url": "static/js/125.69df49d9.chunk.js",
    "revision": "8216ea96f948285fe5274e932d359bf1"
  },
  {
    "url": "static/js/126.7da69eab.chunk.js",
    "revision": "b0dcc9e9415b4d93f133a48604b1fd6e"
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
    "url": "static/js/1643.9395531d.chunk.js",
    "revision": "8ba60e827b5965c0ec2e99b266bed796"
  },
  {
    "url": "static/js/1666.b99440fc.chunk.js",
    "revision": "f0c76a38608c5dfe1587f19ecd2d2301"
  },
  {
    "url": "static/js/1814.8743916c.chunk.js",
    "revision": "94cabd1f6663a9090a0e4ab961424a05"
  },
  {
    "url": "static/js/1924.2daa3670.chunk.js",
    "revision": "880766cc20b2e401dcc4fc60432504da"
  },
  {
    "url": "static/js/2023.c0316374.chunk.js",
    "revision": "8c6917e9ec37763d036ea427cbeae20d"
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
    "url": "static/js/2116.5e9e906c.chunk.js",
    "revision": "4fcd78ecfd1065e408264e787630ee5b"
  },
  {
    "url": "static/js/2260.96b5dd47.chunk.js",
    "revision": "afaa58f72770413de3a49d463e7a75fa"
  },
  {
    "url": "static/js/2288.4c6d7142.chunk.js",
    "revision": "74eb7a6eba16fcfbf4570d4c010e0aeb"
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
    "url": "static/js/258.f2f769c1.chunk.js",
    "revision": "97f5f91aac58a63af5ee8f1d36bae42d"
  },
  {
    "url": "static/js/2594.c5031766.chunk.js",
    "revision": "ede08a4aa7d280e0b70263ccfe860887"
  },
  {
    "url": "static/js/2615.274c1e98.chunk.js",
    "revision": "35e849a0955fa7f4c2ca8e82b97cf316"
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
    "url": "static/js/2911.c10311c2.chunk.js",
    "revision": "40b17562e5e2860dadff82a94d050f0d"
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
    "url": "static/js/3112.3987a2fa.chunk.js",
    "revision": "96977fdae854b85f3f3712619d90339d"
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
    "url": "static/js/3287.8a793e8a.chunk.js",
    "revision": "2cfef781a390796c344403a151f38a2f"
  },
  {
    "url": "static/js/3395.a2dd465a.chunk.js",
    "revision": "5265f3f70c83577d2da0be01f416edee"
  },
  {
    "url": "static/js/3427.883922e1.chunk.js",
    "revision": "aff6e8e407b4e67084a347cffc8381dd"
  },
  {
    "url": "static/js/3595.01b84d67.chunk.js",
    "revision": "8f6cb6fb0c5f22f7614de19e8dc4cacb"
  },
  {
    "url": "static/js/3715.2afc3713.chunk.js",
    "revision": "bd7299c1814f94e34456033738770c5b"
  },
  {
    "url": "static/js/3717.df0baaa8.chunk.js",
    "revision": "599cf3cbc7928e5b40e98ce8208d01bb"
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
    "url": "static/js/4125.714f31e3.chunk.js",
    "revision": "fb0721e2db9e16c29f2a2ef1eba63c7d"
  },
  {
    "url": "static/js/4302.d8bad787.chunk.js",
    "revision": "ee3429303bdf93bfd29962a688cef5c9"
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
    "url": "static/js/4778.494b2768.chunk.js",
    "revision": "1e36562ad96f9c772b4c246097d5a16a"
  },
  {
    "url": "static/js/4822.482031ab.chunk.js",
    "revision": "bf93054931d7f413d3f48445543fe0cc"
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
    "url": "static/js/5096.a4ff9dfb.chunk.js",
    "revision": "69bf6f490b9ff22d6e63a66103d8fd5f"
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
    "url": "static/js/5236.453d0cd7.chunk.js",
    "revision": "e6a8244db950e0e33763ec34d23e27a5"
  },
  {
    "url": "static/js/5263.675249a8.chunk.js",
    "revision": "05ae4878f8df64de738457c9fb6c15b8"
  },
  {
    "url": "static/js/5291.554b7fec.chunk.js",
    "revision": "dc4c8fb118ad0883ec676956657b923a"
  },
  {
    "url": "static/js/5471.a61563e5.chunk.js",
    "revision": "8998fff936b8c5d7b509463d58b37b98"
  },
  {
    "url": "static/js/5581.ea65f890.chunk.js",
    "revision": "ea5041d380a6c9ca8103f71730884b06"
  },
  {
    "url": "static/js/5591.0e38ed47.chunk.js",
    "revision": "361683b4bc0a20a875d3e76b232743b4"
  },
  {
    "url": "static/js/5633.e57209fd.chunk.js",
    "revision": "52562c7ff3e21036fc2b3ac59476b1eb"
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
    "url": "static/js/6401.deb695f8.chunk.js",
    "revision": "432aaf9fcfeb1980d2f58043a0ed3b36"
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
    "url": "static/js/6651.b56ee65c.chunk.js",
    "revision": "53bd2231641f3b140b3d636ab00733a7"
  },
  {
    "url": "static/js/6996.eef6ae76.chunk.js",
    "revision": "5f3b30e4d076cd2f196484c63ee977db"
  },
  {
    "url": "static/js/7041.baf449de.chunk.js",
    "revision": "6f04c85cbecd929c410f92926cb166fc"
  },
  {
    "url": "static/js/7053.0e142fd0.chunk.js",
    "revision": "19fc688be7de27fb0e2c75bb2818a48f"
  },
  {
    "url": "static/js/7197.714be56b.chunk.js",
    "revision": "f4a298a2c3704d23a2fee641a29f1050"
  },
  {
    "url": "static/js/731.be9fac37.chunk.js",
    "revision": "d3c36b4425d4f1da43b70d2dafeacfa3"
  },
  {
    "url": "static/js/7385.5b9b2929.chunk.js",
    "revision": "53340dc29043e50f4b4a48d7b06d09ed"
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
    "url": "static/js/7940.e99686de.chunk.js",
    "revision": "d4eb60209df696c0f78c827318020395"
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
    "url": "static/js/8042.1826c935.chunk.js",
    "revision": "fd2ab9584deb9dbe2f8ef036bb2ed39c"
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
    "url": "static/js/8217.082d244d.chunk.js",
    "revision": "4d353c758119e36f1a55dc5e7530aba9"
  },
  {
    "url": "static/js/8305.5a9995d3.chunk.js",
    "revision": "0f8c66c56eb4a2f315b9958400b801c7"
  },
  {
    "url": "static/js/8333.290ab4b6.chunk.js",
    "revision": "b06e1e546949bbf7e489b923ccf688f3"
  },
  {
    "url": "static/js/8384.ebd132f5.chunk.js",
    "revision": "e84a41f8e79e985a8c1ee358453be32e"
  },
  {
    "url": "static/js/854.7500f3ac.chunk.js",
    "revision": "762808672094fc455a55161ae9a80b41"
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
    "url": "static/js/872.d4ec981b.chunk.js",
    "revision": "53597bf675df243e61bf61aa767d5b73"
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
    "url": "static/js/8914.84bc2228.chunk.js",
    "revision": "b9089306afdf75b59425bad90d9cd170"
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
    "url": "static/js/9215.ee37e604.chunk.js",
    "revision": "8c26119f8cd5ba27b01d162b6d5d0f26"
  },
  {
    "url": "static/js/9219.e83b855c.chunk.js",
    "revision": "ae2c5a84831ca1624822afe83b631511"
  },
  {
    "url": "static/js/9251.c000a233.chunk.js",
    "revision": "685d35c6213086a3e4f2fb8042257679"
  },
  {
    "url": "static/js/9302.bf96d2c1.chunk.js",
    "revision": "616f4fc4d25d4a06214cd42330c04b3e"
  },
  {
    "url": "static/js/9373.44d8c29f.chunk.js",
    "revision": "3bc4677d5902e66c22cf50cb77ab1358"
  },
  {
    "url": "static/js/9392.343ab348.chunk.js",
    "revision": "352bf369bd9a54ec3e04b775cce1377d"
  },
  {
    "url": "static/js/9418.c0dcc392.chunk.js",
    "revision": "1d07c9eb761e8b0bce12492fa7f3dcc9"
  },
  {
    "url": "static/js/9480.6b516a54.chunk.js",
    "revision": "17fda6b2bc36826d396b0e4fbbbd119e"
  },
  {
    "url": "static/js/953.1d2c879d.chunk.js",
    "revision": "a6e8dae38c573ba89622354a25c6c099"
  },
  {
    "url": "static/js/9632.fb77ef5b.chunk.js",
    "revision": "727bd1f6ecb0ffa65c62dd35dc84f2fd"
  },
  {
    "url": "static/js/9796.788d77c7.chunk.js",
    "revision": "109c365d89e28e08fabeb5e4b809a0f7"
  },
  {
    "url": "static/js/9835.8b4de105.chunk.js",
    "revision": "a8688085726ff29dd1aca3665e4218d7"
  },
  {
    "url": "static/js/accession.2461850f.chunk.js",
    "revision": "00b092527e58dc8dab55bb22459e4774"
  },
  {
    "url": "static/js/advanced-search.054925eb.chunk.js",
    "revision": "49c505aac38b86dcd1eb9b80c719545f"
  },
  {
    "url": "static/js/browse.f853e605.chunk.js",
    "revision": "844751a85af17f62c76aa06c9ce8e74f"
  },
  {
    "url": "static/js/collection-statistics.f2e5ca4f.chunk.js",
    "revision": "ac5fd89284075e39581521788ecb7438"
  },
  {
    "url": "static/js/collection.d0338b3b.chunk.js",
    "revision": "1cdb0a8ba97166489246214624f031b7"
  },
  {
    "url": "static/js/collections.7b1d36e6.chunk.js",
    "revision": "053a28a4d925067fadd6a589d24cb5aa"
  },
  {
    "url": "static/js/contact.80cd1f6f.chunk.js",
    "revision": "ae53c05c1d8e7adb42ffc802455860ca"
  },
  {
    "url": "static/js/embed.9847864a.chunk.js",
    "revision": "b78de1943618a129310202474895af5f"
  },
  {
    "url": "static/js/footer.13bc9b70.chunk.js",
    "revision": "0725df9462f7ce300612ca9db310b7fc"
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
    "url": "static/js/help.afa292c6.chunk.js",
    "revision": "11f255859f93aa432b46755c438324c3"
  },
  {
    "url": "static/js/home.11211288.chunk.js",
    "revision": "15706b0bcc2b04498f13feef9968f286"
  },
  {
    "url": "static/js/intersection-observer.6296de56.chunk.js",
    "revision": "b2636aca71a591d4688b98f3961e65ba"
  },
  {
    "url": "static/js/main.28a11734.js",
    "revision": "e05be4451e31e69cabb3cafa7770d9ba"
  },
  {
    "url": "static/js/meta-analysis.40ebac6e.chunk.js",
    "revision": "834cbc252e78db51052d6fdae6bc024a"
  },
  {
    "url": "static/js/pointer.75b51b99.chunk.js",
    "revision": "7341cf94bf7c102df8adab9f77d68367"
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
    "url": "static/js/snack-bar-container.7f1666a3.chunk.js",
    "revision": "32e925a0035f31e0b7e66e5d050b2e55"
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
