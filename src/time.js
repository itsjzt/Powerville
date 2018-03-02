const moment = require("moment");

// any positive number can be a unix timestamp
exports.isUnix = timestamp => {
  return !isNaN(timestamp);
};

exports.isNatural = timestamp => {
  return moment(timestamp, "MMMM DD,YYYY").isValid();
};

exports.toNatural = unixtime => {
  return moment.unix(unixtime).format("MMMM DD,YYYY");
};

exports.toUnix = timestamp => {
  return new Date(timestamp).getTime() / 1000;
};
