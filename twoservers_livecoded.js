var http = require ("http");
var PORT = 7000;
var PORT2 = 7050;

function handleRequest(request, response) {
     response.end("MY MAN! LOOKIN' GOOD: " + request.url);
}

function handleRequest2(request, response) {
     response.end("YOU SUCK. from: " + request.url);
}

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server.listen(PORT, function() {
     console.log("Server is now listening on http://localhost:" + PORT);
});

server2.listen(PORT2, function() {
     console.log("Server is now listening on http://localhost:" + PORT2);
});
