module.exports = {
    transformForInflux: (data, measurementName) => {
        return [{
            measurement: measurementName,
            fields: {
                success: data != null,
                ping: data != null ? data.server.ping : -1,
                down: data != null ? data.speeds.originalDownload : -1,
                up: data != null ? data.speeds.originalUpload : -1,
                distance: data != null ? data.server.distance : -1,
                lat: data != null ? data.server.lat : -1,
                lon: data != null ? data.server.lon : -1
            },
            tags: {
                serverId: data != null ? data.server.id : -1
            }
        }];
    }
};