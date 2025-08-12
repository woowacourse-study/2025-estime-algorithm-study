/**
 * 방문한 서로 다른 길(선분)의 개수를 반환합니다.
 *
 *
 * https://school.programmers.co.kr/learn/courses/30/lessons/49994
 *
 * @param {string} dirs - U, D, R, L로 이루어진 이동 명령 문자열
 * @returns {number} 방문한 서로 다른 길의 개수
 */

function solution(dirs) {
  let dx = 0;
  let dy = 0;
  const direction = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  const visited = new Set();
  let count = 0;

  for (const dir of dirs) {
    const lastX = dx;
    const lastY = dy;
    const [moveX, moveY] = direction[dir];
    const newX = lastX + moveX;
    const newY = lastY + moveY;

    if (newX < -5 || newX > 5 || newY < -5 || newY > 5) {
      continue;
    }

    // 순서 바뀌어도 같은 경로라서 정렬 해서 정리해야 함

    const path1 = `${lastX},${lastY},${newX},${newY}`;
    const path2 = `${newX},${newY},${lastX},${lastY}`;

    if (!visited.has(path1) && !visited.has(path2)) {
      visited.add(path1);
      visited.add(path2);
      count++;
    }

    dx = newX;
    dy = newY;
  }

  return count;
}
