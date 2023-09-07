// https://leetcode.com/problems/roman-to-integer/

function romVal(c: string): number{
        if (c == "I")
            return 1;
        if (c == "V")
            return 5;
        if (c == "X")
            return 10;
        if (c == "L")
            return 50;
        if (c == "C")
            return 100;
        if (c == "D")
            return 500;
        return 1000;
    }

function romanToInt(s: string): number {
    var tot: number = 0;
    for (let i=0; i<s.length; i++)
    {
        let cha: string = s.charAt(i);
        if (i+1 >= s.length)
            return tot+=romVal(cha);
        let next: string = s.charAt(i+1);
        if (romVal(cha)<romVal(next))
            tot-=romVal(cha);
        else
            tot+=romVal(cha);
    }
    return tot;
}; 