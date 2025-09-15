array and strings

1.Use a for loop to print numbers from 1 through 10.

for(i=1;i<=10;i++){
    console.log(i)
}
------------------------------------------------------------------------
2: Print even numbers between 1 and 20;

for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
------------------------------------------------------------------------
3: Print the multiplication table of 5.

for(i=5;i<=50;i+=5){
    console.log(i)
}

------------------------------------------------------------------------

4: Print each character of the string "batman"

let str='batman'
let arr=str.split('')
for(i=0;i<arr.length;i++){
    console.log(arr[i])
}
********
let str='batman'
for(i=0;i<str.length;i++){
    console.log(str[i])
}
------------------------------------------------------------------------
5: Given an array [2,4,6,8], print the square of each number

let arr=[2,4,6,8]
for(i of arr){
    console.log(i*i)
}
***********
let arr=[2,4,6,8]
let squares=[];
for(i of arr){
    squares.push(i*i)
}
console.log(squares)
**************

let arr=[2,4,6,8]
let squares=arr.map(i=>i*i)
console.log(squares)

------------------------------------------------------------------------
6: Given [5,10,15,20], find the sum of all numbers.

let arr=[5,10,15,20];
let sum=0
let sum2=0;
for(i of arr){
    sum=sum+i
}
for(i=0;i<arr.length;i++){
  sum2+=arr[i]
}
console.log(sum2)

------------------------------------------------------------------------
7: Print numbers from 10 down to 1 (reverse order)

for (i = 10; i >= 1; i--) {
    console.log(i);
}



------------------------------------------------------------------------
8: Count how many vowels are in "alfred"

let str='alfred'
let vowels='aeiou'
count=0;
for(i of str){
    if(vowels.includes(i))
    count+=1;
}
console.log(count)
------------------------------------------------------------------------
9: Print the factorial of 5.

let a = 5;
let fact = 1;

for (i = 1; i <= a; i++) {
    fact = fact * i;
}

console.log(fact);
------------------------------------------------------------------------
TWO Pointers problems
------------------------------------------------------------------------
Find a Pair with Target Sum
let arr = [1, 2, 4, 7, 11, 15];
let target = 15;
let found = false;





------------------------------------------------------------------------
------------------------------------------------------------------------
------------------------------------------------------------------------
------------------------------------------------------------------------
------------------------------------------------------------------------
------------------------------------------------------------------------
------------------------------------------------------------------------
------------------------------------------------------------------------
------------------------------------------------------------------------
------------------------------------------------------------------------
------------------------------------------------------------------------
