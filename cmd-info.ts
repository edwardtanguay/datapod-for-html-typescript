import * as qstr from './qtools/qstr'
import * as qsys from './qtools/qsys'

console.log("INFO");
console.log("====")
console.log(`Versions: ${JSON.stringify(qsys.getVersions())}`)
console.log(`Random suuid: ${qstr.generateSuuid()}`)
