/**
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const len = flowerbed.length;
  if (n > Math.ceil(len / 2)) {
    return false;
  }
  if (len === 1) {
    if (flowerbed[0] + n > 1) {
      return false;
    } else {
      return true;
    }
  } else if (len === 2) {
    if (flowerbed[0] + flowerbed[1] + n > 1) {
      return false;
    } else {
      return true;
    }
  } else {
    if (flowerbed[0] === 0 && flowerbed[1] === 0) {
      flowerbed[0] = 1;
      n--;
    }
    for (let i = 1; i < len - 1; i++) {
      if (
        flowerbed[i - 1] === 0 &&
        flowerbed[i + 1] === 0 &&
        flowerbed[i] === 0
      ) {
        flowerbed[i] = 1;
        n--;
      }
    }
  }
  if (flowerbed[len - 1] === 0 && flowerbed[len - 2] === 0) {
    n--;
  }
  if (n <= 0) {
    return true;
  } else {
    return false;
  }
}

export {canPlaceFlowers};
