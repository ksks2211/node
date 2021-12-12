const fs = require('fs').promises

fs.writeFile("../file/writefilepromise.txt", "Write File Promise")
  .then(() => {
    return fs.readFile("../file/writefilepromise.txt")
  })
  .then((data) => {
    console.log(data.toString())
  })
  .catch(err => {
    console.error(err)
  })