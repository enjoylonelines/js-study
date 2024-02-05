const Nums = new Array(45).fill().map((el, i)=> i + 1);
const suffleNums = [];
while(Nums.length > 0){
    const ranNum = Math.floor(Math.random() * Nums.length);
    const ranArr = Nums.splice(ranNum,1);
    const value = ranArr[0];
    suffleNums.push(value);
}
const mainNums = suffleNums.slice(0,6).sort((a,b)=> a- b)
const bonusNum = suffleNums[6];
console.log(mainNums, bonusNum);

