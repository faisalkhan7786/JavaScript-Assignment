function Even(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 == 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(Even(arr.slice(1)));
    return newArr;
    document.write(newArr);
}
document.write(Even([1, 3, 5, 4, 7]))