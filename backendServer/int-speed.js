const networkSpeed = require('network-speed');
const testNetworkSpeed = new networkSpeed();

async function getDownloadSpeed(){
    const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
    const fileSizeInBytes = 500000;
    const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
    console.log("Download Speed=>",speed);
}

getDownloadSpeed();

async function getUploadSpeed(){
    const options = {
        hostname: 'www.google.com',
        port: 80,
        path: '/catchers/544b09b4599c1d0200000289',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const fileSizeInBytes = 20000
      const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
      console.log("Upload Speed=>",speed);
}
0
getUploadSpeed()