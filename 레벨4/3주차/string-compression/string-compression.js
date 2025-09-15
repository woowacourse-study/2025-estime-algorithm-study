var compress = function (chars) {
  let left = 0;
  let right = 0;

  while (right < chars.length) {
    let currentChar = chars[right];
    let start = right;

    while (right < chars.length && chars[right] === currentChar) {
      right++;
    }

    let count = right - start;

    chars[left++] = currentChar;

    if (count > 1) {
      for (let digit of count.toString()) {
        chars[left++] = digit;
      }
    }
  }

  return left;
};
