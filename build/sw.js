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
    "revision": "a8c1c7ecf5de63b036f9ac3d81302668"
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
    "url": "static/css/collection-statistics.4aca281b.chunk.css",
    "revision": "e6b9b156dbdcb387c5a9b23eb72287a6"
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
    "url": "static/css/meta-analysis.807b9b84.chunk.css",
    "revision": "3ffa0b2fbe2368be707759a488015169"
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
    "url": "static/js/1181.48ae5224.chunk.js",
    "revision": "06d9bce8d916646472e6828dcfb14f16"
  },
  {
    "url": "static/js/1198.38fa1f30.chunk.js",
    "revision": "57205d8ebd3ae7ada10816738c38cff4"
  },
  {
    "url": "static/js/125.98ba7243.chunk.js",
    "revision": "c396669e13ff9d0e202b1a0412e32f3e"
  },
  {
    "url": "static/js/126.59a8ef83.chunk.js",
    "revision": "b295128414fd6bb14142b75d43fbc819"
  },
  {
    "url": "static/js/134.31e1b46a.chunk.js",
    "revision": "5af20da59d0485a26056f98d3b8823d0"
  },
  {
    "url": "static/js/1502.eec173eb.chunk.js",
    "revision": "c90db26a23c8fe7e97092fe6e620bd97"
  },
  {
    "url": "static/js/1612.ae62838a.chunk.js",
    "revision": "391229b447f9793e5c284de8f44f074a"
  },
  {
    "url": "static/js/1643.16b08916.chunk.js",
    "revision": "4ad510297343289c39618f5d65a1cb94"
  },
  {
    "url": "static/js/1666.2030c6ff.chunk.js",
    "revision": "9832a72ab5782c8d0ffd65238abad83e"
  },
  {
    "url": "static/js/1814.608b0f8b.chunk.js",
    "revision": "20271142fdccca898b0e0ceae86870e8"
  },
  {
    "url": "static/js/1924.c09f1e79.chunk.js",
    "revision": "082fce8eafdbd7b8c4d868c3e7a5d9b2"
  },
  {
    "url": "static/js/2055.4263ed88.chunk.js",
    "revision": "18688d4a9f9717f88fdf2250e64d5dac"
  },
  {
    "url": "static/js/2100.b3f69a28.chunk.js",
    "revision": "37d4451420e24efb4f7c355a840e9123"
  },
  {
    "url": "static/js/2116.875dce91.chunk.js",
    "revision": "9e28c533d28c69d62842f9671fc69339"
  },
  {
    "url": "static/js/2260.52ba734b.chunk.js",
    "revision": "f448ac3cfc5699b06ce873e912a33990"
  },
  {
    "url": "static/js/2288.2b2e766e.chunk.js",
    "revision": "d3212c7e75ee12a741a2c33ae9fc5249"
  },
  {
    "url": "static/js/2492.4cf14d4a.chunk.js",
    "revision": "a96cb8ea46c8c5255dd9e56a1b87112c"
  },
  {
    "url": "static/js/2527.e5d7b988.chunk.js",
    "revision": "5fe84a8c358753fd97221e7ac9c4a070"
  },
  {
    "url": "static/js/258.2e8557c9.chunk.js",
    "revision": "9064f055d6952cb8143160968947fedc"
  },
  {
    "url": "static/js/2594.78630020.chunk.js",
    "revision": "2c4d6eeb627614b3fbc9273dc6aceee6"
  },
  {
    "url": "static/js/2615.7cc7134f.chunk.js",
    "revision": "ac757f7ad40974b41b8b98d53299877a"
  },
  {
    "url": "static/js/2633.f9d342f2.chunk.js",
    "revision": "3936a6e0c5acb99a8182cec075799d48"
  },
  {
    "url": "static/js/2822.e5873317.chunk.js",
    "revision": "61ed35cccf0b971e1460efd9a04cb1cd"
  },
  {
    "url": "static/js/2881.43e2ff82.chunk.js",
    "revision": "d2c2a74c35089a4b1461c130462b111a"
  },
  {
    "url": "static/js/2911.df6f5a2c.chunk.js",
    "revision": "f2206324fb256e667ac19435eb9543bc"
  },
  {
    "url": "static/js/2930.727c0497.chunk.js",
    "revision": "bf65d8e334eb09f449b262f646936a46"
  },
  {
    "url": "static/js/3016.9172c8b3.chunk.js",
    "revision": "3fac7f86b6c8f5e3f6b05dd8745963fc"
  },
  {
    "url": "static/js/3104.ddbd261b.chunk.js",
    "revision": "a4c13463f3723acfce15c6c3e7d35dbb"
  },
  {
    "url": "static/js/3112.edf26796.chunk.js",
    "revision": "7a1a5d420e427231a2a4d7b057a5a5f2"
  },
  {
    "url": "static/js/3171.6862dcfe.chunk.js",
    "revision": "8cad6783b4140c6ced21967f4861ab36"
  },
  {
    "url": "static/js/3173.dcafa909.chunk.js",
    "revision": "bcfa8734d62226b390b775f4e41a9401"
  },
  {
    "url": "static/js/3283.db42016d.chunk.js",
    "revision": "185e3e05be9b71439771f7d7f0d951e6"
  },
  {
    "url": "static/js/3287.98668ddd.chunk.js",
    "revision": "5b6616a03a67cc8c042b9cd519ca3e50"
  },
  {
    "url": "static/js/3395.c61432c6.chunk.js",
    "revision": "278f7017d81cde7fc12ba1c96b337aa6"
  },
  {
    "url": "static/js/3427.cdb92cb2.chunk.js",
    "revision": "b2966d9892c3f0fa4717e5232e460b77"
  },
  {
    "url": "static/js/3595.4b5ab5dc.chunk.js",
    "revision": "7a52f31fa5773ad750309c6f980cd8a9"
  },
  {
    "url": "static/js/3715.cbc0a47c.chunk.js",
    "revision": "19faedd525302aec5539030c67b874fe"
  },
  {
    "url": "static/js/3717.c6a0a91d.chunk.js",
    "revision": "6e2ad637d85629845cab9ae331896f78"
  },
  {
    "url": "static/js/375.3ff92fc2.chunk.js",
    "revision": "643e0451b52eabe602eb310a8deb078e"
  },
  {
    "url": "static/js/3845.13a65801.chunk.js",
    "revision": "788df6daef15359c9138f3b19f7c5534"
  },
  {
    "url": "static/js/3960.682dd6ab.chunk.js",
    "revision": "d8cdaa82530f8795e8b83ef389ce5c63"
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
    "url": "static/js/4179.7517d68d.chunk.js",
    "revision": "257060f835460637131392000556d8c2"
  },
  {
    "url": "static/js/4302.6fc49d30.chunk.js",
    "revision": "032eb1d161739681de433238bfa7040e"
  },
  {
    "url": "static/js/4442.15a39968.chunk.js",
    "revision": "14b3987a8f94b9955fc791407b437b05"
  },
  {
    "url": "static/js/450.9e449671.chunk.js",
    "revision": "8fbaa87c65098c87ff4116b7828765bd"
  },
  {
    "url": "static/js/4778.cb1bde51.chunk.js",
    "revision": "d46303041a24c685120493ea7f512527"
  },
  {
    "url": "static/js/4822.18d709fd.chunk.js",
    "revision": "bc4b0b77ac35b6133abe1f799b3618a2"
  },
  {
    "url": "static/js/4963.64d8c16b.chunk.js",
    "revision": "f50ab404d3121d41b01591fda9d79ce3"
  },
  {
    "url": "static/js/4974.8ca5b687.chunk.js",
    "revision": "f47c656a7fbdc8b954697c9043add975"
  },
  {
    "url": "static/js/5096.90adc6ee.chunk.js",
    "revision": "121cc90d62426d0a6ec3468d70d79cea"
  },
  {
    "url": "static/js/5144.d5ed0bc6.chunk.js",
    "revision": "326b13c6f1d73461770fba4e8ee9bb46"
  },
  {
    "url": "static/js/5154.23c149bd.chunk.js",
    "revision": "7a975cfc34532f1000579f97f6bf8cdc"
  },
  {
    "url": "static/js/5190.0722c1e9.chunk.js",
    "revision": "1cec519c6f47d3da7e0459d878637f49"
  },
  {
    "url": "static/js/5236.41abb97f.chunk.js",
    "revision": "1e62216cef2a23eb3fefe63b0a587afa"
  },
  {
    "url": "static/js/5263.6f81d314.chunk.js",
    "revision": "3ca277ab6772c4a874bb9f97781e359a"
  },
  {
    "url": "static/js/5291.93b19d6b.chunk.js",
    "revision": "8126c661e7121d1316b75468239aa8f2"
  },
  {
    "url": "static/js/5471.41576bbb.chunk.js",
    "revision": "3eb1c4487f39c9459e7cb47e5d045f9c"
  },
  {
    "url": "static/js/5581.ab8eac49.chunk.js",
    "revision": "d738ef0098aa36f56917895862adf749"
  },
  {
    "url": "static/js/5591.eb98cb51.chunk.js",
    "revision": "36c9cc1c82afed8156a863aec5453d78"
  },
  {
    "url": "static/js/5633.daa8ea7f.chunk.js",
    "revision": "ce5725406f06ed49fb8cc422ae8a5408"
  },
  {
    "url": "static/js/5709.9c90fbd3.chunk.js",
    "revision": "5fc0ee4f27e4af092a98a8dd709aed04"
  },
  {
    "url": "static/js/5750.8bb8c8b2.chunk.js",
    "revision": "52fa6596b74eef0715401b68ab8b42a0"
  },
  {
    "url": "static/js/5839.f51c7ca7.chunk.js",
    "revision": "598400c9b477e623a7b02be4a7d16c89"
  },
  {
    "url": "static/js/5843.a8944031.chunk.js",
    "revision": "5ddb1a0cd9e5979ab5675521095c447e"
  },
  {
    "url": "static/js/604.5dce7df1.chunk.js",
    "revision": "feb504d0df8537afe43e6a460c16aa43"
  },
  {
    "url": "static/js/6264.dc011538.chunk.js",
    "revision": "55813ebf3bc56a6ea44863def8218c5d"
  },
  {
    "url": "static/js/6285.9e33b812.chunk.js",
    "revision": "6ff132ad079a197d791e840f087b647e"
  },
  {
    "url": "static/js/6344.d646f721.chunk.js",
    "revision": "1ab0298dd34f1ffd037f86897539b30e"
  },
  {
    "url": "static/js/6401.d1a841aa.chunk.js",
    "revision": "524f66d91aa8592e47c34a88063f0751"
  },
  {
    "url": "static/js/6618.dc9657d5.chunk.js",
    "revision": "36f51b8e652e17f4c1c67b0b7727451a"
  },
  {
    "url": "static/js/6624.1bc2244b.chunk.js",
    "revision": "71271462b4e52ccf966e27c9e275f74c"
  },
  {
    "url": "static/js/6651.71aa9613.chunk.js",
    "revision": "c6697d6c927d15396f1d97e4799d1eef"
  },
  {
    "url": "static/js/6996.d719c298.chunk.js",
    "revision": "44a1442026100f2640b906021dbf3ba1"
  },
  {
    "url": "static/js/7041.29869755.chunk.js",
    "revision": "31980015bfb8742b63a3a69b356eac7b"
  },
  {
    "url": "static/js/7053.577c9bb8.chunk.js",
    "revision": "307f14ee2f951f9926a68712367f0d99"
  },
  {
    "url": "static/js/7197.0533015e.chunk.js",
    "revision": "05137ed95ffcd830ec8de9113b1e21b8"
  },
  {
    "url": "static/js/731.4c490246.chunk.js",
    "revision": "ea2bec4ccd543d464d0896ba193cd6f4"
  },
  {
    "url": "static/js/7385.45b5103d.chunk.js",
    "revision": "ed6417584b6eb5511f9fdb7e7d314524"
  },
  {
    "url": "static/js/7389.b263372b.chunk.js",
    "revision": "cc328f59c0abe31a6a429080903f4eaa"
  },
  {
    "url": "static/js/7732.f6e42b33.chunk.js",
    "revision": "5deedf7c99b3e2032e1d20b1ed0d3465"
  },
  {
    "url": "static/js/7784.cb9852a9.chunk.js",
    "revision": "41df1cbcd10baadb754b4f552bcb686b"
  },
  {
    "url": "static/js/7803.ee2a36b0.chunk.js",
    "revision": "7c5b4cf63d7c2ec0525eadcfcf056c26"
  },
  {
    "url": "static/js/7940.1d16239a.chunk.js",
    "revision": "fc261e5c82bf4cf29542b116f27d84c9"
  },
  {
    "url": "static/js/7955.c973f38e.chunk.js",
    "revision": "bd47e910ff112238decc7ddb62182cc3"
  },
  {
    "url": "static/js/8029.9a55f634.chunk.js",
    "revision": "b8b03dfa0d72392b7e3015b9653d9107"
  },
  {
    "url": "static/js/8042.a5b5c968.chunk.js",
    "revision": "75fbcfe0c4fef705de473c01098a97a7"
  },
  {
    "url": "static/js/8095.2817bd60.chunk.js",
    "revision": "5c8bc621460cefb35132d7d540906230"
  },
  {
    "url": "static/js/8133.be5fe228.chunk.js",
    "revision": "e3f16d4f7bdb15c3b07a7591473534cb"
  },
  {
    "url": "static/js/8217.5bf2f26c.chunk.js",
    "revision": "33dc77b2d86ea6e81aa3ef941efd40de"
  },
  {
    "url": "static/js/8305.f9b809e0.chunk.js",
    "revision": "8ba77e6ee4b4c79a85357fbe39b41b3b"
  },
  {
    "url": "static/js/8333.3061a443.chunk.js",
    "revision": "107d1ceb18dfa313024c6bc0deadfa4e"
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
    "url": "static/js/872.15c5a8a7.chunk.js",
    "revision": "9bd3281094e6aa6e4f67119bdb970a25"
  },
  {
    "url": "static/js/8870.0ae80015.chunk.js",
    "revision": "7b21d58ec08801f1ec5f406474135c8d"
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
    "url": "static/js/8939.334479cd.chunk.js",
    "revision": "6e805f9d0f0ae5171f4fd690db6f5f9d"
  },
  {
    "url": "static/js/9070.ec537437.chunk.js",
    "revision": "1c290f84a9d2a61b8a9edd360433e3bb"
  },
  {
    "url": "static/js/9215.99ae7fa9.chunk.js",
    "revision": "a18ffad648e703c955784e1780834aaa"
  },
  {
    "url": "static/js/9219.779fa064.chunk.js",
    "revision": "f14e0253dca682782418052a63c2c355"
  },
  {
    "url": "static/js/9251.c000a233.chunk.js",
    "revision": "685d35c6213086a3e4f2fb8042257679"
  },
  {
    "url": "static/js/9302.dafee868.chunk.js",
    "revision": "c293306009977ad4eb3e131397073dd2"
  },
  {
    "url": "static/js/9373.1f314f85.chunk.js",
    "revision": "02644cb41045bcbb4fecde358604f602"
  },
  {
    "url": "static/js/9392.b5cb9456.chunk.js",
    "revision": "0284ded8b197626364ba504e1d765bef"
  },
  {
    "url": "static/js/9418.3720bccb.chunk.js",
    "revision": "b75140ffb6ca3a387bfc906b5ec3daf0"
  },
  {
    "url": "static/js/9480.7460892d.chunk.js",
    "revision": "acb234bc25a72520ce2dc75917462700"
  },
  {
    "url": "static/js/953.716ee7f8.chunk.js",
    "revision": "8e423645f9432f53f5710b7754fb50f5"
  },
  {
    "url": "static/js/9632.fb77ef5b.chunk.js",
    "revision": "727bd1f6ecb0ffa65c62dd35dc84f2fd"
  },
  {
    "url": "static/js/9796.e148a29d.chunk.js",
    "revision": "673fc1fa2b6948aaa3f12ab4002b9cfb"
  },
  {
    "url": "static/js/9835.dd54a3ca.chunk.js",
    "revision": "898b1b24110be2ef9c893e72c2fec347"
  },
  {
    "url": "static/js/accession.6b842bd6.chunk.js",
    "revision": "45f5d2680320b62716b1d57cb7297c08"
  },
  {
    "url": "static/js/advanced-search.12036b80.chunk.js",
    "revision": "a715fbf5d997094bf966605a396f6755"
  },
  {
    "url": "static/js/browse.a86aa6d7.chunk.js",
    "revision": "85c3e1b1741b52d9c47ff5fb55bbf89e"
  },
  {
    "url": "static/js/collection-statistics.796d56b9.chunk.js",
    "revision": "6d9e34f818f8fe86596f72e0bf981bfe"
  },
  {
    "url": "static/js/collection.d0338b3b.chunk.js",
    "revision": "1cdb0a8ba97166489246214624f031b7"
  },
  {
    "url": "static/js/collections.9082254b.chunk.js",
    "revision": "bf072912c9a3ccee3fa9605e713f8fbd"
  },
  {
    "url": "static/js/contact.80cd1f6f.chunk.js",
    "revision": "ae53c05c1d8e7adb42ffc802455860ca"
  },
  {
    "url": "static/js/embed.f5a26cb5.chunk.js",
    "revision": "6fa84e4054ca6af17bdc14063e1dc542"
  },
  {
    "url": "static/js/footer.13bc9b70.chunk.js",
    "revision": "0725df9462f7ce300612ca9db310b7fc"
  },
  {
    "url": "static/js/graph-msm.5d7d9369.chunk.js",
    "revision": "dcd339583995c59b63c81ce0c9c8a4ce"
  },
  {
    "url": "static/js/graph.dc22047a.chunk.js",
    "revision": "21e10bb1071a55b19a17f54f7313bf1a"
  },
  {
    "url": "static/js/help.0d9d2376.chunk.js",
    "revision": "9c008552a81437a90e62b6b89153561b"
  },
  {
    "url": "static/js/home.460419d4.chunk.js",
    "revision": "92366ba7d4edd2fae77e85fc1a34a350"
  },
  {
    "url": "static/js/intersection-observer.6296de56.chunk.js",
    "revision": "b2636aca71a591d4688b98f3961e65ba"
  },
  {
    "url": "static/js/main.c145fd32.js",
    "revision": "302119a2fdbd56da9ba055984a6fcaa1"
  },
  {
    "url": "static/js/meta-analysis.a58aa5f3.chunk.js",
    "revision": "f1dd921ebc72b7dffd4b2c905d05a085"
  },
  {
    "url": "static/js/pointer.4485e5d9.chunk.js",
    "revision": "96da869bf03e0f01f09e826daabe70c9"
  },
  {
    "url": "static/js/projections.8b11c7cf.chunk.js",
    "revision": "9a1cdc2e4eb6c2b91caa3672e0de9854"
  },
  {
    "url": "static/js/protvista-coloured-sequence.9d4aaba0.chunk.js",
    "revision": "7db94351fdb3316d993dc24a034cc7f0"
  },
  {
    "url": "static/js/protvista-interpro-track.d09d8029.chunk.js",
    "revision": "5db6877b1fa30a755cde588814d068b8"
  },
  {
    "url": "static/js/protvista-manager.7bf03aea.chunk.js",
    "revision": "d940c1270ed4097530e4f1dbc9195eab"
  },
  {
    "url": "static/js/protvista-navigation.541b5e14.chunk.js",
    "revision": "43398d461458a4db9266aa6f274f2800"
  },
  {
    "url": "static/js/protvista-sequence.cea85605.chunk.js",
    "revision": "987c2af743407a6fcc37c24842725cfd"
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
