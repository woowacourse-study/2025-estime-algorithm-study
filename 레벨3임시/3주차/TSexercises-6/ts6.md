# 조이스틱

## 푼 날짜(7/21)

## Intro:

    Filtering requirements have grown. We need to be
    able to filter any kind of Persons.

## Exercise:

    Fix typing for the filterPersons so that it can filter users
    and return User[] when personType='user' and return Admin[]
    when personType='admin'. Also filterPersons should accept
    partial User/Admin type according to the personType.
    `criteria` argument should behave according to the
    `personType` argument value. `type` field is not allowed in
    the `criteria` field.

## Higher difficulty bonus exercise:

    Implement a function `getObjectKeys()` which returns more
    convenient result for any argument given, so that you don't
    need to cast it.

    let criteriaKeys = Object.keys(criteria) as (keyof User)[];
    -->
    let criteriaKeys = getObjectKeys(criteria);

\*/

## 풀이시간

40분 + 답봄

## 풀이

TS의 Function Overloads는
Java의 function overloading같이 사용하여 타입을 좁히는 내용이다. 굉장히 흥미롭지만, 써먹을수 있을지는 모르겠다.
