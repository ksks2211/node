const fs = require('fs')

try {
  let data = fs.readFileSync("../file/lyrics.txt");
  console.log(`File Size : ${data.length} Bytes`)
  console.log(data.toString())
} catch (err) {
  console.error(err);
}


console.log("------Synchronous read file-------")