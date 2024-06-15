//gcd(a,b) 傳回 a, b 兩數字的最大公因數。
var a=10,b=15
function gcd(a,b){
    if(a%b==0)
        return b;
    else
        return gcd(b,a%b);
}

console.log(gcd(a,b));
