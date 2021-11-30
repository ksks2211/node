
// Create Buffer instance from string
const strBuf = Buffer.from("Hello World", "utf-8")

// Create Buffer from array
const arrBuf = Buffer.from([10, 20, 30, 40, 50])


console.log(strBuf.length)
console.log(arrBuf.length)

// Buffer -> string
console.log(strBuf.toString())

// Buffer -> array
console.log([...arrBuf])


// Buffer -> JSON
console.log(arrBuf.toJSON())

