const fs = require('fs')

// create read stream
const readStream = fs.createReadStream('../file/lyrics.txt', {
  highWaterMark: 100, // buffer-size default 64kb
})

// set encoding
readStream.setEncoding('utf-8')

let data = ''
readStream.on('data', (chunk) => {
  data += chunk
})

readStream.on('end', () => {
  console.log('end : ', data)
})

readStream.on('error', (err) => {
  console.error(err)
})
