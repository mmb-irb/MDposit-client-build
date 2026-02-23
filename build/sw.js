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
    "revision": "9e0ccb6e89524d58cf16e388fa6057da"
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
    "url": "static/css/1732.0e8e3b4f.chunk.css",
    "revision": "f090387af9790c734e70e8c84ae21d09"
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
    "url": "static/css/2117.24651898.chunk.css",
    "revision": "020853adf511bf1fb6e60aabe7c49377"
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
    "url": "static/css/3171.38638a9a.chunk.css",
    "revision": "bf5a5adc8b9502b33160fd90a5ee4d2b"
  },
  {
    "url": "static/css/3215.e3e2dd5d.chunk.css",
    "revision": "a4c82b09bb8b3be34e97c5a348a106c1"
  },
  {
    "url": "static/css/3259.2a81f2cc.chunk.css",
    "revision": "f2f6d25e14d8d8bded511d172fc73394"
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
    "url": "static/css/3715.43f1cf55.chunk.css",
    "revision": "0674b2edaea0ba7f179166019a90c84e"
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
    "url": "static/css/3804.92108503.chunk.css",
    "revision": "74dc5c8a22af4249bb68bf3073eefad4"
  },
  {
    "url": "static/css/3960.59270940.chunk.css",
    "revision": "d93b5d239c5acd574eaf9a23b65a81d1"
  },
  {
    "url": "static/css/4313.52472827.chunk.css",
    "revision": "adfd6a920ccd2b9ffdef56a3a8175947"
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
    "url": "static/css/5919.3f19f601.chunk.css",
    "revision": "56e9e9822c7e0c6b6f0c90f97fa110ef"
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
    "url": "static/css/6401.d02dbd78.chunk.css",
    "revision": "745edd867c60037e4d9ca8bc2ee1a403"
  },
  {
    "url": "static/css/6624.bc256f27.chunk.css",
    "revision": "b5ebe6ef33f3468aa64eba6fe8030330"
  },
  {
    "url": "static/css/6889.0e8e3b4f.chunk.css",
    "revision": "c71688854c9fccfb739cdde15927ec9a"
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
    "url": "static/css/9769.24651898.chunk.css",
    "revision": "1eca0fad95d7c3078a88c4b6ba28ef4a"
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
    "url": "static/css/browse.9f91ca5d.chunk.css",
    "revision": "52873136cac0dc04b64669e26044f91e"
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
    "url": "static/css/meta-analysis.ad13fe1e.chunk.css",
    "revision": "2bc47dcf08581ab8bfe55912e7334df5"
  },
  {
    "url": "static/css/pointer.310b7170.chunk.css",
    "revision": "37eb37d5a870476a5db9a86fd93f0b64"
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
    "url": "static/js/1177.5cad3a6c.chunk.js",
    "revision": "5890d0f898a843022d475549856662bb"
  },
  {
    "url": "static/js/1181.48ae5224.chunk.js",
    "revision": "06d9bce8d916646472e6828dcfb14f16"
  },
  {
    "url": "static/js/1198.3dea61ab.chunk.js",
    "revision": "9999ca84df9ace93486b091fd60b1051"
  },
  {
    "url": "static/js/1253.dd23073f.chunk.js",
    "revision": "7786c1aa60e6fe82f5dd47fc5e75bc96"
  },
  {
    "url": "static/js/126.a7aa9091.chunk.js",
    "revision": "38ffab9d382a1db0b7ae5b2b616c139c"
  },
  {
    "url": "static/js/134.31e1b46a.chunk.js",
    "revision": "5af20da59d0485a26056f98d3b8823d0"
  },
  {
    "url": "static/js/1502.385fa2db.chunk.js",
    "revision": "1c0057e78e516ef99eef16c8e8d4d2db"
  },
  {
    "url": "static/js/1612.ae62838a.chunk.js",
    "revision": "391229b447f9793e5c284de8f44f074a"
  },
  {
    "url": "static/js/1772.b84790a3.chunk.js",
    "revision": "b67aab1086d9855b9b274c99c8d66e43"
  },
  {
    "url": "static/js/1814.608b0f8b.chunk.js",
    "revision": "20271142fdccca898b0e0ceae86870e8"
  },
  {
    "url": "static/js/1924.c53221c8.chunk.js",
    "revision": "58b31a841053b61de260137527fdf88f"
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
    "url": "static/js/2117.7b3b84cf.chunk.js",
    "revision": "79335474e770a505b3b0857e8bf950c0"
  },
  {
    "url": "static/js/2223.e43459ff.chunk.js",
    "revision": "4778914d3def113a231f121558ad2ce9"
  },
  {
    "url": "static/js/2260.03fd475e.chunk.js",
    "revision": "06c4865abd423abdfaac1b73d8f9a7d8"
  },
  {
    "url": "static/js/2288.5997c3b9.chunk.js",
    "revision": "50decefd68fd7c2d66f06e0586d200a0"
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
    "url": "static/js/258.e74db9ae.chunk.js",
    "revision": "0904e56198fe895f1e1137b7c17a093a"
  },
  {
    "url": "static/js/2594.1de6f31f.chunk.js",
    "revision": "676ac6e5677392dd92b902fda2d41bb0"
  },
  {
    "url": "static/js/2615.9e083d76.chunk.js",
    "revision": "9c240c0f9e6aeffd2e21b55348bc2cb6"
  },
  {
    "url": "static/js/2633.f9d342f2.chunk.js",
    "revision": "3936a6e0c5acb99a8182cec075799d48"
  },
  {
    "url": "static/js/2822.29ad0554.chunk.js",
    "revision": "193f84120d78fba507d8186bda3cfbf1"
  },
  {
    "url": "static/js/2881.43e2ff82.chunk.js",
    "revision": "d2c2a74c35089a4b1461c130462b111a"
  },
  {
    "url": "static/js/2930.8395bc39.chunk.js",
    "revision": "9906aa8846515119691a2699872acb35"
  },
  {
    "url": "static/js/2954.dcf016f2.chunk.js",
    "revision": "0fa4cdbe0a79035e0d00e10de2685375"
  },
  {
    "url": "static/js/3016.9172c8b3.chunk.js",
    "revision": "3fac7f86b6c8f5e3f6b05dd8745963fc"
  },
  {
    "url": "static/js/3171.bd2b6245.chunk.js",
    "revision": "58a6a7effe7aaf0e61c40ddf42bf10f2"
  },
  {
    "url": "static/js/3173.ef1701ed.chunk.js",
    "revision": "bd4bc79618d9e3b50b00d14b92484305"
  },
  {
    "url": "static/js/3215.7ec57fda.chunk.js",
    "revision": "97eef1d5b058de5946056b836a7acfc8"
  },
  {
    "url": "static/js/3259.2ec19f1a.chunk.js",
    "revision": "73be6ff3721f2f42bd313ef7113585b1"
  },
  {
    "url": "static/js/3283.db42016d.chunk.js",
    "revision": "185e3e05be9b71439771f7d7f0d951e6"
  },
  {
    "url": "static/js/3287.8c242560.chunk.js",
    "revision": "44fa225f842b9fb5dedbeee72f4094a6"
  },
  {
    "url": "static/js/3395.1a513338.chunk.js",
    "revision": "8f2cab6f22a2750bbf7d8c63bf8069db"
  },
  {
    "url": "static/js/3608.7574533f.chunk.js",
    "revision": "885fc7f607364b5ce47d07aec9210ea3"
  },
  {
    "url": "static/js/3715.10aa0a8b.chunk.js",
    "revision": "cf85ce0e969f6b6edfab6c73eab57c2e"
  },
  {
    "url": "static/js/375.3ff92fc2.chunk.js",
    "revision": "643e0451b52eabe602eb310a8deb078e"
  },
  {
    "url": "static/js/3753.86c2dfcc.chunk.js",
    "revision": "07b6c2b7c3b46872f016f938fe499561"
  },
  {
    "url": "static/js/3804.95d8eb0b.chunk.js",
    "revision": "b5145f2515f9d835e9e1eed612ac079e"
  },
  {
    "url": "static/js/3845.75b1977b.chunk.js",
    "revision": "8ec13ddd3d79babaecbf40adfdef11f4"
  },
  {
    "url": "static/js/3960.682dd6ab.chunk.js",
    "revision": "d8cdaa82530f8795e8b83ef389ce5c63"
  },
  {
    "url": "static/js/3969.0d592a67.chunk.js",
    "revision": "778c97b7f17ea307285b00f1437a5cbe"
  },
  {
    "url": "static/js/4125.a34e57d9.chunk.js",
    "revision": "c55315b7adeaa889ecdbbb7d271b639e"
  },
  {
    "url": "static/js/4128.49293a8c.chunk.js",
    "revision": "e35f24b19bcf945fd0880b9fad9a528c"
  },
  {
    "url": "static/js/4172.bdbdccbe.chunk.js",
    "revision": "359af99bcc171d631076165dda0aab14"
  },
  {
    "url": "static/js/4179.1d982ef0.chunk.js",
    "revision": "a72e55d6b3a27e057cc398e7d9cfc5bc"
  },
  {
    "url": "static/js/4258.c55ba693.chunk.js",
    "revision": "14e1744668acbd056fb9ad5017477e11"
  },
  {
    "url": "static/js/4313.5cb74452.chunk.js",
    "revision": "a3fabac843e6c7e24658b6426c5c5103"
  },
  {
    "url": "static/js/450.9e449671.chunk.js",
    "revision": "8fbaa87c65098c87ff4116b7828765bd"
  },
  {
    "url": "static/js/4565.8b5fdb9b.chunk.js",
    "revision": "2e8bd81fc27dcb1b1bb70dd79a8867e3"
  },
  {
    "url": "static/js/4778.6ecc0ed2.chunk.js",
    "revision": "4b2cab8cfbdc3c3e1d282448812195fc"
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
    "url": "static/js/5096.a2dce045.chunk.js",
    "revision": "5f7d828bd2c06f66e8942e5d81848b12"
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
    "url": "static/js/5236.4770b841.chunk.js",
    "revision": "6214d25f113c5d66e7c5454b25bba5e7"
  },
  {
    "url": "static/js/5263.0e807af8.chunk.js",
    "revision": "185a428f6bf633fd6e2ee7ba95f72674"
  },
  {
    "url": "static/js/5291.80f6b5e8.chunk.js",
    "revision": "9bd2b4f936cbaa22df5e4391c94daa58"
  },
  {
    "url": "static/js/5471.41576bbb.chunk.js",
    "revision": "3eb1c4487f39c9459e7cb47e5d045f9c"
  },
  {
    "url": "static/js/5591.e144d66d.chunk.js",
    "revision": "aae9437dd347692f9827dcab7ecce79a"
  },
  {
    "url": "static/js/5633.0a35270f.chunk.js",
    "revision": "b2398e3a62225757f8fe51076c4d8c95"
  },
  {
    "url": "static/js/5709.9c90fbd3.chunk.js",
    "revision": "5fc0ee4f27e4af092a98a8dd709aed04"
  },
  {
    "url": "static/js/5750.880f5ea2.chunk.js",
    "revision": "bd40e14ceb7ac1902c7c751add76d86a"
  },
  {
    "url": "static/js/5839.001cad17.chunk.js",
    "revision": "533a47ca2b9b824ee79065fb1c597843"
  },
  {
    "url": "static/js/5919.e1fd4783.chunk.js",
    "revision": "afec10e14225787891286c7b4e1765ab"
  },
  {
    "url": "static/js/5952.ce0dc9f6.chunk.js",
    "revision": "b7be215d8f0f0a2db92bcfd03dbcc5cc"
  },
  {
    "url": "static/js/604.2297b49d.chunk.js",
    "revision": "34fb1aba3f691a2446db13a4c226d0b5"
  },
  {
    "url": "static/js/6264.89d1341c.chunk.js",
    "revision": "0d15decfbc499b05fae88d0708c43a91"
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
    "url": "static/js/6401.d57aceee.chunk.js",
    "revision": "ba4b939ea5849754deafb35bc029d420"
  },
  {
    "url": "static/js/6463.80b0bf9f.chunk.js",
    "revision": "f27652b610336881efa6c8e3f4d18f21"
  },
  {
    "url": "static/js/6618.6e00ad9a.chunk.js",
    "revision": "76076763b7f9777303596333034bcb96"
  },
  {
    "url": "static/js/6624.97d036d3.chunk.js",
    "revision": "13fb5d159e18ffbe95bd70b7a028fb75"
  },
  {
    "url": "static/js/6651.bc9789e5.chunk.js",
    "revision": "cb15d374ee4074cabb63696dd5f3bb39"
  },
  {
    "url": "static/js/6889.fc1ab77d.chunk.js",
    "revision": "2b78764d82c11c03e2369134f933d01c"
  },
  {
    "url": "static/js/6893.f9fde427.chunk.js",
    "revision": "723263a88774d8c019e3465f96fa4eda"
  },
  {
    "url": "static/js/6978.337b2de0.chunk.js",
    "revision": "f8b1b5626fa40c008a3d7e8655500d05"
  },
  {
    "url": "static/js/7053.577c9bb8.chunk.js",
    "revision": "307f14ee2f951f9926a68712367f0d99"
  },
  {
    "url": "static/js/7197.1ab5f245.chunk.js",
    "revision": "4da11e939afd25dac06a5751f4648cf2"
  },
  {
    "url": "static/js/7385.8cf127b1.chunk.js",
    "revision": "106e47d0f8e102908b9137ffa00b5fd4"
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
    "url": "static/js/7784.283d2a2c.chunk.js",
    "revision": "16f40f074323299ec77aa34e82262338"
  },
  {
    "url": "static/js/7803.3f999f80.chunk.js",
    "revision": "c9ea8985b04450bcae210d42d2a0e900"
  },
  {
    "url": "static/js/7940.f875845a.chunk.js",
    "revision": "6c1eb2a6ff28c18dba730d74de990c16"
  },
  {
    "url": "static/js/7955.c973f38e.chunk.js",
    "revision": "bd47e910ff112238decc7ddb62182cc3"
  },
  {
    "url": "static/js/8029.f27b1f5a.chunk.js",
    "revision": "32f90b783ab3f6465a11703c656e4680"
  },
  {
    "url": "static/js/8095.0daa8e06.chunk.js",
    "revision": "e5d75080c0c2816c97eee723d04fc8bf"
  },
  {
    "url": "static/js/8133.be5fe228.chunk.js",
    "revision": "e3f16d4f7bdb15c3b07a7591473534cb"
  },
  {
    "url": "static/js/8217.621599ec.chunk.js",
    "revision": "27e0782fe767c27be34807040c6ef85f"
  },
  {
    "url": "static/js/8305.0e86249e.chunk.js",
    "revision": "ee32edb842c3c3002080afa80874b0ca"
  },
  {
    "url": "static/js/8333.1dd09a6f.chunk.js",
    "revision": "76fa570ee62b170801d191271ccda387"
  },
  {
    "url": "static/js/8671.e80172a8.chunk.js",
    "revision": "faa554aa1ff6ed1da819da1855e28289"
  },
  {
    "url": "static/js/8677.55e6cc61.chunk.js",
    "revision": "92ec821649d72c01887f9a107c978628"
  },
  {
    "url": "static/js/8870.0ae80015.chunk.js",
    "revision": "7b21d58ec08801f1ec5f406474135c8d"
  },
  {
    "url": "static/js/8903.93e15d24.chunk.js",
    "revision": "71643d233841dc879b4111b400ef990e"
  },
  {
    "url": "static/js/8939.334479cd.chunk.js",
    "revision": "6e805f9d0f0ae5171f4fd690db6f5f9d"
  },
  {
    "url": "static/js/9070.6cc252d9.chunk.js",
    "revision": "1f68240a3546bf4a3ac1c1dd38253523"
  },
  {
    "url": "static/js/9177.0c6ceed8.chunk.js",
    "revision": "de3ca653bd7c354a9e7daebd70174cbb"
  },
  {
    "url": "static/js/9215.ebf52158.chunk.js",
    "revision": "9b93dd3106e7b9eabc0be8cc97fa8659"
  },
  {
    "url": "static/js/9219.a9a6843a.chunk.js",
    "revision": "6f440bf5f7be752264550a89e7473eac"
  },
  {
    "url": "static/js/9302.27cf2539.chunk.js",
    "revision": "1037fc232e771a91b96481b3441503c7"
  },
  {
    "url": "static/js/9373.1f314f85.chunk.js",
    "revision": "02644cb41045bcbb4fecde358604f602"
  },
  {
    "url": "static/js/9392.80440828.chunk.js",
    "revision": "d3f301373daa6def6a616de76a1c6cb0"
  },
  {
    "url": "static/js/9418.2be5f9ef.chunk.js",
    "revision": "e163ddac47950fa2d12d90161e1e9377"
  },
  {
    "url": "static/js/942.82068292.chunk.js",
    "revision": "a620f83d81127ecaecfeeb4207a77f13"
  },
  {
    "url": "static/js/9480.5d803612.chunk.js",
    "revision": "6d54b2f9614c0cb655be87612a228502"
  },
  {
    "url": "static/js/953.12b2b3d5.chunk.js",
    "revision": "0f5893602b56b95f464c2576f32fbd13"
  },
  {
    "url": "static/js/9632.fb77ef5b.chunk.js",
    "revision": "727bd1f6ecb0ffa65c62dd35dc84f2fd"
  },
  {
    "url": "static/js/9769.9914b1c3.chunk.js",
    "revision": "4fb67789f4e4f3d73787308d4b58fe30"
  },
  {
    "url": "static/js/accession.9da5046f.chunk.js",
    "revision": "e76efa5af7f9ab018c4546c576539c55"
  },
  {
    "url": "static/js/advanced-search.a4b205d5.chunk.js",
    "revision": "b37722334e2a45e6749c58697b4b1df1"
  },
  {
    "url": "static/js/browse.2b567dd4.chunk.js",
    "revision": "70084abc2139479ee22fd399175d1bba"
  },
  {
    "url": "static/js/collection.3d3037d4.chunk.js",
    "revision": "9d8544c23625f49dd7ff9ca29a6ac86e"
  },
  {
    "url": "static/js/collections.fea435b0.chunk.js",
    "revision": "712336fa0f33d9b9fc4ab1612a562e60"
  },
  {
    "url": "static/js/contact.e7b01887.chunk.js",
    "revision": "ff9019504909f0438b0924b2ac77f8d6"
  },
  {
    "url": "static/js/embed.e940c6b0.chunk.js",
    "revision": "43945cc32844c42616f62090c3e3f626"
  },
  {
    "url": "static/js/footer.858e469a.chunk.js",
    "revision": "c625f65d780488f0d4e4253484d67637"
  },
  {
    "url": "static/js/graph-msm.8fa25227.chunk.js",
    "revision": "3227784276c11067c4bdbbdbe8852043"
  },
  {
    "url": "static/js/graph.fd794578.chunk.js",
    "revision": "1ef2283eef59a6bc2cfcb5c53e1a4ccd"
  },
  {
    "url": "static/js/help.58d38b6d.chunk.js",
    "revision": "00ebe27b3238d3bf1bcbcd83c4cb2c08"
  },
  {
    "url": "static/js/home.5d0bafe0.chunk.js",
    "revision": "8a279bf9bd4d3675a3d729cf3967c848"
  },
  {
    "url": "static/js/intersection-observer.6296de56.chunk.js",
    "revision": "b2636aca71a591d4688b98f3961e65ba"
  },
  {
    "url": "static/js/main.1a3871b8.js",
    "revision": "16a145f8bc033436ae2d57d7a4ec4916"
  },
  {
    "url": "static/js/meta-analysis.e901b589.chunk.js",
    "revision": "ac9ca5205e8ccb08baafe6f31489dcee"
  },
  {
    "url": "static/js/pointer.6d299ea3.chunk.js",
    "revision": "2058ce07299f3e78ad59de4a86a46823"
  },
  {
    "url": "static/js/projections.afc5addd.chunk.js",
    "revision": "108ad30bbc85b081521abeb2857d48fc"
  },
  {
    "url": "static/js/protvista-coloured-sequence.80740419.chunk.js",
    "revision": "30308f60b799407dbce352b852c4d01e"
  },
  {
    "url": "static/js/protvista-interpro-track.afc44f4a.chunk.js",
    "revision": "d44118324c2f4e27995b9a0599c8367b"
  },
  {
    "url": "static/js/protvista-manager.7bf03aea.chunk.js",
    "revision": "d940c1270ed4097530e4f1dbc9195eab"
  },
  {
    "url": "static/js/protvista-navigation.3e18db1e.chunk.js",
    "revision": "8984f321936a82d54ea7ef032305e86a"
  },
  {
    "url": "static/js/protvista-sequence.473052b2.chunk.js",
    "revision": "32803c5108cbde47d28c815fd7300a8d"
  },
  {
    "url": "static/js/snack-bar-container.f91969ef.chunk.js",
    "revision": "bab2362e2b4e469340116538fe7852d1"
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
