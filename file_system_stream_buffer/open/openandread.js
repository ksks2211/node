const fs = require('fs')

// open + read
try {
  let result = []

  const fd = fs.openSync('../file/lyrics.txt', 'r')

  let buffer
  let cur = 0

  while (true) {
    buffer = Buffer.alloc(100)
    let cnt = fs.readSync(fd, buffer, 0, buffer.length, cur)
    if (cnt <= 0) break
    cur += cnt
    result.push(buffer.slice(0, cnt))
  }

  console.log(Buffer.concat(result).toString())

  fs.closeSync(fd)
} catch (err) {
  console.error(err)
}
