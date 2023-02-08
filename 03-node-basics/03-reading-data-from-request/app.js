const http = require("http");
const routerFunction = require('./routes')

const server = http.createServer(routerFunction);

server.listen(3000);
