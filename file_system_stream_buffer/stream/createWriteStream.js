const fs = require('fs')

const writeStream = fs.createWriteStream('../file/writestream.txt', {
  highWaterMark: 18,
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

writeStream.on('drain', () => {
  console.log('Drain')
})

let i = 0
let ok = true

function write() {
  do {
    i++
    if (i == 10) {
      writeStream.write('Hello\n', () => {
        console.log('finish')
      })
    } else {
      ok = writeStream.write('Hello\n')
      console.log(ok)
    }
  } while (i > 0 && ok)

  if (i < 10) {
    writeStream.once('drain', write)
  }
}

write()
