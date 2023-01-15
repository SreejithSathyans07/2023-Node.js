//Rest operator is used to combine items together

function printAllArguments(...args){
    args.forEach(arg => console.log(arg));
}

printAllArguments(1, 2, 3, 4);
printAllArguments("Jon","Tyrian","Mike");
printAllArguments(1, 2, true, true, "hello", "World");