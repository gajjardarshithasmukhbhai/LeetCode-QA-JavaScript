const asteroidCollision = (asteroids) => {
    const monotonicStack = [];
    for(let i=0;i<asteroids.length;i++) {
        console.log(monotonicStack);
        while(monotonicStack.length>0 && asteroids[i] < 0 && monotonicStack[monotonicStack.length-1] > 0) {
            if(monotonicStack[monotonicStack.length-1] === Math.abs(asteroids[i])) {
                monotonicStack.pop();
            }
            else if(monotonicStack[monotonicStack.length-1] < Math.abs(asteroids[i])) {
                monotonicStack.pop();
                continue;
            }
            
            asteroids[i] = 0; // This Point Asteroid is exploded 
        }
        // exploded Asteroid we can't be pushed
        if(asteroids[i]!=0) {
            monotonicStack.push(asteroids[i]);
        }
    }

    return monotonicStack;
};
console.log(asteroidCollision([5,8,-8]));
