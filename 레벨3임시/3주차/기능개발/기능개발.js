function solution(progresses, speeds) {
  let answer = [];
  while (progresses.length) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    let count = 0;
    while (progresses.length && progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }

    if (count) answer.push(count);
  }
  return answer;
}
