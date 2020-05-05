/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort((x, y) => x - y);
    nums = nums.filter((e, i, array) => array.indexOf(e) == i);

    let largestNum = nums[nums.length-1];

    for (var i=nums.length-1; i>=0; i--)
    {
        if (nums[i] < largestNum)
        {
            return nums[i];
        }
    }

    return largestNum;
}
