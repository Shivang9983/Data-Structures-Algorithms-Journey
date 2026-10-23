/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    let graph = Array.from({ length: n }, () => []);

    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let count = new Array(n).fill(1);
    let answer = new Array(n).fill(0);

    
    function dfs1(node, parent) {
        for (let child of graph[node]) {
            if (child === parent) continue;

            dfs1(child, node);

            count[node] += count[child];
            answer[node] += answer[child] + count[child];
        }
    }

    dfs1(0, -1);

    
    function dfs2(node, parent) {
        for (let child of graph[node]) {
            if (child === parent) continue;

            answer[child] =
                answer[node]
                - count[child]
                + (n - count[child]);

            dfs2(child, node);
        }
    }

    dfs2(0, -1);

    return answer;
};