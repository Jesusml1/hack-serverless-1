const middy = require("@middy/core");
const httpJsonBodyParser = require("@middy/http-json-body-parser");

const handler = middy(async (event) => {
  try {
    const { body, httpMethod } = event;
    if (httpMethod === "GET") {
      return {
        statusCode: 200,
        body: JSON.stringify(body),
      };
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
});

handler.use(httpJsonBodyParser());

module.exports = { handler };
