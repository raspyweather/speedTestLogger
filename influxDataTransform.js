module.exports = {
    transformForInflux: (data, measurementName) => {
        if(data == null){
            return [{
                success: false
            }];
        }

        return [{
            measurement: measurementName,
            fields: {
                success: true,
                ping: Math.round(data.ping.latency),
                latency: data.ping.latency,
                jitter: data.ping.jitter,
                packetLoss: data.packetLoss,
                down: data.download.bandwidth,
                up: data.upload.bandwidth,
                resultId: data.resultId
            },
            tags: {
                serverId: data.server.id,
                isp: data.isp
            }
        }];
    }
};