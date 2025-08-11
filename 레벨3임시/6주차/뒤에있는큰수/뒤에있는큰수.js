function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1);
  const stack = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    const cur = numbers[i];
    while (stack.length && stack[stack.length - 1] <= cur) {
      stack.pop();
    }
    if (stack.length) answer[i] = stack[stack.length - 1];

    stack.push(cur);
  }
  return answer;
}
