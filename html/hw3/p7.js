// 寫一個函數做矩陣相乘 matrixMul(a,b)
var matrixA = [[1,2,3],[4,5,6],[7,8,9]];
var matrixB = [[9,8,7],[6,5,4],[3,2,1]];
function matrixmul(a, b)
{
    var result = [];
    for(var i = 0; i < a.length; i++)
    {
        var row = [];
        for(var j = 0; j < b[0].length; j++)
        {
            var sum = 0;
            for(var k = 0; k < a[0].length; k++ )
            {
                sum += a[i][k] * b[k][j];
            }
            row.push(sum);
        }
        result.push(row);

    }
    return result;
  console.log(matrixmul(matrixA,matrixB));
