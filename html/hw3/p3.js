//寫一個函數判斷 n 是否為質數 isPrime(n)
function isprime(n) 
{
    
    if (n <= 1)
    {
        return false;
    }
    for (var i = 2; i < n; i++) 
    {
        if(n % i == 0)
        {
            return false;
        }
    }
    return true;
}

console.log(isprime(7));
