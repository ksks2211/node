// https module

const https = require('https')
const fs = require('fs')
const PORT = 443;


const server = https.createServer(
  {
    cert: fs.readFileSync('./live/yoonyeong.kr/cert.pem'),
    key: fs.readFileSync('./live/yoonyeong.kr/privkey.pem'),
    ca: [
      fs.readFileSync('./live/yoonyeong.kr/chain.pem'),
      fs.readFileSync('./live/yoonyeong.kr/fullchain.pem')
    ]
  },
  async (req, res) => {
    try {
      const data = await fs.promises.readFile("./index.html");
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
      res.end('Server Error')
    }
  }
)

server.listen(PORT, () => {
  console.log(`${PORT} is listening`)
})