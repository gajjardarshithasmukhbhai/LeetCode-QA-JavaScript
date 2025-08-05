const numOfUnplacedFruits = (fruits, baskets) => {
    const result = 0;
    for (let i = 0; i < fruits.length; i++) {
        let unset = 1;
        for (let j = 0; j < baskets.length; j++) {
            if(fruits[i]<=baskets[j]) {
                baskets[j] = 0;
                unset = 0;
                break;
            }
        }
        count = count + unset;
    }
    return count;
};