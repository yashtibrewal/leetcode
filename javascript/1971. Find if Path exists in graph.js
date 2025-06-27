/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {

    // Changing the data structure to objects of keys and arrays
    const paths = {};
    for (const item of edges) {
        if (paths[item[0]]) {
            paths[item[0]].push(item[1])
        } else {
            paths[item[0]] = [item[1]];
        }
        if (paths[item[1]]) {
            paths[item[1]].push(item[0])
        } else {
            paths[item[1]] = [item[0]];

        }
    }
    console.log(paths)
    return findPath(paths, source, destination, []);

};


const findPath = function (edges, source, destination, discoveredPoints) {

    if (discoveredPoints.includes(source)) return false;

    const destinationPoints = edges[source];
    if (destinationPoints.includes(destination)) {
        return true;
    }

    discoveredPoints.push(source);
    let found = false;
    for (let newSource of destinationPoints) {
        found = found || findPath(edges, newSource, destination, discoveredPoints);
    }

    return found;
}

console.log(validPath(9, [[4,3],[1,4],[4,8],[1,7],[6,4],[4,2],[7,4],[4,0],[0,9],[5,4]], 5, 9));