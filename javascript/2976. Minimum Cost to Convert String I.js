/**
 * 
 * Flyod Warshell, more or less like the submitted solutions.
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {

    // Creating a 2d dictionary for source and destination

    const graph = [];
    const ALPHABETS = 26;

    for (let i = 0; i < ALPHABETS; i++) {
        graph.push(new Array(ALPHABETS).fill(Infinity));
    }

    for (let i = 0; i < ALPHABETS; i++) {
        graph[i][i] = 0;
    }

    for (let i = 0; i < original.length; i++) {
        const src = original[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const dest = changed[i].charCodeAt(0) - 'a'.charCodeAt(0);
        graph[src][dest] = Math.min(graph[src][dest], cost[i]);
    }

    for (let k = 0; k < ALPHABETS; k++) {
        for (let i = 0; i < ALPHABETS; i++) {
            if (graph[i][k] < Infinity)
                for (let j = 0; j < ALPHABETS; j++) {
                    graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
                }
        }
    }


    let totalCost = 0;

    for (let i = 0; i < source.length; i++) {

        const src = source[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const dest = target[i].charCodeAt(0) - 'a'.charCodeAt(0);

        if (src == dest) continue;

        if (isFinite(graph[src][dest]))
            totalCost += graph[src][dest];
        else return -1;
    }

    return totalCost;
};









/**
 * 
 * This code solved the input correctly, however the time complexity,
 * does not pass the leetcode standard when the source an target are really long.
 * 
 * Djikstra appraoch.
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
// var minimumCost = function (source, target, original, changed, cost) {

//     // we create a source to possible targets and minimum cost of that

//     const edges = {};

//     let len = original.length;

//     for (let i = 0; i < len; i++) {
//         if (edges[original[i]] == undefined) {
//             edges[original[i]] = [[changed[i], cost[i]]];
//         } else {
//             edges[original[i]].push([changed[i], cost[i]]);
//         }
//     }

//     // console.log(edges);

//     let bfsQueue = [];

//     /**
//      * 
//      * @param {''} source 
//      * @param {''} target 
//      * @param {number} cost 
//      * @param {[]} visited 
//      */
//     function bfs(visited) {

//         while (bfsQueue.length != 0) {

//             const item = bfsQueue.shift();
//             const cost = item[1];
//             const neighbours = edges[item[0]];

//             if (neighbours == undefined) return;

//             const tempDict = {};

//             for (const [neighbour, addedCost] of neighbours) {

//                 if (visited[neighbour] == undefined) {
//                     // if not visited, just add.
//                     visited[neighbour] = cost + addedCost;
//                     tempDict[neighbour] = cost + addedCost;
//                 } else {
//                     // if already visited
//                     // compute only if the cost is better
//                     if (visited[neighbour] > cost + addedCost) {
//                         visited[neighbour] = cost + addedCost;
//                         tempDict[neighbour] = cost + addedCost;
//                     }
//                 }
//             }

//             for (let key of Object.keys(tempDict)) {

//                 bfsQueue.push([key, tempDict[key]]);
//             }

//         }


//     }

//     const minimumTravelCost = {}
//     const cache = {};

//     for (i = 97; i <= 122; i++) {
//         cache[String.fromCharCode(i)] = {};
//     }

//     for (let i = 0; i < len; i++) {
//         const sourceChar = original[i];
//         const visitedDestinations = cache[sourceChar];
//         if (visitedDestinations[changed[i]] != undefined) {
//             continue;
//         }

//         visitedDestinations[changed[i]] = true;

//         const visited = {};
//         visited[sourceChar] = 0;

//         bfsQueue = [[sourceChar, 0]];

//         bfs(visited);

//         delete visited[sourceChar];
//         minimumTravelCost[sourceChar] = visited;

//     }

//     // once we have that we can compute the minimum cost and return the value

//     len = source.length;
//     let totalCost = 0;
//     for (let i = 0; i < len; i++) {

//         const src = source[i];
//         const dest = target[i];

//         if (src == dest) continue;

//         if (minimumTravelCost[src] == undefined
//             || minimumTravelCost[src][dest] == undefined
//         ) return -1;


//         totalCost += minimumTravelCost[src][dest];
//     }

//     return totalCost;
// };

console.log(minimumCost("abcd", "acbe", ["a", "b", "c", "c", "e", "d"], ["b", "c", "b", "e", "b", "e"], [2, 5, 5, 1, 2, 20]));