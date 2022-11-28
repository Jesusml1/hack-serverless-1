const response = require("../../../shared/response");

const handler = async (event) => {
  try {
    if (event.httpMethod === "PUT") {
      return response({ content: "put" }, 200);
    }
  } catch (error) {
    return response(error.toString(), 500);
  }
};

module.exports = { handler };
