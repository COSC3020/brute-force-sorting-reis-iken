function permutationSort(a) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    let length = a.length;
    let permutations = 0;
    doPermutations(a, 0, a.length);
    return permutations;
}

function doPermutations(a, start, length) {
    if (start === length - 1) {
        permutations++;
        if (JSON.stringify(a) === JSON.stringify(a.slice().sort((x, y) => x - y))) {
            return true;
        }
        return false;
    }
    for (let i = start; i < length; i++) {
        swap(a, start, i);
        if (doPermutations(a, start + 1, length)) {
            return true;
        }
        swap(a, start, i);
    }
    return false;
}
