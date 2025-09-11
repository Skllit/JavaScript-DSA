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
-----------------------------------------------------------------------------
