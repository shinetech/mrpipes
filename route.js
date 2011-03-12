module.exports = (function(request) {
    if (request.url.match(/^\/events\//)) {
        request.backend = "eventserver";
        request.url = request.url.substring(7);
    }
});

