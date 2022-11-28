/**
 * Creates a netlify response.
 * @param {String|object} responseBody - The body of the response.
 * @param {Number} responseStatusCode - The status code of the response.
 * @return {object} The netlify response.
 */
function response(responseBody, responseStatusCode) {
  switch (responseStatusCode) {
    case 200:
      return {
        statusCode: 200,
        body: JSON.stringify(responseBody),
      };
    case 404:
      return {
        statusCode: 404,
        body: JSON.stringify(responseBody),
      };
    case 405:
      return {
        statusCode: 405,
        body: JSON.stringify(responseBody),
      };
    case 500:
      return {
        statusCode: 500,
        body: responseBody,
      };
  }
}

module.exports = response;
