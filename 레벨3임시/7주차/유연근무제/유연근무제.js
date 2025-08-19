function solution(schedules, timelogs, startday) {
  const toMinutes = (hhmm) => {
    const h = Math.floor(hhmm / 100);
    const m = hhmm % 100;
    return h * 60 + m;
  };
  const toMs = (hhmm) => {
    const h = Math.floor(hhmm / 100);
    const m = hhmm % 100;
    const d = new Date(0);
    d.setUTCHours(h, m, 0, 0);
    return d.getTime();
  };
  let count = 0;

  for (let i = 0; i < schedules.length; i++) {
    const deadline = toMinutes(schedules[i]) + 10;
    if (!checkTimeViolation(deadline, timelogs[i], startday)) {
      count++;
    }
  }

  function checkTimeViolation(deadline, timelog, startday) {
    for (let dayIndex = 0; dayIndex < timelog.length; dayIndex++) {
      const dow = ((startday - 1 + dayIndex) % 7) + 1;
      if (dow === 6 || dow === 7) continue;

      const cmpTime = toMinutes(timelog[dayIndex]);
      if (cmpTime > deadline) return true;
    }
    return false;
  }

  return count;
}
