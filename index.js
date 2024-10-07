function routine(item){
    console.log("Today's task is to" + item);
}
function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return receivesAFunction;
}
function returnsAnAnonymousFunction(){
    return ()=>console.log("Hello");
}