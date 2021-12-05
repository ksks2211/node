const http = require("http");
const fs = require("fs");

const PORT = 3000;
// req : http.IncomingMessage
// res : http.ServerResponse
const server = http.createServer(async (req, res) => {
  res.on("close", () => {
    console.log("[close]");
  });

  res.on("finish", () => {
    console.log("[finish]");
  });

  try {
    const data = await fs.promises.readFile("./index.html");
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`${PORT} is listening...`);
});
