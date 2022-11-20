const handler = async (event) => {
  try {
    const httpMethod = event.httpMethod;
    let bodyResponse = null;
    switch (httpMethod) {
      case "GET":
        bodyResponse = { method: "GET", content: "get" };
        break;
      case "POST":
        bodyResponse = { method: "POST", content: "post" };
        break;
      case "PUT":
        bodyResponse = { method: "PUT", content: "put" };
        break;
      case "DELETE":
        bodyResponse = { method: "DELETE", content: "delete" };
        break;
    }
    if (bodyResponse) {
      return {
        statusCode: 200,
        body: JSON.stringify(bodyResponse),
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
