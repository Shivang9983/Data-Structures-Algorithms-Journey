/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maximizeSum(nums, k) {
    let maxVal = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maxVal) {
            maxVal = nums[i];
        }
    }
    
    let totalSum = 0;
    for (let i = 0; i < k; i++) {
        totalSum += maxVal;
        maxVal = maxVal + 1;
    }
    
    return totalSum;
}


