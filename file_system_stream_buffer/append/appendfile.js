const fs = require('fs')

try {
  fs.writeFileSync('../file/appendfile.txt', 'original line\n')
  fs.appendFile('../file/appendfile.txt', 'appended line\n', (err) => {
    if (err) console.error(err)
    else console.log('Completed')
  })
} catch (err) {
  console.error(err)
}
