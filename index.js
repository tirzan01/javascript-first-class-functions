function receivesAFunction(anotherFunction){
    anotherFunction()
}

function returnsANamedFunction (name=()=>{return 'thomas'}){
    return name
}

function returnsAnAnonymousFunction(){
    return function(){}
}