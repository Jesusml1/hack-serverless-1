const middy = require("@middy/core");
const httpJsonBodyParser = require("@middy/http-json-body-parser");

const handler = middy(async (event) => {
  try {
    const lista = ["foo", "bar", "baz", "qux", "fred"];
    const { body, httpMethod } = event;
    if (httpMethod === "GET") {
      if (lista.find((e) => e === body.alias)) {
        return {
          statusCode: 200,
          body: JSON.stringify({ payload: body.alias }),
        };
      }
      return {
        statusCode: 404,
        body: JSON.stringify({ payload: "not found" }),
      };
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
});

handler.use(httpJsonBodyParser());

module.exports = { handler };
