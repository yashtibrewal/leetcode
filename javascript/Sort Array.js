/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {

    // Heap Sort

    let N = nums.length;

    function getLeftChild(i) {
        return 2 * i + 1;
    }

    function getRightChild(i) {
        return 2 * i + 2;
    }

    function heapify(i) {

        // check if ith position is in the right position.
        // if not heapify it and then call the changed position.

        let leftChild = getLeftChild(i);
        let rightChild = getRightChild(i);
        let tempLargest = i; // assuming i is largest.

        if (leftChild < N && nums[leftChild] > nums[tempLargest]) {
            tempLargest = leftChild;
        }

        if (rightChild < N && nums[rightChild] > nums[tempLargest]) {
            tempLargest = rightChild;
        }

        console.log(i, tempLargest, leftChild, rightChild, nums);

        if (tempLargest != i) {
            // swap and heapify
            [nums[i], nums[tempLargest]] = [nums[tempLargest], nums[i]];
            heapify(tempLargest);
        }


    }

    function buildHeap() {

        const startIndex = Math.floor(N / 2) - 1;

        for (let i = startIndex; i >= 0; i--) {
            heapify(i);
        }

    }

    function heapSort() {

        buildHeap();
        for (let i = N - 1; i >= 0; i--) {
            [nums[0], nums[i]] = [nums[i], nums[0]];
            N--;
            heapify(0);
        }

    }

    heapSort();


    return nums;
};

console.log(sortArray([5, 2, 3, 1]));