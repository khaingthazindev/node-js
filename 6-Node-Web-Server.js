const http = require("node:http");
const server = http.createServer((req, res) => {
  //   console.log("request ", req);
  //   res.setHeader("Content-Type", "text/html");
  res.end("<h1>Server is running</h1>");
});

server.listen(3000, () => {
  const { port } = server.address();
  console.log(`server is listening on: http://localhost:${port}`);
});
