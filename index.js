const cron = require('cron');
const influxTransform = require('./influxDataTransform').transformForInflux;
const speedTest = require('speedtest-net');

const Influx = require('influx');
const influxConfig = require('./influxConfig');

const influx = new Influx.InfluxDB(influxConfig);
const measurementName = influxConfig.schema[0].measurement;

const runTest = async () => {
    let result = null;
    try {
        console.info('running speedtest...');
        result = await speedTest();
        console.info('result:', result);
    }
    catch (err) {
        console.error('speed test failed!', err);
    }

    try {
        await influx.writePoints(influxTransform(result, measurementName));
        console.info('successfully written to InfluxDB');
    } catch (err) {
        console.error('InfluxDB write failed!', err);
    }
}

const cronjob = new cron.CronJob(process.env.CRON_EXPR || '*/30 * * * *', runTest, null, true, 'Europe/Berlin');
cronjob.start();

speedTest({ acceptLicense: true, acceptGdpr: true }).then(() => {}).catch(() => {});