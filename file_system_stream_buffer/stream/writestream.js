const fs = require('fs')

const writeStream = fs.createWriteStream('../file/writestream.txt', {
  highWaterMark: 16,
})

writeStream.on('finish', () => {
  console.log('Finish')
})

writeStream.on('error', (err) => {
  console.error(err)
})

writeStream.on('ready', () => {
  console.log('Ready')
})

writeStream.on('open', (fd) => {
  console.log('Open ', fd)
})

writeStream.on('close', () => {
  console.log('Closed')
})

writeStream.write('Write Stream 1\n')
writeStream.write('write Stream 2\n', 'utf-8')
writeStream.write('write Stream 3\n')
writeStream.write('write Stream 4\n')
writeStream.write('write Stream 5\n')
writeStream.write('write Stream 6\n')

writeStream.end()

console.log('-------Asynchronous--------')
