//Enter the array size
const arraySize = 5;

//Enter how many times you want to rotate
let rotate = 4;

const arr = [1,2,3,4,5];


while(rotate--){
    const value = arr[0];
    arr.shift();
    arr.push(value);
}

console.log(arr);
