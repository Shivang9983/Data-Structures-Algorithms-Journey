/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maximizeSum(nums, k) {
   
    let maxVal = Math.max(...nums);
    
    
    let ans = (maxVal * k) + (k * (k - 1)) / 2;
    
    return ans;
}


