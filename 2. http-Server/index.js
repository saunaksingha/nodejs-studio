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
              res.writeHead(200).end("Hello! Welcome to the server.");
            }

            break;

          case "/contact-us":
            {
              res
                .writeHead(200)
                .end("Contact us through email, example@gmail.com");
            }

            break;
        }
      }
      break;
    case "POST":
      {
      }
      break;
    default: {
    }
  }
});

server.listen(8000, function () {
  console.log("Http server is up and running on port 8000");
});
