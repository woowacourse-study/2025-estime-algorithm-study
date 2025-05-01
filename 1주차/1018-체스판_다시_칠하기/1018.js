const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const strings = require("fs").readFileSync(filePath, "utf8").trim().split("\n");

const [n, m] = strings[0].split(" ").map(Number);
const userBoard = [];
const reversedBoard = [];
const Board = [];

let rows = "";
let reversedRows = "";
let letter = "B";
for (let i = 0; i < 8; i++) {
  if (letter === "W") {
    rows += letter;
    letter = "B";
    reversedRows += letter;
  } else {
    rows += "B";
    letter = "W";
    reversedRows += letter;
  }
}
for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    reversedBoard.push(reversedRows.split(""));
    Board.push(rows.split(""));
  } else {
    reversedBoard.push(rows.split(""));
    Board.push(reversedRows.split(""));
  }
}

const boardStrings = strings.slice(1);
for (const strings of boardStrings) {
  userBoard.push(strings.split(""));
}

function checkBoardMin(xOutset, yOutset) {
  let reversedBoardCount = 0;
  let boardCount = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (reversedBoard[i][j] === userBoard[i + xOutset][j + yOutset])
        reversedBoardCount++;
      if (Board[i][j] === userBoard[i + xOutset][j + yOutset]) boardCount++;
    }
  }
  return Math.min(reversedBoardCount, boardCount);
}

let minCount = Infinity;
for (let i = 0; i <= n - 8; i++) {
  for (let j = 0; j <= m - 8; j++) {
    minCount = Math.min(minCount, checkBoardMin(i, j));
  }
}
console.log(minCount);
