const Influx = require('influx');
module.exports = {
    host: 'localhost',
    database: 'connectivity',
    protocol: 'https',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: 443,
    schema: [{
        measurement: 'speedtest',
        fields: {
            success: Influx.FieldType.BOOLEAN,

            ping: Influx.FieldType.INTEGER,
            down: Influx.FieldType.FLOAT,
            up: Influx.FieldType.FLOAT,

            distance: Influx.FieldType.FLOAT,
            lat: Influx.FieldType.FLOAT,
            lon: Influx.FieldType.FLOAT,
            serverId: Influx.FieldType.STRING,
        },
        tags: ["lat", "lon"]
    }]
};
