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
    "revision": "abfccabe6e0bdc4d3b238950419e3e48"
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
    "url": "static/css/3016.1257c0eb.chunk.css",
    "revision": "35765969d417f6b1165ccee758d0fc92"
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
    "url": "static/css/3283.84769dd3.chunk.css",
    "revision": "2fe22e906189d7035e78c6145f890619"
  },
  {
    "url": "static/css/3287.74e8f9b4.chunk.css",
    "revision": "207e4771a0f6c867ded33056aec8b96c"
  },
  {
    "url": "static/css/3715.90b52df1.chunk.css",
    "revision": "788791a088c88ff684a53176b49f8389"
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
    "url": "static/css/450.0b865e7a.chunk.css",
    "revision": "2c749ee41ed4113d598c3b8833362971"
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
    "url": "static/css/5851.94a1fcba.chunk.css",
    "revision": "cd2e7fb0bac062d9e15b18e197527f8d"
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
    "url": "static/css/854.efc834a5.chunk.css",
    "revision": "862482c893d40655e74378a6ff41c88f"
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
    "url": "static/css/9696.f351cc9a.chunk.css",
    "revision": "43e77c65ba6d410af9993caac75fff73"
  },
  {
    "url": "static/css/accession.a6eff833.chunk.css",
    "revision": "36aa4888d6ebd021b094d4f764d93adf"
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
    "url": "static/css/pointer.310b7170.chunk.css",
    "revision": "37eb37d5a870476a5db9a86fd93f0b64"
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
    "url": "static/js/1177.d84e4f0a.chunk.js",
    "revision": "9cb27028666ec68a90cf0fe7b6b17897"
  },
  {
    "url": "static/js/1181.af808c61.chunk.js",
    "revision": "169b1cb4dc14cfbcc21ab06c37c4b946"
  },
  {
    "url": "static/js/1190.e621f1e8.chunk.js",
    "revision": "1e82e51d21dfc49bcbd6c485747c64e4"
  },
  {
    "url": "static/js/1198.860e9878.chunk.js",
    "revision": "b45459029f5a0cd0eb2bc4c2215f83a6"
  },
  {
    "url": "static/js/126.f3d28446.chunk.js",
    "revision": "2ec57565dfac7dd0ccb0f357be695137"
  },
  {
    "url": "static/js/134.9eedc021.chunk.js",
    "revision": "b1038c2e35ed029e60614601faf99372"
  },
  {
    "url": "static/js/1502.87ad9d71.chunk.js",
    "revision": "a5b8bb0b22fdc12e7aef779325e5b1e0"
  },
  {
    "url": "static/js/1612.808cc143.chunk.js",
    "revision": "4550ce8abfa583b446a06b0246c61e2e"
  },
  {
    "url": "static/js/1772.d2e926e7.chunk.js",
    "revision": "fad4f2f7fe731c5432d20a6b3e0d29d2"
  },
  {
    "url": "static/js/1814.b68c2a05.chunk.js",
    "revision": "91f77b2b7680043cbe961e93d2400a48"
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
    "url": "static/js/2260.4cc796f2.chunk.js",
    "revision": "f7b8f205604047281d58a4b2937b1371"
  },
  {
    "url": "static/js/247.beff8c26.chunk.js",
    "revision": "97901100d2c2d914e5be71df953d1ed5"
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
    "url": "static/js/2615.93afbe8a.chunk.js",
    "revision": "38489f5dc66ae2073e91b9b83a388b7b"
  },
  {
    "url": "static/js/2623.0bf3c774.chunk.js",
    "revision": "0d9253175a55106afad1c4fa16ac7ece"
  },
  {
    "url": "static/js/2633.40e6d3e5.chunk.js",
    "revision": "83cce7842c7469d46454192a6d4b8bbb"
  },
  {
    "url": "static/js/2780.9c9ebf7a.chunk.js",
    "revision": "d880f61e7e53de26fd4cf7bec6201e53"
  },
  {
    "url": "static/js/2822.50c423d0.chunk.js",
    "revision": "8e581084edae88e911f1ad528ec60ad2"
  },
  {
    "url": "static/js/2881.fbf2d418.chunk.js",
    "revision": "89f5d547738245eb7f76dbc07a7216ba"
  },
  {
    "url": "static/js/3016.0fa274db.chunk.js",
    "revision": "816cddf523f38df8cb98e1973a0c26ba"
  },
  {
    "url": "static/js/3171.7459b3b9.chunk.js",
    "revision": "170673947015d10384b2d6ca4b2a9b5b"
  },
  {
    "url": "static/js/3173.3df068aa.chunk.js",
    "revision": "3131c2de189294a7eb578f523b583ada"
  },
  {
    "url": "static/js/3215.4ce28a55.chunk.js",
    "revision": "c8e36fb6ddeafff7ec27bc357234ed70"
  },
  {
    "url": "static/js/3259.98747d27.chunk.js",
    "revision": "66d70e4dafe1e223c41c83999f24ff39"
  },
  {
    "url": "static/js/3283.a283870c.chunk.js",
    "revision": "4c2d90e7b1782daea0a5772ec4cc564f"
  },
  {
    "url": "static/js/3287.e6f4115c.chunk.js",
    "revision": "ebb779ce3936403430660a6ffaaade95"
  },
  {
    "url": "static/js/335.a8d965c7.chunk.js",
    "revision": "7120933a10e0360bd134f283d00dae12"
  },
  {
    "url": "static/js/3471.4380cd1d.chunk.js",
    "revision": "e23809843e713ada95d28f23459f3e43"
  },
  {
    "url": "static/js/3715.002f98f3.chunk.js",
    "revision": "9f9ee2df278e7eba8d4bcee4d6684e1c"
  },
  {
    "url": "static/js/375.b1088ca2.chunk.js",
    "revision": "9332a2b42f50bf221366e86aacfb9b8c"
  },
  {
    "url": "static/js/3753.7838ace0.chunk.js",
    "revision": "460503afe54258da6eea6bc217bd8ca8"
  },
  {
    "url": "static/js/3804.68c1fae0.chunk.js",
    "revision": "00d4129b612d636853bb4590f7a6445d"
  },
  {
    "url": "static/js/3845.47d44140.chunk.js",
    "revision": "fccc35df665389e61dcbc0f802e958f1"
  },
  {
    "url": "static/js/3960.91ffe28f.chunk.js",
    "revision": "5727de0be89c885d2698345f5bd07f63"
  },
  {
    "url": "static/js/3966.d8cd3bf2.chunk.js",
    "revision": "39aed7cde30c8444e78eeaf4c61f8176"
  },
  {
    "url": "static/js/3969.e7f0016d.chunk.js",
    "revision": "f68f9150b30fbb316c611407576ad1e6"
  },
  {
    "url": "static/js/4172.3c4af4a3.chunk.js",
    "revision": "64385f46e69d17e3b86d7a5e91c8402f"
  },
  {
    "url": "static/js/4313.dd88efdb.chunk.js",
    "revision": "2c97473dcf0b8119d765efe2156061bd"
  },
  {
    "url": "static/js/450.a60429a4.chunk.js",
    "revision": "fe8415bb8a015e5ed99515826fbc87fb"
  },
  {
    "url": "static/js/4778.b4f1a0e7.chunk.js",
    "revision": "cadb83aa3e047be207bf78b725d30a83"
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
    "url": "static/js/5096.21f9f119.chunk.js",
    "revision": "0eca50e6f973c625c36ea8f2d0667784"
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
    "url": "static/js/5236.39e0034b.chunk.js",
    "revision": "efc39759357c6b2316163681104e7e7c"
  },
  {
    "url": "static/js/5291.b9637d76.chunk.js",
    "revision": "2a5d533cf6e02005ed9ddf408765e7a2"
  },
  {
    "url": "static/js/5471.1ca9bca5.chunk.js",
    "revision": "aa4057129d5013be7f311e78e271d5ad"
  },
  {
    "url": "static/js/5633.a4ae6948.chunk.js",
    "revision": "11e0b39bc04ebb62219aaae38d9acd1e"
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
    "url": "static/js/5839.d6a8a1df.chunk.js",
    "revision": "1fada319affe59a725cb2b25a488e062"
  },
  {
    "url": "static/js/5851.fdd722ec.chunk.js",
    "revision": "fcff66408fcaa80d1cae20851b386a51"
  },
  {
    "url": "static/js/5919.a5dcbd02.chunk.js",
    "revision": "45cd6d4e07c3f17fc47a2dcb56f5e2ae"
  },
  {
    "url": "static/js/5952.462f8e9d.chunk.js",
    "revision": "14bcbb8b0ddbbc171e260cbfb7285e5e"
  },
  {
    "url": "static/js/6264.aeb44db3.chunk.js",
    "revision": "3f8bc1d08be49b66570aba41f8ae60a7"
  },
  {
    "url": "static/js/6344.db5b14b9.chunk.js",
    "revision": "bf95575041b2e16d4510c47846792e63"
  },
  {
    "url": "static/js/6618.23142eb2.chunk.js",
    "revision": "a1e50fded590db6115bd9e3328fa5662"
  },
  {
    "url": "static/js/6899.171ef1bc.chunk.js",
    "revision": "f2832f52ff7b4a0b02074d01aae7aa3a"
  },
  {
    "url": "static/js/7197.34471672.chunk.js",
    "revision": "c113753e0e9946599a39ad344392860d"
  },
  {
    "url": "static/js/7385.34fde907.chunk.js",
    "revision": "95e50493e630e528e2bc2dde6150e23a"
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
    "url": "static/js/7784.4e65a905.chunk.js",
    "revision": "8e58d33a8847066e1c687ebabac12f62"
  },
  {
    "url": "static/js/7803.5c0ec8a9.chunk.js",
    "revision": "4e85e819a0e34cd38547dfb656323abe"
  },
  {
    "url": "static/js/7901.b43f16ba.chunk.js",
    "revision": "b1e732b9f1a1eca73c71219c38bd84fc"
  },
  {
    "url": "static/js/7955.1fc169ad.chunk.js",
    "revision": "75b8357b3a61fe853a257242335fff98"
  },
  {
    "url": "static/js/8029.a49f63e0.chunk.js",
    "revision": "8ec2c3cbc7d541274599767551414697"
  },
  {
    "url": "static/js/8095.6822c982.chunk.js",
    "revision": "1aa1af63c897723c1d96754682272dca"
  },
  {
    "url": "static/js/8133.e510a471.chunk.js",
    "revision": "1080c888cc561f185e9cc0ceacc021a9"
  },
  {
    "url": "static/js/8217.4a1608a5.chunk.js",
    "revision": "0319b016fb2a5eed570ece70b4aa8aeb"
  },
  {
    "url": "static/js/8333.7bf3334c.chunk.js",
    "revision": "8d9fd48c5863830b192a027773693085"
  },
  {
    "url": "static/js/8418.3ab8b800.chunk.js",
    "revision": "f596788febec7c5daf190744f82e2364"
  },
  {
    "url": "static/js/8461.6527283c.chunk.js",
    "revision": "350b7327d1e51f3f7605660aa78fc941"
  },
  {
    "url": "static/js/854.467aca11.chunk.js",
    "revision": "29dec1ef6d3dbda5af86b4f37c4bbe02"
  },
  {
    "url": "static/js/860.c88c2fe7.chunk.js",
    "revision": "e54d6498aa8a10e22ee4b7bd7ce6d6d0"
  },
  {
    "url": "static/js/8671.bb1a020e.chunk.js",
    "revision": "3562dd98a7a39ea2cb44cb05f5603463"
  },
  {
    "url": "static/js/8677.64cedb1e.chunk.js",
    "revision": "5441fbd5fe36ce0391d7d026193bb65a"
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
    "url": "static/js/8964.6f5a634e.chunk.js",
    "revision": "8bd4d3d8527e66f1c8627f5748a3ab5c"
  },
  {
    "url": "static/js/9026.57b97acb.chunk.js",
    "revision": "6410b8433dbed81480c6e2e98d68f1f0"
  },
  {
    "url": "static/js/9070.07bd8fd9.chunk.js",
    "revision": "941fc5dbe6f4fba4515ee8cc7609645d"
  },
  {
    "url": "static/js/9189.f7f9c24f.chunk.js",
    "revision": "2e401eb1f1e47d68a7ec3df88ce93330"
  },
  {
    "url": "static/js/9222.a55e6a73.chunk.js",
    "revision": "42c495d032565483ee9453b4ca5061db"
  },
  {
    "url": "static/js/9280.31b08f09.chunk.js",
    "revision": "ed8c4e2f84ef199f4c68a1bde2c93152"
  },
  {
    "url": "static/js/9302.1a389557.chunk.js",
    "revision": "650938e57dad9ff893e1fdb066a0e00d"
  },
  {
    "url": "static/js/9373.6aff6d06.chunk.js",
    "revision": "46cfb3fa40708e1710c0824420efaa99"
  },
  {
    "url": "static/js/942.a38ff42d.chunk.js",
    "revision": "04102690f380f100ba530a9066b52079"
  },
  {
    "url": "static/js/9480.fe91760f.chunk.js",
    "revision": "c4ab895dc202b40be5d2637b4e7d3131"
  },
  {
    "url": "static/js/953.201de712.chunk.js",
    "revision": "7fb3a29e35611d372cc92976bf4bea8d"
  },
  {
    "url": "static/js/9632.038cfd2f.chunk.js",
    "revision": "28875ffd165d59579c17bceca928804f"
  },
  {
    "url": "static/js/9696.b55b1540.chunk.js",
    "revision": "29475247329d94ceba1739379beb99d6"
  },
  {
    "url": "static/js/accession.ed01a0ae.chunk.js",
    "revision": "c227228e3d7e3dad1ecd34880a5dc60f"
  },
  {
    "url": "static/js/advanced-search.2d1a8d50.chunk.js",
    "revision": "60f89cc020951498faef804d10f89389"
  },
  {
    "url": "static/js/browse.aa2b6fe0.chunk.js",
    "revision": "cd3eb4008a852523e12a700ba6d11eca"
  },
  {
    "url": "static/js/contact.cc3cc21b.chunk.js",
    "revision": "dd38007a440c3e499290f43c331f4eb5"
  },
  {
    "url": "static/js/embed.9ad922e1.chunk.js",
    "revision": "b08d63b1157340c6d8521bf6738819f2"
  },
  {
    "url": "static/js/footer.a45d0247.chunk.js",
    "revision": "cf8cbe44d22d73f45a9c5d5a256f5de0"
  },
  {
    "url": "static/js/graph-msm.56df0df5.chunk.js",
    "revision": "0eacdd458edc6ed6c423e189238ed45a"
  },
  {
    "url": "static/js/graph.58b8e5e4.chunk.js",
    "revision": "78eb486c5b50a95d01a79eb5e4311cf0"
  },
  {
    "url": "static/js/help.33346e91.chunk.js",
    "revision": "2b6320815ea9662ef2172f9625f529ac"
  },
  {
    "url": "static/js/home.eaebc51b.chunk.js",
    "revision": "0b89820cedb56a47a6eeeb9a79f38957"
  },
  {
    "url": "static/js/intersection-observer.18397bfb.chunk.js",
    "revision": "c4894e44e6b6dac08e55b7febf14ad94"
  },
  {
    "url": "static/js/main.0fe42c75.js",
    "revision": "2368a56869323c0333186e4262b8146d"
  },
  {
    "url": "static/js/meta-analysis.b29ff1e5.chunk.js",
    "revision": "04b6a6051e5b9e877b0002f29aa2d760"
  },
  {
    "url": "static/js/pointer.732ee731.chunk.js",
    "revision": "42051622facb232724d422e9330eca36"
  },
  {
    "url": "static/js/projections.55e27ec4.chunk.js",
    "revision": "4f22fdc3f5b79f1eb05384fe7e82ec07"
  },
  {
    "url": "static/js/protvista-coloured-sequence.36d46402.chunk.js",
    "revision": "01badb147eae8b971cbff42c4137c01f"
  },
  {
    "url": "static/js/protvista-interpro-track.3afd4716.chunk.js",
    "revision": "b18387e2f64db92a24000ff0ec44a42a"
  },
  {
    "url": "static/js/protvista-manager.df37baf9.chunk.js",
    "revision": "7c3f63cf45e04d997f2fa5e945c0f5f5"
  },
  {
    "url": "static/js/protvista-navigation.492e1f2e.chunk.js",
    "revision": "9832c700b1e4e51349b48708e2e82eca"
  },
  {
    "url": "static/js/protvista-sequence.452eefb9.chunk.js",
    "revision": "7e7ddcc27b4c5c96fd5ddb284d9e16d3"
  },
  {
    "url": "static/js/snack-bar-container.f88b5fca.chunk.js",
    "revision": "5f994ba95e4d18c1b5bb973dbb998ece"
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
