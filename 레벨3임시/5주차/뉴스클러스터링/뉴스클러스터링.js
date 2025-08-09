function solution(str1, str2) {
  const str1arr = [];
  const str2arr = [];
  for (let i = 0; i < str1.length - 1; i++) {
    const a = str1.slice(i, i + 2).toLowerCase();
    if (/^[a-z]{2}$/i.test(a)) str1arr.push(a);
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const a = str2.slice(i, i + 2).toLowerCase();
    if (/^[a-z]{2}$/i.test(a)) str2arr.push(a);
  }

  function getCountMap(arr) {
    const map = {};
    arr.forEach((e) => (map[e] = (map[e] || 0) + 1));
    return map;
  }

  const map1 = getCountMap(str1arr);
  const map2 = getCountMap(str2arr);

  let interCount = 0;
  let unionCount = 0;

  const keys = new Set([...Object.keys(map1), ...Object.keys(map2)]);

  keys.forEach((k) => {
    const c1 = map1[k] || 0;
    const c2 = map2[k] || 0;
    interCount += Math.min(c1, c2);
    unionCount += Math.max(c1, c2);
  });

  if (interCount === 0 && unionCount === 0) return 65536;
  else return Math.floor((interCount / unionCount) * 65536);
}
