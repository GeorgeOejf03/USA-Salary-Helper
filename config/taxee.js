module.exports = {
  url: process.env.TAXES_URL,
  headers: {
    "X-RapidAPI-Host": process.env.TAXES_HOST,
    "X-RapidAPI-Key": process.env.TAXES_KEY,
    "Authorization": process.env.TAXES_AUTHORIZATION
  }
}