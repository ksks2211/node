

const buf1 = Buffer.from('Hello ');
const buf2 = Buffer.from('World');

const buf3 = Buffer.concat([buf1, buf2]);

const buf4 = Buffer.from([10, 20, 30, 40])


console.log(buf3.toJSON())
console.log(buf3.toString())


const emptyBuf = Buffer.alloc(100);

let cnt = emptyBuf.write("Write")
console.log(emptyBuf.slice(0, cnt).toString())

buf3.copy(emptyBuf)
console.log(emptyBuf.slice(0,buf3.length).toString())




