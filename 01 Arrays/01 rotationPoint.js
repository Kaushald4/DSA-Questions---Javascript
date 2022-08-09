/* Ex-
    4 5 6 7 8 1 2 3

    Time Complexity: O(log n)
    Space Complexity: O(1)
*/
const rotationPoint = (array) => {
    let low = 0;
    let high = array.length - 1;

    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);

        if (array[mid + 1] < array[mid]) {
            return mid + 1;
        } else if (array[mid] < array[mid - 1]) {
            return mid;
        }

        if (array[mid] < array[high]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
};

const array = [6, 2];
console.log(rotationPoint(array));

/*
    using recursion
    Time Complexity: O(log n)
    Space Complexity: O(log n)
*/
const rotationPointHelper = (array, low, high) => {
    if (low > high) {
        return -1;
    }

    const mid = low + Math.floor((high - low) / 2);

    if (array[mid + 1] < array[mid]) {
        return mid + 1;
    }
    if (array[mid] < array[mid - 1]) {
        return mid;
    }

    if (mid < high && array[mid] < array[high]) {
        return rotationPointHelper(array, low, mid - 1);
    } else if (mid > low && array[mid] > array[high]) {
        return rotationPointHelper(array, mid + 1, high);
    }
};
const rotationPointRecursion = (array) => {
    return rotationPointHelper(array, 0, array.length - 1);
};

const array2 = [5, 6, 7, 8, 1];
console.log(rotationPointRecursion(array2));
