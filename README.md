# Mini Message Board

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express)
![EJS](https://img.shields.io/badge/EJS-5C2D91?style=flat)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql)

A simple full‑stack web application where users can set a username and post messages to a shared message board. Messages are **persisted in a PostgreSQL database** and usernames are stored per session using **express‑session**.

---

## Features

- Set and update a username per session
- Post messages to a public message board
- Messages are stored permanently in PostgreSQL
- Server‑side rendering with EJS
- Session management using express‑session
- Timestamped messages (localized to Toronto time)

---

## Demo

Live demo:  
👉 https://mini-message-board-oybc.onrender.com/

---

## Tech Stack

- **Node.js**
- **Express.js**
- **EJS**
- **PostgreSQL**
- **pg**
- **express-session**
- **HTML & CSS**

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mini-message-board.git
cd mini-message-board
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env` file in the root directory with the following values:

```env
POSTGRES_HOST=localhost
POSTGRES_DB=mini_message_board
POSTGRES_USERNAME=your_username
POSTGRES_PASSWORD=your_password
POSTGRES_PORT=5432
```

### 4. Initialize the database

Run the database seed script to create the table and insert sample data:

```bash
node db/populatedb.js
```

### 5. Start the server

```bash
npm start
```

Visit the app at:

```
http://localhost:3000
```

---

## Usage

1. Open the homepage.
2. Set a username (stored in session).
3. Click **New Message** to post a message.
4. Messages appear instantly and persist across server restarts.
5. You can update your username at any time.

---

## Project Structure

```
mini-message-board/
├── server.js                 # App entry point
├── routes/
│   └── indexRouter.js        # Express routes
├── controllers/
│   └── indexController.js    # Route logic
├── db/
│   ├── pool.js               # PostgreSQL connection pool
│   ├── queries.js            # SQL queries
│   └── populatedb.js         # DB initialization script
├── views/                    # EJS templates
│   ├── index.ejs
│   ├── newMessage.ejs
│   ├── newMessageForm.ejs
│   ├── setUserNameForm.ejs
│   └── updateUserNameForm.ejs
├── public/
│   └── styles/               # CSS files
└── README.md
```

---

## Database Schema

```sql
CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(225),
  message VARCHAR(10000),
  added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

---

## Author

**Aryan Parmar**  
Computer Science student @ University of Windsor

🔗 LinkedIn: https://www.linkedin.com/in/aryan-parmar-a0634b299/
