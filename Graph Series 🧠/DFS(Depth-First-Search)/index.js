const dfsForGraph = (V, adjust) => {

    let visited = new Array(V).fill(0);
    let ls = [];

    const dfs = (node) => {

        visited[node] = 1;
        ls.push(node);
        for(let i=0;i<adjust[node].length;i++) {
            let it = adjust[node][i];
            if(!visited[it]) {
                dfs(it);
            }
        }
    }
    let start = 0;
    dfs(start);

    return ls;
};

var V = 5;
var adj = [
  [1, 2, 3],  // Node 0 is connected to 1, 2, 3
  [0],
  [0, 4],
  [0],
  [2]
];

console.log(dfsForGraph(V, adj)); // [ 0, 1, 2, 4, 3 ]
