const cron = require('cron');
const influxTransform = require('./influxDataTransform').transformForInflux;
const speedTest = require('./speedTest').testSpeed;

const Influx = require('influx');
const influxConfig = require('./influxConfig');

const influx = new Influx.InfluxDB(influxConfig);
const measurementName = influxConfig.schema[0].measurement;

const serialize = data => {
    try {
        influx.writePoints(influxTransform(data, measurementName)).then(() => { }).catch(err => console.error(err));
    } catch (e) {
        console.error(e);
    }
}
const runTest = () =>
    speedTest().then(serialize).catch(err => {
        console.error(err);
        serialize();
    });

const cronjob = new cron.CronJob('*/30 * * * *', runTest, null, true, 'Europe/Berlin');
cronjob.start();
