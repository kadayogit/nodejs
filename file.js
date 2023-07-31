//simple create file
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files');

for(x = 0; x < 5; x++){
    fs.writeFileSync(`${dirPath}/network-host${x}.txt`,'ip: 192.168.2.302/24 port: 3089 subnet: 255.255.255.0 protocol: tcp,udp,ftp');
}

//get text for the file
fs.readdir(dirPath,(err, files)=>{
  files.forEach((item)=> {
   console.log('Text from file is: ',item);
  })
})


