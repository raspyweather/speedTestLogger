const Influx = require('influx');
module.exports = {
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE || 'connectivity',
    protocol: process.env.DB_PROTOCOL || 'https',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: parseInt(process.env.DB_PORT || '443'),
    schema: [{
        measurement: 'speedtest',
        fields: {
            success: Influx.FieldType.BOOLEAN,

            ping: Influx.FieldType.INTEGER,
            down: Influx.FieldType.FLOAT,
            up: Influx.FieldType.FLOAT,

            distance: Influx.FieldType.FLOAT,
            lat: Influx.FieldType.FLOAT,
            lon: Influx.FieldType.FLOAT
        },
        tags: ['serverId']
    }]
};
