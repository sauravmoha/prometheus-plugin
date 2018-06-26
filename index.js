const alert = {
  name: "alert",
  register: async function(server, options) {
    try {
      server.route(require("./routes")(options));
    } catch (e) {
      server.log("error", "Unexpected Error in Alerting");
      server.log("error", e);
    }
  }
};

module.exports = alert;
