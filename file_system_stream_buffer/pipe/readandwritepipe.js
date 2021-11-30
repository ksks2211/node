const fs = require('fs')

const readStream = fs.createReadStream('../file/lyrics.txt', {
  highWaterMark: 500,
})
const writeStream = fs.createWriteStream('../file/lyrics-cp.txt', {
  highWaterMark: 500,
})

const pipe = readStream.pipe(writeStream)

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
