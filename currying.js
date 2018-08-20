var sum = function(...args) {
    if (args.length === 4) {
        return args.reduce((a,v)=>a+v);
    } else {
        return function(...args2) { 
            args.push(...args2); 
            return sum.apply(this, args);
        };
    }
}
console.log(sum(1,2, 3,4));
console.log(sum(1,2)(3, 4));
console.log(sum(1)(2)(3)(4)); 
console.log(sum(1,2, 3)(4));
