
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} edgeTravelTime
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function (n, edges, edgeTravelTime, change) {

    /**
     * To make the edges retrieval faster, it makes sense
     * to convert the edges from 2d array to a dictionary.
     */

    const graph = {};
    const DEST = n;
    const MAX_VERTEX_VISITS = 2; // Basically cycle depth with 1.

    for (let i = 0; i < edges.length; i++) {
        const src = edges[i][0];
        const dest = edges[i][1];

        // create new sub-dictionary if not exists;
        graph[src] = graph[src] || [];
        graph[dest] = graph[dest] || [];

        // since it is bi-directional, we add vice versa.
        graph[src].push(dest);
        graph[dest].push(src);

    }

    // console.log(graph);

    /**
     * If we need to find the 2nd minimum time,
     * we will have to find all possible routes from
     * 1 to n, and hence it means we are doing a backtracking
     * of all solutions.
     */

    // if we have a case where the pathToNCosts size is just 1,
    // then we will have to consider traversering cycle exactly once.
    const pathToNCosts = new Set();

    /**
     * 
     * @param {number} presentTime 
     * @returns {boolean}
     */
    function isGreen(presentTime) {
        return Math.floor(presentTime / change) % 2 == 0
    }

    /**
     * 
     * @param {number} presentTime 
     * @returns {number}
     */
    function timeToGreen(presentTime) {

        const timeSpentOnRed = presentTime % change;
        const timeRemainingToGreen = change - timeSpentOnRed;

        return timeRemainingToGreen;
    }

    /**
     * 
     * @param {number} travelTime 
     * @param {number} presentTime
     * @returns {number} 
     */
    function calcNewTravelTime(travelTime) {

        const temp = travelTime + edgeTravelTime;
        if (isGreen(travelTime)) return temp;

        // wait for it to turn green
        return temp + timeToGreen(travelTime);

    }


    /**
     * TODO: INCORRECT
     * @param {number} max_visits 
     */
    function bfs(max_visits) {

        const queue = [[1, 0]];
        const visitedHistory = {};

        // visited time is to store the history to travel time to reach a node
        const visitedTime = { 1: 0 };
        visitedTime[1] = 0;

        while (queue.length) {

            const [src, travelTime] = queue.shift();
            visitedHistory[src] = visitedHistory[src] == undefined ? 0 : visitedHistory[src];


            if (visitedHistory[src] >= max_visits) {
                continue;
            }

            if (src == DEST) {
                pathToNCosts.add(travelTime);
                visitedHistory[src]++;
                console.log('---', visitedHistory, visitedTime);
                continue;
            }


            let newTravelTime = calcNewTravelTime(travelTime);

            visitedTime[src] = visitedTime[src] == undefined ? newTravelTime : visitedTime[src];
            visitedTime[src] = Math.min(visitedTime[src], newTravelTime);
            visitedHistory[src]++;

            console.log(visitedHistory, visitedTime);

            const neighbours = graph[src];

            if (!neighbours) continue;

            for (let neighbour of neighbours) {

                queue.push([neighbour, newTravelTime]);

            }


        }


    }

    bfs(2);

    console.log(pathToNCosts);

    /**
     * Now we find the 2nd minimum path to cost
     */


    const pathCosts = Array.from(pathToNCosts);


    for (let i = 0; i < 2; i++) {
        for (let j = i + 1; j < pathCosts.length; j++) {
            if (pathCosts[i] > pathCosts[j]) {
                [pathCosts[i], pathCosts[j]] = [pathCosts[j], pathCosts[i]];
            }
        }
    }

    return pathCosts[1];

};

/**
 * 
 * This solution uses dfs, hence it does not follow time limits of leetcode.
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} edgeTravelTime
 * @param {number} change
 * @return {number}
 */
// var secondMinimum = function (n, edges, edgeTravelTime, change) {

//     /**
//      * To make the edges retrieval faster, it makes sense
//      * to convert the edges from 2d array to a dictionary.
//      */

//     const graph = {};
//     const DEST = n;
//     const MAX_VERTEX_VISITS = 2; // Basically cycle depth with 1.

//     for (let i = 0; i < edges.length; i++) {
//         const src = edges[i][0];
//         const dest = edges[i][1];

//         // create new sub-dictionary if not exists;
//         graph[src] = graph[src] || [];
//         graph[dest] = graph[dest] || [];

//         // since it is bi-directional, we add vice versa.
//         graph[src].push(dest);
//         graph[dest].push(src);

//     }

//     // console.log(graph);

//     /**
//      * If we need to find the 2nd minimum time,
//      * we will have to find all possible routes from
//      * 1 to n, and hence it means we are doing a backtracking
//      * of all solutions.
//      */

//     // if we have a case where the pathToNCosts size is just 1,
//     // then we will have to consider traversering cycle exactly once.
//     const pathToNCosts = new Set();

//     /**
//      * 
//      * @param {number} presentTime 
//      * @returns {boolean}
//      */
//     function isGreen(presentTime) {
//         return Math.floor(presentTime / change) % 2 == 0
//     }

