// https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {

    const hash=
    {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    const strStack: string[] = [];

    for (let i = 0; i<s.length; i++)
    {
        let cha: string = s.charAt(i);
        if (cha in hash)
            strStack.push(cha);
        else
        {
            let popper = strStack.pop();
            if (popper == undefined || hash[popper] != cha)
                return false;
        }    
    }

    return strStack.length==0;
};