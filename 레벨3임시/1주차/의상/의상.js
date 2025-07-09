function solution(clothes) {
  const clothesDict = {};
  let answer = 1;
  for (const [cloth, kind] of clothes) {
    if (!clothesDict[kind]) clothesDict[kind] = [cloth];
    else clothesDict[kind].push(cloth);
  }
  console.log(clothesDict);
  for (const [kind, cloth] of Object.entries(clothesDict)) {
    answer *= cloth.length + 1;
  }
  return answer - 1;
}
