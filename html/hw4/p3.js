//filter(a, f) 函數可以根據 f 成功或失敗過濾掉那些不合的內容
function filter(a, f) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (f(a[i])) {
            result.push(a[i]);
        }
    }
    return result;
}

console.log(filter([1, 2, 3, 4], function(x) { return x % 2 == 1; }));
