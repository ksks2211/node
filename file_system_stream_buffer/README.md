# **File System & Stream & Buffer**

**[path](#path) &nbsp; [fs](#fs) &nbsp; [Buffer](#Buffer)**

## <a name="fs"></a>**fs** (file system)

- ### read file
  - fs.readFile
  - fs.promises.readFile
  - fs.readFileSync
- ### write file
  - fs.writeFile
  - fs.promises.writeFile
  - fs.writeFileSync
- ### append file
  - fs.appendFile
  - fs.promises.appendFile
  - fs.appendFileSync
- ### stream
  - fs.readStream
  - fs.writeStream
- ### pipe
  - fs.pipe
- ### open
  - fs.open
  - fs.read
  - fs.write

---

## <a name="buffer"></a>**Buffer**

- static
  - Buffer.from
  - Buffer.concat
  - Buffer.alloc
- method
  - buffer.toJSON
  - buffer.toString
  - buffer.slice
  - buffer.write
  - buffer.copy
- property
  - buffer.length

---

## <a name="stream"></a>**Stream**

- stream.Readable
  - fs.createReadStream()
  - extends stream.Readable
- stream.Writable
  - fs.createWriteStream()
  - extends stream.Writable
- Duplex
- Transform
