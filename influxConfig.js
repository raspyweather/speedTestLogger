const Influx = require('influx');
module.exports = {
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE || 'connectivity',
    protocol: process.env.DB_PROTOCOL || 'https',
    port: parseInt(process.env.DB_PORT || '443'),
    options: {
        headers: {
            'Authorization': 'Basic ' + Buffer.from(process.env.DB_USER + ':' + process.env.DB_PASS).toString('base64')
        }
    },
    schema: [{
        measurement: 'speedtest',
        fields: {
            success: Influx.FieldType.BOOLEAN,

            ping: Influx.FieldType.INTEGER,
            latency: Influx.FieldType.FLOAT,
            jitter: Influx.FieldType.FLOAT,
            packetLoss: Influx.FieldType.FLOAT,
            down: Influx.FieldType.FLOAT,
            up: Influx.FieldType.FLOAT,

            resultId: Influx.FieldType.STRING
        },
        tags: ['serverId', 'isp']
    }]
};
