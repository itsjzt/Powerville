const moment = require('moment')

// any positive number can be a unix timestamp
exports.isUnix = (timestamp)  => {
  return Number(timestamp) >= 0
}

exports.isNatural = (timestamp) => {
  return moment(timestamp, 'MMMM DD YYYY').isValid()
}

exports.toNatural = (unixtime) => {
  return moment.unix(unixtime).format("MMMM DD YYYY")
}

exports.toUnix = (timestamp) => {
  const ts = moment(timestamp, "MMMM DD YYYY").unix()
  return moment.unix(ts)
}

