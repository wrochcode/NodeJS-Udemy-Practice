import { Buffer } from "node:buffer";

const buffer = Buffer.from(`Wahyu Rochman`);

console.info(buffer);
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());
