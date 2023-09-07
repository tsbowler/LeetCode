// https://leetcode.com/problems/climbing-stairs/

function climbStairs(n: number): number {
    if (n<=3)
        return n;
    else
        return 2*climbStairs(n-2)+climbStairs(n-3);
};