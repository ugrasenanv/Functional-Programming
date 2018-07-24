class Quicksort {

    sort(array, start, end) {
        if (start < end) {
            let middle = partition(array, start, end);

            sort(array, start, middle - 1);
            sort(array, middle + 1, end);
        }
    }

    partition(array, start, end) {
        let pivot = array[start];
        let left = start;
        let right = end + 1;

        do {
            do {
                left++;
            } while (array[left] < pivot && left < end);

            do {
                right--;
            } while (array[right] > pivot);

            swap(array, left, right);
        } while (left < right);

        swap(array, left, right);
        swap(array, start, right);

        return right;
    }

    swap (array, x, y) {
        let temp = array[x];

        array[x] = array[y];
        array[y] = array[x];
    }
}