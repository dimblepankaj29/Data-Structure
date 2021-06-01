var counter = function (){
    let cnt =0
    return function (){return cnt+=1}
}()

console.log(counter())
console.log(counter())
console.log(counter())