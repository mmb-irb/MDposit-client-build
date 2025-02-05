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
    "revision": "cfc28f9511a2eed14ce5fcfbcf1fb2f2"
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
    "url": "static/css/3215.12cf8f68.chunk.css",
    "revision": "f6886fd76a600d496a1b194006168616"
  },
  {
    "url": "static/css/3259.7d616999.chunk.css",
    "revision": "bf8ecca04f4140955fb824de451af60e"
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
    "url": "static/css/3715.b9f1581e.chunk.css",
    "revision": "bb2c969d15e55b0a0338fd71119b3abd"
  },
  {
    "url": "static/css/3804.fc2f5751.chunk.css",
    "revision": "88848a4b4e9260143c717293d60b15f7"
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
    "url": "static/css/4778.bfd7735a.chunk.css",
    "revision": "957b97481eaf6867bd2e5bd917077de3"
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
    "url": "static/css/5096.dc55f04b.chunk.css",
    "revision": "0fed012e84622dec4018c9dc9d6532c9"
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
    "url": "static/css/5919.15526726.chunk.css",
    "revision": "1039ef580c773d6c24c521bcd5c2d8c4"
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
    "url": "static/css/7385.a2997bf5.chunk.css",
    "revision": "06668c9015456f040add884a31b7bf91"
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
    "url": "static/css/embed.2cea5d21.chunk.css",
    "revision": "2b31483ac6f20b032ee2a7a96acb3c52"
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
    "url": "static/css/viewer-with-controls.3dff3717.chunk.css",
    "revision": "48ab3c1bc67270d5726ee518d29e716d"
  },
  {
    "url": "static/js/1177.ce1ebfba.chunk.js",
    "revision": "2c2d661603487df471b96cadc14af7d2"
  },
  {
    "url": "static/js/1235.26eb3d19.chunk.js",
    "revision": "7b7a14abeac21b619efde69bb3be77cb"
  },
  {
    "url": "static/js/134.9eedc021.chunk.js",
    "revision": "b1038c2e35ed029e60614601faf99372"
  },
  {
    "url": "static/js/1502.4a720608.chunk.js",
    "revision": "9a29410e4230900d653b53873e4cf83d"
  },
  {
    "url": "static/js/1612.808cc143.chunk.js",
    "revision": "4550ce8abfa583b446a06b0246c61e2e"
  },
  {
    "url": "static/js/1772.4b414292.chunk.js",
    "revision": "49d26e5504d0f4dbbb20560f477cbf16"
  },
  {
    "url": "static/js/1814.b68c2a05.chunk.js",
    "revision": "91f77b2b7680043cbe961e93d2400a48"
  },
  {
    "url": "static/js/1993.68bbdc5e.chunk.js",
    "revision": "9f8890f9a979685d0fd40f23d575333b"
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
    "url": "static/js/2260.3fd26b56.chunk.js",
    "revision": "52852f1b7d697a3603415a8476f36262"
  },
  {
    "url": "static/js/2460.b580d705.chunk.js",
    "revision": "b55030a584ae232a8ca80240aad07383"
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
    "url": "static/js/2594.bdbeee26.chunk.js",
    "revision": "744f91647a3a39b029e63cec148489b2"
  },
  {
    "url": "static/js/2597.4a90cd8e.chunk.js",
    "revision": "df9b1b6e9eeb5c9467b8abed2e206f70"
  },
  {
    "url": "static/js/2599.21de7ebf.chunk.js",
    "revision": "bcb6f38e130811a370f96d37eef424c2"
  },
  {
    "url": "static/js/2615.406cea89.chunk.js",
    "revision": "acd02308cf9d2e6595e8ef829761e7b6"
  },
  {
    "url": "static/js/2822.49289901.chunk.js",
    "revision": "b0614684191a32a922b50cb5e211e0ed"
  },
  {
    "url": "static/js/2874.df6e0c15.chunk.js",
    "revision": "201521fbca0aced10f34a6ee4f92a10c"
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
    "url": "static/js/3171.f248397e.chunk.js",
    "revision": "ffe93bd8ff8b41a8edb7eb3c1de8504e"
  },
  {
    "url": "static/js/3173.5b0cca08.chunk.js",
    "revision": "1ba0cde48ea451aab58bf0d562131085"
  },
  {
    "url": "static/js/3215.50187149.chunk.js",
    "revision": "440595ea04007e8a1bf5ebd8c65a8e36"
  },
  {
    "url": "static/js/3259.d910aa97.chunk.js",
    "revision": "a8b28b9879ffc439fc3940805e296b4a"
  },
  {
    "url": "static/js/3283.4c4f736a.chunk.js",
    "revision": "a02534ae665cc262e7aada078ed033a6"
  },
  {
    "url": "static/js/3287.95488578.chunk.js",
    "revision": "8fe2f5d430ece9413195c045732d2dc1"
  },
  {
    "url": "static/js/3316.7a3b0eb9.chunk.js",
    "revision": "8fcc74d57e905af3310aeada79ab86e8"
  },
  {
    "url": "static/js/3653.4481314a.chunk.js",
    "revision": "f37101bad8107b85dc5129778d0bbb9c"
  },
  {
    "url": "static/js/3715.36206675.chunk.js",
    "revision": "3f669c4d067eb232ee38deaec7a1405a"
  },
  {
    "url": "static/js/3804.369a2bd1.chunk.js",
    "revision": "e7f01c8521897be3b38076cff74ceb36"
  },
  {
    "url": "static/js/3845.717f3e9e.chunk.js",
    "revision": "40767280de6ec3e1287d414167364719"
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
    "url": "static/js/4778.9e9e382c.chunk.js",
    "revision": "2d50519479be452648732229f2f6b9bd"
  },
  {
    "url": "static/js/4830.6db99033.chunk.js",
    "revision": "6c80425a4f93df59f8ae8f926a4e602f"
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
    "url": "static/js/5096.cdde39b9.chunk.js",
    "revision": "25a22d4a28ca7c028e5d2b791ecad31e"
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
    "url": "static/js/5236.2269ac62.chunk.js",
    "revision": "edff866330f1ceea934ef39086ebf237"
  },
  {
    "url": "static/js/5291.2136bb74.chunk.js",
    "revision": "c7853604183f4b941f70e13032772b86"
  },
  {
    "url": "static/js/5577.7beb4da8.chunk.js",
    "revision": "ed19ff42223bb78087d1010bac3aa2e0"
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
    "url": "static/js/5839.9d521bdf.chunk.js",
    "revision": "9c10b458ab5657d873f52e0b43d14f86"
  },
  {
    "url": "static/js/5851.cfed5faa.chunk.js",
    "revision": "243b7bd630b8643baf05486129fb11ed"
  },
  {
    "url": "static/js/5919.20def3dd.chunk.js",
    "revision": "148e3cee2e1fa1a139cad3fc195d6946"
  },
  {
    "url": "static/js/593.0ce26c25.chunk.js",
    "revision": "352c0de4e35781cd811ac2c835f8b0b5"
  },
  {
    "url": "static/js/6064.43f349d5.chunk.js",
    "revision": "27697490d11f59de3a0a28548cc8d916"
  },
  {
    "url": "static/js/6264.763c2691.chunk.js",
    "revision": "5dad76a28ee33366b31053ded95b2816"
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
    "url": "static/js/6618.dcb979da.chunk.js",
    "revision": "60ee56c9ba302114518ac4ba4a33f4b1"
  },
  {
    "url": "static/js/6886.a4999993.chunk.js",
    "revision": "e472f154a2728e7b1aed8e57c8df3bc5"
  },
  {
    "url": "static/js/7142.8052ce0d.chunk.js",
    "revision": "c6381146b073fd3712aef39283a1a555"
  },
  {
    "url": "static/js/7194.cf417b0b.chunk.js",
    "revision": "02fde4d0ef945819ead4b52b61914161"
  },
  {
    "url": "static/js/7197.27af3718.chunk.js",
    "revision": "b3dc9f1bbe679809488c6eb66deefbb0"
  },
  {
    "url": "static/js/7385.0dacf734.chunk.js",
    "revision": "e4d8c885e152b1dfe10cfd99d9bccd68"
  },
  {
    "url": "static/js/7389.bdd9b0ec.chunk.js",
    "revision": "ddec57fe733da5e3bdd1e9bbcb11c430"
  },
  {
    "url": "static/js/7415.cf2f9a34.chunk.js",
    "revision": "478910e93d53c9d58b349adb52d3919d"
  },
  {
    "url": "static/js/7689.16a9bae4.chunk.js",
    "revision": "38c4e3689ed8958ee1ab754796fbbcbc"
  },
  {
    "url": "static/js/7732.92a29441.chunk.js",
    "revision": "909feede31cde0f79bf02895c8f0dff9"
  },
  {
    "url": "static/js/7784.639d4fb2.chunk.js",
    "revision": "fb5b3b45ce0b6cae2e21317178a181d5"
  },
  {
    "url": "static/js/7803.7372d89c.chunk.js",
    "revision": "a70cdfdf5b385c019a418fd392e68622"
  },
  {
    "url": "static/js/7885.e69b7381.chunk.js",
    "revision": "abed3b6bdef5d4a30e6fd513a6526845"
  },
  {
    "url": "static/js/7955.647d8f75.chunk.js",
    "revision": "ba63e44a6f5d3dbdb8658733265044c1"
  },
  {
    "url": "static/js/8029.b9c11a25.chunk.js",
    "revision": "2744359634dbf44659592ed95d24332f"
  },
  {
    "url": "static/js/8095.df0c1f59.chunk.js",
    "revision": "4b19800a819f226c2cdd0bca1a39f3f2"
  },
  {
    "url": "static/js/8114.a1841391.chunk.js",
    "revision": "7ad619f64652aa47093551c84eee832d"
  },
  {
    "url": "static/js/8133.e510a471.chunk.js",
    "revision": "1080c888cc561f185e9cc0ceacc021a9"
  },
  {
    "url": "static/js/8217.c584f571.chunk.js",
    "revision": "ebedeaccd22012cc65551361070e9a62"
  },
  {
    "url": "static/js/8280.c3733cc9.chunk.js",
    "revision": "96ef5b4acfb20815341f327f2a0783c0"
  },
  {
    "url": "static/js/8333.59951816.chunk.js",
    "revision": "2bc2e2461fb2b7e87a7ad617ba1d2f53"
  },
  {
    "url": "static/js/8400.c292acd2.chunk.js",
    "revision": "68f065ed3526ef0a29a1fa8a55f4f43c"
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
    "url": "static/js/9070.0cf04bde.chunk.js",
    "revision": "c42cf1eff58d534931f6b8d89564b59a"
  },
  {
    "url": "static/js/9072.f029d37f.chunk.js",
    "revision": "149ac67054eb81e9eb050f585a208326"
  },
  {
    "url": "static/js/9256.02634d29.chunk.js",
    "revision": "5f2420b1afc09120927131c8df250110"
  },
  {
    "url": "static/js/9302.119b6bda.chunk.js",
    "revision": "755f0c6d9227e950b761322bbea6d3f6"
  },
  {
    "url": "static/js/9373.6aff6d06.chunk.js",
    "revision": "46cfb3fa40708e1710c0824420efaa99"
  },
  {
    "url": "static/js/9480.96689692.chunk.js",
    "revision": "41c592bc6bb20e856aae6c70759acf16"
  },
  {
    "url": "static/js/953.6370f65b.chunk.js",
    "revision": "5f11cdc767554ab9479ce2c03205b52c"
  },
  {
    "url": "static/js/9632.f1befce9.chunk.js",
    "revision": "4e7e25a2508034b51d7861675dade032"
  },
  {
    "url": "static/js/accession.6be12d29.chunk.js",
    "revision": "5316d0d046d28d0568dd1d3160ef1f2a"
  },
  {
    "url": "static/js/advanced-search.b6857131.chunk.js",
    "revision": "a896b85378c4339ee6d4f2abf47b77f1"
  },
  {
    "url": "static/js/browse.4e7335a7.chunk.js",
    "revision": "3ae21e8a6ba1cbee75a39fe0136e0627"
  },
  {
    "url": "static/js/contact.ec9100f5.chunk.js",
    "revision": "e9cf7977e6ba3d6d1d2f60512bd64092"
  },
  {
    "url": "static/js/custom-search.518ba0e6.chunk.js",
    "revision": "cca02ee445ec885eec31fb6b67903057"
  },
  {
    "url": "static/js/embed.fbb7d244.chunk.js",
    "revision": "016811245eff52fccdd68a2fe90104a5"
  },
  {
    "url": "static/js/footer.73e83dd7.chunk.js",
    "revision": "d0a06563cb8a17addb49aaf8602a0159"
  },
  {
    "url": "static/js/graph-msm.614f3f6e.chunk.js",
    "revision": "35e91458839961f5790577d2293c8382"
  },
  {
    "url": "static/js/graph.70273ab9.chunk.js",
    "revision": "591c99564f2f6500c450f97fa5cae5ad"
  },
  {
    "url": "static/js/help.9861c474.chunk.js",
    "revision": "96689a78054488f23e822ae1c4b8466a"
  },
  {
    "url": "static/js/home.1075901c.chunk.js",
    "revision": "2a5397d6577f4c804de1ddf66f18c61d"
  },
  {
    "url": "static/js/intersection-observer.e95f0f77.chunk.js",
    "revision": "cc2fe391bcb1ed4e666b9b61e9ea42c6"
  },
  {
    "url": "static/js/main.040a60ef.js",
    "revision": "d5c938012dbe154ca70b29effa808969"
  },
  {
    "url": "static/js/meta-analysis.3ec09dd6.chunk.js",
    "revision": "900880fb172d04c957c9bff7976b80d1"
  },
  {
    "url": "static/js/projections.cdc40f08.chunk.js",
    "revision": "ec10db8f422ad1d678b823ed0dba1710"
  },
  {
    "url": "static/js/protvista-coloured-sequence.6bd7c7be.chunk.js",
    "revision": "2be08d3b5e478a2dd81cb011f3ace9c8"
  },
  {
    "url": "static/js/protvista-interpro-track.2530b846.chunk.js",
    "revision": "98b58592ca462e01fc8692ab062f7a00"
  },
  {
    "url": "static/js/protvista-manager.d7b8799f.chunk.js",
    "revision": "2602e97534f517b1b638b0e40c77c4e7"
  },
  {
    "url": "static/js/protvista-navigation.f7ef863f.chunk.js",
    "revision": "5ebb01621276ab27ac30e2e07d0e8cf2"
  },
  {
    "url": "static/js/protvista-sequence.b7fa3cdd.chunk.js",
    "revision": "1989e16d756966257fdcd50e0cf7c19b"
  },
  {
    "url": "static/js/snack-bar-container.81c64d46.chunk.js",
    "revision": "c872eb0155213d92ca29c5b1ef5b3d5f"
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
