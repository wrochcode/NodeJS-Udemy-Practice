import fs from "fs";

const writer = fs.createWriteStream(`target.log`)

writer.write(`wahyu Rochman\n`)
writer.write(`Love\n`)
writer.write(`Putri`)
writer.end()

const reader = fs.createReadStream(`target.log`)
reader.addListener(`data`, (data)=> {
  console.info(data.toString())  
})