const indexController = {
  renderIndex: (req, res) => {
    res.render("index");
  },
  renderNewMessagePage: (req, res) => {
    res.render("newMessage");
  },
};

module.exports = indexController;
