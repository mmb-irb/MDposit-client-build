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
    "revision": "79b9f686098a0f3e0b91dba2489b9b36"
  },
  {
    "url": "static/css/1182.b3216727.chunk.css",
    "revision": "e0b2dc76e0446a208cb7ef83d90908c4"
  },
  {
    "url": "static/css/1612.68cff4da.chunk.css",
    "revision": "a0150f283bcf125a8a5ec450f66b90d8"
  },
  {
    "url": "static/css/1737.cb3aa53b.chunk.css",
    "revision": "3d96488b3f4bf9bfdb800607bab1bde4"
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
    "url": "static/css/3259.94e6ce7a.chunk.css",
    "revision": "aa7038a605c1cd4a41b2d4b7cd49ee11"
  },
  {
    "url": "static/css/3283.34c0888a.chunk.css",
    "revision": "00f9aded57647ba3a767f94c04e53bab"
  },
  {
    "url": "static/css/355.77a4bbfc.chunk.css",
    "revision": "97c514502bf02e63f4abfac0ae408440"
  },
  {
    "url": "static/css/3715.d86d36fd.chunk.css",
    "revision": "7a3f28a8189d486791a6dd1363d3cf3c"
  },
  {
    "url": "static/css/395.cfac502d.chunk.css",
    "revision": "f471a1380119d174d8dc1208d890d636"
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
    "url": "static/css/4963.007a41a1.chunk.css",
    "revision": "45e907444b66f868dde0a99dd945fbc8"
  },
  {
    "url": "static/css/4974.8a406f28.chunk.css",
    "revision": "1c6f939de1ca8f9ad4eac63f6bfcd8ce"
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
    "url": "static/css/5676.03d256ed.chunk.css",
    "revision": "7cbbe22d8d85a99e37bc07d9fd288fc9"
  },
  {
    "url": "static/css/5709.f28160ab.chunk.css",
    "revision": "f31f4f549a6a3ebbc6ab3c1b87891ab8"
  },
  {
    "url": "static/css/5919.5c6658e3.chunk.css",
    "revision": "a171b5c09cb1e5b493941c103059b759"
  },
  {
    "url": "static/css/6143.8483e039.chunk.css",
    "revision": "5839d7cb9c462e4666a7bc0acb767d4e"
  },
  {
    "url": "static/css/6344.c9055c2b.chunk.css",
    "revision": "0850be905c46402a5aa99b755343bf27"
  },
  {
    "url": "static/css/6581.934e84cd.chunk.css",
    "revision": "749abd1d0c428e46aea3b99ab5e97600"
  },
  {
    "url": "static/css/6873.215dd6ab.chunk.css",
    "revision": "8cab8318a235002decf9003c6199d35f"
  },
  {
    "url": "static/css/7243.30f29f22.chunk.css",
    "revision": "a078af2dda576fdcab402df8ea725228"
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
    "url": "static/css/9266.007a41a1.chunk.css",
    "revision": "ba492909e149a916e0c392aab5bbf7eb"
  },
  {
    "url": "static/css/9373.b5834da8.chunk.css",
    "revision": "b668d287649f2dd5b3a47c18d99cb1cb"
  },
  {
    "url": "static/css/9385.bab6dedd.chunk.css",
    "revision": "c68dc1927049e28ef5009bd579c8ba6f"
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
    "url": "static/css/9867.0678a1f4.chunk.css",
    "revision": "d48f342fc3a55ef3d1d0f7e9cc15a1ad"
  },
  {
    "url": "static/css/9909.beb96967.chunk.css",
    "revision": "abb6121da167700fccdb2d3dea03f4ad"
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
    "url": "static/js/1136.ae87392d.chunk.js",
    "revision": "bff06439e71cde206d73121f9593c3bc"
  },
  {
    "url": "static/js/1177.ce1ebfba.chunk.js",
    "revision": "2c2d661603487df471b96cadc14af7d2"
  },
  {
    "url": "static/js/1235.3f9b216d.chunk.js",
    "revision": "77db1e9bad8fdc73caf51d5135de6d37"
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
    "url": "static/js/1737.2431a8ec.chunk.js",
    "revision": "680b8d0585c615bbd5156eaf56dcbaa7"
  },
  {
    "url": "static/js/1772.dbc406ef.chunk.js",
    "revision": "76e68dc4c628a705daf42ab7ad7c78ca"
  },
  {
    "url": "static/js/1814.b68c2a05.chunk.js",
    "revision": "91f77b2b7680043cbe961e93d2400a48"
  },
  {
    "url": "static/js/1993.21165c72.chunk.js",
    "revision": "dfb8820c8aecfa38e3789da52dbe0bc4"
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
    "url": "static/js/2260.5855a7e5.chunk.js",
    "revision": "58970035e147adf5ad6ea8ba676b964d"
  },
  {
    "url": "static/js/2276.01a3c429.chunk.js",
    "revision": "22eb9cd07320ca0aade92534d7682b1f"
  },
  {
    "url": "static/js/2460.f3e0306b.chunk.js",
    "revision": "0a6893094f1e69ba9c4c925ebab4f7c8"
  },
  {
    "url": "static/js/2527.02b2f1ef.chunk.js",
    "revision": "1cc1c9e77c6de19daf95c4c4d5663b8e"
  },
  {
    "url": "static/js/2577.a934014e.chunk.js",
    "revision": "9878edc35009398d8f20e74da305528f"
  },
  {
    "url": "static/js/2594.3b3abb04.chunk.js",
    "revision": "f915f942e3d2bf02f1a6fd6017f5885d"
  },
  {
    "url": "static/js/2597.35abe012.chunk.js",
    "revision": "a433aae14a11f957c7f4390c3e777b3b"
  },
  {
    "url": "static/js/2599.bb5e7840.chunk.js",
    "revision": "2c3eb876daadb9d04bdc5a344abf1ca7"
  },
  {
    "url": "static/js/2615.86f7e518.chunk.js",
    "revision": "13058c0ae3856d0d431c0a0f1e54a639"
  },
  {
    "url": "static/js/2822.37a3ea35.chunk.js",
    "revision": "d71b2543f8eee0e6dbc1558f20ce92ca"
  },
  {
    "url": "static/js/2874.68adf914.chunk.js",
    "revision": "e48499446189c356578330e18b1397de"
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
    "url": "static/js/3171.56910c92.chunk.js",
    "revision": "472587d3dba401c2b956238601fc613c"
  },
  {
    "url": "static/js/3173.e4876ea0.chunk.js",
    "revision": "3297e556d812bf7f2fd1726e34f40739"
  },
  {
    "url": "static/js/3259.b5a49e8b.chunk.js",
    "revision": "eb420945d12328adaa328110af249ab4"
  },
  {
    "url": "static/js/3283.4c4f736a.chunk.js",
    "revision": "a02534ae665cc262e7aada078ed033a6"
  },
  {
    "url": "static/js/3316.c14c335a.chunk.js",
    "revision": "f0d8806e9d8514fb0dd773e32004eeac"
  },
  {
    "url": "static/js/3653.3bd060ac.chunk.js",
    "revision": "00b9c0b29817ed855fbe870b5a6a92e0"
  },
  {
    "url": "static/js/3715.c6d0d59f.chunk.js",
    "revision": "a99191fc1449611bee3650940b240a8c"
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
    "url": "static/js/4830.097737ac.chunk.js",
    "revision": "347634bbd4bb27e170e5977ecfe61a48"
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
    "url": "static/js/5236.748331da.chunk.js",
    "revision": "070774cd10623dbbc8adce306d1a8924"
  },
  {
    "url": "static/js/5291.7756ef79.chunk.js",
    "revision": "b007d5fb1a530249a883ec22dcdf106a"
  },
  {
    "url": "static/js/5577.933840b3.chunk.js",
    "revision": "3e492bb990891a7b255b96dd974cc1c7"
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
    "url": "static/js/5839.a21898cf.chunk.js",
    "revision": "309e098fc263585d407de553f69dec60"
  },
  {
    "url": "static/js/5851.a021f02d.chunk.js",
    "revision": "392dee21c2da0d39ad0d7b85a00f1c9b"
  },
  {
    "url": "static/js/5919.b64fa10c.chunk.js",
    "revision": "e4cc0c66a282a7e0648339cffc33bd88"
  },
  {
    "url": "static/js/593.f60e62f1.chunk.js",
    "revision": "aa118ae14c230ab09f255b2072bf603f"
  },
  {
    "url": "static/js/6190.0a48f712.chunk.js",
    "revision": "742609c235b0891b9a6b975bbfdba0e4"
  },
  {
    "url": "static/js/6264.10e7e620.chunk.js",
    "revision": "16948b4a492ff9a2eb2669c1c668c1a4"
  },
  {
    "url": "static/js/6277.55f6ed93.chunk.js",
    "revision": "c472fcbf4cdf7545f61906044beb206d"
  },
  {
    "url": "static/js/6344.db5b14b9.chunk.js",
    "revision": "bf95575041b2e16d4510c47846792e63"
  },
  {
    "url": "static/js/6618.5c390c16.chunk.js",
    "revision": "a1aea43e28fc0615d8dfc3d3fb3abbc5"
  },
  {
    "url": "static/js/6886.ce9f82ea.chunk.js",
    "revision": "94d6abc60178b516c2d4f854c9658896"
  },
  {
    "url": "static/js/7142.32099071.chunk.js",
    "revision": "4f7bc00a41a7bbca53c36af0b79d8151"
  },
  {
    "url": "static/js/7194.e6e875c7.chunk.js",
    "revision": "7fa0cc15849cc8d3df9b7faba04d0ddb"
  },
  {
    "url": "static/js/7197.bcb6787f.chunk.js",
    "revision": "87224ec1501063e30bb546d2d8ec68bc"
  },
  {
    "url": "static/js/7385.deca6c60.chunk.js",
    "revision": "1c05167ffb48432c094df57f55f566e9"
  },
  {
    "url": "static/js/7389.bdd9b0ec.chunk.js",
    "revision": "ddec57fe733da5e3bdd1e9bbcb11c430"
  },
  {
    "url": "static/js/7415.c094b16a.chunk.js",
    "revision": "c52886cd02f7fd21c67ecefaf5422403"
  },
  {
    "url": "static/js/7526.151bd7e3.chunk.js",
    "revision": "2b279407136a0c492081c4ecbababbe3"
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
    "url": "static/js/7784.b51149e7.chunk.js",
    "revision": "a37a4a748e1815ea228a406f08b33d4f"
  },
  {
    "url": "static/js/7803.c8a73bd2.chunk.js",
    "revision": "5c77a65de755c056ec2b73456f21be79"
  },
  {
    "url": "static/js/7922.9a800d8f.chunk.js",
    "revision": "448e24a3bd68b7482428720c147aba7f"
  },
  {
    "url": "static/js/7955.647d8f75.chunk.js",
    "revision": "ba63e44a6f5d3dbdb8658733265044c1"
  },
  {
    "url": "static/js/8095.0cac5321.chunk.js",
    "revision": "f05d6e8f5f70612864852e0aff56e81d"
  },
  {
    "url": "static/js/8133.e510a471.chunk.js",
    "revision": "1080c888cc561f185e9cc0ceacc021a9"
  },
  {
    "url": "static/js/8217.ae62e1cf.chunk.js",
    "revision": "d476f90fe0bfe87803e0cda26f513c4b"
  },
  {
    "url": "static/js/8280.c3733cc9.chunk.js",
    "revision": "96ef5b4acfb20815341f327f2a0783c0"
  },
  {
    "url": "static/js/8333.5719c4f9.chunk.js",
    "revision": "e9cb6b5ebd5848ccad479d9f56b54616"
  },
  {
    "url": "static/js/8400.f1c70bed.chunk.js",
    "revision": "9bdd50dd3125118607c0a58b46d3c6c2"
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
    "url": "static/js/9070.37d94ce3.chunk.js",
    "revision": "b2cd5fd1ad542599cf81ddd3e4461b2b"
  },
  {
    "url": "static/js/9072.45e20d4f.chunk.js",
    "revision": "7de5628732231c870e0342628e151b0b"
  },
  {
    "url": "static/js/9256.8f81dd3c.chunk.js",
    "revision": "fd39e42a8d1f6435bfbd70780884498d"
  },
  {
    "url": "static/js/9266.90df021e.chunk.js",
    "revision": "04eb1862f91ea6f3c3c5471f7037d75a"
  },
  {
    "url": "static/js/9302.b23e9f73.chunk.js",
    "revision": "1665dc646e7366030d834ae304ce3fc1"
  },
  {
    "url": "static/js/9373.6aff6d06.chunk.js",
    "revision": "46cfb3fa40708e1710c0824420efaa99"
  },
  {
    "url": "static/js/9480.1330dac6.chunk.js",
    "revision": "ab8eaacc49f76d80187723564d71b30c"
  },
  {
    "url": "static/js/9501.819c7280.chunk.js",
    "revision": "ccf18c85bffc5b1335e3488e6e76667c"
  },
  {
    "url": "static/js/953.9507cbfb.chunk.js",
    "revision": "770a0b1914975bb029bd46b9c37301ba"
  },
  {
    "url": "static/js/9632.79a16ed3.chunk.js",
    "revision": "dd700e13ee212656932764f91448a1f6"
  },
  {
    "url": "static/js/accession.226f40fd.chunk.js",
    "revision": "a55763132d5d1c0d117632d5a036eabd"
  },
  {
    "url": "static/js/advanced-search.fcbe64b5.chunk.js",
    "revision": "2bf7f891e87d538fb1c113a99d32916d"
  },
  {
    "url": "static/js/browse.dddc8831.chunk.js",
    "revision": "11836e7c1f76b9d9d10d18276d118aea"
  },
  {
    "url": "static/js/contact.59267d4a.chunk.js",
    "revision": "3ff253796adc8487b3ea673dbd5219a3"
  },
  {
    "url": "static/js/custom-search.3bcc939e.chunk.js",
    "revision": "aa9feb82a6039cf461f72ef1902ae192"
  },
  {
    "url": "static/js/embed.829bc50c.chunk.js",
    "revision": "38d190df7b9a79b3c270c91f77ba98a9"
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
    "url": "static/js/graph.d2689dce.chunk.js",
    "revision": "59baa92d9c42be2afbae9f4963af1eb8"
  },
  {
    "url": "static/js/help.28c2d627.chunk.js",
    "revision": "05970eb15b0852beeded949ec177cb4f"
  },
  {
    "url": "static/js/home.cb65de5b.chunk.js",
    "revision": "794de786f2cf2814612b73d2aa61ed88"
  },
  {
    "url": "static/js/intersection-observer.e95f0f77.chunk.js",
    "revision": "cc2fe391bcb1ed4e666b9b61e9ea42c6"
  },
  {
    "url": "static/js/main.adb0e1ad.js",
    "revision": "e58a5d9c459052492279dc2551beb14b"
  },
  {
    "url": "static/js/meta-analysis.d0c0f7ae.chunk.js",
    "revision": "071b836908cb67bbb846b863c20ae3cd"
  },
  {
    "url": "static/js/projections.805512e6.chunk.js",
    "revision": "15ee63eab7ca13fd8320e988df58ef57"
  },
  {
    "url": "static/js/protvista-coloured-sequence.21d379be.chunk.js",
    "revision": "4f4a19858d3f533a678fedf362f5d678"
  },
  {
    "url": "static/js/protvista-interpro-track.6ef8c47f.chunk.js",
    "revision": "a2c671138f9b2df1f27641012ba155b8"
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
    "url": "static/js/snack-bar-container.2e8621d4.chunk.js",
    "revision": "81a8c1afc908e2a889d2d73f8c239dfb"
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
