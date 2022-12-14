const request = require("request")

const geocode = (address, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=d1736f065c7531db59f6ab856889f07e&query=${encodeURIComponent(address)}`;

    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback("unable to connect to location service", undefined);
        } else if (body.error) {
            callback("unable to find location. Try another search.", undefined);
        } else {
            callback(undefined, {
                longitude: body.data[0].longitude,
                latitude: body.data[0].latitude,
                location: body.data[0].country
            })
        }
    })
}

module.exports = geocode