const db = require("../db/queries");

const indexController = {
  renderIndex: async (req, res) => {
    res.render("index", {
      title: "Mini Messageboard",
      messages: await db.getAllMessages(),
      username: req.session.username,
    });
  },
  renderNewMessagePage: (req, res) => {
    res.render("newMessage");
  },

  setUserName: (req, res) => {
    req.session.username = req.body.userName;
    res.redirect("/");
  },

  handleNewMessage: async (req, res) => {
    await db.addNewMessage(
      req.session.username ? req.session.username : "Guest",
      req.body["new-message-input"]
    );
    res.redirect("/");
  },
};

module.exports = indexController;
