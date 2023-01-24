const http = require("http");
const fs = require('fs');
const { parse } = require("path");

const server = http.createServer((req, res) => {
  const { url, method } = req; 
  if (url === "/") {
    res.write(`
    <html lang="en">
    <head>
        <title>Form</title>
    </head>
    <body>
        <form action="/messages" method='POST'>
            <input type="text" name="messageBox">
            <button type="submit">Send</button>
        </form>
    </body>
    </html>
    `);
    return res.end();
  }else if(url === '/messages' && method === 'POST'){
    const body = [];
    let parsedData = '';
    let message = '';
    req.on('data', (stream) =>{
      body.push(stream);
    })

    req.on('end', ()=>{
      parsedData = Buffer.concat(body).toString();
      console.log(`Parsed Data = ${parsedData}`);
      message = parsedData.split('=')[1];
      fs.writeFile('message.txt', message, ()=>{
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end();
      });
    });
  }
});

server.listen(3000);
