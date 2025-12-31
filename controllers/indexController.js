const { messages, formatDate } = require("../modals/messages");

const indexController = {
  renderIndex: (req, res) => {
    res.render("index", {
      title: "Mini Messageboard",
      messages: messages,
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
  handleNewMessage: (req, res) => {
    messages.push({
      user: req.session.username ? req.session.username : "Guest",
      text: req.body["new-message-input"],
      added: formatDate(new Date()),
    });
    res.redirect("/");
  },
};

module.exports = indexController;
