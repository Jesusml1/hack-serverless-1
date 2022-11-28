const response = require("../../../shared/response");

const handler = async (event) => {
  try {
    const lista = ["foo", "bar", "baz", "qux", "fred"];
    const { queryStringParameters, httpMethod } = event;
    if (httpMethod === "GET") {
      if (lista.find((e) => e === queryStringParameters.alias)) {
        return response({ payload: queryStringParameters.alias }, 200);
      }
      return response({ payload: "not found" }, 404);
    }
  } catch (error) {
    return response(error.toString(), 500);
  }
};

module.exports = { handler };
