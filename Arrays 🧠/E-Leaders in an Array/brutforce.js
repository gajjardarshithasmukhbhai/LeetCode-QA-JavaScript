function findLeaders(arr) {
    const n = arr.length;
    const leaders = [];
    
    let maxFromRight = arr[n - 1];
    leaders.push(maxFromRight); // rightmost element is always a leader

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] >= maxFromRight) {
            maxFromRight = arr[i];
            leaders.push(arr[i]);
        }
    }

    return leaders.reverse(); // because we traversed from right to left
}