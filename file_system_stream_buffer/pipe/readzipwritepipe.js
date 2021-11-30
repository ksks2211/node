const fs = require('fs')
const zlip = require('zlib')

const readStream = fs.createReadStream('../file/lyrics.txt', {
  highWaterMark: 50,
})
const zlibStream = zlip.createGzip()
const writeStream = fs.createWriteStream('../file/lyrics.txt.gz', {
  highWaterMark: 50,
})

const pipe = readStream.pipe(zlibStream).pipe(writeStream)

pipe.on('finish', () => {
  console.log('finished')
})

pipe.on('ready', () => {
  console.log('Ready')
})

pipe.on('close', () => {
  console.log('Close')
})

pipe.on('open', () => {
  console.log('Open')
})

pipe.on('pipe', () => {
  console.log('Pipe')
})

pipe.on('unpipe', () => {
  console.log('UnPipe')
})

pipe.on('drain', () => {
  console.log('Drain')
})
