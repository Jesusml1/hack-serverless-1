const handler = async (event) => {
  try {
    if (event.httpMethod === "PUT") {
      return {
        statusCode: 200,
        body: JSON.stringify({ content: "put" }),
      };
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };


