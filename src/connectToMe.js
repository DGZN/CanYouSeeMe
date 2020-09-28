module.exports = async (port = 8080) => {
  return await require('ngrok').connect(port)
}