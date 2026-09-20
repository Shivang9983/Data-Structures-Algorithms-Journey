/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */const topKFrequent = function(nums, k) {
    let freq = {};

    
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    
    let arr = [];

    for (let num in freq) {
        arr.push([Number(num), freq[num]]);
    }

   
    arr.sort((a, b) => b[1] - a[1]);

    
    let result = [];

    for (let i = 0; i < k; i++) {
        result.push(arr[i][0]);
    }

    return result;
};