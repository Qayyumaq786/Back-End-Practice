// console.log("Os Module Working");

const os=require('os');

// console.log("Availabe free memory in RAm--->",os.freemem()/1024/1024/1024)


// console.log("hostName--->",os.hostname());
// console.log("platform--->",os.platform());
// console.log("CPUS--->",os.cpus());
// console.log("network--->",os.networkInterfaces());
// console.log("arch--->",os.arch());
// console.log("user info--->",os.userInfo());
// console.log("machine--->",os.machine());

console.log(Math.round(os.totalmem()/(1024*1024*1024)));