//     /**
//      * 
//      * @param {number} presentTime 
//      * @returns {number}
//      */
//     function timeToGreen(presentTime) {

//         const timeSpentOnRed = presentTime % change;
//         const timeRemainingToGreen = change - timeSpentOnRed;

//         return timeRemainingToGreen;
//     }

//     /**
//      * 
//      * @param {number} travelTime 
//      * @param {number} presentTime
//      * @returns {number} 
//      */
//     function calcNewTravelTime(travelTime) {

//         const temp = travelTime + edgeTravelTime;
//         if (isGreen(travelTime)) return temp;

//         // wait for it to turn green
//         return temp + timeToGreen(travelTime);

//     }

//     /**
//      * 
//      * @param {[]} visitedStack 
//      * @param {number} vertex 
//      * @returns {boolean}
//      */
//     function isVisitedMaxTimes(visitedStack, vertex, max_visits) {

//         // If the visited stack contains vertex MAX ALLOWED VISITS times
//         // it means the the vertex is being traversed more then allowed cycles.
//         // Hence we will return true;

//         const timesVisited = visitedStack.filter(v => v == vertex).length;
//         return timesVisited >= max_visits;

//     }

//     /**
//      * 
//      * @param {number} src 
//      * @param {[]} visitedStack 
//      * @param {number} travelTime 
//      * @returns 
//      */
//     function dfs(src, visitedStack, travelTime, max_visits) {

//         // console.log(src, visitedStack, travelTime, max_visits);

//         // check if the src is destination or not.
//         // if destination, add toe costs, and return

//         if (src == DEST) {
//             pathToNCosts.add(travelTime);
//             // console.log('----', src, visitedStack, travelTime);
//             if (isVisitedMaxTimes(visitedStack, src, max_visits)) return;
//         }

//         // find all neighbours for src

//         if (graph[src] == undefined) return;

//         const neighbours = graph[src];

//         // visit the neighbours, add the cost
//         // recursively call with every neighbour being the src.
//         // add to stack before the call
//         // remove from stack after the call

//         // we can only go to new vertex when the signal is green.
//         let newTravelTime = calcNewTravelTime(travelTime);

//         for (let neighbour of neighbours) {

//             // To not get stuck in a cycle.
//             if (isVisitedMaxTimes(visitedStack, neighbour, max_visits)) continue;

//             visitedStack.push(neighbour);

//             dfs(neighbour, visitedStack, newTravelTime, max_visits);

//             visitedStack.pop();

//         }

//     }

//     let visitedStack = [1];
//     dfs(1, visitedStack, 0, 1);

//     // console.log(pathToNCosts);

//     if (pathToNCosts.size == 1) {
//         visitedStack = [1];
//         dfs(1, visitedStack, 0, 2);
//     }


//     /**
//      * Now we find the 2nd minimum path to cost
//      */

//     const pathCosts = Array.from(pathToNCosts);


//     for (let i = 0; i < 2; i++) {
//         for (let j = i + 1; j < pathCosts.length; j++) {
//             if (pathCosts[i] > pathCosts[j]) {
//                 [pathCosts[i], pathCosts[j]] = [pathCosts[j], pathCosts[i]];
//             }
//         }
//     }

//     return pathCosts[1];

// };

console.log(secondMinimum(5, [[1, 2], [1, 3], [1, 4], [3, 4], [4, 5]], 3, 5));
console.log(secondMinimum(2, [[1, 2]], 3, 2));
// console.log(Date.now());
// console.log(secondMinimum(19, [[1, 2], [2, 3], [1, 4], [2, 5], [2, 6], [2, 7], [7, 8], [8, 9], [7, 10], [9, 11], [11, 12], [1, 13], [3, 14], [13, 15], [14, 16], [8, 17], [4, 18], [11, 19], [17, 11], [3, 19], [19, 7], [12, 5], [8, 1], [15, 7], [19, 6], [18, 9], [6, 8], [14, 19], [13, 18], [15, 2], [13, 12], [1, 5], [16, 18], [3, 16], [6, 1], [18, 14], [12, 1], [16, 6], [13, 11], [1, 14], [16, 13], [11, 16], [4, 15], [17, 5], [5, 9], [12, 2], [4, 10], [9, 16], [17, 9], [3, 5], [10, 2], [18, 1], [15, 18], [12, 17], [10, 6], [10, 18], [19, 12], [12, 15], [19, 13], [1, 19], [9, 14], [4, 3], [17, 13], [9, 3], [17, 10], [19, 10], [5, 4], [5, 7], [14, 17], [1, 10], [4, 11], [6, 4], [5, 10], [7, 14], [8, 14], [18, 17], [15, 10], [11, 8], [14, 11], [7, 3], [5, 18], [13, 8], [4, 12], [11, 3], [5, 15], [15, 9], [8, 10], [13, 3], [17, 1], [10, 11], [15, 11], [19, 2], [1, 3], [7, 4], [18, 11], [2, 14], [9, 1], [17, 15], [7, 13], [12, 16], [12, 8], [6, 12], [9, 6], [2, 17], [15, 6], [16, 2], [12, 7], [7, 9], [8, 4]], 850, 411));
// console.log(Date.now());

