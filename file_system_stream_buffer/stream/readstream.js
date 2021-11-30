const fs = require('fs')

// create read stream
const readStream = fs.createReadStream('../file/lyrics.txt', {
  highWaterMark: 100, // buffer-size default 64kb
})

const data = []
readStream.on('data', (chunk) => {
  data.push(chunk)
})

readStream.on('end', () => {
  console.log('end : ', Buffer.concat(data).toString())
})

readStream.on('error', (err) => {
  console.error(err)
})
