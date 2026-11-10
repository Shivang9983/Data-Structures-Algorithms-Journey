const containsDuplicate = function(nums){
  
    let array = new Set();

    for (let i = 0; i < nums.length; i++){
     let currentNumber = nums[i];

     if(array.has(currentNumber)){
        return true;
     }else{
        array.add(currentNumber);
     }

    }
    return false;
};