function getSumOfAnArray(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
    const index = i;

    const element = numbers[index];
    sum = sum + element;
    // console.log(index, element, sum);
}
return sum;
}
function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = []
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
       if(element % 2 !== 0){
        console.log(index, element);
        oddNumbers.push(element);
       }
    }
    return oddNumbers;
}


const myNumbers = [12, 34, 42, 53, 11,24,54];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('odd number sum', oddNumberSum);