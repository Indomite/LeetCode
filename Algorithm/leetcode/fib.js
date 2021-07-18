/* 
## 斐波那契数列

斐波那契数的边界条件是 F(0)=0F(0)=0 和 F(1)=1F(1)=1。当 n>1n>1 时，每一项的和都等于前两项的和，因此有如下递推关系：
 F(n)=F(n−1)+F(n−2)

由于斐波那契数存在递推关系，因此可以使用动态规划求解。动态规划的状态转移方程即为上述递推关系，边界条件为 F(0)F(0) 和 F(1)F(1)。

### 方法一：递归

通过递推关系式，直接带入代码 

- 时间复杂度：O(n)
- 空间复杂度：O(n)
*/

var fib = function(n) {
    if (n < 2) {
        return n
    }
    return fib(n-1) + fib(n-2)
}

/* 
### 方法二：动态规划

根据状态转移方程和边界条件，可以得到时间复杂度和空间复杂度都是 O(n)的实现。由于 F(n)只和 F(n-1)与 F(n-2) 有关，因此可以使用「滚动数组思想」把空间复杂度优化成 O(1) 

- 时间复杂度：O(n)
- 空间复杂度：O(1)
*/

/* var fib = function(n) {
    if (n < 2) {
        return n;
    }
    let p = 0, q = 0, r = 1;
    // 滚动数组
    for (let i = 2; i <= n; i++) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
}; */

/* 
方法三：矩阵快速幂

使用矩阵快速幂的方法可以降低时间复杂度。

- 时间复杂度：O(\log n)*O*(log*n*)。
- 空间复杂度：O(1)*O*(1)。 */

/* var fib = function(n) {
    if (n < 2) {
        return n;
    }
    const q = [[1, 1], [1, 0]];
    const res = pow(q, n - 1);
    return res[0][0];
};

const pow = (a, n) => {
    let ret = [[1, 0], [0, 1]];
    while (n > 0) {
        if ((n & 1) === 1) {
            ret = multiply(ret, a);
        }
        n >>= 1;
        a = multiply(a, a);
    }
    return ret;
}

// 矩阵
const multiply = (a, b) => {
    const c = new Array(2).fill(0).map(() => new Array(2).fill(0));
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
        }
    }
    return c;
} */

console.log(fib(3));