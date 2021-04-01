const os = require('os')

const totalRam = os.totalmem();
//15.8478
console.log('totalRam', totalRam)

const freeRam = os.freemem();
//6.4082
console.log('freeRam', freeRam)

const usageRam = totalRam - freeRam;
console.log('usageRam', usageRam)
const percent = usageRam * 100
const ramPercent = percent / totalRam;
console.log('ramPercent', '%' + ramPercent)

const osType = os.type();
console.log('osType', osType)

const osArc = os.arch();
console.log('osArch', osArc)

const osHost = os.hostname();
console.log('osHost', osHost);

const home = os.homedir();
console.log('home', home)

const platform = os.platform();
console.log('platform', platform)


const version = os.version();
console.log('versiyon', version)

const netWork = os.networkInterfaces();
console.log('netWork', netWork)

const cpu = os.cpus();
console.log('cpu', cpu)