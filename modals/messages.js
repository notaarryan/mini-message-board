function formatDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

const messages = [
  {
    text: "Hi there!",
    user: "Aryan Parmar - Creator of this website :)",
    added: formatDate(),
  },
  {
    text: "Hope you like the website",
    user: "Aryan Parmar - Creator of this website :)",
    added: formatDate(),
  },
];

module.exports = { messages, formatDate };
