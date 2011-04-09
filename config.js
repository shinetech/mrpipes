var route = require("./route");

exports.host = "0.0.0.0";
exports.port = 9909;
exports.user = "mrpipes";
exports.group = "mrpipes";
exports.backends = {
    apache: {
        host:   "localhost",
        port:   80,
        secure: false
    },
    eventserver: {
        host:   "localhost",
        port:   4322,
        secure: false
    }
};
exports.defaultBackend = "apache";
exports.route = route;

