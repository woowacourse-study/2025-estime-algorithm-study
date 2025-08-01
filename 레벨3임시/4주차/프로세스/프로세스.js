function solution(priorities, location) {
  const queue = [];
  let index = 0;
  for (const prior of priorities) {
    queue[index] = { index, prior };
    index++;
  }

  let count = 0;
  while (true) {
    const ele = queue.shift();
    const hasHigher = queue.some((other) => other.prior > ele.prior);
    if (hasHigher) {
      queue.push(ele);
    } else {
      count++;
      if (ele.index === location) return count;
    }
  }
}
