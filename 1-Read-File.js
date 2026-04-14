const { readFile } = require("node:fs/promises");

readFile("./text.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
