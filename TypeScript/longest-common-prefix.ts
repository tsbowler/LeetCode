// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {
    let strsSort: string[] = strs.sort();
    let sizeBeg = strsSort[0].length;
    let sizeFin = strsSort[strsSort.length-1].length;
    let preSize = sizeBeg>sizeFin ? sizeFin : sizeBeg;
    let ans: string = "";
    for (let i=0; i<preSize; i++)
    {
        if (strsSort[0].charAt(i) == strsSort[strsSort.length-1].charAt(i))
            ans+=strsSort[0].charAt(i);
        else 
            break;
    }
    return ans;
};