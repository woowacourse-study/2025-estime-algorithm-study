function solution(topping) {
  let answer = 0;
  const rightFreq = new Map();
  const leftFreq = new Map();

  // 오른쪽 세팅
  for (const x of topping) rightFreq.set(x, (rightFreq.get(x) ?? 0) + 1);

  for (let i = 0; i < topping.length - 1; i++) {
    const x = topping[i];

    // 먼저 세팅된 오른쪽에서 시작을해서,
    // 늘어나는 배열을 mutate.
    leftFreq.set(x, (leftFreq.get(x) ?? 0) + 1);

    const r = rightFreq.get(x) - 1;
    if (r === 0) rightFreq.delete(x);
    else rightFreq.set(x, r);

    if (leftFreq.size === rightFreq.size) answer++;
  }
  return answer;
}
