module.exports = options => {
  const alertModels = require("./models")(options);

  return {
    checkAllRoutes: function(request, h) {
      request.log("info", `Begin handling request on ${request.url.pathname}`);
      try {
        return alertModels.alertAllRoutes(request.query).then(result => {
          request.log("info", "Successful server response");
          return result;
        });
      } catch (err) {
        request.log("error", err);
      }
    }
  };
};
