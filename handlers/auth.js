const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signIn = async function (req, res, next) {
  try {
    let user = await db.User.findOne({
      email: req.body.email
    });
    let { id, userName, profileImageUrl } = user;
    let isMatch = await user.comparePassword(req.body.password);

    if(isMatch) {
      let token = jwt.sign({ id, userName, profileImageUrl }, process.env.SECRET_KEY);

      return res.status(200).json({ id, userName, profileImageUrl, token });
    } else {
      return next({
        status: 400,
        message: "Invaild Email/Password"
      });
    }
  }  catch (err) {
      return next({
        status: 400,
        message: "Invaild Email/Password"
      });
  }
}

exports.signUp = async function ( req, res, next ) {
  try {
    let user = await db.User.create(req.query);
    let { id, userName, profileImageUrl } = user;
    let token = jwt.sign({ id, userName, profileImageUrl }, process.env.SECRET_KEY);

    return res.status(200).json({ id, userName, profileImageUrl, token });
  } catch(err) {
    //if a validation fails
    if(err.code === 11000) {
      err.message = "Sorry, that username and/or email is taken";
    }

    return next({
      status: 400,
      message: err.message
    });
  }
}