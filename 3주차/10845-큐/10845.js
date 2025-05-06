const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const strings = require("fs").readFileSync(filePath, "utf8").trim().split("\n");
const inputCommends = strings.slice(1);
const queue = [];
const outputs = [];
for (const inputCommend of inputCommends) {
  const [command, number] = inputCommend.split(" ");

  switch (command) {
    case "push":
      queue.push(Number(number));
      break;
    case "pop":
      queue.length === 0 ? outputs.push(-1) : outputs.push(queue.shift());
      break;
    case "size":
      outputs.push(queue.length);
      break;
    case "empty":
      queue.length === 0 ? outputs.push(1) : outputs.push(0);
      break;
    case "front":
      queue.length === 0 ? outputs.push(-1) : outputs.push(queue[0]);
      break;
    case "back":
      queue.length === 0 ? outputs.push(-1) : outputs.push(queue.at(-1));
      break;
  }
}
console.log(outputs.join("\n"));
