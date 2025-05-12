const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const strings = require("fs").readFileSync(filePath, "utf8").trim().split("\n");

const ori = new Set(strings[1].split(" ").map(Number));
const comp = strings[3].split(" ").map(Number);

const ans = [];
for (const n of comp) {
  if (ori.has(n)) ans.push(1);
  else ans.push(0);
}

console.log(ans.join("\n"));
