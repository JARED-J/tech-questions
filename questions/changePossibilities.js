function changePossibilities(target, arrAmount) {
    let result = [];
    let current = [];
    arrAmount.sort();
    cpHelper(arrAmount, target, 0, current, result);

    return result.length;
}

function cpHelper(arrAmount, target, j, curr, result) {
    if (target == 0) {
        let temp = curr.slice();
        result.push(temp);
        return;
    }

    for (let i = j; i < arrAmount.length; i++) {
        if (target < arrAmount[i]) {
            return;
        }
        curr.push(arrAmount[i]);
        cpHelper(arrAmount, target - arrAmount[i], i, curr, result);
        curr.pop();
    }
}

changePossibilities(9, [1, 2, 3]) // 12