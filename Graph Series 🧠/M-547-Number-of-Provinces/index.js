const findCircleNum = (isConnected) => {

    let visited = new Array(isConnected.length).fill(0);

    const dfs = node => {
        visited[node] = 1;

        for(let i=0;i<isConnected[node].length;i++) {
            if(isConnected[node][i] === 1 && visited[i] === 0) {
                dfs(i);
            }
        }

    }

    let province = 0;

    for(let i=0; i<isConnected.length; i++) {
        if(visited[i] === 0) {
            dfs(i);
            province++;
        }
    }

    return province;
}