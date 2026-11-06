/**
 * @param {number[]} nums
 * @return {number}
 */
   const rob = function robBottomUp(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let prev2 = 0;           
    let prev1 = nums[0];     

    for (let i = 1; i < nums.length; i++) {
        const take = nums[i] + prev2;
        const skip = prev1;
        const current = Math.max(take, skip);

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}