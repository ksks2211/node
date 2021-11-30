const fs = require('fs')

try {
  fs.writeFileSync('../file/appendfilesync.txt', 'original line\n')
  fs.appendFileSync('../file/appendfilesync.txt', 'appended line\n')
} catch (err) {
  console.error(err)
}
