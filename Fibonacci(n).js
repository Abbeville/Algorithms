function fib(n){

    if(n == 0)
        return 0

    a = 0; b = 1;
    i = 2

    while(i <= n){
        newFIb = a + b
        a = b
        b = newFIb

        i++
    }

    return b
}

let n = 1

console.log(fib(n))
