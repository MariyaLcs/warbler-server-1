const express    = require("express");
const app        = express();
const cors       = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  let err = new Error("Page Not Found!!!");
  err.status = 404;
  next(err);
});

app.listen(PORT, function() {
  console.log(`Warbler client server is running on port ${PORT}`);
});