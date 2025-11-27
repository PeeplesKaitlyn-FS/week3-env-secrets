require("dotenv").config();
const http = require("http");

const hostname = "127.0.0.1";
const port = 3002;

const apiKey = process.env.API_KEY;
const dbPassword = process.env.DB_PASSWORD;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (!apiKey || !dbPassword) {
    res.statusCode = 500;
    res.end(
      "Error: Missing secrets.\n" +
      "This application expects API_KEY and DB_PASSWORD to be defined in a local .env file.\n"
    );
    return;
  }

  res.statusCode = 200;
  res.end(
    "Env-based secrets example is running.\n" +
    `API_KEY (from env): ${apiKey}\n` +
    `DB_PASSWORD length (not the value): ${dbPassword.length}\n`
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
