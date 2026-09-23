/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    let result =[]

    function solve(index,currentSubset){
        if(index === nums.length){
            result.push([...currentSubset])
            return;
        }
        currentSubset.push(nums[index]);
        solve(index + 1, currentSubset);

         currentSubset.pop();
        solve(index + 1, currentSubset);
    }

    solve(0, []);

    return result;
};