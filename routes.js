"use strict";

module.exports = options => {
  const alertApi = require("./api")(options);
  return [
    {
      method: "GET",
      path: "/prometheus-testing",
      handler: alertApi.checkAllRoutes,
      options: {
        description: "Checks all possible routes and returns 200 if all OK",
        tags: ["api"]
      }
    }
  ];
};
