const http = require("http");

const server = http.createServer((req, res) => {
  const methodType = req.method;
  const path = req.url;

  switch (methodType) {
    case "GET":
      {
        switch (path) {
          case "/":
            {
              return res.writeHead(200).end("Hello! Welcome to the server.");
            }

            break;

          case "/contact-us": {
            res
              .writeHead(200)
              .end("Contact us through email, example@gmail.com");
          }
          case "/tweet":
            return res.writeHead(200).end("Retriving tweets");

            break;
        }
      }
      break;
    case "POST": {
      switch (path) {
        case "/tweet":
          return res.writeHead(201).end("Your tweet has been posted");
      }
    }
  }

  res.writeHead(404).end("Not found");
});

server.listen(8000, function () {
  console.log("Http server is up and running on port 8000");
});
