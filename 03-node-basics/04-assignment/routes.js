const fs = require('fs');

const routerFunction = (req, res) => {
  const { url, method } = req;

  if (url === "/") {
    res.write(
      `
      <html lang="en">
      <head>
          <title>Form</title>
      </head>
      <body>
          <form action="/create-user" method='POST'>
              <input type="text" name="username">
              <button type="submit">Send</button>
              <a href='/users'>Users</a>
          </form>
      </body>
      </html>
      `
    );
    return res.end();
  }else if(url === '/users'){
    res.write(
        `
        <html lang="en">
        <head>
            <title>Form</title>
        </head>
        <body>
            <ul>
                <li>Arun</li>
                <li>Vimal</li>
                <li>Nimal</li>
            </ul>
        </body>
        </html>
        `
      );
      return res.end();
  }
  else if(url === '/create-user'){
    let body = [];
    req.on('data', (stream) => {
        body.push(stream)
    });

    req.on('end',()=>{
        parsedData = Buffer.concat(body).toString();
        let userName = parsedData.split('=')[1];
        console.log(userName);
        res.statusCode = 302;
        res.setHeader('Location', '/users')
        return res.end();
    })
  }
};

module.exports = routerFunction;
