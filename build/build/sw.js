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
    "revision": "f22d1b05f0a3ff0655964e4b84cf8a01"
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
    "url": "static/css/2055.05d8e12b.chunk.css",
    "revision": "2f134eee8612503d13125f38830a7057"
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
    "url": "static/css/7194.1f92fd89.chunk.css",
    "revision": "789ec75b6d7ee2017a7ba506297e3004"
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
    "url": "static/css/8400.b382766e.chunk.css",
    "revision": "ae41b499d63ead44a245c46cadb24aa4"
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
    "url": "static/css/8962.2633eff7.chunk.css",
    "revision": "8bb35b3e0b970119dc96361ae5ce4b46"
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
    "url": "static/css/accession.54d5b1d8.chunk.css",
    "revision": "6f747fd9e1e07e1df1333f42d0ee0b54"
  },
  {
    "url": "static/css/advanced-search.2edb7cbb.chunk.css",
    "revision": "abbee3a18abdf32bd3875116da55ae09"
  },
  {
    "url": "static/css/browse.89ca78a5.chunk.css",
    "revision": "5f38080fcdf0325d7de7254c663a6021"
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
    "url": "static/css/help.26d8be25.chunk.css",
    "revision": "bd11b04c2f3d1fd3e122ceb014b0c55b"
  },
  {
    "url": "static/css/home.5e40fa3b.chunk.css",
    "revision": "66405903170a90de7802ea3a1ad9950b"
  },
  {
    "url": "static/css/meta-analysis.be00ff25.chunk.css",
    "revision": "532685c3858759c8f3e285adda677291"
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
    "url": "static/js/1235.3ba778b9.chunk.js",
    "revision": "509b853e5ad628d9d16a0fb2eabcf9e0"
  },
  {
    "url": "static/js/134.9eedc021.chunk.js",
    "revision": "b1038c2e35ed029e60614601faf99372"
  },
  {
    "url": "static/js/1502.44b63e52.chunk.js",
    "revision": "b7e882f69dcfaaf2afec0083e628f889"
  },
  {
    "url": "static/js/1612.808cc143.chunk.js",
    "revision": "4550ce8abfa583b446a06b0246c61e2e"
  },
  {
    "url": "static/js/1772.35901999.chunk.js",
    "revision": "f90784110ef421c2660fbb188cef492e"
  },
  {
    "url": "static/js/1814.b68c2a05.chunk.js",
    "revision": "91f77b2b7680043cbe961e93d2400a48"
  },
  {
    "url": "static/js/1993.b493fd1f.chunk.js",
    "revision": "29b587805729f2d55f2bb5d1e544bd07"
  },
  {
    "url": "static/js/2055.7e8bd838.chunk.js",
    "revision": "5102650f8454a16a94d719c876aa991c"
  },
  {
    "url": "static/js/2100.0333b496.chunk.js",
    "revision": "48a2fee729bad4a061c45f7e89fafb86"
  },
  {
    "url": "static/js/2260.4a3443aa.chunk.js",
    "revision": "564d61f4c53ca42c4db14514273f1cf4"
  },
  {
    "url": "static/js/2460.e456e712.chunk.js",
    "revision": "ffd53d8b521ba7cfc9fc247628e74677"
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
    "url": "static/js/2577.26a03929.chunk.js",
    "revision": "c31ac641c2fe6def52e3c9c1469f2c52"
  },
  {
    "url": "static/js/2594.9b44ccc9.chunk.js",
    "revision": "41f057d1f114fda835a9ad62f352b547"
  },
  {
    "url": "static/js/2599.c4a8aa97.chunk.js",
    "revision": "f8256b56baba32dabd3db8b8f969c7bd"
  },
  {
    "url": "static/js/2615.295e36a0.chunk.js",
    "revision": "26933ee279bcef8837e787f0c9bd2b8f"
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
    "url": "static/js/3171.594872b5.chunk.js",
    "revision": "1ec8c913c626d06d63cb7bab817e19b9"
  },
  {
    "url": "static/js/3173.3f5c8a42.chunk.js",
    "revision": "45f978b95ac822d05c5f355d287c7072"
  },
  {
    "url": "static/js/318.8a907c26.chunk.js",
    "revision": "31ff3d833564e7ddf5b385e166d0da4a"
  },
  {
    "url": "static/js/3215.64a0f996.chunk.js",
    "revision": "d168d4202a4a4e5ca62fd7137cc18a6d"
  },
  {
    "url": "static/js/3259.40d6ba1e.chunk.js",
    "revision": "0940abd8844472c7aea7d20f4bb00028"
  },
  {
    "url": "static/js/3283.4c4f736a.chunk.js",
    "revision": "a02534ae665cc262e7aada078ed033a6"
  },
  {
    "url": "static/js/3287.0ab6cadf.chunk.js",
    "revision": "1ebcd720c2be884a74b3de389cc2bed1"
  },
  {
    "url": "static/js/349.9a3d5d31.chunk.js",
    "revision": "be7c8b31f8bd7ae5bbb71edaa3022fdf"
  },
  {
    "url": "static/js/3653.46345d5e.chunk.js",
    "revision": "5e54bbc0b7a341ef4a936edd473e379f"
  },
  {
    "url": "static/js/3715.9409e5e6.chunk.js",
    "revision": "3f7523cfc715e2f4debd6b7a49b7ba94"
  },
  {
    "url": "static/js/3753.084dbdbd.chunk.js",
    "revision": "dff84fb78820665cea8d8f3b739cd07a"
  },
  {
    "url": "static/js/3804.fc7dd457.chunk.js",
    "revision": "a9325288ffaa2e83906e014723f3e803"
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
    "url": "static/js/4172.de1c3799.chunk.js",
    "revision": "2aaef7185e46833a9afea6dc3965b1cd"
  },
  {
    "url": "static/js/4313.e18a3fb3.chunk.js",
    "revision": "4adb5fe61b5f47bbfe7bfe19857a5116"
  },
  {
    "url": "static/js/4468.c75b68ac.chunk.js",
    "revision": "13d20116e162fa0e753f2e89d2215ef0"
  },
  {
    "url": "static/js/4482.f709140d.chunk.js",
    "revision": "527f0f7feb0809524359597d57214444"
  },
  {
    "url": "static/js/450.e099f1db.chunk.js",
    "revision": "22b68f22911b383fc3973a6fa34cdcd7"
  },
  {
    "url": "static/js/4778.682ad940.chunk.js",
    "revision": "f5fe0cebea41877841607b220c584159"
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
    "url": "static/js/5096.4413f110.chunk.js",
    "revision": "dec8a7678fdb522853f0891c7ef84b8d"
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
    "url": "static/js/5236.d60f5e93.chunk.js",
    "revision": "750a5ba98181026295c19bdc69287cd4"
  },
  {
    "url": "static/js/5291.9bc276b3.chunk.js",
    "revision": "1c7d9cde3a42d546548bab726ece027f"
  },
  {
    "url": "static/js/5471.1ca9bca5.chunk.js",
    "revision": "aa4057129d5013be7f311e78e271d5ad"
  },
  {
    "url": "static/js/5709.b94a7cfa.chunk.js",
    "revision": "d8e0437a56a9e70015e9d96f08b2d872"
  },
  {
    "url": "static/js/5750.2745069e.chunk.js",
    "revision": "4d9a1c1975b1198c7b0c2d86fa2c8f3a"
  },
  {
    "url": "static/js/5839.beac10ae.chunk.js",
    "revision": "b12d94dda1496c3a84e5933a0c93c889"
  },
  {
    "url": "static/js/5851.db573f49.chunk.js",
    "revision": "a9646bd751d7a74ea2e8ad14bafaa5aa"
  },
  {
    "url": "static/js/5919.b64fa10c.chunk.js",
    "revision": "e4cc0c66a282a7e0648339cffc33bd88"
  },
  {
    "url": "static/js/593.200d02f9.chunk.js",
    "revision": "0e4123a3317e19686381dcaf4c82f562"
  },
  {
    "url": "static/js/5952.9f0bb294.chunk.js",
    "revision": "25868a7f15fd7a9efecad2977c480ac5"
  },
  {
    "url": "static/js/5953.0cd5ee3c.chunk.js",
    "revision": "a650fe7666baf8f40a209261123f4d7c"
  },
  {
    "url": "static/js/6264.8e7e2397.chunk.js",
    "revision": "31e0d7ef8d7310b0d09dba7062244b38"
  },
  {
    "url": "static/js/6277.1aac0ab6.chunk.js",
    "revision": "092339a9898e8229f9e1d469159da397"
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
    "url": "static/js/6886.a42d1af5.chunk.js",
    "revision": "4b823be622b03aa62ab99d448b338442"
  },
  {
    "url": "static/js/7194.c3fe0e71.chunk.js",
    "revision": "c673fba6124f0af53b8caa712bf32312"
  },
  {
    "url": "static/js/7197.2f578e84.chunk.js",
    "revision": "0bb303167b05ae3a958be9b223573d2f"
  },
  {
    "url": "static/js/7385.2b1120d2.chunk.js",
    "revision": "dd552801e6978977c2f70239f2ce07d2"
  },
  {
    "url": "static/js/7389.bdd9b0ec.chunk.js",
    "revision": "ddec57fe733da5e3bdd1e9bbcb11c430"
  },
  {
    "url": "static/js/7415.2c2eda16.chunk.js",
    "revision": "aede5c5069e53a50d1f9fe18bc0a5b17"
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
    "url": "static/js/7946.3aea807b.chunk.js",
    "revision": "69dff481a1a9906aaeccd788c67e07c6"
  },
  {
    "url": "static/js/7955.4664f1b0.chunk.js",
    "revision": "94b5c75d0679984d32835d53a7ce9735"
  },
  {
    "url": "static/js/8007.f4f96efb.chunk.js",
    "revision": "254d45232c68e4d2e08db0ae1ed6c982"
  },
  {
    "url": "static/js/8029.2b082daa.chunk.js",
    "revision": "96f0d340be7ce743551e8843f40b2fa4"
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
    "url": "static/js/8217.9cf68ccc.chunk.js",
    "revision": "a68a32565e425f8a545eaa36634526cf"
  },
  {
    "url": "static/js/8333.4e39553b.chunk.js",
    "revision": "eafacf821dff8d3c593d7b07f5d6fb95"
  },
  {
    "url": "static/js/8400.d30f3639.chunk.js",
    "revision": "089ff1b4113e1ecf05fa3d6fb422d942"
  },
  {
    "url": "static/js/8418.dca0917e.chunk.js",
    "revision": "b93e9cb1aabfcdc5edf8a1fca36def4c"
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
    "url": "static/js/8870.1cc598ee.chunk.js",
    "revision": "6e5db867cfe73e839ece24a85582ede8"
  },
  {
    "url": "static/js/8939.71c8ab9d.chunk.js",
    "revision": "4a796e8a47c849ac57fe3c6273f65b7c"
  },
  {
    "url": "static/js/8962.1a14c2a0.chunk.js",
    "revision": "2dcfd22d86bf316da8ab5c8d44f3c875"
  },
  {
    "url": "static/js/9070.809aa749.chunk.js",
    "revision": "bb0016c32c14cf6069b887bd3707d6b6"
  },
  {
    "url": "static/js/9302.f3fae049.chunk.js",
    "revision": "45442429e6b2bd21a1aad0d721d2d01f"
  },
  {
    "url": "static/js/9373.6aff6d06.chunk.js",
    "revision": "46cfb3fa40708e1710c0824420efaa99"
  },
  {
    "url": "static/js/942.c26b2a7b.chunk.js",
    "revision": "e176e70e7a84054f97e9909e4665e2a2"
  },
  {
    "url": "static/js/9480.780dc0a0.chunk.js",
    "revision": "7cd465d09ac910a0e224acafac150bd4"
  },
  {
    "url": "static/js/953.2d0ac541.chunk.js",
    "revision": "a01fa4d48d50ac99b4c447837a3ceef1"
  },
  {
    "url": "static/js/9632.b674878f.chunk.js",
    "revision": "ddf0857bdcf11885944eefffaf89cbc3"
  },
  {
    "url": "static/js/accession.84bfec65.chunk.js",
    "revision": "1e34aac4a9711a9854b59b725039135d"
  },
  {
    "url": "static/js/advanced-search.49059804.chunk.js",
    "revision": "e28d0875d2974ea9f201aba8b5004f32"
  },
  {
    "url": "static/js/browse.c1931064.chunk.js",
    "revision": "d33c6f630d8beeeccfa91fbeb9afd42d"
  },
  {
    "url": "static/js/contact.45686634.chunk.js",
    "revision": "1df71e85ecdf9b1396a692a4480478e7"
  },
  {
    "url": "static/js/custom-search.277c4a70.chunk.js",
    "revision": "c91e9e05750c2601961dfc028199843b"
  },
  {
    "url": "static/js/embed.3c7bf12b.chunk.js",
    "revision": "28d27878faf4f4eef5147e833540ab80"
  },
  {
    "url": "static/js/footer.73e83dd7.chunk.js",
    "revision": "d0a06563cb8a17addb49aaf8602a0159"
  },
  {
    "url": "static/js/graph-msm.072fbc39.chunk.js",
    "revision": "9f9d78421f798e89e9e345794b4cfa8c"
  },
  {
    "url": "static/js/graph.58b8e5e4.chunk.js",
    "revision": "78eb486c5b50a95d01a79eb5e4311cf0"
  },
  {
    "url": "static/js/help.b6ba7713.chunk.js",
    "revision": "d4de16bbca0d49321e58bd743f8f0ee7"
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
    "url": "static/js/main.59a32dc5.js",
    "revision": "85bd5c6bb9535d36deb3c44b2cd76916"
  },
  {
    "url": "static/js/meta-analysis.5adfb95c.chunk.js",
    "revision": "3925ec0929823d0c83e7f09ea25c1b23"
  },
  {
    "url": "static/js/projections.8bc82de1.chunk.js",
    "revision": "ba79bf924b9d40687f47f96778ff14c5"
  },
  {
    "url": "static/js/protvista-coloured-sequence.21d379be.chunk.js",
    "revision": "4f4a19858d3f533a678fedf362f5d678"
  },
  {
    "url": "static/js/protvista-interpro-track.58da98b0.chunk.js",
    "revision": "0afdca00922084ccaf217383d89f619b"
  },
  {
    "url": "static/js/protvista-manager.4352be77.chunk.js",
    "revision": "e97abc959f3dc8feb1b3b408a8170899"
  },
  {
    "url": "static/js/protvista-navigation.42a6bf23.chunk.js",
    "revision": "169295c271e1cb140407852e93652c51"
  },
  {
    "url": "static/js/protvista-sequence.93210973.chunk.js",
    "revision": "fae430162f73306a899c3dd2de835325"
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
