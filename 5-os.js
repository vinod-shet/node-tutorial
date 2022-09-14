const os = require('os')
const userinfor = os.userInfo()
console.log(userinfor);

console.log(`system uptime is : ${os.uptime()} seconds`);

currentuser = {
    name:os.type(),
    release:os.release(),
    freemem:os.freemem(),
    version:os.version(),
    a:os.networkInterfaces()
}
console.log(currentuser);