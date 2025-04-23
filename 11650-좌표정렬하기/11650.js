const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const strings = require("fs").readFileSync(filePath, "utf8").trim().split("\n");
const n = +strings[0];
const coord = strings.slice(1).map((string) => {
  const [x, y] = string.split(" ");
  return { x: Number(x), y: Number(y) };
});

coord.sort((a, b) => {
  if (a.x > b.x) return 1;
  if (a.x < b.x) return -1;
  else return a.y - b.y;
});
console.log(coord.map(({ x, y }) => `${x} ${y}`).join("\n"));
