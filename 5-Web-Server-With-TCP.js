const net = require("node:net");
let server = net.Server();

function writeResponse(socket, url) {
  let response = "HTTP/1.1 200 OK\r\n";
  response += "Content-Type: text/html\r\n";
  response += "\r\n"; // VERY IMPORTANT

  if (url === "/homepage") {
    response += "<h1>Homepage</h1>";
  }

  if (url === "/aboutpage") {
    response += "<h1>Aboutpage</h1>";
  }

  socket.write(response);
  socket.end();
}

server.on("connection", (socket) => {
  //   accept client's request
  socket.on("data", (data) => {
    let httpRequest = data.toString();
    let lines = httpRequest.split("\r\n");
    let statusLine = lines[0];
    console.log("statusLine ", statusLine);

    let statusLineParts = statusLine.split(" ");

    let url = statusLineParts[1];
    writeResponse(socket, url);
  });
});

server.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
