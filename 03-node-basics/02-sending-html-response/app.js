const http = require('http')

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html')
    res.write(`
    <html> 
        <header>
            <title>
                HTML as a response
            </title>
        </header>
        <body>
            <h1>Hello From My Node Application</h1>
        </body>
    </html>
    `);
    res.end();
});

server.listen(3000)