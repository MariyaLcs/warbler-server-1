
const mongoose = require("mongoose");
const DBURL = process.env.DBURL || "mongodb://localhost:27017/warbler";

mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(DBURL, {
  keepAlive: true,
  useNewUrlParser: true
});

module.exports.User = require("./user");
module.exports.Message = require("./message");