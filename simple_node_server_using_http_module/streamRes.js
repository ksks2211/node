const http = require("http");
const fs = require("fs");

// response video stream
const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "video/mp4");
  const stream = fs.createReadStream(__dirname + "/static/video.mp4");
  stream.pipe(res);
});

server.listen(3000);
