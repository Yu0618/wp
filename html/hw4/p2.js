//arrayMin(a) 函數傳回陣列 a 裡最小的那個數字

var a=[15,34,20,8,55,17,29]
function array_min(a){
    var c=a[0];
    for(let i in a)
        if(c>a[i])
            c=a[i];
    return c;
}
console.log(array_min(a))
