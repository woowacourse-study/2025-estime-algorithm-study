/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const paths = path.split(/\/+/).filter((s) => s !== "");
  const stack = [];

  for (const p of paths) {
    if (p === "..") {
      stack.pop();
    } else if (p !== ".") {
      stack.push(p);
    }
  }

  return "/" + stack.join("/");
};
