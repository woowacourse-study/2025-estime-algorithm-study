## 35. Search Insert Position

## 풀이 날짜(9/11)

## 풀이 시간

40분. 브루트 포스가 안되서 답봄.

## 풀이

```tsx
for (let i = 0; i < nums.length - 2; i++) {
  for (let j = i + 1; j < nums.length - 1; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      if (nums[j] < nums[k]) return true;
    }
  }
}
```

초기의 코드 구조는 이렇다. 당연히 시간 통과를 못한다.

한편, 그리디를 쓰면 쉽게 풀수 있다.

```tsx
let first = Infinity;
let second = Infinity;

for (const num of nums) {
  if (first >= num) {
    first = num;
  } else if (second >= num) {
    second = num;
  } else return true;
}
return false;
```

이 구조는 굉장히 유용하게 가져갈수 있다! 많이 생각해보자.
