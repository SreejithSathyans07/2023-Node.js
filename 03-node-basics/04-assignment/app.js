const http = require('http');
const router = require('./routes')

const portNumber = 3000;
const server = http.createServer(router);

server.listen(portNumber, ()=>{
    console.log('Server is running in port ' + portNumber);
})