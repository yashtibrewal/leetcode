/**
 * @param {number} number_of_cities
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (number_of_cities, edges, distanceThreshold) {

    // This data structure will keep a record of all the cities reachable with at most threshold.
    const citiesInReach = [];

    // This data structure will keep a record of source and all its destination in a map data strcuture.
    const optimizedEdges = {};

    let source, destination, weight;

    // creating optimized edges with help of dictionary.
    for (let i = 0; i < edges.length; i++) {

        source = edges[i][0];
        destination = edges[i][1];
        weight = edges[i][2];

        if (optimizedEdges[source] == undefined) {
            optimizedEdges[source] = [[destination, weight]];
        } else {
            optimizedEdges[source].push([destination, weight]);
        }

        // adding edge in the reverse order since an edge in the array is two way.
        if (optimizedEdges[destination] == undefined) {
            optimizedEdges[destination] = [[source, weight]];
        } else {
            optimizedEdges[destination].push([source, weight]);
        }

    }


    /**
     * 
     * @param {number} source 
     * @param {number} remainingThreshold 
     * @param {{}} visitedCities 
     * @returns 
     */
    function bfs(source, remainingThreshold, visitedCities) {

        // if our threshold is finished, we don't go ahead.
        if (remainingThreshold <= 0) return;

        const destinations = optimizedEdges[source];
        
        // if no destinations, dont run
        if (destinations == undefined) return; 

        //destination[i][0]; // destination
        //destination[i][1]; // weight 

        let destination, weight;
        // find all destinations with source in edges and call bfs again.
        for (let i = 0; i < destinations.length; i++) {
            destination = destinations[i][0];
            weight = destinations[i][1];
            // If not visited
            if (visitedCities[destination] == undefined) {

                if (remainingThreshold - weight >= 0) {

                    visitedCities[destination] = remainingThreshold - weight;
                    bfs(destination, remainingThreshold - weight, visitedCities);
                }
            }
            else if (visitedCities[destination] < remainingThreshold - weight // if visited, then this is better path
            ) {

                if (remainingThreshold - weight >= 0) {

                    visitedCities[destination] = remainingThreshold - weight;
                    bfs(destination, remainingThreshold - weight, visitedCities);
                }
            }
        }
    }

    /**
     * We are setting the source with every city, and traverseing its neighbours recursively.
     */
    for (let i = 0; i < number_of_cities; i++) {

        const visitedCities = {};
        visitedCities[i] = distanceThreshold;

        bfs(i, distanceThreshold, visitedCities);

        delete visitedCities[i];
        citiesInReach.push(visitedCities);
    }

    /**
     * Now we calculate the value of minimum number of cities.
     */
    const lens = citiesInReach.map(item => Object.keys(item).length);
    let min = Math.min(...lens);

    /**
     * We traverse backwards to find which index/city number has the minimum number of cities.
     * We traverse backwards cause we need the city with highest index value.
     */
    for (let i = number_of_cities - 1; i >= 0; i--) {
        if (lens[i] == min) {
            return i;  // has to return cause the min value is derived from that.
        }
    }
}


console.log(findTheCity(5, [[0, 1, 2], [0, 4, 8], [1, 2, 3], [1, 4, 2], [2, 3, 1], [3, 4, 1]], 2));