module.exports = {
    transformForInflux: (data, measurementName) => {
        return [{
            measurement: measurementName,
            fields: {
                fields: {
                    success: data !== undefined,
                    pingInMs: data !== undefined ? data.server.ping : -1,
                    downInMbps: data !== undefined ? data.speeds.originalDownload : -1,
                    upInMbps: data !== undefined ? data.speeds.originalUpload : -1,
                    distance: data !== undefined ? data.server.distance : -1,
                    serverId: data !== undefined ? data.server.id : -1,
                },
                tags: {
                    lat: data !== undefined ? data.server.lat : -1,
                    lon: data !== undefined ? data.server.lon : -1
                }
            }
        }];
    }
};