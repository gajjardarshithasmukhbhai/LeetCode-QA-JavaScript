const bfsForGraph = (vector, adjust) => {
    let visited = new Array(vector).fill(0);
    visited[0] = 1;
    let q = [];
    q.push(0);

    let bfs = [];

    while(q.length>0) {
        let node = q.shift();

        bfs.push(node);

        for(let i=0; i < adj[node].length; i++) {
            let it = adj[node][i];

            if(visited[it]===0) {
                visited[it] = 1;
                q.push(it)
            }
        }
    }

    return bfs;
}

var adj = [[2,3,1], [0], [0,4], [0], [2]];
console.log(bfsForGraph(5, adj));  
// Output: [0,2,3,1,4]

