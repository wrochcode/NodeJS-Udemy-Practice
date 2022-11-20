import fs from "fs/promises";

// Read:
const buffer = await fs.readFile(`tampan.txt`);

console.info(buffer.toString());


// Write:
// await fs.writeFile(`tampan.txt`, `wahyu tampan`)
// deskripsi writefile:***
// fs.writeFile(`namafile`, `isi file`)

