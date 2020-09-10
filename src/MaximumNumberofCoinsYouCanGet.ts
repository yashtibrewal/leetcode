/**
 *
 * @param {Array<number>} piles
 * @return {number}
 */
function maxCoins(piles: number[]): number {
  // sort the number array
  // pick the 2nd element of every group of 3 from start
  sort(piles, 0, piles.length-1);
  let total = 0;
  const n = Math.floor(piles.length/3);
  let counter = piles.length - 2;
  for (let i=0; i<n; i++, counter-=2) {
    total += piles[counter];
  }
  return total;
};

/**
 *
 * @param {Array<number>} arr
 * @param {number} l
 * @param {number} m
 * @param {number} r
 */
function merge(arr: number[], l:number, m:number, r:number) {
  const tempA = [];
  const tempB = [];
  for (let i=l; i<=m; i++) {
    tempA.push(arr[i]);
  }
  for (let i = m+1; i <=r; i++) {
    tempB.push(arr[i]);
  }
  let i =0; let j = 0; let c=l;
  while (i<tempA.length && j<tempB.length) {
    if (tempA[i]<tempB[j]) {
      arr[c] = tempA[i];
      i++;
    } else {
      arr[c] = tempB[j];
      j++;
    }
    c++;
  }
  while (i<tempA.length) {
    arr[c] = tempA[i];
    i++;
    c++;
  }
  while (j<tempB.length) {
    arr[c] = tempB[j];
    j++;
    c++;
  }
}

/**
 *
 * @param {Array<number>} arr
 * @param {number} l
 * @param {number} r
 */
function sort(arr:number[], l:number, r:number) {
  if (l<r) {
    const m = Math.floor((l+r)/2);
    // console.log('sort '+arr+' l '+l+' m '+m);
    sort(arr, l, m);
    // console.log('sort '+arr+' m '+(m+1)+' r '+r);
    sort(arr, m+1, r);
    // console.log('merge '+arr+' l '+l+' m '+m+' r '+r);
    merge(arr, l, m, r);
  }
}

export default maxCoins;

