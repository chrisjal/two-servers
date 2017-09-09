var http = require ("http");
var PORT1 = 7000;
var PORT2 = 7050;


function handleRequest(request, response) {
     response.end("MY MAN! LOOKIN' GOOD: " + request.url);
}

function handleRequest2(request, response) {
     // response object has a method on it called end
     response.end("YOU SUCK: " + request.url);
}

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server.listen(PORT1, function() {
     console.log("Server is now listening on http://localhost:" + PORT1);
});

server2.listen(PORT2, function() {
     console.log("Server is now listening on http://localhost:" + PORT2);
});
