/* eslint-disable no-dupe-keys */
/* eslint-disable @typescript-eslint/no-var-requires */
// next.config.js
require('dotenv').config();

module.exports = {
  exportTrailingSlash: true,
  // generateBuildId: async () => {
  //   // You can, for example, get the latest git commit hash here
  //   return 'my-build-id';
  // },
  exportPathMap: function() {
    // const totalRecipeNum = 1;
    // const totalVideoNum = 25;

    // const purchasePage = {};
    // for (let i = 1; i < totalRecipeNum + 1; i++) {
    //   Object.assign(purchasePage, {
    //     [`/recipe/purchase/${i}`]: {
    //       page: `/recipe/purchase/[id]`,
    //       query: { id: i },
    //     },
    //   });
    // }
    // console.log(purchasePage);

    // const paymentPage = {};
    // for (let i = 1; i < totalRecipeNum + 1; i++) {
    //   Object.assign(paymentPage, {
    //     [`/recipe/payment/${i}`]: {
    //       page: `/recipe/payment/[id]`,
    //       query: { id: i },
    //     },
    //   });
    // }
    // console.log(paymentPage);

    // const VideoPage = {};
    // for (let i = 1; i < totalVideoNum + 1; i++) {
    //   Object.assign(VideoPage, {
    //     [`/video/${i}`]: {
    //       page: `/video/[video]`,
    //       query: { video: i },
    //     },
    //   });
    // }
    // console.log(VideoPage);

    const defaultPath = {
      '/': { page: '/index' },
      '/login': { page: '/login/index' },
      // '/login': { page: '/login/index' },
      // '/login/signup': { page: '/login/signup' },
      // '/login/snscallback': { page: '/login/snscallback' },
      // '/login/navercallback': { page: '/login/navercallback' },
      // '/mypage': { page: '/mypage/index' },
      // '/support/privacyrule': { page: '/support/privacyrule' },
      // '/support/userule': { page: '/support/userule' },
      // '/support/refundrule': { page: '/support/refundrule' },
    };
    console.log(process.env.KakaoApiKey);
    console.log(process.env.NaverApiKey);
    console.log(process.env.FacebookApiKey);
    console.log(process.env.NaverCallbackUrl);
    return { ...defaultPath };
  },
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },

  publicRuntimeConfig: {
    baseURL: process.env.baseURL,
    KakaoApiKey: process.env.KakaoApiKey,
    NaverApiKey: process.env.NaverApiKey,
    FacebookApiKey: process.env.FacebookApiKey,
    NaverCallbackUrl: process.env.NaverCallbackUrl,
    LEVEL: process.env.LEVEL,
  },
};
