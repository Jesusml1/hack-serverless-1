const response = require("../../../shared/response");
const middy = require("@middy/core");
const httpJsonBodyParser = require("@middy/http-json-body-parser");

const handler = middy(async (event) => {
  try {
    const { body, httpMethod } = event;
    if (httpMethod === "GET") {
      return response(body, 200);
    }
  } catch (error) {
    return response(error.toString(), 500);
  }
});

handler.use(httpJsonBodyParser());

module.exports = { handler };
