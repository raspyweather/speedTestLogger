const speedTest = require('speedtest-net');
module.exports = {
    testSpeed: () => {
        return new Promise((resolve, reject) => {
            const test = speedTest({ maxTime: 30000 });
            test.on('data', resolve);
            test.on('error', reject);
            /* test.on('data', data => influx.writePoints(transformForInflux(data, measurementName)));
             test.on('error', err => {
                 influx.writePoints(transformForInflux(undefined, measurementName));
                 console.err(err);
             });*/
        })
    }
}