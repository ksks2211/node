const fs = require('fs')

fs.writeFile('../file/writefile.txt', 'write file', (err) => {
  if (err) console.error(err)
  else console.log('Completed')
})
