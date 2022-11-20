const handler = async (event) => {
  try {
    const { queryStringParameters, httpMethod } = event;
    if (httpMethod === "GET") {
      return {
        statusCode: 200,
        body: JSON.stringify(queryStringParameters),
      };
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
