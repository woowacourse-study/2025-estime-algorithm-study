function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  let time = 0;
  const cache = new Set();
  for (const city of cities) {
    const raw = city.toLowerCase();
    if (cache.has(raw)) {
      time++;
      cache.delete(raw);
      cache.add(raw);
    } else {
      time += 5;
      if (cacheSize === cache.size) {
        const target = cache.values().next().value;
        cache.delete(target);
      }
      cache.add(raw);
    }
  }
  return time;
}
