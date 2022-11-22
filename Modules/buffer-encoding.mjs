import { Buffer } from "node:buffer";

const buffer = Buffer.from(`wahyu rochman`, `utf-8`)

console.info(buffer.toString())
console.info(buffer.toString("hex"))
console.info(buffer.toString("base64"))


const bufferBase64 = Buffer.from(`d2FoeXUgcm9jaG1hbg==`, `base64`);
console.info(buffer.toString("utf-8"))