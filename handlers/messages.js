const db = require("../models");

exports.createMessage = async function (req, res, next) {
  try {
    console.log(req.query)
    // create message
    let message = await db.Message.create({
      text: req.body.text,
      user: req.params.id
    });

    // find the user of the message
    let foundUser = await db.User.findById(req.params.id);
    foundUser.messages.push(message.id);

    // save message
    await foundUser.save();

    // create a message to send to client
    let foundMessage = await db.Message.findById(message._id).populate("user", {
      userName: true,
      profileImageUrl: true
    });

    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
  }
}

// GET /api/users/:id/messages/:message_id
exports.getMessage = async function (req, res, next) {
  try {
    let message = await db.Message.find(req.params.message_id);
    return res.status(200).json(message);
  } catch (err) {
    return next(err);
  }
}

// DELETE /api/users/:id/messages/:message_id
exports.deleteMessage = async function (req, res, next) {
  try {
    let foundMessage = await db.Message.findById(req.params.message_id);
    await foundMessage.remove();

    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
  }
}