const net = require("node:net");
let server = net.Server();

server.on("connection", (socket) => {
  //   console.log(
  //     "on connection ",
  //     socket.remoteAddress,
  //     " port ",
  //     socket.remotePort,
  //   );

  //   accept client's request
  socket.on("data", (data) => {
    console.log("on data ", data.toString());
    socket.end("Hello World");
  });
});

server.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
