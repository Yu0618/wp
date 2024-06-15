// 請寫一個函數 daysInYear(n) 傳回西元 n 年應該有幾天
function daysInYear(n) {
    if ((n % 4 === 0 && n % 100 !== 0)|| n % 400 === 0) {
        return 366;
    }
    return 365;
}

console.log(daysInYear(2024));
