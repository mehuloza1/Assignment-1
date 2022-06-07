let getEvenNumbers = () => {
    let arr = [4, 5, 7, 8, 14, 45, 76, 67, 66, 64];

    let the_evens = arr.filter(number => number % 2 == 0);
    document.write('Even Numbers: ' + the_evens);
}

getEvenNumbers(14);
console.log(getEvenNumbers())