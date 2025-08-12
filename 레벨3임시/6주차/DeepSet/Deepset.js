function setDeep(obj, path, value) {
  const a = path.split(".");

  let o = obj;
  let n;

  while (a.length - 1) {
    n = a.shift();
    if (!(n in o) || typeof o[n] !== "object" || o[n] === null) o[n] = {};
    o = o[n];
  }
  o[a[0]] = value;
  return obj;
}

console.log(setDeep({ a: 0 }, "a.b.c", 3));
console.log(setDeep({ a: 0 }, "b.c", 3));
console.log(setDeep({}, "x", 1));
console.log(setDeep({ a: null }, "a.b", 2));
