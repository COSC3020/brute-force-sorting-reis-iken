function permutationSort(a) {
    let length = a.length;
    let permutations = 0;
    doPermutations(a, 0, a.length, permutations);
    return permutations;
}

function doPermutations(a, start, length, permutations) {
    if (start === length - 1) {
        permutations++;
        if (JSON.stringify(a) === JSON.stringify(a.slice().sort((x, y) => x - y))) {
            return true;
        }
    return false;
    }
    for (let i = start; i < length; i++) {
        swap(a, start, i);
        if (doPermutations(a, start + 1, length, permutations)) {
            return true;
        }
        swap(a, start, i);
    }
    return false;
}

function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}
