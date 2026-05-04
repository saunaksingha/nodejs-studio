const { Buffer } = require("buffer");
const { debug } = require("console");

const buf = Buffer.from("First Buffer");
console.log(buf);

const buf1 = Buffer.alloc(8);
console.log(buf1);
buf1.write("Welcome");
console.log(buf1);
const buf2 = Buffer.alloc(5);
buf2.write("Home!");
const merged = Buffer.concat([buf1, buf2]);
console.log(merged.length);
console.log(merged.toString());

const buf3 = Buffer.from("Welcome home");
console.log(buf3.toString());
console.log(buf3.toString("utf-8", 0, 7));
