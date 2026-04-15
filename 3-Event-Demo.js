const { EventEmitter } = require("node:events");

const eventEmitter = new EventEmitter();

// without promise can inform to the origin when the process has done
// further more different module can't know Promise
function process() {
  setTimeout(() => {
    eventEmitter.emit("customEvent", "Process done.");
  }, 1000);
}
process();

eventEmitter.on("customEvent", function (e) {
  console.log("Event fired ", e);
});
