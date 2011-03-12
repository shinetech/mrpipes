var route = require("./routes");

exports.host = "0.0.0.0";
exports.port = 9909;
exports.backends = {
    apache:      ["localhost", 80],
    eventserver: ["localhost", 4322]
};
exports.defaultBackend = "apache";
exports.route = route;

