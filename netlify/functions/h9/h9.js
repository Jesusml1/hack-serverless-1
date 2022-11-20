const handler = async (event) => {
  try {
    const lista = ["foo", "bar", "baz", "qux", "fred"];
    const { queryStringParameters, httpMethod } = event;
    if (httpMethod === "GET") {
      if (lista.find((e) => e === queryStringParameters.alias)) {
        return {
          statusCode: 200,
          body: JSON.stringify({ payload: queryStringParameters.alias }),
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
};

module.exports = { handler };
