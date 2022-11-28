import net from "net";

const client = net.createConnection({
  port: 3000,
  host: `localhost`,
});

client.addListener(`data`, (data) => {
  console.info(`Receive data from server: ${data.toString()}`);
});

setInterval(() => {
//   client.write(`wahyu tampan\r\n`);

  client.write(`${process.argv[2]}\r\n`);
  client.write(`${process.argv[3]}\r\n`);
}, 2000);
