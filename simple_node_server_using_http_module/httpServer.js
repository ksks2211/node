const http = require("http");
const fs = require("fs");

const PORT = 8888;

// http.createServer

const server = http.createServer(async (req, res) => {
  try {
    const data = await fs.promises.readFile("./index.html");
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Server Error");
  }
});

server.listen(PORT);
server.on("listening", () => {
  console.log(`${PORT} port is listening`);
});

server.on("error", (err) => {
  console.error(err);
});
