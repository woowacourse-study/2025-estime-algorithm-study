function solution(n, words) {
  let prevWord = words[0];
  let answer = [0, 0];
  let answeredOnes = [prevWord];
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      prevWord = words[i];
      answeredOnes = [prevWord];
      continue;
    }
    if (words[i][0] !== prevWord.at(-1)) {
      const order = (i + 1) % n || n;

      answer = [order, Math.floor(i / n) + 1];
      break;
    }
    if (answeredOnes.includes(words[i])) {
      const order = (i + 1) % n || n;
      answer = [order, Math.floor(i / n) + 1];
      break;
    }
    if (words[i].length === 1) {
      const order = (i + 1) % n || n;
      answer = [order, Math.floor(i / n) + 1];
      break;
    }

    prevWord = words[i];

    answeredOnes.push(words[i]);
  }
  return answer;
}
