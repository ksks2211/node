const fs = require('fs')
const zlib = require('zlib')

fs.createReadStream('../file/lyrics.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('../file/lyrics-decom.txt'))
