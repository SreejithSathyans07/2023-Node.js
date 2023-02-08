const fs = require('fs');

const routerFunction = (req, res) => {
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
          res.setHeader('Location', '/file-updated')
          return res.end();
        });
      });
    }else if(url === '/file-updated'){
        res.write(`
        <html lang="en">
        <head>
            <title>Form</title>
        </head>
        <body>
            <h1>File has been updated</h1>
            <a href="/">Go home</a>
        </body>
        </html>
        `);
        return res.end();
    }
}
 module.exports = routerFunction;

 //Multiple exports
 //Method 1
//  module.exports = {
//     handlerFunction: routerFunction,
//     someText: 'Some text that is being exported'
//  }

 //Method 2
//  module.exports.handlerFunction= routerFunction,
//  module.exports.someText= 'Some text that is being exported'

