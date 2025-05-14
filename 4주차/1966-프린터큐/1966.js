const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const strings = require("fs").readFileSync(filePath, "utf8").trim().split("\n");
const testCases = strings.slice(1);
const testCasesArr = [];
let temp = [];

for (let i = 0; i < testCases.length; i++) {
  if (temp.length !== 0) {
    const priority = testCases[i].split(" ").map(Number);
    const [arrLength, target] = temp;
    const printQueue = priority.map((n, idx) => {
      return { i: idx, n };
    });
    testCasesArr.push({
      arrLength,
      target,
      printQueue,
    });
    temp = [];
  } else {
    temp = testCases[i].split(" ").map(Number);
  }
}

function checkMax(partPrintQueue, checkingNumber) {
  return Math.max(...partPrintQueue.map(({ n, i }) => n)) <= checkingNumber;
}

for (const testCase of testCasesArr) {
  const result = [];
  const { target, printQueue } = testCase;

  while (printQueue.length !== 0) {
    const checking = printQueue.shift();
    const { n, i } = checking;
    if (checkMax(printQueue, n)) {
      result.push(checking);
    } else {
      printQueue.push(checking);
    }
  }
  const targetResult = result.find(({ i, n }) => target === i);
  console.log(result.indexOf(targetResult) + 1);
}
