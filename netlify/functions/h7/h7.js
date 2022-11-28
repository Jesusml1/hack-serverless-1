const response = require("../../../shared/response");

const handler = async (event) => {
  try {
    const { queryStringParameters, httpMethod } = event;
    if (httpMethod === "GET") {
      return response(queryStringParameters, 200);
    }
  } catch (error) {
    return response(error.toString(), 500);
  }
};

module.exports = { handler };
