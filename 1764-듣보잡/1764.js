const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const strings = require("fs").readFileSync(filePath, "utf8").trim().split("\n");

const [n, m] = strings[0].split(" ").map(Number);

const names = strings.slice(1);
const unseen = names.slice(0, n).sort((a, b) => a.localeCompare(b));
const unheard = new Set(names.slice(n, names.length));
const diff = [];
for (const a of unseen) {
  if (unheard.has(a)) diff.push(a);
}
console.log(diff.length);
console.log(diff.join("\n"));
