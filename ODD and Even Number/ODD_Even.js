let arr = [4, 5, 7, 8, 14, 45, 76, 67, 66, 64];
let getEvenNumbers = (arr) => {

    let the_evens = arr.filter(number => number % 2 == 0);
    console.log('Even Numbers: ' + the_evens);
}

getEvenNumbers(arr);
// console.log(getEvenNumbers())