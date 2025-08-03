function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  let time = 0;
  const cache = new Map();
  for (const city of cities) {
    const raw = city.toLowerCase();
    if (cache.has(raw)) {
      time++;
      cache.delete(raw);
      cache.set(raw, true);
    } else {
      time += 5;
      if (cacheSize === cache.size) {
        const target = cache.keys().next().value;
        cache.delete(target);
      }
      cache.set(raw, true);
    }
  }
  return time;
}
