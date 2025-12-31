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
    user: "Amanda",
    added: formatDate(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formatDate(),
  },
];

module.exports = { messages, formatDate };
