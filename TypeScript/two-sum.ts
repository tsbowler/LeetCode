// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    let Mappy = new Map<number, number>();
    for (let i=0; i<nums.length; i++)
    {
        let comp: number = target-nums[i];
        if(Mappy.has(comp))
            return [i,Mappy.get(comp)];
        else
        Mappy.set(nums[i],i);
    }
    return [];
};