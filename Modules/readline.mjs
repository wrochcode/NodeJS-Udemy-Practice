import readline from "readline";
import process from "process";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question(`Who are you?`, (name) => {
    console.info(`Hello ${name}`)
    input.close()
})