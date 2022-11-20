const handler = async (event) => {
  try {
    if (event.httpMethod === "GET") {
      return {
        statusCode: 200,
        body: JSON.stringify({ content: "get" }),
      };
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
