# 12. Integer to Roman

## 푼 날짜(7/12)

## 문제

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P A H N
A P L S I I G
Y I R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

## Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

## Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"

## Explanation:

P I N
A L S I G
Y A H R
P I

## Example 3:

Input: s = "A", numRows = 1
Output: "A"

## Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000

## 풀이 시간

60분 + 답봄

## 풀이

그림 그대로 따라가면 사실 그렇게 어렵지 않다. 일단 있는 row만큼 하나의 array를 생성해주고, cur와 dir의 두개의 플래그를 사용해, cur = 0인경우, dir =1, cur = numRow인경우 dir = -1 이렇게 하고, cur에 dir를 더해주면 된다 `cur+=dir` 이러면 자연스럽게 지그재그 컨버전이 된다. 사실, dfs 그래프 탐색보다 쉬운 문제이나.. 처음에 이것을 맞닥드렸을때는 이 사실을 떠오르기가 힘들다.
