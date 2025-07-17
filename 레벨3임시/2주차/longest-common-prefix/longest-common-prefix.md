# 14. Longest Common Prefix

## 푼 날짜(7/17)

## 문제

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

## Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

## Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

## Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.

## 풀이 시간

40분 + 답봄

## 풀이

prefix를 가장 처음 단어로 고정하고, 안맞으면 그냥 하나씩 비교해 가면서 지워가면 끝이다.
생각외로 어렵다!
