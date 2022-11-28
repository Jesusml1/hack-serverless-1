const middy = require("@middy/core");
const httpJsonBodyParser = require("@middy/http-json-body-parser");
const response = require("../../../shared/response");

const handler = middy(async (event) => {
  try {
    const lista = ["foo", "bar", "baz", "qux", "fred"];
    const { body, httpMethod } = event;
    if (httpMethod === "GET") {
      if (lista.find((e) => e === body.alias)) {
        return response({ payload: body.alias }, 200);
      }
      return response({ payload: "not found" }, 404);
    }
  } catch (error) {
    return response(error.toString(), 500);
  }
});

handler.use(httpJsonBodyParser());

module.exports = { handler };
