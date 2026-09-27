/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
    
    let count = 0;
    let runningSum = 0;
    const seenSums = new Map();
   
    seenSums.set(0, 1);
    
    for (let i = 0; i < nums.length; i++) {
       
        runningSum += nums[i];
       
        let targetOldSum = runningSum - k;
      
        if (seenSums.has(targetOldSum)) {
            
            count += seenSums.get(targetOldSum);
        }
        
        let currentSumCount = seenSums.get(runningSum) || 0;
        seenSums.set(runningSum, currentSumCount + 1);
    }
    
    return count;
}
