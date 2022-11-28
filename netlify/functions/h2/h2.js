const response = require("../../../shared/response");

const handler = async (event) => {
  try {
    if (event.httpMethod === "POST") {
      return response({ content: "post" }, 200);
    }
  } catch (error) {
    return response(error.toString(), 500);
  }
};

module.exports = { handler };
