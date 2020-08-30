module.exports = {
    transformForInflux: (data, measurementName) => {
        return [{
            measurement: measurementName,
            fields: {
                success: data != null,
                ping: data != null ? data.server.ping : null,
                down: data != null ? data.speeds.originalDownload : null,
                up: data != null ? data.speeds.originalUpload : null,
                adjustedDown: data != null ? data.speeds.download : null,
                adjustedUp: data != null ? data.speeds.upload : null,
                distance: data != null ? data.server.distance : null,
                lat: data != null ? data.server.lat : null,
                lon: data != null ? data.server.lon : null
            },
            tags: {
                serverId: data != null ? data.server.id : null,
                isp: data != null ? data.client.isp : null
            }
        }];
    }
};