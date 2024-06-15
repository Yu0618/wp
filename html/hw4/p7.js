//lcm(a,b) 傳回 a, b 兩數字的最小公倍數
var a=10,b=15
function lcm(a,b){
    if(a%b==0)
        return b;
    else
        return lcm(b,a%b);
}

console.log(a*b/lcm(a,b));
