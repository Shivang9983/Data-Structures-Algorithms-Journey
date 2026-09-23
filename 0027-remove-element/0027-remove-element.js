/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {

    let read = 0;
    let write = 0;

    while (read < nums.length) {

        if (nums[read] === val) {
        } else {
            nums[write] = nums[read];
            write++;
        }
        read++;
    }
    return write;
};