const fs = require('fs').promises

fs.readFile("../file/lyrics.txt")
  .then(data => {
    console.log(data.length);
    console.log(data.toString());
  })
  .catch(err => {
    console.error(err);
  })