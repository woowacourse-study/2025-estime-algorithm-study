A. Deep Set 구현 (난이도: 쉬움~보통)
요구사항
다음 시그니처의 함수를 구현하라.
ts
function setDeep(obj: Record<string, any>, path: string, value: any): Record<string, any>
path
는 "a.b.c"처럼 .로 구분되는 경로다.
경로를 따라 중간 키가 **없으면 빈 객체 {}**를 생성한다.
마지막 키에 value를 할당한다.
원본 객체를 변경하는 버전으로 먼저 구현하라. (보너스: 원본을 변경하지 않는 immutable 버전도 구현)
예시
입력: ({ a: 0 }, "a.b.c", 3) → 결과: { a: { b: { c: 3 } } }
입력: ({ a: 0 }, "b.c", 3) → 결과: { a: 0, b: { c: 3 } }
입력: ({}, "x", 1) → 결과: { x: 1 }
입력: ({ a: null }, "a.b", 2) → 결과: { a: { b: 2 } } (null도 객체 아님 → {}로 교체)
