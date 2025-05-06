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
    "revision": "8949d2e83d40848fc228aa2180baeed5"
  },
  {
    "url": "static/css/1181.73a5df46.chunk.css",
    "revision": "b7803f37dae6bcb420f2217d3f985331"
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
    "url": "static/css/2527.90314694.chunk.css",
    "revision": "18738b079a2e1dcedad26be8fd7e4615"
  },
  {
    "url": "static/css/2615.67b7a800.chunk.css",
    "revision": "b09cd220b53af4db459210ee04ca9db4"
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
    "url": "static/css/3016.435ca887.chunk.css",
    "revision": "d76f023634b8df648d750b83bd4ee353"
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
    "url": "static/css/3283.34c0888a.chunk.css",
    "revision": "00f9aded57647ba3a767f94c04e53bab"
  },
  {
    "url": "static/css/3287.74e8f9b4.chunk.css",
    "revision": "207e4771a0f6c867ded33056aec8b96c"
  },
  {
    "url": "static/css/3653.8becc5b2.chunk.css",
    "revision": "fd23dd46fdf0848c57f808110ef4a0df"
  },
  {
    "url": "static/css/3715.90b52df1.chunk.css",
    "revision": "788791a088c88ff684a53176b49f8389"
  },
  {
    "url": "static/css/3753.1bc64d27.chunk.css",
    "revision": "75a756dc73d1b34a1916b065eda44534"
  },
  {
    "url": "static/css/3804.dd140177.chunk.css",
    "revision": "0c3c26855a6bb31583c0fceffd2ac5b6"
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
    "url": "static/css/450.b6867607.chunk.css",
    "revision": "79ef7bc6496b64ce484956f971b38f96"
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
    "url": "static/css/5471.0ecbeb7f.chunk.css",
    "revision": "6ff58d0b3b94e82fd24a573a42535805"
  },
  {
    "url": "static/css/5709.f28160ab.chunk.css",
    "revision": "f31f4f549a6a3ebbc6ab3c1b87891ab8"
  },
  {
    "url": "static/css/5851.f3c1bb34.chunk.css",
    "revision": "29216e4ee7ae584316a72c3f47bb5a92"
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
    "url": "static/css/6344.c9055c2b.chunk.css",
    "revision": "0850be905c46402a5aa99b755343bf27"
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
    "url": "static/css/8418.c3f09392.chunk.css",
    "revision": "3c3e1784b3fd2c3b2f0fdaa79a32f4d8"
  },
  {
    "url": "static/css/8870.ed86a111.chunk.css",
    "revision": "ca8272b61bfe3b1630bbd8f62c6e7f8f"
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
    "url": "static/css/942.d9b1a5e8.chunk.css",
    "revision": "da650ffcc438105c3f464829fc90b544"
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
    "url": "static/css/9696.f351cc9a.chunk.css",
    "revision": "43e77c65ba6d410af9993caac75fff73"
  },
  {
    "url": "static/css/accession.895c3b75.chunk.css",
    "revision": "e9a4ce9d65669171a362f461190a599e"
  },
  {
    "url": "static/css/advanced-search.2edb7cbb.chunk.css",
    "revision": "abbee3a18abdf32bd3875116da55ae09"
  },
  {
    "url": "static/css/browse.2235f6c7.chunk.css",
    "revision": "4559ef9072cbba36c64b865cf5a2390c"
  },
  {
    "url": "static/css/contact.8876a84b.chunk.css",
    "revision": "e70580a2561c1b56ccea8a387d390354"
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
    "url": "static/css/help.d04efbf4.chunk.css",
    "revision": "514cc65734712af1840c02142c9b6028"
  },
  {
    "url": "static/css/home.5e40fa3b.chunk.css",
    "revision": "66405903170a90de7802ea3a1ad9950b"
  },
  {
    "url": "static/css/meta-analysis.d9fff8bc.chunk.css",
    "revision": "d72148fd4cc3a87175de649ea50f4cf9"
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
    "url": "static/js/1177.70dca8e7.chunk.js",
    "revision": "fbb5459a9b1a1e692044dcbdc7b69d5a"
  },
  {
    "url": "static/js/1181.af808c61.chunk.js",
    "revision": "169b1cb4dc14cfbcc21ab06c37c4b946"
  },
  {
    "url": "static/js/1190.221d0e10.chunk.js",
    "revision": "78ed3a5c66ef881fefd7f65613820786"
  },
  {
    "url": "static/js/1198.1485775d.chunk.js",
    "revision": "d381b29d528291fba9e2e2f7fd497038"
  },
  {
    "url": "static/js/134.9eedc021.chunk.js",
    "revision": "b1038c2e35ed029e60614601faf99372"
  },
  {
    "url": "static/js/1502.60777ecd.chunk.js",
    "revision": "fe89182e49cb4653cd823faa64fd0460"
  },
  {
    "url": "static/js/1578.99c84ca5.chunk.js",
    "revision": "9573989177cec4cad2721d5fcd695c2e"
  },
  {
    "url": "static/js/1612.808cc143.chunk.js",
    "revision": "4550ce8abfa583b446a06b0246c61e2e"
  },
  {
    "url": "static/js/1772.bc5a53ee.chunk.js",
    "revision": "52ae6b2201b4642eebc7155511153074"
  },
  {
    "url": "static/js/1814.b68c2a05.chunk.js",
    "revision": "91f77b2b7680043cbe961e93d2400a48"
  },
  {
    "url": "static/js/1841.3bb0bca7.chunk.js",
    "revision": "ce17154d5f9e603e9bb007d073f0c6dc"
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
    "url": "static/js/22.2a8cb36a.chunk.js",
    "revision": "6a0f742ad99e7b38b7c30f32495879cb"
  },
  {
    "url": "static/js/2260.4a3443aa.chunk.js",
    "revision": "564d61f4c53ca42c4db14514273f1cf4"
  },
  {
    "url": "static/js/247.0f285d29.chunk.js",
    "revision": "ed28d135b1a4d3e4256fcb7218fa8de3"
  },
  {
    "url": "static/js/2492.537e6f33.chunk.js",
    "revision": "a5bef511af0ea7bc802ca9d4df313be9"
  },
  {
    "url": "static/js/2527.02b2f1ef.chunk.js",
    "revision": "1cc1c9e77c6de19daf95c4c4d5663b8e"
  },
  {
    "url": "static/js/2615.d7ba2d78.chunk.js",
    "revision": "d3ec53bd4acdb7791d15b46edfe3fade"
  },
  {
    "url": "static/js/2633.40e6d3e5.chunk.js",
    "revision": "83cce7842c7469d46454192a6d4b8bbb"
  },
  {
    "url": "static/js/2822.663e1c4f.chunk.js",
    "revision": "ffb523477475a817c9bb1ca41bdfb7b1"
  },
  {
    "url": "static/js/2881.fbf2d418.chunk.js",
    "revision": "89f5d547738245eb7f76dbc07a7216ba"
  },
  {
    "url": "static/js/3016.7cc600a5.chunk.js",
    "revision": "7cb7a7b016db5dddd1fba8c47673689c"
  },
  {
    "url": "static/js/3171.7ce263a4.chunk.js",
    "revision": "7fcc74db9acbc5e3a3993a823125d822"
  },
  {
    "url": "static/js/3173.3f5c8a42.chunk.js",
    "revision": "45f978b95ac822d05c5f355d287c7072"
  },
  {
    "url": "static/js/3215.4a015317.chunk.js",
    "revision": "22fdc504366d7d3ba18c364a803fbec1"
  },
  {
    "url": "static/js/3259.5f2a5768.chunk.js",
    "revision": "3d025957eb3a9d0dc6fa7d041d49b82d"
  },
  {
    "url": "static/js/3283.4c4f736a.chunk.js",
    "revision": "a02534ae665cc262e7aada078ed033a6"
  },
  {
    "url": "static/js/3287.dfa66c29.chunk.js",
    "revision": "f2279068d2c1459efa0a1b05a804d051"
  },
  {
    "url": "static/js/335.681fad5a.chunk.js",
    "revision": "a879f2651e2d1a2ab2377ee76fdd3bba"
  },
  {
    "url": "static/js/3471.82941248.chunk.js",
    "revision": "7d4c53e47b74a733dfc22bbb6e771d43"
  },
  {
    "url": "static/js/3653.4e43195d.chunk.js",
    "revision": "4bfdf44c4a38045e87322b1effe2da1e"
  },
  {
    "url": "static/js/3715.fb476a27.chunk.js",
    "revision": "9877747f713ed28525d7304b68f4f7ae"
  },
  {
    "url": "static/js/3753.f851916f.chunk.js",
    "revision": "16e066f6b74d9b7b49606f70c9047bb4"
  },
  {
    "url": "static/js/3804.32b20384.chunk.js",
    "revision": "4a25ceb3c93dca8c6b63afcb760aa1cf"
  },
  {
    "url": "static/js/3845.7fa3006a.chunk.js",
    "revision": "b769a64d381d2c4316a5ce1825562173"
  },
  {
    "url": "static/js/3960.91ffe28f.chunk.js",
    "revision": "5727de0be89c885d2698345f5bd07f63"
  },
  {
    "url": "static/js/3966.d67c7e0f.chunk.js",
    "revision": "75fb5bfbddb324d56b7272916c7fb8d7"
  },
  {
    "url": "static/js/3969.048cdc10.chunk.js",
    "revision": "59e981e2f099cb8c392a95a692889a6b"
  },
  {
    "url": "static/js/4172.3359bb8f.chunk.js",
    "revision": "d899be46b28d2667f0d75c98c9e89022"
  },
  {
    "url": "static/js/4313.026390b2.chunk.js",
    "revision": "6ca298398e9b2feb8af0d5e74f4dc868"
  },
  {
    "url": "static/js/4468.c75b68ac.chunk.js",
    "revision": "13d20116e162fa0e753f2e89d2215ef0"
  },
  {
    "url": "static/js/450.e099f1db.chunk.js",
    "revision": "22b68f22911b383fc3973a6fa34cdcd7"
  },
  {
    "url": "static/js/4778.2956915a.chunk.js",
    "revision": "4645f3b92dcd6f4c25ad7162bb1ef463"
  },
  {
    "url": "static/js/4830.90b83360.chunk.js",
    "revision": "fc23ffe0b12022e795a47a45e2d9173e"
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
    "url": "static/js/5096.74aca2e0.chunk.js",
    "revision": "c4cd0c58569c060fd55c862803a15c49"
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
    "url": "static/js/5236.c7cdb45b.chunk.js",
    "revision": "964fce14258c3abb1d040fba16e88fa8"
  },
  {
    "url": "static/js/5291.f4a61c86.chunk.js",
    "revision": "a1e68a0ce8fcb1c2a29ba79b5860aa92"
  },
  {
    "url": "static/js/5471.1ca9bca5.chunk.js",
    "revision": "aa4057129d5013be7f311e78e271d5ad"
  },
  {
    "url": "static/js/5633.e87fb8fc.chunk.js",
    "revision": "a27b5d3c55a51609c7e04ee726daff53"
  },
  {
    "url": "static/js/5668.0ebac0c5.chunk.js",
    "revision": "2cc41c64f5479214fd2673a17401c4e7"
  },
  {
    "url": "static/js/5709.b94a7cfa.chunk.js",
    "revision": "d8e0437a56a9e70015e9d96f08b2d872"
  },
  {
    "url": "static/js/5750.9342881e.chunk.js",
    "revision": "53d2afd60431d15215380ac90d88ded8"
  },
  {
    "url": "static/js/5839.beac10ae.chunk.js",
    "revision": "b12d94dda1496c3a84e5933a0c93c889"
  },
  {
    "url": "static/js/5851.f0c0b49a.chunk.js",
    "revision": "089e9f6d2f36666b3d1b4252b88efa8f"
  },
  {
    "url": "static/js/5911.038b333d.chunk.js",
    "revision": "a5f2f13751dad670b8ef0f1374032597"
  },
  {
    "url": "static/js/5919.54fae073.chunk.js",
    "revision": "b766d13de208b5b22ae62140e7e21f7b"
  },
  {
    "url": "static/js/5952.9f0bb294.chunk.js",
    "revision": "25868a7f15fd7a9efecad2977c480ac5"
  },
  {
    "url": "static/js/6264.8e7e2397.chunk.js",
    "revision": "31e0d7ef8d7310b0d09dba7062244b38"
  },
  {
    "url": "static/js/6344.db5b14b9.chunk.js",
    "revision": "bf95575041b2e16d4510c47846792e63"
  },
  {
    "url": "static/js/6618.d480edc3.chunk.js",
    "revision": "d194879d804d6d7c9abb5158cc21eb12"
  },
  {
    "url": "static/js/7197.2f578e84.chunk.js",
    "revision": "0bb303167b05ae3a958be9b223573d2f"
  },
  {
    "url": "static/js/7385.ff0d8984.chunk.js",
    "revision": "f32aa80abd3107c9949a16b87ee48c07"
  },
  {
    "url": "static/js/7389.bdd9b0ec.chunk.js",
    "revision": "ddec57fe733da5e3bdd1e9bbcb11c430"
  },
  {
    "url": "static/js/7631.720c8481.chunk.js",
    "revision": "8933e3105e8aa5550f2fb78ada20c94e"
  },
  {
    "url": "static/js/7732.92a29441.chunk.js",
    "revision": "909feede31cde0f79bf02895c8f0dff9"
  },
  {
    "url": "static/js/7784.131eea5b.chunk.js",
    "revision": "11c6d2af7e7c01335dc5ff6260629b85"
  },
  {
    "url": "static/js/7803.687893ee.chunk.js",
    "revision": "e1012cc46cb19eb89e4b75dc5bd39e35"
  },
  {
    "url": "static/js/7901.2172f6b3.chunk.js",
    "revision": "cce9002bc1f84966915f625ed0dd58fc"
  },
  {
    "url": "static/js/7955.4664f1b0.chunk.js",
    "revision": "94b5c75d0679984d32835d53a7ce9735"
  },
  {
    "url": "static/js/8029.e2c6e637.chunk.js",
    "revision": "a6805217b88b1d8ba7eb393ae5f5d7ab"
  },
  {
    "url": "static/js/8095.b936ae06.chunk.js",
    "revision": "b55a8187d8e92fc7430faa06ea813966"
  },
  {
    "url": "static/js/8133.e510a471.chunk.js",
    "revision": "1080c888cc561f185e9cc0ceacc021a9"
  },
  {
    "url": "static/js/8217.702501ff.chunk.js",
    "revision": "f3706546c62b7f2e3342c63720bd2554"
  },
  {
    "url": "static/js/8333.21aa31dd.chunk.js",
    "revision": "3c6cd40de7aee752ad62efe7bb5c52f2"
  },
  {
    "url": "static/js/8418.303fc2ec.chunk.js",
    "revision": "1e7065523c3dee085dfecdd5fb0b81cc"
  },
  {
    "url": "static/js/8461.693a6681.chunk.js",
    "revision": "8ff46442eb9a7e369eb38c9e15120f6c"
  },
  {
    "url": "static/js/8671.bb1a020e.chunk.js",
    "revision": "3562dd98a7a39ea2cb44cb05f5603463"
  },
  {
    "url": "static/js/8677.e44b3b9e.chunk.js",
    "revision": "ac71c064d459d328262bea3e4472925c"
  },
  {
    "url": "static/js/8870.1cc598ee.chunk.js",
    "revision": "6e5db867cfe73e839ece24a85582ede8"
  },
  {
    "url": "static/js/8939.71c8ab9d.chunk.js",
    "revision": "4a796e8a47c849ac57fe3c6273f65b7c"
  },
  {
    "url": "static/js/9070.809aa749.chunk.js",
    "revision": "bb0016c32c14cf6069b887bd3707d6b6"
  },
  {
    "url": "static/js/9280.eb61e070.chunk.js",
    "revision": "397220292f7f86f3d32d45e3dddb26ae"
  },
  {
    "url": "static/js/9302.d43b10b0.chunk.js",
    "revision": "b266d6ee43c246df79ffdde5c42b0093"
  },
  {
    "url": "static/js/9373.6aff6d06.chunk.js",
    "revision": "46cfb3fa40708e1710c0824420efaa99"
  },
  {
    "url": "static/js/942.244d99e0.chunk.js",
    "revision": "29f2b39b47fc2ceaca165a40673547aa"
  },
  {
    "url": "static/js/9480.cf461726.chunk.js",
    "revision": "310721d8dc1f08d101d60d2506f386eb"
  },
  {
    "url": "static/js/953.8f682191.chunk.js",
    "revision": "07578492ed3a16c5c75b15bf5f065515"
  },
  {
    "url": "static/js/9632.b674878f.chunk.js",
    "revision": "ddf0857bdcf11885944eefffaf89cbc3"
  },
  {
    "url": "static/js/9696.ba286395.chunk.js",
    "revision": "883a83911840b48712605f6d5f16a7f0"
  },
  {
    "url": "static/js/accession.431caba4.chunk.js",
    "revision": "6071abe7af7e6d5dd269757c5559a3ca"
  },
  {
    "url": "static/js/advanced-search.035ee3e0.chunk.js",
    "revision": "77678e6c1974c6853e0151ee2ef49814"
  },
  {
    "url": "static/js/browse.a4ca4f60.chunk.js",
    "revision": "015d6009cefe5a0c40026221652319a2"
  },
  {
    "url": "static/js/contact.45686634.chunk.js",
    "revision": "1df71e85ecdf9b1396a692a4480478e7"
  },
  {
    "url": "static/js/embed.3e31e8de.chunk.js",
    "revision": "1d36d70448683420173099a19513c31f"
  },
  {
    "url": "static/js/footer.73e83dd7.chunk.js",
    "revision": "d0a06563cb8a17addb49aaf8602a0159"
  },
  {
    "url": "static/js/graph-msm.ffa60ea4.chunk.js",
    "revision": "37f5afd8346d3d648070fde234092354"
  },
  {
    "url": "static/js/graph.58b8e5e4.chunk.js",
    "revision": "78eb486c5b50a95d01a79eb5e4311cf0"
  },
  {
    "url": "static/js/help.d3cd21d0.chunk.js",
    "revision": "da8ff2628ddfec0927edcc43b3fde0fa"
  },
  {
    "url": "static/js/home.b637ba78.chunk.js",
    "revision": "80514e60e4b2cbfa5b1109cb2a484641"
  },
  {
    "url": "static/js/intersection-observer.e95f0f77.chunk.js",
    "revision": "cc2fe391bcb1ed4e666b9b61e9ea42c6"
  },
  {
    "url": "static/js/main.dceba693.js",
    "revision": "efb7587fa589017f8e4a637d03907cf5"
  },
  {
    "url": "static/js/meta-analysis.11d40f28.chunk.js",
    "revision": "24192a4bcf25043c3eba2656624f64ec"
  },
  {
    "url": "static/js/projections.736f6422.chunk.js",
    "revision": "418a68e41acdfba5417ba65cc7c02b8c"
  },
  {
    "url": "static/js/protvista-coloured-sequence.f2bacc9d.chunk.js",
    "revision": "8496f92c8d7ba7d32e73e62d42fca6de"
  },
  {
    "url": "static/js/protvista-interpro-track.2d2e8637.chunk.js",
    "revision": "35d0210a15d36d9b68befbdd52ec9156"
  },
  {
    "url": "static/js/protvista-manager.4352be77.chunk.js",
    "revision": "e97abc959f3dc8feb1b3b408a8170899"
  },
  {
    "url": "static/js/protvista-navigation.47201d41.chunk.js",
    "revision": "4afda98249362f8115072fd8a55d0b04"
  },
  {
    "url": "static/js/protvista-sequence.5339f2de.chunk.js",
    "revision": "03b23578a81778438f22d0f25e6c3d5e"
  },
  {
    "url": "static/js/snack-bar-container.2825fc07.chunk.js",
    "revision": "576f7b549ac2d50ab3f64185fa0f4025"
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
