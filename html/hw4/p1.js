//min(a,b) 函數傳回 a, b 裡較小的那個數字
function min(a,b){
    if(a>b)
        return b;
    else
        return a;
}
var a=8,b=2;
console.log(min(a,b));
