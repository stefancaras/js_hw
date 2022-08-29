// ONE
function oneToTwenty(a, b) {
    a = Number(document.getElementById("number1").value);
    b = Number(document.getElementById("number2").value); 
    let array = [];
    let arrayOdd = [];
    for (let i = a; i <= b; i++) {
            array.push(i);
        if (i % 2 == 1) {
            arrayOdd.push(i);
        }
    }
    console.log(array);
    console.log(arrayOdd);
    document.getElementById("output").innerHTML = 
    `Numerele de la ${a} la ${b} sunt: <br> ${array.join(', ')} <br> <br>
    Numerele impare de la ${a} la ${b} sunt: <br> ${arrayOdd.join(', ')}`;
}
// TWO
let list = [];
function txtToArray() {
    let txt = document.getElementById("list").value;
    list = txt.split(/[ ,]+/);
    list = list.map(str => {return Number(str)});
    console.log(list);
    document.getElementById("outputList").innerHTML = 
    `Lista e: <br> [${list.join(', ')}]`;
    document.getElementById("list").value = null;
}
// 2A
function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum)
    document.getElementById("outputSum").innerHTML = 
    `Suma numerelor e: ${sum}`;
    return sum;
}
// Bubble Sort
function bubbleSort(array) {
    while(true) {
        let count = 0;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                count++;
            }
        }
        if (count == 0) {
            break;
        }
    }
    return array;
}
// 2B
function largestNumber() {
    console.log(bubbleSort(list).at(-1))
    document.getElementById("outputMax").innerHTML = 
    `Numărul cel mai mare e: ${bubbleSort(list).at(-1)}`;
}
// 2C
function howMany(array) {
    array = bubbleSort(array);
    let msgArray = [];
    for (let i = 0; i < array.length; i++) {
        let countEl = 1;
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j] && i != j) {
                countEl++;
                i++;
            }
        } 
        if (countEl == 1) {
            console.log(`${array[i]} appears one time`);
            msgArray.push(`<br>Numărul ${array[i]} apare o dată`);
        } else {
            console.log(`${array[i]} appears ${countEl} times`);
            msgArray.push(`<br>Numărul ${array[i]} apare de ${countEl} ori`);
        }
    }
    document.getElementById("outputRep").innerHTML = msgArray;
}
// THREE
function fibonacci(nth) {
    let arr = [0, 1];
    for (let i = 2; i < nth; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr;
}
function getFibList() {
    let nth = document.getElementById("fibonacciInput").value;
    let fibList = fibonacci(nth)
    console.log(fibList);
    document.getElementById("outputFibonacci").innerHTML = 
    `Lista e: <br> [${fibList.join(', ')}]`;
    document.getElementById("fibonacciInput").value = null;
}
// FOUR
function fizzbuzz(n){
    let array = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            array.push('Fizz Buzz');
        } else if (i % 3 == 0) {
            array.push('Fizz');
        } else if (i % 5 == 0) {
            array.push('Buzz');
        } else {
            array.push(i);
        }
    }
    return array;
}
function getFizzList() {
    let nth = document.getElementById("fizzbuzzInput").value;
    let fizzList = fizzbuzz(nth);
    console.log(fizzList);
    document.getElementById("outputFizzbuzz").innerHTML = 
    `Lista e: <br> [${fizzList.join(', ')}]`;
    document.getElementById("fizzbuzzInput").value = null;
}