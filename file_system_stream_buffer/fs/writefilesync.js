const fs = require('fs')

try {
  fs.writeFileSync('../file/writefilesync.txt', 'write file sync')
} catch (err) {
  console.error(err)
}
