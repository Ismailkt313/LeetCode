/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let adjList = {}
    if(!edges.length){return true}
    let seen = new Set()
    for(let val of edges){
        if(!adjList[val[0]]){
            adjList[val[0]] = new Set()
        }
        if(!adjList[val[1]]){
            adjList[val[1]] = new Set()
        }
        adjList[val[0]].add(val[1])
        adjList[val[1]].add(val[0])
    }
    let reached = false
     function dfs(start,graph,seen){
        if(start == destination){
             reached =  true
        }
        for(let val of graph[start]){
            if(!seen.has(val)){
                seen.add(val)
                dfs(val,graph,seen)
            }
        }
        return reached
    }
    let ans = dfs(source,adjList,seen)
    return ans
};