// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

function strStr(haystack: string, needle: string): number {
    let needLen: number = needle.length;
    for (let i=0; i<=(haystack.length-needLen); i++)
    {
        if (haystack.substring(i,i+needLen) == needle)
        {
            return i;
        }
    } 
    return -1;
};