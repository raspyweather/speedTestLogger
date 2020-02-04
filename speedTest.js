const speedTest = require('speedtest-net');
module.exports = {
    testSpeed: () =>
        new Promise((resolve, reject) => {
            const test = speedTest({ maxTime: 30000 });
            test.on('data', resolve);
            test.on('error', reject);
        })
}
