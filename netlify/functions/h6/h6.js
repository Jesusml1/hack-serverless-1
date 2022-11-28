const response = require("../../../shared/response");

const handler = async (event) => {
  try {
    const httpMethod = event.httpMethod;
    let bodyResponse = null;
    switch (httpMethod) {
      case "GET":
        bodyResponse = { method: "GET", content: "get" };
        break;
      case "POST":
        bodyResponse = { method: "POST", content: "post" };
        break;
      case "PUT":
        bodyResponse = { method: "PUT", content: "put" };
        break;
      case "DELETE":
        bodyResponse = { method: "DELETE", content: "delete" };
        break;
    }
    if (bodyResponse) {
      return response(bodyResponse, 200);
    }
    return response({}, 405);
  } catch (error) {
    return response(error.toString(), 500);
  }
};

module.exports = { handler };
