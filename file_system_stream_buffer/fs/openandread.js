const fs = require('fs')

// open + read
try {
  let result = []

  const fd = fs.openSync('../file/lyrics.txt', 'r')

  let buffer

  while (true) {
    buffer = Buffer.alloc(100)
    let cnt = fs.readSync(fd, buffer, 0, buffer.length, null)
    if (cnt <= 0) break
    result.push(buffer.slice(0, cnt))
  }

  console.log(Buffer.concat(result).toString())

  fs.closeSync(fd)
} catch (err) {
  console.error(err)
}
