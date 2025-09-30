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
    "revision": "a6cae991020ea0ce52adfe0459c0ee43"
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
    "url": "static/css/2055.16145162.chunk.css",
    "revision": "ff667be7562bc4ee3cff1f9425e6b034"
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
    "url": "static/css/3804.de85d035.chunk.css",
    "revision": "3cbd881fc9cce9faf9f686702b25e7cf"
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
    "url": "static/css/5471.0ecbeb7f.chunk.css",
    "revision": "6ff58d0b3b94e82fd24a573a42535805"
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
    "url": "static/css/6285.07f6f099.chunk.css",
    "revision": "51aad1cb9267ef2cc02ea8d1888064d2"
  },
  {
    "url": "static/css/6344.c9055c2b.chunk.css",
    "revision": "0850be905c46402a5aa99b755343bf27"
  },
  {
    "url": "static/css/6889.0e8e3b4f.chunk.css",
    "revision": "c71688854c9fccfb739cdde15927ec9a"
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
    "url": "static/css/9280.996de5a1.chunk.css",
    "revision": "44356879897bd4c929b4cceb236b935f"
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
    "url": "static/css/accession.31bfff76.chunk.css",
    "revision": "f487b46a6aa704fcc94ba6d65c6a326a"
  },
  {
    "url": "static/css/advanced-search.2edb7cbb.chunk.css",
    "revision": "abbee3a18abdf32bd3875116da55ae09"
  },
  {
    "url": "static/css/browse.6fb530b5.chunk.css",
    "revision": "e1ea169bfd2e9adc2147308e71b5f1ea"
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
    "url": "static/css/help.d04efbf4.chunk.css",
    "revision": "514cc65734712af1840c02142c9b6028"
  },
  {
    "url": "static/css/home.5e40fa3b.chunk.css",
    "revision": "66405903170a90de7802ea3a1ad9950b"
  },
  {
    "url": "static/css/meta-analysis.e7f120be.chunk.css",
    "revision": "c1d95ef7e1e9471e53b1d2ee296c455a"
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
    "url": "static/js/1177.d84e4f0a.chunk.js",
    "revision": "9cb27028666ec68a90cf0fe7b6b17897"
  },
  {
    "url": "static/js/1181.af808c61.chunk.js",
    "revision": "169b1cb4dc14cfbcc21ab06c37c4b946"
  },
  {
    "url": "static/js/1198.972a99c6.chunk.js",
    "revision": "347bf20764679b005ed3bb8cbba8b7ed"
  },
  {
    "url": "static/js/126.1e60fc63.chunk.js",
    "revision": "939129e7b32e9fe2e42ec129ca3a6e52"
  },
  {
    "url": "static/js/134.9eedc021.chunk.js",
    "revision": "b1038c2e35ed029e60614601faf99372"
  },
  {
    "url": "static/js/1502.835fdeb3.chunk.js",
    "revision": "103b9ba7631422be38e1a62cd66267bd"
  },
  {
    "url": "static/js/1612.808cc143.chunk.js",
    "revision": "4550ce8abfa583b446a06b0246c61e2e"
  },
  {
    "url": "static/js/1772.6decac68.chunk.js",
    "revision": "4ce7ff9d6ae18489ed82d211bca06885"
  },
  {
    "url": "static/js/1814.b68c2a05.chunk.js",
    "revision": "91f77b2b7680043cbe961e93d2400a48"
  },
  {
    "url": "static/js/1924.e0c9b88c.chunk.js",
    "revision": "a124b15999fb235ab5dd2bb0331d4045"
  },
  {
    "url": "static/js/2055.ad0efff3.chunk.js",
    "revision": "c2298acc121fb6ef7817eae4c73a6305"
  },
  {
    "url": "static/js/2100.0333b496.chunk.js",
    "revision": "48a2fee729bad4a061c45f7e89fafb86"
  },
  {
    "url": "static/js/2260.e516e0ec.chunk.js",
    "revision": "6b1f420fcf05007ac17722f9856b1a23"
  },
  {
    "url": "static/js/247.657a128b.chunk.js",
    "revision": "2f655b80c3e07d98fb2338d66d712afa"
  },
  {
    "url": "static/js/2492.537e6f33.chunk.js",
    "revision": "a5bef511af0ea7bc802ca9d4df313be9"
  },
  {
    "url": "static/js/2527.7fa30b5f.chunk.js",
    "revision": "05ecb599de6e21bebe4b8681ddcd181e"
  },
  {
    "url": "static/js/2615.ea64e19b.chunk.js",
    "revision": "ceb09160e927a7ad93b275eff4df52cf"
  },
  {
    "url": "static/js/2623.aca8eff6.chunk.js",
    "revision": "3402a20c37ee7d80a3487ed70654b28b"
  },
  {
    "url": "static/js/2633.40e6d3e5.chunk.js",
    "revision": "83cce7842c7469d46454192a6d4b8bbb"
  },
  {
    "url": "static/js/2780.cbfd8961.chunk.js",
    "revision": "99a86ef5ee19faaa60857b5196b02740"
  },
  {
    "url": "static/js/2822.7fb54202.chunk.js",
    "revision": "851cf22a781f9725213d6920586404a8"
  },
  {
    "url": "static/js/2881.fbf2d418.chunk.js",
    "revision": "89f5d547738245eb7f76dbc07a7216ba"
  },
  {
    "url": "static/js/2930.445a3498.chunk.js",
    "revision": "05a142677045b81e04384419a82a596b"
  },
  {
    "url": "static/js/3016.0fa274db.chunk.js",
    "revision": "816cddf523f38df8cb98e1973a0c26ba"
  },
  {
    "url": "static/js/3171.a91a350f.chunk.js",
    "revision": "59cc426bf7b08f030ae0974a2a0c0fb9"
  },
  {
    "url": "static/js/3173.bf70294f.chunk.js",
    "revision": "e74b410028dbb4096e9200ca3c7afd26"
  },
  {
    "url": "static/js/3215.791225dc.chunk.js",
    "revision": "f1aae40680423e8630ec8c4a0d17ff77"
  },
  {
    "url": "static/js/3259.a31208e7.chunk.js",
    "revision": "9e94cc37c7a5611b8b00d612d059b2a4"
  },
  {
    "url": "static/js/3283.a283870c.chunk.js",
    "revision": "4c2d90e7b1782daea0a5772ec4cc564f"
  },
  {
    "url": "static/js/3287.c48e3cdf.chunk.js",
    "revision": "cd587dd2fcda4d52a86ec31c8c095865"
  },
  {
    "url": "static/js/335.66c684ff.chunk.js",
    "revision": "bca01f40634cd33ac80d09520979b019"
  },
  {
    "url": "static/js/3678.e56a32c8.chunk.js",
    "revision": "e01d8714cdf2ebeb5a69ac70dae4e20d"
  },
  {
    "url": "static/js/3715.1de086e1.chunk.js",
    "revision": "99e623b9458dc44508bf2c22ea2abe77"
  },
  {
    "url": "static/js/375.b1088ca2.chunk.js",
    "revision": "9332a2b42f50bf221366e86aacfb9b8c"
  },
  {
    "url": "static/js/3753.ed6b4061.chunk.js",
    "revision": "4ac8b750b80dc5993afe3b4794d347e3"
  },
  {
    "url": "static/js/3804.bdb069bf.chunk.js",
    "revision": "156e8ca43a41570769ced625994eddf4"
  },
  {
    "url": "static/js/3845.e3925059.chunk.js",
    "revision": "c4495b5b5060005215cf767765db016a"
  },
  {
    "url": "static/js/3960.91ffe28f.chunk.js",
    "revision": "5727de0be89c885d2698345f5bd07f63"
  },
  {
    "url": "static/js/3966.fc410c5a.chunk.js",
    "revision": "21b08b76f5b049eb61b823bae6499169"
  },
  {
    "url": "static/js/3969.6c9bddd1.chunk.js",
    "revision": "acdb6b727d4b9059c2817b5ae4e50cba"
  },
  {
    "url": "static/js/4061.1665b5d0.chunk.js",
    "revision": "fb65a5f0208aac51b260356b44931a0d"
  },
  {
    "url": "static/js/4172.8a194ec9.chunk.js",
    "revision": "69ba590272ae7febd2a686b5a88c3d62"
  },
  {
    "url": "static/js/4313.63f62ad4.chunk.js",
    "revision": "ff63778cb841e54026eae6352eff04bc"
  },
  {
    "url": "static/js/450.a60429a4.chunk.js",
    "revision": "fe8415bb8a015e5ed99515826fbc87fb"
  },
  {
    "url": "static/js/4778.78e7f98f.chunk.js",
    "revision": "b0c52e0d03bf37e7edfc457b76f5127b"
  },
  {
    "url": "static/js/4963.ff9170c0.chunk.js",
    "revision": "e55d580da865a1d307ff3d85d63078a5"
  },
  {
    "url": "static/js/4974.d0a31076.chunk.js",
    "revision": "1caa9a645d8c4556e5c6f1ad96d8096e"
  },
  {
    "url": "static/js/5096.777a3d41.chunk.js",
    "revision": "fbbc62feab336334802ee1acd9dadb15"
  },
  {
    "url": "static/js/5144.b485c066.chunk.js",
    "revision": "56016e6520caf2e2e185e7b96cf1b46b"
  },
  {
    "url": "static/js/5154.89b5cb6c.chunk.js",
    "revision": "55e4ac42a525ae0728da3a99a2acdaf1"
  },
  {
    "url": "static/js/5190.0cf1d3b5.chunk.js",
    "revision": "2a83fea4e0046fc0013e0d7f7f999dd9"
  },
  {
    "url": "static/js/5236.b8e5c649.chunk.js",
    "revision": "49a7e7bee3a5047039e8feab663a42fe"
  },
  {
    "url": "static/js/5291.e016ede5.chunk.js",
    "revision": "2414b12ff54e0b44e9ad912acb82436d"
  },
  {
    "url": "static/js/5471.1ca9bca5.chunk.js",
    "revision": "aa4057129d5013be7f311e78e271d5ad"
  },
  {
    "url": "static/js/5633.cd9c584a.chunk.js",
    "revision": "820c1ce15fbd5b13f360b37791a2fa25"
  },
  {
    "url": "static/js/5709.b94a7cfa.chunk.js",
    "revision": "d8e0437a56a9e70015e9d96f08b2d872"
  },
  {
    "url": "static/js/5750.e9ec7a5c.chunk.js",
    "revision": "df66357cec1bb42003570352dce2376d"
  },
  {
    "url": "static/js/5839.6bd0f016.chunk.js",
    "revision": "1cd0a02fa3dfe0a83f02c515c64c10ab"
  },
  {
    "url": "static/js/5919.fbba79d2.chunk.js",
    "revision": "c71ead7d2c816744a9bc06e5c52b9d5e"
  },
  {
    "url": "static/js/5952.a97f02f0.chunk.js",
    "revision": "5e9420abc928887e9159db207ebfcf42"
  },
  {
    "url": "static/js/6264.7f84f6c9.chunk.js",
    "revision": "88d525e29a213a9346dd824deadffca4"
  },
  {
    "url": "static/js/6285.15f71823.chunk.js",
    "revision": "5c81fcd0bb410ae2e905bac624124052"
  },
  {
    "url": "static/js/6344.db5b14b9.chunk.js",
    "revision": "bf95575041b2e16d4510c47846792e63"
  },
  {
    "url": "static/js/6463.a3bb4794.chunk.js",
    "revision": "504b0f0af5f81fcc3f5602ae3f1de06f"
  },
  {
    "url": "static/js/6618.37228e59.chunk.js",
    "revision": "8278bfb78b889f8319e60abb3d13e7f7"
  },
  {
    "url": "static/js/6889.e730cbce.chunk.js",
    "revision": "c2fcb847a5b8a1ecc53082cc8db404f8"
  },
  {
    "url": "static/js/6899.b0744db6.chunk.js",
    "revision": "57ca0325da5deac09a5acb253380c07d"
  },
  {
    "url": "static/js/7197.3777582f.chunk.js",
    "revision": "fb7846f821b9df79449e39c9d3fbfeae"
  },
  {
    "url": "static/js/7385.5343b602.chunk.js",
    "revision": "6ecf567f655369a14c1fcfe2095f33f1"
  },
  {
    "url": "static/js/7389.bdd9b0ec.chunk.js",
    "revision": "ddec57fe733da5e3bdd1e9bbcb11c430"
  },
  {
    "url": "static/js/7732.92a29441.chunk.js",
    "revision": "909feede31cde0f79bf02895c8f0dff9"
  },
  {
    "url": "static/js/7784.5e2ad611.chunk.js",
    "revision": "88f0adab1af61dd1d67a893f26568dc0"
  },
  {
    "url": "static/js/7803.86e3112f.chunk.js",
    "revision": "a62d63a36c475f1076d5e13024a666cd"
  },
  {
    "url": "static/js/7955.1fc169ad.chunk.js",
    "revision": "75b8357b3a61fe853a257242335fff98"
  },
  {
    "url": "static/js/8029.42da651a.chunk.js",
    "revision": "ed2bfe4c6b816083af5944c6d86aabde"
  },
  {
    "url": "static/js/8095.d9e30cf4.chunk.js",
    "revision": "9eafa48c29f2e6dd68a35ee9b5e79672"
  },
  {
    "url": "static/js/8133.e510a471.chunk.js",
    "revision": "1080c888cc561f185e9cc0ceacc021a9"
  },
  {
    "url": "static/js/8217.1ad7b560.chunk.js",
    "revision": "d5f81653b862706b5556ae6b9da20dd4"
  },
  {
    "url": "static/js/8305.c68407d0.chunk.js",
    "revision": "5957bf1df74b1e9a674e1848b6fa1601"
  },
  {
    "url": "static/js/8333.6f8a1b1d.chunk.js",
    "revision": "8bf973f7f9671cd3c6484c009a6d9eff"
  },
  {
    "url": "static/js/8461.beb14d50.chunk.js",
    "revision": "00f104bc606d330471b0c2246a548576"
  },
  {
    "url": "static/js/860.0a45bea8.chunk.js",
    "revision": "a8870cdadd89e15c7944b7e4c8b5c504"
  },
  {
    "url": "static/js/8671.bb1a020e.chunk.js",
    "revision": "3562dd98a7a39ea2cb44cb05f5603463"
  },
  {
    "url": "static/js/8677.e4798a61.chunk.js",
    "revision": "48f935230fe5f597c6486c964aded6a3"
  },
  {
    "url": "static/js/8870.b7b10793.chunk.js",
    "revision": "41a024bbe80819d20e29d27b38740eef"
  },
  {
    "url": "static/js/8939.71c8ab9d.chunk.js",
    "revision": "4a796e8a47c849ac57fe3c6273f65b7c"
  },
  {
    "url": "static/js/8964.82d242f0.chunk.js",
    "revision": "88e1e3a2ac72ff63f1e1fd037605cde3"
  },
  {
    "url": "static/js/9070.df779800.chunk.js",
    "revision": "ec4c6566adb98c32e796889f0f4a9c11"
  },
  {
    "url": "static/js/9189.f7f9c24f.chunk.js",
    "revision": "2e401eb1f1e47d68a7ec3df88ce93330"
  },
  {
    "url": "static/js/9219.6987b387.chunk.js",
    "revision": "eb26da82364bf9f6cd9d252142932a33"
  },
  {
    "url": "static/js/9222.00eabea4.chunk.js",
    "revision": "4bdd3a8df7bff541cdaa42176a4077ba"
  },
  {
    "url": "static/js/9251.0c01ee30.chunk.js",
    "revision": "648a0de91385189f237cef1569fc03d5"
  },
  {
    "url": "static/js/9280.c47bd66b.chunk.js",
    "revision": "8ca5f7ba194c23c9fdafb2193a55eb98"
  },
  {
    "url": "static/js/9302.eab06358.chunk.js",
    "revision": "ada716043cdf70a6b179d0e1f0d61a71"
  },
  {
    "url": "static/js/9373.6aff6d06.chunk.js",
    "revision": "46cfb3fa40708e1710c0824420efaa99"
  },
  {
    "url": "static/js/942.eb9b0d34.chunk.js",
    "revision": "0e385b9bfe399742e1a3a5ae7b51ca9a"
  },
  {
    "url": "static/js/9480.1d72c02b.chunk.js",
    "revision": "a2a9f7686ba6416267dc552cafe99485"
  },
  {
    "url": "static/js/953.27793248.chunk.js",
    "revision": "b5cac61eb18f25369902518b4e6adfbd"
  },
  {
    "url": "static/js/9593.9bc47d88.chunk.js",
    "revision": "3a417350f415491b3f138bc38d024430"
  },
  {
    "url": "static/js/9632.64a4769f.chunk.js",
    "revision": "69348009ba724aa065e3280e02a76f21"
  },
  {
    "url": "static/js/accession.63207366.chunk.js",
    "revision": "2d886c23451bdf121d2af6dad47be712"
  },
  {
    "url": "static/js/advanced-search.f16dcdb4.chunk.js",
    "revision": "d4f63642d06f68470102d7808629f6a5"
  },
  {
    "url": "static/js/browse.da12d8a5.chunk.js",
    "revision": "4cda3f28b08ec49500f0dbdd85269e80"
  },
  {
    "url": "static/js/contact.a250e640.chunk.js",
    "revision": "112b4996dbebb63cf3cf7cc3fd62df99"
  },
  {
    "url": "static/js/embed.8ba40b03.chunk.js",
    "revision": "cc04f38f10f060943f382f7f15e335e6"
  },
  {
    "url": "static/js/footer.a45d0247.chunk.js",
    "revision": "cf8cbe44d22d73f45a9c5d5a256f5de0"
  },
  {
    "url": "static/js/graph-msm.10b5730e.chunk.js",
    "revision": "2c1e99d1cce93459c7c005443f983e32"
  },
  {
    "url": "static/js/graph.58b8e5e4.chunk.js",
    "revision": "78eb486c5b50a95d01a79eb5e4311cf0"
  },
  {
    "url": "static/js/help.0cfc3fd6.chunk.js",
    "revision": "e6e9094760fb63804fbfe26e98ed6039"
  },
  {
    "url": "static/js/home.ebaefc84.chunk.js",
    "revision": "ee7c2942626f8fc83efdbfbef19bdd0c"
  },
  {
    "url": "static/js/intersection-observer.18397bfb.chunk.js",
    "revision": "c4894e44e6b6dac08e55b7febf14ad94"
  },
  {
    "url": "static/js/main.bad3271d.js",
    "revision": "0e1f2d479ebe2f69a05a34a2a10b4368"
  },
  {
    "url": "static/js/meta-analysis.117cba23.chunk.js",
    "revision": "ae690fc424d6714ec9705f7ff0671f74"
  },
  {
    "url": "static/js/pointer.2c317db1.chunk.js",
    "revision": "a0d684cdd0c067a968eb0ee421c82abc"
  },
  {
    "url": "static/js/projections.35644b4a.chunk.js",
    "revision": "b18a8e62e7c6cae8ee6ba3b47cee5859"
  },
  {
    "url": "static/js/protvista-coloured-sequence.bb8aab34.chunk.js",
    "revision": "950faa2d261bf5c92bdcbd6d5d714854"
  },
  {
    "url": "static/js/protvista-interpro-track.354975c5.chunk.js",
    "revision": "856c8a5871c26052c97cf1c4b9c5f57a"
  },
  {
    "url": "static/js/protvista-manager.78fe767e.chunk.js",
    "revision": "e3463924a533a6776505d8ed1f8b1601"
  },
  {
    "url": "static/js/protvista-navigation.d62781a0.chunk.js",
    "revision": "d748e72be1ba74896258f1ba36a3e813"
  },
  {
    "url": "static/js/protvista-sequence.d70b401c.chunk.js",
    "revision": "714305af17fdbf08f73a88a5d9764981"
  },
  {
    "url": "static/js/snack-bar-container.70552cde.chunk.js",
    "revision": "baf9408fb9bcacdea805efaf9683b83d"
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
