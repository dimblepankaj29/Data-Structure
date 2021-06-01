/**
 * @param {number[]} time
 * @return {number}
 * Input: [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60

 * 
 */
const numPairsDivisibleBy60 = (time) => {
    const appearDic = {};
    let ans = 0;
    time.forEach(el => {
        const mod = el % 60;
        const left = (60 - mod) % 60;
        ans += appearDic[left] ? appearDic[left] : 0;
        appearDic[mod] = appearDic[mod] ? appearDic[mod] + 1 : 1;
        console.log(appearDic[mod])
    });
    return ans;
};

console.log(numPairsDivisibleBy60([30,20,150,100,40]))