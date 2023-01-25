
## Some core node modules  

* **http** (Launch a server)
* **https** (Launch an SSL server)
* **fs** (File system related operations)
* **path** (Path related operations)
* **os** (Operating System related operations)

# Node.Js Behind the scenes
---------------------------
## server.listen() method
* Will start one server and the event loop.
* The event loop is what gives Node.Js the power to listen incoming requests.
* Event loop will keep on running till we manually terminate it using the ***process.exit()*** method. 
* Event loop starts when the program starts. It listens to all the registered event callbacks in the application.
* Event loop handles callbacks which will be executed fast. 
* In order to handle heavy task such as writing content to a file using file system, **Worker Pool** is used.
* It runs separate/detached from the JavaScript code and runs as different threads.
* Once the work pool is done with it's task such as reading a file, then the callback associated with it will be executed by the event loop.