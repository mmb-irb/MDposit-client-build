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
    "revision": "db501158c65eea6597f1e9e30637c930"
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
    "url": "static/css/2527.90314694.chunk.css",
    "revision": "18738b079a2e1dcedad26be8fd7e4615"
  },
  {
    "url": "static/css/2615.67b7a800.chunk.css",
    "revision": "b09cd220b53af4db459210ee04ca9db4"
  },
  {
    "url": "static/css/2874.264ea808.chunk.css",
    "revision": "83600b67d7643e11233d6a50623c8282"
  },
  {
    "url": "static/css/2881.c909f8ed.chunk.css",
    "revision": "d245711453005bd1bc7ccf4b02b864ec"
  },
  {
    "url": "static/css/3016.f748e861.chunk.css",
    "revision": "4ba0d4b5bc6b700d8660c810092f5d67"
  },
  {
    "url": "static/css/3171.38638a9a.chunk.css",
    "revision": "bf5a5adc8b9502b33160fd90a5ee4d2b"
  },
  {
    "url": "static/css/3215.8db576db.chunk.css",
    "revision": "e09583b6b956847a6991287c8a10e254"
  },
  {
    "url": "static/css/3259.94e6ce7a.chunk.css",
    "revision": "aa7038a605c1cd4a41b2d4b7cd49ee11"
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
    "url": "static/css/3715.d86d36fd.chunk.css",
    "revision": "7a3f28a8189d486791a6dd1363d3cf3c"
  },
  {
    "url": "static/css/3804.7469efdb.chunk.css",
    "revision": "6303737015e9c5a3a545dfa6e1de9765"
  },
  {
    "url": "static/css/3960.59270940.chunk.css",
    "revision": "d93b5d239c5acd574eaf9a23b65a81d1"
  },
  {
    "url": "static/css/450.b6867607.chunk.css",
    "revision": "79ef7bc6496b64ce484956f971b38f96"
  },
  {
    "url": "static/css/4778.cb259266.chunk.css",
    "revision": "0edda15bda214488ca977dc6791c5ac2"
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
    "url": "static/css/5096.83fc705c.chunk.css",
    "revision": "1570ad4f470a8ec52a1dce3139f71f45"
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
    "url": "static/css/5709.f28160ab.chunk.css",
    "revision": "f31f4f549a6a3ebbc6ab3c1b87891ab8"
  },
  {
    "url": "static/css/5851.56d9093d.chunk.css",
    "revision": "bd1142a55a515b75a34b0cd0ca8a0b2f"
  },
  {
    "url": "static/css/5919.5c6658e3.chunk.css",
    "revision": "a171b5c09cb1e5b493941c103059b759"
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
    "url": "static/css/7385.1006708f.chunk.css",
    "revision": "922580e41b0edb966848d30b1fa0a0cb"
  },
  {
    "url": "static/css/7389.5419505e.chunk.css",
    "revision": "482aa2a95695624b2947edb2a2cec0e0"
  },
  {
    "url": "static/css/7689.aca038f1.chunk.css",
    "revision": "948efd0a0557f5d961e6e17bad86b574"
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
    "url": "static/css/9480.f28160ab.chunk.css",
    "revision": "1835382f01f14255bf388513f397b8af"
  },
  {
    "url": "static/css/953.c5231419.chunk.css",
    "revision": "74d709c16ab58472cf3da74d5cd1f28b"
  },
  {
    "url": "static/css/accession.8583e2c5.chunk.css",
    "revision": "1b5f0c8a534f699272f2bded214728fd"
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
    "url": "static/css/embed.6f2ee28e.chunk.css",
    "revision": "d355190da4ff54a9e551ea0255e1794d"
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
    "url": "static/css/viewer-with-controls.f98ece4d.chunk.css",
    "revision": "9dff090b54a1b580a027402c560eaecf"
  },
  {
    "url": "static/js/1177.70dca8e7.chunk.js",
    "revision": "fbb5459a9b1a1e692044dcbdc7b69d5a"
  },
  {
    "url": "static/js/1235.31eb1ed3.chunk.js",
    "revision": "815d1d03a27cf6f9dcc58ecca70664bf"
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
    "url": "static/js/1772.0fb99a76.chunk.js",
    "revision": "2f8e4bc9026bc05a0379b81265b59d94"
  },
  {
    "url": "static/js/1814.b68c2a05.chunk.js",
    "revision": "91f77b2b7680043cbe961e93d2400a48"
  },
  {
    "url": "static/js/1993.d3430f40.chunk.js",
    "revision": "0f7ca3264ede3e671d4d19e37d9ffb3f"
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
    "url": "static/js/2260.bac60e1c.chunk.js",
    "revision": "d6e4ca3b3c9a06034a76697817c83471"
  },
  {
    "url": "static/js/2460.e456e712.chunk.js",
    "revision": "ffd53d8b521ba7cfc9fc247628e74677"
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
    "url": "static/js/2597.05551abf.chunk.js",
    "revision": "4561f11a5d482507b42935a9fee102ec"
  },
  {
    "url": "static/js/2599.c4a8aa97.chunk.js",
    "revision": "f8256b56baba32dabd3db8b8f969c7bd"
  },
  {
    "url": "static/js/2615.eb3cb8af.chunk.js",
    "revision": "764c02a771f1b9b8cbcb66f710a8f6b0"
  },
  {
    "url": "static/js/2629.ad396618.chunk.js",
    "revision": "9eb4f12fd77ca646bade48523b58ca3c"
  },
  {
    "url": "static/js/2822.663e1c4f.chunk.js",
    "revision": "ffb523477475a817c9bb1ca41bdfb7b1"
  },
  {
    "url": "static/js/2874.6129eae8.chunk.js",
    "revision": "50ee5be665df80c5b59cabe917bf3b22"
  },
  {
    "url": "static/js/2881.fbf2d418.chunk.js",
    "revision": "89f5d547738245eb7f76dbc07a7216ba"
  },
  {
    "url": "static/js/3016.b566f471.chunk.js",
    "revision": "c88b661cfa4e9b2eda50a163c5ce8be8"
  },
  {
    "url": "static/js/3171.29e9e916.chunk.js",
    "revision": "8933f232bd652b42023d23922bb1bc93"
  },
  {
    "url": "static/js/3173.3f5c8a42.chunk.js",
    "revision": "45f978b95ac822d05c5f355d287c7072"
  },
  {
    "url": "static/js/3215.64a0f996.chunk.js",
    "revision": "d168d4202a4a4e5ca62fd7137cc18a6d"
  },
  {
    "url": "static/js/3259.18c267c7.chunk.js",
    "revision": "dfcdf4c0522af42828d0ad64d16a5da6"
  },
  {
    "url": "static/js/3283.4c4f736a.chunk.js",
    "revision": "a02534ae665cc262e7aada078ed033a6"
  },
  {
    "url": "static/js/3287.fbb3da26.chunk.js",
    "revision": "0441cf62f9b14c610a9f8040bd24b15c"
  },
  {
    "url": "static/js/3316.f612e699.chunk.js",
    "revision": "101044e394eae40e62be08c520e13fee"
  },
  {
    "url": "static/js/3653.3ba4319b.chunk.js",
    "revision": "4f3abadc8655382bcb4428c921b89cba"
  },
  {
    "url": "static/js/3715.9409e5e6.chunk.js",
    "revision": "3f7523cfc715e2f4debd6b7a49b7ba94"
  },
  {
    "url": "static/js/3804.9a2bbae5.chunk.js",
    "revision": "5ae29ad97f5f228a22b66923f1798e0c"
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
    "url": "static/js/5236.bd4aeb69.chunk.js",
    "revision": "203db83ff7d61174b4c3a3cfd60c7469"
  },
  {
    "url": "static/js/5291.6de179ad.chunk.js",
    "revision": "40d2a7f29fb32aaaaa42b14ae700dd3f"
  },
  {
    "url": "static/js/5577.af2bc667.chunk.js",
    "revision": "c604be3752890c138c386842c158286c"
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
    "url": "static/js/5851.fee9d897.chunk.js",
    "revision": "ab4f4d74845c53eb05ae897c0a647d92"
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
    "url": "static/js/6105.6a4e1684.chunk.js",
    "revision": "0079a71c3ee352543929d56bd3ea4f61"
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
    "url": "static/js/6886.bd1e2c85.chunk.js",
    "revision": "3b77f3c7306ef5e20df37b480533da49"
  },
  {
    "url": "static/js/7142.c318942e.chunk.js",
    "revision": "328e062701a341c9d8c4f95e077dde61"
  },
  {
    "url": "static/js/7194.58f3591f.chunk.js",
    "revision": "41f30e650f83330b4eada674c00597e9"
  },
  {
    "url": "static/js/7197.2f578e84.chunk.js",
    "revision": "0bb303167b05ae3a958be9b223573d2f"
  },
  {
    "url": "static/js/7240.6cf9674a.chunk.js",
    "revision": "ca6b9206ac3defd2bfd3125aedb5c7f3"
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
    "url": "static/js/7689.7251b68c.chunk.js",
    "revision": "80ad1b4eea0147539e54f32a1d9a2ab8"
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
    "url": "static/js/8217.a48594aa.chunk.js",
    "revision": "511f70bcf111b1f8ca13439162645298"
  },
  {
    "url": "static/js/8333.ec24c9ad.chunk.js",
    "revision": "0b756485d8fde03410f34df00086a4a1"
  },
  {
    "url": "static/js/8400.d30f3639.chunk.js",
    "revision": "089ff1b4113e1ecf05fa3d6fb422d942"
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
    "url": "static/js/9256.e5b89c92.chunk.js",
    "revision": "111ae4bd2d4eb1bec150b1a87fbff8b9"
  },
  {
    "url": "static/js/9302.262d8896.chunk.js",
    "revision": "37a1fe5e43967f76e751cd1163da38db"
  },
  {
    "url": "static/js/9373.6aff6d06.chunk.js",
    "revision": "46cfb3fa40708e1710c0824420efaa99"
  },
  {
    "url": "static/js/9480.2ea1e323.chunk.js",
    "revision": "1bed1487831836991ca1d42455d77014"
  },
  {
    "url": "static/js/953.4e4636f0.chunk.js",
    "revision": "bc555512bda65076990e7261a3089659"
  },
  {
    "url": "static/js/9632.b674878f.chunk.js",
    "revision": "ddf0857bdcf11885944eefffaf89cbc3"
  },
  {
    "url": "static/js/accession.7083ab3f.chunk.js",
    "revision": "a022d27ff5e80319a422df199a51c27c"
  },
  {
    "url": "static/js/advanced-search.795067e8.chunk.js",
    "revision": "33ee002a01391cb9f0ed1e709414a35b"
  },
  {
    "url": "static/js/browse.dddc8831.chunk.js",
    "revision": "11836e7c1f76b9d9d10d18276d118aea"
  },
  {
    "url": "static/js/contact.45686634.chunk.js",
    "revision": "1df71e85ecdf9b1396a692a4480478e7"
  },
  {
    "url": "static/js/custom-search.7d279bba.chunk.js",
    "revision": "d11fecacc58fbfe8bbf8f939f479e49b"
  },
  {
    "url": "static/js/embed.ae52069b.chunk.js",
    "revision": "3b31663798b60591650643e4904fe83d"
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
    "url": "static/js/help.6c4ca3a2.chunk.js",
    "revision": "25bab81072fab4d5f61b384867bd986c"
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
    "url": "static/js/main.be60d6c6.js",
    "revision": "ad67b18d7c180a346a1cd078f5444293"
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
