const handler = async (event) => {
  try {
    if (event.httpMethod === "DELETE") {
      return {
        statusCode: 200,
        body: JSON.stringify({ content: "delete" }),
      };
    }
      return {
        statusCode: 405,
        body: JSON.stringify({}),
      };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };