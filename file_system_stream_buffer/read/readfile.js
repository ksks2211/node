const fs = require('fs')


// asynchronous readfile
fs.readFile("../file/lyrics.txt", (err, data) => {
  
  if (err) {
    throw err;
  }
  // data : Buffer
  console.log(`File Size : ${data.length} Bytes`)
  console.log(data.toString())
})


console.log("------Asynchronous read file-------")