'use strict';

/**
 * article router.
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;
//
// module.exports = createCoreRouter('api::article.article');

const { createCoreRouter } = require("@strapi/strapi").factories;

const defaultRouter = createCoreRouter("api::article.article");

const customRouter = (innerRouter, extraRoutes = []) => {
  let routes;

  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes.concat(extraRoutes);
      return routes;
    },
  };
};

const myExtraRoutes = [];

const myOverideRoute = [
  {
    method: "GET",
    path: "/article/example_action",
    handler: "article.exampleAction",
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: "GET",
    path: "/article/example_action2",
    handler: "article.exampleAction2",
          config: {
        policies: [],
        middlewares: [],
      },
  },
];

module.exports = customRouter(defaultRouter, myOverideRoute, myExtraRoutes);

// module.exports = {
//   routes: [
//     {
//       method: "GET",
//       path: "/test",
//       handler: "article.exampleAction",
//       config: {
//         policies: [],
//         middlewares: [],
//       },
//     },
//     {
//       method: "GET",
//       path: "/article/example_action2",
//       handler: "article.exampleAction2",
//       config: {
//         policies: [],
//         middlewares: [],
//       },
//     },
//
//   ],
// };
