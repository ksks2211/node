const http = require("http");
const fs = require("fs");
const { resolve } = require("path");

const PORT = 3000;
// req : http.IncomingMessage
// res : http.ServerResponse
const server = http.createServer(async (req, res) => {
  var data = "";

  // Event
  req.on("close", () => {
    console.log("{close}");
  });

  req.on("data", (chunk) => {
    console.log("{data}");
    data += chunk;
  });

  req.on("end", () => {
    console.log("{end}");
    data = JSON.parse(data);
    console.log(data);
  });

  // req.on("readable", (chunk) => {
  //   console.log("{readable}");
  //
  // });

  // properties
  console.log("[complete] ", req.complete);
  //console.log("[headers]", req.headers);
  console.log("[httpVersion]", req.httpVersion);
  console.log("[method]", req.method);
  //console.log("[socket]", req.socket);
  console.log("[url]", req.url);

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
