import timer from "timers/promises"

// console.info(`Start time ${new Date()}`);
// await timer.setTimeout(2000)
// console.info(`end time ${new Date()}`);


// ga berubah
// for await (const startTime of timer.setInterval(1000, new Date())) {
//   // for await (const startTime of timer.setInterval(1000, **data yang dikirim ke var 'startTime')) {
//   console.info(`start time at${startTime}`);
// }

// berubah waktunya:
for await (const startTime of timer.setInterval(1000, 'ignored')) {
  // for await (const startTime of timer.setInterval(1000, **data yang dikirim ke var 'diabaikan')) {
  console.info(`start time at${new Date()}`);
}