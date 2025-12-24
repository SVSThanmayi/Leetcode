var minimumBoxes = function(apple, capacity) {
    let total = 0;
    for (let i = 0; i < apple.length; i++) {
        total += apple[i];
    }
    capacity.sort((a, b) => b - a);
    let used = 0;
    let sum = 0;

    for (let i = 0; i < capacity.length; i++) {
        sum += capacity[i];
        used++;
        if (sum >= total) {
            return used;
        }
    }
};
