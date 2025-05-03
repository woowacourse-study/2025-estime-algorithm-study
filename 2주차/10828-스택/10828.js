const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const strings = require("fs").readFileSync(filePath, "utf8").trim().split("\n");
const inputCommends = strings.slice(1);
const stack = [];

const outputs = [];
for (const inputCommend of inputCommends) {
  const [command, stuff] = inputCommend.split(" ");
  switch (command) {
    case "push":
      stack.push(stuff);
      break;
    case "pop":
      stack.length === 0 ? outputs.push(-1) : outputs.push(stack.pop());
      break;
    case "size":
      outputs.push(stack.length);
      break;
    case "empty":
      stack.length === 0 ? outputs.push(1) : outputs.push(0);
      break;
    case "top":
      stack.length === 0 ? outputs.push(-1) : outputs.push(stack.at(-1));
      break;
  }
}
console.log(outputs.join("\n"));
