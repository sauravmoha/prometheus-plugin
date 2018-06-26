const _ = require("lodash");
const axios = require("axios");

let checkPOST = (baseURL, req) => {
  return axios.post(baseURL + req.route).then(response => {
    return response.status;
  });
};

let checkGET = (baseURL, req) => {
  return axios.get(baseURL + req.route, req.body).then(response => {
    return response.status;
  });
};

module.exports = options => {
  return {
    alertAllRoutes: data => {
      axios_list = [];

      let allReq = options.allRoutes.allReq;
      let baseURL = options.allRoutes.baseURL;
      _.forEach(allReq, req => {
        if (req.type === "GET") axios_list.push(checkGET(baseURL, req));
        else if (req.type === "POST") axios_list.push(checkPOST(baseURL, req));
      });

      return axios
        .all(axios_list)
        .then(function(response) {
          return new Promise((resolve, reject) => {
            resolve({ statusCode: 200 });
          });
        })
        .catch(function(error) {
          return new Promise((resolve, reject) => {
            resolve({ statusCode: 500 });
          });
        });
    }
  };
};
