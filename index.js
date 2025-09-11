function factorial(n){
    if(n===1)
        return 1;
    return n*factorial(n-1)
}
let fact=factorial(3)
console.log(fact)
