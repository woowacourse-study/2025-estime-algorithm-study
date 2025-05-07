const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const strings = require("fs").readFileSync(filePath, "utf8").trim().split("\n");
const inputCommends = strings.slice(1);
let set = new Set();
const outputs = [];
for (const inputCommend of inputCommends) {
  const [command, number] = inputCommend.split(" ");
  switch (command) {
    case "add":
      set.add(Number(number));
      break;
    case "remove":
      if (set.has(Number(number))) set.delete(Number(number));
      break;
    case "check":
      set.has(Number(number)) ? outputs.push(1) : outputs.push(0);
      break;
    case "toggle":
      set.has(Number(number))
        ? set.delete(Number(number))
        : set.add(Number(number));
      break;
    case "all":
      set = new Set(Array.from({ length: 20 }, (_, i) => i + 1));
      break;
    case "empty":
      set = new Set();
      break;
  }
}

console.log(outputs.join("\n"));
