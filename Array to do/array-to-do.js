// push to the front of the array

function pushFront(arr, val) {
    for (let i = arr.length; i >= 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = val
    return arr
}

console.log(pushFront([1, 2, 3, 4], 5))


// pop the first value of the array

function popFront(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    return arr
}

console.log(popFront([1, 2, 3, 4]))



// insert at a certain position of the array

function insertAt(arr, value, idx) {
    for (let i = arr.length; i >= idx; i--) {
        arr[i] = arr[i - 1]
    }
    arr[idx] = value
    return arr
}

console.log(insertAt([1, 2, 3, 4], 2, 4))