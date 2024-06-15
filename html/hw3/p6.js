// 寫一個函數做矩陣相加 matrixAdd(a,b)
var a=[[1, 1],
       [3,5],
       [1, 2]];
var b=[[-1,-2],
       [5, 5],
       [-5,9]];
function matrixAdd(a,b){
    for(let i=0;i<2;i++)
        for(let j=0;j<3;j++)
            a[j][i]+=b[j][i];
        return a;
}
console.log(matrixAdd(a,b));
