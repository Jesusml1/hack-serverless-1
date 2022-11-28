const response = require("../../../shared/response");

const handler = async (event) => {
  try {
    if (event.httpMethod === "DELETE") {
      return response({ content: "delete" }, 200);
    }
    return response({}, 405);
  } catch (error) {
    return response(error.toString(), 500);
  }
};

module.exports = { handler };
