const http = require('http');

const host = 'localhost';
const port = 3000;

// http://localhost
// http://127.0.0.1:3000

const requestListener = function(req, res){

    // 404, 403 forbidden, 401 unauthorized
    res.writeHead(200);
    res.end("Hello world 3");

};

const server = http.createServer(requestListener);

var myFunction = () => {

    console.log("App running on port", port);

}

server.listen(port, host, myFunction);