const { readFile } = require("node:fs/promises");

async function main() {
  try {
    const data = await readFile("./text.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
main();
