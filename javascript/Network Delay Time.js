/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {

    const visited = new Array(n);
    visited.fill(false);

    const distances = new Array(n);
    distances.fill(Math.min());
    distances[k - 1] = 0;

    let source = k - 1;

    while (!visited[source]) {

        // visit source
        visited[source] = true;

        for (let path of times) {
            // 1-indexed
            if (path[0] - 1 == source) {
                distances[path[1] - 1] = Math.min(distances[path[1] - 1], distances[path[0] - 1] + path[2]);
            }
        }

        // find the minimum distanced vertex and visit it.
        let min = Math.min();
        for (let i = 0; i < n; i++) {
            if (!visited[i] && distances[i] < min) {
                min = distances[i];
                source = i;
            }
        }

    }

    // return distances;
    if(distances.includes(Math.min())) return -1;
    else return Math.max(...distances)

};

console.log(networkDelayTime([[2, 1, 5], [2, 3, 1], [3, 4, 1]], 4, 2));
console.log(networkDelayTime([[1,2,1], [2,3,2]], 3, 1));
console.log(networkDelayTime([[1,2,1]], 2, 2));
console.log(networkDelayTime([[1, 2, 1], [2, 3, 7], [1, 3, 4], [2, 1, 2]], 3, 2));