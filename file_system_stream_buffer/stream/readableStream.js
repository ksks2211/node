const { Readable } = require('stream')
const fs = require('fs')

// create custom read stream
class ReadStreamEx extends Readable {
  constructor(filename) {
    console.log('[constructor]')
    super({
      highWaterMark: 100,
    })
    this.filename = filename
    this.fd = null // file descriptor
  }

  _construct(cb) {
    console.log('[_construct]')
    fs.open(this.filename, (err, fd) => {
      if (err) {
        cb(err)
      } else {
        this.fd = fd
        cb()
      }
    })
  }

  buf = undefined

  _read(n) {
    console.log('[_read]')

    if (typeof this.buf === 'undefined') {
      this.buf = new Buffer.alloc(n)
    }
    const buf = this.buf

    fs.read(this.fd, buf, 0, n, null, (err, bytesRead) => {
      if (err) {
        this.destroy(err)
      } else {
        this.push(bytesRead > 0 ? buf.slice(0, bytesRead) : null)
      }
    })
  }

  _destroy(err, cb) {
    console.log('[_destroy]')
    if (this.fd) {
      fs.close(this.fd, (er) => cb(er || err))
    } else {
      cb(err)
    }
  }
}

const readStream = new ReadStreamEx('../file/lyrics.txt')

const data = []
readStream.on('data', (chunk) => {
  data.push(chunk)
})

readStream.on('end', () => {
  console.log(Buffer.concat(data).toString())
})
