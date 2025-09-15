Problem 1: Reverse String,
 
 let str = "alfred";
let rev = str.split('').reverse().join('');
console.log(rev);
*********************************************
let str = 'alfred';
let rev = [];
for (i = str.length - 1; i >= 0; i--) {
    rev.push(str[i]);
}
let revs = rev.join('');
console.log(revs);

--------------------------------------------- RECURSION
let str="likith";

function reversal(s){
    if(s==="")return "";
    return reversal(s.slice(1))+s[0];
}
let a=reversal(str)
console.log(a)

-----------------------------------------------------------------------------
Problem 2: Palindrome Check

let str="rac";
let rev=str.toLowerCase().split('').reverse().join('');
console.log(rev)

----------------------------
let str="rac";

let box=str.split('');
rev=box.reverse().join('');

if(str===rev)
    console.log('pal')
---------------------------- two pointer
let str="racecar";
let ispalin=true;

for(l=0,r=str.length-1;l<r;l++,r--){
    if(str[l]!==str[r]){
        ispalin=false;
        break;
    }
}
console.log(ispalin)

-------------------------------------------------

TWO Pointers problems





