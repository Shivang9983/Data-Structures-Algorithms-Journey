/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let subsets = [[]]

    for(let i = 0 ; i < nums.length ; i ++)
    {
             let length = subsets.length;
             for(let j = 0 ; j < length ; j++){
                subsets.push([...subsets[j],nums[i]])
             }

    }

    return subsets
};