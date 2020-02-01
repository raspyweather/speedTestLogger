const speedTest = require('speedtest-net');
module.exports = {
    testSpeed: () =>
        new Promise((resolve, reject) => {
            const test = speedTest({ maxTime: 30000, serversUrl: 'http://c.speedtest.net/speedtest-servers-static.php' });
            test.on('data', resolve);
            test.on('error', reject);
        })
}