const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// =========================================
// 示范
// =========================================

// 1 map 映射
// 传入的函数的意思：每一个元素要变成的样子
// T => T
// rule: 每个加一
const mapArr1 = arr.map(i => i + 1); // 1 ~ 9

// 2 filter 过滤
// 传入的函数的意思：如果是真就留下，如果是假就去掉 
// T => boolean
// rule: 去掉小于3
const filterArr1 = arr.filter(i => !(i < 3)); // 3 ~ 8


// 3 findIndex 找位置
// 传入的函数的意思：如果是真就是他，得到索引
// rule 找到第一个比n大的数
function solution(n) {
    const idx = arr.findIndex(i => i > n);
    if (idx === -1) {
        console.log('Not Found');
        return;
    }

    const result = arr[idx];
    console.log(result);
}


// 4 reduce 归并
// reduce(传入的函数, 初始的结果)
// 传入的函数的意思: (现在的结果, 这个位置的值) => 下一个结果
// rule 求和
let reduce1 = arr.reduce((sum, i) => sum + i, 0); // 36

// rule 相乘
let reduce2 = arr.reduce((rst, i) => rst * i, 1); // 0 * 8!


// 链式调用1
// rule: 去掉小于3，留下的是偶数
const filterArr2 = arr
    .filter(i => !(i < 3))
    .filter(i => !(i % 2));

// 链式调用1
// rule: 去掉小于3，剩下的乘10，去掉不及格的(60)
const filterArr3 = arr
    .filter(i => !(i < 3))
    .map(i => 10 * i)
    .filter(i => !(i < 60));




// =========================================
// 作业
// =========================================

// job 1: 输出每个元素都是原来的10倍： 0 ~ 80
const job1 = arr.map(i => i * 10);

// job 2: 输出每个元素都是原来的10倍加1： 1 ~ 81
const job2 = arr.map(i => (i * 10) + 1);

// job 3: 过滤, 只留下小于3：0 ~ 2
const job3 = arr.filter(i => i < 3)

