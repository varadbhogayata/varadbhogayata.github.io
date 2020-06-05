const { GOOGLE_ANALYTICS_ID } = process.env

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: GOOGLE_ANALYTICS_ID
  }
}
