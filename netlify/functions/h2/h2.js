const handler = async (event) => {
  try {
    if (event.httpMethod === "POST") {
      return {
        statusCode: 200,
        body: JSON.stringify({ content: "post" }),
      };
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };

