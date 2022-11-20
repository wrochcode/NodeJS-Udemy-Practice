import dns from "dns/promises"

const object = await dns.lookup(`www.programmerzamannow.com`)
// console.info('object:'+object)
console.info(object.address)
// console.info('family:'+object.family)