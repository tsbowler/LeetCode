// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums: number[]): number {
    let newNums: number[] = new Array<number>(nums.length);
    let rep: number = 0;
        for (let i = 0; i < nums.length; i++) {
            if(nums[i+1] != nums[i])
            {
                newNums[rep] = nums[i];
                rep++;
            }     
        }
        for (let i = 0; i < rep; i++) {
            nums[i] = newNums[i];
        }
    return rep;
};