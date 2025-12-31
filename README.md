# Mini Message Board

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js) ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express) ![EJS](https://img.shields.io/badge/EJS-5C2D91?style=flat)

A simple web application where users can post messages and choose a username. Messages are shared across all users while the server is running. Built with **Node.js**, **Express**, **EJS**, and **express-session**.

---

## Features

- Set a username per session
- Post messages to the board
- Messages are visible to all connected users
- Server-side rendering with EJS templates
- Session management to persist user identity across requests

---

## Demo

> Messages are currently stored in memory, so they reset on server restart. Future updates will use a database for persistent storage.

Access the live app here: [Mini Message Board](https://mini-message-board-oybc.onrender.com/)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/mini-message-board.git
cd mini-message-board
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

---

## Usage

1. On the index page, set your username.
2. Use the “New Message” form to post a message.
3. Messages appear for all users currently connected.
4. Your username is remembered for the session via `express-session`.

---

## Project Structure

```
mini-message-board/
├── server.js                # Entry point
├── package.json             # Dependencies and scripts
├── models/
│   └── messages.js          # In-memory message storage
├── routes/
│   └── indexRouter.js       # Express routes
├── controllers/
│   └── indexController.js   # Controller logic
├── views/                   # EJS templates
│   ├── index.ejs
│   ├── newMessage.ejs
│   └── setUsernameForm.ejs
└── README.md
```

---

## Technologies

- Node.js
- Express.js
- EJS
- express-session
- HTML & CSS

---

## Future Improvements

- Store messages and usernames in a database for persistence
- Allow users to edit or delete messages
- Add real-time updates with WebSockets (Socket.io)
- Deploy to a cloud platform with persistent storage

---
