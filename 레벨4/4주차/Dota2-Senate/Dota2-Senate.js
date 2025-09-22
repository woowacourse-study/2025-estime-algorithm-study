/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let radiantQueue = [];
  let direQueue = [];

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") radiantQueue.push(i);
    else direQueue.push(i);
  }
  while (radiantQueue.length > 0 && direQueue.length > 0) {
    let rIndex = radiantQueue.shift();
    let dIndex = direQueue.shift();
    if (rIndex > dIndex) {
      direQueue.push(dIndex + senate.length);
    } else {
      radiantQueue.push(rIndex + senate.length);
    }
  }
  return radiantQueue.length !== 0 ? "Radiant" : "Dire";
};
